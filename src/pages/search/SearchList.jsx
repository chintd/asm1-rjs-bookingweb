import styles from "./SearchList.module.css";
function SearchList(props) {
  console.log(props.searchArr);
  // function chuyen trang sang detail
  function MoveToDetail() {
    window.location.replace("/detail");
  }
  // gan ket qua tra ve tu array loop
  const results = props.searchArr.map((el) => (
    <div key={Math.random().toString()} className={styles.listItem}>
      <img src={el["image_url"]}></img>
      <div className={styles["info-container"]}>
        <h1>{el.name}</h1>
        {/* <p>{el["rate_text"]}</p>
          <div className={styles.rate}>{el.rate}</div> */}
        <p>{el.distance}</p>
        <div className={styles.tag}>{el.tag}</div>
        <h5>{el.description}</h5>
        <p>{el.type}</p>
        {el["free_cancel"] && (
          <div className={styles.greenText}>
            <h5>Free cancellation</h5>
            <p>you can cancel later, so lock in this great price today!</p>
          </div>
        )}
      </div>
      <div>
        <div className={styles.rateHeading}>
          <h3>{el["rate_text"]}</h3>
          <div className={styles.rate}>{el.rate}</div>
        </div>
        <h1 className={styles.price}>${el.price}</h1>
        <p>Includes taxes and fees</p>
        <button className={styles.btn} type="button" onClick={MoveToDetail}>
          See availability
        </button>
      </div>
    </div>
  ));
  return <div className={styles.container}>{results}</div>;
}

export default SearchList;
