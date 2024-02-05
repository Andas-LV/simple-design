import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Basket from "../../Components/Modals/Basket/Basket";
import bag from "../../Assets/img-mainpage/bag.svg";
import styles from './catalog.module.css';

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
      <div className={styles.designBlock} key={title}>
        <div className={styles.designBlockName}>
          <div className={styles.designH3}>{title}</div>
          <div className={styles.designLine}></div>
        </div>
        <div className={styles.designItemWrapper}>
          {data.map((room) => (
            <div className={styles.designItem} key={room.id}>
              <img src={room.image} alt="img" />
              <div className={styles.designSubItem}>
                <h4 className={styles.designH4}>{room.name}</h4>
                <div className={styles.designItemButton} onClick={() => handleItemClick(room)}>
                  {selectedItems.some((item) => item.id === room.id) ? (
                    <span>&#10003;</span>
                  ) : (
                    `${room.price}`
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.bag} onClick={() => setModalActive(true)}>
        <div className={styles.check} active={count > 0}>{count}</div>
        <img src={bag} alt="img" className="bag" />
      </div>
      <Basket
        active={modalActive}
        setActive={setModalActive}
        selectedItems={selectedItems}
      />

      <div className={styles.wrapper}>
        {renderBlocks("Гостиные", livingRooms)}
        {renderBlocks("Детские", childrenRooms)}
        {renderBlocks("Коридоры - прихожие", corridors)}
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
