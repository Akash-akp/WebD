class akash{
    constructor(roll,mark){
        this.roll = roll;
        this.mark = mark;
    }

    getMark(){
        return this.mark;
    }
}
var ab = readInt("What is a?");
var a = new akash(41,100);
console.log(a.getMark());