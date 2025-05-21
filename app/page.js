"use client";
import Wrapper from '@/components/Wrapper';
import { Button } from '@heroui/react'
import React from 'react'

const Home = () => {
  return (
    <Wrapper>
      <div>
      <Button color='secondary'>blue color by default</Button>
      <p className='text-primary'>This is nextjs tutorial with heroui to build any kind of website with ease.</p>
    </div>
    </Wrapper>
  )
}

export default Home