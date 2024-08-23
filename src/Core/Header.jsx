import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className=' '>
        <div className="max-w-full mx-auto bg-violet-500 w-full">
          <div className="flex justify-center gap-5 pt-10 pb-10 w-full">
            <div className="xl:hidden sm:block absolute left-0 ">
              <button
                onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu open/close
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Logo */}
            <div className="logo">
              <Link to="/Default">
                <img src="assets/images/journallogo.png" alt="Logo" className="h-36" />
              </Link>
            </div>

            {/* Right-side Image */}
            <div className="hidden xl:block   ">
              <p className='text-[18px] text-orange-500 font-bold text-end ml-[400px] '>ISSN NO (ONLINE):2395-4396</p>
              <p className='text-[33px] font-bold text-center pb-6 text-white'>INTERNATIONAL JOURNAL OF ADVANCE RESEARCH AND<br /> INNOVATIVE IDEAS IN EDUCATION</p>
              <span className='text-[20px] text-white font-bold text-center mr-[170px]'>International Peer Reviewed Journal</span> <span className='text-[18px] text-orange-500 font-bold '>Creative Thinking Has Creative Researrch.....</span>
            </div>



          </div>




        </div>
        <div className='max-w-[90rem] mx-auto '>
          <nav>
            <div className='flex xl:bg-[#ff6b57] p-5 justify-between items-center'>
              {/* Hamburger icon for xl, lg, and md views */}


              {/* Navbar items, visible when the menu is open */}
              <div className={`xl:flex flex-grow justify-between hidden`}>
                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">
                    <Link to="/home" className="text-inherit">
                      Home
                    </Link>
                  </div>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">About Us</div>
                  <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/aimandscope" className="">
                      Aim and Scope
                    </Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/researcharea" className="">Research Area</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/impactfactor" className="">Impact Factor</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/indexing" className="">Indexing</Link></li>
                  </ul>
                </div>

                {/* Additional navbar items go here */}
                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">For Authors</div>
                  <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap z-30`}>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/authorguideline" className="">Authors Guidelines</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/publishpaper" className="">How to publish paper</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                      <a
                        href="File/IJARIIE_Manuscript_Format.doc"
                        download
                        className="block w-full text-left"
                      >
                        Download Paper Format
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/submitmanuscript" className="">Submit Manuscript</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/processingcharge" className="">Processing charge</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><a
                        href="File/IJARIIE_Copyrights_Form.pdf"
                        download
                        className="block w-full text-left"
                      >
                        Download Copyrights Form
                      </a></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/paymentcopyrights" className="">Submit Payment-Copyrights</Link></li>
                  </ul>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">Archives</div>
                  <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Current Issues</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Past Issues</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Conference Issues</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Special Issues</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Advance Search</li>
                  </ul>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">IJARIIE Board</div>
                  <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap z-30`}>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer"><Link to="/joininboard" className="">Join as IJARIIE Board</Link></li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Advisory Board</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Editorial Board</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Sr. Reviewer Board</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Jr. Reviewer Board</li>
                  </ul>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">Proposal</div>
                  <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Conference Proposal</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Special Proposal</li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer">Faqs</li>
                  </ul>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">Contact Us</div>
                </div>

                <div className="relative group">
                  <div className="hover:text-gray-600 cursor-pointer">Payment Detail</div>
                </div>
              </div>
            </div>

            {/* Mobile menu items */}
            <div className={`${menuOpen ? 'block' : 'hidden'} w-[50%] bg-zinc-600 fixed top-0 left-0 h-full overflow-auto z-30  `}>
              <div className='flex xl:bg-[#ff6b57] p-5 justify-between items-center '>
                {/* Hamburger icon for xl, lg, and md views */}

                <div className="xl:hidden sm:block absolute top-0  ">
                  <button
                    onClick={() => setMenuOpen(false)} // Toggle the menu open/close
                    className="text-black focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* Navbar items, visible when the menu is open */}
                <div className={` justify-between flex flex-col gap-20`}>
                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">Home</div>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">About Us</div>
                    <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Aim and Scope</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Research Area</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Impact Factor</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Indexing</li>
                    </ul>
                  </div>

                  {/* Additional navbar items go here */}
                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">For Authors</div>
                    <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Authors Guidelines</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">How to publish paper?</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Download Paper format</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Submit Manuscript</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Processing Charges</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Download Copyrights Form</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Submit Payment-Copyrights</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">Archives</div>
                    <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Current Issues</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Past Issues</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Conference Issues</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Special Issues</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Advance Search</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">IJARIIE Board</div>
                    <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Join as IJARIIE Board</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Advisory Board</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Editorial Board</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Sr. Reviewer Board</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Jr. Reviewer Board</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">Proposal</div>
                    <ul className={`absolute hidden group-hover:block bg-[#ff6b57] shadow-lg p-4 space-y-2 text-nowrap`}>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Conference Proposal</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Special Proposal</li>
                      <li className="hover:bg-gray-100 p-2 cursor-pointer">Faqs</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">Contact Us</div>
                  </div>

                  <div className="relative group">
                    <div className="hover:text-gray-600 cursor-pointer">Payment Detail</div>
                  </div>
                </div>
              </div>

            </div>

          </nav>
        </div>
      </header>
    </div>
  );
}
