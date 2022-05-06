import React from 'react';
import {NavLink} from "react-router-dom";

import type {ICharacterProps} from './declarations/Character';

import './Character.scss';

const Character: React.FC<ICharacterProps> = (props) => {
    const {
        character,
        showDetailedInfo,
        onCharacterClick,
    } = props;
    const {
        name,
        species,
        gender,
        location,
        episode,
        status,
        created,
        image,
    } = character;

    const imgClassName = props.minifiedInfo ? "character__img_xs" : "character__img_small";

    return (
        <div className="character" onClick={() => onCharacterClick(character)}>
            {
                showDetailedInfo
                    ? <>
                        <NavLink to='/profile'><img src={image} alt={name}/></NavLink>

                        <div className="character__detailed_info">
                            <p>Name: {name}</p>
                            <p>Species: {species}</p>
                            <p>Gender: {gender}</p>
                            <p>Location: {location.name}</p>
                            <p className="character__episodes">Episode: {episode}</p>
                            <p>Status: {status}</p>
                            <p>Date of creation: {created}</p>
                        </div>

                        <NavLink to='/'><button className="btn">Back</button></NavLink>
                    </>
                    : <>
                        <NavLink to='/profile'><img src={image} className={imgClassName} alt={name}/></NavLink>

                        <div className="character__detailed_info">
                            <p>{name}</p>
                            <p>{status}</p>
                        </div>
                    </>
            }
        </div>
    );
};

export default Character;