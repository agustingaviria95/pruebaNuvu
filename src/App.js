import {Counter} from './Counter.js';
import { GetMovieList } from './fetchApi.js';


function App() {
  GetMovieList();
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
