$(document).ready(function(){

  $('form').on('submit', function(){

    var x = document.forms["myForm"]["email"].value;
    var p = document.forms["myForm"]["password"].value;
      // var e = $('form input');
      // var p=  $('form input');
      var todo = {
        email: x,
        password: p
      
      };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          
          console.log('cghala'+data);
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
