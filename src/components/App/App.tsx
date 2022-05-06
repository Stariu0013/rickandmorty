import React, {useEffect, useState} from 'react';
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import {Route, Routes} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import {ICharacter} from "../Character/declarations/Character";
import Character from "../Character/Character";

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [character, setCharacter] = useState<null | ICharacter>(null);

    const changeIsLoading = (value: boolean) => {
        setIsLoading(value);
    };

    const onCharacterClick = (character: ICharacter) => {
        setCharacter(character);
    };

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path='/' element={<CharactersContainer isLoading={isLoading} onCharacterClick={onCharacterClick} setIsLoading={changeIsLoading}/>}/>
                    <Route path='/profile' element={<Character character={character} onCharacterClick={() => {}} showDetailedInfo={true}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;