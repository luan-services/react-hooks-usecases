import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { UseStatePage } from '../pages/UseStatePage'


function App() {

  return (
	<div className="min-h-screen text-gray-500">
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/useState" element={<UseStatePage/>}/>
				</Route>
			</Routes>
		</HashRouter>
	</div>

  )
}

export default App
