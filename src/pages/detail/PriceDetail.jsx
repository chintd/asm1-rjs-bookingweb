import styles from "./PriceDetail.module.css";
// component hien thi chi tiet ve khach san va muc gia
function PriceDetail(props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
      </div>
      <div className={styles.price}>
        <h2>Perfect for a 9-night stay!</h2>
        <p>
          $<strong>{props.data["nine_night_price"]}</strong> (9 night)
        </p>
        <button className={styles.btn} type="button">
          Resverve or Book Now
        </button>
      </div>
    </div>
  );
}

export default PriceDetail;
