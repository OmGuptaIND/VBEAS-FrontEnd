import "./App.css";
import { useState, useEffect } from "react";

import 'react-toastify/dist/ReactToastify.min.css';
import { Switch, Route, Redirect} from "react-router-dom";
import Books from "./Pages/Books/Books";
import Book from "./Pages/Book/Book";
import Stall from "./Pages/Stall/Stall";
import Home from "./Pages/Home/Home";
import Header from "./Partials/Header/Header";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
import jwt from 'jwt-simple';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Cart from "./Pages/Cart/Cart";
import Recommended from "./Pages/Recommended/Recommended";
import Orders from "./Pages/Orders/Orders";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";


function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user === null) setLoading(false);
    let token = localStorage.getItem('_qid');
    if (token){
      let data = jwt.decode(token, process.env.REACT_APP_JWT_SECRET); // eslint-disable-next-line
      if( data ) dispatch(setCurrentUser(data)); // eslint-disable-next-line
      setLoading(false);
    }
    else setLoading(false);
  }, [])
  if (loading) return <Loading />
  return (
      <div className='App'>
          <ScrollToTop>
              <Header />
              <Switch>
                  <Route path='/books' component={Books} />
                  <Route path='/book/:id' component={Book} />
                  <Route path='/stalls' component={Stall} />
                  <Route path = '/recommended' component = {Recommended} />
                  <Route path = '/personal' component = {Orders} /> 
                  <Route path = '/cart' component = {Cart} />
                  
                  <Route path = '/admin' render = {(props) => {
                    if (user?.userCode === 1) {
                      return <AdminPanel {...props} />
                    }
                    else {
                      return <Redirect to = '/' />
                    }
                  }} />
                  <Route path='/' exact component={Home} />

                  <Route path = '*' render = {(props) => <Redirect to = '/' />} />
              </Switch>
              <ToastContainer
                  position='bottom-center'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
          </ScrollToTop>
      </div>
  );
}

export default App;
