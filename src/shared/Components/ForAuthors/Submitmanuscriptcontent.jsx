import { useState } from "react";
// import CountryList from "react-select-country-list";

export default function Submitmanuscriptcontent() {
    
    const [formData, setFormData] = useState({
        manuscriptTitle: "",
        areaOfResearch: "",
        numberOfAuthors: "0",
        authorName: "",
        authorInstitute: "",
        authorEmail: "",
        authorMobile: "",
        postalAddress: "",
        country: "",
        category: "0",
        subCategory: "0",
        keywords: "",
        abstract: "",
        manuscriptFile: null,
        agreeToTerms: false,
      });
    
    //   const handleChange = (e) => {
    //     const { name, value, type, checked, files } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,     need to modify this content
    //     });
    //   };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
      };
    //   const MyComponent = () => {
    //     const [formData, setFormData] = useState({
    //       country: "",
    //     });
      
    //     const countryOptions = CountryList().getData();                                        need to modify this content
      
        // Correctly use handleChange
        const handleChange = (event) => {
          setFormData({
            ...formData,
            [event.target.name]: event.target.value,
          });
        };
    
      return (
        <form onSubmit={handleSubmit} className="space-y-6 mt-7">
          <h3 className="text-xl font-bold text-red-600">Submit Manuscript</h3>
          <p className="text-sm text-red-500">* Fields are Mandatory</p>
    
          <div className="">
            <label className="">
              Manuscript Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="manuscriptTitle"
              value={formData.manuscriptTitle}
              onChange={handleChange}
              placeholder="Manuscript Title"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Area of Research <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="areaOfResearch"
              value={formData.areaOfResearch}
              onChange={handleChange}
              placeholder="Area of Research"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Select Number Of Authors <span className="text-red-500">*</span>
            </label>
            <select
              name="numberOfAuthors"
              value={formData.numberOfAuthors}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="0">--Select--</option>
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
    
          <div className="">
            <label className="">
              Author Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              placeholder="Author Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Author Institute <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="authorInstitute"
              value={formData.authorInstitute}
              onChange={handleChange}
              placeholder="Author Institute"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Author Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="authorEmail"
              value={formData.authorEmail}
              onChange={handleChange}
              placeholder="Author Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="block">
              Author Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="authorMobile"
              value={formData.authorMobile}
              onChange={handleChange}
              placeholder="Mobile No with country code like 919662668402"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="">
            <label className="block">
              Postal Address with Pincode <span className="text-red-500">*</span>
            </label>
            <textarea
              name="postalAddress"
              value={formData.postalAddress}
              onChange={handleChange}
              placeholder="Postal Address with Pincode"
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>
    
          <div className="">
      <label className="">
        Country <span className="text-red-500">*</span>
      </label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      >
        <option value="">--Select Country--</option>
        {/* {countryOptions.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))} */}
      </select>
    </div>
    
          <div className="">
            <label className="">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="0">--Select Category--</option>
              <option value="1">Science, Engineering and Technology</option>
              <option value="2">Arts, Social Sciences and Humanities</option>
              <option value="3">Physical Sciences and Environment</option>
              <option value="4">Management and Commerce</option>
              <option value="5">Agriculture and Veterinary Sciences</option>
              <option value="6">Biological & Medical Sciences</option>
            </select>
          </div>
    
          <div className="">
            <label className="">
              Sub Category <span className="text-red-500">*</span>
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              {/* Add subcategory options here */}
              <option value="0">--Select SubCategory--</option>
            </select>
          </div>
    
          <div className="">
            <label className="">
              Keywords <span className="text-red-500">*</span> <span className="text-red-500">(Add multiple keywords separated by commas)</span>
            </label>
            <textarea
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Keywords"
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Abstract <span className="text-red-500">*</span>
            </label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              placeholder="Abstract"
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>
    
          <div className="">
            <label className="">
              Upload the Manuscript <span className="text-red-500">*</span> <span className="text-red-500">(File Type: doc, docx & Max file size: 5 Mb)</span>
            </label>
            <input
              type="file"
              name="manuscriptFile"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
    
          <div className="form-group flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label>
              I agree with the{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                copyright terms
              </a>
            </label>
          </div>
    
          <button type="submit" className="w-[100px] p-2 text-white bg-red-600 rounded">
            Submit
          </button>
    
          <p className="text-sm">
            If you face any difficulty during paper submission, please send your paper with all details like Title, Research Area, All authors&apos; names, email id, institute name, mobile no, Address with pincode, country to:{" "}
            
          </p>
        </form>
      );
    }

