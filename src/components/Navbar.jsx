import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenNib,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({isAuth}) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          ログアウト
        </Link>
      )}

      <Link to="/createpost">
        <FontAwesomeIcon icon={faPenNib} />
        記事投稿
      </Link>
    </nav>
  );
};

export default Navbar;
