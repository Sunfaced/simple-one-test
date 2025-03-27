import styles from './FormField.module.scss';
import Search from "../../assets/Search.svg";

const FormField = ({ label, placeholder, withSearch }) => {
  
  const needsAsterisk = label === "Тема" || label === "Рабочие заметки";
  
  return (
    <div className={styles.field}>
      <label className={styles.field__label}>
        {needsAsterisk && <span className={styles.asterisk}>* </span>}
        {label}
      </label>
      <div className={styles.field__row}>
        <input
          type="text"
          className={styles.field__input}
          placeholder={placeholder}
        />
        {withSearch && (
          <button className={styles.field__action_button}>
            <img src={Search} alt="Поиск" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FormField; 