import {ICharacter} from "../../Character/declarations/Character";

export interface CharactersContainerProps {
    isLoading: boolean;

    setIsLoading: (value: boolean) => void;
    onCharacterClick: (char: ICharacter) => void;
}