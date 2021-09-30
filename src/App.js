import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Play from "./components/Play";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router";

function App() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0);

  return (
    <main className=" h-screen">
      <div className="flex flex-col h-full">
        <div className="p-10">
          <Header score={score} />
          <main className="container mx-auto mt-12 xs:mt-24 md:mt-36">
            <Switch>
              <Route exact path="/">
                <Play setMyChoice={setMyChoice} />
              </Route>
              <Route path="/game">
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
