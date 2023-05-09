const initialState = {
    StarColor: "D5D927",
accentColor: "1276E0",
bodyColor: "222222",
primaryColor: "F5B83B",
shadowColor: "AAAAAA",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'Productpage_StarColor') {
    return {
        ...state,
        StarColor: action.payload,
    };
}

if (action.type === 'Productpage_accentColor') {
    return {
        ...state,
        accentColor: action.payload,
    };
}

if (action.type === 'Productpage_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'Productpage_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}

if (action.type === 'Productpage_shadowColor') {
    return {
        ...state,
        shadowColor: action.payload,
    };
}

if (action.type === 'Productpage_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            