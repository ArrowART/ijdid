import { Link } from "react-router-dom"

export default function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
       
        <div className="mt-20 bg-[#81b9c3]">
            <div className="container mx-auto p-4">
                <div className="wrapper">
                    <div className="flex flex-wrap text-white">
                        {/* For Authors */}
                        <div className="w-full sm:w-2/12 mb-4">
                            <h5 className="font-bold text-lg">For Authors</h5>
                            <ul className="mt-2">
                                <li><Link to="/Form">Submit Paper</Link></li>
                                <li><Link to="/Processingcharge">Processing Charges</Link></li>
                                <li><Link to="/Payment">Submit Payment</Link></li>
                            </ul>
                        </div>

                        {/* Archive */}
                        <div className="w-full sm:w-2/12 mb-4">
                            <h5 className="font-bold text-lg">Archive</h5>
                            <ul className="mt-2">
                                <li><Link to="/Currentissue">Current Issue</Link></li>
                                <li><Link to="/Pastissue">Past Issue</Link></li>
                            </ul>
                        </div>

                        {/* IJARIIE Board */}
                        <div className="w-full sm:w-2/12 mb-4">
                            <h5 className="font-bold text-lg">IJARIIE Board</h5>
                            <ul className="mt-2">
                                <li><Link to="/RevieweBoard">Member Of Board</Link></li>
                                <li><Link to="/Reviewer">Join As Board</Link></li>
                            </ul>
                            <h5 className="font-bold text-lg mt-4">
                                <Link to="/privacyandpolicy" className="text-white">Privacy and Policy</Link>
                            </h5>
                        </div>

                        {/* Follow us */}
                        <div className="w-full sm:w-3/12 mb-4">
                            <h5 className="font-bold text-lg">Follow us</h5>
                            <p className="mt-2 mx-3 space-x-4">
                                <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="#" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="#" title="Google Plus" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </a>
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full sm:w-3/12 mb-4">
                            <h5 className="font-bold text-lg">Contact Info</h5>
                            <ul className="mt-2">
                                <li className="address">
                                    <i className="fa fa-phone icon"></i> +91-8401209201 (India)
                                </li>
                                <li className="address">
                                    <i className="fa fa-phone icon"></i> +86-15636082010 (China)
                                </li>
                                <li className="address  ">
                                    <i className="fa fa-envelope icon"></i>
                                    <a href="mailto:ijariiejournal@gmail.com" className="ml-2">ijariiejournal@gmail.com</a>
                                </li>
                                <li className="address">
                                    <i className="fa fa-map-marker icon"></i>
                                    <span className="ml-2">
                                    M-20/234 Ami Appt,<br />
                                    Nr.Naranpura Tele-Exch,<br />
                                    Naranpura,<br />
                                    Ahmedabad-380063<br />
                                    Gujarat, India.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="text-center bg-[#32526e] p-3 text-white">Copyright © 2024. IJARIIE. All Rights Reserved</div>
        <div
           
            className="fixed bottom-0 right-0 bg-orange-400 text-white  p-2 cursor-pointer shadow-md  transition duration-300"
            onClick={handleScrollToTop}
        >
            <i className="fa fa-chevron-up text-lg"></i>
        </div>
        
        </div>
    )
}

 