import React from 'react'
import { useDispatch } from 'react-redux'

// assets
import MyImage from '@/assets/img/dog.jpg'

// components
import { Bar, Button, Foo } from '@gabemule/react-boilerplate'

// InitialSetting store
import { setInitialSetting, useInitialSetting } from '@/store/InitialSetting'

import styles from './home.module.scss'

const Home = () => {
  const dispatch = useDispatch()

  const { isInitialized } = useInitialSetting()

  return (
    <div className={styles.home}>
      <header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem
          esse rerum dolorum quidem! Tenetur cupiditate atque architecto ipsum
          ducimus exercitationem? Laboriosam voluptatum quis aperiam pariatur
          atque repellendus ex necessitatibus?
        </p>
      </header>
      <div className={styles['casa-nova']}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempora ad
          placeat autem porro error explicabo perferendis accusamus enim
          similique qui officia sed ut laboriosam asperiores iusto dolorem,
          perspiciatis quis!
        </p>
      </div>
      <Bar>
        <h1> Home </h1>
      </Bar>
      <Foo>
        <Button
          label={'Click Me'}
          onClick={() => {
            alert(`Clicked! Change isInitialized to: ${!isInitialized}`)
            dispatch(setInitialSetting(!isInitialized))
          }}
          primary={true}
          size={'large'}
        />
      </Foo>
      <Bar>
        <img alt={'home image'} src={MyImage} />
      </Bar>
    </div>
  )
}

export default Home
