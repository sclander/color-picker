$(function(){

    var colors = {
      red: {r: 255, g:0, b:100, a: 100},
      green: {r:70, g:200, b:50, a: 100},
      blue: {r:30, g:50, b:255, a: 100},
      purple: {r:200, g:60, b:255, a: 100},
      yellow: {r:230, g:255, b:20, a: 100},
      gray: {r:130, g:130, b:150, a: 100}
    };

    function initColor(targetId, color, imgSrc) {
      var img = new Image();
      img.crossOrigin = "use-credentials";
      img.src = imgSrc;

      img.onload = function() {

        var target = $(targetId)[0];
        var ctxTarget = target.getContext("2d");

        var c=document.getElementById("canvas");
        var ctx=c.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this,0,0);

        var imgData=ctx.getImageData(0,0,c.width,c.height);

        for (var i=0;i<imgData.data.length;i+=4)
          {
              if(imgData.data[i+3]>0){
                  imgData.data[i]=color.r;
                  imgData.data[i+1]=color.g;
                  imgData.data[i+2]=color.b;
                  imgData.data[i+3]=color.a;
              }
          }
        ctxTarget.putImageData(imgData,0,0);
      }
    }

    function animateColor(targetId, img, toColor) {
      var fromColor = $(targetId).data('color');
      var ctx = $(targetId).animate(
        {
          "border-width": 100
        },
        {
          duration: 400,
          queue: false,
          step: function(step, tween) {
            initColor(targetId, stepColor(step, toColor, fromColor), img);
          }
        }
      );
      $(targetId).data('color', toColor);
    }

    function stepColor(step, toColor, fromColor) {
      var rdiff = toColor.r - fromColor.r;
      var gdiff = toColor.g - fromColor.g;
      var bdiff = toColor.b - fromColor.b;
      var color = {
        r: Math.floor(((step/100) * rdiff) + fromColor.r),
        g: Math.floor(((step/100) * gdiff) + fromColor.g),
        b: Math.floor(((step/100) * bdiff) + fromColor.b),
        a: 100
      };
      return color;
    }

    function changeColor(selector, color) {
      $(selector).html(color.name)
    }

    // Input Modal Functions
    $('.color-input').click( function() {
      $(this).find('.color-palette').show();
    })

    $(document).click(function(event) { 
      if(!$(event.target).closest('.color-input').length) {
        if($('.color-palette').is(":visible")) {
          $('.color-palette').hide();
        }
      }        
    });

    // Palette Functions
    $('#topRed').mouseover( function() {
      animateColor('#top','top_800x500.png' ,{r: 255, g:0, b:100, a: 100});
    });
    $('#topGreen').mouseover( function() {
      animateColor('#top', 'top_800x500.png', {r:70, g:200, b:50, a: 100});
    });
    $('#topBlue').mouseover( function() {
      animateColor('#top', 'top_800x500.png', {r:30, g:50, b:255, a: 100});
    });
    $('#topPurple').mouseover( function() {
      animateColor('#top', 'top_800x500.png', {r:200, g:60, b:255, a: 100});
    });
    $('#topYellow').mouseover( function() {
      animateColor('#top', 'top_800x500.png', {r:230, g:255, b:20, a: 100});
    });
    $('#topGrey').mouseover( function() {
      animateColor('#top', 'top_800x500.png', {r:130, g:130, b:150, a: 100});
    });
    $('#middleRed').mouseover( function() {
      animateColor('#middle','middle_800x500.png' ,{r: 255, g:0, b:100, a: 100});
    });
    $('#middleGreen').mouseover( function() {
      animateColor('#middle', 'middle_800x500.png', {r:70, g:200, b:50, a: 100});
    });
    $('#middleBlue').mouseover( function() {
      animateColor('#middle', 'middle_800x500.png', {r:30, g:50, b:255, a: 100});
    });
    $('#middlePurple').mouseover( function() {
      animateColor('#middle', 'middle_800x500.png', {r:200, g:60, b:255, a: 100});
    });
    $('#middleYellow').mouseover( function() {
      animateColor('#middle', 'middle_800x500.png', {r:230, g:255, b:20, a: 100});
    });
    $('#middleGrey').mouseover( function() {
      animateColor('#middle', 'middle_800x500.png', {r:130, g:130, b:150, a: 100});
    });
    $('#bottomRed').mouseover( function() {
      animateColor('#bottom','bottom_800x500.png' ,{r: 255, g:0, b:100, a: 100});
    });
    $('#bottomGreen').mouseover( function() {
      animateColor('#bottom', 'bottom_800x500.png', {r:70, g:200, b:50, a: 100});
    });
    $('#bottomBlue').mouseover( function() {
      animateColor('#bottom', 'bottom_800x500.png', {r:30, g:50, b:255, a: 100});
    });
    $('#bottomPurple').mouseover( function() {
      animateColor('#bottom', 'bottom_800x500.png', {r:200, g:60, b:255, a: 100});
    });
    $('#bottomYellow').mouseover( function() {
      animateColor('#bottom', 'bottom_800x500.png', {r:230, g:255, b:20, a: 100});
    });
    $('#bottomGrey').mouseover( function() {
      animateColor('#bottom', 'bottom_800x500.png', {r:130, g:130, b:150, a: 100});
    });

    initColor('#top', {r: 255, g: 0, b: 0, a: 100}, 'top_800x500.png');
    $('#top').data("color", {r: 255, g: 0, b: 0, a: 100});
    initColor('#middle', {r: 0, g: 255, b: 0, a: 100}, 'middle_800x500.png');
    $('#middle').data("color", {r: 0, g: 255, b: 0, a: 100});
    initColor('#bottom', {r: 0, g: 0, b: 255, a: 100}, 'bottom_800x500.png');
    $('#bottom').data("color", {r: 0, g: 0, b: 255, a: 100});

}); // end $(function(){});