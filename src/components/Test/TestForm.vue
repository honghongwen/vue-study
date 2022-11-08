<template>
  <form @submit.prevent="onSubmit">
    <p class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </p>
    <input
      type="text"
      id="new-todo-input"
      v-model.lazy.trim="label"
      name="new-todo"
      autocomplete="false"
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>
<script>
export default {
  name: 'TestForm',
  data () {
    return {
      label: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.label === '') {
        return
      }
      this.$emit('todo-added', this.label)
      this.label = ''
    }
  }
}
</script>
