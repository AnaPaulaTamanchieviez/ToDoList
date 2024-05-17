import { useState } from 'react'

import {PlusCircle} from '@phosphor-icons/react'

import './global.css';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';
import { Button } from './components/Button';
import { HeaderList } from './components/List/HeaderList';
import { Empty } from './components/List/Empty';
import { Item } from './components/List/Item';

export function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} 
        /> 
         <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
      </section>
      <section className={styles.sectionTask}>
        <HeaderList />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task)=> ( 
              <Item 
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            ))}
          </div>
        ):(
          <Empty />
        )}
      </section>
    </div>
  )
}

