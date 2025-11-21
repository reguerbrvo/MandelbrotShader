IG - Práctica 9: Shader Generativo del Conjunto de Mandelbrot

Este repositorio contiene el desarrollo de un shader de fragmentos generativo basado en el conjunto de Mandelbrot, ejecutable en el editor de **The Book of Shaders**.

## Contenido

- `mandelbrot_shader`: versión interactiva del shader, con control de zoom y posición horizontal mediante el ratón.
- `mandelbrot_tiny`: versión *tiny code* (< 512 bytes), sin interacción, pensada para formatos muy compactos.
- `Informe_Shader_Mandelbrot.pdf`: informe de la práctica (motivación, desarrollo del shader y referencias).

## Uso en The Book of Shaders

1. Abre el editor online de The Book of Shaders.
2. Sustituye el contenido del fragment shader por el de `mandelbrot_shader.glsl` o `mandelbrot_tiny.glsl`.
3. Asegúrate de que existen los uniforms:
   - `u_resolution`
   - `u_mouse`
   - `u_time` (solo necesario en la versión interactiva).
4. Mueve el ratón:
   - Eje X → centra el zoom en distintas zonas del fractal.
   - Eje Y → controla el nivel de zoom (abajo = vista amplia, arriba = zoom profundo).

## Autor

- Raúl Reguera Bravo  
- Asignatura: Informática Gráfica – Práctica 9
