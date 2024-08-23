import { useState } from 'react';
import { Link } from 'react-router-dom';

// Array of advisors with their details
const advisors = [
    {
        id: '14',
        name: 'Dr. Kiran Soni',
        position: 'Assistant Professor',
        qualification: 'PH.D',
        institute: 'Geetanjali Institute of Management & Technology, Udaipur',
        country: 'India',
        imgSrc: 'assets/images/boardmember.png',
    },
    {
        id: '15',
        name: 'Dr. Deepali Singh',
        position: 'Head of Department',
        qualification: 'PH.D',
        institute: 'NIMS University, Jaipur',
        country: 'India',
        imgSrc: 'assets/images/boardmember.png',
    },
    // More advisors...
];

export default function Advisoryboardcontent() {
    const [openModalId, setOpenModalId] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState('Select Board');

    const openModal = (id) => setOpenModalId(id);
    const closeModal = () => setOpenModalId(null);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleDropdownItemClick = (item) => {
        setSelectedBoard(item);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="w-full p-4 mt-7">
            <div className="flex items-center justify-between mb-7">
                <h3 className="md:text-3xl text-2xl font-semibold text-orange-500 text-nowrap">Advisory Board</h3>

                {/* Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {selectedBoard}
                        <img src="assets/images/svg.svg" alt="dropdown" className="w-6 h-5 ml-2" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-full max-w-xs origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1 bg-orange-400 text-wrap">
                                <Link
                                    to="/advisoryboard"
                                    onClick={() => handleDropdownItemClick('Advisory Board')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Advisory Board
                                </Link>
                                <Link
                                    to="/editorialboard"
                                    onClick={() => handleDropdownItemClick('Editorial Board')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Editorial Board
                                </Link>
                                <Link
                                    to="/srreviewerboard"
                                    onClick={() => handleDropdownItemClick('Sr. Reviewer Board')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Sr. Reviewer Board
                                </Link>
                                <Link
                                    to="/jrreviewerboard"
                                    onClick={() => handleDropdownItemClick('Jr. Reviewer Board')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Jr. Reviewer Board
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2">
                {advisors.map((advisor) => (
                    <div key={advisor.id} className="flex items-center border border-gray-200 rounded-lg shadow-md p-4 h-36 w-full max-w-xs bg-orange-400">
                        <div className="w-20 h-20 mr-4">
                            <button onClick={() => openModal(advisor.id)} className="focus:outline-none">
                                <img
                                    src={advisor.imgSrc}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover rounded-full border-0"
                                />
                            </button>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">{advisor.name}</h4>
                            <p className="text-sm font-medium">{advisor.position}</p>
                            <p className="text-sm">{advisor.qualification}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {advisors.map((advisor) => (
                openModalId === advisor.id && (
                    <div
                        key={advisor.id}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-orange-400 rounded-lg shadow-lg w-full max-w-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                        >
                            <div className="modal-header p-4 border-b border-gray-200 flex justify-between items-center">
                                <h5 className="text-lg font-semibold">{advisor.name}</h5>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700"
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-1/2 mb-4">
                                        <img
                                            src={advisor.imgSrc}
                                            alt={advisor.name}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full text-center">
                                        <p><strong>User Id :</strong> {advisor.id}</p>
                                        <p><strong>Qualification :</strong> {advisor.qualification}</p>
                                        <p><strong>Designation :</strong> {advisor.position}</p>
                                        <p><strong>Institute Name :</strong> {advisor.institute}</p>
                                        <p><strong>Country :</strong> {advisor.country}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer p-4 border-t border-gray-200 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}
