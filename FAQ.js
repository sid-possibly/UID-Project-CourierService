// FAQ.js
import React from 'react';
import ReactDOM from 'react-dom';
import FAQ from 'FAQ.js';

ReactDOM.render(
  <React.StrictMode>
    <FAQ />
  </React.StrictMode>,
  document.getElementById('root')
);
import React, { useState } from 'react';
import './style.css';

function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply click on the 'Booking' link in the navigation menu and follow the prompts to enter your pickup and delivery information."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by clicking on the 'Track' link in the navigation menu and entering your tracking number."
    },
    {
      question: "What are your operating hours?",
      answer: "Our operating hours are from 9:00 AM to 5:00 PM from Monday to Friday. We are closed on weekends and public holidays."
    },
    {
      question: "Is international shipping available?",
      answer: "Yes, we offer international shipping services. Please check our website for more details on international shipping rates and delivery times."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, PayPal, and bank transfers. Choose the payment method that suits you best during the checkout process."
    },
    {
      question: "Do you provide packaging materials?",
      answer: "Yes, we offer packaging materials such as boxes, bubble wrap, and tape for purchase. You can add these items to your order during the booking process."
    },
    {
      question: "How long will it take for my package to be delivered?",
      answer: "Delivery times vary depending on the shipping method and destination. Please refer to our shipping information page for estimated delivery times based on your location."
    },
    {
      question: "Can I change the delivery address after placing an order?",
      answer: "Yes, you can request a change to the delivery address before your package is dispatched. Please contact our customer service team as soon as possible to make the necessary arrangements."
    },
    {
      question: "Do you offer express shipping options?",
      answer: "Yes, we offer express shipping options for urgent deliveries. You can choose express shipping during the booking process for faster delivery."
    },
    {
      question: "What should I do if my package is lost?",
      answer: "If your package is lost during transit, please contact our customer service team immediately. We will initiate a search and investigation to locate your package and provide updates on the status."
    },
    {
      question: "Can I reroute my package to a different address?",
      answer: "Yes, you can request to reroute your package to a different address if it has not yet been delivered. Please contact our customer service team as soon as possible to make arrangements for rerouting."
    },
    {
      question: "Are there any restrictions on items that can be shipped?",
      answer: "Yes, certain items may be restricted or prohibited from being shipped due to safety or regulatory reasons. Please refer to our list of prohibited items on our website or contact our customer service team for more information."
    },
    {
      question: "How can I request a refund or return?",
      answer: "If you need to request a refund or return, please contact our customer service team and provide details about your order and the reason for the refund or return. We will assist you in processing the request according to our refund and return policy."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="queries">
      <h2 className="faq-heading">
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <b> Common Customer FAQs</b>
      </h2>
      {faqs.map((faq, index) => (
        <div className="query" key={index}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            <i className="fa fa-quora" aria-hidden="true"></i> {faq.question}
          </button>
          <div className={`panel ${activeIndex === index ? 'active' : ''}`}>
            <p>
              <i className="fa fa-dot-circle-o" aria-hidden="true"></i> {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
