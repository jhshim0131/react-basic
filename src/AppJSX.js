
import './App.css';

function AppJSX() {
    const name='J.H.';
    const list= ['apple', 'strawberry', 'milk'];
  return (
    <>
      <h1 className='orange'>{`hello1 ${name}`}</h1>
        <p>{name}</p>
      <h2>hello2</h2>

        <ul>
            <li>우유</li>
            <li>딸기</li>
            <li>사과</li>
            <br/>
            {list.map((item) => (
                <li>{item}</li>
            ))};

        </ul>
        <img
            style={{ width: '300px', height: '600px' }}
            src='https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80'
            alt='no img'
        />
    </>
  );
}

export default AppJSX;
