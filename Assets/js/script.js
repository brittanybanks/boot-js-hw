$(".changeBtn1").click(function() {
    console.log("click is working Btn 1");

 $(".firstDiv").addClass("firstDivNew");

})

$(".changeBtn2").click(function() {
    console.log("click is working Btn 2");
    
    $(".secondDiv").css("background", "yellow");
    $(".secondDiv").css("border-color", "blue");
})

$(".changeBtn3").click(function() {
    console.log("click is working Btn 3");

    $(".thirdDiv").css("background", "black");
    $(".thirdDiv").css("border-color", "orange");
})

$(".changeAllBtn").click(function() {
    console.log("click is working Change All");

    $(".firstDiv").addClass("changeAllColors");
    $(".secondDiv").addClass("firstDivNew");
    $(".thirdDiv").css("background", "orange");
    $(".thirdDiv").css("border-color", "yellow");
})

$(".hideBtn1").click(function(){
    $(".firstDiv").hide();
})

$(".hideBtn2").click(function(){
    $(".secondDiv").hide();
})

$(".hideBtn3").click(function(){
    $(".thirdDiv").hide();
})

$(".hideAllBtn").click(function(){
    $(".firstDiv, .secondDiv, .thirdDiv").hide();
    
})

$(".resetColors").click(function(){
    $(".firstDiv").reset();
    $(".secondDiv").reset();
    $(".thirdDiv").reset();
 })

 $(".showAllBoxes").click(function(){
    $(".firstDiv").show();
    $(".secondDiv").show();
    $(".thirdDiv").show();
})
