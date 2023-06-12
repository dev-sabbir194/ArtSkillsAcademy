import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./Payment.css";

const Payment = () => {
  const { classId } = useParams();

  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { cardNumber, expirationDate, cvv } = paymentInfo;
    const isValid = cardNumber && expirationDate && cvv;
    setIsFormValid(isValid);
  }, [paymentInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

const handlePayment = async () => {
  // Show processing alert
  Swal.fire({
    icon: "info",
    title: "Processing Payment",
    showConfirmButton: false,
    timer: 5000, // Display the alert for 5 seconds
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  // Perform payment processing logic here
  // You can use an API or payment gateway integration library

  // Simulating payment processing with a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Set payment status
  setPaymentStatus("success");

  // Show success notification
  Swal.fire({
    icon: "success",
    title: "Payment Successful",
    text: "Thank you for your payment!",
  }).then((result) => {
    // Redirect to MyClass page or any other desired page
    if (result.isConfirmed) {
      window.location.replace("/myclass");
    }
  });
};

    
    
    

    


    


    
  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2 className="payment-title">Payment Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary payment-button"
              onClick={handlePayment}
              disabled={!isFormValid}
            >
              Process Payment
            </button>
          </div>
        </form>
        {paymentStatus && (
          <p className="payment-status">Payment Status: {paymentStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
