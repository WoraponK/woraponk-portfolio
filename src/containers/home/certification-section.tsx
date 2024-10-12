// Lib
import React from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'

// Include in project
import { TCertificate } from '@/lib/type'
import { CertificateCard } from '@/components/shared/_'

type Props = {
  data: TCertificate[]
}

const CertificationSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-8">
      <div className="container mx-auto">
        <h2>Certificates</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000, stopOnLastSlide: false, disableOnInteraction: false }}
        className="certificate-carousel"
        breakpoints={{
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px (tablets)
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (desktops)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((ele, _) => (
          <SwiperSlide key={ele.id} className="pt-2 pb-5">
            <CertificateCard id={ele.id} image={ele.image} title={ele.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CertificationSection
