import "./Shop-Button.scss";

const ShopButton = (props) => {
  const { className, text, clickEvent } = props;
  return (
    <button className={className} onClick={clickEvent}>
      {text}
    </button>
  );
};

export default ShopButton;
