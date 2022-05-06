export const idGenerator = (id: number) => {
    return '_' + id + Math.random().toString(32);
};