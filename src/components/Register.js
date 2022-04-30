import Form from "./Form";

function Register(props) {
  return (
    <>
      <Form title="Регистрация">
        <div className="form__field-container">
          <input
            type="email"
            className="form__field form__field_difference_autorization"
            name="email"
            id="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required

            /* value={""} */
          />
          <span className="form__input-error form__title-error"></span>
        </div>
        <div className="form__field-container">
          <input
            type="password"
            className="form__field form__field_difference_autorization"
            name="password"
            id="password"
            placeholder="Пароль"
            required

            /* value={""} */
          />
          <span className="form__input-error form__link-error"></span>
        </div>
        <button
          className="form__button form__button_difference_authorization"
          type="submit"
        >
          {props.isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </Form>
      <p className="form__register-question">Уже зарегистрированы? <span className="buttons-hover">Войти</span></p>
    </>
  );
}

export default Register;
