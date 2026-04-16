import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './Grainient.css';

const hexToRgb = (hex: string): number[] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const clampUnit = (value: number): number => Math.max(0, Math.min(1, value));

const mixRgb = (source: number[], target: number[], amount: number): number[] => (
  source.map((channel, index) => clampUnit(channel + (target[index] - channel) * amount))
);

const rgbToRgba = (rgb: number[], alpha = 1): string => (
  `rgba(${Math.round(clampUnit(rgb[0]) * 255)}, ${Math.round(clampUnit(rgb[1]) * 255)}, ${Math.round(clampUnit(rgb[2]) * 255)}, ${alpha})`
);

const tintHex = (hex: string, amount = 0): number[] => mixRgb(hexToRgb(hex), [1, 1, 1], amount);

const shadeHex = (hex: string, amount = 0): number[] => mixRgb(hexToRgb(hex), [0, 0, 0], amount);

const mixHexPair = (colorA: string, colorB: string, amount = 0.5): number[] => (
  mixRgb(hexToRgb(colorA), hexToRgb(colorB), amount)
);

const buildStaticGradientBackground = ({
  color1,
  color2,
  color3,
  blendAngle,
  colorBalance,
}: Pick<GrainientProps, 'color1' | 'color2' | 'color3' | 'blendAngle' | 'colorBalance'>): string => {
  const warmColor = color1 ?? '#ffffff';
  const accentColor = color2 ?? '#ffffff';
  const baseColor = color3 ?? '#ffffff';
  const angle = blendAngle + 142;
  const balanceStop = Math.max(34, Math.min(68, 52 - colorBalance * 24));

  const topGlow = tintHex(warmColor, 0.34);
  const topCore = tintHex(warmColor, 0.18);
  const sideGlow = tintHex(accentColor, 0.22);
  const centerMist = mixHexPair(warmColor, accentColor, 0.46);
  const floorGlow = tintHex(baseColor, 0.16);
  const baseMid = mixHexPair(baseColor, accentColor, 0.42);
  const accentShadow = shadeHex(accentColor, 0.18);
  const deepBase = shadeHex(baseColor, 0.34);
  const warmEdge = tintHex(warmColor, 0.08);

  return [
    `radial-gradient(140% 125% at 16% 14%, ${rgbToRgba(topGlow, 0.96)} 0%, ${rgbToRgba(topCore, 0.74)} 18%, ${rgbToRgba(mixHexPair(warmColor, accentColor, 0.28), 0.28)} 38%, transparent 62%)`,
    `radial-gradient(125% 112% at 84% 18%, ${rgbToRgba(sideGlow, 0.78)} 0%, ${rgbToRgba(mixHexPair(accentColor, warmColor, 0.22), 0.34)} 26%, transparent 58%)`,
    `radial-gradient(155% 132% at 50% 88%, ${rgbToRgba(floorGlow, 0.48)} 0%, ${rgbToRgba(baseMid, 0.18)} 34%, transparent 64%)`,
    `radial-gradient(115% 105% at 56% 44%, ${rgbToRgba(centerMist, 0.16)} 0%, transparent 56%)`,
    `linear-gradient(${angle}deg, ${rgbToRgba(deepBase, 1)} 0%, ${rgbToRgba(accentShadow, 1)} 28%, ${rgbToRgba(baseMid, 1)} ${balanceStop}%, ${rgbToRgba(warmEdge, 1)} 100%)`,
  ].join(', ');
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}

vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}

float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}

void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;

  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);

  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;

  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;

  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;

  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;

  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;

  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);

  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);

  o=vec4(col,1.0);
}

void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}`;

interface GrainientProps {
  timeSpeed?: number;
  colorBalance?: number;
  warpStrength?: number;
  warpFrequency?: number;
  warpSpeed?: number;
  warpAmplitude?: number;
  blendAngle?: number;
  blendSoftness?: number;
  rotationAmount?: number;
  noiseScale?: number;
  grainAmount?: number;
  grainScale?: number;
  grainAnimated?: boolean;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  centerX?: number;
  centerY?: number;
  zoom?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
}

const Grainient = ({
  timeSpeed = 0.25,
  colorBalance = 0.0,
  warpStrength = 1.0,
  warpFrequency = 5.0,
  warpSpeed = 2.0,
  warpAmplitude = 50.0,
  blendAngle = 0.0,
  blendSoftness = 0.05,
  rotationAmount = 500.0,
  noiseScale = 2.0,
  grainAmount = 0.1,
  grainScale = 2.0,
  grainAnimated = false,
  contrast = 1.5,
  gamma = 1.0,
  saturation = 1.0,
  centerX = 0.0,
  centerY = 0.0,
  zoom = 0.9,
  color1 = '#FF9FFC',
  color2 = '#5227FF',
  color3 = '#B19EEF',
  className = '',
}: GrainientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const userAgent = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent) || isIOS;
    const isMobile = window.innerWidth < 768;
    const isIOSSafari = isIOS
      && /WebKit/i.test(userAgent)
      && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(userAgent);
    const renderer = new Renderer({
      // @ts-ignore
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2),
      preserveDrawingBuffer: isMobileDevice,
    });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';

    const container = containerRef.current;
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uTimeSpeed: { value: timeSpeed },
        uColorBalance: { value: colorBalance },
        uWarpStrength: { value: warpStrength },
        uWarpFrequency: { value: warpFrequency },
        uWarpSpeed: { value: warpSpeed },
        uWarpAmplitude: { value: warpAmplitude },
        uBlendAngle: { value: blendAngle },
        uBlendSoftness: { value: blendSoftness },
        uRotationAmount: { value: rotationAmount },
        uNoiseScale: { value: noiseScale },
        uGrainAmount: { value: grainAmount },
        uGrainScale: { value: grainScale },
        uGrainAnimated: { value: grainAnimated ? 1.0 : 0.0 },
        uContrast: { value: contrast },
        uGamma: { value: gamma },
        uSaturation: { value: saturation },
        uCenterOffset: { value: new Float32Array([centerX, centerY]) },
        uZoom: { value: zoom },
        uColor1: { value: new Float32Array(hexToRgb(color1)) },
        uColor2: { value: new Float32Array(hexToRgb(color2)) },
        uColor3: { value: new Float32Array(hexToRgb(color3)) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    if (isMobileDevice) {
      // Mobile: use a Safari-safe static gradient or capture a single static frame on other mobile browsers
      const dpr = window.devicePixelRatio || 1;
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const w = Math.max(1, Math.floor(viewportWidth * dpr));
      const h = Math.max(1, Math.floor(viewportHeight * dpr));
      const root = document.documentElement;
      const body = document.body;
      const previousRootStyles = {
        backgroundImage: root.style.backgroundImage,
        backgroundPosition: root.style.backgroundPosition,
        backgroundRepeat: root.style.backgroundRepeat,
        backgroundSize: root.style.backgroundSize,
        backgroundAttachment: root.style.backgroundAttachment,
        backgroundColor: root.style.backgroundColor,
      };
      const previousBodyStyles = {
        backgroundImage: body.style.backgroundImage,
        backgroundPosition: body.style.backgroundPosition,
        backgroundRepeat: body.style.backgroundRepeat,
        backgroundSize: body.style.backgroundSize,
        backgroundAttachment: body.style.backgroundAttachment,
        backgroundColor: body.style.backgroundColor,
      };
      const previousContainerStyles = {
        backgroundImage: container.style.backgroundImage,
        backgroundPosition: container.style.backgroundPosition,
        backgroundRepeat: container.style.backgroundRepeat,
        backgroundSize: container.style.backgroundSize,
        backgroundAttachment: container.style.backgroundAttachment,
        backgroundColor: container.style.backgroundColor,
        filter: container.style.filter,
        display: container.style.display,
      };
      const removeCanvas = () => {
        try {
          container.removeChild(canvas);
        } catch {
          // Ignore
        }
      };

      const applyGradientBackground = (element: HTMLElement, backgroundImage: string) => {
        element.style.backgroundImage = backgroundImage;
        element.style.backgroundPosition = '16% 14%, 84% 18%, 50% 88%, 56% 44%, center center';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundSize = '145% 145%, 132% 132%, 150% 150%, 122% 122%, cover';
        element.style.backgroundAttachment = 'scroll';
        element.style.backgroundColor = color3;
      };

      const applyStaticBackground = (element: HTMLElement, dataUrl: string) => {
        element.style.backgroundImage = `url(${dataUrl})`;
        element.style.backgroundPosition = 'center top';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundSize = 'cover';
      };

      renderer.setSize(w / dpr, h / dpr);
      const res = program.uniforms.iResolution.value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;

      // Render a single frame with a slight time offset for a nice gradient state
      const previousGrainAmount = program.uniforms.uGrainAmount.value;
      program.uniforms.uGrainAmount.value = Math.min(previousGrainAmount, 0.03);
      program.uniforms.iTime.value = 1.5;
      renderer.render({ scene: mesh });
      program.uniforms.uGrainAmount.value = previousGrainAmount;

      let hasStaticBackground = false;

      // Capture the frame as a static image
      try {
        const dataUrl = canvas.toDataURL('image/png');

        applyStaticBackground(root, dataUrl);
        applyStaticBackground(body, dataUrl);
        root.style.backgroundColor = 'transparent';
        body.style.backgroundColor = 'transparent';
        applyStaticBackground(container, dataUrl);

        if (isIOS) {
          container.classList.add('grainient-static', 'grainient-ios-fullpage');
        } else {
          container.classList.add('grainient-static');
        }

        hasStaticBackground = true;
      } catch {
        // If toDataURL fails, keep the canvas as-is with no animation
      }

      if (hasStaticBackground) {
        removeCanvas();
      }

      return () => {
        container.classList.remove('grainient-static', 'grainient-ios-fullpage', 'grainient-ios-gradient');
        Object.assign(root.style, previousRootStyles);
        Object.assign(body.style, previousBodyStyles);
        Object.assign(container.style, previousContainerStyles);

        if (!hasStaticBackground) {
          removeCanvas();
        }
      };
    }

    // Desktop: full animated loop
    const applySize = (width: number, height: number) => {
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      applySize(width, height);
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      program.uniforms.iTime.value = (t - t0) * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      try {
        container.removeChild(canvas);
      } catch {
        // Ignore
      }
    };
  }, [
    timeSpeed, colorBalance, warpStrength, warpFrequency, warpSpeed, warpAmplitude,
    blendAngle, blendSoftness, rotationAmount, noiseScale, grainAmount, grainScale,
    grainAnimated, contrast, gamma, saturation, centerX, centerY, zoom,
    color1, color2, color3,
  ]);

  return <div ref={containerRef} className={`grainient-container ${className}`.trim()} />;
};

export default Grainient;
