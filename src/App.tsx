import { Provider } from "react-redux"
import { Cart } from "./components/Cart"
import { Catalog } from "./components/Catolog"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}

export default App
