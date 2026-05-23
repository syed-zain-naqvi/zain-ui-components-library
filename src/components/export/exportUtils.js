export const exportToCSV = (data, fileName = 'export') => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  const headers = Object.keys(data[0]);
  const rows = data.map((item) =>
    headers.map((header) => {
      const value = item[header];
      // Escape quotes and wrap in quotes if contains comma
      if (typeof value === 'string' && value.includes(',')) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    })
  );

  const csv = [
    headers.join(','),
    ...rows.map((row) => row.join(',')),
  ].join('\n');

  downloadFile(csv, `${fileName}.csv`, 'text/csv');
};

export const exportToJSON = (data, fileName = 'export') => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  const json = JSON.stringify(data, null, 2);
  downloadFile(json, `${fileName}.json`, 'application/json');
};

const downloadFile = (content, fileName, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
