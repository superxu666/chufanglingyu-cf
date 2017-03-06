/**
 * Created by josephlin on 17/2/10.
 */

var wl = {};

wl.tools = {};

wl.tools.resizeImg = function (obj,maxW,maxH)
{
    var imgW=obj.width;
    var imgH=obj.height;
    if(imgW>maxW||imgH>maxH)
    {
        var ratioA=imgW/maxW;
        var ratioB=imgH/maxH;
        if(ratioA>ratioB)
        {
            imgW=maxW;
            imgH=maxW*(imgH/imgW);
        }
        else
        {
            imgH=maxH;
            imgW=maxH*(imgW/imgH);
        }
        obj.width=imgW;
        obj.height=imgH;
    }
}

