import "scss/app.scss"
import Header from 'components/layout/Header';
import Contents from 'components/layout/Contents';
import Footer from 'components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducer/rootReducer';
import Modal from 'components/modal/Modal';
import { createStore } from 'redux';
import { useEffect } from 'react';

function App() {
    const store = createStore(rootReducer);

    useEffect(() => {
        console.log("debug");
    }, []);

    return (
        <div id="wrap" className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Modal/>
                    <Header/>
                    <Contents/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
