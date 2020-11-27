function picload(){
var x = document.getElementById("ph").files.item(0).name;
document.getElementById("pho").src = x;

}

function picload1(){
	alert("1");
	var img = document.createElement("IMG");
alert(img);
  img.src = document.getElementById('ph').files.item(0).name;
  alert(img.src);
document.getElementById('div').appendChild(img);
}

$(function(){

$("#create").click(function(){
db.transaxtion(function(transaction){
    var sql="CREATE TABLE items" + 
    "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT"+
    "item VARCHAR(100) NOT NULL,"+
    "quantity INT(5) NOT NULL)";
transaction.executeSql(sql,undefined, 
    function(){
    alert("Data is created successfully");
},function(){
    alert("Table is already being created");
})
});
});
})

function db(){
    db.transaxtion(function(transaction){
        var sql="CREATE TABLE items" + 
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT"+
        "item VARCHAR(100) NOT NULL,"+
        "quantity INT(5) NOT NULL)";
    transaction.executeSql(sql,undefined, 
        function(){
        alert("Data is created successfully");
    },function(){
        alert("Table is already being created");
    })
    });



}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
