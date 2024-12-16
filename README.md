# ⚖️ Lawyer Portfolio Website  

A **modern and responsive portfolio website** designed for a lawyer to showcase their expertise, achievements, and services. This website combines a **clean white theme** with smooth animations for a professional yet engaging user experience.  

🌐 **[Live Demo](https://heroic-dragon-909166.netlify.app/)**  

---

## ✨ Features  

### 🌟 General Features  
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop.  
- 🎨 **Professional Layout**: Clean white theme tailored for a lawyer’s portfolio.  
- 🎥 **Smooth Animations**: Subtle animations on images, cards, and text using libraries like **AOS** or **Framer Motion**.  

### 🖥️ Website Sections  
1. **🏠 Landing Page (Home)**:  
   - 👋 **Hero Section**:  
     - Professional introduction with name and title (e.g., "John Doe, Attorney at Law").  
     - Tagline: *"Justice. Integrity. Expertise."*  
     - 📌 Call-to-Action Buttons:  
       - "Book a Consultation"  
       - "Explore Services"  
   - 🛡️ **Core Services**: Showcase of legal services with animated cards (e.g., Family Law, Corporate Law).  
   - 🗣️ **Client Testimonials**: Feedback slider featuring reviews from past clients.  

2. **📚 Portfolio (Services Section)**:  
   - Grid layout for legal services with:  
     - 📝 Titles (e.g., "Criminal Defense").  
     - 📄 Short descriptions.  
     - 🔗 Optional "Learn More" links.  

3. **📖 About Page**:  
   - 🏆 Professional bio with a profile picture.  
   - 📜 Career highlights or timeline.  
   - 💡 A brief description of the lawyer's values, mission, and expertise.  

4. **📧 Contact Form**:  
   - Fully functional form with fields:  
     - 🧑‍💼 Name  
     - ✉️ Email  
     - 📞 Phone  
     - 📋 Subject  
     - 💬 Message  
   - ✅ **Validation** for required fields.  
   - 📩 Email notifications via **Nodemailer**.  
   - 🗺️ Embedded **Google Map** for office location.  

5. **🧭 Navigation Bar**:  
   - Sticky navbar with links to Home, Portfolio, About, and Contact.  
   - 🍔 Mobile-friendly hamburger menu with animations.  

6. **🔗 Footer**:  
   - 📍 Address, 📞 Phone number, ✉️ Email, and 🔗 Social media links.  
   - ⚖️ Quick navigation links.  
   - © Copyright notice (e.g., "© 2024 John Doe, Attorney at Law").  

---

## 🛠️ Technology Stack  

- **Frontend**:  
  - ⚛️ React.js  
  - ⏭️ Next.js  
  - 🌈 Tailwind CSS  

- **Backend**:  
  - 🖥️ Next.js API Routes  
  - 📧 Nodemailer for handling emails  

- **Hosting**:  
  - 🚀 Netlify (or any preferred hosting provider)  

- **Animations**:  
  - 💫 AOS (Animate on Scroll) or Framer Motion  

---

## ⚙️ Installation  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/username/lawyer-portfolio.git
   cd lawyer-portfolio
Install dependencies:

npm install
Set up environment variables:
Create an .env.local file in the root directory and add:

EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_RECEIVER=receiver-email@example.com
Run the development server:

npm run dev
Open in browser:
Navigate to http://localhost:3000.
https://heroic-dragon-909166.netlify.app/

🚀 Deployment
Build the project:


npm run build
Deploy:

Netlify: Follow the Netlify Deployment Guide.
Vercel: Follow the Vercel Deployment Guide.
✏️ Customization
Update content in /components files.
Modify styles using Tailwind CSS utility classes.
Replace placeholder text/images with actual content.
🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a branch:
git checkout -b feature-name
Make your changes and commit:
git commit -m "Add feature description"
Push your branch:

git push origin feature-name
Create a pull request for review.

📝 License
This project is licensed under the MIT License.

📞 Contact
For queries or assistance, please reach out:

📧 Email: your-email@example.com
📞 Phone: +1 234 567 890

### **Enhancements with Icons**  
- Used emojis to categorize and visually separate sections.  
- Added relevant icons for navigation, sections, and features.  
- Enhanced readability and engagement by combining technical details with visual elements.  
