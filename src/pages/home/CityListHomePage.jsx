import styles from "./CityListHomePage.module.css";
// hien thi danh sach img cac thanh pho
const CityListHomePage = (props) => {
  console.log(props.cityArr);
  return (
    <div className={styles.container}>
      {props.cityArr.map((el) => (
        <div className={styles.city} key={Math.random().toString()}>
          <div className={styles.cityContent}>
            <h2>{el.name}</h2>
            <p>{el.subText}</p>
          </div>
          <img src={el.image}></img>
        </div>
      ))}
    </div>
  );
};

export default CityListHomePage;
