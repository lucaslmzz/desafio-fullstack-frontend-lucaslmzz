import axios, { AxiosError } from "axios";
import { useState } from "react";
import { createContext } from "react";
import { iApiError, IClientContacts } from "./AuthContext";

interface iAuthProviderContactProps {
  children: React.ReactNode;
}

interface iAuthProviderContact {
  SubContact: any;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iDataRegister {
  title: string;
  status: string;
}

export const AuthContextContact = createContext({} as iAuthProviderContact);

const AuthProviderContact = ({ children }: iAuthProviderContactProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [contact, setContacts] = useState<IClientContacts | []>([]);
  const tokenLog = localStorage.getItem("authToken");

  async function SubContact(data: iDataRegister) {
    await axios
      .post<iDataRegister>(
        "https://desafio-fullstack-backend-lucaslmzz.onrender.com/contacts",
        data,
        {
          headers: { Authorization: `Bearer ${tokenLog}` },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        setModalOpen(false);
        // setContacts([...tecno, resp.data]);
        alert("Reinicie a página");
      })
      .catch((err) => {
        const rqstError = err as AxiosError<iApiError>;
        console.log(rqstError);
      });
  }

  return (
    <AuthContextContact.Provider
      value={{
        setModalOpen,

        SubContact,

        modalOpen,
      }}
    >
      {children}
    </AuthContextContact.Provider>
  );
};

export default AuthProviderContact;
