<html>
<head>
<title> Non-Seamless-kit</title>
</head>
<body>

<?php include('Crypto.php')?>
<?php

	error_reporting(0);

	$merchant_data='2';
	$working_key='9A904794C6303DA7892A8B416EC72874';//Shared by CCAVENUES
	$access_code='AVGZ90KG71BR19ZGRB';//Shared by CCAVENUES

	foreach ($_POST as $key => $value){
		$merchant_data.=$key.'='.$value.'&';
	}

	$encrypted_data=encrypt($merchant_data,$working_key); // Method for encrypting the data.

?>
<form method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
<?php
echo "<input type=hidden name=encRequest value=$encrypted_data>";
echo "<input type=hidden name=access_code value=$access_code>";
?>
</form>

<script language='javascript'>document.redirect.submit();</script>
</body>
</html>
