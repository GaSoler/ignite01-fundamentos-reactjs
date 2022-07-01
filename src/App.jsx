import { Header } from './components/header';
import { Post } from './Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabi Gol"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea labore minus consequatur eaque maxime commodi, tenetur maiores quo aliquam veritatis temporibus omnis, officia quia recusandae eius. Autem ipsam voluptatem cupiditate."
          />
          <Post 
            author="PP"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ea! Impedit, ullam delectus ipsa eligendi optio iusto! Laborum rerum, vel asperiores reiciendis, molestias alias a illum amet reprehenderit ducimus illo?"
          />
          
        </main>
      </div>
    </>
  )
}
