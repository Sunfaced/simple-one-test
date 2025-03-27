import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import closeCircle from "../../assets/close-circle.svg";
import Plus from "../../assets/Plus.svg";
import Search from "../../assets/Search.svg";
import FormField from "../FormField/FormField";
import FieldRow from "../FieldRow/FieldRow";
import Calendar from "../../assets/calendar.svg";
import { CgDisplayFlex } from "react-icons/cg";

const tags = [
  "Андрей Пивоваров",
  "Максим Галактионов",
  "Алла Лин",
  "Константин Константинопольский Константинович",
  "Игорь Иванченко",
  "Юлия Зяблова",
  "Артём Подпругайко-Сапгоров",
  "Илья Вязнец",
  "Михаил Вортенев",
  "Наталья Нащевна",
  "Евгений Итамонна",
  "Алиса Киральчук",
];

export const Main = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__content}>
          <div
            className={`${styles.main__header} ${
              isSticky ? styles.main__header_sticky : ""
            }`}
          >
            <div className={styles.main__toolbar}>
              <div className={styles.main__toolbar_left}>
                <h2 className={styles.main__title}>Подзадача</h2>
                <button className={styles.button}>Создать</button>
              </div>
              <div className={styles.main__toolbar_right}>
                <button className={`${styles.button} ${styles.button_primary}`}>
                  Сохранить
                </button>
                <button
                  className={`${styles.button} ${styles.button_secondary}`}
                >
                  Сохранить и выйти
                </button>
              </div>
            </div>
          </div>

          <div className={styles.ticket}>
            <div className={styles.ticket__header}>
              <h1 className={styles.ticket__title}>
                STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
                некоторые поля остаются редактируемыми для агента если он Caller
              </h1>
            </div>

            <div className={styles.ticket__body}>
                <div className={styles.ticket__block}>
                  <FormField
                    label="Тема"
                    required
                    placeholder="На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
                  />
                  <FormField label="Статус" placeholder="Новая" />
                </div>

                <div className={styles.ticket__block}>
                  <FormField label="Описание" placeholder="" />
                  <FormField
                    label="Продукт"
                    placeholder="Platform"
                    withSearch={true}
                  />
                </div>
                <div className={styles.ticket__block}>
                  <FormField
                    label="Рабочие заметки"
                    placeholder="Проверить ACL id=172830402014193655"
                  />
                  <FormField label="Приоритет" placeholder="Средний" />
                </div>
                <div className={styles.ticket__block}>
                  <FieldRow
                    label="Ответственный"
                    tagText="Константин Константинопольский"
                  />
                  <FieldRow label="Группа" tagText="Support Group" />
                </div>
            </div>

            <div className={styles.ticket__footer}>
              <FormField label="Комментарии" placeholder="" />
              <FieldRow label="Согласующие" />

              <div className={styles.ticket__meta}>
                <div className={styles.ticket__meta_row}>
                  <div className={styles.ticket__meta_field}>
                    <FormField label="Когда открыто" placeholder="" />
                    <button className={styles.ticket__calendar_button}>
                      <img src={Calendar} alt="Календарь" />
                    </button>
                  </div>
                  <div className={styles.ticket__meta_field}>
                    <FormField label="Когда создано" placeholder="22.10.2024" />
                    <button className={styles.ticket__calendar_button}>
                      <img src={Calendar} alt="Календарь" />
                    </button>
                  </div>
                </div>

                <div className={styles.ticket__meta_row}>
                  <FieldRow label="Кем открыто" />
                  <FieldRow label="Кем создано" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
