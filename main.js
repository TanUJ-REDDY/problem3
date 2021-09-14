function getpara1(){
    var inputs = []
    for(var i = 1; i <=6 ; i++){
        inputs.push(document.getElementById("para1" + i).value)
    }
    document.getElementById("show_para1").innerHTML = inputs.join(". ")
}
function getpara2(){
    var inputs = []
    for(var i = 1; i <=6 ; i++){
        inputs.push(document.getElementById("para2" + i).value)
    }
    document.getElementById("show_para2").innerHTML = inputs.join(". ")
}