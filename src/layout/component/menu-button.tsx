import { Box } from "@mui/material";
import { FC } from "react";
import { HEADER_ITEMS } from "./constant";
import { Link } from "react-router-dom";

type Props = {
  openMenu: boolean;
  className: string;
};

const MenuButton: FC<Props> = ({ openMenu, className }) => {
  return (
    <Box className={`${className}`}>
      {openMenu && (
        <Box>
          {HEADER_ITEMS.map((item) => (
            <Link to={item.headerItemLink} key={item.headerItemLink}>
              <Box>{item.headerItemName}</Box>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuButton;
