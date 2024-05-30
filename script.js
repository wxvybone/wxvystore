const authToken = '4iw2WmO4KKhrBVCHCfUmlDu19WpUAk0VvQPjA8l5'; // Replace 'Your_Printful_Authentication_Token' with your actual Printful authentication token

async function fetchOrders() {
  try {
    const response = await fetch('https://api.printful.com/orders', {
      headers: {
        'Authorization': `Bearer ${authToken}`, // Use Bearer token authentication
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data.result; // Return the array of orders
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    return []; // Return an empty array in case of error
  }
}

// Usage example:
fetchOrders()
  .then(orders => {
    console.log('Orders:', orders);
    // Do something with the orders, such as displaying them on your website
  })
  .catch(error => {
    console.error('Error:', error);
  });
