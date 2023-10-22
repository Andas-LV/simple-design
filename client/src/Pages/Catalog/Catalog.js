import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Basket from "../../Components/Modals/Basket/Basket";
import bag from "../../Assets/img-mainpage/bag.svg";
import { Bag, Check } from "./catalog.styled";
import {
  Wrapper,
  Block,
  BlockName,
  H3,
  Line,
  ItemWrapper,
  Item,
  SubItem,
  H4,
  ItemButton,
} from "../Home/Design/Design.styled";
import {
  livingRooms,
  childrenRooms,
  corridors,
} from "../../Components/rooms.data";

const Catalog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [checkActive, setCheckActive] = useState(false);

  const handleMouseEnter = (i) => {
    setHoveredIndex(i);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const checkToggle = () => {
    if (checkActive) {
      setCheckActive(false);
    } else {
      setCheckActive(true);
    }
  };

  function renderBlocks(title, data) {
    return (
      <Block key={title}>
        <BlockName>
          <H3>{title}</H3>
          <Line></Line>
        </BlockName>
        <ItemWrapper>
          {data.map((room) => (
            <Item key={room.id}>
              <img src={room.image} alt="img" />
              <SubItem>
                <H4>{room.name}</H4>
                <ItemButton
                  onMouseEnter={() => handleMouseEnter(room.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={checkToggle}>
                  {hoveredIndex === room.id ? "Buy $" : `${room.price}`}
                </ItemButton>
              </SubItem>
            </Item>
          ))}
        </ItemWrapper>
      </Block>
    );
  }

  return (
    <>
      <Bag onClick={() => setModalActive(true)}>
        <Check active={checkActive} setActive={setCheckActive}>
          0
        </Check>
        <img src={bag} alt="img" className="bag" />
      </Bag>
      <Basket active={modalActive} setActive={setModalActive} />

      <Wrapper>
        {renderBlocks("Гостиные", livingRooms)}
        {renderBlocks("Детские", childrenRooms)}
        {renderBlocks("Коридоры - прихожие", corridors)}
      </Wrapper>
      <Footer />
    </>
  );
};
export default Catalog;
