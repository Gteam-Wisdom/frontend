import React, { useState } from "react";
import StarFilled from "../../../assets/img/starFilled.svg";
import StarOutlined from "../../../assets/img/starOutlined.svg";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Typography from "../../../components/Typography";

const fixNumber = (n: number) => Number.parseFloat(String(n)).toFixed(2);

const UserRating = ({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  onRate,
}: any) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    onRate(true);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const renderStar = (starNumber: number) => {
    const filled = starNumber <= rating;

    return (
      <OverlayTrigger
        key={starNumber}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${starNumber}`}>{`Rate ${starNumber}`}</Tooltip>
        }
      >
        <span className="mx-1" onClick={() => handleStarClick(starNumber)}>
          {filled ? (
            <img src={StarFilled} alt="" style={{ height: "15px" }} />
          ) : (
            <img src={StarOutlined} alt="" style={{ height: "13px" }} />
          )}
        </span>
      </OverlayTrigger>
    );
  };

  const stars = Array.from({ length: maxStars }, (_, index) =>
    renderStar(index + 1)
  );

  return (
    <Typography variant="p2" secondary>
      {stars} {fixNumber(rating)} ({fixNumber(maxStars)})
    </Typography>
  );
};

export default UserRating;
