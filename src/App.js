import SideBar from "./Components/SideBar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch as Switching, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Switch from"@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useEffect, useState} from "react"
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import Portfolio from "./Pages/Portfolio";
import ProductPage from "./Pages/ProductPage";
//import CartPage from "./Pages/CartPage";
import {AnimatePresence} from "framer-motion";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./redux/reducers/index";
import UserStoreProvider from "./context/UserContext"
//simport DetailPage from "./Pages/DetailPage";

import { ToastProvider } from 'react-toast-notifications'

const store = createStore(rootReducer)

function App() {

  const [theme,setTheme] = useState('dark-theme')
  const [check,setCheck] = useState(false)

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme("dark-theme")
      setCheck(false)
    }
    else{
      setTheme("light-theme")
      setCheck(true)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])

  return (
    <div className="App">
      <SideBar/>
      <MainContentStyled className="main-content">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon/>
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={check}
              inputProps={{'arial-label':''}}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
        <Provider store={store}>
          <UserStoreProvider>
          <AnimatePresence>
            <ToastProvider placement="top-right">
          <Switching>
            <Route path='/' exact><HomePage/></Route>
            <Route path='/about'><AboutPage/></Route>
            <Route path='/resume'><ResumePage/></Route>
            <Route path='/portfolio'><Portfolio/></Route>
            <Route path='/contact'><ContactPage/></Route>
            <Route path='/product'><ProductPage /></Route>
          </Switching>
          </ToastProvider>
        </AnimatePresence>
          </UserStoreProvider>
        </Provider>
        
        
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
  
`

export default App;
