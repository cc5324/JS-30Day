# Canvas

透過 getContext 拿到 canvas 的 context，有 2d 和 3d 的形式，context 底下可以調整的屬性會不一樣。
`canvas.getContext('2d')` = CanvasRenderingContext2D

Context2D.lineWidth 線條粗細
- 預設值 1.0

Context2D.lineCap 線條結尾
- butt(預設值)、round、square

Context2D.lineJoin 線條交匯處
- miter(預設值)、round、bevel

Context2D.strokeStyle 線條顏色
- 預設為黑色