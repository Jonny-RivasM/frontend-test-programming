import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <main>
              <div className="row card-letter">
                  <div className="col-sm-8">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Notice title</h5>
                              <p className="card-text">Content</p>
                              <a href="#">URL</a>
                              <p>Author</p>
                              <p>date public</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Weather "Description"</h5>
                              <p className="card-text">observation time</p>
                              <p>temperature</p>
                              <p></p>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </header>
    </div>
  );
}

export default App;
