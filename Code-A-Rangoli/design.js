var ctx=canvas.getContext('2d');
           
                
ctx.translate(750,360);    
            
            
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = 'purple';  
ctx.fillStyle = 'orange' ;
                
Sector(150,12,ctx);   //radius 150, sides 12
                
ctx.stroke();
            
function Sector(r,p,ctx)       //r is radius, p is number of sides of polygon, and ctx is the context object
    {  
    for(i=0; i<p; i++) // looping design of a sector of circle
        {
            ctx.lineWidth=2;
            ctx.rotate(2*Math.PI/p);
            ctx.moveTo(r,0);
            ctx.lineTo(0,0);
            var x=0,y=0;
            var w=295;
            var h=195;

            ctx.moveTo(x,y);            //object1
            ctx.lineTo(x+w/15,y);
            ctx.lineTo(x+w/30,y+h/64);
            ctx.lineTo(x+w/15,y+h/16);
            ctx.lineTo(x,y);
                        
            
            ctx.moveTo(x+w*(2/15),y);           //object3
            ctx.quadraticCurveTo(x+w*(3/15),y+h/16+h/32,x+w*(3/15)+w/30,y+h/16+2);
            ctx.quadraticCurveTo(x+w*(3/15),y+h/16,x+w*(2/15)+w/30,y);
                        
            ctx.moveTo(x+w*(2/15)-w/60,y+h/8-h/64-2);     //object4
            ctx.quadraticCurveTo(x+w*(3/15),y+h/32,x+w*(3/15)+w/30,y+h/16+2);
            ctx.quadraticCurveTo(x+w*(3/15),y+h/32,x+w*(2/15)+w/30-7,y+h/8+h/64-3);
                        
            ctx.moveTo(x+w*(4/15),y+h/16+h/32);         //object5
            ctx.quadraticCurveTo(x+w*(4/15)+w/30,y+h*(2/8)-h/16,x+w*(5/15),y+h/8+h/16);
            ctx.quadraticCurveTo(x+w*(5/15)-w/30,y+h/8+h/64,x+w*(4/15)+w/30,y+h/16+h/32);
            ctx.quadraticCurveTo(x+w*(5/15)+w/30,y,x+w*(5/15)+w/60,y+h/16-h/32);
            ctx.quadraticCurveTo(x+w*(5/15),y,x+w*(4/15),y+h/16+h/32);
                        
            ctx.moveTo(x+w*(3/15),y);               //object6
            ctx.quadraticCurveTo(x+w*(3/15)+w/30,y+h/16,x+w*(4/15)+w/30,y);
            ctx.quadraticCurveTo(x+w*(5/15)+w/30,y-h/8,x+w*(6/15)+w/30,y);
            ctx.quadraticCurveTo(x+w*(7/15),y+h/16,x+w*(8/15)-w/30,y);
                        
            ctx.moveTo(x+w*(5/15),y+h/16+h/32);     //object7
            ctx.quadraticCurveTo(x+w*(5/15)+w/30+5,y,x+w*(6/15)+w/30,y+h/16+h/32);
            ctx.quadraticCurveTo(x+w*(5/15)+w/30+5,y+h/8+h/16,x+w*(5/15),y+h/16+h/32);
                        
            ctx.moveTo(x+w*(7/15),y+h/16+h/32);     //object8
            ctx.quadraticCurveTo(x+w*(7/15)+w/30+5,y,x+w*(7/15)+w/30,y+h/16+h/32);
            ctx.lineTo(x+w*(7/15)+w/30,y+h/8+h/64);
            ctx.quadraticCurveTo(x+w*(7/15)+w/30,y+h/8+h/16,x+w*(7/15),y+h/16+h/32);

            ctx.moveTo(x+w/15,y+h/32);          //object2
            ctx.quadraticCurveTo(x+w/15+w/30,y,x+w*(2/15),y+h/32+h/64);
            ctx.quadraticCurveTo(x+w/15+w/30,y+h/16+h/64,x+w/15,y+h/32);
                        
                        
            ctx.moveTo(x+w*(7/15)-5,y+h*(2/8)+h/16);    //object9
            ctx.quadraticCurveTo(x+w*(6/15)-w/60,y+h*(3/8)-h/32,x+w*(5/15)+w/30,y+h*(2/8)-h/16);
            ctx.quadraticCurveTo(x+w*(6/15)+w/30,y+h*(1/8),x+w*(7/15)+5,y+h*(1/8)+h/16);
            ctx.arc(0,0,150,0*Math.PI,2*Math.PI/p);
            ctx.fill();

                      
                        

                        
        }
                    
    }