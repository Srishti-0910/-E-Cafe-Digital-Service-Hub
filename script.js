document.getElementById('formFill').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const documentType = document.getElementById('documentType').value;
    const address = document.getElementById('address').value;
  
    // Simple validation message (could be replaced with a real backend interaction)
    alert(`Form Submitted! \nName: ${name} \nEmail: ${email} \nDocument: ${documentType} \nAddress: ${address}`);
  
    // After form submission, you can reset the form (optional)
    document.getElementById('formFill').reset();
  });
  // Function to print the form
function printForm(formId) {
    const form = document.getElementById(formId);
    window.print();
  }
  
  // Show delivery request section based on form clicked
  document.getElementById('formFillGov').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('deliveryRequestGov').style.display = 'block';
  });
  
  document.getElementById('formFillBank').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('deliveryRequestBank').style.display = 'block';
  });
  
  document.getElementById('formFillNormal').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('deliveryRequestNormal').style.display = 'block';
  });
  
  // Handle delivery requests for Government Forms
  document.getElementById('deliveryFormGov').addEventListener('submit', function(event) {
    event.preventDefault();
    const formType = document.getElementById('formTypeGov').value;
    const numPages = parseInt(document.getElementById('numPagesGov').value);
    const printCost = formType === 'blackWhite' ? numPages * 2 : numPages * 5; // Cost calculation
    const deliveryCharge = 10; // Fixed delivery charge
    const totalCost = printCost + deliveryCharge; // Total cost
    document.getElementById('costDetailsGov').innerText = `Total Cost: ${totalCost}/- (Print: ${printCost}/-, Delivery: ${deliveryCharge}/-)`;
  });
  
  // Handle delivery requests for Legal Forms
  document.getElementById('deliveryFormBank').addEventListener('submit', function(event) {
    event.preventDefault();
    const formType = document.getElementById('formTypeBank').value;
    const numPages = parseInt(document.getElementById('numPagesBank').value);
    const printCost = formType === 'blackWhite' ? numPages * 2 : numPages * 5; // Cost calculation
    const deliveryCharge = 10; // Fixed delivery charge
    const totalCost = printCost + deliveryCharge; // Total cost
    document.getElementById('costDetailsBank').innerText = `Total Cost: ${totalCost}/- (Print: ${printCost}/-, Delivery: ${deliveryCharge}/-)`;
  });
  
  // Handle delivery requests for Normal Forms
  document.getElementById('deliveryFormNormal').addEventListener('submit', function(event) {
    event.preventDefault();
    const formType = document.getElementById('formTypeNormal').value;
    const numPages = parseInt(document.getElementById('numPagesNormal').value);
    const printCost = formType === 'blackWhite' ? numPages * 2 : numPages * 5; // Cost calculation
    const deliveryCharge = 10; // Fixed delivery charge
    const totalCost = printCost + deliveryCharge; // Total cost
    document.getElementById('costDetailsNormal').innerText = `Total Cost: ${totalCost}/- (Print: ${printCost}/-, Delivery: ${deliveryCharge}/-)`;
  });
  
