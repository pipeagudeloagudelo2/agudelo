import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Text from '../components/base-components/text.jsx';
import Icon from '../components/base-components/icon.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_WeeklyCalendar: state.Default.backgroundColor ? state.Default.backgroundColor : state.WeeklyCalendar.backgroundColor, 
shadowColor_WeeklyCalendar: state.Default.shadowColor ? state.Default.shadowColor : state.WeeklyCalendar.shadowColor, 
bodyColor_WeeklyCalendar: state.Default.bodyColor ? state.Default.bodyColor : state.WeeklyCalendar.bodyColor, 
titleColor_WeeklyCalendar: state.Default.titleColor ? state.Default.titleColor : state.WeeklyCalendar.titleColor, 
primaryColor_WeeklyCalendar: state.Default.primaryColor ? state.Default.primaryColor : state.WeeklyCalendar.primaryColor, 
accentColor_WeeklyCalendar: state.Default.accentColor ? state.Default.accentColor : state.WeeklyCalendar.accentColor, 

    }
}

function WeeklyCalendar(props) {
    let {backgroundColor_WeeklyCalendar, shadowColor_WeeklyCalendar, bodyColor_WeeklyCalendar, titleColor_WeeklyCalendar, primaryColor_WeeklyCalendar, accentColor_WeeklyCalendar} = props;
    backgroundColor_WeeklyCalendar = props['backgroundColor'] ? props['backgroundColor'] : backgroundColor_WeeklyCalendar;
shadowColor_WeeklyCalendar = props['shadowColor'] ? props['shadowColor'] : shadowColor_WeeklyCalendar;
bodyColor_WeeklyCalendar = props['bodyColor'] ? props['bodyColor'] : bodyColor_WeeklyCalendar;
titleColor_WeeklyCalendar = props['titleColor'] ? props['titleColor'] : titleColor_WeeklyCalendar;
primaryColor_WeeklyCalendar = props['primaryColor'] ? props['primaryColor'] : primaryColor_WeeklyCalendar;
accentColor_WeeklyCalendar = props['accentColor'] ? props['accentColor'] : accentColor_WeeklyCalendar;

    return(
        
<Layer id="weeklycalendar-1"  backgroundColor={backgroundColor_WeeklyCalendar}
shadowColor={shadowColor_WeeklyCalendar} 
  
radiusAbsolute={'1.1432093231734648vh'} shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowBlur={'2'}
  padding-top={'5vw'} 
padding-bottom={'5vw'} 
padding-left={'5vw'} 
padding-right={'5vw'} 
    valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-2-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
    margin-top={'5vw'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-3-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy" content="Mon"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy" content="22"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-copy" content="Tue"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-copy" content="23"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-1-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-1-copy" content="Wed"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-1-copy" content="24"  backgroundColor={primaryColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 textWeight={'fontWeight=bold'}
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-2-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-2-copy" content="Thu"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-2-copy" content="25"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-3-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-3-copy" content="Fri"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-3-copy" content="26"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-4-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-4-copy" content="Sat"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-4-copy" content="27"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy-5-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy-5-copy" content="Sun"  backgroundColor={bodyColor_WeeklyCalendar} 
  
 fontSize={'12pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-5-copy-5-copy" content="28"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
<Layer id="layer-10-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-2-copy" content="August 2022"  backgroundColor={titleColor_WeeklyCalendar} 
  
 fontSize={'16pt'}
 textWeight={'fontWeight=bold'}
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Layer id="layer-12-copy"   
orientation={'flexDirection=row'}  
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Icon id="icon-1-copy" content="keyboard_arrow_left"   iconColor={accentColor_WeeklyCalendar} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'4vh'}
 />
<Icon id="icon-2-copy" content="keyboard_arrow_right"   iconColor={accentColor_WeeklyCalendar} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'4vh'}
 />
</Layer>
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(WeeklyCalendar);