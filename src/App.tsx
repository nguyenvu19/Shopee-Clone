import useRouteElements from './hook/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}

export default App
