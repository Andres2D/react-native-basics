import { useCounter } from '../hooks/useCounter';
export const CounterHook = () => {

    const {value, acum} = useCounter(8);

    return (
        <>
            <h3>Counter - Hook: <small>{value}</small></h3>
            <button 
                className="btn btn-primary"
                onClick={() => acum(-1)}>
                -1
            </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={() => acum(1)}>
                +1
            </button>
        </>
    )
};
