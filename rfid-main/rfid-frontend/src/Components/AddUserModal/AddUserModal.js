import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalWrapper from "../Modal/ModalWrapper";
import ModalBody from "../Modal/ModalBody";
import ModalIconsList from "../Modal/ModalIconsList";
import ModalIcon from "../Modal/ModalIcon";
import ModalTitle from "../Modal/ModalTitle";
import Input from "../Input";
import AddButton from "../AddButton";
import { useModal } from "../../Context/modal-context";

import { AiOutlineClose } from "react-icons/ai";

export default function AddUserModal({ init }) {
  const context = useModal();
  return (
    <ModalBackdrop>
      <ModalWrapper>
        <ModalTitle>Add User</ModalTitle>
        <ModalIconsList>
          <ModalIcon onClick={() => context.dispatch({ type: "close" })}>
            <AiOutlineClose size={20} />
          </ModalIcon>
        </ModalIconsList>
        <ModalBody>
          <Input
            type="text"
            label="Enter card id"
            onChange={init.onCardIdChange}
          />
          <Input
            type="text"
            label="Enter first name"
            onChange={init.onFirstNameChange}
          />
          <Input
            type="text"
            label="Enter last name"
            onChange={init.onLastNameChange}
          />
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <AddButton name="Add User" onClick={init.createUser} />
          </div>
        </ModalBody>
      </ModalWrapper>
    </ModalBackdrop>
  );
}
