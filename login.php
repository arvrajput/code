<?php
$server="localhost";
$username="root";
$password="";

$con = mysqli_connect($server,$username,$password);

if(!$con){
die("Connection to database failed due to". mysqli_connect_error());

}

    echo"Successful connection";
$uname = $_POST['uname'];
$pass = $_POST['pass'];    
$sql="INSERT INTO `db`.`login`(`uname`,`pass`) VALUES ('$uname','$pass');";

if($con->query($sql) ==true){
echo"succewssfully inserted";

}
else{
    echo"not successful";
}

?>


<!-- <?php
$server="localhost";
$username="root";
$password="";

$con = mysqli_connect($server,$username,$password);

if(!$con){
die("Connection to database failed due to". mysqli_connect_error());

}

    echo"Successful connection";
$uname = $POST['uname'];
$passwo = $POST['pass'];    
$sql="SELECT * FROM `db`.`login` WHERE `uname` value = '$uname');";

$row = mysql_fetch_array($sql);

if ($row['uname'] ==$uname && $row['pass'] == $passwo) {
    echo"Success";
    
}


$result = $conn->query($sql);
if ($result->num_rows == $passwo) {
    echo"login successful";
}

if($con->query($sql) ==true){
echo"succewssfully inserted";

}
else{
    echo"not successful";
}

?> -->

