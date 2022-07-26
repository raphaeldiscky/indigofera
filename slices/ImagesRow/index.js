import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Bounded } from '../../components/Bounded'

const ImagesRow = ({ slice }) => {
  return (
    <Bounded as='section' className='bg-white'>
      <div className='mb-2'>
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div>
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className='mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-4'>
        {slice.items.map((item, i) => (
          <div className='text-center' key={i}>
            <PrismicNextImage field={item.image} layout='responsive' />
            <div className='mt-2'>
              <PrismicRichText field={item.imageDescription} />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  )
}

export default ImagesRow
