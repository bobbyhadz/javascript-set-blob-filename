console.log('bobbyhadz.com');

function downLoadFile(data, fileName) {
  const anchorElement = document.createElement('a');

  document.body.appendChild(anchorElement);

  anchorElement.style.display = 'none';

  const json = JSON.stringify(data);

  const blob = new Blob([json], {
    type: 'application/octet-stream',
  });

  const url = window.URL.createObjectURL(blob);

  anchorElement.href = url;
  anchorElement.download = fileName;
  anchorElement.click();

  window.URL.revokeObjectURL(url);
}

const obj = {
  id: 1,
  site: 'bobbyhadz.com',
  message: 'hello world',
};

downLoadFile(obj, 'my-file.json');
