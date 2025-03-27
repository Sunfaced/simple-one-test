import styles from './FieldRow.module.scss';
import closeCircle from "../../assets/close-circle.svg";
import Plus from "../../assets/Plus.svg";
import Search from "../../assets/Search.svg";
import Cross from "../../assets/Cross.svg"


const defaultTags = [
  "Андрей Пивоваров",
  "Максим Галактионов",
  "Алла Лин",
  "Константин Константинопольский Константинович",
  "Игорь Иванченко",
  "Юлия Эйчаровна",
  "Артём Подпрыгайко-Саппортов",
  "Илья Вазнец",
  "Михаил Вортенов",
  "Наталья Нашевна",
  "Евгения Итамовна",
  "Алиса Киральчук"
];

const FieldRow = ({ label }) => {

  const getValue = () => {
    switch (label) {
      case "Ответственный":
        return ["Константин Константинопольский"];
      case "Группа":
        return ["Support Group"];
      case "Согласующие":
        return defaultTags;
      case "Кем открыто":
        return ["Андрей Пивоваров"];
      case "Кем создано":
        return ["Андрей Пивоваров"];
      default:
        return [];
    }
  };

  const displayTags = getValue();

  return (
    <div className={styles.field}>
      <label className={styles.field__label}>{label}</label>
      <div className={styles.field__row}>
        <div className={styles.field__input_wrapper}>
          <div className={styles.field__tags}>
            {displayTags.map((tag, index) => (
              <div key={index} className={styles.field__tag}>
                <span>{tag}</span>
                {label === "Согласующие" && (
                  <button className={styles.field__tag_delete}>
                    <img src={Cross} alt="Удалить" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {displayTags.length > 0 && (
            <div className={styles.field__clear_container}>
              <button className={styles.field__clear_button}>
                <img src={closeCircle} alt="Очистить" />
              </button>
            </div>
          )}
        </div>
        <div className={styles.field__external_buttons}>
        <button className={styles.field__action_button}>
            <img src={Plus} alt="Добавить" />
          </button>
          <button className={styles.field__action_button}>
            <img src={Search} alt="Поиск" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FieldRow; 