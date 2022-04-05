let width;
let height;
let tree;

function setup() {
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);
    nums = [1,2,3];
    segTree = new SegmentTree(nums);
    segTree1 = segTree.buildSegmentTree();
    segTree1 = segTree.update(0,1,2);
    tree = new Tree();
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        console.log(a);
        tree.insert(a,i);
        // tree.insert();
    }
    console.log(tree);
}

function draw() {
    background(255);
    tree.draw();
    noLoop();
}

function randomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}