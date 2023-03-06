import {useState} from 'react'
import {UnlockCont, LockImage, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setUnlock] = useState(false)
  const onClickUnlock = () => {
    setUnlock(prevUnlock => !prevUnlock)
  }
  return (
    <UnlockCont>
      {isUnlocked ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      <Heading>
        {isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Heading>
      <Button onClick={onClickUnlock} type="button">
        {isUnlocked ? 'Lock' : 'Unlock'}
      </Button>
    </UnlockCont>
  )
}
export default Unlock
