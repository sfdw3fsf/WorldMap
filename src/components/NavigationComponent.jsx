import { NavLink, Outlet } from "react-router-dom"
import styles from "./PageNav.module.css"
import Logo from "./Logo"
function NavigationComponent() {
    return (

        <><nav className={styles.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to='/product'>Product</NavLink>
                </li>
                <li>
                    <NavLink to='/price'>Price</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
            </ul>
        </nav><Outlet /></>

    )
}
export default NavigationComponent