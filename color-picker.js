$(function(){

    var img=new Image();
    img.crossOrigin="use-credentials";
    img.onload=function(){

      var red=255;
      var blue=0;
      var green=0;

      var canvasCopy=document.getElementById("canvasCopy");
      var ctxCopy=canvasCopy.getContext("2d");

      var c=document.getElementById("canvas");
      var ctx=c.getContext("2d");
      ctx.drawImage(this,0,0);

      var imgData=ctx.getImageData(0,0,c.width,c.height);

      for (var i=0;i<imgData.data.length;i+=4)
        {
            if(imgData.data[i+3]>0){
                imgData.data[i]=red;
                imgData.data[i+1]=green;
                imgData.data[i+2]=blue;
                imgData.data[i+3]=50;
            }
        }
      ctxCopy.putImageData(imgData,0,0);
    }
    img.src = "top.png";

}); // end $(function(){});