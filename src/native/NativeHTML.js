import React from 'react';
import './NativeHTML.css';
import { useParams,useNavigate } from 'react-router-dom';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}
class NativeHTML extends React.Component {
  customURLList = [
    {
      URL: './Native HTML/Excel/Convert Excel File To JSON.html',
      Name: 'Convert Excel File To JSON',
    },
    {
      URL: './Native HTML/Input/KeyDownArrayGenerator.html',
      Name: 'KeyDownArrayGenerator',
    },
    {
      URL: './Native HTML/Input/GeneratorArrayText.html',
      Name: 'GeneratorArrayText',
    },
    {
      URL: './Native HTML/ScrollBarDemo/GetScrollEvent.html',
      Name: 'GetScrollEvent',
    },
    {
      URL: './Native HTML/Input/CompositionEvents.html',
      Name: 'CompositionEvents',
    },
    {
      URL: './Native HTML/Animate/Shooting Star.html',
      Name: 'Shooting Star',
    },
    {
      URL: './Native HTML/Animate/CircleRorateLoading.html',
      Name: 'CircleRorateLoading',
    },
    {
      URL: './Native HTML/Animate/LoadingAnimation1.html',
      Name: 'LoadingAnimation1',
    },
    {
      URL: './Native HTML/Animate/LoadingAnimation2.html',
      Name: 'LoadingAnimation2',
    },
    {
      URL: './Native HTML/Animate/Progress_Bar_Rectangle.html',
      Name: 'Progress_Bar_Rectangle',
    },
    {
      URL: './Native HTML/Animate/ButtonRippleEffect.html',
      Name: 'ButtonRippleEffect',
    },
    {
      URL: './Native HTML/Algorithm/GeneratorSlopeEquation.html',
      Name: 'GeneratorSlopeEquation',
    },
    {
      URL: './Native HTML/DynamicallyGenerated/CreateScrollBarListDemo.html',
      Name: 'CreateScrollBarListDemo',
    },
    {
      URL: './Native HTML/Animate/RainBackgroundEffect.html',
      Name: 'RainBackgroundEffect',
    },
    {
      URL: './Native HTML/Animate/ShadowCircleAnimation.html',
      Name: 'ShadowCircleAnimation',
    },
    {
      URL: './Native HTML/Animate/BorderFillAnimation.html',
      Name: 'BorderFillAnimation',
    },
    {
      URL: './Native HTML/Input/KeyPressInterval.html',
      Name: 'KeyPressInterval',
    },
    {
      URL: './Native HTML/DynamicallyGenerated/GenerateButton.html',
      Name: 'GenerateButton',
    },
    {
      URL: './Native HTML/Animate/PolygonAnimation.html',
      Name: 'PolygonAnimation',
    },
    {
      URL: './Native HTML/CSSDemo/CSS_ArrowSymbol.html',
      Name: 'CSS_ArrowSymbol',
    },
    {
      URL: './Native HTML/Mouse/ReflectionEventParameter.html',
      Name: 'ReflectionEventParameter',
    },
    {
      URL: './Native HTML/CSSDemo/CSSReplaceClass.html',
      Name: 'CSSReplaceClass',
    },
    {
      URL: './Native HTML/Basic/JS_GetTime.html',
      Name: 'JS_GetTime',
    },
    {
      URL: './Native HTML/ArraySort/BubbleSort.html',
      Name: 'BubbleSort',
    },
    {
      URL: './Native HTML/Animate/3DRotationControl.html',
      Name: '3DRotationControl',
    },

    {
      URL: './Native HTML/CSSDemo/CenterAlignment.html',
      Name: 'CenterAlignment',
    },
    {
      URL: './Native HTML/CSSDemo/CustomizeBorderLength.html',
      Name: 'CustomizeBorderLength',
    },
    {
      URL: './Native HTML/ScrollBarDemo/animateScroll.html',
      Name: 'animateScroll',
    },

    {
      URL: './Native HTML/Input/Input_Range_Customized.html',
      Name: 'Input_Range_Customized',
    },
    {
      URL: './Native HTML/Input/Input_Type_File.html',
      Name: 'Input_Type_File',
    },
    {
      URL: './Native HTML/PracticeExample/Two-Sum-Less-Than-K.html',
      Name: 'Two-Sum-Less-Than-K',
    },
    {
      URL: './Native HTML/PracticeExample/WebBluetooth.html',
      Name: 'WebBluetooth',
    },
  ];
  //style="margin-top: 3vh;"
  constructor(props) {
    super(props);
    // this.state = {
    //   candidateSelected: false
    // }
    console.log('%c params[page]', 'background: blue; color: red', props)
    // try {
    //   var target = this.customURLList.find((x) => x.Name == params['page']);
    //   if (target != undefined) {
    //     this.setURLContext(target.URL);
    //   }
    // } catch (error) {

    // }
    //_navigateToPage();

  }



  render() {
    return (
      <iframe title="embedIframe" id="embedIframe" width="100%" height="100%" frameBorder="0" src="urlSafe"></iframe>
    );
  }
}
export default withRouter(NativeHTML);
