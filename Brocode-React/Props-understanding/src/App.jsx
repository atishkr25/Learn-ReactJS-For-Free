
import Student from "./Student.jsx"

function App() {

  return (
    <>
      <Student name = "Amit" age = {25} isStudent = {true}/>
      <hr/>
      <Student name = "Manish" age = {23} isStudent = {false}/>    
      <hr/>
      <Student/>
    </>
  )
}

export default App
