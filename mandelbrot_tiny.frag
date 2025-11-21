#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
void main(){
 vec2 uv=(gl_FragCoord.xy-u_resolution*.5)/u_resolution.y;
 vec2 c=uv*3.+vec2(-0.7,0.0),z=vec2(0.);
 float n=0.;
 for(int i=0;i<80;i++){
  if(dot(z,z)>4.)break;
  z=vec2(z.x*z.x-z.y*z.y,2.*z.x*z.y)+c;
  n=float(i);
 }
 float t=n/80.;
 vec3 col=vec3(t*t,t,1.-t);
 gl_FragColor=vec4(col,1.);
}
