import { useEffect } from 'react'

export default function CssDoole() {
  useEffect(() => {
    document.addEventListener(
      'click',
      (e) => {
        const doodle = document.querySelector('css-doodle')
        doodle.update()
      },
      []
    )
  })
  return (
    <div>
      <css-doodle grid="5">
        {`
          :doodle {
            @grid: 30 / 100vmax;
            grid-gap: 1px;
            overflow: hidden;
        }
        transition: @r(.5s) ease;
        transform: scale(@rand(.3, 1.3)) rotate(@rand(0, 360)deg);
        :after {
            content: \\@hex(@rand(0x1F600, 0x1F636));  /*将十六进制转换成unicode编码*/
            opacity: @r(.02,.1);
            font-size: 2vmax;
        }
          `}
      </css-doodle>
    </div>
  )
}
