import AddUserModal from "./AddUserModal";
import { URL_CREATE_USER } from "../../Constants/axios";
import { useModal } from "../../Context/modal-context";

import { useState } from "react";
import axios from "axios";

export default function AddUserModalContainer(props) {
  const context = useModal();
  const [cardId, setCardId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onCardIdChange = (e) => setCardId(e.target.value);
  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);

  const createUser = async () => {
    await axios.post(URL_CREATE_USER, {
      cardId: cardId,
      firstName: firstName,
      lastName: lastName,
    });
    
    window.location.reload()
    context.dispatch({type: "close"})
  };

  const init = {
    onCardIdChange,
    onFirstNameChange,
    onLastNameChange,
    createUser,
  };

  return <AddUserModal init={init} />;
}
