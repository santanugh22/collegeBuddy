// import axios from "axios";
import { useEffect} from "react";
import styled from "styled-components";
const Profile = () => {
  // const [email,setEmail]=useState('')
  // const [firstName,setFirstName]=useState('')
  // const [lastName,setLastName]=useState('')
  // const [profilePhoto,setProfilePhoto]=useState('')
  // const [bio,setBio]=useState('')
  // const [phoneNumber,setPhoneNumber]=useState(null)
  async function fetchUserDetails() {
    try {
      // const user_id = localStorage.getItem("user_id");
      // const token = localStorage.getItem("token");
      // const url = `http://localhost:10000/api/auth/user/${user_id}`;

      // const user_details = await axios.post(url,{token})
      // const {email,first_name,last_name,profile_photo}=user_details.data
      // setEmail(email)
      // setFirstName(first_name)
      // setLastName(last_name)
      // setProfilePhoto(profile_photo)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  });
  return (
    <Container>
      <TopSection>

       
       {/* {
        profilePhoto?<ProfilePhoto src={profilePhoto}/>:null
       } */}
      </TopSection>
    </Container>
  );
};
export default Profile;

const Container = styled.div`
  height: 100vh;
`;

const TopSection = styled.div`
  height: 10em;
  width: 55em;
  background-color: white;
`;

// const ProfilePhoto=styled.img`
// height: 6rem;
// width: 6rem;
// border-radius: 3rem;
// object-fit: cover;
// border: 0.1em solid red ;


// `


// const MiddleSection=styled.div`
// height: 10rem;
// width: 20rem;
// `
