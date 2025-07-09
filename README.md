# Student Parent Transparency Portal

A comprehensive web application for student-parent transparency with real-time monitoring capabilities, built with React, TypeScript, and modern glassmorphic design.

## Features

### 🎓 **Student Dashboard**

- Real-time progress tracking with interactive charts
- Detailed assignment feedback and grading system
- Comprehensive behavior and participation analytics
- Digital awards showcase with certificates
- Profile management with edit capabilities

### 👨‍🏫 **Teacher Portal**

- Complete assignment management system
- Student behavior tracking and recording
- Grade book and assessment tools
- Parent communication hub
- Awards and recognition management
- Detailed analytics and reporting

### 👨‍👩‍👧‍👦 **Parent Dashboard**

- Child's academic progress monitoring
- Attendance tracking with pattern analysis
- Behavior monitoring with teacher feedback
- Communication tools with teachers
- Participation and activity tracking
- Real-time notifications and alerts

### 💬 **Communication System**

- Real-time messaging between teachers and parents
- File attachment support
- Priority level management
- Message threading and organization
- Teacher directory and contact management

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with Glassmorphic Design System
- **Charts**: Recharts for data visualization
- **Animations**: GSAP + Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Routing**: React Router v6
- **State Management**: React Query + React Hooks
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd student-parent-transparency-portal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking
- `npm run format.fix` - Format code with Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   └── layout/         # Layout components (header, footer)
├── pages/              # Page components
│   ├── student/        # Student-specific pages
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # Authentication
│   ├── StudentDashboard.tsx
│   ├── TeacherDashboard.tsx
│   └── ParentDashboard.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main application component
└── global.css          # Global styles and CSS variables
```

## Design System

The application uses a modern glassmorphic design system with:

- **Color Scheme**: Purple-blue gradient theme
- **Typography**: Inter font family
- **Glass Effects**: Backdrop blur with transparency
- **Animations**: Smooth transitions and hover effects
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Automatic theme switching

## Key Features Implemented

✅ **Complete Authentication System** (Login/Register with role selection)
✅ **Three Role-Based Dashboards** (Student/Teacher/Parent)
✅ **Real-time Data Visualizations** (Charts, progress bars, analytics)
✅ **Comprehensive Messaging System** (Teacher-parent communication)
✅ **Advanced Analytics Dashboard** (AI-powered insights, predictive analytics)
✅ **Digital Awards & Certificates** (Blockchain-ready verification)
✅ **Mobile-Responsive Design** (Works on all devices)
✅ **Interactive UI Elements** (Hover effects, animations, transitions)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
