import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
