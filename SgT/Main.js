let width;
let height;
let tree;

function setup() {
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);
    nums = [1,2,3,4,5,6,7,8];
    BT = [];
    segTree = new SegmentTree(nums);
    segTree1 = segTree.buildSegmentTree();
    tree = new Tree();
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
    }
    console.log(tree)
    var val = 2
    segTree2 = segTree.update(1,2,val,BT);
    // var _loop_1 = function(BT, i, val)
    // {
    //     setTimeout(function (){
    //         tree.searchNode(BT[i], val);
    //         console.log('hi')
    //     }, 2000);

    // };
    // for(var i=0; i < BT.length; i++)
    // {
    //     _loop_1(BT, i, val);
    // }
    var i = 0;
    myLoop(tree,BT,val,i);
}  

function myLoop(tree, BT, val, i){
    setTimeout(function() {
        tree.searchNode(BT[i], val);
        i++;
        if(i < BT.length){
            myLoop(tree,BT,val,i);
        }
    }, 3000);
}

function draw() {
    background(255);
    tree.draw();
    noLoop();
}

function randomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}