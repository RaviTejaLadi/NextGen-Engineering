import {
  Settings,
  Zap,
  Building,
  Beaker,
  Monitor,
  Code,
  Database,
  Plane,
  Heart,
  Leaf,
  BarChart3,
  Atom,
  Wrench,
  Fuel,
  Bot,
  Sun,
  Shield,
} from 'lucide-react';
import { EngineeringCategory } from '../types/EngineeringCategory';

export const engineeringData: EngineeringCategory[] = [
  {
    category: 'Core Engineering Disciplines',
    branches: [
      {
        name: 'Mechanical Engineering',
        description: 'Design and manufacturing of machines, engines, and mechanical systems',
        icon: Settings,
        keyPoints: [
          'Automotive and aerospace component design',
          'HVAC systems and thermal management',
          'Manufacturing processes and automation',
          'Robotics and mechatronics integration',
        ],
      },
      {
        name: 'Electrical Engineering',
        description: 'Power systems, electronics, circuits, and electrical devices',
        icon: Zap,
        keyPoints: [
          'Power generation and distribution systems',
          'Electronic circuit design and analysis',
          'Control systems and signal processing',
          'Renewable energy and smart grid technology',
        ],
      },
      {
        name: 'Civil Engineering',
        description: 'Infrastructure like roads, bridges, buildings, and water systems',
        icon: Building,
        keyPoints: [
          'Structural design and earthquake engineering',
          'Transportation infrastructure planning',
          'Water resource management systems',
          'Sustainable construction materials',
        ],
      },
      {
        name: 'Chemical Engineering',
        description: 'Chemical processes, manufacturing, and materials transformation',
        icon: Beaker,
        keyPoints: [
          'Process design and optimization',
          'Pharmaceutical and biotechnology applications',
          'Environmental remediation processes',
          'Advanced materials and nanotechnology',
        ],
      },
    ],
  },
  {
    category: 'Computer & Technology',
    branches: [
      {
        name: 'Computer Engineering',
        description: 'Hardware design, embedded systems, and computer architecture',
        icon: Monitor,
        keyPoints: [
          'Microprocessor and FPGA design',
          'Embedded systems for IoT devices',
          'Computer architecture optimization',
          'Hardware-software integration',
        ],
      },
      {
        name: 'Software Engineering',
        description: 'Software development, programming, and system design',
        icon: Code,
        keyPoints: [
          'Full-stack web and mobile development',
          'Software architecture and design patterns',
          'DevOps and continuous integration',
          'Machine learning and AI applications',
        ],
      },
      {
        name: 'Information Technology Engineering',
        description: 'IT systems, networks, and data management',
        icon: Database,
        keyPoints: [
          'Network infrastructure and cloud computing',
          'Database design and big data analytics',
          'IT security and risk management',
          'System administration and virtualization',
        ],
      },
    ],
  },
  {
    category: 'Specialized Fields',
    branches: [
      {
        name: 'Aerospace Engineering',
        description: 'Aircraft, spacecraft, and aviation systems',
        icon: Plane,
        keyPoints: [
          'Aircraft and spacecraft design',
          'Propulsion systems and aerodynamics',
          'Avionics and flight control systems',
          'Space exploration and satellite technology',
        ],
      },
      {
        name: 'Biomedical Engineering',
        description: 'Medical devices, prosthetics, and healthcare technology',
        icon: Heart,
        keyPoints: [
          'Medical device design and testing',
          'Biomaterials and tissue engineering',
          'Medical imaging and diagnostic systems',
          'Prosthetics and rehabilitation technology',
        ],
      },
      {
        name: 'Environmental Engineering',
        description: 'Pollution control, waste management, and environmental protection',
        icon: Leaf,
        keyPoints: [
          'Water and wastewater treatment systems',
          'Air pollution control and monitoring',
          'Solid waste management solutions',
          'Environmental impact assessment',
        ],
      },
      {
        name: 'Industrial Engineering',
        description: 'Process optimization, manufacturing efficiency, and systems management',
        icon: BarChart3,
        keyPoints: [
          'Supply chain optimization and logistics',
          'Quality control and Six Sigma methodologies',
          'Lean manufacturing and waste reduction',
          'Human factors and ergonomics',
        ],
      },
      {
        name: 'Materials Engineering',
        description: 'Development and testing of new materials and composites',
        icon: Atom,
        keyPoints: [
          'Advanced composite material development',
          'Nanotechnology and smart materials',
          'Materials characterization and testing',
          'Sustainable and recyclable materials',
        ],
      },
      {
        name: 'Nuclear Engineering',
        description: 'Nuclear power, radiation, and atomic energy systems',
        icon: Wrench,
        keyPoints: [
          'Nuclear reactor design and safety',
          'Radiation detection and protection',
          'Nuclear fuel cycle management',
          'Medical radioisotope applications',
        ],
      },
      {
        name: 'Petroleum Engineering',
        description: 'Oil and gas extraction, refining, and energy production',
        icon: Fuel,
        keyPoints: [
          'Reservoir engineering and modeling',
          'Drilling technology and completion',
          'Enhanced oil recovery techniques',
          'Refinery process optimization',
        ],
      },
    ],
  },
  {
    category: 'Emerging Areas',
    branches: [
      {
        name: 'Robotics Engineering',
        description: 'Automated systems and robotic technology',
        icon: Bot,
        keyPoints: [
          'Autonomous vehicle navigation systems',
          'Industrial automation and manufacturing robots',
          'Medical and surgical robotics',
          'AI-powered decision making algorithms',
        ],
      },
      {
        name: 'Renewable Energy Engineering',
        description: 'Solar, wind, and sustainable energy systems',
        icon: Sun,
        keyPoints: [
          'Solar panel efficiency optimization',
          'Wind turbine design and placement',
          'Energy storage and battery technology',
          'Grid integration and smart energy systems',
        ],
      },
      {
        name: 'Cybersecurity Engineering',
        description: 'Information security and digital protection',
        icon: Shield,
        keyPoints: [
          'Network security and intrusion detection',
          'Cryptography and secure communication',
          'Incident response and digital forensics',
          'Security architecture and risk assessment',
        ],
      },
    ],
  },
];
