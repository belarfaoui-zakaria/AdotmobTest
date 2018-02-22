// DomObject permet d'encapsuler et manipuler un Objet
// Tres utilie 
// pendant toutes ma vie j'ai utiliser Jquery
// finalement on se rend compte que c'est indispensable d'encapsuler un objet dom afin 
// d'ecrire moins de code 

class DomObject{
    constructor(selector){
        if(typeof selector === "string")
            this.selections = document.querySelectorAll(selector);
        else
            this.selections = [selector]
    }

    parent(){
       return new DomObject(this.selections[0].parentNode)
    }

    css(name, value){
        this.selections.forEach(e =>{
            e.style[name] = value;
        });
    }

    height(){
        return this.selections[0].clientHeight
    }

    width(){
        return this.selections[0].clientWidth
    }


    remove(){
        this.selections.forEach(e =>{
            e.parentNode.removeChild(e);
        });
    }
}

