
interface Person {
    fullName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNu: number;
}

export const LiteralObjects = () => {

    const person: Person = {
        fullName: 'Andres Alcaraz',
        age: 24,
        address: {
            country: 'Colombia',
            houseNu: 305
        }
    }

  return (
      <>
        <h3>Literal Objects</h3>
        <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </code>
      </>
  )
};
