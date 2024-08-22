import { useState } from 'react';

export default function Processingchargecontent() {
    
        const [activeTab, setActiveTab] = useState('indian-authors');
    
    
  return (
    <div>
       <div className="container mx-auto p-4 mt-7">
      <h3 className="text-2xl font-semibold">
        <strong className="text-red-600">Processing </strong>
        <span className="text-teal-400">Charges</span>
      </h3>

      <p className="mb-4 text-gray-700">
        Publishing a manuscript in IJARIIE requires manuscript processing charges that will be paid by the submitting author upon acceptance of the manuscript for publication in accordance with the following criteria:
      </p>

      <div className="border-b border-gray-200">
        <ul className="flex justify-center space-x-4" role="tablist">
          <li className={activeTab === 'indian-authors' ? 'border-b-2 border-teal-400' : ''}>
            <button
              onClick={() => setActiveTab('indian-authors')}
              className={`px-4 py-2 ${activeTab === 'indian-authors' ? 'text-teal-400' : 'text-gray-600'} hover:text-teal-400`}
            >
              Indian Authors
            </button>
          </li>
          <li className={activeTab === 'international-authors' ? 'border-b-2 border-teal-400' : ''}>
            <button
              onClick={() => setActiveTab('international-authors')}
              className={`px-4 py-2 ${activeTab === 'international-authors' ? 'text-teal-400' : 'text-gray-600'} hover:text-teal-400`}
            >
              International Authors
            </button>
          </li>
        </ul>
      </div>

      <div className=" mt-6">
        {activeTab === 'indian-authors' && (
          <div id="indian-authors">
            <h4 className="text-xl font-semibold text-teal-400">For Indian Authors</h4>

            <p>
              <strong className="text-red-600">Direct Deposit</strong>
            </p>
            <p className="mb-4 text-gray-700">
              Authors can deposit the publication charges directly to the given account, going to a nearby bank.
            </p>

            <div className="mb-4">
              <p><strong>Standard Authors: </strong> INR 800 + 50 (SBI-Bank Transaction Charges) = 850 (online paper publication and soft copy of certificates)</p>
              <p><strong>Standard Authors: </strong> INR 1500 + 50 (SBI-Bank Transaction Charges) = 1550 (online paper publication, soft copy of certificates, and <u>Hard copy of Certificate for all Authors</u>)</p>
            </div>

            <p>
              <strong className="text-red-600">Credit-Debit Card through Payumoney</strong>
            </p>
            <div className="mb-4">
              <p><strong>Standard Authors: </strong> INR 800 (Transaction Cost + Service Tax) = 800</p>
              <p><strong>Standard Authors: </strong> INR 1500 (Transaction Cost + Service Tax) = 1500</p>
            </div>

            <div className="mb-4">
              <a
                href="https://rzp.io/l/c2Ik1hFb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Option 1: RazorPay (Click Here)
              </a>
            </div>

            <div className="mb-4">
              <a
                href="https://pmny.in/9rh0pUUdipQD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Option 2: PayUmoney (Click Here)
              </a>
            </div>

            <p>
              <strong className="text-red-600">Net-Banking (NEFT)/ RTGS through Bank Account</strong>
            </p>
            <div className="mb-4">
              <p><strong>Standard Authors: </strong> INR 800 (online paper publication and soft copy of certificates)</p>
              <p><strong>Standard Authors: </strong> INR 1500 (online paper publication, soft copy of certificates, and <u>Hard copy of Certificate for all Authors</u>)</p>
            </div>

            <p className="text-gray-600 italic">
              Charges include online paper publication, soft copy of certificates, posting charges, indexing, maintenance of link resolvers, and journal infrastructures.
            </p>

            <div className="flex justify-center my-6">
              <img className="w-64 h-auto" src="images/state-bank-of-india-logo.jpg" alt="SBI Bank" />
            </div>

            <table className="w-full table-auto border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Bank Name</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Account/Beneficiary Name</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Account Number</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Branch Name</td>
                  <td className="border border-gray-300 p-2">xxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Branch Code</td>
                  <td className="border border-gray-300 p-2">xxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">IFSC Code</td>
                  <td className="border border-gray-300 p-2">xxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">MICR Code</td>
                  <td className="border border-gray-300 p-2">xx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">SWIFT Code</td>
                  <td className="border border-gray-300 p-2">xxx</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'international-authors' && (
          <div id="international-authors">
            <h4 className="text-xl font-semibold text-teal-400">For Foreign Authors (International Authors)</h4>

            <div className="mb-4">
              <p><strong>Standard Authors: </strong> USD 30 (online paper publication and soft copy of certificates)</p>
            </div>

            <p className="text-gray-600 italic">
              Charges include online paper publication, soft copy of certificates, posting charges, indexing, maintenance of link resolvers, and journal infrastructures.
            </p>

            <h4 className="text-xl font-semibold text-red-600 mt-6">PayPal</h4>
            <p className="text-gray-700">Authors can deposit the publication charges through PayPal using this ID.</p>
            <p className="text-red-600"><strong>PayPal Id:</strong> xxxxxxxx</p>

            <h4 className="text-xl font-semibold text-red-600 mt-6">Wire Transfer</h4>
            <p className="text-gray-700">
              Authors can do the online Wire transfer by using the SWIFT code, Account No, and Account Name provided below. <strong>After sending the payment, include the Copyright Form through email.</strong>
            </p>

            <table className="w-full table-auto border-collapse border border-gray-300 mt-4">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Bank Name</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Account/Beneficiary Name</td>
                  <td className="border border-gray-300 p-2">xxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Account Number</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Branch Name</td>
                  <td className="border border-gray-300 p-2">xxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Branch Code</td>
                  <td className="border border-gray-300 p-2">xxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">IFSC Code</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">MICR Code</td>
                  <td className="border border-gray-300 p-2">xxxxxxx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">SWIFT Code</td>
                  <td className="border border-gray-300 p-2">xxxxxxxxx</td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-xl font-semibold text-red-600 mt-6">Western Union</h4>
            <p className="text-gray-700">Send money through Agent locations around the world. Visit the Western Union website. <strong>After sending the payment, include the Copyright Form through email.</strong></p>
          </div>
        )}
      </div>
    </div>
    </div>
  )
};
  

