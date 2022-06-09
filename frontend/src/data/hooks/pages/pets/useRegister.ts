import { useState } from "react";
import { ApiService } from "../../../services/ApiService";
import { AxiosError } from "axios";

export const useRegister = () => {
    const [name, setName] = useState("");
    const [history, setHistory] = useState("");
    const [photo, setPhoto] = useState("");
    const [message, setMessage] = useState("");

    const register = () => {
        if (validateDados()) {
            ApiService.post("/pets", {
                name,
                history,
                photo
            }).then(() => {
                clearForm();
                setMessage("Pet cadastrado com sucesso!");
            }).catch((error: AxiosError | any) => {
                setMessage(error.response?.data.message);
            });
        } else {
            setMessage("Preencha todos os campos!");
        }
    }

    const validateDados = () => {
        return name.length > 2 && history.length > 20 && photo.length > 5;
    }

    const clearForm = () => {
        setName("");
        setHistory("");
        setPhoto("");
    }

    return {
        name,
        setName,
        history,
        setHistory,
        photo,
        setPhoto,
        message,
        setMessage,
        register
    }
}