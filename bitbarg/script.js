var btn_price = 100800;

document.getElementById("in1").value = btn_price.toLocaleString();

var btn_price2 = 8226439650;

document.getElementById("wrere").value = btn_price2.toLocaleString();


function mohasebe() {

    let tedad = document.getElementById("tedad").value;

    document.getElementById("in1").value = (tedad * btn_price).toLocaleString();


}





function btns(bbt) {

    document.getElementById("button3").removeAttribute("class");
    document.getElementById("button3").setAttribute("class", "button2");


    document.getElementById("button2").removeAttribute("class");
    document.getElementById("button2").setAttribute("class", "button2");


    document.getElementById("button1").removeAttribute("class");
    document.getElementById("button1").setAttribute("class", "button2");


    if (bbt == 1) {

        document.getElementById("button3").removeAttribute("class");
        document.getElementById("button3").setAttribute("class", "button3");
        document.getElementById("booo").innerHTML = "خرید ارز";
        var btn_price = 100800;
        document.getElementById("in1").value = btn_price.toLocaleString();
        document.getElementById("sp1").innerHTML = "تومان";
        document.getElementById("sp1").style.fontSize = "17px";
        document.getElementById("sp1").style.marginLeft = "-96px";
        document.getElementById("sp2").innerHTML = "TOMAN";
        document.getElementById("sp2").style.marginLeft = "-100px";
        document.getElementById("bar1").innerHTML = "پرداخت کنید";
        document.getElementById("bar2").innerHTML = "واریز کنید";
        document.getElementById("emoj").style.marginTop = "1px";
        document.getElementById("emoj").style.marginLeft = "-42px";
        document.getElementById("inmo").style.display = "none";
        document.getElementById("booo1").style.display = "none";
        // document.getElementById("im1").src = "irr.webp";










    }

    if (bbt == 2) {

        document.getElementById("button2").removeAttribute("class");
        document.getElementById("button2").setAttribute("class", "button3");
        document.getElementById("booo").innerHTML = "فروش ارز";
        var btn_price = 1;
        document.getElementById("in1").value = btn_price.toLocaleString();
        document.getElementById("sp1").innerHTML = "بیت کوین ";
        document.getElementById("sp1").style.fontSize = "17px";
        document.getElementById("sp1").style.marginLeft = "-120px";
        document.getElementById("sp1").style.marginTop = "-63px";
        document.getElementById("sp2").innerHTML = "BTC";
        document.getElementById("sp2").style.marginLeft = "-76px";
        document.getElementById("bar1").innerHTML = "واریز کنید";
        document.getElementById("bar2").innerHTML = "دریافت کنید";
        document.getElementById("emoj").style.marginTop = "-107px";
        document.getElementById("emoj").style.marginLeft = "-28px";
        document.getElementById("inmo").style.display = "none";
        document.getElementById("booo1").style.display = "none";
        document.getElementById("im1").src = "irr.webp";










    }


    if (bbt == 3) {

        document.getElementById("button1").removeAttribute("class");
        document.getElementById("button1").setAttribute("class", "button3");
        document.getElementById("booo").innerHTML = "تبدیل ارز";
        document.getElementById("inmo").style.display = "block";
        document.getElementById("booo1").style.display = "block";
        document.getElementById("booo1").style.width = "40px";
        document.getElementById("booo1").style.height = "40px";
        document.getElementById("booo1").style.borderRadius = "100%";
        document.getElementById("booo1").style.position = "absolute";
        document.getElementById("booo1").style.marginTop = "-126px";
        document.getElementById("booo1").style.marginLeft = "280px";
        document.getElementById("booo1").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("booo1").style.border = "1px solid rgb(199, 199, 199)";
        document.getElementById("emojjj").style.display = "block";
        document.getElementById("emojjj").style.marginTop = "-17px";
        document.getElementById("emojjj").style.marginLeft = "-16px";
        document.getElementById("cir").style.display = "none";
        document.getElementById("cir10").style.display = "none";
        document.getElementById("im1").src = "btc.webp";











    }






}



