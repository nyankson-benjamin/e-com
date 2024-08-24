import { PaystackButton } from "react-paystack";
import PropTypes from "prop-types";


function Paystack({ amount, handlePurchase, email, loading }) {

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency: "GHS",
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    handlePurchase()
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: loading ? "Loading..." : `Checkout (${amount})`,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div
      className="bg-[#ffc801] flex 
      items-center justify-center py-2 
      rounded-lg text-[white] hover:shadow-md hover:bg-[#f9c818]"

    >
      <PaystackButton {...componentProps} class={"bg-[red]"} />
    </div>
  );
}

Paystack.propTypes = {
  amount: PropTypes.string.isRequired,
  handlePurchase: PropTypes.func.isRequired,
  email:PropTypes.email,
  loading:PropTypes.bool
};
export default Paystack;
