import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";
import searchArray from "../../data/search";
import styles from "./Search.module.css";
// hien thi thong tin danh sach khach san cho phan search page va Form search aside
const Search = () => {
  return (
    <div className={styles["search-container"]}>
      <SearchPopup />
      <SearchList searchArr={searchArray} />
    </div>
  );
};

export default Search;
