import Leftsidecontent from "../../../Core/Leftsidecontent";
import Submitmanuscriptcontent from "./Submitmanuscriptcontent";


export default function Submitmanuscript() {
  return (
    <div>
       <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-9 ">  
            <Submitmanuscriptcontent/>
            </div>
            

           





          </div>







        </div>
      </section>
    </div>
  )
}
