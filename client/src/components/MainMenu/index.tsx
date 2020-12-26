import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Icon,
  Typography,
  Menu,
  MenuItem,
  Modal,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

interface Props {
  menuIcon: string;
}
const tagsValues = ["destaque", "aluno", "empreendedor"];
const useStyles = makeStyles((theme) => ({
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "90%",
    height: "90%",
    maxHeight: 800,
    maxWidth: 600,
    backgroundColor: "#fff",
    padding: "1em",
    boxSizing: "border-box",
  },
}));
const ModalForm = () => {
  const classes = useStyles();
  const [name, setName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [tags, setTags] = useState<Array<string>>([""]);
  const [tagsNumber, setTagsNumber] = useState<number>(1);

  const onChangeNameHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <form className={classes.modalForm}>
      <Typography variant="h5" align="center">
        Novo Usuario
      </Typography>
      <TextField
        id="name"
        type="text"
        variant="outlined"
        required
        label="Nome"
        helperText="Insira o nome completo"
        value={name}
        onChange={onChangeNameHandle}
      />
      <TextField
        id="email"
        type="email"
        variant="outlined"
        required
        label="Email"
        helperText="Exemplo: example@email.com"
        value={email}
        onChange={onChangeEmailHandle}
      />
      {tagsValues.map((tag) => (
        <FormControlLabel
          key={tag}
          label={tag}
          control={<Checkbox checked={false} name={tag} />}
        />
      ))}
    </form>
  );
};

const MainMenu = ({ menuIcon }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modal, setModal] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleModalClick = () => {
    handleCloseMenu();
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <>
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
          <MenuItem onClick={handleCloseMenu}>
            <Typography
              color="textSecondary"
              variant="button"
              component="span"
              onClick={handleModalClick}
            >
              Novo Cadastro
            </Typography>
          </MenuItem>
        </Menu>
      </div>
      <Modal
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="Register Modal"
        aria-describedby="simple-modal-description"
      >
        <ModalForm />
      </Modal>
    </>
  );
};

export default MainMenu;
