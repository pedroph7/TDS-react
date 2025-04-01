import './App.css'
import { Btn } from './assets/components/btn'
import { Menu } from './assets/components/menu'

export default function App() {
  return (
    <>
    <Menu s1 = 'batata' s2 = 'carambola' s3 = 'uva'/>
    <main>
    <section id='s1'>
      primeira
      </section>
    <section id='s2'>
    segunda
    <Btn text='batata' func= '#s1'/>
    </section>
    <section id='s3'>
      terceira
      <Btn text='batata' func= '#s1'/>
      </section>
    </main>
    </>
  )
}

