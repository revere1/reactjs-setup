const exportCSV = (JSONData, ReportTitle, ShowLabel) => {
  const arrData = JSONData;

  let CSV = '';

  CSV += `${ReportTitle} \r\n\n`;

  if (ShowLabel) {
    let row = '';

    for (const index in arrData[0]) {
      row += `${index} ,`;
    }

    row = row.slice(0, -1);

    CSV += `${row} \r\n`;
  }

  for (let i = 0; i < arrData.length; i += 1) {
    let row = '';

    for (const index in arrData[i]) {
      row += `${arrData[i][index]} ,`;
    }

    row.slice(0, row.length - 1);

    CSV += `${row} \r\n`;
  }

  if (CSV === '') {
    console.log('Invalid data');
    return;
  }

  let fileName = 'SPC_APP_';
  fileName += ReportTitle.replace(/ /g, '_');

  const uri = `data:text/csv;charset=utf-8, ${escape(CSV)}`;

  const link = document.createElement('a');
  link.href = uri;

  link.style = 'visibility:hidden';
  link.download = `${fileName}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default exportCSV;
