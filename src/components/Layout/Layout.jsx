import { Nav } from '../Nav/Nav'
import { Main } from '../Main/Main'
import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <Main />
    </div>
  )
} 