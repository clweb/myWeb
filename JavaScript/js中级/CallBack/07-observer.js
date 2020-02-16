//被观察者
class Subject {
    constructor(name) {
        this.name = name;
        //存放所有观察者
        this.observers = [];
        this.mood = '心情愉悦';
    }
    //接受观察者方法
    attach(observer) {
        this.observers.push(observer);
    }
    setMood(newMood) {
        this.mood = newMood;
        this.observers.forEach(o => o.update(newMood))
    }
}

//观察者
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(sub, newMood) {
        console.log(this.name + ':');
        console.log(sub.name + newMood);
    }
}

let sub = new Subject('girl');
let ob1 = new Observer('boy friend');
let ob2 = new Observer('father');
sub.attach(ob1);
sub.attach(ob2);
sub.setMood('心情糟糕');