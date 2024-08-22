import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div>
       
        <div className="mt-20 bg-blue-500">
            <div className="container mx-auto p-4">
                <div className="wrapper">
                    <div className="flex flex-wrap">
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
                                <Link to="/Privacypolicy" className="text-white">Privacy and Policy</Link>
                            </h5>
                        </div>

                        {/* Follow us */}
                        <div className="w-full sm:w-3/12 mb-4">
                            <h5 className="font-bold text-lg">Follow us</h5>
                            <p className="mt-2 mx-3">
                                <a href="https://www.facebook.com/pages/IJARIIE/357093271151486?ref=hl" title="Facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/ijariiejournal" title="Twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/hp/?dnr=9V80Nw4m0IrGCELn9VCT47nw141hol0eH135&trk=nav_responsive_tab_home" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://plus.google.com/u/2/111488939421674281293/posts" title="Google Plus" target="_blank" rel="noopener noreferrer">
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
                                <li className="address">
                                    <i className="fa fa-envelope icon"></i>
                                    <a href="mailto:ijariiejournal@gmail.com">ijariiejournal@gmail.com</a>
                                </li>
                                <li className="address">
                                    <i className="fa fa-map-marker icon"></i>
                                    M-20/234 Ami Appt,<br />
                                    Nr.Naranpura Tele-Exch,<br />
                                    Naranpura,<br />
                                    Ahmedabad-380063<br />
                                    Gujarat, India.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="text-center bg-yellow-500 p-2">Copyright © 2024. IJARIIE. All Rights Reserved</div>
        
        </div>
    )
}
 