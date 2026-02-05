import { useEffect, useRef } from 'react';

interface FloatingPetal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  wobble: number;
  wobbleSpeed: number;
}

interface LightSparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface SoftCloud {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  drift: number;
  color: string;
}

const TwilightBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const petalsRef = useRef<FloatingPetal[]>([]);
  const sparklesRef = useRef<LightSparkle[]>([]);
  const cloudsRef = useRef<SoftCloud[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements();
    };

    // Petal colors - soft pinks and peaches
    const petalColors = [
      'rgba(212, 165, 165, opacity)',  // Rose
      'rgba(232, 196, 196, opacity)',  // Light rose
      'rgba(245, 208, 197, opacity)',  // Peach
      'rgba(232, 180, 160, opacity)',  // Peachy
      'rgba(200, 168, 184, opacity)',  // Lavender rose
    ];

    const initializeElements = () => {
      // Create floating petals
      petalsRef.current = Array.from({ length: 25 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 8 + Math.random() * 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        speedY: 0.3 + Math.random() * 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0.3 + Math.random() * 0.4,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.02,
      }));

      // Create light sparkles
      sparklesRef.current = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2,
        opacity: Math.random(),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      }));

      // Create soft clouds/mist
      cloudsRef.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.3 + Math.random() * canvas.height * 0.4,
        width: 200 + Math.random() * 300,
        height: 80 + Math.random() * 120,
        opacity: 0.03 + Math.random() * 0.05,
        drift: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? 'rgba(212, 165, 165, opacity)' : 'rgba(200, 168, 184, opacity)',
      }));
    };

    const drawPetal = (petal: FloatingPetal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      
      const color = petal.color.replace('opacity', petal.opacity.toString());
      
      // Draw a simple petal shape
      ctx.beginPath();
      ctx.moveTo(0, -petal.size);
      ctx.bezierCurveTo(
        petal.size * 0.5, -petal.size * 0.5,
        petal.size * 0.5, petal.size * 0.5,
        0, petal.size
      );
      ctx.bezierCurveTo(
        -petal.size * 0.5, petal.size * 0.5,
        -petal.size * 0.5, -petal.size * 0.5,
        0, -petal.size
      );
      ctx.fillStyle = color;
      ctx.fill();
      
      ctx.restore();
    };

    const drawSparkle = (sparkle: LightSparkle, time: number) => {
      const pulsingOpacity = sparkle.opacity * (0.5 + 0.5 * Math.sin(sparkle.pulse + time * sparkle.pulseSpeed));
      
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${pulsingOpacity * 0.8})`;
      ctx.fill();
      
      // Soft glow
      const gradient = ctx.createRadialGradient(
        sparkle.x, sparkle.y, 0,
        sparkle.x, sparkle.y, sparkle.size * 4
      );
      gradient.addColorStop(0, `rgba(255, 245, 235, ${pulsingOpacity * 0.3})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(sparkle.x - sparkle.size * 4, sparkle.y - sparkle.size * 4, sparkle.size * 8, sparkle.size * 8);
    };

    const drawCloud = (cloud: SoftCloud, time: number) => {
      const driftX = Math.sin(cloud.drift + time * 0.0005) * 20;
      const color = cloud.color.replace('opacity', cloud.opacity.toString());
      
      const gradient = ctx.createRadialGradient(
        cloud.x + driftX, cloud.y,
        0,
        cloud.x + driftX, cloud.y,
        cloud.width / 2
      );
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(cloud.x + driftX - cloud.width / 2, cloud.y - cloud.height / 2, cloud.width, cloud.height);
    };

    const animate = () => {
      timeRef.current++;
      const time = timeRef.current;

      // Clear with gradient background - richer tones for better contrast
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#e8d4c8');    // Warm taupe at top
      bgGradient.addColorStop(0.25, '#dfc8c0'); // Dusty rose
      bgGradient.addColorStop(0.5, '#d4b8b8');  // Muted mauve
      bgGradient.addColorStop(0.75, '#c8b0c0'); // Soft lavender
      bgGradient.addColorStop(1, '#b8a8b8');    // Deeper lavender at bottom
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw soft clouds/mist
      cloudsRef.current.forEach(cloud => drawCloud(cloud, time));

      // Draw and update sparkles
      sparklesRef.current.forEach(sparkle => {
        drawSparkle(sparkle, time);
      });

      // Draw and update petals
      petalsRef.current.forEach(petal => {
        drawPetal(petal);
        
        // Update petal position
        petal.wobble += petal.wobbleSpeed;
        petal.x += petal.speedX + Math.sin(petal.wobble) * 0.5;
        petal.y += petal.speedY;
        petal.rotation += petal.rotationSpeed;
        
        // Reset petal when it goes off screen
        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size;
          petal.x = Math.random() * canvas.width;
        }
        if (petal.x < -petal.size) petal.x = canvas.width + petal.size;
        if (petal.x > canvas.width + petal.size) petal.x = -petal.size;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default TwilightBackground;
