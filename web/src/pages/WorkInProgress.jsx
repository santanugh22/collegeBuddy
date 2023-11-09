import Lottie from "lottie-react";
import work from "./animation.json";
import { useEffect } from "react";
const WorkInProgress = () => {
    useEffect(()=>{
        document.title="CollegeBuddy"

    },[])

  return (
    <div style={{justifyContent:'center',alignItems:'center'}}>

            <h1>Development work is in progress , please have patience !</h1>


      <Lottie animationData={work} loop={true}  autoplay={true} style={{height:400,width:400}}/>
    </div>
  );
};
export default WorkInProgress;
