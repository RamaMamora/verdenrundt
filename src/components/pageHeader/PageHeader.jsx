import styles from "./PageHeader.module.css";

const PageHeader = ({
  headerImg,
  title,
  knap,
  guides,
  text,
  showButtons = true,
}) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.headerContent}>
        <h2>{title}</h2>

        {/* Viser kun knapperne, hvis showButtons er true */}
        {showButtons && (
          <div className={styles.headerKnap}>
            <a href="/About">{knap}</a>
            <a href="">{guides}</a>
          </div>
        )}

        <p>{text}</p>
      </div>
    </header>
  );
};

export default PageHeader;
