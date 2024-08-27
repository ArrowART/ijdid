import  { useState } from 'react';

export default function Specialproposalcontent() {
    const [formData, setFormData] = useState({
        nameOfConvener: '',
        email: '',
        universityName: '',
        contactNumber: '',
        website: '',
        departmentName: '',
        specializations: '',
        collegeLogo: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nameOfConvener) newErrors.nameOfConvener = 'Name of the Convener is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
        if (!formData.universityName) newErrors.universityName = 'University/College Name is required.';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required.';
        else if (!/^\d{12,15}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Please enter a valid contact number.';
        if (!formData.website) newErrors.website = 'College/Institute Website is required.';
        if (!formData.departmentName) newErrors.departmentName = 'Name of the Department is required.';
        if (!formData.specializations) newErrors.specializations = 'Area of Specializations is required.';
        if (!formData.collegeLogo) newErrors.collegeLogo = 'College logo is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          const formDataToSend = new FormData();
          formDataToSend.append('nameOfConvener', formData.nameOfConvener);
          formDataToSend.append('email', formData.email);
          formDataToSend.append('universityName', formData.universityName);
          formDataToSend.append('contactNumber', formData.contactNumber);
          formDataToSend.append('website', formData.website);
          formDataToSend.append('departmentName', formData.departmentName);
          formDataToSend.append('specializations', formData.specializations);
          if (formData.collegeLogo) {
            formDataToSend.append('collegeLogo', formData.collegeLogo);
          }
          console.log(formData);
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzQB6Ia2yOl5kgAITpA0PvnJqjzoxKEFraWzXHajhqT7Z4rmM-8s5QE4Mzzqgzat2O9/exec', {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(formData),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            
            console.log(response);
          } catch (error) {
            console.error('Error:', error);
          }
        }
      };
      
      
  return (

    <div>
      <div className="mt-8 mx-auto p-4">
            <h3 className="text-2xl font-bold">
                <strong className="text-red-600">Submit </strong>
                <span className="text-teal-400">Special Details</span>
            </h3>
            <label className="block text-sm text-gray-600 mb-4">
                <span className="text-red-600">*</span> Fields are Mandatory
            </label>
            <form onSubmit={handleSubmit}>

                {/* Name of the Convener */}
                <div className="mb-4">
                    <label htmlFor="nameOfConvener" className="block text-sm font-medium text-gray-700">
                        Name of the Convener<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="nameOfConvener"
                        id="nameOfConvener"
                        value={formData.nameOfConvener}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Name of the Convener"
                    />
                    {errors.nameOfConvener && <span className="text-red-600">{errors.nameOfConvener}</span>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Email"
                    />
                    {errors.email && <span className="text-red-600">{errors.email}</span>}
                </div>

                {/* University/College Name */}
                <div className="mb-4">
                    <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">
                        University/College Name<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="universityName"
                        id="universityName"
                        value={formData.universityName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="University/College Name"
                    />
                    {errors.universityName && <span className="text-red-600">{errors.universityName}</span>}
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                        Contact Number<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="number"
                        name="contactNumber"
                        id="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Add Contact Number with country code (919898989898)"
                    />
                    {errors.contactNumber && <span className="text-red-600">{errors.contactNumber}</span>}
                </div>

                {/* College/Institute Website */}
                <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        College/Institute Website<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Institute website OR Company Website"
                    />
                    {errors.website && <span className="text-red-600">{errors.website}</span>}
                </div>

                {/* Name of the Department */}
                <div className="mb-4">
                    <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                        Name of the Department (If more than one department add with comma)<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="departmentName"
                        id="departmentName"
                        value={formData.departmentName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Name of the Department"
                    />
                    {errors.departmentName && <span className="text-red-600">{errors.departmentName}</span>}
                </div>

                {/* Area of Specializations */}
                <div className="mb-4">
                    <label htmlFor="specializations" className="block text-sm font-medium text-gray-700">
                        Area of Specializations (Topics/subject add with multiple by comma)<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="specializations"
                        id="specializations"
                        value={formData.specializations}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Area of Specializations"
                    />
                    {errors.specializations && <span className="text-red-600">{errors.specializations}</span>}
                </div>

                {/* College Logo */}
                <div className="mb-4">
                    <label htmlFor="collegeLogo" className="block text-sm font-medium text-gray-700">
                        College Logo <span className="text-red-600">*</span> (File Type: Jpg/Jpeg/Png/Gif, Max file size: 1 Mb)
                    </label>
                    <input
                        type="file"
                        name="collegeLogo"
                        id="collegeLogo"
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.collegeLogo && <span className="text-red-600">{errors.collegeLogo}</span>}
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
