// Design.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Design.module.css";
import {
  livingRooms,
  childrenRooms,
  corridors,
} from "../../../Components/rooms.data";

export function renderBlocks(title, data) {
  return (
    <div key={title} className={styles.designBlock}>
      <div className={styles.designBlockName}>
        <div className={styles.designH3}>{title}</div>
        <div className={styles.designLine}></div>
      </div>
      <div className={styles.designItemWrapper}>
        {data.map((room) => (
          <div key={room.id} className={styles.designItem}>
            <img src={room.image} alt="img" className={styles.img}/>
            <div className={styles.designSubItem}>
              <div className={styles.designH4}>{room.name}</div>
              <Link to="/Catalog">
                <div className={styles.designItemButton}>Выбрать</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Design() {

  return (
    <div className={styles.designWrapper}>
      <div className={styles.designH1}>Дизайн комнат</div>
      <div className={styles.designText}>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </div>

      {renderBlocks("Гостиные", livingRooms)}
      {renderBlocks("Детские", childrenRooms)}
      {renderBlocks("Коридоры - прихожие", corridors)}

      <Link to="/catalog">
        <div className={styles.designButton}>К каталогу комнат</div>
      </Link>
    </div>
  );
}
