import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Basket from "../../Components/Modals/Basket/Basket";
import bag from "../../Assets/img-mainpage/bag.svg";
import {Bag} from "./catalog.styled"
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

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Bag onClick={() => setModalActive(true)}>
        Моя корзина
        <img src={bag} alt="img" className="bag" />
      </Bag>
      <Basket active={modalActive} setActive={setModalActive} />

      <Wrapper>
        <Block>
          <BlockName>
            <H3>Гостиные</H3>
            <Line></Line>
          </BlockName>
          <ItemWrapper>
            {livingRooms.map((room, index) => (
              <Item key={room.id}>
                <img src={room.image} alt="img" />
                <SubItem>
                  <H4>{room.name}</H4>
                  <ItemButton
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    {hoveredIndex === index ? "Buy $" : `${room.price}`}
                  </ItemButton>
                </SubItem>
              </Item>
            ))}
          </ItemWrapper>
        </Block>

        <Block>
          <BlockName>
            <H3>Детские</H3>
            <Line></Line>
          </BlockName>
          <ItemWrapper>
            {childrenRooms.map((room, index) => (
              <Item key={room.id}>
                <img src={room.image} alt="img" />
                <SubItem>
                  <H4>{room.name}</H4>
                  <ItemButton
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    {hoveredIndex === index ? "Buy $" : `${room.price}`}
                  </ItemButton>
                </SubItem>
              </Item>
            ))}
          </ItemWrapper>
        </Block>

        <Block>
          <BlockName>
            <H3>Коридоры - прихожие</H3>
            <Line></Line>
          </BlockName>
          <ItemWrapper>
            {corridors.map((room, index) => (
              <Item key={room.id}>
                <img src={room.image} alt="img" />
                <SubItem>
                  <H4>{room.name}</H4>
                  <ItemButton
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    {hoveredIndex === index ? "Buy $" : `${room.price}`}
                  </ItemButton>
                </SubItem>
              </Item>
            ))}
          </ItemWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </>
  );
};
export default Catalog;
