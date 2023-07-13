import styles from "./SearchPopup.module.css";
// component tab aside search
function SearchPopup() {
  return (
    <div className={styles.container}>
      <h2>Search</h2>
      <div className={styles.inputForm}>
        <label>Destination</label>
        <input type="text"></input>
      </div>
      <div className={styles.inputForm}>
        <label>Check-in Date</label>
        <input type="date"></input>
      </div>
      <h5>Options</h5>
      <div className={styles.options}>
        <label>Min price per night</label>
        <input type="number"></input>
        <label>Max price per night</label>
        <input type="number"></input>
        <label>Adult</label>
        <input type="number"></input>
        <label>Children</label>
        <input type="number"></input>
        <label>Room</label>
        <input type="number"></input>
      </div>
      <button type="button" className={styles.btn}>
        Search
      </button>
    </div>
  );
}

export default SearchPopup;
