import Message from "./components/Message"

function App() {

  return (
    <section>
      <Message firstName= "Laythe" lastName="PECORE" email="laythe.pecore@pec.com" />
      <Message firstName= "Mathieu" lastName="PEC" phone={765358700}/>
    </section>

  );
}

export default App
