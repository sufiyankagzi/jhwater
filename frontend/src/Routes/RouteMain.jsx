import { Route,Routes } from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../Components/Home"


const RoutesMain = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                
            </Route>
        </Routes>
    </>
  )
}

export default RoutesMain