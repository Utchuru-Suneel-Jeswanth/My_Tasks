function fetchImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            let img = `<img src = ${data.message}>`;
            console.log(data.message);
            let div = document.getElementById("image");
            div.innerHTML = img;

        })
        .catch((err) => console.log("Image is not found"));
}