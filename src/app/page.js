"use client";
import { useState, useEffect } from 'react';
import './styles.css'; // Archivo CSS personalizado (te mostraré el contenido después)

export default function BirthdayPage() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [transition, setTransition] = useState(false);

 
  
  const teamMessages = [
    { 
      id: 1, 
      name: "Fabian", 
      message: "Eres la mejor compañera de trabajo, siempre dispuesta a ayudar y a compartir tus conocimientos. ¡Feliz cumpleaños! 🎂",
      photo: "/imagenes/fabian.png"  // Ruta relativa desde la carpeta public
    },
    { 
      id: 2, 
      name: "Freddy", 
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Freddy.jpeg"
    },
    { 
      id: 3, 
      name: "Natasha", 
      message: "Feliz cumpleaños se le quiere y aprecia un montón 🤍",
      photo: "/imagenes/Natasha.jpeg"
    },
    { 
      id: 4, 
      name: "Lis", 
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Lis.jpeg"
    },
    {
      id: 5,
      name: "Mauren",
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Mauren.jpeg"
    },
    {
      id: 6,
      name: "Franco",
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Franco.jpeg"
    },
    {
      id: 7,
      name: "Leslie",
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Leslie.jpeg"
    },
    {
      id: 8,
      name: "Yei",
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Yei.jpeg"
    },
    {
      id: 9,
      name: "Jorge",
      message: "Gracias por tu apoyo diario ❤️",
      photo: "/imagenes/Jorge.jpeg"
    },
    
    // ... añade los otros 15 objetos igualmente
  ];

  // Animación de confeti
 // Función para crear confeti
 const createConfetti = () => {
  const container = document.querySelector('.confetti-container');
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    container.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
};


useEffect(() => {
  createConfetti();
}, []);


useEffect(() => {
  if (triggerConfetti) {
    createConfetti();
    setTriggerConfetti(false); 
  }
}, [triggerConfetti]);

const handleNext = () => {
  setTransition(true);
  setTimeout(() => {
    setCurrentPhoto((prev) => (prev < teamMessages.length - 1 ? prev + 1 : 0));
    setTransition(false);
    setTriggerConfetti(true);
  }, 500);
};

const handlePrev = () => {
  setCurrentPhoto((prev) => (prev > 0 ? prev - 1 : teamMessages.length - 1));
  setTriggerConfetti(true); // Activa el confeti
};
  return (
    
    <div className="birthday-container">
      {/* Contenedor de confeti */}
      <div className="spotify-player">
        <iframe 
          src="https://open.spotify.com/embed/track/5vgwmo15qa4jKLFW726iaF?si=eb64f27b17964402?utm_source=generator" 
          width="300" 
          height="80" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="spotify-iframe"
        ></iframe>
      </div>
      <div className="confetti-container"></div>

      {/* Tarjeta principal */}
      <div className="birthday-card">
        <h1 className="title font-rock">
          🎸 ¡FELIZ ROCK-CUMPLEAÑOS, ROSA! 🎉
        </h1>

        {/* Sección de gatos + libros */}
        <div className="theme-section">
          <p className="theme-icon">🐱 📚</p>
          <p className="funny-message">
            "Eres la <span className="highlight">gata</span> más <span className="highlight">librosa</span> del equipo.<br />
            ¡Hoy toca festejar como una <span className="italic">rockstar</span> en gira!"
          </p>
        </div>

        {/* Foto grupal */}
        <div className="photo-section">
          <h2 className="section-title">¡El equipo que adora trabajar contigo!</h2>
          <div className="photo-frame group-photo">
          <div className="photo-container">
              <img 
                src="/imagenes/FotoGrupa.jpeg" // Ruta de la foto grupal
                alt="Equipo de trabajo"
              />
            </div>
          </div>
        </div>

        {/* Fotos individuales */}
        <div className="individual-photos">
          <h3 className="section-title">Mensajes especiales:</h3>
          <div className="photo-gallery">
          <div className="photo-frame">
            <div className="photo-container individual-photo-container">
                <img 
                  src={teamMessages[currentPhoto].photo}
                  alt={teamMessages[currentPhoto].name}
                />
                </div>
                <p className="personal-message">"{teamMessages[currentPhoto].message}"Atte: {teamMessages[currentPhoto].name} </p>
            </div>
            <div className="navigation-buttons">
            <button onClick={handlePrev} className="nav-button">
            Anterior
          </button>
          <span className="photo-counter">{currentPhoto + 1} / {teamMessages.length}</span>
          <button onClick={handleNext} className="nav-button">
            Siguiente
          </button>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="footer">
          <p>
            ¡Que este año venga cargado de éxitos, buenos libros y muchos ronroneos! 🎸🐈
          </p>
        </div>
      </div>
    </div>
  );
}