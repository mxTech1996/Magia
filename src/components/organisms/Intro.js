import { FaFileAlt } from 'react-icons/fa';

const services = [
  {
    category: 'Business Strategy',
    items: ['Market Analysis', 'Operational Efficiency', 'Strategic Planning'],
  },
  {
    category: 'Financial Consulting',
    items: [
      'Budget Optimization',
      'Financial Reporting',
      'Profitability Analysis',
    ],
  },
  {
    category: 'HR & Talent Management',
    items: [
      'Organizational Structure',
      'Leadership Development',
      'Talent Acquisition',
    ],
  },
  {
    category: 'Process Improvement',
    items: ['Workflow Optimization', 'Lean Management', 'Resource Allocation'],
  },
  {
    category: 'Risk Management',
    items: [
      'Compliance Assessment',
      'Crisis Management',
      'Risk Mitigation Planning',
    ],
  },
  {
    category: 'Technology Integration',
    items: [
      'Software Solutions',
      'Data-Driven Decision Making',
      'Automation Consulting',
    ],
  },
];

export default function IntroSection() {
  return (
    <section className='bg-[#0e3b2e] text-white py-16 px-4'>
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <span className='bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full'>
          Consulting Services
        </span>
        <h2 className='text-4xl font-bold mt-4 mb-4'>
          Our Consulting Services That Drive Business Growth
        </h2>
        <p className='text-gray-300 max-w-2xl mx-auto'>
          We provide expert advice for businesses seeking to optimize their
          operations, improve profitability, and manage organizational change
          effectively.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {services.map((service, index) => (
          <div key={index} className='bg-white text-gray-900 rounded-lg p-6'>
            <h3 className='text-lg font-semibold mb-4'>{service.category}</h3>
            <ul className='space-y-2 mb-4'>
              {service.items.map((item, idx) => (
                <li key={idx} className='flex items-center gap-2'>
                  <FaFileAlt className='text-teal-600' />
                  {item}
                </li>
              ))}
            </ul>
            {/* <button className='border border-teal-600 text-teal-600 px-4 py-1 rounded hover:bg-teal-600 hover:text-white transition'>
              View All
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
