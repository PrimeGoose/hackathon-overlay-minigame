
export default {
  name: 'Assassin Female',
  idle: {
    sprites: [
      'Assassin_Female/idle_1.png',
      'Assassin_Female/idle_2.png',
      'Assassin_Female/idle_3.png'
    ],
    frameDelay: 150
  },
  run: {
    sprites: [
      'Assassin_Female/run_1.png',
      'Assassin_Female/run_2.png',
      'Assassin_Female/run_3.png',
      'Assassin_Female/run_4.png'
    ],
    frameDelay: 75
  },
  dead: {
    sprites: [
      'Assassin_Female/dead_1.png'
    ],
    frameDelay: 750
  },
  attacks: [
    {
      sprites: [
        'Assassin_Female/attackUnarmed_1.png',
        'Assassin_Female/attackUnarmed_2.png',
        'Assassin_Female/attackUnarmed_3.png'
      ],
      frameDelay: 100
    },
    {
      sprites: [
        'Assassin_Female/attackUnarmed2_1.png',
        'Assassin_Female/attackUnarmed2_2.png',
        'Assassin_Female/attackUnarmed2_3.png'
      ],
      frameDelay: 100
    },
    {
      sprites: [
        'Assassin_Female/attackUnarmed3_1.png',
        'Assassin_Female/attackUnarmed3_2.png',
        'Assassin_Female/attackUnarmed3_3.png'
      ],
      frameDelay: 100
    }
  ]
};