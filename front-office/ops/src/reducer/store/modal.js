const initial = {
    active: false,
    type: null,
}

const modal = (currentState = initial, action) => {
    const tempState = {...currentState};

    tempState.active = action.active ? true : false;
    tempState.type = action.active ? action.type : null;

    return tempState;
}

export default modal;