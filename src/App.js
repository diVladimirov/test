import Data from "./components/Data";
import Header from "./components/Header";
import Headline from "./components/Headline";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Headline />
      <div
        style={{
          width: 1440,
          paddingLeft: 40,
          paddingRight: 40,
          margin: "auto",
        }}
      >
        <Data />
      </div>
    </div>
  );
}

export default App;
