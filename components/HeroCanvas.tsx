import React, { useEffect, useRef } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouse = { x: -1000, y: -1000 };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      friction: number; // Add friction to slow down after blast
    }

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100); // Responsive count
    const connectionDistance = 150;
    const mouseDistance = 200;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        friction: 0.98 // Damping factor
      });
    }

    const drawCube = (x: number, y: number, size: number, opacity: number) => {
      // Isometric-style cube simplified
      const s = size * 3;
      ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`; // blueprint-600
      ctx.fillStyle = `rgba(224, 231, 255, ${opacity * 0.5})`; // blueprint-100
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.rect(x - s/2, y - s/2, s, s);
      ctx.fill();
      ctx.stroke();
      
      // Internal decorative cross
      ctx.beginPath();
      ctx.moveTo(x - s/2, y);
      ctx.lineTo(x + s/2, y);
      ctx.moveTo(x, y - s/2);
      ctx.lineTo(x, y + s/2);
      ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.5})`;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 5; // Expansion speed
        r.alpha -= 0.03; // Fade speed

        if (r.alpha <= 0) {
            ripples.splice(i, 1);
            continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${r.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        // Apply friction to extra velocity (from blasts)
        if (Math.abs(p.vx) > 0.5 || Math.abs(p.vy) > 0.5) {
             p.vx *= p.friction;
             p.vy *= p.friction;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with mouse (gentle repel)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistance) {
           const force = (mouseDistance - dist) / mouseDistance;
           const angle = Math.atan2(dy, dx);
           p.x -= Math.cos(angle) * force * 0.5;
           p.y -= Math.sin(angle) * force * 0.5;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                const alpha = 1 - (dist / connectionDistance);
                ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.2})`;
                ctx.stroke();
            }
        }

        // Connect to mouse
        if (dist < mouseDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = 1 - (dist / mouseDistance);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.3})`;
            ctx.stroke();
        }

        drawCube(p.x, p.y, p.size, 0.4);
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    const handleClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create visual ripple
        ripples.push({
            x,
            y,
            radius: 20,
            alpha: 1
        });

        // Apply blast force to particles
        particles.forEach(p => {
            const dx = p.x - x;
            const dy = p.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const blastRadius = 300;

            if (dist < blastRadius) {
                 const force = (blastRadius - dist) / 20; // Stronger force closer to center
                 const angle = Math.atan2(dy, dx);
                 p.vx += Math.cos(angle) * force;
                 p.vy += Math.sin(angle) * force;
            }
        });
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />;
};

export default HeroCanvas;