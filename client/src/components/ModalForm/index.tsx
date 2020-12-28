import React, {
  ChangeEvent,
  FormEvent,
  Ref,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  IconButton,
  Icon,
  Modal,
} from "@material-ui/core";
import { createUser, updateUser } from "../../services/users";
import CustomerContext from "../../context/Customer";
import ModalContext from "../../context/Modal";
import { red } from "@material-ui/core/colors";

import { deleteUser } from "../../services/users";

const tagsValues = [
  { tag_id: "E01", value: "destaque", checked: true },
  { tag_id: "E02", value: "aluno", checked: false },
  { tag_id: "E03", value: "empreendedor", checked: false },
  { tag_id: "E04", value: "gestão", checked: false },
  { tag_id: "E05", value: "marketing", checked: false },
  { tag_id: "E06", value: "arquitetura", checked: false },
  { tag_id: "E07", value: "startup", checked: false },
  { tag_id: "E08", value: "evento janeiro", checked: false },
];
const useStyles = makeStyles((theme) => ({
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6em",
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
  modalButton: {
    position: "absolute",
    bottom: "1em",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  deleteButton: {
    position: "absolute",
    top: "1em",
    right: "1em",
    height: "1em",
    width: "1em",
    backgroundColor: red[700],
    color: "#fff",
    fontSize: "0.5em",
  },
  deleteIcon: {
    fontSize: "2em",
  },
  deleteModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "90%",
    height: "90%",
    maxWidth: 400,
    maxHeight: 300,
    backgroundColor: "#fff",
    boxShadow: "0 0.3em 1em 0",
    boxSizing: "border-box",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  choiceButtonWrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const formActions = new Map([
  ["create-form", createUser],
  ["update-form", updateUser],
]);

interface ModalFormProps {
  title: string;
  name?: string;
  email?: string;
  tags?: Array<string>;
  id?: string;
  formType: string;
}
const ModalForm: React.ForwardRefExoticComponent<ModalFormProps> = React.forwardRef(
  ({ formType = "create-form", ...props }, ref) => {
    const classes = useStyles();
    const [name, setName] = useState<string>(props.name ? props.name : "");
    const [email, setEmail] = useState<string>(props.email ? props.email : "");
    const [checkedTags, setCheckedTags] = useState(tagsValues);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const { load } = useContext(CustomerContext);
    const { closeModal } = useContext(ModalContext);

    const formAction = formActions.get(formType);
    useEffect(() => {
      if (props.tags) {
        const newCheckedTags = checkedTags.map((checkedTag) => {
          const foundTag = props.tags?.find((tag) => {
            return tag === checkedTag.value;
          });
          if (foundTag) {
            return {
              ...checkedTag,
              checked: true,
            };
          }
          return {
            ...checkedTag,
            checked: false,
          };
        });
        setCheckedTags(newCheckedTags);
      }
    }, []);

    const onChangeNameHandle = (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    const onChangeEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const onChangeCheckHandle = (event: ChangeEvent<HTMLInputElement>) => {
      const indexToChange = checkedTags.findIndex((tag) => {
        return tag.tag_id === event.target.name;
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
      const tags = checkedTags
        .filter((tag) => tag.checked)
        .map((tag) => tag.value);
      try {
        let dataToSend = { name, email, tags };
        if (formAction) {
          await formAction({ ...dataToSend, id: props?.id });
          await load();
        }
        closeModal();
      } catch (error) {}
    };

    const handleCloseDeleteModal = () => {
      setDeleteModal(false);
    };

    const handleClickDeleteModal = () => {
      setDeleteModal(true);
    };

    const handleDeleteUser = async () => {
      setDeleteModal(false);
      closeModal();
      if (props.id) {
        await deleteUser(props.id);
      }
      await load();
    };
    return (
      <form className={classes.modalForm} onSubmit={handleSubmit}>
        <Typography variant="h5" align="center">
          {props.title}
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
        <div>
          <Grid container spacing={1} direction="row">
            {checkedTags.map((tag) => (
              <Grid item xs={6}>
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
              </Grid>
            ))}
          </Grid>
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.modalButton}
        >
          Confirmar
        </Button>
        {formType === "update-form" && (
          <IconButton
            type="button"
            className={classes.deleteButton}
            onClick={handleClickDeleteModal}
          >
            <Icon className={classes.deleteIcon}>delete</Icon>
          </IconButton>
        )}
        <Modal open={deleteModal} onClose={handleCloseDeleteModal}>
          <div className={classes.deleteModal}>
            <Typography
              component="p"
              align="center"
            >{`Certeza que deseja deletar o cliente:`}</Typography>
            <Typography
              align="center"
              variant="button"
              component="p"
            >{`${props.name}`}</Typography>
            <div className={classes.choiceButtonWrapper}>
              <Button style={{ color: red[700] }} onClick={handleDeleteUser}>
                Sim
              </Button>
              <Button color="primary" onClick={handleCloseDeleteModal}>
                Não
              </Button>
            </div>
          </div>
        </Modal>
      </form>
    );
  }
);

export default ModalForm;
