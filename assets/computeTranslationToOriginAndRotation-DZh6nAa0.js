import{fI as i,fJ as R,fK as u,fL as N,fM as s,G as O,fN as S,fO as c,fP as M,fQ as T,b0 as P}from"./index-CMpZlGG4.js";function e(E,L,t){const a=Math.sin(E),f=Math.cos(E),r=Math.sin(L),C=Math.cos(L),n=t;return n[0]=-a,n[4]=-r*f,n[8]=C*f,n[12]=0,n[1]=f,n[5]=-r*a,n[9]=C*a,n[13]=0,n[2]=0,n[6]=C,n[10]=r,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function F(E,L,t){return e(E,L,t),i(t,t),t}function h(E,L,t,a){if(E==null||a==null)return!1;const f=R(E,u),r=R(a,N);if(f===r&&!_(r)&&(f!==s.UNKNOWN||O(E,a)))return S(t,L),!0;if(_(r)){const C=c[f][s.LON_LAT],n=c[s.LON_LAT][r];return C!=null&&n!=null&&(C(L,0,o,0),n(o,0,A,0),e(l*o[0],l*o[1],t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}if(!(r!==s.WEB_MERCATOR&&r!==s.PLATE_CARREE&&r!==s.WGS84&&r!==s.CGCS2000||f!==s.WGS84&&f!==s.SPHERICAL_ECEF&&f!==s.WEB_MERCATOR&&f!==s.CGCS2000)){const C=c[f][s.LON_LAT],n=c[s.LON_LAT][r];return C!=null&&n!=null&&(C(L,0,o,0),n(o,0,A,0),f===s.SPHERICAL_ECEF?F(l*o[0],l*o[1],t):M(t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}return!1}function _(E){return E===s.SPHERICAL_ECEF||E===s.SPHERICAL_MARS_PCPF||E===s.SPHERICAL_MOON_PCPF}const l=T(1),o=P(),A=P();export{h as u};
