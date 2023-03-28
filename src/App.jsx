import React, { useState, useEffect } from 'react'
import { Layout } from './Components/Layout/Layout'
import SyncLoader from "react-spinners/SyncLoader";

//fonts
import "./fonts/Lato-Black.ttf";
import "./fonts/Lato-BlackItalic.ttf";
import "./fonts/Lato-Light.ttf";
import "./fonts/Lato-Regular.ttf";
import "./fonts/Lato-Thin.ttf";
import "./fonts/Lato-Bold.ttf";
import "./fonts/Lato-BoldItalic.ttf";
import "./fonts/Lato-Italic.ttf";
import "./fonts/Lato-BoldItalic.ttf";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [color, setColor] = useState("#86C232");

  const override = {
    backgroundColor: '#222629',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {

    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 3500);
    return () => {

    }
  }, [])

  return (
    <>
      {
        isLoading ?
          <div className='loader'>
            <SyncLoader
              color={color}
              loading={isLoading}
              size={16}
            />
          </div>
          :
          <div>
            <Layout />
          </div>
      }
    </>
  )
}

export default App
