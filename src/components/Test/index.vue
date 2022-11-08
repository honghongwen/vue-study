<template>
  <div>
    <h2>{{ test }}</h2>
    <h2 id="list-summary">{{listSummary}}</h2>
    <todo-form @todo-added="addToDo"></todo-form>
    <div v-for="item in todoList" :key="item.id" aria-labelledby="list-summary" class="stack-large">
      <to-do-item
        :label="item.label"
        :done="item.done"
        :id="item.id"
        @checkbox-changed="updateDoneStatus(item.id)"
        @item-edited="editItem(item.id, $event)"
        @item-deleted="deleteItem(item.id)"
      ></to-do-item>
    </div>
  </div>
</template>
<script>
import ToDoItem from './TestItem.vue'
import TodoForm from './TestForm.vue'
import uniqueId from 'lodash.uniqueid'
export default {
  name: 'test',
  components: {
    ToDoItem,
    TodoForm,
    uniqueId
  },
  data () {
    return {
      test: 'hello',
      todoList: [
        { label: 'take shower', done: false, id: uniqueId('todo-') },
        { label: 'wash clothes', done: false, id: uniqueId('todo-') },
        { label: 'go to bed', done: true, id: uniqueId('todo-') }
      ]
    }
  },
  methods: {
    addToDo (toDoLabel) {
      console.log('To-do added', toDoLabel)
      this.todoList.push({
        id: uniqueId('todo-'),
        done: false,
        label: toDoLabel
      })
    },
    updateDoneStatus (toDoId) {
      let toDoToUpdate = this.todoList.find((item) => item.id === toDoId)
      toDoToUpdate.done = !toDoToUpdate.done
    },
    editItem (toDoId, newLabel) {
      let toDoToUpdate = this.todoList.find(item => item.id === toDoId)
      toDoToUpdate.label = newLabel
    },
    deleteItem (toDoId) {
      let toDoItemIndex = this.todoList.findIndex(item => item.id === toDoId)
      this.todoList.splice(toDoItemIndex, 1)
    }
  },
  computed: {
    listSummary () {
      const numberFinishedItems = this.todoList.filter(item => item.done).length
      return `${numberFinishedItems} out of ${this.todoList.length} items completed`
    }
  }
}
</script>
