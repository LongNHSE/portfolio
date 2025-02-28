"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    window.addEventListener("resize", setCanvasDimensions);

    // Array of images
    const images = [
      "icon/nextjs-icon.svg",
      "icon/react.svg",
      "icon/typescript.svg",
      "icon/javascript.svg",
      "icon/mongodb.svg",
      "icon/nestjs.svg",
      "icon/nodejs.svg",
      "icon/postgresql.svg",
    ];

    // Load all images before starting animation
    const loadedImages: HTMLImageElement[] = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(70, Math.floor(window.innerWidth / 30));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      image: HTMLImageElement;

      constructor() {
        this.x = Math.random() * (canvas ? canvas.width : 0);
        this.y = Math.random() * (canvas ? canvas.height : 0);
        this.size = Math.random() * 10 + 20; // Random size between 20 - 70px
        this.speedX = Math.random() * 0.65 - 0.25;
        this.speedY = Math.random() * 0.65 - 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 - 1.0
        this.image =
          loadedImages[Math.floor(Math.random() * loadedImages.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed; // Apply rotation

        if (canvas) {
          // Wrap particles around the screen edges
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }
      }

      draw() {
        if (!ctx) return;

        ctx.save(); // Save canvas state

        // Move to particle center, rotate, then move back
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.rotation);
        ctx.translate(-this.x - this.size / 2, -this.y - this.size / 2);

        ctx.globalAlpha = 0.6; // Set opacity value

        // Draw the image
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        ctx.restore(); // Restore canvas state
      }
    }

    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Start animation after images have loaded
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      //   const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      // gradient.addColorStop(0, "#0f172a");
      // gradient.addColorStop(0.5, "#1e293b");
      // gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      requestAnimationFrame(animate);
    };

    // Ensure images are loaded before starting animation
    Promise.all(
      loadedImages.map((img) => new Promise((res) => (img.onload = res)))
    ).then(() => {
      init();
      animate();
    });

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    </>
  );
}
