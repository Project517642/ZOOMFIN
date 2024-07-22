
import FormfacadeEmbed from "@formfacade/embed-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BusinessLoanForm() {
  const handleSubmit=()=>{
    toast.success("Thank you for your interest in our business loan program. We will be in touch")
  }
  
  return (

    <>
      <ToastContainer/>
      <div className="bg-blue-50">
      <h1 className="text-center font-extrabold my-5 lg:text-3xl">
        Apply for a Business Loan
      </h1>
      <FormfacadeEmbed  
      formFacadeURL="https://formfacade.com/include/105274761100689174285/form/1FAIpQLSehvyCYrY7Zqxy0Os5SuZPUNHr0ppiFL3cNiVJzDZ6pt6cIug/classic.js/?div=ff-compose" 
      onSubmitForm={handleSubmit} /></div>
      


    </>
  );
}

export default BusinessLoanForm;
