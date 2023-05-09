import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Image from '../components/base-components/image.jsx';
import Text from '../components/base-components/text.jsx';
import Icon from '../components/base-components/icon.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        shadowColor_Productpage: state.Default.shadowColor ? state.Default.shadowColor : state.Productpage.shadowColor, 
bodyColor_Productpage: state.Default.bodyColor ? state.Default.bodyColor : state.Productpage.bodyColor, 
StarColor_Productpage: state.Default.StarColor ? state.Default.StarColor : state.Productpage.StarColor, 
accentColor_Productpage: state.Default.accentColor ? state.Default.accentColor : state.Productpage.accentColor, 
titleColor_Productpage: state.Default.titleColor ? state.Default.titleColor : state.Productpage.titleColor, 
primaryColor_Productpage: state.Default.primaryColor ? state.Default.primaryColor : state.Productpage.primaryColor, 

    }
}

function Productpage(props) {
    let {shadowColor_Productpage, bodyColor_Productpage, StarColor_Productpage, accentColor_Productpage, titleColor_Productpage, primaryColor_Productpage} = props;
    shadowColor_Productpage = props['shadowColor'] ? props['shadowColor'] : shadowColor_Productpage;
bodyColor_Productpage = props['bodyColor'] ? props['bodyColor'] : bodyColor_Productpage;
StarColor_Productpage = props['StarColor'] ? props['StarColor'] : StarColor_Productpage;
accentColor_Productpage = props['accentColor'] ? props['accentColor'] : accentColor_Productpage;
titleColor_Productpage = props['titleColor'] ? props['titleColor'] : titleColor_Productpage;
primaryColor_Productpage = props['primaryColor'] ? props['primaryColor'] : primaryColor_Productpage;

    return(
        
<Layer id="productpage-1"   
 
secondaryAxisAlign={'alignItems=center'} 
    margin-top={'3vh'} 
 backgroundColor={'transparent'}
  valueheight={'94vh'}
 valuewidth={'87vw'}
 >
<Layer id="layer-2-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'45vh'}
 valuewidth={'width=100%'}
 >
<Image id="imageview-1-copy" alt="imageview-1-copy" src="https://i.ibb.co/5ndGgWv/image-43.png"   
  valueHeight={'40vh'}
 valuewidth={'width=100%'}
 />
<Layer id="layer-9-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'0.23401314806515494vh'} shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowColor={'AAAAAA'}shadowBlur={'2'}
   margin-top={'1vh'} 
margin-bottom={'1vh'} 
 backgroundColor={'#FFFFFF'}
  valueheight={'1vh'}
 valuewidth={'80%'}
 >
<Layer id="layer-10-copy-copy"   
  
     backgroundColor={'#FFFFFF'}
  valueheight={'1vh'}
 valuewidth={'50%'}
 ></Layer>
<Layer id="layer-10-copy"  backgroundColor={shadowColor_Productpage}
shadowColor={shadowColor_Productpage} 
  
 shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowBlur={'0'}
      valueheight={'1vh'}
 valuewidth={'50%'}
 ></Layer>
</Layer>
</Layer>
<Layer id="layer-3-copy"   
orientation={'flexDirection=row'} 
secondaryAxisAlign={'alignItems=center'} 
    margin-top={'1vh'} 
 backgroundColor={'transparent'}
  valueheight={'8vh'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-4-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'width=100%'}
 valuewidth={'25vw'}
 >
<Text id="text-4-copy" content="Reviews"  backgroundColor={bodyColor_Productpage} 
  
 fontSize={'16pt'}
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-5-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'width=100%'}
 valuewidth={'40vw'}
 >
<Icon id="icon-1-copy-4-copy" content="star"   iconColor={StarColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
<Icon id="icon-1-copy-3-copy" content="star"   iconColor={StarColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
<Icon id="icon-1-copy-2-copy" content="star"   iconColor={StarColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
<Icon id="icon-1-copy-1-copy" content="star"   iconColor={StarColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
<Icon id="icon-1-copy" content="star"   iconColor={shadowColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
</Layer>
<Layer id="layer-6-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'width=100%'}
 valuewidth={'flexGrow=1'}
 >
<Text id="text-1-copy" content="$329"  backgroundColor={accentColor_Productpage} 
  
 fontSize={'18pt'}
 textWeight={'fontWeight=bold'}
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
<Layer id="layer-7-copy"   
 
primaryAxisAlign={'justifyContent=center'} 
     backgroundColor={'transparent'}
  valueheight={'8vh'}
 valuewidth={'width=100%'}
 >
<Text id="text-2-copy" content="A minimalist armchair "  backgroundColor={titleColor_Productpage} 
  
 fontSize={'22pt'}
 textWeight={'fontWeight=bold'}
 margin-left={'2vw'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-8-copy"   
  
  scrollable={'overflowY=scroll'}
   backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-3-copy" content="A minimalist armchair is a type of seating that has a simple, streamlined design. It typically features clean lines and a modern look, with minimal embellishments or decorative elements"  backgroundColor={bodyColor_Productpage} 
  
 fontSize={'14pt'}
 
 margin-left={'3vw'} 
   valueheight={'fit-content'}
 valuewidth={'width=100%'}
 />
</Layer>
<Layer id="layer-20-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
    margin-top={'5vh'} 
 backgroundColor={'transparent'}
  valueheight={'10vh'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-21-copy"  backgroundColor={primaryColor_Productpage} 
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.933439093590765vh'}    margin-right={'8vw'} 
   valueheight={'30px'}
 valuewidth={'30px'}
 >
<Icon id="icon-7-copy" content="favorite"   iconColor={accentColor_Productpage} 
margin-top={'2px'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'4vh'}
 />
</Layer>
<Layer id="layer-22-copy"  backgroundColor={primaryColor_Productpage} 
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'1.7111728045946242vh'}       valueheight={'35px'}
 valuewidth={'114px'}
 >
<Layer id="layer-21-copy-copy"   
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.933439093590765vh'}     backgroundColor={'transparent'}
  valueheight={'30px'}
 valuewidth={'30px'}
 >
<Icon id="icon-7-copy-2-copy" content="shopping_cart"   iconColor={bodyColor_Productpage} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
</Layer>
<Text id="text-5-copy" content="Add to cart"  backgroundColor={bodyColor_Productpage} 
  
 fontSize={'16pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(Productpage);