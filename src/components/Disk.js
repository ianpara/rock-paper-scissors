const Disk = ({ choice, choiceImages, didPlayerWin }) => {
    return (
        <div className="relative z-10">
            <div className={`${choice} disk-w rounded-full p-4 relative`} data-id={`${choice}`}>
                <div
                    className="flex p-6 sm:p-8 md:p-9 lg:p-12 bg-white rounded-full inner-shadow"
                    data-id={`${choice}`}
                >
                    <img
                        className="mx-auto w-8 h-8 xs:w-12 xs:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
                        src={choiceImages[choice]}
                        alt={choice}
                        data-id={`${choice}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Disk;