import styled from "@emotion/styled";

import Image from "./Image";
import Quantity from "./Quantity";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 10px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Laptop = ({ onAdd, onRemove, quantity }) => {
  return (
    <Shop>
      <ShopName>Laptops</ShopName>
      <Image src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress" width="250px"></Image>
      <Controls>
        <Quantity
          onAdd={onAdd}
          onRemove={onRemove}
          quantity={quantity}
        />
      </Controls>
    </Shop>
  );
};

export default Laptop;
