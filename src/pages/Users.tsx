type User = {

    id: string; 
    gender: string;
    picture: string;
    firstName: string; 
    lastName: string; 
    birthDate: string; 
    email: string; 
    phone: string; 
    address: string; 
    about: string; 

};

type Props = {
    users : User[];
}

function Users(props: Props){
    //const users = props.users;
    //Equivalent en dessous Destructurer les props
    const { users } = props;

    return (
        <section className="grid md:grid-cols-2 gap-4">
            {users.map(({firstName,lastName, phone, email}: User) =>(
                <article className="text-base rounded-lg bg-gray-200 border-4 border-gray-800 p-6">
                    <h3 className="text-lg">
                        {firstName} {lastName}
                    </h3>
                    <p>{email}</p>
                    <p>{phone}</p>

                </article>

            ))}
        </section>
    );
}

export default Users;