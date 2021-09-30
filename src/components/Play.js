import { Link } from "react-router-dom";
import Disk from "./Disk";
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';

const Play = ({ setMyChoice }) => {

    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);
    };

    var choiceImages = {
        rock: rock,
        paper: paper,
        scissors: scissors
    };

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-6 bg-triangle bg-no-repeat bg-center bg-12 md:bg-15 lg:bg-18">
            <Link to="/game"
                className="place-self-end"
                data-id="rock"
                onClick={setChoice}>
                <Disk choice="rock" choiceImages={choiceImages} />
            </Link>
            <Link to="/game"
                className="place-self-start"
                data-id="paper"
                onClick={setChoice}
            >
                <Disk choice="paper" choiceImages={choiceImages} />
            </Link>
            <Link to="/game"
                className="col-span-2 place-self-center"
                data-id="scissors"
                onClick={setChoice}
            >
                <Disk choice="scissors" choiceImages={choiceImages} />
            </Link>
        </div>
    );
}

export default Play;