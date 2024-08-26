import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Contactuscontent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) newErrors.email = 'Email Address is required.';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
        if (!formData.message) newErrors.message = 'Message is required.';
        
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form data:', formData);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <p className="text-3xl font-bold text-red-600 mb-4 text-left">Contact Us</p>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faUser} className="text-teal-500 mr-3 text-lg" />
                        <span>xxxxxxxxxxx</span>
                    </li>

                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-teal-500 mr-3 text-lg" />
                        <span>xxxxxxxxxxx (India)</span>
                    </li>

                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-teal-500 mr-3 text-lg" />
                        <span>xxxxxxxxxxxxx (China)</span>
                    </li>

                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-teal-500 mr-3 text-lg" />
                        <a href="mailto:xxxxxxxxxxxxxx.com" className="text-blue-500 hover:underline">
                            xxxxxxxxxxxxxxx.com
                        </a>
                    </li>

                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-500 mr-3 text-lg" />
                        <div className='text-left'>
                            <p>xxxxxxxxxxxxxxxxx</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="bg-white  rounded-lg shadow-md">
                <p className='text-3xl font-bold text-red-600 mb-6 text-left'>Write A Comment</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <input
                            name="name"
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <span className="text-red-500 block mt-1 text-sm">{errors.name}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            name="email"
                            type="text"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <span className="text-red-500 block mt-1 text-sm">{errors.email}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            name="phoneNumber"
                            type="text"
                            id="phoneNumber"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500 block mt-1 text-sm">{errors.phoneNumber}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && (
                            <span className="text-red-500 block mt-1 text-sm">{errors.message}</span>
                        )}
                    </div>

                    <div className="form-group text-right">
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
