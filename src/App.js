import './App.css';
import { useState, useRef, useEffect } from "react";
import Text from "./text";
import Input from "./input";
export default function App() {
  const [hotel, setHotel] = useState("Hotel");
  const [room, setRoom] = useState("Room");

  const [travcoPrice, setTravcoPrice] = useState("0");

  const [ogprice, setogPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [commision, setCommision] = useState(0);
  const [discount, setDiscount] = useState(0);

  const FinalText = useRef(null);

  useEffect(() => {
    setPrice(Math.round(parseInt(travcoPrice, 10) * 1.08));
    setDiscount(0);
  }, [travcoPrice]);

  useEffect(() => {
    setPrice(
      Math.round(parseInt(travcoPrice, 10) * 1.08) + parseInt(commision, 10)
    );
  }, [commision]);

  useEffect(() => {
    setogPrice(parseInt(price, 10) + parseInt(discount, 10));
  }, [discount]);

  return (
    <div className="App">
      <h1>Travco</h1>
      <div className="row">
        <label>Hotel</label>
        <Input type="text" change={setHotel} value={hotel} />
      </div>

      <div className="row">
        <label>Room</label>
        <Input type="text" change={setRoom} value={room} />
      </div>

      <div className="row">
        <label>Travcoprice</label>
        <Input
          type="number"
          change={setTravcoPrice}
          value={travcoPrice.replace(/\,/g, "")}
        />
        <p>{Math.round(travcoPrice * 1.08)}</p>
      </div>

      <div className="row">
        {/* <label>OGprice</label> */}
        {/* <Input type="number" change={setogPrice} value={ogprice} /> */}
      </div>

      <div className="row">
        <label>Price</label>
        <Input type="number" change={setPrice} value={price} />

        <label>Commision</label>
        <Input type="number" change={setCommision} value={commision} />
      </div>
      <div className='row'>
      <label>Discount</label>
      <Input type="number" change={setDiscount} value={discount} />
      </div>


      <Text
        FinalText={FinalText}
        hotel={hotel}
        room={room}
        ogprice={ogprice}
        price={price}
      />
    </div>
  );
}
