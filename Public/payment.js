const buyPremiumButton = document.getElementById('buypremium');
let order;

buyPremiumButton.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Add the necessary data here
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    order = await response.json();

    const options = {
      key: 'rzp_test_l8Qgv3sCDGg8Cr',
      amount: order.amount,
      currency: order.currency,
      name: 'MJ5',
      description: 'Premium Plan',
      order_id: order.id,
      handler: createHandler(order) // Pass the order to the createHandler function
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error('Error:', error);
  }
});

function createHandler(order) {
  return async function (response) {
    try {
      alert('You are a Premium Member');
      console.log(order.id);
      console.log(response); // Log the entire response object
      const data = {
        orderId: order.id,
        paymentId: response.razorpay_payment_id,
        status: 'Success'
      };
      console.log('dataaaaa', data.paymentId);

      const fetchResponse = await fetch('http://localhost:3000/membershipupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!fetchResponse.ok) {
        throw new Error('Failed to update membership');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
