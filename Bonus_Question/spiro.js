    var R=8,r=1,a=4;
    var x0=R+r-a,y0=0;
    var lat0=-118.289123;
    var long0=34.02136;
    //console.log(lat0+","+long0);
    //document.write(lat0+","+long0,"<br>");

    var cos=Math.cos, sin=Math.sin, pi=Math.PI, nRev=16;
    for(var t=0.0;t<(pi*nRev);t=t+0.01){
    var x = (R+r)*cos((r/R)*t) - a*cos((1+r/R)*t);
    var y = (R+r)*sin((r/R)*t) - a*sin((1+r/R)*t);
    var lat=(lat0+(10*(x*pi)/180));
    var long=(long0+(10*(y*pi)/180));
    document.write(lat+","+long,"<br>");
    //console.log(lat+","+long);
    }