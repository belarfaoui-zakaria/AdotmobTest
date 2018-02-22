class Animator{
    // animator est une classe qui permet d'animer un objet donner
    constructor(object){
        // this.object doit etre de type DomObject
        this.object = object;
        this.frame_rate = 0.06
    }
    
    getValue(value, unit=null){
        if (typeof unit === "function") { 
            return unit(value);
        }
        return unit == undefined ? value : value+""+unit;
    }

    // animate execute l'animation
    async animate(property, start, end, delay, unit=null) {
        // var frame = 0;
        this.object.css("will-change", property)
        var is_array = Array.isArray(delay);
        var wait = null;
        if (is_array){

            wait = delay[0];
            delay = delay[1];
            
            
        }
        
        

        var that = this 
        function fn (resolve, reject){
                var frame = 0;
                var framesHandler = setInterval( e => {
                    frame++;
                    var distance = end - start;
                    var delta =  distance / delay / that.frame_rate;
                    

                    
                    var value = start + delta * frame;

                
                    // console.log(start, delta, frame, unit, distance)
                    that.object.css(property, that.getValue(value, unit) );
                    if (delta > 0 ? value >= end : value <= end) {
                    clearInterval(framesHandler);
                    resolve(that);
                    }
                }, 1 / that.frame_rate);


            }

        if(is_array){
            return Sleep(wait).then( () =>  new Promise(fn) );}
        else
            return new Promise(fn);

      }
      
      
      reducer(array){
        array.reduce( (last, current)=>{
            if(Array.isArray(last)) last = this.run(last);
            return last.then( () => this.run(current));
        })
      }

      run(params){
        return Animator.prototype.animate.apply(this, params)
      }
}

