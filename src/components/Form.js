




function Form(props) {
  return (
    <>
      <h2 className="form__title">{props.title}</h2>
      <form className="form__container" method="get" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </>
  );
}

export default Form;
