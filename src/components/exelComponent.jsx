import ExcelJS from 'exceljs';

const convertToExcelAndDownload = async (data, filename, sheetname) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetname);

  // Mengatur judul kolom
  const headers = Object.keys(data[0]);
  worksheet.addRow(headers);

  // Mengatur gaya pada judul kolom
  const headerRow = worksheet.getRow(1);
  headerRow.font = { bold: true };
  headerRow.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF0000' } // Contoh latar merah
    };
  });

  // Mengatur data
  data.forEach((item) => {
    worksheet.addRow(Object.values(item));
  });

  // Mengatur gaya pada seluruh data
  const dataRows = worksheet.getRows(2, data.length + 1);
  dataRows.forEach((row) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  });

  // Mengatur lebar kolom
  worksheet.columns.forEach((column) => {
    column.width = 15;
  });

  // Menghasilkan file Excel
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
};

export default convertToExcelAndDownload;
