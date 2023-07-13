import styles from "./NavBarItem.module.css";

function NavBarItem(props) {
  // tra ve button hien thi chon loc tren navbar
  return (
    <div className={styles.navOption}>
      {props.items.map((el) => (
        <button key={Math.random().toString()}>
          <i className={`fa ${el.icon}`}></i> {el.type}
        </button>
      ))}
    </div>
  );
}

export default NavBarItem;
