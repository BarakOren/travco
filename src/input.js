const Input = (props) => {
    const { change, value, type } = props;
    return (
      <input type={type} onChange={(e) => change(e.target.value)} value={value} />
    );
  };
  
  export default Input;
  