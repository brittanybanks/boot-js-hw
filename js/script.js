$(".changeBtn1").click(function() {
    console.log("click is working Button 1ve")
    ;
 $(".firstDiv").addClass("firstDivNew")
})
$(".changeBtn2").click(function() {
    console.log("click is working Button 2")
    ;
    
    $(".secondDiv").css("background", "yellow");
    $(".secondDiv").css("border-color", "blue");

$(".changeBtn3").click(function() {
    console.log("click is working Button 3")
    ;
})
$(".changeAllBtn").click(function() {
    console.log("click is working Change All")
    ;
    $(".firstDiv").addClass("changeAllColors");
    $(".secondDiv").addClass("firstDivNew");
    $(".thirdDiv").css("background", "orange");
    $(".thirdDiv").css("border-color", "yellow");
})

$(".hideBox1").click(function(){
    $(".firstDiv").hide();
})

$(".hideBox2").click(function(){
    $(".secondDiv").hide();
})

$(".hideBox3").click(function(){
    $(".thirdDiv").hide();
})

$(".hideAllBox").click(function(){
    $(".firstDiv").hide();
    $(".secondDiv").hide();
    $(".thirdDiv").hide();

})

$(".resetColors").click(function(){
    $(".firstDiv").css("background", "red");
    $(".secondDiv").css("background", "blue");
    $(".thirdDiv").css("background", "limegreen");
 })

 $(".showAllBoxes").click(function(){
    $(".firstDiv").show();
    $(".secondDiv").show();
    $(".thirdDiv").show();
 })