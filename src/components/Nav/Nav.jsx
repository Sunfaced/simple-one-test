import styles from "./Nav.module.scss";
import Sidebar from "../../assets/Sidebar.svg"
import Star from "../../assets/Star.svg"
import Clip from "../../assets/Clip.svg"
import Arroy from "../../assets/Arroy.svg"
import Filter from "../../assets/Filter.svg"

const menuItems = [
  "Моя работа",
  "Структура портала",
  "Личное расписание",
  "Отсутствие на рабочем месте",
  "Портфель услуг",
  "Дашборды",
  "Доски задач",
  "Обращения",
  "События",
  "Инциденты",
  "Проблемы",
  "Настройка каталогов",
  "Запросы на обслуживание",
  "Запросы на изменение",
  "Управление конфигурациями",
  "Управление уровнем услуг",
  "Управление уровнем услуг"
];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__content}>
          <div className={styles.nav__side}>
            <button className={styles.nav__toggle}>
              <img src={Sidebar} alt="Toggle menu" />
            </button>
            <button className={styles.nav__favorite}>
              <img src={Star} alt="Favorites" />
            </button>
          </div>

          <div className={styles.nav__main}>
            <div className={styles.nav__controls}>
              <div className={styles.search}>
                <input 
                  type="text" 
                  className={styles.search__input} 
                  placeholder="Поиск по меню"
                />
                <button className={styles.search__filter}>
                  <img src={Filter} alt="Filter" />
                </button>
              </div>
              <button className={styles.nav__pin}>
                <img src={Clip} alt="Pin" />
              </button>
            </div>

            <div className={styles.nav__menu}>
              <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                  <li key={index} className={styles.menu__item}>
                    <button className={styles.menu__button}>
                      <img src={Arroy} alt="" className={styles.menu__arrow} />
                      <span className={styles.menu__text}>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};



