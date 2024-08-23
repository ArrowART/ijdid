import Leftsidecontent from "../../../Core/Leftsidecontent";
import Advisoryboardcontent from "./Advisoryboardcontent";



export default function Advisoryboard() {
  return (
    <div>
      <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-9 ">  
            <Advisoryboardcontent/>
            </div>
            

           





          </div>







        </div>
      </section>
    </div>
  )
}
