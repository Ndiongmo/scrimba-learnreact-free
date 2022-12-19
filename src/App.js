import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function App() {
  return <Page />;
}

export default App;
