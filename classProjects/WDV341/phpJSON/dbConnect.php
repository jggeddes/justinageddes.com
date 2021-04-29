<?php

	/* Connects your PHP application to a database. Allows them to comminicate  */
	
	//NOTE: DO NOT include this file in your repo. Use .gitignore to leave this out.
	
	$userName = "justina20_wdv341";		//username used to sign on to the database. Depends on host.
	$password = "2341#CEj";		//password used to sign on to the database
	
		//XAMPP default username=='root' and password=''
	
	$serverName = "localhost";		//identifies the database server
									//most common is localhost 
	$databaseName = "justina20_wdv341";		//the database to access

	
	try {
		
		$conn = new PDO("mysql:host=$serverName;dbname=$databaseName",$userName,$password);
		
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);  //prpared statements
		
		echo "Connected Successfully";		//TESTING purposes
		}
	catch (PDOException $e) {
		
		echo "Problems.....";
		
		error_log($e->getMessage() );
		error_log( var_dump(debug_backtrace() ) );
		
		}

?>