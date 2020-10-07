/// action suite (not industry term)
//1. action types
// 2. action creators
// 3. action objects


export const ADD_FEATURE = 'ADD_FEATURE';
export const DELTE_FEATURE = 'DELETE_FEATURE';

export const addFeature = (item) => {
    console.log(item)
    return {
        type: ADD_FEATURE, payload: item
    };
};

export const deleteFeature = (item) => {
    console.log(item)
    return{
        type: DELTE_FEATURE, payload: item
    };
}


