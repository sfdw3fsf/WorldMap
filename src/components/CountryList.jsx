import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
function CountryList({ cities }) {
    const countries = cities.reduce((arr, city) => { if (arr.map((item) => item.country).includes(city.country)) { return arr } else return [...arr, { country: city.country, emoji: city.emoji }] }
        , [])
    return (
        <ul className={styles.countryList}>
            {countries.map((country) => CountryItem(country = { country }))}
        </ul>
    )


}

export default CountryList
