//Functions to collapse and expand nodes.

// function collapse(US) {
//     if (US.children) {
//         US._children = US.children;
//         US._children.forEach(collapse);
//         US.children = null;
//     }
// }
//
// function expand(US) {
//     if (US._children) {
//         US.children = US._children;
//         US.children.forEach(expand);
//         US._children = null;
//     }
// }

// Get JSON data

treeJSON = d3.json("ICP7TreeData.json", function (error, ICP7TreeData) {

    createTree(ICP7TreeData, "#treecontainerDetalle", false);
    createTree(ICP7TreeData, "#treecontainer", true);


});

function createTree(ICP7TreeData, container, isDrag) {
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

// function expand(d) {
//     if (d._children) {
//         d.children = d._children;
//         d.children.forEach(expand);
//         d._children = null;
//     }
// }

}

