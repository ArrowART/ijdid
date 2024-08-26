import Leftsidecontent from "../../Core/Leftsidecontent";
import Rightsidecontent from "../../Core/Rightsidecontent";
import Termsandconditioncontent from "./Termsandconditioncontent";


export default function Termsandcondition() {
  return (
    <div>
       <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-6 ">  
            <Termsandconditioncontent/>
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
