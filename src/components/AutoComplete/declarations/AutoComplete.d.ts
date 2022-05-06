import {ICharacter} from "../../Character/declarations/Character";

export interface IAutoComplete {
    charactersList: ICharacter[];
    onCharacterClick: (char: ICharacter) => void;
}