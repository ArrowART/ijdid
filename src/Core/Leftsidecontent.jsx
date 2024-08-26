import { Link } from "react-router-dom"

export default function Leftsidecontent() {
    return (
        <div>
           
                <div className="  mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md ">
                    <h3 className=" text-lg font-semibold mb-4 bg-gray-200  py-2  text-center text-orange-500 w-[300px] ">
                        Call for Papers: Vol.10 Issue.4
                    </h3>
                    <div className=" w-full 2xl:w-[300px] rounded-lg  shadow-md text-[16px]">
                        <label className=" text-[18px]  mb-2   text-orange-500 ml-24 ">Important Dates</label>
                        <table className=" w-full 2xl:w-[300px] border border-gray-300 text-sm ">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-1">
                                        Submission
                                        <br />
                                        Last date
                                    </td>
                                    <td className="p-1">30-Aug-2024</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 text-orange-600">Acceptance Status</td>
                                    <td className="p-1">In One Day</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-1 text-orange-600">Paper Publish</td>
                                    <td className="p-1">In Two Days</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center p-2">
                                        <a
                                            href="/submitmanuscript"
                                            className="btn bg-orange-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Submit Manuscript
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        News &amp; Updates
                    </h3>
                    <div className="">
                        <label className="block font-medium mb-2 text-center text-orange-500 w-full 2xl:w-[260px]">News for bloggers</label>
                        <div
                            className="overflow-hidden h-40"
                           
                        >
                            <marquee
                                direction="up"
                                onMouseOver={(e) => e.currentTarget.stop()}
                                onMouseOut={(e) => e.currentTarget.start()}
                                // eslint-disable-next-line react/no-unknown-property
                                scrolldelay="200"
                                className="block h-full"
                                style={{ height: '150px' }}
                            >
                                <b>
                                    <u>Submit Article</u>
                                </b>
                                <p>
                                    Dear Authors, <b>Article publish</b> in our journal for Volume-10, Issue-4. For article submission on the link below:{" "}
                                    <a href="/submitmanuscript" className="text-blue-500 underline">
                                        Submit Manuscript
                                    </a>
                                </p>
                                <br />
                                <b>
                                    <u>Join As Board</u>
                                </b>
                                <p>
                                    Dear Reviewer, <b>You can join our Reviewer team</b>{" "}
                                    <i>without any charges</i> in our journal. Submit Details on the link below:{" "}
                                    <a href="/joininboard" className="text-blue-500 underline">
                                        Join As Board
                                    </a>
                                </p>
                                <br />
                                <b>
                                    <u>
                                        <a href="/processingcharge" className="text-blue-500 underline">
                                            Paper Publication Charges
                                        </a>
                                    </u>
                                </b>
                                <br />
                                <br />
                                <b>
                                    <u>IJARIIE APP</u>
                                </b>
                                <br />
                                <a href="#" className="text-blue-500 underline">
                                    Download Android App
                                </a>
                            </marquee>
                        </div>
                    </div>
                </div>

                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        For Authors
                    </h3>
                    <div className="p-4 mt-3 w-full 2xl:w-[300px]">
                        <ul className="space-y-2 w-full 2xl:w-[260px] text-justify mt-2">
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/publishpaper" className="text-blue-500 hover:text-blue-700">
                                    How to Publish Paper
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/submitmanuscript" className="text-blue-500 hover:text-blue-700">
                                    Submit Manuscript
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/processingcharge" className="text-blue-500 hover:text-blue-700">
                                    Processing Charges
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/paymentcopyrights" className="text-blue-500 hover:text-blue-700">
                                    Submit Payment
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        Archives

                    </h3>
                    <div className="p-4 mt-3 w-full 2xl:w-[300px]">
                        <ul className="space-y-2 w-full 2xl:w-[260px] text-justify mt-2">
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/publishpaper" className="text-blue-500 hover:text-blue-700">
                                    How to Publish Paper
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/submitmanuscript" className="text-blue-500 hover:text-blue-700">
                                    Submit Manuscript
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        IJARIIE Board
                    </h3>
                    <div className="p-4 mt-3 w-full 2xl:w-[300px]">
                        <ul className="space-y-2 w-full 2xl:w-[300px] text-justify mt-2">
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/" className="text-blue-500 hover:text-blue-700">
                                    Member Of Board
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/joininboard" className="text-blue-500 hover:text-blue-700">
                                    Join As Board
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        Downloads and Policy
                    </h3>
                    <div className="p-4 mt-3 w-full 2xl:w-[300px]">
                        <ul className="space-y-2 w-full 2xl:w-[300px] text-justify mt-2">
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/authorguideline" className="text-blue-500 hover:text-blue-700">
                                    Authors Guidelines
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <a
                      href="File/IJARIIE_Copyrights_Form.pdf"
                      download
                      className="block w-full text-left text-blue-500"
                    >
                      Manuscript Template
                    </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="https://ijariie.com/File/IJARIIE_Copyrights_Form.pdf" className="text-blue-500 hover:text-blue-700">
                                    Copyrights Form
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/copyrightandlicensing" className="text-blue-500 hover:text-blue-700">
                                    Copy Right Licensing Policy
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/peerreviewpolicy" className="text-blue-500 hover:text-blue-700">
                                    Peer Review Policy
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/refundpolicy" className="text-blue-500 hover:text-blue-700">
                                    Refund Policy
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-caret-right text-orange-500 mr-2"></i>
                                <Link to="/termsandcondition" className="text-blue-500 hover:text-blue-700">
                                    Terms and condition
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="   mt-10 w-full 2xl:w-[300px] rounded-lg shadow-md">
                    <h3 className=" text-lg font-semibold mb-4 text-center bg-gray-200 text-orange-500 py-2 w-full 2xl:w-[300px]">
                        Android App
                    </h3>
                    <div className="p-4 mt-3 w-full 2xl:w-[300px]">
                        <button className="bg-orange-400 p-3 rounded-sm ml-10">Download IJARIIE APP</button>
                    </div>
                </div>

           

        </div>
    )
}
