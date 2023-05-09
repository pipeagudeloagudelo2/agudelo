const initialState = {
    accentColor: "1276E0",
backgroundColor: "FFFFFF",
bodyColor: "222222",
primaryColor: "F5B83B",
shadowColor: "AAAAAA",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'WeeklyCalendar_accentColor') {
    return {
        ...state,
        accentColor: action.payload,
    };
}

if (action.type === 'WeeklyCalendar_backgroundColor') {
    return {
        ...state,
        backgroundColor: action.payload,
    };
}

if (action.type === 'WeeklyCalendar_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'WeeklyCalendar_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}

if (action.type === 'WeeklyCalendar_shadowColor') {
    return {
        ...state,
        shadowColor: action.payload,
    };
}

if (action.type === 'WeeklyCalendar_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            