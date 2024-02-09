var input = document.getElementById("input");
var evalvalue = document.getElementById("eval-value");
function addvalue(num) {
    input.value += num;
    var possibleanswer = eval(input.value);
    evalvalue.value = possibleanswer;
}
function evaluation() {
    var answer = eval(input.value);
    input.value = answer;
    evalvalue.value = "";
    if (input.value == "undefined") {
        input.value = "";
    }

}
function clearall() {
    input.value = "";
}
function clearall2() {
    evalvalue.value = "";
}
function back() {
    input.value = input.value.slice(0, -1);
    evalvalue.value = eval(input.value);
    if (evalvalue.value == "undefined") {
        evalvalue.value = "";
    }
}
function evalvalue() {
    evalvalue.value = eval(input.value);
}
