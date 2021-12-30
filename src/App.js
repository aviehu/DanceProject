import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import RandomPara from "./RandomPara";
import RandomShow from "./RandomShow";
import WordPerYear from "./WordPerYear";
import WordCount from "./WordCount";
import Network from "./Network";
import HomePage from "./Home";
import ContentPage from "./ContentPage";
import Average from "./Average";
import PieChart from "./PieChart";
import Means from "./Means";
import AddShow from "./AddShow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element = {<HomePage/>}/>
          <Route path = "/addShow" element = {<AddShow/>}/>
          <Route path = "/means" element = {<Means/>}/>
          <Route path = "/piechart:url" element = {<PieChart/>}/>
          <Route path = "/average:url" element = {<Average/>}/>
          <Route path = "/network:start" element = {<Network/>}/>
          <Route path = "/content" element ={<ContentPage/>}/>
          <Route path = "/randomparagraph" element={<RandomPara/>}/>
          <Route path = "/randomshow" element={<RandomShow/>}/>
          <Route path = "/wordscount" element={<WordCount/>}/>
          <Route path = "/peryeargraph:word" element={<WordPerYear/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
