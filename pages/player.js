import You from './you'
import NPC from './npc'

const Player = ({player, ...rest}) => player ? <You {...rest} /> : <NPC {...rest} />

export default Player