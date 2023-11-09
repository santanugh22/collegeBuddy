import Lottie from "lottie-react";
import work from "./animation.json";
import { useEffect } from "react";
const WorkInProgress = () => {
    useEffect(()=>{
        document.title="CollegeBuddy"

    },[])

  return (
    <div style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',width:'100%',height:'100%'}}>
        <div style={{}}>
            <h1>Development work is in progress , please have patience !</h1>

        </div>
      <Lottie animationData={work} loop={true}  autoplay={true} style={{height:400,width:400,alignSelf:'center'}}/>
    </div>
  );
};
export default WorkInProgress;
