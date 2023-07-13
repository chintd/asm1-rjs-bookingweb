import styles from "./Header.module.css";
// phan header cua file detail chua button signin vaf thong tin khach san
function Header(props) {
  const data = props.data;
  return (
    <div className={styles.container}>
      <div className={styles.headerInfo}>
        <h1>{data.name}</h1>
        <p>{data.address}</p>
        <p className={styles.blueText}>{data.distance}</p>
        <p className={styles.greenText}>{data.price}</p>
      </div>
      <button className={styles.btn} type="button">
        Resverve or Book Now
      </button>
    </div>
  );
}

export default Header;
