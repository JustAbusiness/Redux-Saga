import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { decreasement, increment } from './redux/counter/counter.slide'

function App() {
  const count = useSelector((state:RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        My current number is {count.value}
        <div>
          <button onClick={() => dispatch(increment())}> Increase </button>
          <button onClick={() => dispatch(decreasement())}> Decrease </button>
        </div>
      </div>
    </>
  )
}

export default App
