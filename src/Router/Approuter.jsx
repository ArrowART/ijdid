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
import AdvisoryBoard from "../Components/Home/Board/AdvisoryBoard";
import EditorialBoard from "../Components/Home/Board/EditorialBoard";
import SrReviewerBoard from "../Components/Home/Board/SrReviewerBoard";
import JrReviwerBoard from "../Components/Home/Board/JrReviwerBoard";
import ConferenceProposal from "../Components/Home/Proposal/ConferenceProposal";
import SpecialProposal from "../Components/Home/Proposal/SpecialProposal";
import FAQS from "../Components/Home/Proposal/FAQS";
import ContactUs from "../Components/Home/Contactus/ContactUs";
import CopyRightAndLicensing from "../Components/Home/copyrightlicensing/CopyRightAndLicensing";
import PeerReviewPolicy from "../Components/Home/Peerreviewpolicy/PeerReviewPolicy";
import RefundPolicy from "../Components/Home/Refundpolicy/RefundPolicy";
import TermsAndCondition from "../Components/Home/Teamsandcondition/TermsAndCondition";
import PrivacyAndPolicy from "../Components/Home/Privacyandpolicy/PrivacyAndPolicy";
import CurrentIssues from "../Components/Home/Archives/CurrentIssues";



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
        <Route path="/advisoryboard" element={<AdvisoryBoard/>}/>
        <Route path="/editorialboard" element={<EditorialBoard/>}/>
        <Route path="/srreviewerboard" element={<SrReviewerBoard/>}/>
        <Route path="/jrreviewerboard" element={<JrReviwerBoard/>}/>
        <Route path="/conferenceproposal" element={<ConferenceProposal/>}/>
        <Route path="/specialproposal" element={<SpecialProposal/>}/>
        <Route path="/faqs" element={<FAQS/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/copyrightandlicensing" element={<CopyRightAndLicensing/>}/>
        <Route path="/peerreviewpolicy" element={<PeerReviewPolicy/>}/>
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path="/termsandcondition" element={<TermsAndCondition/>}/>
        <Route path="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
        <Route path="/currentissues" element={<CurrentIssues/>}/>




    </Routes>
    </BrowserRouter>
  )
}
