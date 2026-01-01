import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, ExternalLink, X, Phone, MapPin, Calendar } from 'lucide-react';
import './App.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const skills = [
    { icon: '📋', name: 'Requirements Elicitation', category: 'BUSINESS ANALYSIS' },
    { icon: '📋', name: 'BRD & FRD Documentation', category: 'DOCUMENTATION' },
    { icon: '📚', name: 'Use Case Development', category: 'BUSINESS ANALYSIS' },
    { icon: '📋', name: 'User Story Creation', category: 'AGILE' },
    { icon: '🔄', name: 'Change Impact Analysis', category: 'PROCESS' },
    { icon: '💾', name: 'SQL Queries & Validation', category: 'TECHNICAL' },
    { icon: '📊', name: 'Power BI Dashboards', category: 'ANALYTICS' },
    { icon: '📊', name: 'Advanced Excel', category: 'ANALYTICS' },
    { icon: '✅', name: 'Data Quality Assurance', category: 'QUALITY ASSURANCE' },
    { icon: '💻', name: 'Python Programming', category: 'TECHNICAL' },
    { icon: '📦', name: 'ERP & SAP Systems', category: 'SYSTEMS' },
    { icon: '🧪', name: 'UAT Planning', category: 'TESTING' },
    { icon: '🧪', name: 'Test Case Execution', category: 'TESTING' },
    { icon: '💾', name: 'System Integration', category: 'TECHNICAL' },
    { icon: '📊', name: 'Workflow Optimization', category: 'PROCESS' },
    { icon: '📦', name: 'JIRA & Confluence', category: 'TOOLS' },
    { icon: '⚙️', name: 'Postman', category: 'TOOLS' },
    { icon: '📦', name: 'Microsoft 365', category: 'TOOLS' },
    { icon: '📊', name: 'Tableau', category: 'ANALYTICS' },
    { icon: '🔄', name: 'Agile Methodology', category: 'AGILE' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Business Place GL Analysis & Trial Balance',
      category: 'SAP FICO Solution',
      badge: 'SAP FICO',
      image: 'https://images.unsplash.com/photo-1737703638422-2cfa152cdcb7?w=800&q=80',
      tags: ['SAP FICO', 'Trial Balance', 'GL Reconciliation'],
      description: 'Integrated SAP FI-CO reporting solution enabling multi-entity trial balance analysis, GL reconciliation, and intercompany eliminations across business places.',
      overview: 'Developed comprehensive trial balance reporting solution for Finance Teams to analyze GL balances across multiple business places (company codes, plants, cost centers). The solution consolidated financial data, enabled drill-down capabilities for variance investigation, and reduced month-end reconciliation time significantly.',
      highlights: [
        'Multi-currency trial balance with 12-column format including opening/closing balances',
        'Real-time drill-down from Trial Balance to BSEG line items for detailed analysis',
        'Consolidation of inter-company transactions with automated elimination logic',
        'Budget vs. actual comparison with variance analysis and color-coded alerts',
        'Integration with ACDOCA (Universal Journal) and multiple SAP FI tables'
      ],
      challenge: 'Finance teams spent 2+ days each month manually reconciling GL balances across multiple business entities, with limited visibility into transaction-level details and frequent reconciliation errors.',
      solution: 'Built automated trial balance report extracting data from BKPF, BSEG, ACDOCA, and master data tables. Implemented multi-currency support, hierarchical GL account grouping, and drill-down navigation to source documents.',
      outcome: '⚡ Reduced month-end GL reconciliation time from 2 days to 4 hours\n📊 Achieved 100% trial balance reconciliation to subsidiary ledgers\n🎯 Improved financial close accuracy with automated validation rules\n💰 Eliminated manual reconciliation errors saving $45K+ annually'
    },
    {
      id: 2,
      title: 'GL Accrual Management & Reporting',
      category: 'SAP FICO Solution',
      badge: 'SAP FICO',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['SAP FICO', 'Accruals', 'Variance Analysis'],
      description: 'Comprehensive accrual lifecycle management with GRR-to-invoice matching, variance detection, and automated reversal recommendations.',
      overview: 'Designed and implemented GL Accrual Report providing end-to-end visibility into accrued expenses, deferred revenue, and pending invoices. The solution tracks accrual lifecycle from creation through settlement, with automated variance detection and aging analysis.',
      highlights: [
        'Automated accrual tracking with GRR-to-invoice matching via FI-MM integration',
        'Variance detection identifying over/under accruals with configurable thresholds',
        'Aging bucket analysis (0-30, 31-60, 60+ days) with automated alerts',
        'Smart reversal recommendations for accruals older than 180 days',
        'Integration with MM module for goods receipt and purchase order data'
      ],
      challenge: 'Finance team struggled to manage month-end accrual balances with limited visibility into pending invoices, resulting in frequent over/under accrual variances and delayed closings.',
      solution: 'Developed comprehensive accrual report integrating FI-CO with MM module data (MSEG, MKPF, RBCO). Implemented lifecycle tracking from GRR posting through invoice matching, with automated variance calculation and exception reporting.',
      outcome: '⏱️ Reduced accrual variance investigation time by 60%\n🎯 Identified and resolved 95% of accrual variances within 5 days\n📉 Decreased accrual adjustments at year-end by 40%\n✅ Improved audit readiness with complete accrual documentation trail'
    },
    {
      id: 3,
      title: 'Debit & Credit Transaction Report',
      category: 'SAP FICO Solution',
      badge: 'SAP FICO',
      image: 'https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?w=800&q=80',
      tags: ['SAP FICO', 'Audit Trail', 'Compliance'],
      description: 'Transaction-level transparency tool providing detailed debit/credit analysis, posting validation, and comprehensive audit trails.',
      overview: 'Created detailed Debit & Credit Transaction Report enabling Finance Controllers to validate journal entries, identify posting errors, and maintain comprehensive audit trails. The solution provides transaction-level transparency with reconciliation capabilities.',
      highlights: [
        'Real-time validation ensuring Total Debit = Total Credit for every document',
        'Transaction drill-down from summary to document level with change history',
        'Automated imbalance detection flagging documents where DR ≠ CR',
        'Comprehensive audit trail tracking user, posting date, and reversals',
        'Exception reporting for large postings and unusual GL combinations'
      ],
      challenge: 'Limited visibility into debit/credit posting patterns made it difficult to validate journal entries, identify errors early, and maintain audit compliance. Manual reconciliation was time-consuming and error-prone.',
      solution: 'Built transaction-level reporting extracting data from BKPF (document headers) and BSEG (line items) with integration to change document tables (CDHB, CDPOS). Implemented automated validation rules and exception handling.',
      outcome: '🔍 Achieved 100% posting validation with automated error detection\n⏱️ Reduced audit preparation time by 50% with complete trail\n🎯 Identified and corrected posting errors 75% faster\n✅ Enhanced compliance readiness for internal and external audits'
    },
    {
      id: 4,
      title: 'Reverse Auction Portal Enhancement',
      category: 'New Request',
      badge: 'Team Leadership',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Team Leadership', 'Web Development', 'Email Automation', 'RBAC'],
      description: 'Led 7-member team for auction creation and publishing features with automated email notification system for vendors.',
      overview: 'Spearheaded the development of comprehensive reverse auction portal enhancement, leading a cross-functional team of 7 members. Delivered auction creation, publishing, vendor notification, and role-based access control features.',
      highlights: [
        'Led end-to-end requirements gathering and stakeholder workshops',
        'Designed and implemented automated email notification system for 500+ vendors',
        'Developed role-based access control (RBAC) with 6 distinct user roles',
        'Created auction lifecycle management from draft to award',
        'Delivered comprehensive training and documentation for end users'
      ],
      challenge: 'Manual auction management process was inefficient, with delayed vendor notifications and limited visibility into bidding activities. No structured workflow for auction approval and publishing.',
      solution: 'Architected and led development of web-based auction portal with automated workflows, email triggers, and RBAC. Implemented auction templates, bid comparison tools, and real-time status dashboards.',
      outcome: '📈 Achieved 70% increase in post-implementation auction operations\n⚡ Reduced auction setup time from 4 hours to 30 minutes\n📧 Automated vendor notifications reaching 500+ suppliers instantly\n👥 Successfully managed 7-member team delivering on-time, on-budget'
    },
    {
      id: 5,
      title: 'Change Request Automation & Email Send',
      category: 'Change Request',
      badge: 'Automation',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      tags: ['Automation', 'Business Analysis', 'Process Improvement'],
      description: 'Developed report publishing button and auto-bid submission feature with automated auction notification scheduling.',
      overview: 'Automated change request workflow and communication processes, significantly reducing manual efforts in bid submission and stakeholder notifications. Implemented one-click report publishing and intelligent notification scheduling.',
      highlights: [
        'Developed one-click report publishing functionality with validation checks',
        'Implemented auto-bid submission feature with configurable business rules',
        'Created intelligent auction notification scheduling based on user preferences',
        'Built comprehensive audit trail for all automated actions',
        'Integrated with existing ERP systems for seamless data flow'
      ],
      challenge: 'Manual bid submission and report publishing processes consumed significant time, caused delays in stakeholder communication, and resulted in missed deadlines and opportunities.',
      solution: 'Designed automation framework integrating with workflow engine and email services. Implemented configurable triggers, scheduled notifications, and fallback mechanisms for failed submissions.',
      outcome: '📈 Increased user engagement by 30% within two months\n⏱️ Reduced manual communication efforts by 40%\n🎯 Eliminated missed auction deadlines with automated reminders\n✅ Improved data accuracy with automated validation and submission'
    },
    {
      id: 6,
      title: 'Material Management KPI Dashboard',
      category: 'Dashboard Development',
      badge: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Tableau', 'Data Visualization', 'KPI Reporting', 'Security'],
      description: 'Built interactive Tableau dashboards from 5+ data sources with strict access control mechanisms.',
      overview: 'Developed comprehensive Material Management KPI Dashboard consolidating data from multiple sources to provide executive visibility into inventory, procurement, and supply chain metrics.',
      highlights: [
        'Integrated 5+ disparate data sources (SAP MM, inventory systems, supplier portals)',
        'Created 15+ interactive KPI visualizations with drill-down capabilities',
        'Implemented role-based access control for data security compliance',
        'Published 5 departmental reports with optimized refresh schedules',
        'Delivered executive summary dashboard with trend analysis'
      ],
      challenge: 'Material management data scattered across multiple systems made it difficult for leadership to make informed decisions. Manual report generation took 2-3 days each week.',
      solution: 'Built centralized Tableau dashboard with ETL pipelines, data validation, and automated refresh. Implemented layered security model ensuring users access only authorized data.',
      outcome: '⚡ Eliminated 2-3 days of weekly manual reporting effort\n📊 Enabled data-driven decision-making with real-time KPIs\n🔒 Achieved 100% compliance with data security requirements\n📈 Improved inventory turnover by 18% through better visibility'
    },
    {
      id: 7,
      title: 'Company Name Change on Purchase Documents',
      category: 'Change Request',
      badge: 'SAP MM',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['SAP MM', 'Requirements Analysis', 'Documentation', 'UAT'],
      description: 'Acted as domain expert for requirements analysis and prepared Solution Documents, FS, UT, and FAT.',
      overview: 'Served as SAP MM domain expert for enterprise-wide company name change initiative. Led requirements analysis, solution design, and testing phases ensuring seamless transition without business disruption.',
      highlights: [
        'Conducted impact analysis across 50+ purchase document types',
        'Created comprehensive Solution Document with configuration details',
        'Developed detailed Functional Specification (FS) with screen mockups',
        'Prepared Unit Test (UT) and Factory Acceptance Test (FAT) scripts',
        'Coordinated with 15+ departments for validation and approval'
      ],
      challenge: 'Company merger required updating company name across thousands of purchase documents while maintaining data integrity and ensuring zero downtime during transition.',
      solution: 'Analyzed all SAP MM document types, configured standard and custom forms, implemented batch update scripts with rollback capability, and executed comprehensive testing strategy.',
      outcome: '✅ Delivered error-free document updates across all PO types\n⏱️ Completed migration in planned 2-week window\n🎯 Ensured business continuity with zero operational impact\n📋 Created reusable framework for future mass updates'
    },
    {
      id: 8,
      title: 'Purchase Document Name Change',
      category: 'Change Request',
      badge: 'SAP MM',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80',
      tags: ['SAP MM', 'Team Leadership', 'Documentation', 'Stakeholder Management'],
      description: 'Created comprehensive BRD, FS, UT, FAT, UAT documentation and led 5-member cross-functional team.',
      overview: 'Led cross-functional team of 5 members for purchase document name standardization project. Managed full SDLC from requirements gathering through UAT, ensuring alignment with business objectives.',
      highlights: [
        'Created Business Requirements Document (BRD) with detailed use cases',
        'Developed Functional Specification (FS) with technical configuration',
        'Prepared comprehensive test documentation (UT, FAT, UAT)',
        'Led 5-member team including developers, testers, and business analysts',
        'Facilitated stakeholder workshops and executive steering committee updates'
      ],
      challenge: 'Inconsistent purchase document naming conventions across divisions caused confusion, processing delays, and compliance issues. Needed enterprise-wide standardization without disrupting operations.',
      solution: 'Led collaborative requirements gathering across business units, developed standardized naming convention framework, configured SAP MM document types, and executed phased rollout strategy.',
      outcome: '🎯 Delivered smooth company name transition with zero errors\n👥 Successfully coordinated 5-member cross-functional team\n📊 Improved document processing efficiency by 25%\n✅ Enhanced compliance with standardized naming conventions'
    },
    {
      id: 9,
      title: 'Vendor Aging and Debit Report Optimization',
      category: 'Report Development',
      badge: 'SAP FICO',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      tags: ['SAP FICO', 'BAPI', 'Report Development', 'Financial Analysis'],
      description: 'Developed financial reports using BAPI functions with enhanced performance and usability.',
      overview: 'Optimized existing vendor aging and debit reports, improving performance, accuracy, and user experience. Leveraged SAP BAPI functions for efficient data extraction and implemented advanced analytics.',
      highlights: [
        'Rebuilt reports using BAPI functions for optimal performance',
        'Implemented dynamic aging buckets (0-30, 31-60, 61-90, 90+ days)',
        'Added drill-down capability to vendor line item details',
        'Conducted comprehensive testing (UT, FAT, UAT) with finance team',
        'Created user-friendly interface with Excel export functionality'
      ],
      challenge: 'Legacy vendor aging reports were slow (15+ minutes runtime), inaccurate due to data quality issues, and lacked drill-down capabilities needed for payment prioritization.',
      solution: 'Re-engineered reports using BAPI_AP_ACC_GETOPENITEMS and custom algorithms. Implemented caching, optimized SQL queries, and added interactive filters for vendor selection and date ranges.',
      outcome: '⚡ Reduced report runtime from 15 minutes to under 2 minutes\n🎯 Provided accurate vendor aging and debit reports for AP team\n📊 Enabled better cash flow management with aging analysis\n✅ Improved vendor relationship management with timely payments'
    }
  ];

  const experiences = [
    {
      period: 'Feb 2025 - Sep 2025',
      title: 'Inventory Analyst',
      company: 'Pkg Place',
      location: 'Mississauga, CA',
      points: [
        '▸ Coordinated 3PL and daily logistics reviews, improving forecast visibility 25% via tracking dashboards',
        '▸ Streamlined warehouse flow by managing manifests and cross-dock dispatch, boosting efficiency 20%',
        '▸ Updated barcode catalogs and standardized SKU labeling, improving product tracking accuracy by 20%',
        '▸ Verified payments and pricing checks to validate vendor charge consistency, reducing errors by 15%'
      ]
    },
    {
      period: 'Feb 2023 - Dec 2024',
      title: 'Project Coordinator (Contract)',
      company: 'First Choice Beverages',
      location: 'Mississauga, CA',
      points: [
        '▸ Coordinated cross-functional project teams and managed project deliverables',
        '▸ Facilitated stakeholder communication and project documentation',
        '▸ Ensured project milestones were met within scope and timeline',
        '▸ Maintained project tracking systems and status reporting for senior leadership'
      ]
    },
    {
      period: 'July 2019 - Dec 2022',
      title: 'Business System Analyst',
      company: 'ArcelorMittal Nippon Steel',
      location: 'Surat, India',
      points: [
        '▸ Led requirements gathering and stakeholder workshops across multiple operational workflows',
        '▸ Delivered 20+ BRDs, FRDs, and process flow diagrams for development teams',
        '▸ Improved business process efficiency by 18% through structured analysis',
        '▸ Created real-time KPI dashboards in Power BI for executive decision-making'
      ]
    },
    {
      period: 'Aug 2017 - June 2019',
      title: 'Quality Assurance Engineer',
      company: 'Essar Steel Pvt. Ltd.',
      location: 'Surat, India',
      points: [
        '▸ Developed and executed comprehensive test cases for quality assurance',
        '▸ Streamlined UAT cycles by 35% through structured testing processes',
        '▸ Ensured 100% audit compliance through data governance controls',
        '▸ Reduced manual system dependencies by 22% through automation'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Foundations of Business Analysis',
      description: 'Requirements analysis and business process modeling with SAP Signavio',
      url: 'https://www.coursera.org/account/accomplishments/verify/GTAPTSIV8PB3'
    },
    {
      name: 'Certified in Python + Power BI',
      description: 'Python programming & Power BI for data analysis & visualization',
      url: 'https://techcertified.io/courses/python-and-power-bi-for-analysts.html'
    },
    {
      name: 'AWS Cloud Practitioner',
      description: 'AWS cloud services, core services, security, and architecture best practices',
      url: null
    },
    {
      name: 'SAP ERP & Supply Chain Management',
      description: 'SAP ERP systems & supply chain management processes',
      url: null
    },
    {
      name: 'MySQL Data Analyst',
      description: 'Advanced SQL querying, database design, and data analysis techniques',
      url: 'https://www.linkedin.com/learning/certificates/5ef3f9b02536d34132a740c8c448f97dc043faa29d44c9bac2185baf844a9bbc'
    },
    {
      name: 'Agile Project Management',
      description: 'Agile methodologies, sprint planning, and project execution',
      url: 'https://www.linkedin.com/learning/certificates/524b1d615e4029d755ab595e3be5727827e5034e4a5c74c35ea3e8d651abba96'
    }
  ];

  const education = [
    {
      icon: '🎓',
      school: 'Conestoga College',
      location: 'Ontario, Canada',
      degree: 'Postgraduate Diploma',
      program: 'Software Quality Assurance and Test Engineering',
      skills: ['Software Testing', 'Quality Assurance', 'UAT', 'Test Automation', 'Risk Analysis']
    },
    {
      icon: '🎓',
      school: 'Conestoga College',
      location: 'Ontario, Canada',
      degree: 'Postgraduate Diploma',
      program: 'Project Management',
      skills: ['Agile Methodologies', 'Risk Management', 'Stakeholder Management', 'SDLC']
    },
    {
      icon: '🎓',
      school: 'Gujarat University',
      location: 'Ahmedabad, India',
      degree: 'Bachelor of Engineering',
      program: 'Computer Science Engineering',
      skills: ['Software Testing', 'Quality Assurance', 'Agile Methodologies', 'Security Testing', 'Business Analysis', 'Data Structures']
    }
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:theviralpatel24@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setShowContactForm(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-900 to-purple-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
                Business Systems & Quality Assurance
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Viral Patel
                  <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Business System Analyst
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Results-driven Business System Analyst with 6+ years of experience bridging business needs and technology solutions in enterprise environments. Proven ability to support full SDLC/STLC cycles, optimize business processes, and translate functional requirements into scalable solutions.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://customer-assets.emergentagent.com/job_glreporting/artifacts/komewxbd_Viral_Patel_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
                    data-testid="download-resume-btn"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-violet-500/50"
                    data-testid="contact-me-btn"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  <img
                    src="https://viral-portfolio-3.emergent.host/viral-patel-photo.png"
                    alt="Viral Patel - Business System Analyst"
                    className="relative rounded-full w-80 h-80 object-cover border-4 border-emerald-400/30 shadow-2xl shadow-emerald-500/50"
                    data-testid="profile-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-slate-950/50" data-testid="about-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a results-driven Business System Analyst with 6+ years of experience bridging business needs and technology solutions in enterprise environments. My expertise lies in supporting full SDLC/STLC cycles, optimizing business processes, and translating functional requirements into scalable solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Adept in requirements gathering, Agile delivery, UAT coordination, and stakeholder communication. I bring strong technical skills in SQL, Power BI, Python, JIRA, and ERP systems, with a focus on traceability, process improvement, and technology delivery practices.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href="mailto:theviralpatel24@gmail.com" className="hover:text-emerald-400 transition-colors">
                    theviralpatel24@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+1 (647) 685-9107</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20" data-testid="skills-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills & Competencies</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
                data-testid={`skill-${index}`}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-base">{skill.name}</h3>
                <p className="text-emerald-400 text-xs font-medium uppercase tracking-wide">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-slate-950/50" data-testid="achievements-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Achievements</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '20+', label: 'BRDs & FRDs Delivered' },
              { value: '35%', label: 'UAT Cycle Improvement' },
              { value: '$550K+', label: 'Cost Savings Identified' }
            ].map((achievement, index) => (
              <div key={index} className="text-center" data-testid={`achievement-${index}`}>
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20" data-testid="experience-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all shadow-xl"
                data-testid={`experience-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xl text-gray-300">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span className="text-gray-500">•</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </>
                  )}
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-base leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-950/50" data-testid="projects-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Key Projects</h2>
            <p className="text-gray-400 text-lg">Delivered impactful solutions across enterprise systems</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 shadow-xl cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                data-testid={`project-${project.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-400 font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" id="certifications" data-testid="certifications-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Certifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-lg"
                data-testid={`certification-${index}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      data-testid={`cert-link-${index}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-slate-900/50" data-testid="education-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl"
                data-testid={`education-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                    <p className="text-gray-400 mb-3">{edu.location}</p>
                    <div className="mb-4">
                      <p className="text-blue-400 font-semibold">{edu.degree}</p>
                      <p className="text-gray-300 text-lg">{edu.program}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" data-testid="contact-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-10">
              I'm always interested in hearing about new opportunities, collaborations, and challenges. Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="send-email-btn"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </button>
              <a
                href="https://www.linkedin.com/in/viralpatel24/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="linkedin-link"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/Viralpatel20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="github-link"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
          data-testid="project-modal"
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-4xl w-full my-8 border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                data-testid="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full">
                  {selectedProject.badge}
                </span>
              </div>
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <p className="text-blue-400 font-medium mb-2">{selectedProject.category}</p>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Challenge</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Outcomes</h3>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">{selectedProject.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactForm(false)}
          data-testid="contact-form-modal"
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-md w-full p-8 border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Contact Me</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-slate-700 rounded-full text-gray-400 hover:text-white transition-colors"
                data-testid="close-contact-form-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  data-testid="contact-email-input"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                  data-testid="contact-message-input"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white rounded-lg font-semibold transition-all"
                data-testid="contact-submit-btn"
              >
                {formStatus === 'sending' ? 'Opening Email Client...' : formStatus === 'success' ? '✓ Email Client Opened' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-slate-900/80 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Viral Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;