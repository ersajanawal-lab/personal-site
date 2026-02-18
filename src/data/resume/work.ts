/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Raman Construction Pty Ltd ',
    position: 'Deputy Project Manager ',
    url: 'https://ramanconstruction.com',
    startDate: '2016-12-30',
    endDate: '2025-05-14',
    summary: `Project: Construction of Dharahara, Sundhara, Kathmandu, Nepal',
'Client: Government of Nepal, Ministry of Urban Development',
'Project cost: NPR 3.48 billion (approx. AUD $36.5 million)',
`,
    highlights: [
      'Managed and coordinated on-site construction activities at the field level to ensure alignment with project specifications, technical documentation, and contractual requirements.',
      'Planned and monitored project schedules, budgets, and resource allocations to meet deliverables and cost objectives.',
      'Oversaw WHS compliance and implemented safety management systems to promote zero-incident work environments.',
      'Collaborated with multidisciplinary teams, subcontractors, consultants, and clients to facilitate progress meetings and resolve both technical and contractual issues.',
    ],
  },
  {
    name: 'Smile ID',
    position: 'VP Engineering & Head of AI',
    url: 'https://usesmileid.com',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: `Smile Identity provides ML-powered identity verification APIs used by banks, fintechs, and
    telcos across Africa. Promoted from Director to VP Engineering to VP Engineering & Head of AI within one year,
    leading teams building APIs that now process hundreds of millions of identity checks.`,
    highlights: [
      'Owned engineering org design, headcount planning, and hiring across backend and ML teams, growing to 20+ engineers.',
      'Transformed engineering velocity from weekly releases to continuous deployment, migrating to TypeScript, adding tests in CI, and leading ceremonies.',
      'Re-architected inference APIs on AWS Lambda, scaling from 1,000 to 1M+ users per day and cutting job time from 30+ seconds to 7 seconds.',
      'Built computer vision pipelines for liveness detection certification.',
      'Pitched, designed, and shipped a fraud detection product using 1-N facial recognition with embeddings and vector search.',
    ],
  },
  {
    name: 'Skeptical Investments',
    position: 'Co-founder',
    url: 'http://skepticalinvestments.biz',
    startDate: '2017-04-01',
    summary: `Skeptical Investments is a micro-VC fund focused on early-stage technical founders,
    with investments in ML, infrastructure, and space startups.`,
    highlights: [
      'Created InstaSafe, a tool that automates YC-standard investment documents.',
      'Advise portfolio founders on ML, infrastructure, hiring, and fundraising strategy.',
    ],
  },
  {
    name: 'Arthena',
    position: 'Co-founder & CTO',
    url: 'https://arthena.com',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    summary: `Arthena was a quantitative art investment platform backed by <a href='https://www.anthemis.com/'>Anthemis</a>,
    <a href='https://foundationcapital.com'>Foundation Capital</a>, and <a href='https://ycombinator.com'>Y Combinator</a>.
    Built Arthena from idea to acquisition by Masterworks in 2023.`,
    highlights: [
      'Co-founded Arthena and led technical strategy; sat on board and led fundraising, including debt financing for a 9-figure investment vehicle in the auction guarantee market.',
      'Built and managed a cross-functional team of 20 engineers, data scientists, and analysts.',
      'Built data pipelines, quantitative research tools, and visualization systems to scale investment research and augment analyst decision-making.',
      'Developed valuation models on irregularly-sampled time series using graph embeddings, probabilistic forecasting with calibrated prediction intervals, and online learning with walk-forward validation.',
      'Designed micro-service architecture for data collection, feature engineering, backtesting, and reporting.',
    ],
  },
  {
    name: 'Matroid',
    position: 'Co-founder',
    url: 'https://matroid.com',
    startDate: '2015-09-01',
    endDate: '2016-06-01',
    summary: `Matroid is a computer vision platform for creating and deploying detectors, now funded by
    <a href='https://www.nea.com'>NEA</a> and <a href='https://www.accel.com'>Accel</a>. I co-founded
    the company and built the initial product through our first fundraise.`,
    highlights: [
      'Defined company vision and product strategy.',
      'Architected and built the initial detector platform for identifying objects, events, and patterns in video.',
      'Led technical fundraising efforts for seed round.',
    ],
  },
  {
    name: 'Planet',
    position: 'Avionics Intern',
    url: 'https://planet.com',
    startDate: '2014-06-01',
    endDate: '2015-01-01',
    highlights: [
      'Built models for cloud detection and optimal exposure using Earth albedo, incorporating sensor physics, astronomy, and optics.',
      'Worked with optics and camera hardware; developed satellite software in C++ and Python (OpenCV, NumPy, SciPy).',
    ],
  },
  {
    name: 'Planetary Resources',
    position: 'Avionics Intern',
    url: 'https://www.planetaryresources.com',
    startDate: '2014-01-01',
    endDate: '2014-05-01',
    highlights: [
      'Developed simulations for Attitude Determination and Control Subsystem.',
      'Built flight hardware for Electrical Power Subsystem in clean room; performed thermal vacuum chamber testing.',
    ],
  },
  {
    name: 'Facebook',
    position: 'Software Engineering Intern',
    url: 'https://facebook.com',
    startDate: '2013-06-01',
    endDate: '2013-09-01',
    highlights: [
      "Worked on Facebook's first GPU compute team, benchmarking NVIDIA GPUs for initial data center deployment.",
      'Built log collection software and performed statistical analysis in Python, Hack, R, and HQL.',
    ],
  },
  {
    name: 'UB Nanosatellite Program',
    position: 'Program Manager',
    url: 'https://ubnl.space/',
    startDate: '2011-06-01',
    endDate: '2012-05-01',
    summary:
      'Led a 60-person student team through the satellite development lifecycle for the AFRL University Nanosatellite Program.',
    highlights: [
      'Co-authored grant proposal to design and build a multi-spectral imaging satellite.',
      'Established budget and schedule from initial concept through design reviews.',
      'Designed ADCS and worked on sensor integration.',
    ],
  },
];

export default work;
