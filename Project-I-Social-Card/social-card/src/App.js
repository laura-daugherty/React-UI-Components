import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js'
import CardContainer from "./components/CardComponents/CardContainer"
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail"

const App = () => {
  return (
  //   <div>
  //     <h3>Welcome to React Social Card!</h3>
  //     <p>
  //       Begin by exploring the `components` directory. You'll notice we have a
  //       few files that we've already included in there to get you started right
  //       away building components. You'll need to make sure you include your
  //       components that you build in this file to watch your app come to life
  //     </p>
  //     <p>
  //       <strong>
  //         Don't forget to `default export` your components and import them here
  //         inside of this file in order to make them work.
  //       </strong>
  //     </p>
  //   </div>
    <div className="AppDiv">
      <div className="left-side">
        <ImageThumbnail  />
      </div>
      <div className="right-side">
        <HeaderContainer  />
        <CardContainer  />
      </div>
    </div>
  )
};

export default App;
