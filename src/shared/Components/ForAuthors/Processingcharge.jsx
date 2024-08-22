import Leftsidecontent from "../../../Core/Leftsidecontent";
import Rightsidecontent from "../../../Core/Rightsidecontent";
import Processingchargecontent from "./Processingchargecontent";


export default function Processingcharge() {
  return (
    <div>
       <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-6 ">  
            <Processingchargecontent/>
            </div>
            <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Rightsidecontent/>
            </div>

           





          </div>







        </div>
      </section>
    </div>
  )
}
