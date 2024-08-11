import styles from './CityItem.module.css'
import { Link } from "react-router-dom"
function CityItem({ city }) {
    const flagemojiToPNG = (flag) => {
        var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt()).map(char => String.fromCharCode(char - 127397).toLowerCase()).join('')
        return (<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />)
    }
    return (
        <li >
            <Link className={styles.cityItem} to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
                <span className={styles.emoji}>{flagemojiToPNG(city.emoji)}</span>
                <h3 className={styles.name}>{city.cityName}</h3>
                <time className={styles.date}>{ }</time>
                <button className={styles.deleteBtn}>&times;</button></Link>
        </li>
    )
}

export default CityItem
