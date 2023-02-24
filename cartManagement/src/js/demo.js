console.log("tanvi");
let currentItem =() =>
{
      alert('i m in');
}
document.querySelector(".products").innerHTML += `<p class="demo" onclick=currentItem()>click me</p>`;
