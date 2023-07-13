import styles from "./HotelListHomePage.module.css";

const HotelListHomePage = (props) => {
  // hien thi danh sach hotel, gia theo file thong qua props
  return (
    <div className={styles.container}>
      {props.hotelLists.map((el) => (
        <div className={styles.hotel} key={Math.random().toString()}>
          <img src={el.image}></img>
          <div className={styles.content}>
            <h3>{el.name}</h3>
            <p>{el.count} hotels</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HotelListHomePage;
