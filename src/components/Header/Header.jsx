import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import Avatar from "../../assets/Avatar.svg";
import Search from "../../assets/Search.svg";
import Settings from "../../assets/Settings.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.header__left}>
            <img className={styles.header__logo} src={Logo} alt="Logo" />
          </div>
          <div className={styles.header__right}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Поиск"
                className={styles.search__input}
              />
              <button className={styles.search__button}>
                <img src={Search} alt="Search" />
              </button>
            </div>
            <div className={styles.header__user_group}>
              <div className={styles.user}>
                <img
                  src={Avatar}
                  alt="Максим Галактионов"
                  className={styles.user__avatar}
                />
                <span className={styles.user__name}>Максим Галактионов</span>
                <button className={styles.settings}>
                <img src={Settings} alt="Настройки" />
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
