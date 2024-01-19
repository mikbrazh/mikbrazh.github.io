function scrollProduct()
{
    let offsetTop = document.getElementById('product').offsetTop;
    $('body,html').animate({scrollTop: offsetTop}, 1000);
}

$(document).ready(() =>
{

})