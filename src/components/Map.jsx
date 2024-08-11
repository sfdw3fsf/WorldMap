import styles from './Map.module.css'
import { useSearchParams, useNavigate } from 'react-router-dom';
function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat")
    const navigate = useNavigate();
    return (
        <div className={styles.mapContainer} onClick={() => navigate('form')}>
            Map{lat}
            <button onClick={() => setSearchParams({ lat: "23" })}>23</button>
        </div>
    )
}

export default Map
