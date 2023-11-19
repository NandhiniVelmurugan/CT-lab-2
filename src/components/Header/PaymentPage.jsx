import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [country, setCountry] = useState('');
  const [processingPayment, setProcessingPayment] = useState(false);

  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const processPayment = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setPaymentStatus('Please enter a valid amount.');
      return;
    }

    if (!selectedPaymentMethod) {
      setPaymentStatus('Please select a payment method.');
      return;
    }

    if (!cardNumber || !expiration || !cvc || !cardName || !country) {
      setPaymentStatus('Please fill out all the card details.');
      return;
    }
    setProcessingPayment(true);

    setPaymentStatus('Payment sent successfully!');

    setTimeout(() => {
      setPaymentStatus('');
      setProcessingPayment(false);
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div
        className={`payment-method ${selectedPaymentMethod === 'gpay' ? 'selected' : ''}`}
        onClick={() => selectPaymentMethod('gpay')}
      >
        <img
          className="payment-icon"
          src="https://static.vecteezy.com/system/resources/previews/021/672/629/non_2x/google-pay-logo-transparent-free-png.png"
          alt="Google Pay"
        />
        Google Pay
      </div>

      <div
        className={`payment-method ${selectedPaymentMethod === 'upi' ? 'selected' : ''}`}
        onClick={() => selectPaymentMethod('upi')}
      >
        UPI
      </div>

      <div
        className={`payment-method ${selectedPaymentMethod === 'phonepe' ? 'selected' : ''}`}
        onClick={() => selectPaymentMethod('phonepe')}
      >
        <img
          className="payment-icon"
          src="https://cdn.iconscout.com/icon/free/png-256/free-phonepe-2709167-2249157.png" 
          alt="PhonePe"
        />
        PhonePe
      </div>

      <div>
        {selectedPaymentMethod === 'gpay' && (
          <img
            className="payment-image"
            src="./gpay.jpeg"
            alt={`${selectedPaymentMethod} Image`}
          />
        )}

        {selectedPaymentMethod === 'phonepe' && (
          <img
            className="payment-image"
            src="./pay.jpeg" // Replace with the actual PhonePe image URL
            alt={`${selectedPaymentMethod} Image`}
          />
        )}
      </div>

      <div className="payment-form">
        <h2>Payment Details</h2>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiration (MM/YY)"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={processPayment} disabled={processingPayment}>
          {processingPayment ? 'Processing...' : 'Pay Now'}
        </button>
        <p className="payment-status">{paymentStatus}</p>
      </div>
    </div>
  );
}

export default PaymentPage;
