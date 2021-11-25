const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage= async function(){
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
    
}



const selectRandomImage= function(images){
    const randomIndex = Math.floor(Math.random()*images.length);
    //console.log(randomIndex);
    // Error here fixed...once variable images is declared above you can now treat it as normal javascript and use index number as per usual. 
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage){
    const author= randomImage.author;
    // because images variable declared you can use .notation as per usual to handle parameters.
    console.log(author);
    const imageAddress = randomImage.download_url;
    console.log(imageAddress);
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

getImage();


