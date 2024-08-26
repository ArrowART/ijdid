import { Link } from "react-router-dom"

export default function Homecenter() {
  return (
    <div>

      <div className="mt-7">
        <div>
          <span className="text-[24px] font-bold text-[#ff6b57]">Welcome</span> <span className="text-[20px] font-bold text-gray-400">to IJARIIE</span>
          <p className="text-justify mt-2 text font-[14px] mb-2">International Journal of Advance Research and Innovative Ideas in Education is an open-access journal publishing full-length of research papers and review-(survey) articles covering all subject that fall under the wide variety of science and technology. The journal is devoted towards broadcasting of knowledge related to the <strong> “Advance Research and Innovative Ideas”</strong>  in the present world.</p>
          <span className="text-justify mt-6 font-[14px]">IJARIIE (ISSN 2395-4396 (Online)) is </span><span className="text-justify mt-2 font-[14px] text-blue-500"><a target="#" href="#">Approved by National Science Library (NSL), National Institute of Science Communication And Information Resources (NISCAIR), Council of Scientific and Industrial Research(CSIR)</a></span><span>New Delhi, India</span>
        </div>
      </div>
      <div className="mt-10">
        <div className="border border-gray-300">
          <div className="p-4">
            <marquee
              direction="left"

              onMouseOver={(e) => e.currentTarget.stop()}
              onMouseOut={(e) => e.currentTarget.start()}
              className="flex  space-x-4"
            >
              <a
                href="https://scholar.google.co.in/citations?user=tpiTtoAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/images/Epernicus.jpg"
                  alt="Google Scholar"
                  className="w-[200px] h-[75px]"
                />
              </a>

              {/* Add more images/links as needed */}
            </marquee>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Publish By</td>
                <td className="px-4 py-2">IJARIIE</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">ISSN Online Number</td>
                <td className="px-4 py-2">2395-4396</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">ISO 9001:2008</td>
                <td className="px-4 py-2">Certified</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">IJARIIE Approved By</td>
                <td className="px-4 py-2">NSL, NISCAIR, CSIR</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Frequency</td>
                <td className="px-4 py-2">Bi-Monthly, Six issues per Year</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Discipline</td>
                <td className="px-4 py-2">Multidisciplinary</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">International License</td>
                <td className="px-4 py-2">CC BY-SA 4.0 License</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">License of E-Journal</td>
                <td className="px-4 py-2">Informatics Limited, Bangalore, India</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold" rowSpan={2}>Publication Charges</td>
                <td className="px-4 py-2">
                  <b>Indian Authors</b><br />
                  720 INR (online publication and e-certificate)<br />
                  Payment-Mode: Direct Deposit, NEFT
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">
                  <b>International Authors</b><br />
                  27 USD (online publication and e-certificate)<br />
                  Payment-Mode: PayPal, Wire Transfer, Western Union
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div className="mt-8">
        <div className="text-justify">
          <span className="text-2xl text-orange-500">WHY</span>{" "}
          <span className="text-2xl text-gray-400">IJARIIE</span>
          <ul className="list-none ml-5 mt-3 text-[17px]">
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                IJARIIE is an Open-Access, peer-reviewed International Journal.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                We have a prestigious academic journal reviewers team from various
                universities, colleges, private or government sector, and highly
                reputed companies.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                It covers the full range of qualitative & effective research papers.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                Download any article from the website for free of cost.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                Simple steps for publication of research articles and review articles.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                IJARIIE is an open-access journal for high indexing and promotion of
                your published papers.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                Share free knowledge and promote Advance Research & Innovative Ideas.
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                For any query, email us at: <b>ijariiejournal@gmail.com</b>
              </span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fa-solid fa-check text-red-500 mr-2 mt-1"></i>
              <span className="flex-1">
                <b>
                  IJARIIE is published as a bimonthly journal with six issues per
                  year.
                </b>
              </span>
            </li>
          </ul>
        </div>
      </div>



      <div className="mt-8">
  <div className="text-justify">
    <span className="text-2xl text-orange-500">IJARIIE Submissions</span>{" "}
    <span className="text-2xl text-gray-400">are Invited For</span>
    <ul className="list-none ml-5 mt-3 text-[17px] space-y-2">
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/science-engineering-technology" className="text-blue-500 underline">
          Science, Engineering and Technology.
        </Link>
      </li>
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/arts-social-sciences-humanities" className="text-blue-500 underline">
          Arts, Social Sciences and Humanities.
        </Link>
      </li>
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/physical-sciences-environment" className="text-blue-500 underline">
          Physical Sciences and Environment.
        </Link>
      </li>
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/management-commerce" className="text-blue-500 underline">
          Management and Commerce.
        </Link>
      </li>
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/agriculture-veterinary-sciences" className="text-blue-500 underline">
          Agriculture and Veterinary Sciences.
        </Link>
      </li>
      <li className="flex items-center">
        <i className="fa-solid fa-circle-question text-blue-500 mr-2"></i>
        <Link to="/biological-medical-sciences" className="text-blue-500 underline">
          Biological & Medical Sciences.
        </Link>
      </li>
    </ul>
  </div>
</div>




    </div>
  )
}
