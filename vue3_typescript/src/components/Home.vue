<template>
  <div class="top">
    <div v-if="isFinished">
      <img :src="require(`@/assets/img/${result.image}`)" alt="" id="top-img" />
      <p class="statement">{{ result.statement }}</p>
      <div v-for="(choice, index) in result.choices" :key="index">
        <AnswerButton :choice="choice" @choice-click="selected($event)" />
      </div>
    </div>
    <div v-else>
      <img :src="require(`@/assets/img/${quizzes.questions[currentQuiz].image}`)" alt="" id="top-img" />
      <p class="statement">{{ quizzes.questions[currentQuiz].statement }}</p>
      <div v-for="(choice, index) in quizzes.questions[currentQuiz].choices" :key="index">
        <AnswerButton :choice="choice" @choice-click="selected($event)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AnswerButton from '@/components/AnswerButton.vue'
import quizzes from '@/assets/quizzes.json'

interface QuestionChoice {
  statement: string
  meta?: 'correct'
}

interface ResultChoice {
  statement: string
  url?: string
  meta?: 'retry'
}

type Choice = QuestionChoice & ResultChoice

type Result = {
  meta: string
  image: string
  statement: string
  choices: (
    | {
        statement: string
        url: string
        meta?: undefined
      }
    | {
        statement: string
        meta: string
        url?: undefined
      }
  )[]
}

export default defineComponent({
  name: 'Home',
  components: { AnswerButton },
  setup() {
    const selectedChoice = ref<Choice | undefined>(undefined)
    let result = ref<Result | undefined>(undefined)
    const currentQuiz = ref<number>(0)
    let correctNum = ref<number>(0)
    let isFinished = ref<boolean>(false)
    const selected = (choice: Choice) => {
      /*選ばれた回答 */
      selectedChoice.value = choice
      currentQuiz.value++

      /* retryが選択されたら */
      if (selectedChoice.value !== undefined && selectedChoice.value.meta === 'retry') {
        currentQuiz.value = 0
        correctNum.value = 0
        isFinished.value = false
        return
      }

      /* 答えが正解かどうか */
      if (selectedChoice.value !== undefined && selectedChoice.value.meta === 'correct') {
        correctNum.value++
      } else if (quizzes.config.mode === 1) {
        /* 連続正解モードで間違えたら終了 */
        isFinished.value = true
        result.value = quizzes.results.find((ele) => ele.meta === 'incorrect') ?? quizzes.results[0]
        return
      }

      /* 最後の問題かどうか */
      isFinished.value = currentQuiz.value === quizzes.questions.length

      if (isFinished.value) {
        /* 全問正解！ */
        if (correctNum.value === quizzes.questions.length) {
          result.value = quizzes.results.find((ele) => ele.meta === 'allCorrect') ?? quizzes.results[0]
        } else {
          /* 正解数を表示するパターン */
          result.value = quizzes.results.find((ele) => ele.meta === 'correct') ?? quizzes.results[0]
          if (result.value !== undefined) {
            result.value.statement = result.value.statement
              .replace('{$1}', quizzes.questions.length.toString())
              .replace('{$2}', correctNum.value.toString())
          }
        }
      }
    }
    onMounted(() => {
      /* 問題の出題順をランダムに変更 */
      if (quizzes.config.isRandom) {
        quizzes.questions = quizzes.questions.sort(() => Math.random() - 0.5)
      }
    })

    return { quizzes, selectedChoice, result, currentQuiz, correctNum, isFinished, selected }
  },
})
</script>

<style scoped>
.top {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 25px;
  color: #222;
  line-height: 1.4;
}
.top p {
  white-space: pre;
}
#top-img {
  max-width: 100%;
  border-radius: 14px;
}
.statement {
  font-size: 1em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
@media (prefers-color-scheme: dark) {
  /* ダークモードの時 */
  .top {
    color: white;
  }
}
</style>
