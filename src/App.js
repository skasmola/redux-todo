import React from 'react'
import Header from './features/header/Header'
import Footer from './features/footer/Footer'
import TodoList from './features/todos/TodoList'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <main>
        <section>
          <h2 className=''>Todos</h2>
          <div className='todoapp'>
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
