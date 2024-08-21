// src/components/FAQSection.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQSection = () => {
    return (
        <section id="faq" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center display-6 fw-bold mb-5">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What services do you offer?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We offer high-quality bricklaying, construction, and renovation services for both residential and commercial projects.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I get a quote?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                You can get a quote by contacting us through our <a href="#contact">Contact Us</a> section. Provide us with details about your project, and we'll get back to you with a quote.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Are you licensed and insured?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, we are fully licensed and insured to provide construction and renovation services.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
