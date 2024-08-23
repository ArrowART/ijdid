import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Hero from "../shared/Components/Hero";
import Footer from "../Core/Footer";
import Leftsidecontent from "../Core/Leftsidecontent";
import Rightsidecontent from "../Core/Rightsidecontent";
import Homecenter from "../shared/Components/Homecenter";
import AimAndScopes from "../Components/Home/About/AimAndScopes";
import Researcharea from "../shared/Components/Aboutus/Researcharea";
import ResearchArea from "../Components/Home/About/ResearchArea";
import ImpactFactor from "../Components/Home/About/ImpactFactor";
import InDexing from "../Components/Home/About/InDexing";
import AuthorGuideline from "../Components/Home/Forauthors/AuthorGuideline";
import PublishPaper from "../Components/Home/Forauthors/PublishPaper";
import SubmitManuscript from "../Components/Home/Forauthors/SubmitManuscript";
import ProcessingCharge from "../Components/Home/Forauthors/ProcessingCharge";
import PaymentCopyrights from "../Components/Home/Forauthors/PaymentCopyrights";
import JoinInBoard from "../Components/Home/Board/JoinInBoard";



export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/leftcontent" element={<Leftsidecontent/>}/>
        <Route path="/rightcontent" element={<Rightsidecontent/>}/>
        <Route path="/homecenter" element={<Homecenter/>}/>
        <Route path="/aimandscope" element={<AimAndScopes/>}/>
        <Route path="/researchareas" element={<Researcharea/>}/>
        <Route path="/researcharea" element={<ResearchArea/>}/>
        <Route path="/impactfactor" element={<ImpactFactor/>}/>
        <Route path="/indexing" element={<InDexing/>}/>
        <Route path="/authorguideline" element={<AuthorGuideline/>}/>
        <Route path="/publishpaper" element={<PublishPaper/>}/>
        <Route path="/submitmanuscript" element={<SubmitManuscript/>}/>
        <Route path="/processingcharge" element={<ProcessingCharge/>}/>
        <Route path="/paymentcopyrights" element={<PaymentCopyrights/>}/>
        <Route path="/joininboard" element={<JoinInBoard/>}/>



    </Routes>
    </BrowserRouter>
  )
}
