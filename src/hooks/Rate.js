import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rate = ({ rate }) => {
    const numRating = +rate;
    const ratingFloor = Math.floor(numRating);
    const ratingRound = Math.round(numRating);

    const halfStart = ratingRound - ratingFloor;
    const star = 5 - ratingRound;

    return (
        <div
            style={{ textAlign: "center", color: "#faaf00", mb: 5 }}
            className="flex"
        >
            {[...Array(ratingFloor)].map((_, i) => (
                <BsStarFill key={i} />
            ))}

            {[...Array(halfStart)].map((_, i) => (
                <BsStarHalf key={i} />
            ))}

            {[...Array(star)].map((_, i) => (
                <BsStar key={i} />
            ))}
        </div>
    );
};

export default Rate;