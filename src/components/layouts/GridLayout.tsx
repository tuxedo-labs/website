import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {gridItems} from '@/data'

export default function GridLayout() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            title={item.title}
            key={item.id}
            description={item.description}
            className={item.className}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

