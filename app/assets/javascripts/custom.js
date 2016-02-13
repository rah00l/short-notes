  // Js file to write custom application-specific javascript.

// Following JS code for refreshing DIV content which have recent posts:
window.setInterval(pick_recent_posts, 10000);
function pick_recent_posts() {
  $.ajax({
    url: '/posts/recent_posts',
    type: 'get',
    dataType:'script',
    data: { },
    success: function(data){
      // $(".response").fadeOut(600, function ()
      //  {
      //     $(".response").html(data)
      //   });
      // $(".response").fadeIn(600);
    }
  });
  return false;
}

$(document).ready(function() {
   $('#btnValidate').click(function(e) {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            //alert('Email is valid');
        }
        else {
            //alert('Invalid Email Address');
            e.preventDefault();
        }
    });
   $('.flash').fadeOut(3000);
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}