import axios from 'axios';
import  { useState } from 'react';

export default function ConferenceProposalContent() {
    // State to manage form input values
    const [formData, setFormData] = useState({
        
        nameOfCoordinators: '',
        email: '',
        universityName: '',
        contactNumber: '',
        website: '',
        departmentName: '',
        affiliation: '',
        conferenceType: '',
        conferenceTitle: '',
        conferenceDescription: '',
        shortName: '',
        conferenceDate: '',
        specializations: '',
        venue: '',
        conferenceWebsite: '',
        conferenceBrochure: null,
        collegeLogo: null,
    });
    
    console.log(formData)
    // State to manage error messages
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file' && files.length > 0) {
            const file = files[0];
            // Check file type and size
            const validFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
            if (validFileTypes.includes(file.type) && file.size <= 1024 * 1024) { // 1MB size limit
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: file,
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: 'Invalid file type or file is too large',
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    
    

    // Validate form fields
    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (formData[key] === '' || formData[key] === null) {
                newErrors[key] = `${key} is required`;
            }
        });
        return newErrors;
    };

    // Handle form submission
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
                const response = await axios.post('http://localhost/mailapp/conferenceproposal.php', formDataToSubmit);
              console.log(response.data);
              alert('form submitted successfully');
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form');
            }
        }
    };
    
    
    
   
    
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6 ">
        <div className="mx-auto p-4 mt-8">
            <h3 className="text-2xl font-bold">
                <strong className="text-red-600">Submit </strong>
                <span className="text-teal-400">Conference Details</span>
            </h3>
            <label className="text-sm font-medium text-gray-700 my-6">
                <span className="text-red-600">*</span> Fields are Mandatory
            </label>

            
                {/* Name of the Conference Coordinators */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mt-6">
                    <div>
                        <label htmlFor="nameOfCoordinators" className="block text-sm font-medium text-gray-700">
                            Name of the Conference Coordinators<span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            name="nameOfCoordinators"
                            id="nameOfCoordinators"
                            value={formData.nameOfCoordinators}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Name of the Conference Coordinators"
                        />
                        {errors.nameOfCoordinators && <span className="text-red-600">{errors.nameOfCoordinators}</span>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email<span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Email"
                        />
                        {errors.email && <span className="text-red-600">{errors.email}</span>}
                    </div>
                </div>

                {/* University/College Name */}
                <div>
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

                {/* Contact Number and Website */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                    <div>
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

                    <div>
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
                </div>

                {/* Name of the Department */}
                <div>
                    <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                        Name of the Department(If more than one department add with comma)<span className="text-red-600">*</span>
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

                {/* Affiliation */}
                <div>
                    <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700">
                        Affiliation By<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="affiliation"
                        id="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Affiliation By"
                    />
                    {errors.affiliation && <span className="text-red-600">{errors.affiliation}</span>}
                </div>

                {/* National / International Conference */}
                <div>
                    <label htmlFor="conferenceType" className="block text-sm font-medium text-gray-700">
                        National / International Conference<span className="text-red-600">*</span>
                    </label>
                    <select
                        id="conferenceType"
                        name="conferenceType"
                        value={formData.conferenceType}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    >
                        <option value="">--Select--</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>
                    {errors.conferenceType && <span className="text-red-600">{errors.conferenceType}</span>}
                </div>

                {/* Title of the Conference */}
                <div>
                    <label htmlFor="conferenceTitle" className="block text-sm font-medium text-gray-700">
                        Title of the Conference<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="conferenceTitle"
                        id="conferenceTitle"
                        value={formData.conferenceTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Title of the Conference"
                    />
                    {errors.conferenceTitle && <span className="text-red-600">{errors.conferenceTitle}</span>}
                </div>

                {/* Description about conference */}
                <div>
                    <label htmlFor="conferenceDescription" className="block text-sm font-medium text-gray-700">
                        Description about conference<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="conferenceDescription"
                        id="conferenceDescription"
                        value={formData.conferenceDescription}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Description about conference"
                    />
                    {errors.conferenceDescription && <span className="text-red-600">{errors.conferenceDescription}</span>}
                </div>

                {/* Short Name of Conference */}
                <div>
                    <label htmlFor="shortName" className="block text-sm font-medium text-gray-700">
                        Short Name of conference<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="shortName"
                        id="shortName"
                        value={formData.shortName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Short Name of conference"
                    />
                    {errors.shortName && <span className="text-red-600">{errors.shortName}</span>}
                </div>

                {/* Date of the Conference */}
                <div>
                    <label htmlFor="conferenceDate" className="block text-sm font-medium text-gray-700">
                        Date of the Conference<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="date"
                        name="conferenceDate"
                        id="conferenceDate"
                        value={formData.conferenceDate}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    />
                    {errors.conferenceDate && <span className="text-red-600">{errors.conferenceDate}</span>}
                </div>

                {/* Area of Specializations */}
                <div>
                    <label htmlFor="specializations" className="block text-sm font-medium text-gray-700">
                        Area of Specializations(Topics/subject add with multiple by comma)<span className="text-red-600">*</span>
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

                {/* Venue */}
                <div>
                    <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
                        Venue<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="venue"
                        id="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Venue"
                    />
                    {errors.venue && <span className="text-red-600">{errors.venue}</span>}
                </div>

                {/* Conference Website */}
                <div>
                    <label htmlFor="conferenceWebsite" className="block text-sm font-medium text-gray-700">
                        Conference Website(if any):<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="conferenceWebsite"
                        id="conferenceWebsite"
                        value={formData.conferenceWebsite}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Conference Website"
                    />
                    {errors.conferenceWebsite && <span className="text-red-600">{errors.conferenceWebsite}</span>}
                </div>

                {/* Conference Brochure */}
                <div>
                    <label htmlFor="conferenceBrochure" className="block text-sm font-medium text-gray-700">
                        Conference Brochure(if any):<span className="text-red-600">*</span> (File Type: Jpg/Jpeg/Png/Gif/pdf, Max file size: 1 Mb)
                    </label>
                    <input
                        type="file"
                        name="conferenceBrochure"
                        id="conferenceBrochure"
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.conferenceBrochure && <span className="text-red-600">{errors.conferenceBrochure}</span>}
                </div>

                {/* College Logo */}
                <div>
                    <label htmlFor="collegeLogo" className="block text-sm font-medium text-gray-700">
                        College Logo:<span className="text-red-600">*</span> (File Type: Jpg/Jpeg/Png/Gif, Max file size: 1 Mb)
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
                <div>
                    <button
                        type="submit"
                        className="w-[100px] py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2"
                    >
                        Submit
                    </button>
                </div>
            
        </div>
        </form>
    );
}
