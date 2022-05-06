import React, {useState, useEffect} from 'react';
import {fetchData} from "../../data/fetchData";
import AutoComplete from "../AutoComplete/AutoComplete";
import Character from "../Character/Character";
import {idGenerator} from "../../helpers/idGenerator";

import type {CharactersContainerProps} from './declarations/CharactersContainer';
import Preloader from "../Preloader/Preloader";

const CharactersContainer: React.FC<CharactersContainerProps> = (props) => {
    const {
        setIsLoading,
        isLoading,
        onCharacterClick,
    } = props;

    const [charactersList, setCharactersList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetchData()
            .then(response => {
                setCharactersList(response.results);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {
                isLoading
                    ? <Preloader/>
                    : <>
                        <AutoComplete charactersList={charactersList} onCharacterClick={onCharacterClick}/>
                        {
                            !charactersList
                                ? <div>List is empty</div>
                                : charactersList
                                    .map(character => {
                                        return <Character character={character}
                                                          onCharacterClick={onCharacterClick}
                                                          showDetailedInfo={false}
                                                          key={idGenerator(character.id)}/>
                                    })
                        }
                    </>}
        </div>
    );
};

export default CharactersContainer;