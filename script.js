const apiKey = '4iw2WmO4KKhrBVCHCfUmlDu19WpUAk0VvQPjA8l5'; // Replace with your actual API key

async function fetchOrders() {
  try {
    const response = await fetch('https://api.printful.com/orders', {
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    displayResults(data.result);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
  }
}

function displayResults(orders) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.classList.add('order');

    // Display order information
    orderDiv.innerHTML = `
      <h3>Order ID: ${order.id}</h3>
      <p>Status: ${order.status}</p>
      <p>Total: $${order.costs.total}</p>
    `;

    resultsDiv.appendChild(orderDiv);
  });
}

fetchOrders();