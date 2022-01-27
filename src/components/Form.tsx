import React from 'react';
import { useState } from 'react';

export const Form = () => {

    const [form, setForm] = useState({
        email: 'test@mail.com',
        password: '1234'
    });

    const onChanges = ( value: string, field: string ) => {
        setForm({
            ...form,
            [field]: value
        });
    }

  return (
    <>
        <h3>Form</h3>
        <input 
            type="text"
            className='form-control'
            placeholder='email'
            value={form.email}
            onChange={({target}) => onChanges(target.value, 'email')}
        />

        <input 
            type="text"
            className='form-control mt-2 mb-2'
            placeholder='password'
            value={form.password}
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
