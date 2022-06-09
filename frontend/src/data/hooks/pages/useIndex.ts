import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export const useIndex = () => {
    const [listPets, setListPets] = useState<Pet[]>([]);

    const [petSelected, setPetSelected] = useState<Pet | null>(null);

    const [email, setEmail] = useState('');

    const [value, setValue] = useState('');

    const [message, setMessage] = useState('');

    const validateDados = () => {
        return email.length > 0 && value.length > 0;
    };

    const clearForm = () => {
        setEmail('');
        setValue('');
    };

    const adopt = () => {
        if (petSelected !== null) {
            if (validateDados()) {
                ApiService.post('/adoptions', {
                    pet_id: petSelected.id,
                    email,
                    value
                }).then(() => {
                    setPetSelected(null);
                    setMessage(`${petSelected.name} adotado com sucesso!`);
                }).catch((error: AxiosError | any) => {
                    setMessage(error.response?.data.message);
                });
            } else {
                setMessage('Preencha todos os campos corretamente.');
            }
        }
    };

    useEffect(() => {
        ApiService.get('/pets').then(response => {
            setListPets(response.data);
        });
    }, []);

    useEffect(() => {
        if (petSelected === null) {
            clearForm();
        }
    }, [petSelected]);

    return {
        listPets,
        petSelected,
        setPetSelected,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adopt,
        clearForm
    };
}