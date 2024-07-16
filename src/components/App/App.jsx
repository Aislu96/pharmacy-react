import './App.scss';
import Header from "../Header/Header";
import FastMenu from "../FastMenu/FastMenu";
import Banner from "../Banner/Banner";
import Prebiotics from "../Prebiotics/Prebiotics";
import Footer from "../Footer/Footer";
import Articles from "../Articles/Articles";
import Present from "../Present/Present";
import Questions from "../Questions/Questions";
import DeliveryTerms from "../DeliveryTerms/DeliveryTerms";
import Boutique from "../Boutique/Boutique";
import MainProduct from "../MainProduct/MainProduct";
import VideoSection from "../VideoSection/VideoSection";

function App() {
    return (
        <div className="App">
            <Header/>
            <FastMenu/>
            <Banner/>
            <Prebiotics/>
            <VideoSection/>
            <MainProduct/>
            <Boutique/>
            <DeliveryTerms/>
            <Questions/>
            <Present/>
            <Articles/>
            <Footer/>
        </div>
    );
}

export default App;
