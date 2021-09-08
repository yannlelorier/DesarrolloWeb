import { Col, Image } from "react-bootstrap";
export default function MyButton(params) {
  //   return <button value="miValor" id="miId" onClick={(a) => console.log(a.target.value)}>Hola</button>;
  return (
    
      <Image
        value="miValor"
        id="BotonHijo"
        onClick={(a) => params._handleSelectFromButton(a)}
        src="https://picsum.photos/40/40?random=1"
        roundedCircle
      />
    
  );
}
