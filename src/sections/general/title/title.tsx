import { Breadcrumb, BreadcrumbProps } from '$/components/breadcrumb'
import React, { FC, ReactNode } from 'react'

type TitleSectionProps = {
  title: ReactNode
  breadcrumb: BreadcrumbProps['data']
}

const TitleSection: FC<TitleSectionProps> = ({ title, breadcrumb }) => {
  return (
    <section>
      <div className='flex items-end justify-between'>
        <h2 className="text-4xl">{title}</h2>
        <Breadcrumb
          data={breadcrumb}
        />
      </div>
    </section>
  )
}

export default TitleSection
