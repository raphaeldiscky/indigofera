import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Bounded } from '../../components/Bounded'

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image
  console.log(slice)
  return slice.variation === 'leftImage' ? (
    <Bounded as='section' className='bg-white'>
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className='bg-gray-100'>
              <PrismicNextImage field={image} layout='responsive' />
            </div>
          )}
        </div>
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </Bounded>
  ) : (
    <Bounded as='section' className='bg-white'>
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className='bg-gray-100'>
              <PrismicNextImage field={image} layout='responsive' />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  )
}

export default TextWithImage
