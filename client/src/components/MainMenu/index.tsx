import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { Icon, Typography, Menu, MenuItem, Modal } from "@material-ui/core";

import ModalForm from "../ModalForm";
import ModalContext from "../../context/Modal";

interface Props {
  menuIcon: string;
}
const MainMenu = ({ menuIcon }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleModalClick = () => {
    handleCloseMenu();
    openModal();
  };
  const handleModalClose = () => {
    closeModal();
  };

  return (
    <div>
      <Button
        aria-controls="main-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon>{menuIcon}</Icon>
      </Button>
      <Menu
        id="main-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleModalClick}>
          <Typography color="textSecondary" variant="button" component="span">
            Novo Cadastro
          </Typography>
        </MenuItem>
      </Menu>

      <Modal
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="Register Modal"
        aria-describedby="simple-modal-description"
      >
        <ModalForm title="Novo Usuário" formType="create-form" />
      </Modal>
    </div>
  );
};

export default MainMenu;
