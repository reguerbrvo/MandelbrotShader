#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    vec2 m = u_mouse / u_resolution;
    float mx = clamp(m.x, 0.0, 1.0);
    float my = clamp(m.y, 0.0, 1.0);
    float scale = mix(3.0, 0.003, my);
    float k = 2.0;
    float mxAdj;
    if (mx < 0.5) {mxAdj = 0.5 * pow(mx * 2.0, k);} else {mxAdj = 1.0 - 0.5 * pow((1.0 - mx) * 2.0, k);}
    float left  = -2.2;
    float right =  0.8;
    float cx = mix(left, right, mxAdj);
    float cy = 0.0;
    vec2 center = vec2(cx, cy);
    vec2 c = uv * scale + center;
    vec2 z = vec2(0.0);
    float n = 0.0;
    const int MAX_IT = 180;
    for (int i = 0; i < MAX_IT; i++) {
        if (dot(z, z) > 4.0) break;
        z = vec2(z.x * z.x - z.y * z.y,2.0 * z.x * z.y) + c;
        n = float(i);
    }
    vec3 color;
    if (dot(z, z) <= 4.0) {color = vec3(0.0);} 
    else {
        float t = n / float(MAX_IT);
        vec3 base = vec3(0.02, 0.04, 0.10);
        vec3 pal = 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67)));
        float mixFactor = smoothstep(0.0, 1.0, t);
        color = mix(base, pal, mixFactor);
    	}
    gl_FragColor = vec4(color, 1.0);
}
