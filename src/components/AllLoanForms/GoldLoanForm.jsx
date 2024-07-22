import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GoldLoanForm() {
  const [agree, setAgree] = useState(false);
  const handleTermsAndCondition = () => {
    setAgree(!agree);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      // अगर user ने agree कर दिया है तोह पहले 1sec तक toast दिखेगा
      toast.success("We will contact you within 24hrs");
      setTimeout(() => {
        // फिर backend में data भेज देंगे admin के पास
      }, 1000);
    } else {
      // alert("Please agree to the terms and conditions.");
      toast.warn("Please agree to the terms and conditions first.");
    }
  };
  return (
    <>
        <ToastContainer/>
     <div className="">
      <iframe className="googleform" src="https://docs.google.com/forms/d/e/1FAIpQLSeuPENYmHd9dMjBlWXvGLIc7yyqdSjSW1w8yJ7HvHbDUZjtrg/viewform" width="100%" height="900">
        Loading…
      </iframe>
    </div>
    </>
  );
}

export default GoldLoanForm;
