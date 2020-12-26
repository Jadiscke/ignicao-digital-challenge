import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { createUser } from "../../services/users";
import { useContainerProps } from "@material-ui/data-grid";
import CustomerContext from "../../context/Customer";
import ModalContext from "../../context/Modal";
const tagsValues = [
  { tag_id: "E01", value: "destaque", checked: true },
  { tag_id: "E02", value: "aluno", checked: false },
  { tag_id: "E03", value: "empreendedor", checked: false },
];
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
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checkedTags, setCheckedTags] = useState(tagsValues);
  const { load } = useContext(CustomerContext);
  const { closeModal } = useContext(ModalContext);

  const onChangeNameHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangeCheckHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const indexToChange = checkedTags.findIndex((tag) => {
      return tag.tag_id == event.target.name;
    });
    const newCheckedTag = {
      tag_id: event.target.name,
      value: event.target.value,
      checked: event.target.checked,
    };
    let newCheckedTags = [...checkedTags];
    newCheckedTags[indexToChange] = newCheckedTag;
    setCheckedTags(newCheckedTags);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const tags = checkedTags
      .filter((tag) => tag.checked)
      .map((tag) => tag.value);
    try {
      await createUser({ name, email, tags });
      await load();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={classes.modalForm} onSubmit={handleSubmit}>
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
      {checkedTags.map((tag) => (
        <FormControlLabel
          key={tag.tag_id}
          label={tag.value}
          control={
            <Checkbox
              key={tag.tag_id}
              value={tag.value}
              checked={tag.checked}
              name={tag.tag_id}
              color="primary"
              onChange={onChangeCheckHandle}
            />
          }
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Confirmar
      </Button>
    </form>
  );
};

export default ModalForm;
