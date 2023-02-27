var succesPrice = document.querySelector(".succes");
var errorPrice = document.querySelector(".error");

var yourMoney = prompt("Sizda mavjud mablag' miqdorini kiriting 'so'mda'");

var price = 500;
price2 = 250;
price3 = 120;

var total = (price + price2) * 10650.34 + price3 * 11650.03;
console.log(total);

if (yourMoney >= total) {
  succesPrice.textContent = "Oq yo'l, Alisher";
} else {
  errorPrice.textContent = "Alisher, ozgina sabr qilish kerak ekan!";
}
