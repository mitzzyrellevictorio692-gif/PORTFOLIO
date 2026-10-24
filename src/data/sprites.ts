import type { Sprite } from '@/types/portfolio'

export const rimuruSprite: Sprite = {
  name: 'Rimuru',
  width: 12,
  height: 12,
  palette: {
    '.': 'transparent',
    b: '#5ad1e6',
    d: '#3bb8d4',
    e: '#0b0e16',
    h: '#eafbff',
    m: '#2a93ad',
  },
  grid: [
    '....bbbb....',
    '..bbbbbbbb..',
    '.bbbbbbbbbb.',
    '.bbhbbbbbbb.',
    'bbbbbbbbbbbb',
    'bbbeebbeebbb',
    'bbbeebbeebbb',
    'bbbbbbbbbbbb',
    'bbbbmmmmbbbb',
    'dbbbbmmbbbbd',
    '.dbbbbbbbbd.',
    '..dddddddd..',
  ],
}

export const stitchSprite: Sprite = {
  name: 'Stitch',
  width: 15,
  height: 16,
  palette: {
    '.': 'transparent',
    B: '#2f4fb3',
    D: '#1c3080',
    P: '#6f8ae6',
    C: '#f3e8cf',
    e: '#0b0e16',
    n: '#141821',
    t: '#ffffff',
  },
  grid: [
    'DP..........PD.',
    'DBP........PBD.',
    'DBBD......DBBD.',
    'DBCD......DCBD.',
    'DBCBD....DBCBD.',
    'DBBBBDDDDBBBBD.',
    'DBBBBBBBBBBBBD.',
    'DBetBBBBBBteBD.',
    'DBeeBBnnBBeeBD.',
    'DBBBBnnnnBBBBD.',
    'DBBBtntntBBBBD.',
    'DBCCCCCCCCCCBD.',
    'DBCCCCCCCCCCBD.',
    'DDBCCCCCCCCBDD.',
    '.DDBBCCCCBBDD..',
    '..DDD.DD.DDD...',
  ],
}

export const sprites: Record<string, Sprite> = {
  rimuru: rimuruSprite,
  stitch: stitchSprite,
}
