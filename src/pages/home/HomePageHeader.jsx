import { useRef } from "react";
import styles from "./HomePageHeader.module.css";
function HomePageHeader(props) {
  // func chuyen page sang search page
  const placeInput = useRef();
  const dateInput = useRef();
  const optionInput = useRef();
  function changePagetoSearch() {
    // chua dl input dau vao
    if (
      placeInput.current.value !== "" ||
      dateInput.current.value !== "" ||
      optionInput.current.value !== ""
    ) {
      const inputData = {
        place: placeInput.current.value,
        date: dateInput.current.value,
        option: optionInput.current.value,
      };
      console.log(inputData);
      window.location.replace("/search");
    } else {
      alert("Please type in search form!!");
    }
  }

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <h1>A lifetime of discount? It's Genius.</h1>
        <p>
          Get rewarded for your travels- unlock instant saving of 10% or more
          with free account
        </p>
        <button className={styles.btn} type="button">
          Sign in/ Register
        </button>
      </div>
      <div className={styles["search-container"]}>
        <input
          ref={placeInput}
          type="text"
          placeholder="Where are you going?"
        ></input>
        <input
          ref={dateInput}
          type="text"
          placeholder="06/03/2023 to 06/4/2023"
        ></input>
        <input
          ref={optionInput}
          type="number"
          placeholder="1 adult - 0 children - 1 room"
        ></input>
        <button
          className={styles.btn}
          onClick={changePagetoSearch}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default HomePageHeader;
