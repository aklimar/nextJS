import {getUser} from '../../api/usersApi';
import MainContainer from "../../components/MainContainer";

const Id = ({user}) => {
    return ( 
        <MainContainer title={`${user.firstname} ${user.lastname}`} >
            <div>Пользователь с id {user.id} и ником {user.firstname} </div>
        </MainContainer>
     );
}
 
export default Id;

export async function getServerSideProps({params}) {
    const id =params.id
    const user = await getUser(id);
    return {
        props: { user },
    };
}