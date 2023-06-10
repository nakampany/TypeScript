type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Player = 'first' | 'second';

class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  desitanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(position.dan - this.dan),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(position.dan - this.dan)),
      }
    }
  }
}


// 駒を表すクラス
abstract class Piece {
  position: Position
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }
  mevoTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position, player: Player) : boolean ;
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.desitanceFrom(position, player)

    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.desitanceFrom(position, player)
    return (distance.suji === 0 && distance.dan === 1)
  }
}

class NariKin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.desitanceFrom(position, player)
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, 1),
      new Osho('second', 5, 9),
    ]
  }
}