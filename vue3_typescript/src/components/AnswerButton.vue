<template>
  <div>
    <a @click="send" v-if="choice.url" :href="choice.url" target="_blank"
      ><button>
        {{ choice.statement }}
      </button>
    </a>
    <button v-else @click="send">{{ choice.statement }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

export default defineComponent({
  name: 'AnswerButton',
  props: {
    choice: {
      type: Object,
    },
  },
  setup(props, context: SetupContext) {
    const send = () => {
      context.emit('choice-click', props.choice)
    }
    return { send }
  },
})
</script>

<style scoped>
button {
  display: block;
  border-radius: 18px;
  width: 90%;
  margin: 0 auto 10px auto;
  padding: 0.2em 0.5em;
  border: solid 1px #1da1f2;
  background-color: white;
  color: #1da1f2;
  text-align: center;
  font-weight: bold;
  transition-duration: 0.2s;
  transition-property: background-color;
  font-size: 1em;
  user-select: none;
}

button:hover {
  background-color: rgba(29, 161, 242, 0.1);
}

a {
  text-decoration-color: #1da1f2;
}

@media (prefers-color-scheme: dark) {
  /* ダークモードの時 */
  button {
    background-color: #222;
  }
}
</style>
