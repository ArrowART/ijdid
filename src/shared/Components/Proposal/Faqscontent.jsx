import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export default function Faqscontent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How can I submit my paper?",
            answer: "Author can submit their paper by manuscript.",
        },
        {
            question: "When will I receive an acknowledgment email for my submission?",
            answer: "Paper submissions are normally acknowledged within 2 days.",
        },
        {
            question: "How long does it take for the paper review process?",
            answer: "IJARIIE normally takes 3 to 5 days for the review process.",
        },
        {
            question: "How can I pay the publication fee?",
            answer: (
                <ul>
                    <li>Payment by direct (Cash) deposit of fees in Account</li>
                    <li>Also Indian author payment can be done by ‘payumoney’</li>
                    <li>For foreign author payment can be done by ‘PayPal’</li>
                </ul>
            ),
        },
        {
            question: "How to deposit publication fees?",
            answer: "If your paper is accepted for publication, with the acceptance letter of your paper you will get the Account detail in which you can deposit fees simply by going to your nearby bank branch or by online transfer.",
        },
        {
            question: "Where can I find Manuscript Preparation Guidelines?",
            answer: "The format of IJARIIE is given in Authors Guidelines Manu Form link. Just Download the format and prepare the manuscript in the format.",
        },
        {
            question: "Where can I find the Copyright Transfer Form?",
            answer: "If your paper is selected, download the Copy Right Form from the page and submit this form link of submit copyrights form.",
        },
    ];

    return (
        <div>
            <div className="mx-auto p-4 mt-8">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                    {faqData.map((item, index) => (
                        <div className="border border-gray-200 rounded mb-4" key={index}>
                            <div
                                className="bg-gray-100 p-4 cursor-pointer"
                                role="tab"
                                onClick={() => toggleAccordion(index)}
                                id={`faq${index + 1}`}
                            >
                                <h4 className="text-lg font-medium flex items-center">
                                    <FontAwesomeIcon icon={faCircleQuestion} className="mr-2 text-teal-500" />
                                    <a
                                        className={`block transition-colors duration-300 ${activeIndex === index ? 'text-teal-500' : 'text-gray-700'}`}
                                        aria-expanded={activeIndex === index ? 'true' : 'false'}
                                        aria-controls={`Q${index + 1}`}
                                    >
                                        {item.question}
                                    </a>
                                </h4>
                            </div>
                            {activeIndex === index && (
                                <div
                                    id={`Q${index + 1}`}
                                    className="bg-white p-4 border-t border-gray-200"
                                    role="tabpanel"
                                    aria-labelledby={`faq${index + 1}`}
                                >
                                    <div className="text-gray-600">
                                        {item.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
