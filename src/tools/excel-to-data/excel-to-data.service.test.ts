import { describe, expect, it } from 'vitest';
import yaml from 'yaml';
import type { ExportFormat } from './excel-to-data.service';
import { objectArrayToData } from './excel-to-data.service';

describe('objectArrayToData', () => {
  const sampleData = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ];
  const tableName = 'users';

  it('should export JSON format correctly', () => {
    const result = objectArrayToData(sampleData, 'json', tableName);
    expect(result).toBe(JSON.stringify(sampleData, null, 2));
  });

  it('should export YAML format correctly', () => {
    const result = objectArrayToData(sampleData, 'yaml', tableName);
    expect(result).toBe(yaml.stringify(sampleData));
  });

  it('should export SQL format correctly', () => {
    const result = objectArrayToData(sampleData, 'sql', tableName);
    expect(result).toBe(`INSERT INTO users (id, name, age) VALUES (1, 'Alice', 25);
INSERT INTO users (id, name, age) VALUES (2, 'Bob', 30);`);
  });

  it('should export CSV format correctly', () => {
    const result = objectArrayToData(sampleData, 'csv', tableName);
    expect(result).toContain('"id","name","age"');
    expect(result).toContain('"1","Alice","25"');
    expect(result).toContain('"2","Bob","30"');
  });

  it('should export Markdown format correctly', () => {
    const result = objectArrayToData(sampleData, 'markdown', tableName);
    expect(result).toContain('| id | name | age |');
    expect(result).toContain('| --- | --- | --- |');
    expect(result).toContain('| 1 | Alice | 25 |');
    expect(result).toContain('| 2 | Bob | 30 |');
  });

  it('should return empty string for unknown format', () => {
    const result = objectArrayToData(sampleData, 'unknown' as ExportFormat, tableName);
    expect(result).toBe('');
  });
});
