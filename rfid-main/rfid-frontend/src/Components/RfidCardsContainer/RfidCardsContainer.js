import axios from "axios";
import { useState, useEffect } from "react";

import { URL_GET_USERS, URL_DELETE_USER } from "../../Constants/axios";
import RfidCard from "../RfidCard";
import {useModal} from "../../Context/modal-context";

export default function RfidCardsContainer(props) {
  const [rfidCards, setRfidCards] = useState([]);
  const [reload, setReload] = useState(false);
  const context = useModal();

  const getRfidCards = async () => {
    await axios.get(URL_GET_USERS).then((response) => {
      console.log(response.data);
      setRfidCards(response.data);
    });
  };

  const onDeleteClick = async (cardId) => {
    await axios.delete(URL_DELETE_USER + "cardId=" + cardId);
    setReload(true);
    window.location.reload()

  };

  const renderRfidCards = () => {
    return rfidCards.map((val, index) => {
      return (
        <RfidCard
          cardId={val.CardId}
          cardOwnerFirstName={val.FirstName}
          cardOwnerLastName={val.LastName}
          key={index}
          onDeleteClick={() => onDeleteClick(val.CardId)}
        />
      );
    });
  };

  useEffect(() => {
    getRfidCards();
    return () => {
      setReload(false);
    };
  }, [context.isModalOpen, setReload]);

  return renderRfidCards();
}
