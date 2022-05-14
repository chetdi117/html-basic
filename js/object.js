let objects = {
  id: 0,
  name: "",
  set id(value) {
    this.id = value;
  },
  get id() {
    return this.id;
  },

  set name(value) {
    this.name = value;
  },
  get name() {
    return this.name;
  },
};
let data = [];
let obj1 = new Object();
let obj2 = new Object();
obj1.id = 1;
obj1.name = "obj1";

obj2.id = 2;
obj2.name = "obj2";

data.push(obj1);
data.push(obj2);
console.log("obj1", obj1.name, obj1.id);
console.log("obj2", obj2.name, obj2.id);
console.log("data", data);
