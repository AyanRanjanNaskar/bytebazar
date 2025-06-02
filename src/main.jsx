import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ContextProvider } from './ContextProvider.jsx'
import Home from './Pages/Home.jsx'
import MainRouter from './MainRouter.jsx'

const queryClient = new QueryClient() 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <MainRouter/>
        {/* <Home/> */}
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)

