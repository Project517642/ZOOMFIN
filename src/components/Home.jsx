// import React from "react";
import Card from "./Card";
import SubNavBar from "./SubNavBar";
import { HiArrowCircleUp } from "react-icons/hi";
import Footer from "../components/Footer";
import cash from "../images/cash.png";
import cibil from "../images/cibil.png";
import document from "../images/document.png";
import money from "../images/money.png";
import percentage from "../images/percentage.png";
import rename from "../images/rename.jpg";



function Home() {
  const typesOfLoansCardData = [
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2024/01/news18-bl-zb-2024-01-4fe9a2440d19ff7c57f54bbcbf082503-3x2.jpg",
      title: "Personal Loan",
      description:
        "A personal installment loan is a type of loan where you borrow a sum of money and must pay it back in fixed amounts called “installments.”",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLScIqNKD9vKc_jcH1p_mN-b3VOFZA8wDmlLjNEv74QKhmfJOcw/viewform?usp=sf_link",
    },
    {
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2017-08/18/full/1502995406-2851.jpg",
      title: "Home Loan",
      description:
        "A Home Loan allows you to claim income tax deductions on the interest and principal amount due. Under the Income Tax Act, 1961, as per Section 80C, you can claim up to INR 1.5 lakh on principal repayments, and up to INR 2 lakh on interest repayments under Section 24B.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSdGwzBwrz_WlRPi-m5y9grKw21rmYokxnyrRshi07PobTOpQw/viewform?usp=sf_link",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2jpXdppm065fQLdmnLmdMG6vIcTlPt99Iw&s",
      title: "Business Loan",
      description:
        "Those whose business has been profit-making for the previous 2 years. The business should have a Minimal Annual Income (ITR) of ₹1.5 lakhs per annum. The applicant should be at least 21 years at the time of applying for the loan, and should be not older than 65 years at the time of loan maturity",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLScBzbAYpG47g_h0jJ49x4bSJ_QOPQO2IrliT7Cw6AOm6OtcEA/viewform?usp=sf_link",
    },
    {
      image:
        "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/education-loan/education-loan-india-benefits-interest-rate-717x404.jpg",
      title: "Education Loan",
      description:
        "Quick approval. Minimal documentation.An education loan is a sum of money borrowed to finance post-secondary education or higher education-related expenses. Education loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of pursuing a degree.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSdR9Z-LDyGrExAomvhY9loyxBaw3rcRBjF6COfQ6M7iNr_JNQ/viewform?usp=sf_link",
    },
    {
      image:
        "https://www.finnable.com/wp-content/uploads/2022/01/Instant-car-loan.jpg",
      title: "Car Loan",
      description:
        "Finance options for wide range of cars. Attractive interest rates. Tailor-made finance schemes.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSdfR_yCKoYh3s9wB_G8exbsAzyBAa0k4N4Z7-ZUxbYr5aqF9Q/viewform?usp=sf_link",
    },
    {
      image: "https://delhicarloan.com/assets/images/CarRefinance1.jpg",
      title: "Old Car Purchase",
      description:
        "Before approving a used car loan application, lenders consider the age of the car and whether the model has been discontinued. The sum of the age of the car and the loan tenure of a used car loan must not exceed more than 8-10 years. The older the car, the harder it is to obtain sufficient funding to purchase the car.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSdnKjyST3NS_OtJAcKEQdm_X12kVDGVz1Yq_xsi6H4ok4RywQ/viewform?usp=sf_link",
    },
  
    {
      image:
        "https://cms-article.forbesindia.com/media/images/2023/Sep/img_219231_homeloan_shutterstock_1279322677_bg.jpg",
      title: "Subsidy Loan",
      description:
        "A subsidy loan is a type of financial assistance provided by the government to promote the growth of businesses in various sectors. These loans are offered at reduced interest rates, and a portion of the interest rate is subsidised by the government, making the overall cost of the loan more affordable for the borrower",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSfPBGEoAj7ZXBvjk0T2n-RtRXW1xrRiswiuIaqIGdCC0EEZ2g/viewform?usp=sf_link",
    },
    
    {
      image:
        "https://electronicafinance.com/wp-content/uploads/2023/02/taking-loan-against-property.webp",
      title: "Property Loan",
      description:
        "A type of loan facility availed by individuals and businesses against the mortgage of a commercial or residential property. It is a secured loan, where the borrower pledges the property as collateral against the loan amount.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSc0EagcKGMMGzi53Jhm_ErU0kMVm-2MYePL5IoA_5H66h-f4A/viewform?usp=sf_link",
    },
    {
      image:
        "https://lendingplate.com/blog/wp-content/uploads/2023/12/Personal-Loan-vs.-Credit-Cards-Loan.jpg",
      title: "Credit Card Loan",
      description:
        "A credit card comes with a specified pre-approved credit limit, which can be used by the holder in a month. However, if you are in urgent need of cash, most banks offer you the facility of loans against a credit card. Here, you can take a loan against the credit limit which you have been given.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSeFFG7LEShXQzAnfJfZ6m6CKB8UoHMnatVJRdJwT9SsagZ_kw/viewform?usp=sf_link",
    },
    {
      image:
        "https://loanduniya.weebly.com/uploads/1/2/7/5/127554603/mudra-loan_orig.png",
      title: "Mudra Loan",
      description:
        "Eligibility : Any Indian Citizen who has a business plan for a non-farm income generating activity such as manufacturing, processing, trading or service sector whose credit need is up to 10 lakh can approach either a Bank, MFI or NBFC for availing of MUDRA loans under PMMY.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSeqcWgEWkOyLDZHRKHGhe78yE5nVcl3jjObA9WidTwRhi60wQ/viewform?usp=sf_link",
    },
    {
      image:
        "https://shamisgentile.com/wp-content/uploads/2022/08/overdraft-protection.png",
      title: "Over Drafting Loan",
      description:
        "An Overdraft is a flexible form of borrowing that allows businesses to withdraw funds from their Current Account up to a pre-approved limit. Interest is only charged on the amount overdrawn for the period of borrowing, making it a cost-effective way to manage short-term cash flow.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSf88yOVkpZFDvUtcM5mXA6l75ye-z1qJt_SJFaMNzG16D9w-Q/viewform?usp=sf_link",
    },
    {
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4i0IQ4V6ZMLmcav9fx_UHlc2UvMAQbjdCbr7IA4oNj3b8JNfgHQHUl7tAp9bWOuXkly1TmdKweEmCX_t6obSe-rapxp25i2tjJLx2UJN_PdkuS6EqppBpjty_-w8kMoXBCpVEVXq7VY06/s1600/Fixed-Deposits.jpg",
      title: "Fixed Deposit Loan",
      description:
        "Quick approval. Minimal documentation.a type of secured loan where customers can pledge their fixed deposit as security and get a loan in return. The amount of the loan depends on the FD deposit amount. This can go up to 90% – 95% of the deposit amount.",
      navigateTo: "https://docs.google.com/forms/d/e/1FAIpQLSehvyCYrY7Zqxy0Os5SuZPUNHr0ppiFL3cNiVJzDZ6pt6cIug/viewform?usp=sf_link",
    },
  ];

  return (
    <>
      {/* <SubNavBar /> */}
      <div className="relative h-[200px] lg:h-[450px] w-full bg-cover bg-center bg-[url('https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg')] bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent  flex flex-col gap-3 items-center justify-center">
          <h1 className="text-white font-bold text-wrap text-4xl lg:text-7xl items-center line-clamp-4">
            "पूरा करे हर सपना"
          </h1>
          <h3 className="text-white text-center font-light text-wrap">
            Quick loan sanction | Part Prepayment available | Loan amount up to
            Rs.40 lakh
          </h3>
          <button  className="font-semibold w-28 text-white bg-red-500 hover:bg-red-700 hover:scale-105 duration-200 rounded-lg px-4 py-1">
          <a href="#Loans">Apply Now</a>
          </button>
        </div>
      </div>
      {/* Why Us ? Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-black mb-12">Why Choose Us?</h2>
          <div className="whyus flex flex-row overflow-x-auto overflow-y-hidden  justify-between items-center space-y-6 lg:space-y-0 lg:space-x-12 px-3 lg:px-20">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={cash}
                  alt="Convenient payment options"
                />
              </div>
              <p className="text-blue-300">Convenient payment options</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={money}
                  alt="Suits the need of every individual"
                />
              </div>
              <p className="text-blue-300">
                Suits the need of every individual
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={rename}
                  alt="Attractive interest rates"
                />
              </div>
              <p className="text-blue-300">Attractive interest rates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={percentage}
                  alt="2 % waiver "
                />
              </div>
              <p className="text-blue-300">2 % waiver</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={cibil}
                  alt="free cibil score"
                />
              </div>
              <p className="text-blue-300">Free Cibil Score</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={document}
                  alt="Simplified documentation"
                />
              </div>
              <p className="text-blue-300">Simplified documentation</p>
            </div>
          </div>
        </div>
      </section>
      {/* Type Of Loans Section */}
      <section
        id="Loans"
        className="flex flex-col items-center w-full justify-start my-10 bg-gray-200 gap-2 px-4 lg:px-20 py-3"
      >
        <h1 className="text-center text-xl font-bold">Types of Loans</h1>
        <h3 className="font-light text-gray-500">
          See our full range of loan products and explore based on your
          requirement
        </h3>
        {/* cards section */}
        <div
          id="CardSection"
          className="w-full overflow-y-scroll overflow-x-hidden flex flex-row justify-around gap-5 flex-wrap h-screen my-5 z-0"
        >
          {typesOfLoansCardData.map((loan, index) => (
            <Card
              key={index}
              image={loan.image}
              loanType={loan.title}
              description={loan.description}
              navigateTo={loan.navigateTo}
            />
          ))}
        </div>
      </section>
      {/* Connect Us Section */}
      <h1 className="text-center text-xl font-bold my-2">Connect with Us</h1>
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4">
          {/* LocateUs Card */}
          <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
              <div className="mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/place-marker.png"
                  alt="Locate us"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">Locate us</h2>
              <p className="mb-4 text-gray-600">
                You are never too far away from quick, efficient banking
                services. Locate your nearest branch or an ATM.
              </p>
              <a
                href="https://maps.app.goo.gl/ntMz6mEYz3RkPjR1A"
                className="text-red-600 font-semibold hover:underline"
              >
                Locate now &rarr;
              </a>
            </div>

            {/* CallUs Card */}
            <div className="flex flex-col items-center text-center  bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
              <div className="mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                  alt="Call us"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">Call us</h2>
              <p className="mb-4 text-gray-600">
                In case you wish to speak to our phone banking officer for
                urgent resolution
              </p>
              <a
                href="tel:07314999628"
                className="text-red-600 font-semibold hover:underline"
              >
                Find out more &rarr;
              </a>
            </div>

            {/* Inquiry Card */}
            <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
              <div className="mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/email.png"
                  alt="Write to us"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">Write to us</h2>
              <p className="mb-4 text-gray-600">
                Be it an enquiry, feedback or a simple suggestion, write to us &
                we'll get back to you
              </p>
              <a
                href="mailto:zoomfinanceindore@gmail.com"
                className="text-red-600 font-semibold hover:underline"
              >
                Click here &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-black font-extrabold text-4xl p-2.5  hover:underline fixed bottom-5 right-5 rounded-full bg-purple-200 "
          >
            <HiArrowCircleUp />
          </a>
        </div>
      </section>
      <section className="w-full px-3 lg:px-20 object-cover object-center mb-10">
        <div className="map-container w-full">
          <iframe id="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58880.10179657307!2d75.84828373118455!3d22.7280049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0x4f30b32ad0c8b0f1!2sIndustry%20House%20Business%20Centre!5e0!3m2!1sen!2sin!4v1721484936116!5m2!1sen!2sin"
            style={{ border: 0 }}
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Industry House Business Centre"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
