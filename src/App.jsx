import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import ImageOne from "./ImageOne"
import ImageTwo from "./ImageTwo"
import ImageThree from "./ImageThree"

function App() {
  

  return (
    <div>
      <Header/>
      <About/>
      <hr />
      <Contact/>
      <hr />

    <h1>Gallery</h1>
    <ImageOne/>
    <ImageTwo/>
    <ImageThree/>
    </div>
  )
}

export default App
