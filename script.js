// Function to show an alert when the button is clicked
function showAlert() {
    alert("Thank you for visiting our website!");
  }
  
  // Function to change the text of a paragraph when the button is clicked
  function changeText() {
    const paragraph = document.getElementById("dynamic-text");
    if (paragraph) {
      paragraph.textContent = "Thank you for visiting our store!";
    }
  }
  
  // Function to handle form submission
  function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been submitted. We will contact you at ${email}.`);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  }
  
  // Function to add a product to the cart (simulated)
  function addToCart() {
    const cartMessage = document.getElementById("cart-message");
    if (cartMessage) {
      cartMessage.textContent = "Product added to cart!";
      cartMessage.style.color = "green";
    }
  }