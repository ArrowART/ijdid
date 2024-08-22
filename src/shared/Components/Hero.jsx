
import '@fortawesome/fontawesome-free/css/all.min.css';
import Leftsidecontent from '../../Core/Leftsidecontent';
import Homecenter from './Homecenter';
import Rightsidecontent from '../../Core/Rightsidecontent';


export default function Hero() {
  return (
    <div>
      <section>
        <div className="max-w-[92rem] mx-auto w-full px-4">
          <div className="grid grid-cols-12 ">
          <div className="col-span-12 w-full   2xl:col-span-3 ">
            <Leftsidecontent/>
            </div>
            <div className="col-span-12 w-full  2xl:col-span-6 ">  
            <Homecenter/>
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
