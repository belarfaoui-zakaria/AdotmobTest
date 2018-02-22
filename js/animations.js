
// "Nom D'animation":{
//     elements: [ // un tableau des objets à animer en même temps  
//         {
//             selector: String, // permet de sélectionner l'objet
//             animations: [ // les animations à appliquer sur un objet
//                 Array // exemple ["opacity", 0, 0.8, [800, 400]]
//             ],
//             after: function, // callback lancer une fois l'animation terminée
//         }
//     ]
// }

// runAnimation(string) : returns Promise
// Exécute une animation défini sur animations
// 

animations = {
    "ShowInfoText":{
        elements: [
            {
                selector: ".small-info",
                animations: [
                    ["opacity", 0, 0.8, [800, 400]]
                ]
            }
        ]
    },
    "HideInfoText":{
        elements: [
            {
                selector: ".small-info",
                animations: [
                    ["opacity", 0.8, 0, 400]
                ]
            }
        ]
    },
    "PAGE1#TextHide":{
        elements: [{
            selector: ".page1 ul",
            animations:[
                ["opacity", 1, 0, 400]
            ],
            after: (object) => object.parent().css("z-index", 0)
        }]
    },
    "PAGE2#TextHide":{
        elements: [{
            selector: ".page2 .text, .page2 .price",
            animations:[
                ["opacity", 1, 0, 400]
            ],
            after: (object) => object.parent().css("z-index", 0)
        }]
    },
    "PAGE3#TextHide":{
        elements: [{
            selector: ".page3 ul",
            animations:[
                ["opacity", 1, 0, 400]
            ],
            after: (object) => object.parent().css("z-index", 0)
        }]
    },
    "PAGE1#Logo":{
        elements: [{
            selector: ".logo",
            animations:[
                ["transform", 2, 1, 400, (e) => "scale("+e+")"],
                ["top", 20, 5, 400, "%"],
                ["left", 40, 5, 400, "%"]
            ]
        }]
    },
    "PAGE1#TextShow": {
        elements :[
            {
                selector: ".page1 .el1",
                animations: [
                    ["left", 100, 0, 600, "%"]
                ]
            },
            {
                selector: ".page1 .el2",
                animations: [
                    ["left", 100, 0, 800, "%"]
                ]
            },
            {
                selector: ".page1 .el3",
                animations: [
                    ["left", 100, 0, [700, 400], "%"]
                ]
            }
        ]
    },
    "PAGE2#TextShow": {
        elements :[
            {
                selector: ".page2 .el1",
                animations: [
                    ["left", 100, 0, 400, "%"]
                ]
            },
            {
                selector: ".page2 .el2",
                animations: [
                    ["left", 200, 0, [100, 600], "%"]
                ]
            },
            {
                selector: ".page2 .from",
                animations: [
                    ["left", 100, 0, 800, "%"]
                ]
            },
            {
                selector: ".page2 .amount",
                animations: [
                    ["left", 150, 0, [200, 800], "%"]
                ]
            }
        ]
    },
    "PAGE3#TextShow": {
        elements :[
            {
                selector: ".page3 .el1",
                animations: [
                    ["left", 100, 0, 400, "%"]
                ]
            },
            {
                selector: ".page3 .el2",
                animations: [
                    ["left", 200, 0, 600, "%"]
                ]
            },
            {
                selector: ".page3 .el3",
                animations: [
                    ["left", 100, 0, 800, "%"]
                ]
            },
            {
                selector: ".page3 .el4",
                animations: [
                    ["left", 150, 0, 1000, "%"]
                ]
            }
        ]
    },
    "ShowMap":{
        elements:[
            {
                selector: ".map",
                animations: [
                    ["top", 100, 0, [1200, 500], "%"]
                ]
            }

        ]
    },
    "PAGE4#TextShow":{
        elements: [
            {
                selector: ".page4 .el1",
                animations: [
                    ["opacity", 0, 1, 600]
                ]
            },
            {
                selector: ".page4 .el2",
                animations: [
                    ["opacity", 0, 1, [400, 400]]
                ]
            },
            {
                selector: ".page4 .el3",
                animations: [
                    ["opacity", 0, 1, [800, 400]]
                ]
            },
            {
                selector: ".page4 .el4 button",
                animations: [
                    ["opacity", 0, 1, [1200, 400]]
                ]
            }
        ]
    }
}

function runAnimation(name){
    return new Promise( (resolve ) => {
   
        var promises = animations[name].elements.map( (e) => {
            var element = new DomObject(e.selector);
            var animation = new Animator(element);
            return e.animations.map( a => animation.run(a))
        })

        Promise.all(promises.flatten()).then((p) => {
            resolve(p)
        })
    })

}