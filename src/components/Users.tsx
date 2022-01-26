import { useEffect } from 'react';
import { reqResApi } from '../api/req-res';

export const Users = () => {

    useEffect(() => {
        //call API
        reqResApi.get('/users')
            .then( resp => {
                console.log(resp);
                console.log(resp.data.data);
            })
            .catch(console.log);
    }, []);
    

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
            </tbody>
        </table>
      </>
  )
};
