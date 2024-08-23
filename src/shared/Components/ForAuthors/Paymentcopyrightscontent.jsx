import  { useState } from "react";

export default function Paymentcopyrightscontent() {
  const [formData, setFormData] = useState({
    paperId: "",
    emailId: "",
    paymentType: "0",
    amount: "",
    copyrightFile: null,
    paymentCopy: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    // Implement further submission logic here
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold text-red-600 mb-4">
        Submit Payment and Copyrights Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label htmlFor="paperId" className="block font-medium">
            Paper ID
          </label>
          <input
            name="paperId"
            type="text"
            id="paperId"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Paper ID"
            value={formData.paperId}
            onChange={handleChange}
            required
          />
          <span className="text-red-500 hidden">Paper ID Is Required.</span>
        </div>

        <div className="">
          <label htmlFor="emailId" className="block font-medium">
            Email ID (Main Author)
          </label>
          <input
            name="emailId"
            type="email"
            id="emailId"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email ID (Main Author)"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
          <span className="text-red-500 hidden">
            Email ID (Main Author) Is Required.
          </span>
          <span className="text-red-500 hidden">
            Please enter a valid email address.
          </span>
        </div>

        <div className="">
          <label htmlFor="paymentType" className="block font-medium">
            Payment Type <span className="text-red-600">*</span>
          </label>
          <select
            name="paymentType"
            id="paymentType"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.paymentType}
            onChange={handleChange}
            required
          >
            <option value="0">--Select Payment Type--</option>
            <option value="74">Direct Deposit / Cashless</option>
            <option value="75">PayUMoney</option>
            <option value="76">Net banking(NEFT) / RTGS</option>
            <option value="77">PayPal</option>
            <option value="78">WireTransfer</option>
            <option value="79">Western-Union / Money-Gram</option>
            <option value="80">Other</option>
          </select>
          <span className="text-red-500 hidden">Payment Type Is Required.</span>
        </div>

        <div className="">
          <label htmlFor="amount" className="block font-medium">
            Amount (Please enter amount with currency symbol.){" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            name="amount"
            type="text"
            id="amount"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <span className="text-red-500 hidden">Amount Is Required.</span>
        </div>

        <div className="">
          <label htmlFor="copyrightFile" className="block font-medium">
            Upload the Copyrights Form (Scan File With Fill Up All Details - ONLY
            JPG/JPEG/PDF FILE)
          </label>
          <input
            type="file"
            name="copyrightFile"
            id="copyrightFile"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label htmlFor="paymentCopy" className="block font-medium">
            Upload the Payment Softcopy (Deposite Scancopy - ONLY JPG/JPEG/PDF
            FILE)
          </label>
          <input
            type="file"
            name="paymentCopy"
            id="paymentCopy"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Submit
        </button>
      </form>

      <h4 className="mt-4">
        Dear Author, if you face any problems during submission, you can also
        submit all details via mail: <b>ijariiejournal@gmail.com</b>
      </h4>
      <ul className="list-disc ml-6">
        <li>Paper Id</li>
        <li>Author email Id</li>
        <li>Copyright Form (jpg)</li>
        <li>Payment Slip (jpg)</li>
      </ul>
    </div>
  );
}
