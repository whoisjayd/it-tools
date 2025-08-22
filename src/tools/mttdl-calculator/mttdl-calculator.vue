<script setup>
const form = ref({
  raidLevel: 'RAID 5',
  numDrives: 6,
  mtbf: 1000000,
  rebuildTime: 24,
  ber: -15,
  driveCapacityTB: 4,
  yearsToSimulate: 5,
});

const raidOptions = [
  { label: 'RAID 0', value: 'RAID 0' },
  { label: 'RAID 1', value: 'RAID 1' },
  { label: 'RAID 5', value: 'RAID 5' },
  { label: 'RAID 6', value: 'RAID 6' },
  { label: 'RAID 10', value: 'RAID 10' },
  { label: 'RAID-Z1', value: 'RAID-Z1' },
  { label: 'RAID-Z2', value: 'RAID-Z2' },
  { label: 'RAID-Z3', value: 'RAID-Z3' },
  { label: 'RAID 50', value: 'RAID 50' },
];

function basicMTTDL(raidLevel, numDrives, mtbf, rebuildTime) {
  const λ = 1 / mtbf;
  switch (raidLevel) {
    case 'RAID 0':
      return mtbf / numDrives;
    case 'RAID 1':
      return mtbf / (numDrives * (numDrives - 1));
    case 'RAID 5':
      return mtbf / (numDrives * (numDrives - 1) * λ * rebuildTime);
    case 'RAID 6':
      return mtbf / (numDrives * (numDrives - 1) * (numDrives - 2) * λ * rebuildTime);
    case 'RAID 10':
      return mtbf / (numDrives / 2);
    default:
      return 0;
  }
}

function getMTTDL({ raidLevel, numDrives, mtbf, rebuildTime, ber, driveCapacityTB }) {
  const λ = 1 / mtbf;
  const bitsPerDrive = driveCapacityTB * 1e12 * 8;
  const unrecoverableReadProb = 1 - (1 - 10 ** ber) ** bitsPerDrive;
  const groupSize = 5;
  const numGroups = Math.floor(numDrives / groupSize);

  switch (raidLevel) {
    case 'RAID-Z1':
      return mtbf / (numDrives * (numDrives - 1) * λ * rebuildTime * unrecoverableReadProb);
    case 'RAID-Z2':
      return mtbf / (numDrives * (numDrives - 1) * (numDrives - 2) * λ * rebuildTime * unrecoverableReadProb);
    case 'RAID-Z3':
      return mtbf / (numDrives * (numDrives - 1) * (numDrives - 2) * (numDrives - 3) * λ * rebuildTime * unrecoverableReadProb);
    case 'RAID 50':
      return mtbf / (numGroups * groupSize * (groupSize - 1) * λ * rebuildTime);
    default:
      return basicMTTDL(raidLevel, numDrives, mtbf, rebuildTime);
  }
}

const computedMTTDL = computed(() => {
  const hours = getMTTDL(form.value);
  return {
    hours,
    years: hours / 8760,
  };
});

function simulateFailureProbability(mttdl, years) {
  const hours = years * 365.25 * 24;
  return 1 - Math.exp(-hours / mttdl);
}

const failureProbability = computed(() =>
  simulateFailureProbability(computedMTTDL.value.hours, form.value.yearsToSimulate),
);
</script>

<template>
  <NCard title="MTTDL & Failure Probability Calculator" style="max-width: 600px; margin: auto;">
    <NForm :model="form" label-width="190px" label-placement="left">
      <NFormItem label="RAID Level:">
        <NSelect v-model:value="form.raidLevel" :options="raidOptions" placeholder="Select RAID level" />
      </NFormItem>
      <NFormItem label="Number of Drives:">
        <NInputNumber v-model:value="form.numDrives" :min="1" />
      </NFormItem>
      <NFormItem label="Drive MTBF (hours):">
        <NInputNumber v-model:value="form.mtbf" :min="1" />
      </NFormItem>
      <NFormItem label="Rebuild Time (hours):">
        <NInputNumber v-model:value="form.rebuildTime" :min="1" />
      </NFormItem>
      <NFormItem label="Bit Error Rate (BER in 1eX):">
        <NInputNumber v-model:value="form.ber" :min="-18" :max="-6" />
      </NFormItem>
      <NFormItem label="Drive Capacity (TB):">
        <NInputNumber v-model:value="form.driveCapacityTB" :min="1" />
      </NFormItem>
      <NFormItem label="Years for Failure probability:">
        <NInputNumber v-model:value="form.yearsToSimulate" :min="1" />
      </NFormItem>

      <NDivider />

      <NFormItem label="MTTDL (hours):">
        <input-copyable :value="computedMTTDL.hours.toFixed(2)" />
      </NFormItem>
      <NFormItem label="MTTDL (years):">
        <input-copyable :value="computedMTTDL.years.toFixed(2)" />
      </NFormItem>
      <NFormItem label="Failure Probability:">
        <input-copyable :value="`${(failureProbability * 100).toFixed(4)}%`" />
      </NFormItem>

      <NDivider />

      <details>
        <summary>🧠 Key Terms Explained</summary>

        <h3>💾 RAID Level</h3>
        <p>RAID (Redundant Array of Independent Disks) is a method of combining multiple physical drives into one logical unit to improve performance, redundancy, or both.</p>
        <table border="1" cellpadding="8" cellspacing="0">
          <thead>
            <tr>
              <th>RAID Level</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RAID 0</td>
              <td>Striping only. No redundancy. Fast but risky—if one drive fails, all data is lost.</td>
            </tr>
            <tr>
              <td>RAID 1</td>
              <td>Mirroring. Data is duplicated across drives. High redundancy, low capacity efficiency.</td>
            </tr>
            <tr>
              <td>RAID 5</td>
              <td>Striping with parity. Can tolerate one drive failure. Balanced speed and redundancy.</td>
            </tr>
            <tr>
              <td>RAID 6</td>
              <td>Double parity. Can survive two drive failures.</td>
            </tr>
            <tr>
              <td>RAID 10</td>
              <td>Mirrored pairs striped together. High performance and redundancy.</td>
            </tr>
            <tr>
              <td>RAID-Z1/Z2/Z3</td>
              <td>ZFS-based RAID levels with single, double, or triple parity. Designed for data integrity.</td>
            </tr>
            <tr>
              <td>RAID 50</td>
              <td>Stripe of RAID 5 arrays. Combines performance of RAID 0 with redundancy of RAID 5.</td>
            </tr>
          </tbody>
        </table>

        <h3>⏱️ MTBF (Mean Time Between Failures)</h3>
        <p>The average time (in hours) a drive is expected to operate before failing. Higher MTBF means more reliable hardware.</p>

        <h3>🔁 Rebuild Time</h3>
        <p>The time required to reconstruct data on a replacement drive after a failure. Longer rebuild times increase the risk of a second failure during recovery.</p>

        <h3>📉 MTTDL (Mean Time To Data Loss)</h3>
        <p>A statistical estimate of how long a RAID system can operate before data loss occurs. It considers drive failures, rebuild time, and RAID redundancy. Higher MTTDL means a safer system.</p>

        <h3>🧮 Bit Error Rate (BER)</h3>
        <p>The probability that a bit read from a disk will be incorrect due to hardware limitations. Even tiny BERs (like 1 in a trillion) can cause issues during rebuilds, especially with large drives.</p>

        <h3>🧠 Unrecoverable Read Error (URE)</h3>
        <p>Occurs when a drive fails to read a sector during rebuild. BER contributes to URE risk, which can compromise RAID recovery.</p>

        <h3>📦 Drive Capacity (TB)</h3>
        <p>Total storage per drive. Larger drives take longer to rebuild and are more susceptible to BER-related errors.</p>

        <h3>📈 Failure Probability</h3>
        <p>The chance that the RAID system will experience data loss over a given time period (e.g., 5 years). Calculated using MTTDL and exponential failure models.</p>
      </details>
    </NForm>
  </NCard>
</template>
