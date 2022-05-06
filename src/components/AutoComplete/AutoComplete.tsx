import React, {ChangeEvent, useState} from 'react';
import Character from "../Character/Character";
import {idGenerator} from "../../helpers/idGenerator";

import type {IAutoComplete} from './declarations/AutoComplete';

import './AutoComplete.scss';

const AutoComplete: React.FC<IAutoComplete> = (props) => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState('');
    const {
        charactersList,
        onCharacterClick,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className="auto_complete">
            <div className="input-field col s6">
                <input placeholder="Type to search" id="first_name" type="text" value={search} onChange={handleChange} onClick={() => setDisplay(true)}/>
            </div>
            {
                display && (
                    <div className="auto_complete__characters">
                        {
                            charactersList
                                .filter(char => {
                                    return char['name'].toLowerCase().includes(search.toLowerCase());
                                })
                                .map((character) => {
                                    return <Character character={character}
                                                      onCharacterClick={onCharacterClick}
                                                      minifiedInfo={true}
                                                      key={idGenerator(character.id)}
                                                      showDetailedInfo={false}/>
                                })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AutoComplete;