function init(){
     for(var i=0;i<10;i++){
		  $('#shadow'+i).hover(function(e){
			 $(this).addClass('show-shadow');
			 $(this).animate({
				   "top":"-=1px"
				   
			   },50);
			  var str=$(this).attr("id");
			  var index=str.substr(str.length-1,1); 
			  $('.mask'+index).stop().slideDown("fast");
		 },
		 function(e){
			  $(this).removeClass('show-shadow');
			   $(this).animate({
				   "top":"+=1px"  
			   },50);
			   var str=$(this).attr("id");
			  var index=str.substr(str.length-1,1);
			  $('.mask'+index).stop().slideUp("fast");
			 
		 }); 
	 
	 }
     for(var i=1;i<6;i++){
		  $('#shadowa'+i).hover(function(e){
			 $(this).addClass('show-shadow');
			 $(this).animate({
				   "top":"-=1px"
				   
			   },50);
			  var str=$(this).attr("id");
			  var index=str.substr(str.length-1,1); 
			  $('.maska'+index).stop().slideDown("fast");
		 },
		 function(e){
			  $(this).removeClass('show-shadow');
			   $(this).animate({
				   "top":"+=1px"
				   
			   },50);
			   var str=$(this).attr("id");
			  var index=str.substr(str.length-1,1);
			  $('.maska'+index).stop().slideUp("fast");
			 
		 }); 
	 
	 }

}

function topBotShowFun(){
   $('.sqr').eq(1).click(function(){
	  
			$('.botPic').find('img').each(function(i,value){
				$(this).attr("src","image/starSingle"+(i+1)+".GIF");
				
			});
     });
   
    $('.sqr').eq(0).click(function(){
	 
		$('.botPic').find('img').each(function(i,value){
				
				$(this).attr("src","image/starSingle"+(5+i)+".GIF");
				
			});
     });
	 window.setInterval(
	      function(){
			  if($('.botPic').find('img').eq(0).attr("src")=="image/starSingle1.GIF"){
					$('.botPic').find('img').each(function(i,value){
					$(this).attr("src","image/starSingle"+(5+i)+".GIF");
					}); 
				}
				else{
					$('.botPic').find('img').each(function(i,value){
					$(this).attr("src","image/starSingle"+(1+i)+".GIF");
					}); 
					
				}
 
		  }
	 
	,10000 );
	 
  }
   
function bigPicFun(){
	    var index=0;
        window.setInterval(function(){	
        for(var k=0;k<$('.cir').length;k++){
        	if($('.cir').eq(k).css("background-color") == "rgb(255, 255, 255)"){
        		index = k;
        	}
          
        }
        if(index == 3){
        	$('#bigPic').attr("src","image/show1.gif"); 
        }
        else $('#bigPic').attr("src","image/show"+(index+2)+".gif");
		$('.cir').css("background-color","#000");
		if(index == 3)$('.cir').eq(0).css("background-color","#FFF");
		else $('.cir').eq(index+1).css("background-color","#FFF");
	},10000 );
	 
   }
   
   
 function topSmlShowFun(){

	   $('.topSmlPic').hover(function(){
		      $(this).stop(true,true).fadeTo(400,1.0);
		   
		   
	   },function(){
		    $(this).stop(true,true).fadeTo(400,0.5);
		   
	   });

	  $('.cir').eq(0).css("background-color","#FFF");
	    $('.cir').click(function(){
			 $('.cir').css("background-color","#000");
			 $(this).css("background-color","#FFF");
			 var index=$(this).index();
			 $("#bigPic").attr("src","image/show"+(index+1)+".gif");
			 
		});

   }

function  changPicFun(){
		
            var index =0;
			$('#leftBrocast').click(function(){
			    for(var k=0;k<$('.cir').length;k++){
					if($('.cir').eq(k).css("background-color") == "rgb(255, 255, 255)"){
						index = k;
					}
				}
				if(index == 0){
					$('#bigPic').attr("src","image/show4.gif"); 
				}
				else $('#bigPic').attr("src","image/show"+(index)+".gif");
				$('.cir').css("background-color","#000");
				if(index == 0)$('.cir').eq(3).css("background-color","#FFF");
				else $('.cir').eq(index-1).css("background-color","#FFF");
			});
			
			$('#rightBrocast').click(function(){
			
				for(var k=0;k<$('.cir').length;k++){
					if($('.cir').eq(k).css("background-color") == "rgb(255, 255, 255)"){
						index = k;
					}
				}
				if(index == 3){
					$('#bigPic').attr("src","image/show1.gif"); 
				}
				else $('#bigPic').attr("src","image/show"+(index+2)+".gif");
				$('.cir').css("background-color","#000");
				if(index == 3)$('.cir').eq(0).css("background-color","#FFF");
				else $('.cir').eq(index+1).css("background-color","#FFF");	
		});
   }
    
	
	
	
	
function searchLogoFun(){
	$('#searchLogo').hover(function(){
			$('#searchLogo').attr("src","image/search2.GIF");
	   } ,function(){
			 $('#searchLogo').attr("src","image/search.GIF");
			 
		 }
	);
}
  
function shopShowFun(){
      $('#shop').hover(function(e){  
		  $('.shopShow').css("display","block");  
	  },function(e1){
		  $('.shopShow').css("display","none");  
 
	  });
}
function topLeftShowFun(){ 
	  var index=0;
	  var time=1;
	  $("#topLeft ul").hover(function(){
			  $("#topLeft ul li").mouseover(function(){
					index=$(this).index();
					$(".topLeftShow").css("display","none").dequeue().eq(index).show();  
				}
		);
	  },function(){
            time=1;
		    $(".topLeftShow").eq(index).hide();
	  });
}

function dropNavFun(){ 
	  var index=0;
	  var time=1;
	  $(".centerNav ul").hover(function(){
			  $(".centerNav ul li").mouseover(function(){
					index=$(this).index();
					if (time==1){$(".dropNav").stop(true,true).eq(index).slideDown();time=0;return;}
					$(".dropNav").css("display","none").dequeue().eq(index).show();  
				}
		);

	  },function(){
            time=1;
		    $(".dropNav").eq(index).slideUp();
	  });
}

window.onload = function(){

	init();
	searchLogoFun();
	shopShowFun();
	dropNavFun();
	topLeftShowFun();
	changPicFun();
	topBotShowFun();
	topSmlShowFun();
	bigPicFun();

}
	  
