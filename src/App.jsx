import './App.css'

function MyDemo (){
  const headerStyle = {
    backgroundColor:'#333' ,
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const h1Style = {
    margin: '0',
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={h1Style}>Welcome to MyDemo</h1>
      </header>
      <main>
        <section>
          <h2>About MyDemo</h2>
          <p>This is a simple React demo with inline styling.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>HTML Semantics</li>
            <li>Inline CSS Styling</li>
            <li>React JSX</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Demo</p>
      </footer>
    </div>
  );
}

export default MyDemo;