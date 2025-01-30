import './App.css';
import Mainpage from './component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './component/MealInfo';
import Food from "./components/Food";
import Recipe from './components/Recipe';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>
      
  );
}
 
export default App;