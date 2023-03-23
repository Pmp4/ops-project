import "scss/app.scss"
import Header from 'components/layout/Header';
import Contents from 'components/layout/Contents';
import Footer from 'components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div id="wrap" className="App">
            <BrowserRouter>
                <Header/>
                <Contents/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
