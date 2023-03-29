const Text = (props) => {
    const { FinalText, hotel, room, ogprice, price } = props;
  
    return (
      <div ref={FinalText} className="text">
        <p>
          {hotel}
          <br />
          {room}
          <br />
          Meal plan - bed and breakfast
          <br />
          <br />
          כולל מיסים עירוניים
          <br />
          <br />
          סה״כ העלות {ogprice} ש״ח לפני הנחה
          <br />
          לאחר הנחת רמדאן העלות היא {price} ש״ח
        </p>
      </div>
    );
  };
  
  export default Text;
  