function changeModalImage1(imageUrl) {
  let modalImage = document.querySelector("#modal-image");
  modalImage.src = imageUrl;
}

function openImage() {
  let modalImage = document.getElementById("modal-image").src;
  window.open(modalImage, "_blank");
}

function setDownloadImage(imageUrl) {
  let downloadLink = document.querySelector("#btn-download");
  downloadLink.href = imageUrl;
  // downloadLink.href = `${imageUrl}`;
  // downloadLink.setAttribute("href", imageUrl)

  // anchor.setAttribute('href', '<https://www.example.com>');
  // or
  // anchor.href = '<https://www.example.com>';
}