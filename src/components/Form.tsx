import { useForm } from '../hooks/useForm';

export const Form = () => {

    const {form, email, password, onChanges} = useForm({
        email: 'test@mail.com',
        password: '1234'
    });

  return (
    <>
        <h3>Form</h3>
        <input 
            type="text"
            className='form-control'
            placeholder='email'
            value={email}
            onChange={({target}) => onChanges(target.value, 'email')}
        />

        <input 
            type="text"
            className='form-control mt-2 mb-2'
            placeholder='password'
            value={password}
            onChange={({target}) => onChanges(target.value, 'password')}
        />

        <code>
            <pre>
                {JSON.stringify(form, null, 2)}
            </pre>
        </code>
    </>
  )
};
