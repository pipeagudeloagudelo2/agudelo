import React from 'react';
import WeeklyCalendar from '../components/weeklyCalendar.jsx';
import GreetingsTitle from '../components/greetingsTitle.jsx';
import Productpage from '../components/productpage.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_WeeklyCalendar: state.Default.backgroundColor ? state.Default.backgroundColor : state.WeeklyCalendar.backgroundColor, 
shadowColor_WeeklyCalendar: state.Default.shadowColor ? state.Default.shadowColor : state.WeeklyCalendar.shadowColor, 

    }
}

function Screen1({backgroundColor_WeeklyCalendar, shadowColor_WeeklyCalendar}) {
    return(
        <div className="Screen1"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'flex-start',
alignItems:'flex-start', overflowY:'scroll',
            }}
        >
            
<WeeklyCalendar />
<GreetingsTitle />
<Productpage />
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen1);
            