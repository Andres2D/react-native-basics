import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

    const {users, nextPage, backPage} = useUsers();

    const renderItem = ({id, first_name, last_name, email, avatar}: User) => {
        return (
            <tr key={ id.toString() }>
                <th>
                    <img 
                        src={avatar} 
                        alt={first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                        />
                </th>
                <th>{first_name} {last_name}</th>
                <th>{email}</th>
            </tr>
        )
    }

  return (
      <>
        <h3>Users: </h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( renderItem )
                }
            </tbody>
        </table>

        <button
            className='btn btn-primary'
            onClick={ backPage }
        >
            Back
        </button>
        &nbsp;
        <button
            className='btn btn-primary'
            onClick={ nextPage }
        >
            Next
        </button>
      </>
  )
};
