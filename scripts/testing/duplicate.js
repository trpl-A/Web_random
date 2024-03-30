
let urls = [
    "https://wallpapercave.com/wp/DgVRjoJ.jpg"
]


function addContent(){
    // let url = "https://cdn.givemesport.com/wp-content/uploads/2022/01/21_12_23_a6591d3fa95494b7392a30d37c77f0e5_960-3-1200x900-c-default.jpg"
    let url = "https://wallpapercave.com/wp/DgVRjoJ.jpg"

    let block = `<div class="col">
    <div class="card shadow-sm">
    <div onclick="changeModalImage1('${url}'), setDownloadImage('${url}')" 
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img id="image1" class="bd-placeholder-img card-img-top" 
        src="${url}" 
        alt="image">
    </div>
    </div>
    </div>`

    let galleryBlock = document.getElementById("gallery-section")
    // galleryBlock.innerHTML = "testing"
    console.log(galleryBlock)
}
addContent()

