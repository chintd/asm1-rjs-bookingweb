import styles from "./Footer.module.css";
// footer cua page Home
function Footer(props) {
  console.log(props.footerArr);
  const results = props.footerArr.map((el) => {
    return (
      <ul key={Math.random().toString()}>
        {el["col_values"].map((element) => (
          <li key={Math.random().toString()}>{element}</li>
        ))}
      </ul>
    );
  });
  return <div className={styles.container}>{results}</div>;
}

export default Footer;
