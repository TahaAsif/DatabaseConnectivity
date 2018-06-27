var bodyParser=require('body-parser');


var data =[{username: 'owais', email:'abc',password:'abc'},
{username: 'bilal', email:'abcd',password:'abcd'}];

var data1 =[];



var urlencodedParser=bodyParser.urlencoded({extended:false});
let notUrlEncodedParser = bodyParser.urlencoded({extended: true});



module.exports=function(app){

    // console.log('chala1'+data);
    // str = JSON.stringify(data);
    app.get('/todo',function(req,res){
    res.render('todo',{abc:data1})

  });


  app.get('/views/loginpage', function(req,res){
    // console.log('chala2'+data);
    res.render('loginpage',{abc:data1});

  });





app.post('/todo',urlencodedParser,function(req,res){
  str = JSON.stringify(req.body);
    data.push(req.body);
    // console.log('chala3'+str);
    res.json(data);

});


app.post('/views/loginpage',notUrlEncodedParser, function(req,res){
  // var needle = req.body.params.email; // what to look for

    str = JSON.stringify(req.body);
    // console.log(req.body.email);
    // console.log('chala4'+str);

    var email = req.body.email;
    var password = req.body.password;

    for(var i=0; i<data.length; i++){
      if(data[i].email === email && data[i].password === password){
        // console.log(data[i].username);
        req.body.username = data[i].username;
        data1.push(req.body);
        res.json(data[i].username);
      }
      if(i==data.length) {
        window.alert("No found");
      }
    }

    //data.push(req.body);

});





app.delete('/todo/:item',function(req,res){

    data=data.filter(function(todo){
        return todo.item.replace(/ /g,'-') !== req.params.item;
    });

    res.json(data);

});



};
