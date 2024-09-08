$(document).ready(function () {
    var kriyaCounter = 0;

    // Add Kriya Button
    $("#addKriyaBtn").click(function () {
        var kriyaDetails = $("#kriya").val().split('|');
        var kriyaId = kriyaDetails[0];
        var kriyaRate = parseFloat(kriyaDetails[1]);
        var kriyaName = kriyaDetails[2];

        kriyaCounter++;

        var newRow = `
            <tr id="kriyaRow${kriyaCounter}">
                <td>${kriyaName}</td>
                <td><input type="number" class="qty" data-rate="${kriyaRate}" value="1" min="1"></td>
                <td>${kriyaRate.toFixed(2)}</td>
                <td class="total">${kriyaRate.toFixed(2)}</td>
                <td><button class="removeKriyaBtn">Remove</button></td>  <!-- Add remove button -->
            </tr>
        `;

        $("#invoiceTable tbody").append(newRow);
        calculateTotals();
    });

    // Event Listener for Quantity Change
    $(document).on('input', '.qty', function () {
        var qty = $(this).val();
        var rate = $(this).data('rate');
        var total = qty * rate;
        $(this).closest('tr').find('.total').text(total.toFixed(2));
        calculateTotals();
    });

    // Event Listener for Remove Button
    $(document).on('click', '.removeKriyaBtn', function () {
        $(this).closest('tr').remove();  // Remove the row
        calculateTotals();  // Recalculate totals after removal
    });

    // Event Listener for Discount Input
    $("#discount").on('input', function () {
        calculateTotals();
    });

    // Calculate Subtotal, Discount, and Final Total
    function calculateTotals() {
        var subtotal = 0;
        $(".total").each(function () {
            subtotal += parseFloat($(this).text());
        });

        var discount = $("#discount").val();
        var discountAmount = subtotal * (discount / 100);
        var finalTotal = subtotal - discountAmount;

        $("#subtotal").text(subtotal.toFixed(2));
        $("#finalTotal").text(finalTotal.toFixed(2));
    }

    // Get Invoice Table Content for Printing
    function getInvoiceTableContent() {
        var rows = [];
        $("#invoiceTable tbody tr").each(function () {
            var row = [];
            $(this).find("td").each(function (index) {
                if (index === 1) {
                    row.push($(this).find("input").val());  // Quantity input field
                } else if (index !== 4) {
                    row.push($(this).text());  // Skip remove button cell
                }
            });
            rows.push(row);
        });

        var tableContent = '';
        rows.forEach(function (row) {
            tableContent += '<tr>';
            row.forEach(function (cell) {
                tableContent += `<td>${cell}</td>`;
            });
            tableContent += '</tr>';
        });

        return tableContent;
    }

    // Print Invoice
    $("#printInvoiceBtn").click(function () {
        var patientName = $("#patientName").val();
        var patientMobile = $("#patientMobile").val();
        var patientAddress = $("#patientAddress").val();
        var patientArrival = $("#patientArrival").val();
        var patientBed = $("#patientBed").val();

        var invoiceContent = `
          <div class="header">
              <img src="logo.png" alt="Deshyoga Charitable Trust" class="logo">
          </div>
          <h3>Invoice</h3>
          <p><strong>Visitor Name:</strong> ${patientName}</p>
          <p><strong>Mobile Number:</strong> ${patientMobile}</p>
          <p><strong>Address:</strong> ${patientAddress}</p>
          <p><strong>Arrival Date and Time:</strong> ${patientArrival}</p>
          <p><strong>Bed Number Allotted:</strong> ${patientBed}</p>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit Price (₹)</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${getInvoiceTableContent()}
            </tbody>
          </table>
          <div class="totals">
            <p>Subtotal: ₹<span>${$("#subtotal").text()}</span></p>
            <p>Discount: <span>${$("#discount").val()}</span>%</p>
            <p>Final Total: ₹<span>${$("#finalTotal").text()}</span></p>
          </div>
        `;

        var newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write(`
            <html>
            <head>
                <title>Invoice - Deshyoga Charitable Trust</title>
                <style>
                    body {
                        font-family: 'Roboto', sans-serif;
                        color: #142d4c;
                        margin: 20px;
                    }
                    .header {
                        text-align: center;
                    }
                    .header .logo {
                        width: 100px;
                        height: auto;
                        display: block;
                        margin: 0 auto;
                    }
                    h2, h3 {
                        margin: 0;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    table, th, td {
                        border: 1px solid #142d4c;
                        padding: 10px;
                        text-align: left;
                    }
                    .totals {
                        text-align: right;
                        margin-top: 20px;
                    }
                    .totals p {
                        margin: 5px 0;
                    }
                </style>
            </head>
            <body>
                ${invoiceContent}
            </body>
            </html>
        `);
        newWindow.document.close();
        newWindow.print();
    });
});
