<script setup lang="ts">
import { computed } from 'vue'
import type { Sprite } from '@/types/portfolio'

const props = withDefaults(
  defineProps<{
    sprite: Sprite
    size?: number
    label?: string
  }>(),
  { size: 96 },
)

interface Cell {
  x: number
  y: number
  fill: string
  key: string
}

const cells = computed<Cell[]>(() => {
  const out: Cell[] = []
  props.sprite.grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]
      const fill = props.sprite.palette[ch]
      if (!fill || fill === 'transparent') continue
      out.push({ x, y, fill, key: `${x}-${y}` })
    }
  })
  return out
})

const height = computed(
  () => Math.round((props.size * props.sprite.height) / props.sprite.width),
)
</script>

<template>
  <svg
    class="pixelated block"
    :width="size"
    :height="height"
    :viewBox="`0 0 ${sprite.width} ${sprite.height}`"
    role="img"
    :aria-label="label ?? sprite.name"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      v-for="cell in cells"
      :key="cell.key"
      :x="cell.x"
      :y="cell.y"
      width="1"
      height="1"
      :fill="cell.fill"
    />
  </svg>
</template>
