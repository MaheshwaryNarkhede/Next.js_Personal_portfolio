import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! A wild Pikachu is delivering it ⚡');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Try again!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me!</h2>
      <p className="description">
        Want to catch me like a Pokémon? Fill out the form below and I’ll get back to you faster than a Quick Ball! 🎉
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="input-field"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="textarea-field"
          required
        />
        <button type="submit" className="pokeball-button">
          Send Message
        </button>
      </form>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #ffcb05, #3b4cca);
          padding: 50px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 3rem;
          color: #fff;
          text-shadow: 2px 2px 0 #000;
          font-family: 'Press Start 2P', cursive;
        }

        .description {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 30px;
          font-family: 'Press Start 2P', cursive;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .input-field,
        .textarea-field {
          width: 100%;
          max-width: 400px;
          padding: 15px;
          margin-bottom: 20px;
          font-size: 1rem;
          border: 3px solid #3b4cca;
          border-radius: 8px;
          background-color: #f0f0f0;
          font-family: 'Press Start 2P', cursive;
          color: #000;
        }

        .input-field::placeholder,
        .textarea-field::placeholder {
          color: #666;
        }

        .pokeball-button {
          width: 180px;
          height: 50px;
          background: #ff0000;
          color: #fff;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Press Start 2P', cursive;
          border: 4px solid #3b4cca;
        }

        .pokeball-button:hover {
          background-color: #3b4cca;
          color: #ffcb05;
          transform: scale(1.1);
        }
      `}</style>

      {/* Import Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
};

export default Form;
