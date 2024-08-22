import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Approved By NISCAIR",
    imgSrc: "assets/images/niscair.jpg",
    description: `ISSN is a worldwide identification code used by publishers, suppliers, libraries, information services, bar coding systems, union catalogues, etc. for citation and retrieval of serials such as Journals, Newspapers, Newsletters, Directories, Yearbooks, Annual Reports & Monograph series, etc. The benefits include international publicity and recognition of the serial by automatic inclusion in the International Serials Directory Database. ISSN International Centre is a network with its Headquarters at Paris. National Science Library (NSL) is the national centre in India of ISSN international centre for assigning ISSN to serials published in India.`,
    detailImgSrc: "assets/images/Epernicus.jpg",
  },
  // Add more feature objects here
  {
    id: 2,
    title: "Approved By CSIR",
    imgSrc: "assets/images/csir.jpg",
    description: "The Council of Scientific & Industrial Research (CSIR), known for its cutting edge R&D knowledgebase in diverse S&T areas, is a contemporary R&D organization. Having pan-India presence, CSIR has a dynamic network of 38 national laboratories, 39 outreach centres, 3 Innovation Complexes and 5 units. CSIR’s R&D expertise and experience is embodied in about 4600 active scientists supported by about 8000 scientific and technical personnel. CSIR covers a wide spectrum of science and technology – from radio and space physics, oceanography, geophysics, chemicals, drugs, genomics, biotechnology and nanotechnology to mining, aeronautics, instrumentation, environmental engineering and information technology. It provides significant technological intervention in many areas with regard to societal efforts which include environment, health, drinking water, food, housing, energy, farm and non-farm sectors. Further, CSIR’s role in S&T human resource development is noteworthy.",
    detailImgSrc: "assets/images/pbn.jpg",
  },
  {
    id: 3,
    title: "Approved By NISCAIR",
    imgSrc: "assets/images/niscair.jpg",
    description: `ISSN is a worldwide identification code used by publishers, suppliers, libraries, information services, bar coding systems, union catalogues, etc. for citation and retrieval of serials such as Journals, Newspapers, Newsletters, Directories, Yearbooks, Annual Reports & Monograph series, etc. The benefits include international publicity and recognition of the serial by automatic inclusion in the International Serials Directory Database. ISSN International Centre is a network with its Headquarters at Paris. National Science Library (NSL) is the national centre in India of ISSN international centre for assigning ISSN to serials published in India.`,
    detailImgSrc: "assets/images/Epernicus.jpg",
  },
  {
    id: 4,
    title: "Approved By NISCAIR",
    imgSrc: "assets/images/niscair.jpg",
    description: `ISSN is a worldwide identification code used by publishers, suppliers, libraries, information services, bar coding systems, union catalogues, etc. for citation and retrieval of serials such as Journals, Newspapers, Newsletters, Directories, Yearbooks, Annual Reports & Monograph series, etc. The benefits include international publicity and recognition of the serial by automatic inclusion in the International Serials Directory Database. ISSN International Centre is a network with its Headquarters at Paris. National Science Library (NSL) is the national centre in India of ISSN international centre for assigning ISSN to serials published in India.`,
    detailImgSrc: "assets/images/Epernicus.jpg",
  },
  // ... more items as needed
];

export default function Indexingcontent() {
  // State to control which modal is open
  const [activeModal, setActiveModal] = useState(null);

  // Function to open a modal
  const openModal = (id) => {
    setActiveModal(id);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="p-4 bg-white mt-7">
      <h3 className="text-2xl font-semibold text-red-600">
        Indexing Of IJARIIE
      </h3>

      {/* BEGIN MAIN FEATURES */}
      <div className="relative mt-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        <div className="grid grid-cols-1 gap-8 2xl:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.id} className="relative p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-center">
                <h4 className="text-lg font-medium">{feature.title}</h4>
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-34 h-48 mx-auto mt-4 object-cover"
                />
                <div className="mt-4 space-x-2">
                  <button
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-500 rounded"
                    onClick={() => openModal(feature.id)} // Open modal on click
                  >
                    About Us
                  </button>
                  <a
                    href="http://www.ijariie.com/fassets/images/IJARIIE-ISSN.jpg"
                    className="px-4 py-2 text-xs font-semibold text-white bg-green-500 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indexing Link
                  </a>
                </div>

                {/* Modal */}
                {activeModal === feature.id && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
                    role="dialog"
                    aria-labelledby="basicModal"
                    aria-hidden="true"
                  >
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                        <h4 className="text-lg font-semibold">About Us</h4>
                        <button
                          type="button"
                          className="text-gray-500 focus:outline-none"
                          onClick={closeModal} // Close modal on click
                        >
                          ×
                        </button>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-gray-700">
                          {feature.description}
                        </p>
                        <img
                          src={feature.detailImgSrc}
                          alt={feature.title}
                          className="w-full h-34 mt-4 object-cover"
                        />
                      </div>

                      <div className="mt-6 text-right">
                        <button
                          type="button"
                          className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-200 rounded"
                          onClick={closeModal} // Close modal on click
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* End Modal */}
              </div>
              {/* /.media-body */}
            </div>
          ))}
        </div>
      </div>
      {/* /.main-features-wrap */}
    </div>
  );
}
