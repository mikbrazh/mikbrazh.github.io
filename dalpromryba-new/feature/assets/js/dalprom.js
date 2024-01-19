function setMap(value){
  let addr = new Array();
  addr[1] = "https://yandex.ru/map-widget/v1/?um=constructor%3A0c586a6f8a9e4dece76ec9ecb69ab99d3e757206ff6dd30759efd0cd27aad0d4&amp;source=constructor&scroll=false";
  addr[2] = "https://yandex.ru/map-widget/v1/?um=constructor%3A97a5dc9567d4a42b724cddceaf4112ee19b6b632c422e61d53891e446e095d92&amp;source=constructor&scroll=false";
  document.getElementById("mapifr").setAttribute("src",addr[value]);
}
