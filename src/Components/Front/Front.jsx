import React, { useLayoutEffect, useRef } from "react";
import "./Front.css";
const Front = ({ tl, Expo }) => {
  let title_h1 = useRef(null);
  let title_h2 = useRef(null);
  let title_h3 = useRef(null);
  let title_h4 = useRef(null);
  let title_h5 = useRef(null);
  let title_h6 = useRef(null);
  let title_h7 = useRef(null);
  let title_h8 = useRef(null);
  let title_h9 = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let art = useRef(null);
  const gsapLogic = () => {
    tl.from([img1.current, img2.current, img3.current, img4.current], {
      opacity: 0,
      ease: Expo,
      y: 300,
      stagger: 0.2,
    })
      .from(
        [
          title_h1.current,
          title_h2.current,
          title_h3.current,
          title_h4.current,
          title_h5.current,
          title_h6.current,
          title_h7.current,
          title_h8.current,
          title_h9.current,
        ],
        {
          x: -200,
          stagger: 0.1,
          opacity: 0,
          ease: Expo,
          zIndex: 999,
        }
      )
      .from(art.current, {
        opacity: 0,
        ease: Expo,
        y: 100,
      });
  };

  useLayoutEffect(() => {
    gsapLogic();
  });

  return (
    <>
      <div className="wrap">
        <div className="images">
          <h1>
            <span ref={title_h1}>H</span>
            <span ref={title_h2}>A</span>
            <span ref={title_h3}>N</span>
            <span ref={title_h4}>D</span>
            <span ref={title_h5}>C</span>
            <span ref={title_h6}>R</span>
            <span ref={title_h7}>A</span>
            <span ref={title_h8}>F</span>
            <span ref={title_h9}>T</span>
          </h1>
          <img
            ref={img1}
            src="https://images.unsplash.com/photo-1598800489147-44a63d7b5016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
          <img
            ref={img2}
            src="https://images.unsplash.com/photo-1572725335307-3303414b3360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
          <img
            ref={img3}
            src="https://images.unsplash.com/photo-1622076358551-aaf9a65a0878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt=""
          />
          <img
            ref={img4}
            src="https://images.unsplash.com/photo-1619378396304-7ef156537d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
        </div>
        <h2 style={{ color: "#fff" }} ref={art}>
          Art of crafts
        </h2>
      </div>
    </>
  );
};

export default Front;
