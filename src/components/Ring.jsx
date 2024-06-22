// react
import { useRef } from "react";

const Ring = ({ children, borderRadius}) => {
  const boxRef = useRef(null);

  //   mouse move handler
  const mouseMoveHandler = (e) => {
    let x = e.pageX - Math.floor(boxRef.current.getBoundingClientRect().left);
    let y = e.clientY - Math.floor(boxRef.current.getBoundingClientRect().top);
    boxRef.current.style.setProperty("--x", x + "px");
    boxRef.current.style.setProperty("--y", y + "px");
  };

  return (
    <div
      style={{ borderRadius }}
      ref={boxRef}
      onMouseMove={mouseMoveHandler}
      className="product-slide-item w-fit overflow-hidden relative p-0.5 before:hidden xl:before:block"
    >
      {children}
    </div>
  );
};

export default Ring;
