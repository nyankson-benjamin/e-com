import { PaystackButton } from "react-paystack";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Paystack({ amount, handlePurchase, loading, disabled, email }) {
  const { user } = useSelector((state) => state.userDetails);

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email || email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency: "GHS",
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    handlePurchase();
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
    <PaystackButton
      {...componentProps}
      className={
        ["flex items-center justify-center p-2 rounded-lg text-[white] hover:shadow-md ", disabled ? 'bg-[#d2d2d2]':'bg-[#ffc801] hover:bg-[#f9c818]'].join(' ')
      }
      disabled={disabled}
    />
  );
}

Paystack.propTypes = {
  amount: PropTypes.string.isRequired,
  handlePurchase: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  email:PropTypes.string
};
export default Paystack;
