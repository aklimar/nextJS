import Link from "next/link";
import {getUsers} from '../api/usersApi'
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer title={"Пользователи"}>
            <h1>Пользователи</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.firstname} {user.lastname}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
}

export default Users;

export async function getStaticProps(context) {
    const users = await getUsers();
    return {
        props: { users },
    };
}