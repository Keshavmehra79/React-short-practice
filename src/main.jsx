import { createRoot } from 'react-dom/client'
import App from './contextapi/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
)
