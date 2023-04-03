import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { BtnBack } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { AuthContext, IClientContacts } from "../../Providers/AuthContext";
import Modal from "react-modal";
import {
  ContainerDashboard,
  DivName,
  EspaceClient,
  FormModal,
  HeaderDashBoard,
  HeaderDashBoardClient,
  InputModal,
  ClientList,
} from "./style";
import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../../components/Button/style";
import { useForm } from "react-hook-form";
import { AuthContextContact } from "../../Providers/AuthContextContact";

Modal.setAppElement("#root");

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const { client, clientLog } = useContext(AuthContext);
  const { modalOpen, setModalOpen, SubContact } =
    useContext(AuthContextContact);

  const contacts = client?.contacts;

  useEffect(() => clientLog, []);

  const navigate = useNavigate();

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const exit = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  console.log(client);
  return (
    <ContainerDashboard>
      <HeaderDashBoard>
        <Logo>Client Manager</Logo>
        <BtnBack onClick={exit}>Sair</BtnBack>
      </HeaderDashBoard>

      <DivName>
        <h2>{client?.name}</h2>
      </DivName>
      <EspaceClient>
        <HeaderDashBoardClient>
          <h2>Contatos</h2>
          <BtnBack onClick={openModal}>Adicionar Contato</BtnBack>
        </HeaderDashBoardClient>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <FormModal onSubmit={handleSubmit(SubContact)}>
            <header>
              <h2>Cadastrar Contato</h2>
              <p onClick={closeModal}>X</p>
            </header>
            <label htmlFor="name">Nome</label>
            <InputModal
              type="name"
              placeholder="Contato"
              {...register("name")}
            />
            <label htmlFor="email">Email</label>
            <InputModal
              type="name"
              placeholder="Email"
              {...register("email")}
            />
            <label htmlFor="phone">Telefone</label>
            <InputModal
              type="name"
              placeholder="Telefone"
              {...register("phone")}
            />
            <ButtonMain>Cadastrar contato</ButtonMain>
          </FormModal>
        </Modal>
        <ClientList>
          {contacts?.map((contact: IClientContacts) => (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.phone}</p>
            </li>
          ))}
        </ClientList>
      </EspaceClient>
    </ContainerDashboard>
  );
};

export default Dashboard;
