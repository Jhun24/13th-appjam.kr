/**
 * Created by janghunlee on 2017. 8. 11..
 */

module.exports = auth;

function auth(app){
    "use strict";
    app.post('/auth/login',(req,res)=>{
        console.log("Auth");
       var ps = req.body.password;
       var d = new Date();
       var day = 12;
       var time = 14;
       var min = 0;
       var sec = 0;

       var checktime = false;

       console.log(ps);

       if(sec - d.getSeconds() < 0){
           min--;
       }
       if(min - d.getMinutes() < 0){
           time--;
       }
       if(time - d.getHours() < 0){
           day--;
       }
       if(day - d.getDate() < 0){
            day = 0;
            time = 0;
            min = 0;
            sec = 0;

            checktime = true;
       }
       if(ps == "두부한모에4500원" || checktime == true){
           console.log("Success");
            res.send("/topic?query=fadfasflkaslkfsjlkdsmdsa");
       }
       else{
           console.log("Fail");
           res.send("http://www.ilbe.com/");
       }
    });
}