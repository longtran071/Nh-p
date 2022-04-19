let width;
let height;
let tree;
let tree_query;
let nums;
let c=1;
let qs = 1; // Bắt đầu đoạn truy vấn 
let qe = 5;
let i=1;
let BT = [] // List lưu index của các node được truy cập đến trong lúc update
let val = 2;//giá trị update
let left;//vị trí cho khoảng update
let right;//vị trí cho khoảng update
function setup() {
    width = windowWidth - 30;
    height = windowHeight - 30;
    createCanvas(width, height);
    frameRate(1);
   
    nums = [7,8,1,5,9,11,20,25];

    
    segTree = new SegmentTree(nums);
    segTree1 = segTree.build_minSegmentTree();
    //Nếu muốn tạo cây sum hoặc max thì đổi sang 
    // segTree1 = segTree.build_maxSegmentTree();
    // segTree1 = segTree.build_sumSegmentTree();
    tree = new Tree(nums.length);
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }
    //update cây min
    segTree2 = segTree.update_min(0,2,val,BT);
    console.log(BT);
}

function draw() {
    background('white');
    // tree.getquery(segTree,qs,qe,segTree.length);
    tree.draw();
    tree.draw_number_node(nums);
    noLoop();
    //tree.draw_build();
    //qs=3, đại diện cho Left, qe=2 đại diện cho Right  //đoạn truy vấn sai không cho truy vấn   
    //if(qs<qe || qs<0 ||qe<0||qe>nums.length-1)
    //aleart()// gửi thông báo hoặc in dòng chữ ra man hinh //tự chọn 
    // setTimeout(()=>{tree.draw_minquery(1,6);},tree.time_build+3000); 
    //tree.draw_minquery(1,6);
    //truy vấn của cây sum hoặc max 
    //setTimeout(()=>{tree.draw_maxquery(1,6);},tree.time_build+3000);
    //setTimeout(()=>{tree.draw_sumquery(1,6);},tree.time_build+3000);
    //update cây min
    // setTimeout(() => {
    //     tree.draw_minupdate(BT,2);
    // }, tree.time_build+3000);
    tree.draw_build_imd();
    tree.draw_minupdate(BT,2);
}

function randomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}