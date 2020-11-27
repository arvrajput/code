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
