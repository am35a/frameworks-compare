import { useState } from 'react'

function App() {

  const [show, setShow] = useState(true),
        [list, setList] = useState([1, 2, 3])

  const listItems =
  <ul>
    {list.map((item) => <li>{item}</li>)}
  </ul>

  function Render() {
    if (show && list.length)
      return listItems
    else
      if ( list.length )
        return <p>List is not empty, but hidden.</p>
      else
        return <p>List is empty.</p>
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle List</button>
      <button onClick={() => (list.push(list.length + 1), setList([...list]))}>Push Number</button>
      <button onClick={() => (list.pop(), setList([...list]))}>Pop Number</button>
      <button onClick={() => setList([...list.reverse()])}>Reverse List</button>

      {Render()}
    </div>
  )
}

export default App