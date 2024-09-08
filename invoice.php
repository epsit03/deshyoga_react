<?php
include 'db.php';

$patient_id = isset($_GET['patient_id']) ? $_GET['patient_id'] : null;
$patient_details = null;

if ($patient_id) {
    $patientQuery = "SELECT name, mobile_number, address, DATE_FORMAT(assigned_date, '%d/%m/%Y %r') as assigned_date, bed_number FROM patients WHERE id='$patient_id'";
    $patientResult = $conn->query($patientQuery);
    if ($patientResult && $patientResult->num_rows > 0) {
        $patient_details = $patientResult->fetch_assoc();
    }
}

// Fetch kriyas from the database
$kriyas = $conn->query("SELECT id, name, rate FROM kriyas");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Generation - Deshyoga Charitable Trust</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="invoice.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
</head>
<body>
    <div class="navbar">
        <a href="dashboard.php">Dashboard</a>
        <a href="assigned_beds.php">Assigned Beds</a>
        <a href="patient_history.php">Patient History</a>
        <a href="invoice.php">Generate Invoice</a>
    </div>
    <div class="header">
        <img src="logo.png" alt="Deshyoga Charitable Trust" class="logo">
        <h1>Invoice Generation</h1>
    </div>
    <div class="container">
        <form id="invoiceForm">
            <div class="form-group">
                <label for="patientName">Patient Name:</label>
                <input type="text" id="patientName" value="<?php echo $patient_details ? $patient_details['name'] : ''; ?>" readonly>
            </div>
            <div class="form-group">
                <label for="patientMobile">Mobile Number:</label>
                <input type="text" id="patientMobile" value="<?php echo $patient_details ? $patient_details['mobile_number'] : ''; ?>" readonly>
            </div>
            <div class="form-group">
                <label for="patientAddress">Address:</label>
                <textarea id="patientAddress" readonly><?php echo $patient_details ? $patient_details['address'] : ''; ?></textarea>
            </div>
            <div class="form-group">
                <label for="patientArrival">Arrival Date and Time:</label>
                <input type="text" id="patientArrival" value="<?php echo $patient_details ? $patient_details['assigned_date'] : ''; ?>" readonly>
            </div>
            <div class="form-group">
                <label for="patientBed">Bed Number Allotted:</label>
                <input type="text" id="patientBed" value="<?php echo $patient_details ? $patient_details['bed_number'] : ''; ?>" readonly>
            </div>
            <div class="form-group">
                <label for="kriya">Select Kriya:</label>
                <select id="kriya">
                    <?php while ($kriya = $kriyas->fetch_assoc()): ?>
                        <option value="<?php echo $kriya['id'] . '|' . $kriya['rate'] . '|' . $kriya['name']; ?>"><?php echo $kriya['name'] . ' - ₹' . $kriya['rate']; ?></option>
                    <?php endwhile; ?>
                </select>
                <button type="button" id="addKriyaBtn">Add Kriya</button>
            </div>
        </form>
        <table id="invoiceTable">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit Price (₹)</th>
                    <th>Total (₹)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Invoice items will be added here dynamically -->
            </tbody>
        </table>
        <div class="totals">
            <label for="discount">Discount (%):</label>
            <input type="number" id="discount" value="0" min="0" max="100">
            <p>Subtotal: ₹<span id="subtotal">0</span></p>
            <p>Final Total: ₹<span id="finalTotal">0</span></p>
        </div>
        <button type="button" id="printInvoiceBtn">Print Invoice</button>
    </div>
    <footer>
        <p>Copyright 2024, Developed and Designed by Mudit Bhargava</p>
        <p>Contact us: info@deshyogaashram.org</p>
        <p>Follow us:
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </p>
    </footer>
    <script src="invoice.js"></script>
</body>
</html>
