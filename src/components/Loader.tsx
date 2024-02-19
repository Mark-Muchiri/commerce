import styles from './Loader.module.css';

function Loader() {
  return (
    <>
      <div className="relative flex h-screen -top-48 items-center justify-center">
        <div className="h-full flex justify-center items-center">
          <div className={styles.loader}></div>
        </div>
      </div>
    </>
  );
}

export default Loader;