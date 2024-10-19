// Lib
import React from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

// Include in project
import { TAward } from '@/lib/type'
import { AwardCard } from '@/components/shared/_'

type Props = {
  data: TAward[]
}

const AwardSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto space-y-8">
      <h2 className="text-center">Awards</h2>
      <div className="w-full flex justify-center">
        <div className="w-3/4">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            slidesPerView={1}
            cardsEffect={{
              perSlideOffset: 10,
              perSlideRotate: 2,
              slideShadows: false,
            }}
          >
            {data.map((ele) => (
              <SwiperSlide key={ele.id}>
                <AwardCard id={ele.id} image={ele.image} title={ele.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default AwardSection
