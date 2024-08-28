import  { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    maritalStatus: '',
    firstName: '',
    lastName: '',
    category: '',
    subCategory: '',
    designation: '',
    educationQualification: '',
    specialization: '',
    contactNumber: '',
    email: '',
    companyWebsite: '',
    companyName: '',
    country: '',
    cv: null,
    photo: null,
  });
console.log(formData)
  const [errors, setErrors] = useState({});

  // Country options
  const countryOptions = countryList().getData();

  // Category options
  const categoryOptions = [
    { value: '1', label: 'Science, Engineering and Technol' },
    { value: '2', label: 'Arts, Social Sciences and Humanities' },
    { value: '3', label: 'Physical Sciences and Environment' },
    { value: '4', label: 'Management and Commerce' },
    { value: '5', label: 'Agriculture and Veterinary Sciences' },
    { value: '6', label: 'Biological & Medical Sciences' },
  ];

  // Designation options
  const designationOptions = [
    { value: '7', label: 'Co-Ordinator' },
    { value: '8', label: 'CTO' },
    { value: '9', label: 'Director' },
    { value: '10', label: 'Principal' },
    { value: '11', label: 'Registrar' },
    { value: '12', label: 'Dean' },
    { value: '13', label: 'Head of Department' },
    { value: '14', label: 'Associate Professor' },
    { value: '15', label: 'Assistant Professor' },
    { value: '16', label: 'Senior Lecturer' },
    { value: '17', label: 'Scientist' },
    { value: '18', label: 'Research Associate' },
    { value: '19', label: 'Research Assistant' },
    { value: '20', label: 'Professor' },
    { value: '21', label: 'Researcher' },
    { value: '22', label: 'Other' },
  ];

  // Education Qualification options
  const educationQualificationOptions = [
    { value: '23', label: 'Ph.D' },
    { value: '24', label: 'M.E' },
    { value: '25', label: 'M.Tech' },
    { value: '26', label: 'B.E' },
    { value: '27', label: 'B.Tech' },
    { value: '28', label: 'M.A' },
    { value: '29', label: 'B.A' },
    { value: '30', label: 'MBA' },
    { value: '31', label: 'M.Pharm' },
    { value: '32', label: 'B.Pharm' },
    { value: '33', label: 'M.Sc' },
    { value: '34', label: 'B.Sc' },
    { value: '35', label: 'B.Com' },
    { value: '36', label: 'M.Com' },
    { value: '37', label: 'M.Phil' },
    { value: '38', label: 'M.D' },
    { value: '39', label: 'M.B.B.S' },
    { value: '40', label: 'M.S' },
    { value: '41', label: 'B.S' },
    { value: '42', label: 'B.B.A' },
    { value: '43', label: 'M.C.A' },
    { value: '44', label: 'B.C.A' },
    { value: '45', label: 'M.Ed' },
    { value: '46', label: 'B.Ed' },
    { value: '47', label: 'B.D.S' },
    { value: '48', label: 'M.D.S' },
    { value: '49', label: 'M.L.A' },
    { value: '50', label: 'B.L.A' },
    { value: '51', label: 'D.V.M' },
    { value: '52', label: 'M.S.W' },
    { value: '53', label: 'B.S.W' },
    { value: '54', label: 'D.A' },
    { value: '55', label: 'DDVL' },
    { value: '56', label: 'DGO' },
    { value: '57', label: 'D-Ortho' },
    { value: '58', label: 'DLO' },
    { value: '59', label: 'DCH' },
    { value: '60', label: 'DMRD' },
    { value: '61', label: 'DTCD' },
    { value: '62', label: 'MHRM' },
    { value: '63', label: 'B.LIB' },
    { value: '64', label: 'M.LIB' },
    { value: '65', label: 'L.L.M' },
    { value: '66', label: 'B.Ph' },
    { value: '67', label: 'M.Ph' },
    { value: '68', label: 'B.V.Sc' },
    { value: '69', label: 'M.V.Sc' },
    { value: '70', label: 'Other (Not mentioned here)' },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file' && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                [name]: reader.result, // Base64 string
                [`${name}Name`]: file.name // Store file name
            }));
        };
        reader.readAsDataURL(file); // Convert file to Base64 string
    } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};


  const handleSelectChange = (name, selectedOption) => {
    console.log(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.label : '',
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check for required fields
    if (!formData.maritalStatus) {
      formErrors.maritalStatus = 'Marital Status is required';
      isValid = false;
    }
    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!formData.lastName) {
      formErrors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!formData.category) {
      formErrors.category = 'Category is required';
      isValid = false;
    }
    if (!formData.designation) {
      formErrors.designation = 'Designation is required';
      isValid = false;
    }
    if (!formData.educationQualification) {
      formErrors.educationQualification = 'Education Qualification is required';
      isValid = false;
    }
    if (!formData.contactNumber) {
      formErrors.contactNumber = 'Contact Number is required';
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.companyWebsite) {
      formErrors.companyWebsite = 'Company Website is required';
      isValid = false;
    }
    if (!formData.companyName) {
      formErrors.companyName = 'Company Name is required';
      isValid = false;
    }
    if (!formData.country) {
      formErrors.country = 'Country is required';
      isValid = false;
    }
    if (!formData.cv) {
      formErrors.cv = 'CV is required';
      isValid = false;
    }
    if (!formData.photo) {
      formErrors.photo = 'Photo is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // const handleSubmit = async (e) => {
  //   console.log("hhhhc")
  //   e.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const response = await axios.post('https://script.google.com/macros/s/AKfycbyeq5YhqOj08hFRUuK60-NxRvJe99z18IrXvt3vDoHhAEOtKAmgpMqhq7apHonS4iiM/exec', formData,{ crossdomain: true } ,{
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       console.log('Form Data Submitted:', response.data);
  //     } catch (error) {
  //       console.error('Error submitting form:', error);
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyeq5YhqOj08hFRUuK60-NxRvJe99z18IrXvt3vDoHhAEOtKAmgpMqhq7apHonS4iiM/exec', {
          method: 'POST',
          mode: 'no-cors', // or 'cors' if you have proper CORS setup
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Send form data as JSON
        });
        console.log(response)
        const result = await response.json();
        console.log('Form Data Submitted:', result);
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    }
  };
  


  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-bold text-red-600 mb-4">
        Join <span className="text-blue-500">As IJARIIE Board</span>
      </h3>
      <h4 className="mb-4">
        Dear Reviewer, You can also send the resume using this email id: <b>ijariiejournal@gmail.com</b>
      </h4>
      <label className="text-red-600 mb-4">* Fields are Mandatory</label>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              Marital Status<span className="text-red-600">*</span>
            </label>
            <Select
              options={[
                { value: 'married', label: 'Married' },
                { value: 'single', label: 'Single' },
                { value: 'divorced', label: 'Divorced' },
                { value: 'widowed', label: 'Widowed' },
              ]}
              value={{ value: formData.maritalStatus, label: formData.maritalStatus.charAt(0).toUpperCase() + formData.maritalStatus.slice(1) }}
              onChange={(selectedOption) => handleSelectChange('maritalStatus', selectedOption)}
              className="w-full"
            />
            {errors.maritalStatus && <span className="text-red-600">{errors.maritalStatus}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-600">{errors.lastName}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category<span className="text-red-600">*</span>
            </label>
            <Select
              options={categoryOptions}
              value={categoryOptions.find((option) => option.value === formData.category)}
              onChange={(selectedOption) => handleSelectChange('category', selectedOption)}
              className="w-full"
            />
            {errors.category && <span className="text-red-600">{errors.category}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Sub Category<span className="text-red-600">*</span>
            </label>
            <Select
              options={[{ value: '1', label: 'Sub Category 1' }, { value: '2', label: 'Sub Category 2' }]} // Add subcategory options as needed
              value={formData.subCategory.label}
              onChange={(selectedOption) => handleSelectChange('subCategory', selectedOption)}
              className="w-full"
            />
            {errors.subCategory && <span className="text-red-600">{errors.subCategory}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Designation<span className="text-red-600">*</span>
            </label>
            <Select
              options={designationOptions}
              value={designationOptions.find((option) => option.value === formData.designation)}
              onChange={(selectedOption) => handleSelectChange('designation', selectedOption)}
              className="w-full"
            />
            {errors.designation && <span className="text-red-600">{errors.designation}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Education Qualification<span className="text-red-600">*</span>
            </label>
            <Select
              options={educationQualificationOptions}
              value={educationQualificationOptions.find((option) => option.value === formData.educationQualification)}
              onChange={(selectedOption) => handleSelectChange('educationQualification', selectedOption)}
              className="w-full"
            />
            {errors.educationQualification && <span className="text-red-600">{errors.educationQualification}</span>}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Specialization of subject<span className="text-red-600">*</span> <small>(Enter multiple subjects by comma)</small>
          </label>
          <textarea
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="form-textarea w-full border border-gray-300 rounded-md p-2"
            placeholder="Specialization"
          />
          {errors.specialization && <span className="text-red-600">{errors.specialization}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              Contact Number<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="Add Contact Number with country code (919898989898)"
            />
            {errors.contactNumber && <span className="text-red-600">{errors.contactNumber}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-600">{errors.email}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              Institute Website OR Company Website<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="Institute Website OR Company Website"
            />
            {errors.companyWebsite && <span className="text-red-600">{errors.companyWebsite}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Institute Name OR Company Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
              placeholder="Institute Name OR Company Name"
            />
            {errors.companyName && <span className="text-red-600">{errors.companyName}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              Country<span className="text-red-600">*</span>
            </label>
            <Select
              options={countryOptions}
              value={countryOptions.find((option) => option.value === formData.country)}
              onChange={(selectedOption) => handleSelectChange('country', selectedOption)}
              className="w-full"
            />
            {errors.country && <span className="text-red-600">{errors.country}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              CV<span className="text-red-600">*</span> (File Type: Pdf/Doc/Docx, Max file size: 1 Mb)
            </label>
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
            />
            {errors.cv && <span className="text-red-600">{errors.cv}</span>}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Upload your Professional Photo<span className="text-red-600">*</span> (File Type: Jpg/Jpeg/Png/Gif, Max file size: 100 kb)
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md p-2"
            />
            {errors.photo && <span className="text-red-600">{errors.photo}</span>}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-danger w-40 py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
