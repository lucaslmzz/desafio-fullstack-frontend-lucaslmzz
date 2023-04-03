import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface iAuthProviderProps {
  children: React.ReactNode;
}

export interface IClientContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  client: {
    id: string;
  };
  created_at: string;
}

export interface iApiError {
  error: string;
}

interface IClient {
  id: string;
  name: string;
  email: string;
  created_at: string;
  contacts: IClientContacts[];
}

interface iAuthProvider {
  SubRegister: any;
  clientLog: any;
  SubLogin: any;
  client: IClient | null;
  SubClients: any;
}

interface iDataRegister {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface iDataLogin {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as iAuthProvider);

const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [client, setClient] = useState<IClient | null>(null);

  const navigate = useNavigate();

  async function SubRegister(data: iDataRegister) {
    const resp = {
      email: data.email,
      password: data.password,
      name: data.name,
      phone: data.phone,
    };

    await axios
      .post(
        "https://desafio-fullstack-backend-lucaslmzz.onrender.com/clients",
        resp
      )
      .then((res) => {
        if (res) {
          toast.success("Conta criada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
          });

          navigate("/");
        } else {
          toast.error("Ops! Deu algo errado", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        const rqstError = err as AxiosError<iApiError>;
        console.log(rqstError);
      });
  }

  async function SubClients() {
    await axios
      .get("https://desafio-fullstack-backend-lucaslmzz.onrender.com/clients")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        const rqstError = err as AxiosError<iApiError>;
        console.log(rqstError);
      });
  }

  async function SubLogin(data: iDataLogin) {
    await api
      .post("/login", data)
      .then((res) => {
        if (res) {
          console.log(res.data);
          window.localStorage.clear();
          window.localStorage.setItem("authToken", res.data.token);
          window.localStorage.setItem("clientId", res.data.client.id);
          navigate("/dashboard");
        } else {
          toast.error("Ops! Deu algo errado", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        const rqstError = err as AxiosError<iApiError>;
        console.log(rqstError);
      });
  }

  function clientLog() {
    const tokenLog = localStorage.getItem("authToken");
    let id = localStorage.getItem("clientId");
    if (!tokenLog) {
      navigate("/");
    } else {
      axios
        .get(
          `https://desafio-fullstack-backend-lucaslmzz.onrender.com/clients/${id}`,
          {
            headers: { Authorization: `Bearer ${tokenLog}` },
          }
        )
        .then((resp) => {
          setClient(resp.data);
          navigate("/dashboard");
        })
        .catch((err) => {
          const rqstError = err as AxiosError<iApiError>;
          console.log(rqstError);
          navigate("/");
        });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        SubRegister,
        SubLogin,
        SubClients,
        clientLog,

        client,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
