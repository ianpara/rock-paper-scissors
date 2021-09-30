import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import Disk from "./Disk";

const Game = ({ score, myChoice, setScore }) => {

    const [comp, setComp] = useState("");
    const [didPlayerWin, setdidPlayerWin] = useState("");
    const [counter, setCounter] = useState(3);

    var choiceImages = {
        rock: rock,
        paper: paper,
        scissors: scissors
    };

    // Randomize computer pick
    const newCompPick = () => {
        const choices = ["rock", "paper", "scissors"];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        setComp(compChoice);
    }

    // Countdown
    useEffect(() => {

        myChoice && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        // Sets new computer pick on 0
        if (counter === 0) {
            newCompPick();
        }

    }, [counter]);

    // Compare choices for result
    const Result = () => {
        if (myChoice === "rock" && comp === "scissors") {
            setdidPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "scissors" && comp === "rock") {
            setdidPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "rock" && comp === "paper") {
            setdidPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "paper" && comp === "rock") {
            setdidPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "paper" && comp === "scissors") {
            setdidPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "scissors" && comp === "paper") {
            setdidPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === comp) {
            setdidPlayerWin("draw");
        } else {
            setdidPlayerWin("");
        }
    }

    // Set result when comp is updated
    useEffect(() => {
        Result();
    }, [comp]);

    // Save score to local storage
    useEffect(() => {
        localStorage.setItem("score", score);
    }, [score]);


    // Redirect back to main game on hard refresh
    if (myChoice === "") {
        return <Redirect to="/" />;
    }

    return (
        <div className="flex flex-wrap md:flex-nowrap justify-evenly">

            <div className="flex flex-col gap-5">
                <div className="md:order-2 relative w-50">
                    <Disk choice={myChoice} choiceImages={choiceImages} didPlayerWin={didPlayerWin} />
                    {didPlayerWin === "win" &&
                        <div>
                            <div className="circle disk-w z-0" style={{ animationDelay: '-3s' }}></div>
                            <div className="circle disk-w z-0" style={{ animationDelay: '-2s' }}></div>
                            <div className="circle disk-w z-0" style={{ animationDelay: '-1s' }}></div>
                            <div className="circle disk-w z-0" style={{ animationDelay: '0s' }}></div>
                        </div>
                    }
                </div>
                <h2 className="md:order-1 text-white tracking-wider text-center">YOU PICKED</h2>
            </div>

            <div className="flex flex-col gap-5 items-center md:order-3">
                {counter > 0 &&
                    <p
                        className="md:order-2 flex disk-w rounded-full p-4 bg-gray-800 bg-opacity-75 text-white justify-center items-center text-4xl xs:text-5xl">
                        {counter}
                    </p>}
                {counter === 0 &&
                    <div className="md:order-2 relative w-50">
                        <Disk choice={comp} choiceImages={choiceImages} didPlayerWin={didPlayerWin} />
                        {didPlayerWin === "lose" &&
                            <div>
                                <div className="circle disk-w z-0" style={{ animationDelay: '-3s' }}></div>
                                <div className="circle disk-w z-0" style={{ animationDelay: '-2s' }}></div>
                                <div className="circle disk-w z-0" style={{ animationDelay: '-1s' }}></div>
                                <div className="circle disk-w z-0" style={{ animationDelay: '0s' }}></div>
                            </div>
                        }
                    </div>}
                <h2 className="md:order-1 text-white tracking-wider text-center">THE HOUSE PICKED</h2>
            </div>

            {didPlayerWin && <div className="text-center mt-0 xs:mt-24 md:m-auto md:order-2 w-56">
                <div className="mb-1 xs:mb-8">
                    {didPlayerWin === "win" && <p className="text-white text-4xl xs:text-5xl">YOU WIN</p>}
                    {didPlayerWin === "lose" && <p className="text-white text-4xl xs:text-5xl">YOU LOSE</p>}
                    {didPlayerWin === "draw" && <p className="text-white text-4xl xs:text-5xl">DRAW</p>}
                </div>
                {didPlayerWin && <Link to="/" className="block w-4/5 p-4 mx-auto bg-white rounded-lg tracking-widest" onClick={() => setComp()}>
                    PLAY AGAIN
                </Link>}
            </div>}

        </div>
    );
}

export default Game;