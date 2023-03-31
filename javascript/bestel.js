
function order(mealName, people, pricePerPerson) {
    const orderSummary = document.getElementById('order-summary');
    const orderDetails = document.getElementById('order-details');
    
    const totalPrice = people * pricePerPerson;
    let discountedPrice = totalPrice;
  
    if (totalPrice > 50) {
      discountedPrice = totalPrice * 0.85;
    }
  
    const summaryText = `
      <p>Maaltijd: ${mealName}</p>
      <p>Aantal personen: ${people}</p>
      <p>Totaalbedrag: €${discountedPrice.toFixed(2)}</p>
    `;
  
    orderDetails.innerHTML = summaryText;
    orderSummary.style.display = 'block';
  }
  