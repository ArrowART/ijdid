import { useState } from 'react';
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: file,
        }));
    } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};


  const handleSelectChange = (name, selectedOption) => {
    console.log(name, selectedOption.label);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
        const formDataToSubmit = new FormData();

        Object.keys(formData).forEach((key) => {
            if (formData[key]) {
                formDataToSubmit.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('http://localhost/mailapp/mail.php', {
                method: 'POST',
                mode: 'no-cors',
                body: formDataToSubmit,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form Data Submitted:', result);
                alert(result.message); // Notify user of success
            } else {
                console.error('Form submission failed:', response.statusText);
                alert('Form Data Submitted');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    }
};


  return (
    
    <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="text-xl font-bold text-red-600 mb-4">
   Join <span className="text-blue-500">As IJARIIE Board</span>
 </h3>
 <h4 className="mb-4">
   Dear Reviewer, You can also send the resume using this email id: <b>ijariiejournal@gmail.com</b>
 </h4>
       <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
  
 <div>
   <label className='block mb-2 font-medium ' htmlFor="maritalStatus">Marital Status:
   <select
   className='border border-gray-300 rounded px-3 py-2 w-full'
     id="maritalStatus"
     name="maritalStatus"
     value={formData.maritalStatus}
     onChange={handleChange}
   >
     <option value="">-- Select --</option>
     <option value="single">Single</option>
     <option value="married">Married</option>
     <option value="divorced">Divorced</option>
     <option value="widowed">Widowed</option>
   </select>
   </label>
   {errors.maritalStatus && <p>{errors.maritalStatus}</p>}
 </div>

 <div>
   <label htmlFor="firstName">First Name:</label>
   <input
     id="firstName"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="text"
     name="firstName"
     value={formData.firstName}
     onChange={handleChange}
   />
   {errors.firstName && <p>{errors.firstName}</p>}
 </div>

 <div>
   <label htmlFor="lastName">Last Name:</label>
   <input
     id="lastName"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="text"
     name="lastName"
     value={formData.lastName}
     onChange={handleChange}
   />
   {errors.lastName && <p>{errors.lastName}</p>}
 </div>

 <div>
   <label htmlFor="category">Category:</label>
   <Select
     id="category"
     options={categoryOptions}
     value={categoryOptions.find(option => option.value === formData.category)}
     onChange={(selectedOption) => handleSelectChange('category', selectedOption)}
   />
   {errors.category && <p>{errors.category}</p>}
 </div>

 <div>
   <label htmlFor="designation">Designation:</label>
   <Select
     id="designation"
     options={designationOptions}
     value={designationOptions.find(option => option.value === formData.designation)}
     onChange={(selectedOption) => handleSelectChange('designation', selectedOption)}
   />
   {errors.designation && <p>{errors.designation}</p>}
 </div>

 <div>
   <label htmlFor="educationQualification">Education Qualification:</label>
   <Select
     id="educationQualification"
     options={educationQualificationOptions}
     value={educationQualificationOptions.find(option => option.value === formData.educationQualification)}
     onChange={(selectedOption) => handleSelectChange('educationQualification', selectedOption)}
   />
   {errors.educationQualification && <p>{errors.educationQualification}</p>}
 </div>
 <div>
   <label htmlFor="specialization">Specialization:</label>
   <input
     id="specialization"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="text"
     name="specialization"
     value={formData.specialization}
     onChange={handleChange}
   />
   {errors.specialization && <p>{errors.specialization}</p>}
 </div>
 <div>
   <label htmlFor="contactNumber">Contact Number:</label>
   <input
     id="contactNumber"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="text"
     name="contactNumber"
     value={formData.contactNumber}
     onChange={handleChange}
   />
   {errors.contactNumber && <p>{errors.contactNumber}</p>}
 </div>

 <div>
   <label htmlFor="email">Email:</label>
   <input
     id="email"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="email"
     name="email"
     value={formData.email}
     onChange={handleChange}
   />
   {errors.email && <p>{errors.email}</p>}
 </div>

 <div>
   <label htmlFor="companyWebsite">Company Website:</label>
   <input
     id="companyWebsite"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="url"
     name="companyWebsite"
     value={formData.companyWebsite}
     onChange={handleChange}
   />
   {errors.companyWebsite && <p>{errors.companyWebsite}</p>}
 </div>

 <div>
   <label htmlFor="companyName">Company Name:</label>
   <input
     id="companyName"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="text"
     name="companyName"
     value={formData.companyName}
     onChange={handleChange}
   />
   {errors.companyName && <p>{errors.companyName}</p>}
 </div>

 <div>
   <label htmlFor="country">Country:</label>
   <Select
     id="country"
     options={countryOptions}
     value={countryOptions.find(option => option.value === formData.country)}
     onChange={(selectedOption) => handleSelectChange('country', selectedOption)}
   />
   {errors.country && <p>{errors.country}</p>}
 </div>

 <div>
   <label htmlFor="cv">CV:</label>
   <input
     id="cv"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="file"
     name="cv"
     accept=".pdf,.doc,.docx"
     onChange={handleChange}
   />
   {errors.cv && <p>{errors.cv}</p>}
 </div>

 <div>
   <label htmlFor="photo">Photo:</label>
   <input
     id="photo"
     className='border border-gray-300 rounded px-3 py-2 w-full'
     type="file"
     name="photo"
     accept="image/*"
     onChange={handleChange}
   />
   {errors.photo && <p>{errors.photo}</p>}
 </div>

 <button className="bg-blue-500 text-white px-4 py-2 rounded w-[150px]" type="submit">Submit</button>
 </div>
</form>
  );
};

export default RegistrationForm;
