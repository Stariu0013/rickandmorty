export const fetchData = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(charsData => charsData.json())
    ;
};