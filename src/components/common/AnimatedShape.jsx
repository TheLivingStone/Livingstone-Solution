import { useEffect, useRef } from 'react';

const AnimatedShape = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Get device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const width = 500;
    const height = 500;

    // Set actual canvas size (accounting for pixel density)
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Set display size (CSS pixels)
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    // Scale context to match pixel density
    ctx.scale(dpr, dpr);

    let animationId;
    let time = 0;

    // Workflow nodes (like n8n)
    const nodes = [
      { x: 100, y: 150, label: 'Trigger', icon: '⚡', color: '#06b6d4', pulse: 0 },
      { x: 250, y: 100, label: 'AI Model', icon: '🤖', color: '#8b5cf6', pulse: 0.5 },
      { x: 250, y: 200, label: 'Process', icon: '⚙️', color: '#3b82f6', pulse: 1 },
      { x: 400, y: 150, label: 'Output', icon: '✓', color: '#10b981', pulse: 1.5 },
      { x: 250, y: 300, label: 'Database', icon: '💾', color: '#ec4899', pulse: 2 },
    ];

    // Connections between nodes
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 2, to: 4 },
    ];

    // Data particles flowing through connections
    const dataParticles = [];

    const animate = () => {
      time += 0.02;

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, width, height);

      // Draw connections with animated data flow
      connections.forEach((conn, index) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Animated dashed line effect
        const dashOffset = (time * 50) % 20;
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 10]);
        ctx.lineDashOffset = -dashOffset;
        ctx.stroke();
        ctx.setLineDash([]);

        // Create data particles
        if (Math.random() < 0.02) {
          dataParticles.push({
            from: conn.from,
            to: conn.to,
            progress: 0,
            color: fromNode.color,
          });
        }
      });

      // Draw and update data particles
      dataParticles.forEach((particle, index) => {
        particle.progress += 0.015;

        if (particle.progress >= 1) {
          dataParticles.splice(index, 1);
          return;
        }

        const fromNode = nodes[particle.from];
        const toNode = nodes[particle.to];

        const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress;

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time * 2 + node.pulse) * 0.5 + 0.5;

        // Outer glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 35 + pulse * 5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 25, node.x, node.y, 40);
        gradient.addColorStop(0, `${node.color}00`);
        gradient.addColorStop(1, `${node.color}40`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, 30, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Inner circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, 25, 0, Math.PI * 2);
        const innerGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 25);
        innerGradient.addColorStop(0, `${node.color}40`);
        innerGradient.addColorStop(1, `${node.color}10`);
        ctx.fillStyle = innerGradient;
        ctx.fill();

        // Icon
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(node.icon, node.x, node.y);

        // Label
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = node.color;
        ctx.fillText(node.label, node.x, node.y + 50);
      });

      // Draw AI brain visualization in center
      const centerX = 250;
      const centerY = 400;
      const brainRadius = 40;

      // Neural network connections
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time;
        const x1 = centerX + Math.cos(angle) * brainRadius;
        const y1 = centerY + Math.sin(angle) * brainRadius;

        for (let j = i + 1; j < 8; j++) {
          const angle2 = (j / 8) * Math.PI * 2 + time;
          const x2 = centerX + Math.cos(angle2) * brainRadius;
          const y2 = centerY + Math.sin(angle2) * brainRadius;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + i) * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Neural nodes
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time;
        const x = centerX + Math.cos(angle) * brainRadius;
        const y = centerY + Math.sin(angle) * brainRadius;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();
      }

      // Center AI icon
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#8b5cf6';
      ctx.fillText('🧠', centerX, centerY);

      // Floating binary code
      const binaryStrings = ['01', '10', '11', '00'];
      binaryStrings.forEach((binary, i) => {
        const x = 50 + i * 120;
        const y = 50 + Math.sin(time + i) * 10;
        ctx.font = '14px monospace';
        ctx.fillStyle = `rgba(6, 182, 212, ${0.3 + Math.sin(time * 2 + i) * 0.2})`;
        ctx.fillText(binary, x, y);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '20px',
          background: 'transparent',
          display: 'block',
        }}
      />
    </div>
  );
};

export default AnimatedShape;
