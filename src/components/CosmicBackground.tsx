import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  drift: number;
  driftOffset: number;
}

interface Galaxy {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  rotationSpeed: number;
  arms: number;
  color: string;
  opacity: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface CosmicDust {
  x: number;
  y: number;
  size: number;
  opacity: number;
  drift: number;
  color: string;
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const nebulasRef = useRef<Nebula[]>([]);
  const galaxiesRef = useRef<Galaxy[]>([]);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const dustRef = useRef<CosmicDust[]>([]);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Track mouse for subtle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements();
    };

    // Star colors
    const starColors = [
      '255, 255, 255',    // White
      '255, 245, 238',    // Warm white
      '173, 216, 230',    // Light blue
      '255, 223, 186',    // Peach
      '230, 230, 250',    // Lavender
      '255, 182, 193',    // Pink
    ];

    // Initialize all elements
    const initializeElements = () => {
      const { width, height } = canvas;

      // Create stars (more of them, with colors)
      starsRef.current = Array.from({ length: 350 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      }));

      // Create shooting stars
      shootingStarsRef.current = Array.from({ length: 5 }, () => ({
        x: 0,
        y: 0,
        length: 100,
        speed: 10,
        opacity: 0,
        angle: Math.PI / 4,
        active: false,
      }));

      // Create nebula clouds (more of them)
      nebulasRef.current = [
        { x: width * 0.15, y: height * 0.2, radius: 200, color: '138, 43, 226', opacity: 0.035, drift: 0.0003, driftOffset: 0 },
        { x: width * 0.85, y: height * 0.75, radius: 250, color: '219, 112, 147', opacity: 0.03, drift: -0.0002, driftOffset: Math.PI },
        { x: width * 0.5, y: height * 0.5, radius: 220, color: '75, 0, 130', opacity: 0.025, drift: 0.0004, driftOffset: Math.PI / 2 },
        { x: width * 0.25, y: height * 0.8, radius: 180, color: '0, 191, 255', opacity: 0.02, drift: 0.0003, driftOffset: Math.PI / 3 },
        { x: width * 0.75, y: height * 0.25, radius: 160, color: '255, 105, 180', opacity: 0.025, drift: -0.0003, driftOffset: Math.PI / 4 },
      ];

      // Create spiral galaxies
      galaxiesRef.current = [
        { x: width * 0.2, y: height * 0.3, radius: 80, rotation: 0, rotationSpeed: 0.001, arms: 3, color: '200, 180, 255', opacity: 0.15 },
        { x: width * 0.8, y: height * 0.7, radius: 60, rotation: Math.PI, rotationSpeed: -0.0008, arms: 2, color: '255, 200, 220', opacity: 0.12 },
        { x: width * 0.6, y: height * 0.15, radius: 50, rotation: Math.PI / 2, rotationSpeed: 0.0012, arms: 4, color: '180, 220, 255', opacity: 0.1 },
      ];

      // Create floating particles
      particlesRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        pulse: 0,
        pulseSpeed: Math.random() * 0.05 + 0.02,
      }));

      // Create cosmic dust
      dustRef.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        drift: Math.random() * 0.5 + 0.1,
        color: `${Math.random() * 50 + 100}, ${Math.random() * 50 + 100}, ${Math.random() * 100 + 155}`,
      }));
    };

    // Draw nebula with enhanced glow
    const drawNebula = (nebula: Nebula, time: number) => {
      const offsetX = Math.sin(time * nebula.drift + nebula.driftOffset) * 60;
      const offsetY = Math.cos(time * nebula.drift * 1.3 + nebula.driftOffset) * 40;

      // Multiple layers for depth
      for (let i = 3; i >= 0; i--) {
        const layerRadius = nebula.radius * (1 + i * 0.3);
        const layerOpacity = nebula.opacity * (1 - i * 0.2);

        const gradient = ctx.createRadialGradient(
          nebula.x + offsetX,
          nebula.y + offsetY,
          0,
          nebula.x + offsetX,
          nebula.y + offsetY,
          layerRadius
        );
        gradient.addColorStop(0, `rgba(${nebula.color}, ${layerOpacity})`);
        gradient.addColorStop(0.4, `rgba(${nebula.color}, ${layerOpacity * 0.5})`);
        gradient.addColorStop(0.7, `rgba(${nebula.color}, ${layerOpacity * 0.2})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x + offsetX, nebula.y + offsetY, layerRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Draw spiral galaxy
    const drawGalaxy = (galaxy: Galaxy, time: number) => {
      const { x, y, radius, arms, color, opacity } = galaxy;
      const rotation = galaxy.rotation + time * galaxy.rotationSpeed;

      // Galaxy core glow
      const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.3);
      coreGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
      coreGradient.addColorStop(0.5, `rgba(${color}, ${opacity * 0.5})`);
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Spiral arms
      ctx.strokeStyle = `rgba(${color}, ${opacity * 0.6})`;
      ctx.lineWidth = 2;

      for (let arm = 0; arm < arms; arm++) {
        const armOffset = (Math.PI * 2 * arm) / arms;
        ctx.beginPath();

        for (let i = 0; i < 100; i++) {
          const angle = rotation + armOffset + i * 0.1;
          const r = (i / 100) * radius;
          const px = x + Math.cos(angle) * r;
          const py = y + Math.sin(angle) * r;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      // Galaxy stars
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * radius;
        const starX = x + Math.cos(angle + rotation) * r;
        const starY = y + Math.sin(angle + rotation) * r;
        const starSize = Math.random() * 1.5 + 0.5;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * Math.random()})`;
        ctx.beginPath();
        ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Draw star with enhanced glow
    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6;
      const opacity = star.opacity * twinkle;

      // Outer glow
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 4
      );
      gradient.addColorStop(0, `rgba(${star.color}, ${opacity})`);
      gradient.addColorStop(0.3, `rgba(${star.color}, ${opacity * 0.4})`);
      gradient.addColorStop(0.6, `rgba(${star.color}, ${opacity * 0.1})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Star core
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      // Cross flare for brighter stars
      if (star.size > 1.5 && opacity > 0.6) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        const flareSize = star.size * 6;

        ctx.beginPath();
        ctx.moveTo(star.x - flareSize, star.y);
        ctx.lineTo(star.x + flareSize, star.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(star.x, star.y - flareSize);
        ctx.lineTo(star.x, star.y + flareSize);
        ctx.stroke();
      }
    };

    // Draw shooting star with trail
    const drawShootingStar = (star: ShootingStar) => {
      if (!star.active || star.opacity <= 0) return;

      const tailX = star.x - Math.cos(star.angle) * star.length;
      const tailY = star.y - Math.sin(star.angle) * star.length;

      // Glowing trail
      const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.7, `rgba(200, 220, 255, ${star.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(star.x, star.y);
      ctx.stroke();

      // Bright head with glow
      const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8);
      headGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      headGradient.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.5})`);
      headGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = headGradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
      ctx.fill();
    };

    // Update shooting stars
    const updateShootingStars = () => {
      shootingStarsRef.current.forEach((star) => {
        if (star.active) {
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity -= 0.008;

          if (star.opacity <= 0 || star.x > canvas.width + 100 || star.y > canvas.height + 100) {
            star.active = false;
          }
        } else if (Math.random() < 0.003) {
          star.x = Math.random() * canvas.width * 0.6;
          star.y = Math.random() * canvas.height * 0.4;
          star.opacity = 1;
          star.angle = Math.PI / 6 + Math.random() * 0.4;
          star.speed = 8 + Math.random() * 6;
          star.length = 80 + Math.random() * 60;
          star.active = true;
        }
      });
    };

    // Draw and update floating particles
    const drawParticles = () => {
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += particle.pulseSpeed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3);

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(${particle.color}, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `rgba(${particle.color}, ${pulseOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw cosmic dust
    const drawDust = (time: number) => {
      dustRef.current.forEach((dust) => {
        // Slow drift
        dust.x += Math.sin(time * 0.001 + dust.drift) * 0.2;
        dust.y += Math.cos(time * 0.001 + dust.drift) * 0.1;

        // Wrap around
        if (dust.x < 0) dust.x = canvas.width;
        if (dust.x > canvas.width) dust.x = 0;
        if (dust.y < 0) dust.y = canvas.height;
        if (dust.y > canvas.height) dust.y = 0;

        ctx.fillStyle = `rgba(${dust.color}, ${dust.opacity})`;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw aurora effect at top
    const drawAurora = (time: number) => {
      const { width } = canvas;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();

        const yOffset = 50 + i * 30;
        const amplitude = 30 + i * 10;
        const frequency = 0.003 - i * 0.0005;
        const timeOffset = time * (0.02 + i * 0.005);

        ctx.moveTo(0, yOffset);

        for (let x = 0; x <= width; x += 5) {
          const y = yOffset + Math.sin(x * frequency + timeOffset) * amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();

        const colors = [
          `rgba(0, 255, 150, ${0.03 - i * 0.008})`,
          `rgba(100, 200, 255, ${0.025 - i * 0.006})`,
          `rgba(150, 100, 255, ${0.02 - i * 0.005})`,
        ];

        const gradient = ctx.createLinearGradient(0, 0, 0, yOffset + amplitude);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, colors[i]);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 1;
      const time = timeRef.current;

      // Clear with deep space color
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      bgGradient.addColorStop(0, 'rgb(15, 15, 35)');
      bgGradient.addColorStop(0.5, 'rgb(10, 10, 28)');
      bgGradient.addColorStop(1, 'rgb(5, 5, 20)');

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw aurora
      drawAurora(time);

      // Draw cosmic dust (background layer)
      drawDust(time);

      // Draw nebulas
      nebulasRef.current.forEach((nebula) => drawNebula(nebula, time));

      // Draw galaxies
      galaxiesRef.current.forEach((galaxy) => drawGalaxy(galaxy, time));

      // Draw stars
      starsRef.current.forEach((star) => drawStar(star, time));

      // Draw floating particles
      drawParticles();

      // Update and draw shooting stars
      updateShootingStars();
      shootingStarsRef.current.forEach(drawShootingStar);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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

export default CosmicBackground;