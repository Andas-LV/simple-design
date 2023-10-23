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
  const [modalActive, setModalActive] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (room) => {
    if (selectedItems.some((item) => item.id === room.id)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== room.id));
      setCount(count - 1);
    } else {
      setSelectedItems([...selectedItems, room]);
      setCount(count + 1);
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
                <ItemButton onClick={() => handleItemClick(room)}>
                  {selectedItems.some((item) => item.id === room.id) ? (
                    <span>&#10003;</span>
                  ) : (
                    `${room.price}`
                  )}
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
        <Check active={count > 0}>{count}</Check>
        <img src={bag} alt="img" className="bag" />
      </Bag>
      <Basket
        active={modalActive}
        setActive={setModalActive}
        selectedItems={selectedItems}
      />

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
