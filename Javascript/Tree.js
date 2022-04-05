class Tree {
    constructor(){
        this.size = 0;
        this.root = null;
    }

    insert(value,id) {
        let newNode = new Node(value,id);
        if(newNode.value == 0)
        {
            return;
        }
        if(!this.root) {
            this.root = newNode;
        }
        else
        {
            this.insertNode(this.root, newNode);
        }
        this.size++;
    }

    insertNode(node, newNode) {
        if(newNode.id % 2 == 0)
        {
            a = (newNode.id - 2) / 2;
        }
        else{
            a = (newNode.id - 1) / 2;
        }
        if(node.id == a)
        {
            if(newNode.id % 2 != 0)
            {
                newNode.level = node.level + 1;
                node.left = newNode;
                node.childrenLeft++;
                return;
            }
            else{
                newNode.level = node.level + 1;
                node.right = newNode;
                node.childrenRight++;
                return;
            }
        }
        if(node.id != a){
            if(2 * node.id + 1 <= a)
            {
                node.childrenLeft++;
                this.insertNode(node.left, newNode);
            }
            if(2 * node.id + 2 <= a)
            {
                node.childrenRight++;
                this.insertNode(node.right, newNode);
            }
            // if(2 * node.id + 1 != a && 2 * node.id + 2 != a)
            // {
            //     this.insertNode(node.left, newNode);
            //     this.insertNode(node.right, newNode);
            // }
        }
        // if(newNode.value <= node.value){
        //     if(!node.left){
        //         newNode.level = node.level + 1;
        //         node.left = newNode;
        //         node.childrenLeft++;
        //         return;
        //     }

        //     node.childrenLeft++;
        //     this.insertNode(node.left, newNode);
        // }
        // else{
        //     if(!node.right){
        //         newNode.level = node.level + 1;
        //         node.right = newNode;
        //         node.childrenRight++;
        //         return;
        //     }
        //     node.childrenRight++;
        //     this.insertNode(node.right, newNode);
        // }
    }

    draw() {
        if(!this.root){
            return;
        }
        Node.leftPosition = 0;
        this.drawNode(this.root);
    }

    drawNode(node){
        if(node.left){
            this.drawNode(node.left);
        }
        else{
            Node.leftPosition++;
        }
        node.draw();
        if(node.left){
            this.drawLine(node, node.left);
        }
        if(node.right){
            this.drawNode(node.right);
            this.drawLine(node, node.right)
        }
        else
        {
            Node.leftPosition++;
        }
    }
    drawLine(nodeA, nodeB){
        if(nodeA && nodeB) {
            stroke('blue');
            strokeWeight(1);
            line(
                nodeA.x,
                nodeA.y + nodeB.radius + 2,
                nodeB.x,
                nodeB.y - nodeB.radius - 2
            )
        }
    }
}