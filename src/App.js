import './App.css';
import { Main } from './pages/Main'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
        <div className="container" >
            <Switch>
                <Route path="/" exact component={ Main }/>
            </Switch>
            <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </div>
    </BrowserRouter>
  );
}

export default App;
