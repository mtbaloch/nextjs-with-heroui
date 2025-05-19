"use client";
import React, { useState } from 'react';
import { Button, ButtonGroup, Divider, Spinner } from "@heroui/react";
import { FaArrowDown, FaArrowRight, FaHeart } from "react-icons/fa"
import NextLink from "next/link"

export const ButtonTutorial = () => {
    // we only use loading for async tasks
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <h1 className='text-2xl font-bold text-orange-400 mb-10'>Today Session Topic: <span className="text-zinc-700">Button Tutorial</span></h1>


            <Button isLoading={isLoading} spinner={<Spinner color='success' />} color='primary' disableRipple disableAnimation variant='solid' size='lg' radius='full' startContent={<FaArrowRight />} endContent={<FaArrowDown />} onPress={() => setIsLoading(prev => !prev)}>
                <span>Learn NextJS with HeroUI</span>
            </Button>
            <Divider className='my-5' />
            <Button onPress={() => alert("Habib Khan")} disableRipple disableAnimation color='success' variant='solid' size='lg' radius='full' isIconOnly>
                <FaHeart size={24} />
            </Button>
            {
                /**
                 * Parts of Buttons
                 * Props -> Define and choose the properties of button like color, size, variant, as,       isIconOnly, href, disableRipple, disableAnimation etc.
                 * variants -> these are the formats of button
                 * color -> it defined the overall color of button
                 *  */
            }

            <br />
            {/* link looks like button but behave as next/link */}
            <Button as={NextLink} className='my-5' href='#'>Nextjs Link Button</Button>


            {/* Button Group */}

            <ButtonGroup variant='shadow'>
                <Button as={NextLink} href='#' onPress={()=>alert("This is Primary Button")} color='primary'>One</Button>
                <Button onPress={()=>alert("This is Secondary Button")} color='secondary'>Two</Button>
                <Button onPress={()=>alert("This is Success Button")} color='success'>Three</Button>
            </ButtonGroup>


        </>
    )
}

