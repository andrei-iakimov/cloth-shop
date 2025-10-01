import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import './App.css'
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
      {/** 404 Not Found */}
      <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Route>
    </Routes>
  )
}

export default App
