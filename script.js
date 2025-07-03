const input = document.querySelector("#input");
const img = document.querySelector("#image");

function generate() {

    if (input.value === "") {
        alert("Please enter a value");
    } else {
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(input.value);
        img.src = url;
        img.style.display = "block";
    }
}

document.querySelector("#generate-btn").addEventListener("click", generate);