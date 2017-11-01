const SCISSORS = 1,
      PAPER = 2,
      STONE = 3,
      WIN = 1,
      LOSS = 0,
      TIE = 2

const resultConfigs = [
  {
    p0: SCISSORS,
    p1: PAPER,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: SCISSORS,
    p1: SCISSORS,
    result: {
      player0: TIE,
      player1: TIE
    }
  },
  {
    p0: SCISSORS,
    p1: STONE,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: PAPER,
    p1: PAPER,
    result: {
      player0: TIE,
      player1: TIE
    }
  },
  {
    p0: PAPER,
    p1: SCISSORS,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: PAPER,
    p1: STONE,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: STONE,
    p1: PAPER,
    result: {
      player0: LOSS,
      player1: WIN
    }
  },
  {
    p0: STONE,
    p1: SCISSORS,
    result: {
      player0: WIN,
      player1: LOSS
    }
  },
  {
    p0: STONE,
    p1: STONE,
    result: {
      player0: TIE,
      player1: TIE
    }
  }
]

export default resultConfigs