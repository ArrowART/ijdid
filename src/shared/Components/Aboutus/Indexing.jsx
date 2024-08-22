import Leftsidecontent from "../../../Core/Leftsidecontent";
import Indexingcontent from "./Indexingcontent";


export default function Indexing() {
  return (
    <div>
      <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-9 ">  
            <Indexingcontent/>
            </div>
            

           





          </div>







        </div>
      </section>
    </div>
  )
}
