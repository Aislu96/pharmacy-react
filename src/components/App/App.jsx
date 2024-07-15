import './App.scss';
import Header from "../Header/Header";
import FastMenu from "../FastMenu/FastMenu";
import Banner from "../Banner/Banner";
import Prebiotics from "../Prebiotics/Prebiotics";
import Footer from "../Footer/Footer";
import Articles from "../Articles/Articles";

function App() {
    return (
        <div className="App">
            <Header/>
            <FastMenu/>
            <Banner />
            <Prebiotics />
            <Articles />
            <Footer/>
        </div>
    );
}

export default App;
