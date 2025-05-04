import yaml from 'yaml';

export type ExportFormat = 'json' | 'yaml' | 'sql' | 'csv' | 'tsv' | 'csv_semicolon' | 'markdown';

function escapeSQL(value: any) {
  return typeof value === 'string' ? `'${value.replace(/'/g, '\'\'')}'` : value;
}

function escapeCSV(value: any) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function escapeMarkdown(value: any) {
  return String(value).replace(/\|/g, '\\|').replace(/`/g, '\\`');
}

export function objectArrayToData(data: object[], format: ExportFormat, tableName: string) {
  switch (format) {
    case 'json':
      return JSON.stringify(data, null, 2);
    case 'yaml':
      return yaml.stringify(data);
    case 'sql':
      return data.map((row) => {
        const keys = Object.keys(row).map(k => k?.replace(/\s/g, '')).join(', ');
        const values = Object.values(row).map(escapeSQL).join(', ');
        return `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;
      }).join('\n');
    case 'csv':
    case 'tsv':
    case 'csv_semicolon':
      // eslint-disable-next-line no-case-declarations
      let sep = ',';
      if (format === 'tsv') {
        sep = '\t';
      }
      else if (format === 'csv_semicolon') {
        sep = ';';
      }
      return [
        Object.keys(data[0]).map(escapeCSV).join(sep),
        ...data.map(row => Object.values(row).map(escapeCSV).join(sep)),
      ].join('\n');
    case 'markdown':
      return `| ${Object.keys(data[0]).map(escapeMarkdown).join(' | ')} |\n| ${Object.keys(data[0]).map(() => '---').join(' | ')} |\n${
                 data.map(row => `| ${Object.values(row).map(escapeMarkdown).join(' | ')} |`).join('\n')}`;
    default:
      return '';
  }
}
