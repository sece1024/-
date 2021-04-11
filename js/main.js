// piece of code that does one or more actions
function go() {
    alert('hi');
    alert('hey there');
}
function go2(name, age) {
    alert(name);
    alert(age);
}
function go3(name = prompt(), age = prompt()) {
    alert(name);
    alert(age);
}
go3()