<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deshyoga Charitable Trust</title>
<style>
    body {
        margin: 0;
        padding: 0;
    }

    .hero {
       width: 100%;
        max-width: 1000px;
        border: 2px solid black;
        margin: 0 auto;
        background-image: url(Screenshot\ 2024-04-08\ 181253.png);
        background-repeat: repeat ;
        background-size: contain;
        
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1000px; /* Limit maximum width */
        width: 100%; /* Adjust to your preference */
        height: fit-content;
        padding: 20px; /* Adding padding for spacing */
        margin: 0 auto; /* Center the container horizontally */
        flex-wrap: wrap; /* Allow content to wrap to the next line */
    }
    .image {
        max-width: 100px;
        height: auto;
        display: block;
    }
    .text {
        margin: 0 20px; /* Adjust margin for spacing */
        color: black;
        font-size: 32px;
        font-weight: bold;
        flex: 1; /* Allow text to grow as needed */
        text-align: center; /* Center text */
        white-space: nowrap; /* Prevent text from wrapping */
    }
    .address {
        font-size: 15px;
        font-weight: bold;
        color: white;
        text-align: center;
        background-color: #eb7c9d;
        padding: 10px; /* Adding padding for better appearance */
    }
    .regn {
        margin-top: 10px; /* Adjust spacing as needed */
        text-align: center; /* Center text */
        font-weight: bold;
    }
    .donation {
        text-align: center; /* Center text */
        width: 100%; /* Ensure full width */
        font-weight: bold;
    }
    table, th, td {
  border: 0px solid white;
  border-collapse: collapse;
  margin-left: 10px;
}
th, td {
    
  text-align: left;
  padding-top: 15px;
}

.button {
        margin: 20px auto; /* Center button horizontally */
        height: 35px;
        border: 2px solid black;
        display: block; /* Make button a block-level element */
    }
    
    
    .button1 {
    height: 35px;
    margin-left: 45%;
    margin-bottom: 12px;
    border: 2px solid black;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.button1:hover {
    background-color: #ccc;
}
    /* Media query for smaller screens */
    @media (max-width: 600px) {
    
    
    .hero {
       width: 100%;
        border: 2px solid black;
        margin: 0 auto;
        background-image: url(Screenshot\ 2024-04-08\ 181253.png);
        background-repeat: no-repeat ;
        background-size: cover;
        
    }
        .container {
            flex-direction: row;
            justify-content: center;
        }

        .text {
        font-size: 24px;
        margin-left: 20px;
        text-align: left;
        }

        .address {
        font-size: 10px;
        font-weight: bold;
        color: white;
        background-color: #eb7c9d;
        margin-top: 0;
        }
    }


    @media print {
        @page {
            size: landscape; /* Set page orientation to landscape */
        }
        .hero {
            background-image: url(Screenshot\ 2024-04-08\ 181253.png);
        background-repeat: repeat ;
        background-size: contain;
        }
        .container {
            max-width: 100%; /* Ensure container takes full width */
        }

        .image {
        width: 100px;
        height: 100px;
        
    }
        .button {
            display: none; /* Hide print button when printing */
        }
        
        .button1 {
            display: none; /* Hide print button when printing */
        }
        
         .address {
            background-color: #eb7c9d !important; /* Override background color for printing */
            color: white !important; /* Override text color for printing */
        }

        .text {
            color: black !important; /* Override text color for printing */
        }
    }
</style>
</head>
<body>
    <?php include('Crypto.php')?>
<?php

	error_reporting(0);
	
	$workingKey='9A904794C6303DA7892A8B416EC72874';		//Working Key should be provided here.
	$encResponse=$_POST["encResp"];			//This is the response sent by the CCAvenue Server
	$rcvdString=decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
	$order_status="";
	$decryptValues=explode('&', $rcvdString);
	$dataSize=sizeof($decryptValues);

	for($i = 0; $i < $dataSize; $i++) 
	{
        $information = explode ( '=', $decryptValues [$i] );
        $responseMap [$information [0]] = $information [1];  
	}

    $order_status = $responseMap ['order_status'];
    
    
    $order_id = $responseMap ['order_id'];          
$tracking_id = $responseMap ['tracking_id'];
$bank_ref_no = $responseMap ['bank_ref_no'];
$order_status = $responseMap ['order_status'];    
$payment_mode = $responseMap ['payment_mode'];
$card_name = $responseMap ['card_name'];
$status_code = $responseMap ['status_code'];
$status_message = $responseMap ['status_message'];
$currency = $responseMap ['currency'];
$amount = $responseMap ['amount'];
$PAN = $responseMap ['PAN'];
$billing_name = $responseMap ['billing_name'];        
$billing_address = $responseMap ['billing_address'];   
$billing_tel = $responseMap ['billing_tel'];               
$billing_email = $responseMap ['billing_email'];     
$bill_course = $responseMap['merchant_param1'];        
$trans_date = $responseMap ['trans_date'];           
$token_eligibility = $responseMap ['token_eligibility'];
$response_code = $responseMap ['response_code'];
    
	if($order_status=="Success")
	{
		echo "<br><strong><span style='font-size: 14px; text-align: center; display: block;'> Your Payment is Successful.</span> <br><span style='font-size: 10px; text-align: center; display: block;'> Congratulations Mr/Mrs $billing_name, Welcome to Deshyoga Family. </span><br></strong> <br> <a href='deshyoga.org' class='button1'>Go To Course Page</a>";
		
	}
	else if($order_status=="Aborted")
	{
		echo "<br><strong><span style='font-size: 14px; text-align: center; display: block;'>Your Payment has Been Aborted. <br> Please try next-time. <span></strong><br>";
	
	}
	else if($order_status==="Failure")
	{
		echo "<br><span style='font-size: 14px; text-align: center; display: block;'>The transaction has been declined. <br> Please try again or Contact This Number - <strong> +91-8005320463 </strong></span><br>  ";
	}
	else
	{
		echo "<br><span style='font-size: 14px; text-align: center; display: block;'>Thank you for the payment initiated. Your transaction is unsuccessful. <br> Please try again or contact this number:  <strong>+91-8005320463</strong></span> <br>";
	}

    echo"<div class='hero'>
<div class='container'>
    <img src='swami_ji1-200x200.png.webp' alt='Image 1' class='image'>
    <div class='text'>
        <span>DESHYOGA CHARITABLE TRUST</span>
        <div class='address'>KH NO. 1001, 3rd floor, Street 14/1, Jagatpur Extension, Delhi- 110084, India</div>
    </div>
    <img src='logo-200x200.jpg.jpg' alt='Deshyoga logo' class='image'>
</div>
<div class='regn'>
    <div>(Regn No. 1509 & PAN No. AADTD3635K)</div>
    <div class='donation'>Donation Receipt</div>
</div>
<table>
    <tr>
    <td>Date: ______________</td>
    <td>$trans_date</td>
    </tr>

        <tr>
        <th>Recieved Amount:</th>
        <td colspan='2'>&nbsp;</td>
        <td><strong>$amount / $currency</strong></td>
        </tr>

        <tr>
        <th>Course Name</td>
        <td><strong>$bill_course</strong></td>
        </tr>
          
        <tr>
        <th>Order ID</th>
        <td><strong>$order_id</strong></td>
        </tr> 
            
        <tr>
        <th> Name:</th>
        <td><strong>$billing_name</strong></td>
        </tr>
        <tr>
        <th>Address:</th>
        <td> <strong>$billing_address</strong> </td>
        </tr>
        
        <tr>
        <th>PAN Card Details:</th>
        <td> <strong>$PAN</strong> </td>
        </tr>

        <tr>
        <th>Contact Details:</th>
        <td><strong>$billing_tel</strong> </td>
        </tr>
        
        <tr>
        <th>Email Details:</th>
        <td><strong>$billing_email</strong></td>
        </tr>

        <tr>
        <th>Order Status</th>
        <td><strong>$order_status</strong></td>
        </tr>

</table>

<div class='donation'>
    <span>Thanks For Your Donation</span>
    <p>Donation Exempted U/S 80-G of the Income Tax Act 1961 Vide Letter No. F.No. CIT (EXEMPTION), Delhi/2019-20/80G/11389 dt. 25/03/2021 Valid from 30/01/2020
   <br> Donation Exempted U/S 12AA of the Income Tax Act 1961 Vide Letter No. F.No. CIT (EXEMPTION), Delhi/2020-21/12AA/10173 dt. 25/03/2021 Valid from 30/01/2020</p>
</div>
<table style='width:100%; text-align: centre; font-weight:bold; margin-left: 38px;'>
  <tr>
    <td>Helpline No.: 8800338313</td>
    <td>Website: www.deshyoga.org</td>
    <td>Email: deshyoga2017@gmail.com</td>
  </tr>
</table>

</div>"
?>
<button class="button" onclick="window.print()">Print Page</button> 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>


</body>
</html>