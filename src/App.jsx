import React from 'react';
import Img from './assets/thumb-1920-1153173.jpg';
import LoginPopup from './LoginPop/Loginpopupo';  // Fixed capitalization
import Hero from './Components\'/Hero/Hero';
import Navbar from './Components\'/Navbar/navbar';

const bgImage = {
  backgroundImage: `url(${Img})`,
  height: "800px",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",  // Fixed typo
  backgroundPosition: "center",
};

const App = () => {
  const [loginPopupVisible, setLoginPopupVisible] = React.useState(false);

  const toggleLoginPopup = () => {
    setLoginPopupVisible((prev) => !prev);
  };

  return (
    <>
      <main style={bgImage}>
        <Navbar toggleLoginPopup={toggleLoginPopup} />
        <Hero/>
      </main>

      {/* Login Popup */}
      <LoginPopup loginPopup={loginPopupVisible} toggleLoginPopup={toggleLoginPopup} />
    </>
  );
};

export default App;
