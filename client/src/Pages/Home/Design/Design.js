import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  H1,
  Wrapper,
  Text,
  Block,
  BlockName,
  H3,
  Line,
  ItemWrapper,
  Item,
  SubItem,
  H4,
  Button,
  ItemButton,
} from "../Design/Design.styled";
import bag from "../../../Assets/img-mainpage/bag.svg";
import {
  livingRooms,
  childrenRooms,
  corridors,
} from "../../../Components/rooms.data";

export default function Design() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (i) => {
    setHoveredIndex(i);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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
                <Link to="/Catalog">
                  <ItemButton>Выбрать</ItemButton>
                </Link>
              </SubItem>
            </Item>
          ))}
        </ItemWrapper>
      </Block>
    );
  }

  return (
    <Wrapper>
      <H1>Дизайн комнат</H1>
      <Text>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </Text>

      {renderBlocks("Гостиные", livingRooms)}
      {renderBlocks("Детские", childrenRooms)}
      {renderBlocks("Коридоры - прихожие", corridors)}

      <Link to="/catalog">
        <Button>К каталогу комнат</Button>
      </Link>
    </Wrapper>
  );
}
