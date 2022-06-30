import { Header } from './components/header';
import { Post } from './Post';

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <Post 
        author="Gabi Gol" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam optio non adipisci placeat facilis ratione officiis eum? Dolores, quidem a? Vitae dolores cumque, nisi est fugiat reiciendis placeat incidunt!" 
      />
    </>
  )
}
