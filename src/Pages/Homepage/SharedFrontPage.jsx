import React from "react";
import Featured from "../../Components/Featured/Featured";
import Front from "../../Components/Front/Front";
import RotateImgs from "../../Components/Rotating/RotateImgs";

const SharedFrontPage = ({ tl, Expo }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          overflow:'hidden'
        }}
        id="main"
      >
        <Front tl={tl} Expo={Expo} />
        <RotateImgs />
        <Featured tl={tl} Expo={Expo}/>
      </div>
    </>
  );
};

export default SharedFrontPage;
