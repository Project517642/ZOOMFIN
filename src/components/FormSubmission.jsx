import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import PersonalLoanForm from "./AllLoanForms/PersonalLoanForm";
import HomeLoanForm from "./AllLoanForms/HomeLoanForm";
import CarLoanForm from "./AllLoanForms/CarLoanForm";
import OldCarLoanForm from "./AllLoanForms/OldCarLoanForm";
import CreditCardLoanForm from "./AllLoanForms/CreditCardLoanForm";
import MudraLoanForm from "./AllLoanForms/MudraLoanForm";
import PropertyLoanForm from "./AllLoanForms/PropertyLoanForm";
import BusinessLoanForm from "./AllLoanForms/BusinessLoanForm";
import ODLLoanForm from "./AllLoanForms/ODLLoanForm";
import SubsidyLoanForm from "./AllLoanForms/SubsidyLoanForm";
import FixedDepositLoanForm from "./AllLoanForms/FixedDepositLoanForm";
import EducationLoanForm from "./AllLoanForms/EducationLoanForm";
import GoldLoanForm from "./AllLoanForms/GoldLoanForm";

function FormSubmission() {
  return (
    <>
      <div className="bg-slate-100 h-auto py-5 w-full  flex flex-row gap-3.5 lg:gap-6 flex-wrap items-center justify-start px-3 lg:px-20 mt-14">
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLScIqNKD9vKc_jcH1p_mN-b3VOFZA8wDmlLjNEv74QKhmfJOcw/viewform?usp=sf_link"
        >
          Personal Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSdGwzBwrz_WlRPi-m5y9grKw21rmYokxnyrRshi07PobTOpQw/viewform?usp=sf_link"
        >
          Home Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSdR9Z-LDyGrExAomvhY9loyxBaw3rcRBjF6COfQ6M7iNr_JNQ/viewform?usp=sf_link"
        >
          Education Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSdfR_yCKoYh3s9wB_G8exbsAzyBAa0k4N4Z7-ZUxbYr5aqF9Q/viewform?usp=sf_link"
        >
          Car Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSeqcWgEWkOyLDZHRKHGhe78yE5nVcl3jjObA9WidTwRhi60wQ/viewform?usp=sf_link"
        >
          Mudra Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSdnKjyST3NS_OtJAcKEQdm_X12kVDGVz1Yq_xsi6H4ok4RywQ/viewform?usp=sf_link"
        >
          Old Car Loan purchase
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSc0EagcKGMMGzi53Jhm_ErU0kMVm-2MYePL5IoA_5H66h-f4A/viewform?usp=sf_link"
        >
          Property Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLScBzbAYpG47g_h0jJ49x4bSJ_QOPQO2IrliT7Cw6AOm6OtcEA/viewform?usp=sf_link"
        >
          Business Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSfPBGEoAj7ZXBvjk0T2n-RtRXW1xrRiswiuIaqIGdCC0EEZ2g/viewform?usp=sf_link"
        >
          Subsidy Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSf88yOVkpZFDvUtcM5mXA6l75ye-z1qJt_SJFaMNzG16D9w-Q/viewform?usp=sf_link"
        >
          Over Drafting Limit 
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSehvyCYrY7Zqxy0Os5SuZPUNHr0ppiFL3cNiVJzDZ6pt6cIug/viewform?usp=sf_link"
        >
          Fixed Deposit Loan Form
        </NavLink>
        <NavLink
          style={(e) => ({ color: e.isActive ? "red" : "" })}
          to="https://docs.google.com/forms/d/e/1FAIpQLSeFFG7LEShXQzAnfJfZ6m6CKB8UoHMnatVJRdJwT9SsagZ_kw/viewform?usp=sf_link"
        >
          Credit Card Loan Form
        </NavLink>
      </div>

      <Routes>
        <Route path="PersonalLoanForm" element={<PersonalLoanForm />} />
        <Route path="HomeLoanForm" element={<HomeLoanForm />} />
        <Route path="CarLoanForm" element={<CarLoanForm />} />
        <Route path="OldCarLoanForm" element={<OldCarLoanForm />} />
        <Route path="CreditCardLoanForm" element={<CreditCardLoanForm />} />
        <Route path="MudraLoanForm" element={<MudraLoanForm />} />
        <Route path="PropertyLoanForm" element={<PropertyLoanForm />} />
        <Route path="BusinessLoanForm" element={<BusinessLoanForm />} />
        <Route path="ODLLoanForm" element={<ODLLoanForm />} />
        <Route path="SubsidyLoanForm" element={<SubsidyLoanForm />} />
        <Route path="FixedDepositLoanForm" element={<FixedDepositLoanForm />} />
        <Route path="EducationLoanForm" element={<EducationLoanForm />} />
        <Route path="GoldLoanForm" element={<GoldLoanForm />} />
      </Routes>
    </>
  );
}

export default FormSubmission;
