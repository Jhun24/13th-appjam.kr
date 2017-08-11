/**
 * Created by janghunlee on 2017. 8. 11..
 */
module.exports = route;

function route(app){
    "use strict";
    app.get('/',(req,res)=>{
        res.render('index.html');
    });

    app.get('/event',(req,res)=>{
        res.render('event.html');
    });

    app.get('/topic',(req,res)=>{
        res.render('rule.html');
    });
}