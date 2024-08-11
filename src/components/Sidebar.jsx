import styles from './Sidebar.module.css';
import Logo from './Logo'
import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <footer className={styles.footer}>Copyright &copy;{new Date().getFullYear()}</footer>
        </div>
    )
}
export default Sidebar