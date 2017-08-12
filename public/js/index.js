/**
 * Created by janghunlee on 2017. 8. 11..
 */

var d = new Date();

var day = d.getDate();
var min = d.getMinutes();
var sec = d.getSeconds();
var hour = d.getHours();


var hDay = 13;
var hMin = 0;
var hSec = 30;
var hHour = 8;

var returnDay = hDay - day;
var returnHour = hHour - hour;
var returnMin = hMin - min;
var returnSec = hSec - sec;

$(".btn").click(function(){
    "use strict";
    var text = $(this).text();

    if(text == "생활"){
        window.open('https://goo.gl/forms/7e9jDgqKaqoPP2G72 ', 'newWindow');
        window.open('http://169.56.126.158/drive/index.php/s/qU28j5i8Ns9GIsI', 'secWindow');
    }
    else if(text == "게임"){
        window.open('https://goo.gl/forms/7e9jDgqKaqoPP2G72 ', 'newWindow');
        window.open("http://169.56.126.158/drive/index.php/s/nBHRsPy2HfoqAEu", 'secWindow');

    }
    else if(text == "IOT"){
        window.open('https://goo.gl/forms/7e9jDgqKaqoPP2G72 ', 'newWindow');
        window.open('http://169.56.126.158/drive/index.php/s/QLY1EHu9ZxhcIet', 'secWindow');
    }
    else if(text == "AI"){
        window.open('https://goo.gl/forms/7e9jDgqKaqoPP2G72 ', 'newWindow');
        window.open('http://169.56.126.158/drive/index.php/s/RIJBJzCVLulV9SU', 'secWindow');
    }
    else if(text == "페이스북"){
        location.href="https://www.facebook.com/smarteenappclub";
    }
    else if(text == "서비스조사"){
        location.href="https://docs.google.com/forms/d/e/1FAIpQLSdpRNgY8IH1cfw2u4_QywD4isix6l0B0pp8VHbIgqMBw-gnIg/viewform";
    }
    else if(text == "이벤트 및 규칙"){
        location.href="/event";
    }
    else if(text == "주제확인"){
        location.href="/topic"
    }
    else{
        alert("잘못된 접근 방식입니다");
        window.close();
    }
});

$(document).ready(function(){
    "use strict";
    console.log("F12 꺼라..")

    console.log("Day : "+returnDay+" Hour : "+returnHour+" MIN : "+returnMin+" SEC : "+returnSec);
    if(returnSec < 0){
        returnSec = 59+returnSec;
        returnMin--;
    }

    if(returnMin < 0) {
        returnMin = 59 + returnMin;
        returnHour--;
    }

    if(returnHour < 0) {
        returnHour = 23+returnHour;
        returnDay--;
    }

});

function time(){
    "use strict";
    returnSec--;
    if(returnSec < 0){
        returnSec = 59;
        returnMin--;
    }

    if(returnMin < 0) {
        returnMin = 59;
        returnHour--;
    }

    if(returnHour < 0) {
        returnHour = 23;
        returnDay--;
    }

    if(returnDay < 0){
        returnHour = 0;
        returnSec = 0;
        returnMin = 0;
        returnDay = 0;
    }
    if(returnHour.toString()[1] == undefined){
        $(".hour-start").css({
            "background-image":"url(\"css/img/number/0.png\")"
        });
        $(".hour-last").css({
            "background-image":"url(\"css/img/number/"+returnHour.toString()[0]+".png\")"
        });
    }
    else{
        $(".hour-start").css({
            "background-image":"url(\"css/img/number/"+returnHour.toString()[0]+".png\")"
        });
        $(".hour-last").css({
            "background-image":"url(\"css/img/number/"+returnHour.toString()[1]+".png\")"
        });
    }

    if(returnMin.toString()[1] == undefined){
        $(".min-start").css({
            "background-image":"url(\"css/img/number/0.png\")"
        });
        $(".min-last").css({
            "background-image":"url(\"css/img/number/"+returnMin.toString()[0]+".png\")"
        });
    }
    else{
        $(".min-start").css({
            "background-image":"url(\"css/img/number/"+returnMin.toString()[0]+".png\")"
        });
        $(".min-last").css({
            "background-image":"url(\"css/img/number/"+returnMin.toString()[1]+".png\")"
        });
    }



    if(returnSec.toString()[1] == undefined){
        $(".sec-start").css({
            "background-image":"url(\"css/img/number/0.png\")"
        });
        $(".sec-last").css({
            "background-image":"url(\"css/img/number/"+returnSec.toString()[0]+".png\")"
        });
    }
    else{
        $(".sec-start").css({
            "background-image":"url(\"css/img/number/"+returnSec.toString()[0]+".png\")"
        });
        $(".sec-last").css({
            "background-image":"url(\"css/img/number/"+returnSec.toString()[1]+".png\")"
        });
    }


}


setInterval(time,1000);
