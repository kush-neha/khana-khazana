export const RestroCards = ({name, image, starRating, cuisine, time}) => {
    return (
      <div className="header">
        <div className="body">
            <div className="restro-cards">
                <img className = "foodImage" alt="restroCard" src={image} />
                <h3>{name}</h3>
                <h4>{cuisine}</h4>
                <h4>{starRating} star</h4>
                <h4>{time}</h4>
              
            </div>
        </div>
      </div>
    );
  };

  