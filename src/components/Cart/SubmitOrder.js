import styles from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const confirmOrderHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Введите Имя</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Введите Название Города</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Введите Адрес</label>
        <input type="text" id="address" />
      </div>
      <button>Подтвердить Заказ</button>
      <button type="button" onClick={props.onCancel}>
        Отменить
      </button>
    </form>
  );
};

export default SubmitOrder;
