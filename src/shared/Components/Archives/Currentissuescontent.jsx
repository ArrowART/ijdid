

// Example list of files
const files = [
  {
    name: 'INVESTIGATING THE RELEASE OF ETHANOL EXTRACT OF JENGKOL (ARCHIDENDRON PAUCIFLORUM) FRUIT PEEL ENCAPSULATED IN PLGA NANOPARTICLES IN SIMULATED INTESTINAL FLUID',
    url: '/assets/images/INVESTIGATING_THE_RELEASE_OF_ETHANOL_EXTRACT_OF_JENGKOL__ARCHIDENDRON_PAUCIFLORUM__FRUIT_PEEL_ENCAPSULATED_IN_PLGA_NANOPARTICLES_IN_SIMULATED_INTESTINAL_FLUID_ijariie24460.pdf',
    Authors: 'Ijariie, M. R.',
  },
  {
    name: 'INVESTIGATING THE RELEASE OF ETHANOL EXTRACT OF JENGKOL (ARCHIDENDRON PAUCIFLORUM) FRUIT PEEL ENCAPSULATED IN PLGA NANOPARTICLES IN SIMULATED INTESTINAL FLUID',
    url: '/assets/images/INVESTIGATING_THE_RELEASE_OF_ETHANOL_EXTRACT_OF_JENGKOL__ARCHIDENDRON_PAUCIFLORUM__FRUIT_PEEL_ENCAPSULATED_IN_PLGA_NANOPARTICLES_IN_SIMULATED_INTESTINAL_FLUID_ijariie24460.pdf',
    Authors: 'Ijariie, M. R.',
  },
  // Add more file objects here
];

export default function CurrentIssuesContent() {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1 className="text-[20px] font-bold mb-2 text-gray-800 mt-8 "> Volume-10, Issue-4, 2024</h1>
    <div className=" mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-200 mt-8">
      
      {files.map((file, index) => (
        <div key={index} className="mb-4">
          <h1 className="text-[20px] font-bold mb-2 text-gray-800">
            {file.name}
          </h1>
          <p>Authors: {file.Authors}</p>
          <button
            onClick={() => handleDownload(file.url, `${file.name}.pdf`)}
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            Download
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}
