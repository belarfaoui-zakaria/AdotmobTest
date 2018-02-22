// action
// {
//     desc: String, Description d'action 
//     animations: Array, Les animations à effectuer sur cette action
//     sleep: Int, Le temps en ms avant la prochaine action
// }

// ACTIONS est un tableau qui permet de definir les animations à lancer 
// Une action est lancer l'une après l'autre en respectant l'ordre de définition 
 
actions = [
    {
        desc: "Page1: move first page's text to left",
        animations: ["PAGE1#TextShow"],
        sleep: 500
    },
    {
        desc: "Page1: move logo corner and hide text ",
        animations: ["PAGE1#Logo", "PAGE1#TextHide"],
        sleep: 200    
    },
    {
        desc: "Page2: show text",
        animations: ["PAGE2#TextShow", "ShowInfoText"],
        sleep: 2000
    },
    {
        desc: "Page2: hide text",
        animations: ["PAGE2#TextHide"],
        sleep: 200
    },
    {
        desc: "PAGE3: show text",
        animations: ["PAGE3#TextShow"],
        sleep: 2000
    },
    {
        desc: "PAGE3: show text",
        animations: ["PAGE3#TextHide", "HideInfoText"],
        sleep: 200
    },
    {
        desc: "PAGE4: show text",
        animations: ["PAGE4#TextShow", "ShowMap"],
        sleep: 200
    }
]

function runActions(){

    reduced = actions.reduce((last, current)=>{
        var run = (action) => {
            var promises = action.animations.map((e) => runAnimation(e));
            return Promise.all(promises).then( () => Sleep(action.sleep)).then(() => {
                action.animations.map((e) => {
                    // console.log(animations[e])
                    animations[e].elements.forEach((e) => {
                        var element = new DomObject(e.selector);
                        if(e.after !== undefined) e.after(element); 
                    })
                });

            })
        } 
        if(Array.isArray(last.animations)){
            last = run(last)
        }
        
        return last.then(()=>{
            return run(current)
        }) 
        // 
        // 
    })

    return Promise.all([reduced])
}