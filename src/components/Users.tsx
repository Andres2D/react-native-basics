import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/req-res';
import { ReqResList, User } from '../interfaces/reqRes';

export const Users = () => {

    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async() => {
        //call API
        const resp = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        });
        
        if(resp.data.data.length > 0) {
            setUsers(resp.data.data);
            pageRef.current ++;
        }else{
            alert('No more pages')
        }
    }
    
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
            onClick={ loadUsers }
        >
            Nexts
        </button>
      </>
  )
};
