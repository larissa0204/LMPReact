
import Styles from './componentes/Style'
import MinMax from './componentes/MinMax'
import Botton from './componentes/Botton';
import Titulo from './componentes/Titulo';
import Contador from './componentes/Contador';


function App() {
    
  return(
    <div>
      <Styles/>
      <MinMax/>
      <MinMax min="1" max="10"/> 
      <MinMax min={5} max={20}/>
      <Titulo principal="Oi" secundario="como vai"/>
      <Botton/>
      <Contador inicial={200} passo= {10}/>
    </div>
  )
   
}

export default App;


