import { useRef } from "react";
import styles from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
  };

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Введите Имя</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Введите Название Города</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Введите Адрес</label>
        <input type="text" id="address" ref={addressInputRef} />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Подтвердить Заказ</button>
        <button type="button" onClick={props.onCancel}>
          Отменить
        </button>
      </div>
    </form>
  );
};

export default SubmitOrder;
