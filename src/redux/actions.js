export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toggleFavourite = (beach) => ({
    type: TOGGLE_FAVOURITE,
    payload: beach
});