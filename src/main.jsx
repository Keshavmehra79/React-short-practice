import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartStore from './Pages/Cartstore.jsx';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={CartStore}>
 <App/></Provider>
 </BrowserRouter>
)
