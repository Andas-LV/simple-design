import React from "react";
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
import { livingRooms, childrenRooms, corridors } from "../../../Components/rooms.data";

export default function Design() {
  return (
    <Wrapper>
      <H1>Дизайн комнат</H1>
      <Text>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </Text>

      <Block>
        <BlockName>
          <H3>Гостиные</H3>
          <Line></Line>
        </BlockName>
        <ItemWrapper>
          {livingRooms.map((room) => (
            <Item key={room.id}>
              <img src={room.image} alt="img" />
              <SubItem>
                <H4>{room.name}</H4>
                <Link to="/Catalog">
                  <ItemButton>
                    <img src={bag} alt="img" />
                    Выбрать
                  </ItemButton>
                </Link>
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
        {childrenRooms.map((room) => (
            <Item key={room.id}>
              <img src={room.image} alt="img" />
              <SubItem>
                <H4>{room.name}</H4>
                <Link to="/Catalog">
                  <ItemButton>
                    <img src={bag} alt="img" />
                    Выбрать
                  </ItemButton>
                </Link>
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
          {corridors.map((room) => (
            <Item key={room.id}>
              <img src={room.image} alt="img" />
              <SubItem>
                <H4>{room.name}</H4>
                <Link to="/Catalog">
                  <ItemButton>
                    <img src={bag} alt="img" />
                    Выбрать
                  </ItemButton>
                </Link>
              </SubItem>
            </Item>
          ))}
        </ItemWrapper>
      </Block>

      <Link to="/catalog">
        <Button>К каталогу комнат</Button>
      </Link>
    </Wrapper>
  );
}
