$(function () {
  var loop = new SeamlessLoop();
  var playing = false;
  loop.addUri('audio/chubbz.ogg', 5642, 'chubbz');
  loop.callback(function () { loop.start('chubbz'); playing = true; });

  var images = $('.images img');
  var i = 0;
  function swapImage() {
    i = (i + 1) % images.length;
    var next = images[i];
    $('.background').css({
      'background': 'url(' + next.src + ') no-repeat',
      'background-size': 'cover'
    });
    var delay = parseInt($(next).attr('data-delay'));
    console.log(delay);
    setTimeout(swapImage, delay);
  }

  swapImage();

  $('body').click(function () {
    if (playing) {
      loop.stop();
      console.log('music paused');
    } else {
      loop.start('chubbz');
      console.log('music playing');
    }
    playing = !playing;
  });

});
