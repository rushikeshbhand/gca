import React from 'react'
import Image from 'next/image'

export default function SayHelloCard() {
  return (
    <div>
        <div>
            <h1>What are you looking for!</h1>
        </div>
        <div>
            <div>
                <Image
                src="/assets/images/say-hello.svg"
                width={500}
                height={500}
                alt="Picture of the author"></Image>
            </div>
            <div>
            <Image
                src="/assets/images/book-free-demo-class.svg"
                width={500}
                height={500}
                alt="Picture of the author"></Image>
            </div>
        </div>
    </div>
  )
}
