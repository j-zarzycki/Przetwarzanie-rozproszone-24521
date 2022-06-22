import style from "./App.module.css";
import MainContainer from "./Components/MainContainer";
import Navbar from "./Components/Navbar";
import RfidCard from "./Components/RfidCard";
import LogsTable from "./Components/LogsTable";
import AddButton from "./Components/AddButton";
import RfidCardsContainer from "./Components/RfidCardsContainer";
import AddUserModal from "./Components/AddUserModal";
import RefreshButton from "./Components/RefreshButton";
import { useModal } from "./Context/modal-context";


function App() {
  const context = useModal();

  return (
    <>
      {context.state.isModalOpen && <AddUserModal />}
      <Navbar />
      <MainContainer>
        <div>
          <AddButton
            name="Add user"
            onClick={() => context.dispatch({ type: "open" })}
          />
          <div className={style.rfidCardContainer}>
            <RfidCardsContainer />
          </div>
        </div>
        <div>
         
          <LogsTable />
        </div>
      </MainContainer>
    </>
  );
}

export default App;
