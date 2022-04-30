import Form from "./Form";

function Login(props) {
  return (
    <Form title="Вход">
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
      <button className="form__button form__button_difference_authorization" type="submit">
        {props.isLoading ? "Отправка данных..." : "Войти"}
      </button>
    </Form>
  );
}

export default Login;
