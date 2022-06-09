import { ListStyled, ItemList, Photo, Info, Name, Description } from "./style";
import { Button } from "@mui/material";
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';

interface Props {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

const List = (props: Props) => {
    const sizeMaxText = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Photo src={pet.photo} alt={pet.name} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>{TextService.limitText(pet.history, sizeMaxText)}</Description>
                        <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet)}>Adotar {pet.name}</Button>
                    </Info>
                </ItemList>
            ))}
        </ListStyled>
    )
}

export default List;