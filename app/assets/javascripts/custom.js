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