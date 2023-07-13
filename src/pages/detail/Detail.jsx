import styles from "./Detail.module.css";
import Header from "./Header";
import detailData from "../../data/detail";
import PriceDetail from "./PriceDetail";
// gan va hien thi cac component con cua detail va truyen props
const Detail = () => {
  return (
    <div className={styles.container}>
      <Header data={detailData} />
      <div className={styles.imgContainer}>
        {detailData.photos.map((el) => (
          <img src={el}></img>
        ))}
      </div>
      <PriceDetail data={detailData} />
    </div>
  );
};

export default Detail;
