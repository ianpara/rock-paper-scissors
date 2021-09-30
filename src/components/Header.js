const Header = ({ score }) => {
    return (
        <header className="mx-auto p-5 flex flex-row items-center justify-between border-2 border-white-alt rounded-md">
            <div className="block">
                <h1 className="text-white text-xl md:text-3xl font-bold tracking-wide">
                    <span className="block leading-none">ROCK</span>
                    <span className="block leading-none">PAPER</span>
                    <span className="block leading-none">SCISSORS</span>
                </h1>
            </div>
            <div className="py-2 px-4 md:px-6 flex flex-col items-center rounded-md bg-white">
                <div className="text-xs tracking-wide text-dark-alt">SCORE</div>
                <div className="text-4xl md:text-5xl font-bold text-dark">{score}</div>
            </div>
        </header>
    );
}

export default Header;