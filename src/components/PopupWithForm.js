function PopupWithForm(props) {

 

  function handleOverlayClose(evt){
    if (evt.target === evt.currentTarget)
    props.onClickClose();
  }

  return (
    <section
      className={`popup ${props.show && "popup_opened"}`}
      id={props.popupType}
      onClick={handleOverlayClose}
    >
      <div
        className={`popup__rectangle ${
          props.popupType === "popup-confirm" &&
          "popup__rectangle_difference_height"
        }`}
      >
        <button
          type="button"
          className="close-icon buttons-hover"
          onClick={props.onClickClose}
        ></button>

        {props.children}

      </div>
    </section>
  );
}
export default PopupWithForm;
