import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { amountAdded, incremented } from '@/features/counter/counter.slice'

import './Landing.page.scss'

export default () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(incremented())
  }

  function handleClickByThree() {
    dispatch(amountAdded(3))
  }

  return (
    <section className="w-full h-full">
      <h1>landing</h1>
      <h2>count is {count}</h2>

      <button onClick={handleClick}>+++++</button>
      <button onClick={handleClickByThree}>+3</button>
    </section>
  )
}
