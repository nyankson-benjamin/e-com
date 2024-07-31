import useVerifyOtp from "../../Hooks/UseVerifyOtp";
import OtpInput from "react-otp-input";
import VerifyEmailButton from "../Buttons/VerifyEmailButton";
import BackButton from "../Buttons/BackButton";
import Alerts from "../Alert/Alerts";
export default function VerifyEmail() {
  const renderInput = (props) => <input {...props} />;

  const [
    handleOTPChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    disable,
    otp,
    otpInputRef,
    hasErrored,
    alerts,
    handleCloseAlert,
  ] = useVerifyOtp();
  return (
    <div className="otp">
      {" "}
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
      <h3 className="my-4">Verify your Email</h3>
      <OtpInput
        ref={otpInputRef}
        value={otp}
        onChange={handleOTPChange}
        numInputs={4}
        isInputNum
        isInputRequired
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        renderInput={renderInput}

        
        placeholder={["0", "0", "0", "0"]}
        hasErrored={hasErrored}
        errorStyle={{ border: "2px solid red" }}
        focusStyle={{ border: "2px solid #1F4EB4", outline: "none" }}
        inputStyle={{margin:"5px"}}
      />
      <br />
      <VerifyEmailButton handleSubmit={handleSubmit} disable={disable} />
      <BackButton />
    </div>
  );
}
