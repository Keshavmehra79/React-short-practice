import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Cartstore from './Pages/Cartstore.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={Cartstore}>
 <App/></Provider>
 </BrowserRouter>
)
