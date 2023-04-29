import "./Shop-Button.scss";
import { ToastContainer, toast } from "react-toastify";

const ShopButton = (props) => {
  const { className, text, clickEvent } = props;
  return (
    <>
      <button className={className} onClick={clickEvent}>
        {text}
      </button>
      <ToastContainer />
    </> 
  );
};

export default ShopButton;
