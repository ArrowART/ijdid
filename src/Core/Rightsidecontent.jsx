

export default function Rightsidecontent() {
  return (
    <div>
      
              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 mb-2 text-center p-2 bg-gray-200">ISSN Online Number</h3>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex justify-center">
                    <img alt="issn online number" src="assets/images/barcode.png" className="max-w-full h-auto" />
                  </div>
                </div>

              </div>


              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 text-center bg-gray-200 p-2 mt-2 mb-2">Approved By</h3>

                  <div className="bg-gray-100 pl-4 rounded-lg shadow-md">
                    <div
                      className="overflow-hidden h-[150px]"
                     
                    >
                      <marquee
                        direction="up"
                        onMouseOver={(e) => e.currentTarget.stop()}
                        onMouseOut={(e) => e.currentTarget.start()}
                        // eslint-disable-next-line react/no-unknown-property
                        scrolldelay="200"

                        className="space-y-4"
                      >
                        <img
                          alt="issn online number"
                          className="w-[200px] h-[200px] mx-auto"
                          src="assets/images/niscair.jpg"
                        />
                        <img
                          alt="issn online number"
                          className="w-[200px] h-[200px] mx-auto"
                          src="assets/images/csir.jpg"
                        />
                      </marquee>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-orange-500 text-center bg-gray-200 p-2 mt-8 mb-2">Global Indexing</h3>

                  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <div
                      className="overflow-hidden h-[150px]"
                     
                    >
                      <marquee
                        direction="up"
                        onMouseOver={(e) => e.currentTarget.stop()}
                        onMouseOut={(e) => e.currentTarget.start()}
                        // eslint-disable-next-line react/no-unknown-property
                        scrolldelay="200"

                        className="space-y-4"
                      >
                        <a
                          href="https://scholar.google.co.in/citations?user=tpiTtoAAAAAJ&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/images/niscair.jpg"
                            alt="Mountain View"
                            className="w-[100px] h-[105px] mx-auto"
                          />
                        </a>
                        {/* Repeat for other links and images */}
                      </marquee>
                    </div>
                  </div>
                </div>


              </div>

              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 mb-2 text-center p-2 bg-gray-200">IMPACT FACTOR</h3>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex justify-center">
                    <img alt="issn online number" src="assets/images/impactfactor.png" className="max-w-full h-auto" />
                  </div>
                </div>

              </div>

              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 text-center bg-gray-200 p-2 mt-2 mb-2">ISO Certified</h3>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div
                    className="overflow-hidden h-[150px]"
                    
                  >
                    <marquee
                      direction="up"
                      onMouseOver={(e) => e.currentTarget.stop()}
                      onMouseOut={(e) => e.currentTarget.start()}
                      // eslint-disable-next-line react/no-unknown-property
                      scrolldelay="200"

                      className="space-y-4"
                    >
                      <img
                        alt="issn online number"
                        className="w-[200px] h-[200px] mx-auto"
                        src="assets/images/niscair.jpg"
                      />
                      <img
                        alt="issn online number"
                        className="w-[200px] h-[200px] mx-auto"
                        src="assets/images/csir.jpg"
                      />
                    </marquee>
                  </div>
                </div>
              </div>

              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 mb-2 text-center p-2 bg-gray-200">Open Access Journal</h3>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex justify-center">
                    <img alt="issn online number" src="assets/images/openaccess.png" className="max-w-full h-auto" />
                  </div>
                </div>

              </div>

              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 mb-2 text-center p-2 bg-gray-200">QR Code</h3>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex justify-center">
                    <img alt="issn online number" src="assets/images/qrcode.png" className="max-w-full h-auto" />
                  </div>
                </div>

              </div>

              <div className="  mt-10 w-full 2xl:w-[300px] 2xl:mx-[50px] mx-auto ">
                <h3 className="text-lg font-semibold text-orange-500 mb-2 text-center p-2 bg-gray-200">CC Licence</h3>

                <div className="sidebar_box text-center p-4 bg-gray-100 rounded-lg shadow-md">
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"

                  >
                    <img
                      alt="Creative Commons License"
                      src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                      className="border-0 mx-auto"
                    />
                  </a>
                  <br />
                  <span className="text-sm">
                    This work is licensed under a{" "}
                    <a
                      rel="license"
                      href="http://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"

                      className="text-blue-600 hover:underline"
                    >
                      Creative Commons Attribution-ShareAlike 4.0 International License
                    </a>
                    .
                  </span>
                </div>

              </div>

            
    </div>
  )
}
