import { useEffect, useState } from "react";
import LoadingComponent from "./components/loadingComponent/IndexLoading";
import "./sass/style.css"
import MainPageComponent from "./components/mainPageComponent/indexMainPage";

function App() {
  // create state to loading and chage page on load
  const [loading, setLoading] = useState (true)

  // use effect to make loading
  useEffect (() => {
    // put app on loading state for x secound

    // loadinf duration in secounds
    const loadingDuration = 6.9

    // turn on loading mode and turn it off in loading duration
    setLoading (true)
    setTimeout(() => setLoading(false), loadingDuration * 1000)
  }, [])

  return (
    <>
      {
        loading ? 
        // if page is loading
        
        <LoadingComponent/>
        
        : 
        // if page is loaded
        
        <MainPageComponent/>

      }
    </>
  );
}

export default App;
