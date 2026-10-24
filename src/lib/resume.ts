import { ref } from 'vue'

export const hasResume = ref(false)

let checked = false

export async function detectResume(): Promise<void> {
  if (checked) return
  checked = true
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}resume.pdf`, { method: 'HEAD' })
    const type = res.headers.get('content-type') ?? ''
    hasResume.value = res.ok && type.includes('pdf')
  } catch {
    hasResume.value = false
  }
}
