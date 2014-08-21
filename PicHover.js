/**********************************
|  code design by panlei 潘磊     |
|         2014.8.21               |
|  http://www.8bei8.com           |
|  https://github.com/panleixin   |
|  http://weibo.com/panleixin     |
**********************************/



function Hover(){
}//function Hover
Hover.prototype={
showHover:function(id,display){
	     var v=document.getElementById(id);
	     var imgs=v.getElementsByTagName("img");
	      for(var i=0;i<imgs.length;i++){
			  imgs[i].onload = function(){
				  var w=this.width;
				  var h=this.height;
				  var span=document.createElement("span");
				  this.parentNode.appendChild(span);
				  this.parentNode.style.cssText += ";position:relative;width:"+w+"px;height:"+h+"px;display:block;cursor:pointer;";
				  span.style.cssText += ";position:absolute;z-index:3;width:"+w+"px;height:"+h+"px;_width:"+(w-1)+"px;_height:"+(h-2)+"px;bottom:0;_bottom:-3px;left:0;display:"+display+";";
				  changeSpan(span);
			  };
		  }//for
        function changeSpan(span){
		    span.parentNode.onmouseover=function(){
		    span.style.display="block";
		     };//onmouseover
		    span.parentNode.onmouseout = function(){
			span.style.display=display;
		    };//onmouseout 
        }//function changeSpan
  },//showHover
showHoverText:function(id,width,height,bottom,left,display){
	     var v=document.getElementById(id);
	     var imgs=v.getElementsByTagName("img");
	      for(var i=0;i<imgs.length;i++){
			  imgs[i].onload = function(){
				  var w=this.width;
				  var h=this.height;
				  var span=document.createElement("span");
				  this.parentNode.appendChild(span);
				  this.parentNode.style.cssText += ";position:relative;width:"+w+"px;height:"+h+"px;display:block;cursor:pointer;";
				  span.style.cssText += ";position:absolute;z-index:3;display:"+display+";";
                  if(percent(width)){//have '%'
                  span.style.cssText += ";width:"+width+";";
				  }//if
				  else{
                  span.style.cssText += ";width:"+width+"px;_width:"+(width-1)+"px;";
				  }
				  if(percent(height)){//have '%'
                  span.style.cssText += ";height:"+height+";";
				  }//if
				  else{
                  span.style.cssText += ";height:"+height+"px;_height:"+(height-2)+"px;";
				  }
				  if(percent(bottom)){//have '%'
                  span.style.cssText += ";bottom:"+bottom+";";
				  }//if
				  else{
                  span.style.cssText += ";bottom:"+bottom+"px;_bottom:"+(bottom-3)+"px;";
				  }
				  if(percent(left)){//have '%'
                  span.style.cssText += ";left:"+left+";";
				  }//if
				  else{
                  span.style.cssText += ";left:"+left+"px;_left:"+(left-1)+"px;";
				  }
				  var divs=this.parentNode.getElementsByTagName("div");
				  if (divs.length>0&&display=='none'){
					  for(var j=0;j<divs.length;j++){
                       divs[j].style.cssText += ";display:none;";
					  }//for
				  }//if
				  changeSpan(span,divs);
			  };
		  }//for

		  function percent(string){
           if(string.indexOf("%")>0){
              return true;//is percent
              }//if
			else{
              return false;
			}//else
		  }//percent
        function changeSpan(span,divs){
		    span.parentNode.onmouseover=function(){
		    span.style.display="block";
			      if (divs.length>0){
					  for(var j=0;j<divs.length;j++){
                       divs[j].style.cssText += ";display:block;";
					  }//for
				  }//if
		     };//onmouseover
		    span.parentNode.onmouseout = function(){
			span.style.display=display;
			       if (divs.length>0){
					  for(var j=0;j<divs.length;j++){
                       divs[j].style.cssText += ";display:"+display+";";
					  }//for
				  }//if
		    };//onmouseout 
        }//function changeSpan
  }//showHover

}//Hover.prototype

function PicHover(){
}//function PicHover
PicHover.prototype ={
show:function(id){
	 Hover.prototype.showHover(id,'block');
},//show
hover:function(id){
	 Hover.prototype.showHover(id,'none');
},//hover
showText:function(id,width,height,bottom,left){
	 Hover.prototype.showHoverText(id,width,height,bottom,left,'block');
},//show
hoverText:function(id,width,height,bottom,left){
	 Hover.prototype.showHoverText(id,width,height,bottom,left,'none');
}//show
}//PicHover

