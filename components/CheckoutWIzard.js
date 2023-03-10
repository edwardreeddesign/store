const CheckoutWIzard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, idx) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center ${
              idx <= activeStep
                ? 'border-indigo-500 text-indigo-500'
                : 'border-gray-400 text-gray-400'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};
export default CheckoutWIzard;
