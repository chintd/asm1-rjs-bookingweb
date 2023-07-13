import styles from "./HomesGuest.module.css";

function HomeGuest(props) {
  return (
    <div className={styles.container}>
      {/* map qua homeList hien thi danh sach khach san  */}
      {props.homeArr.map((el) => (
        <div className={styles.hotel}>
          <img src={el.image_url}></img>
          <div className={styles.content}>
            <h3>{el.name}</h3>
            <p>{el.city}</p>
            <h5>Starting from ${el.price}</h5>
            <div>
              <div className={styles.rate}> {el.rate}</div>
              <p>{el.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeGuest;
