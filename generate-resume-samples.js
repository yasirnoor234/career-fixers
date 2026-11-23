const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const W = 850;
const H = 1100;
const MARGIN = 48;
const CONTENT_W = W - MARGIN * 2; // 754

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Accurate visual width estimator for proportional Latin characters
function measureTextRatio(str, isBold = false) {
  let units = 0;
  for (const ch of str) {
    if ('ilI1|.,:;!\'’` '.includes(ch)) units += 0.28;
    else if ('ftrj()[]/-–'.includes(ch)) units += 0.36;
    else if ('mwMW%&@—'.includes(ch)) units += 0.78;
    else if (ch >= 'A' && ch <= 'Z') units += 0.62;
    else units += 0.49;
  }
  return units * (isBold ? 1.07 : 1.0);
}

function wrapText(text, maxPx, fontSize, isBold = false) {
  const words = text.trim().split(/\s+/);
  const lines = [];
  let current = '';
  for (const w of words) {
    const test = current ? current + ' ' + w : w;
    if (measureTextRatio(test, isBold) * fontSize > maxPx && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function renderJustifiedLines(lines, x, startY, lineH, maxPx, font, fontSize, fill) {
  const out = [];
  let y = startY;
  for (let i = 0; i < lines.length; i++) {
    const isLast = i === lines.length - 1;
    const line = lines[i];
    const estPx = measureTextRatio(line, false) * fontSize;
    const shouldJustify = !isLast && estPx > maxPx * 0.72;
    const justifyAttr = shouldJustify ? ` textLength="${maxPx}" lengthAdjust="spacing"` : '';
    out.push(`<text x="${x}" y="${y}" font-family="${font}" font-size="${fontSize}" fill="${fill}"${justifyAttr}>${esc(line)}</text>`);
    y += lineH;
  }
  return { svg: out.join('\n'), nextY: y };
}

// Career Fixers Stamp/Logo SVG snippet placed at top of every resume page
function renderCareerFixersStamp(xCenter, yTop, pageLabel = '') {
  const badgeW = pageLabel ? 276 : 216;
  const badgeH = 36;
  const bx = xCenter - badgeW / 2;
  const by = yTop;

  return `
    <g transform="translate(${bx}, ${by})">
      <!-- Outer Stamp Pill -->
      <rect x="0" y="0" width="${badgeW}" height="${badgeH}" rx="8" fill="#FAF7F2" stroke="#C69214" stroke-width="1.3"/>
      <rect x="2.5" y="2.5" width="${badgeW - 5}" height="${badgeH - 5}" rx="6" fill="none" stroke="#0E2B4C" stroke-width="0.6" stroke-dasharray="3,2" opacity="0.45"/>
      
      <!-- Career Fixers Emblem Icon (scaled from 512x512 viewBox to 26x26) -->
      <g transform="translate(8, 5)">
        <rect width="26" height="26" rx="4.5" fill="#F5EFE6" stroke="#E2D6C3" stroke-width="0.7"/>
        <g transform="translate(13, 13) scale(0.05078)">
          <path d="M-10,-140 L140,-140 L140,-102 L106,-102 C102,-102 98,-98 98,-94 L98,-34 L132,-34 L132,4 L98,4 L98,82 C98,90 102,96 114,98 L114,106 L-10,106 L-10,98 C4,96 8,90 8,82 L8,-116 C8,-124 4,-130 -10,-132 Z" fill="#C69214"/>
          <path d="M-30,56 L38,124 C44,130 54,130 60,124 L190,-12 C196,-18 196,-26 190,-32 L176,-46 C170,-52 162,-52 156,-46 L48,64 L-16,0 C-22,-6 -30,-6 -36,0 L-48,12 C-54,18 -54,26 -48,32 Z" fill="#226EAC"/>
          <path d="M30,-80 C18,-118 -20,-144 -74,-144 C-152,-144 -214,-82 -214,-4 C-214,76 -152,138 -74,138 C-20,138 20,110 32,70 L-7,54 C-17,82 -44,100 -74,100 C-132,100 -176,52 -176,-4 C-176,-60 -132,-106 -74,-106 C-44,-106 -17,-88 -6,-60 Z" fill="#0E2B4C" stroke="#FAF7F2" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/>
          <path d="M30,-80 C18,-118 -20,-144 -74,-144 C-152,-144 -214,-82 -214,-4 C-214,76 -152,138 -74,138 C-20,138 20,110 32,70 L-7,54 C-17,82 -44,100 -74,100 C-132,100 -176,52 -176,-4 C-176,-60 -132,-106 -74,-106 C-44,-106 -17,-88 -6,-60 Z" fill="#0E2B4C"/>
        </g>
      </g>

      <!-- Brand Title & Verified Stamp Text -->
      <text x="41" y="16.5" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0E2B4C" letter-spacing="0.8">CAREER FIXERS</text>
      <text x="41" y="28" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#B58A3E" letter-spacing="0.6">VERIFIED RESUME SAMPLE</text>
      ${pageLabel ? `
        <line x1="204" y1="7" x2="204" y2="29" stroke="#D8CEBE" stroke-width="1"/>
        <text x="238" y="21.5" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0E2B4C" text-anchor="middle">${esc(pageLabel)}</text>
      ` : ''}
    </g>
  `;
}

// ============================================================================
// 1. EXECUTIVE CLASSIC (Senior Payroll Manager - doc3)
// ============================================================================
function buildExecutiveClassicPage1() {
  const green = '#294433';
  const mint = '#DDEBE2';
  const font = 'Calibri, Arial, sans-serif';
  let y = 16;
  let out = [];

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 1 OF 2'));
  y += 66;

  // Name & Contact
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="27" font-weight="bold" fill="${green}" text-anchor="middle" letter-spacing="0.8">CUSTOMER NAME</text>`);
  y += 22;
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11.5" fill="#222222" text-anchor="middle">City, Location  |  555-555-1212  |  Gmail  |  LinkedIn</text>`);
  y += 20;

  // Section Bar helper
  const addGreenBar = (title) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="26" fill="${mint}"/>`);
    out.push(`<text x="${W / 2}" y="${y + 18}" font-family="${font}" font-size="13" font-weight="bold" fill="${green}" text-anchor="middle" letter-spacing="0.6">${esc(title)}</text>`);
    y += 42;
  };

  // Title bar
  addGreenBar('SENIOR PAYROLL MANAGER');

  // Power statement
  const powerLines = wrapText(
    'Accomplished professional with extensive experience in leading complex, multi-jurisdictional payroll operations, tax compliance, payroll accounting, regulatory reporting, and internal controls.',
    CONTENT_W - 24, 11.5, true
  );
  for (const line of powerLines) {
    out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="${green}" text-anchor="middle">${esc(line)}</text>`);
    y += 17;
  }
  y += 8;

  // Summary paragraph
  const sumLines = wrapText(
    'Proven ability to oversee U.S., Canadian, and international payroll processes while maintaining accuracy, compliance, and operational continuity. Adept at strengthening SOX controls, resolving intricate payroll issues, and ensuring timely completion of regulatory obligations. Recognized for combining technical payroll knowledge, financial acumen, and disciplined process management to protect payroll integrity, mitigate compliance risk, and support reliable payroll operations across complex organizational environments. Skilled in directing end-to-end payroll activities, including tax registrations, filings, remittances, reconciliations, agency correspondence, payroll adjustments, amended returns, statutory deductions, taxable benefits, and year-end corrections.',
    CONTENT_W, 11, false
  );
  const sumRes = renderJustifiedLines(sumLines, MARGIN, y, 16, CONTENT_W, font, 11, '#1A1A1A');
  out.push(sumRes.svg);
  y = sumRes.nextY + 10;

  // Core Proficiencies
  addGreenBar('CORE PROFICIENCIES');
  const profRows = [
    'Payroll Operations Management  |  Audit Support & Documentation  |  Tax Remittances & Reconciliations',
    'Regulatory Research & Compliance  |  Payroll Data Validation  |  Federal Tax Compliance',
    'Tax Registrations & Filings  |  Multi-State Administration  |  State & Local Tax Compliance',
    'General Ledger Management  |  Amended Return Coordination  |  Vendor & Agency Coordination'
  ];
  for (const row of profRows) {
    out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11" fill="#1A1A1A" text-anchor="middle">${esc(row)}</text>`);
    y += 18;
  }
  y += 10;

  // Professional Experience
  addGreenBar('PROFESSIONAL EXPERIENCE');

  const addRole = (company, dates, title, desc, bullets) => {
    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="${green}">${esc(company)}</text>`);
    out.push(`<text x="${W - MARGIN}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="${green}" text-anchor="end">${esc(dates)}</text>`);
    y += 17;
    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="11.2" font-weight="bold" fill="${green}">${esc(title)}</text>`);
    y += 18;

    const dLines = wrapText(desc, CONTENT_W, 10.8, false);
    const dRes = renderJustifiedLines(dLines, MARGIN, y, 15.8, CONTENT_W, font, 10.8, '#1A1A1A');
    out.push(dRes.svg);
    y = dRes.nextY + 4;

    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="10.8" font-style="italic" fill="#1A1A1A">Key Accomplishments:</text>`);
    y += 17;

    for (const b of bullets) {
      const bW = CONTENT_W - 22;
      const bLines = wrapText(b, bW, 10.8, false);
      out.push(`<rect x="${MARGIN + 6}" y="${y - 7}" width="4.5" height="4.5" fill="${green}"/>`);
      const bRes = renderJustifiedLines(bLines, MARGIN + 22, y, 15.6, bW, font, 10.8, '#1A1A1A');
      out.push(bRes.svg);
      y = bRes.nextY + 4;
    }
    y += 12;
  };

  addRole(
    'Danfoss LLC, Remote',
    '2025 – Present',
    'Payroll Tax & Compliance Specialist',
    'Administer U.S. expatriate payroll taxation for inbound and outbound employees, addressing cross-border withholding and reporting requirements. Govern federal, state, local, and Canadian tax registrations, filings, remittances, reconciliations, notices, and regulatory reporting across all 50 states and Ontario. Investigate and resolve complex reciprocity, withholding, taxable-benefit, statutory-deduction, and multi-FEIN tax matters while mitigating compliance risk. Coordinate payroll tax adjustments, amended filings, agency responses, and corrective actions while maintaining audit-ready controls, records, and supporting documentation.',
    [
      'Delivered accurate and timely statutory compliance by spearheading W-2 and T4 processing, quarterly reconciliations, annual reporting, and year-end correction activities.',
      'Ensured payroll tax compliance for approximately 5,700 employees across four U.S. companies and one Canadian entity by directing adherence to applicable federal, state, local, and provincial requirements.',
      'Resolved complex payroll tax matters and implemented regulatory changes effectively by collaborating with Payroll, HR, Finance, vendors, tax advisors, and government agencies to address evolving compliance requirements.'
    ]
  );

  addRole(
    'WillowTree (TELUS Digital), Remote',
    '2023 – 2025',
    'Senior Accountant, Payroll Administration',
    'Executed bi-weekly U.S. payroll for 675+ employees aimed at providing cross-coverage for U.S. and Canadian payroll operations to ensure uninterrupted processing. Validated payroll accuracy and SOX compliance while generating month-end journal entries and reconciling payroll-related accounts. Coordinated payroll tax registrations, agency notices, quarterly filings, year-end reporting, and employer nexus assessments across applicable jurisdictions. Oversaw UKG and Ceridian Dayforce payroll platforms while contributing to the UKG-to-Workday payroll implementation and transition.',
    [
      'Ensured accurate and compliant U.S. payroll delivery for WillowTree by being entrusted by TELUS Digital to oversee payroll administration within Workday.',
      'Supported retirement and equity-plan compliance by facilitating 401(k) activities, nondiscrimination testing, Form 5500 reporting, ESPP administration, and new-hire payroll setup.'
    ]
  );

  out.push(`<text x="${W - MARGIN}" y="${H - 22}" font-family="${font}" font-size="9.5" fill="#777777" text-anchor="end">Page 1 of 2</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

function buildExecutiveClassicPage2() {
  const green = '#294433';
  const mint = '#DDEBE2';
  const font = 'Calibri, Arial, sans-serif';
  let y = 16;
  let out = [];

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 2 OF 2'));
  y += 54;

  // Page 2 Header line from doc3
  out.push(`<text x="${W - MARGIN}" y="${y}" font-family="${font}" font-size="10.5" fill="#777777" text-anchor="end">CUSTOMER NAME | Page 2</text>`);
  y += 24;

  const addGreenBar = (title) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="26" fill="${mint}"/>`);
    out.push(`<text x="${W / 2}" y="${y + 18}" font-family="${font}" font-size="13" font-weight="bold" fill="${green}" text-anchor="middle" letter-spacing="0.6">${esc(title)}</text>`);
    y += 42;
  };

  const addRole = (company, dates, title, desc, bullets) => {
    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="${green}">${esc(company)}</text>`);
    out.push(`<text x="${W - MARGIN}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="${green}" text-anchor="end">${esc(dates)}</text>`);
    y += 17;
    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="11.2" font-weight="bold" fill="${green}">${esc(title)}</text>`);
    y += 18;

    const dLines = wrapText(desc, CONTENT_W, 11, false);
    const dRes = renderJustifiedLines(dLines, MARGIN, y, 16.2, CONTENT_W, font, 11, '#1A1A1A');
    out.push(dRes.svg);
    y = dRes.nextY + 5;

    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="11" font-style="italic" fill="#1A1A1A">Key Accomplishments:</text>`);
    y += 17.5;

    for (const b of bullets) {
      const bW = CONTENT_W - 22;
      const bLines = wrapText(b, bW, 11, false);
      out.push(`<rect x="${MARGIN + 6}" y="${y - 7}" width="4.5" height="4.5" fill="${green}"/>`);
      const bRes = renderJustifiedLines(bLines, MARGIN + 22, y, 16, bW, font, 11, '#1A1A1A');
      out.push(bRes.svg);
      y = bRes.nextY + 5;
    }
    y += 16;
  };

  addRole(
    'Baker Tilly US, LLP, Remote',
    '2022 – 2023',
    'Payroll Administrator',
    'Directed international payroll activities for Australia, Canada, and the United Kingdom through ADP, while coordinating payroll inputs with third-party providers across Dubai, Chile, the Cayman Islands, Germany, and Singapore. Facilitated multi-state, bi-weekly U.S. payroll processing for approximately 6,500 employees through UKG, supporting accurate and timely payroll delivery. Acted as primary international payroll liaison, recording payroll journal entries, reconciling NAVISION accounts, and building standardized payroll control documentation.',
    [
      'Managed RRSP contributions and year-end payroll processing activities for employees across Canada, the UK, and Australia, ensuring accurate and timely completion.',
      'Automated payroll data integration by developing an Excel workbook with SUMIF formulas to extract ADP report data into summary worksheets and generate journal entry exports for Navision across UK, Canada, and Australia payrolls.'
    ]
  );

  addRole(
    'WS Tyler & Tylinter, Inc., Mentor, OH',
    '2019 – 2021',
    'Payroll Accountant',
    'Directed payroll control activities encompassing timesheet validation, employee deductions, journal entry preparation, and general ledger reconciliation aimed at maintaining accurate financial records. Coordinated union reporting, 401(k) administration, HSA processing, ACA compliance, W-2 reporting, EEO submissions, and employee-benefit reporting in collaboration with HR.',
    [
      'Established payroll tax policies, processes, and procedures to ensure compliance with multi-state requirements following the formation of Tylinter, Inc.',
      'Analyzed departmental and company-wide healthcare costs by developing Excel workbooks to support financial oversight during the transition to a self-funded health insurance program.'
    ]
  );

  // Education
  addGreenBar('EDUCATION');
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11.5" font-weight="bold" fill="#1A1A1A" text-anchor="middle">Associate of Applied Business, Accounting</text>`);
  y += 18;
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11" fill="#1A1A1A" text-anchor="middle">Lakeland Community College, Lake County, OH</text>`);
  y += 28;

  // Technical Proficiencies
  addGreenBar('TECHNICAL PROFICIENCIES');
  const techRows = [
    'UKG Pro  |  ADP Workforce Now  |  ADP SmartCompliance  |  ADP Celergo  |  Workday Payroll/HCM  |  Ceridian Dayforce',
    'OneSource Virtual  |  Paychex  |  QuickBooks Payroll  |  NAVISION  |  SAP SuccessFactors  |  Microsoft Excel'
  ];
  for (const r of techRows) {
    out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="11" fill="#1A1A1A" text-anchor="middle">${esc(r)}</text>`);
    y += 18;
  }

  out.push(`<text x="${W - MARGIN}" y="${H - 22}" font-family="${font}" font-size="9.5" fill="#777777" text-anchor="end">Page 2 of 2</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

// ============================================================================
// 2. EXECUTIVE BRANDING (Senior Product Management Professional - doc2)
// ============================================================================
function buildExecutiveBrandingPage1() {
  const navy = '#323E4F';
  const gray = '#D9D9D9';
  const serif = 'Georgia, Times New Roman, serif';
  const sans = 'Calibri, Segoe UI, Arial, sans-serif';
  let y = 12;
  let out = [];

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 1 OF 2'));
  y += 44;

  // Full-width dark slate-navy header banner
  out.push(`<rect x="0" y="${y}" width="${W}" height="72" fill="${navy}"/>`);
  out.push(`<text x="${W / 2}" y="${y + 36}" font-family="${serif}" font-size="26" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.2">FIRST &amp; LAST NAME</text>`);
  out.push(`<text x="${W / 2}" y="${y + 57}" font-family="${sans}" font-size="10.5" fill="#E2E8F0" text-anchor="middle">City, State, Postal Code  |  Phone Number  |  Email  |  LinkedIn Profile URL</text>`);
  y += 96;

  // Target Job Title
  out.push(`<text x="${W / 2}" y="${y}" font-family="${serif}" font-size="14.5" font-weight="bold" fill="#111111" text-anchor="middle" letter-spacing="0.6">SENIOR PRODUCT MANAGEMENT PROFESSIONAL</text>`);
  y += 14;

  // Gray branding statement box
  const brandLines = wrapText(
    'Accomplished and results-driven professional with extensive experience in shaping product strategy, roadmaps, priorities, requirements, and Agile execution within complex enterprise technology environments.',
    CONTENT_W - 110, 10.5, true
  );
  const boxH = brandLines.length * 15.5 + 14;
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="${boxH}" fill="${gray}"/>`);
  let by = y + 17;
  for (const l of brandLines) {
    out.push(`<text x="${W / 2}" y="${by}" font-family="${serif}" font-size="10.5" font-weight="bold" fill="#111111" text-anchor="middle">${esc(l)}</text>`);
    by += 15.5;
  }
  y += boxH + 16;

  // Summary paragraph
  const sumLines = wrapText(
    'Adept at converting customer expectations and organizational objectives into scalable digital solutions while establishing structured intake, prioritization, feature definition, and user story practices. Skilled in leveraging customer feedback, operational insights, business intelligence, and performance data to strengthen product value, usability, efficiency, and adoption. Instrumental in building alignment among executives, business partners, technical teams, and end users to advance a unified product vision and deliver measurable outcomes. Well-versed in guiding products from discovery through launch, adoption, optimization, and ongoing enhancement.',
    CONTENT_W, 10.8, false
  );
  const sumRes = renderJustifiedLines(sumLines, MARGIN, y, 16, CONTENT_W, sans, 10.8, '#1A1A1A');
  out.push(sumRes.svg);
  y = sumRes.nextY + 10;

  const addNavyBar = (title) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="26" fill="${navy}"/>`);
    out.push(`<text x="${W / 2}" y="${y + 18}" font-family="${serif}" font-size="12.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.8">${esc(title)}</text>`);
    y += 40;
  };

  // Core Proficiencies
  addNavyBar('CORE PROFICIENCIES');
  const cols = [
    ['Product Strategy & Roadmapping', 'Product Lifecycle Governance', 'Business Case Development', 'Technical Solution Design'],
    ['User Story Development', 'Workflow Optimization', 'Intake Process Design', 'Release Coordination'],
    ['Feature Specification', 'Backlog Prioritization', 'Systems Integration', 'UAT Management']
  ];
  const colW = CONTENT_W / 3;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      const cx = MARGIN + c * colW + 14;
      out.push(`<text x="${cx}" y="${y}" font-family="${sans}" font-size="10.8" fill="#1A1A1A">•  ${esc(cols[c][r])}</text>`);
    }
    y += 17.5;
  }
  y += 10;

  // Executive Experience
  addNavyBar('EXECUTIVE EXPERIENCE');

  // Company 1
  out.push(`<text x="${MARGIN}" y="${y}" font-family="${sans}" font-size="11.5" font-weight="bold" fill="#111111" letter-spacing="0.3">GM FINANCIAL – FORT WORTH, TX  |  AUG 2015 – PRESENT</text>`);
  y += 9;

  const addSubRole = (roleLine, desc, bullets) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="23" fill="${gray}"/>`);
    out.push(`<text x="${MARGIN + 8}" y="${y + 16}" font-family="${sans}" font-size="11" font-weight="bold" fill="#111111">${esc(roleLine)}</text>`);
    y += 37;

    const dLines = wrapText(desc, CONTENT_W, 10.8, false);
    const dRes = renderJustifiedLines(dLines, MARGIN, y, 15.8, CONTENT_W, sans, 10.8, '#1A1A1A');
    out.push(dRes.svg);
    y = dRes.nextY + 4;

    for (const b of bullets) {
      const bW = CONTENT_W - 22;
      const bLines = wrapText(b, bW, 10.8, false);
      out.push(`<rect x="${MARGIN + 6}" y="${y - 7}" width="4.5" height="4.5" fill="${navy}"/>`);
      const bRes = renderJustifiedLines(bLines, MARGIN + 22, y, 15.6, bW, sans, 10.8, '#1A1A1A');
      out.push(bRes.svg);
      y = bRes.nextY + 4;
    }
    y += 10;
  };

  addSubRole(
    'Business Automation – Product Manager II, Financial Services Department | Sep 2023 – Present',
    'Establish standardized M365 project and operational work framework, strengthening intake, prioritization, work tracking, and delivery practices that remain in active use. Collaborate with data architect on delivery data and reporting while directing requirements gathering, story refinement, development, testing, UAT, and stakeholder alignment across M365 environment. Connect business and technical teams by translating operational needs into product requirements for API integrations and data synchronization across siloed enterprise systems.',
    [
      'Generated monthly time savings of 200 hours and improved operational efficiency by executing automation solutions.',
      'Maintained alignment on priorities, requirements, and delivery outcomes by orchestrating stakeholder communications across technical teams, executives, and end users.',
      'Supported a scaled M365 intake and work-management solution for 3 intake professionals, 5 managers, 2 Agile coaches, a data architect, and approximately 25 developers by scaling solution.'
    ]
  );

  addSubRole(
    'Business Automation – Product Owner II, Financial Services Department | Mar 2022 – Sep 2023',
    'Served as sole product owner for the Microsoft 365 Azure DevOps (ADO) delivery board, directing roadmap development, backlog prioritization, epics, features, user stories, requirements, and delivery alignment for approximately 20 developers. Translated complex business requirements into clear backlog items for developers while facilitating recurring planning sessions, stakeholder meetings, and product demonstrations to maintain alignment with customer expectations. Led end-to-end lifecycle of over 30 departmental products annually, spanning business case development, stakeholder approval, deployment, adoption, and value realization.',
    []
  );

  out.push(`<text x="${W - MARGIN}" y="${H - 22}" font-family="${sans}" font-size="9.5" fill="#777777" text-anchor="end">Page 1 of 2</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

function buildExecutiveBrandingPage2() {
  const navy = '#323E4F';
  const gray = '#D9D9D9';
  const serif = 'Georgia, Times New Roman, serif';
  const sans = 'Calibri, Segoe UI, Arial, sans-serif';
  let y = 12;
  let out = [];

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 2 OF 2'));
  y += 44;

  // Client Name, Page 2 navy bar (exact match to doc2 line 118)
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="26" fill="${navy}"/>`);
  out.push(`<text x="${W - MARGIN - 12}" y="${y + 17.5}" font-family="${serif}" font-size="11.5" font-weight="bold" fill="#FFFFFF" text-anchor="end">Client Name, Page 2</text>`);
  y += 42;

  out.push(`<text x="${W / 2}" y="${y}" font-family="${serif}" font-size="13" font-weight="bold" fill="#111111" text-anchor="middle" letter-spacing="0.5">PROFESSIONAL EXPERIENCE, CONTINUED</text>`);
  y += 20;

  const contBullets = [
    'Accelerated approval processing and eliminated operational bottlenecks by re-engineering complex manual approval workflows into automated and transparent product capabilities.',
    'Supported Agile delivery practices across the Microsoft 365 platform by collaborating with Enterprise Agile Coach to establish delivery policies and Definitions of Done within Azure DevOps.',
    'Strengthened product adoption and minimized onboarding friction by establishing intuitive, responsive UX standards while overseeing ongoing product support, enhancements, and continuous improvement.'
  ];
  for (const b of contBullets) {
    const bW = CONTENT_W - 22;
    const bLines = wrapText(b, bW, 10.8, false);
    out.push(`<rect x="${MARGIN + 6}" y="${y - 7}" width="4.5" height="4.5" fill="${navy}"/>`);
    const bRes = renderJustifiedLines(bLines, MARGIN + 22, y, 15.8, bW, sans, 10.8, '#1A1A1A');
    out.push(bRes.svg);
    y = bRes.nextY + 4;
  }
  y += 8;

  const addSubRole = (roleLine, desc, bullets) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="23" fill="${gray}"/>`);
    out.push(`<text x="${MARGIN + 8}" y="${y + 16}" font-family="${sans}" font-size="11" font-weight="bold" fill="#111111">${esc(roleLine)}</text>`);
    y += 37;

    const dLines = wrapText(desc, CONTENT_W, 10.8, false);
    const dRes = renderJustifiedLines(dLines, MARGIN, y, 15.8, CONTENT_W, sans, 10.8, '#1A1A1A');
    out.push(dRes.svg);
    y = dRes.nextY + 4;

    for (const b of bullets) {
      const bW = CONTENT_W - 22;
      const bLines = wrapText(b, bW, 10.8, false);
      out.push(`<rect x="${MARGIN + 6}" y="${y - 7}" width="4.5" height="4.5" fill="${navy}"/>`);
      const bRes = renderJustifiedLines(bLines, MARGIN + 22, y, 15.8, bW, sans, 10.8, '#1A1A1A');
      out.push(bRes.svg);
      y = bRes.nextY + 4;
    }
    y += 12;
  };

  addSubRole(
    'SharePoint O365 System Specialist II, Information Technology Services | Aug 2015 – Mar 2022',
    'Delivered business process automation across SharePoint On-Premises, SharePoint Online, and Microsoft Teams utilizing Nintex Forms/Workflows, Power Automate, Power Apps, Power BI, and third-party applications. Advised team members and business stakeholders on technical solutions, platform capabilities, and execution approaches across Microsoft 365 and SharePoint On-Premises environments. Conducted end-user training on Microsoft 365 and SharePoint solutions, promoting adoption and utilization of business applications.',
    [
      'Optimized systems, procedures, and automation opportunities by translating business requirements into technical solutions as a primary business systems analyst for SharePoint and Microsoft 365.',
      'Supported the delivery of 100+ SharePoint Online and on-premises projects by contributing as a business analyst and developer across requirements analysis, solution design, development, testing, documentation, and deployment.'
    ]
  );

  // Company 2
  out.push(`<text x="${MARGIN}" y="${y}" font-family="${sans}" font-size="11.5" font-weight="bold" fill="#111111" letter-spacing="0.3">REALPAGE INC. – RICHARDSON, TX  |  MAR 2013 – JUL 2015</text>`);
  y += 9;

  addSubRole(
    'SharePoint Administrator/Application Support Specialist II',
    'Directed solution lifecycles from needs analysis and development through UAT, deployment, environment documentation, and creation of end-user training materials. Supported 24 business applications by resolving access requests, addressing outages, facilitating migrations, and contributing to ongoing development initiatives. Aligned business and technology requirements for internal and external customers while onboarding new users to SharePoint standards, governance practices, and effective platform utilization.',
    [
      'Enabled end-to-end business processes, workflow automation, and comprehensive document and records management by architecting and developing SharePoint solutions.',
      'Maintained secure, reliable, and standards-compliant SharePoint environment by executing security and compliance needs, platform standards, and industry best practices.'
    ]
  );

  const addNavyBar = (title) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="26" fill="${navy}"/>`);
    out.push(`<text x="${W / 2}" y="${y + 18}" font-family="${serif}" font-size="12.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.8">${esc(title)}</text>`);
    y += 40;
  };

  // Education
  addNavyBar('EDUCATION');
  out.push(`<text x="${W / 2}" y="${y}" font-family="${sans}" font-size="11" fill="#111111" text-anchor="middle"><tspan font-weight="bold">Bachelor in Engineering/Information Sciences (Focus: Database Management)</tspan>  |  DeVry University</text>`);
  y += 24;

  // Technical Proficiencies
  addNavyBar('TECHNICAL PROFICIENCIES');
  const techLines = [
    ['Power Platform:', 'Power Apps | Power Automate | Power BI'],
    ['Software & Development:', 'SDLC | Agile/Scrum | User Acceptance Testing (UAT)'],
    ['Workflow Automation:', 'Nintex Forms | Nintex Workflows | Workflow Automation | Process Automation'],
    ['Database & Reporting:', 'SQL Server | SQL Server Reporting Services (SSRS) | Database Management | Data Reporting'],
    ['Microsoft 365 & Cloud:', 'Microsoft 365 | Office 365 | SharePoint Online | SharePoint On-Premises | Microsoft Teams']
  ];
  for (const [k, v] of techLines) {
    out.push(`<text x="${W / 2}" y="${y}" font-family="${sans}" font-size="10.8" fill="#1A1A1A" text-anchor="middle"><tspan font-weight="bold">${esc(k)}</tspan> ${esc(v)}</text>`);
    y += 17.5;
  }

  out.push(`<text x="${W - MARGIN}" y="${H - 22}" font-family="${sans}" font-size="9.5" fill="#777777" text-anchor="end">Page 2 of 2</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

// ============================================================================
// 3. CLEAN PROFESSIONAL (Sales & Business Development Leader - doc1)
// ============================================================================
function buildCleanProfessionalPage1() {
  const gold = '#A68F0D';
  const gray = '#F2F2F2';
  const font = 'Calibri, Segoe UI, Arial, sans-serif';
  let y = 0;
  let out = [];

  // Top gold bar
  out.push(`<rect x="0" y="0" width="${W}" height="9" fill="${gold}"/>`);
  y = 16;

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 1 OF 2'));
  y += 60;

  // Name & Contact
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="26" font-weight="bold" fill="#000000" text-anchor="middle">CLIENT NAME</text>`);
  y += 20;
  out.push(`<text x="${W / 2}" y="${y}" font-family="${font}" font-size="10.5" font-weight="bold" fill="#111111" text-anchor="middle">Cell  •  Email  •  LinkedIn  •  City, Location</text>`);
  y += 16;

  // Section header flanked by gold lines
  const addFlankedHeader = (title) => {
    const textW = title.length * 8 + 28;
    const lineW = (CONTENT_W - textW) / 2;
    const cy = y + 9;
    out.push(`<line x1="${MARGIN}" y1="${cy}" x2="${MARGIN + lineW}" y2="${cy}" stroke="${gold}" stroke-width="1.8"/>`);
    out.push(`<text x="${W / 2}" y="${y + 13.5}" font-family="${font}" font-size="13.5" font-weight="bold" fill="#000000" text-anchor="middle">${esc(title)}</text>`);
    out.push(`<line x1="${W - MARGIN - lineW}" y1="${cy}" x2="${W - MARGIN}" y2="${cy}" stroke="${gold}" stroke-width="1.8"/>`);
    y += 26;
  };

  addFlankedHeader('Sales & Business Development Leader');

  // Shaded highlight box
  const hlLines = wrapText(
    'Accomplished professional with proven track record in accelerating revenue growth, expanding territories, strengthening channels, developing partnerships, and converting opportunities into measurable results.',
    CONTENT_W - 24, 10.6, true
  );
  const hlH = hlLines.length * 15.5 + 12;
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="${hlH}" fill="${gray}"/>`);
  let hy = y + 16;
  for (const l of hlLines) {
    out.push(`<text x="${W / 2}" y="${hy}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#111111" text-anchor="middle">${esc(l)}</text>`);
    hy += 15.5;
  }
  y += hlH + 15;

  // Summary paragraph
  const sumLines = wrapText(
    'Well-versed in establishing territories, recruiting dealer partners, growing account penetration, and increasing customer acquisition across markets. Skilled in territory planning, pipeline development, sales forecasting, strategic account leadership, customer retention, and executive relationship management policies. Adept at negotiating complex contracts, cultivating high-value partnerships, securing supplier relationships, and aligning commercial agreements with growth objectives. Remarkable efficiency in developing go-to-market strategies, supporting channel performance, and building sales organizations.',
    CONTENT_W, 10.4, false
  );
  const sumRes = renderJustifiedLines(sumLines, MARGIN, y, 14.8, CONTENT_W, font, 10.4, '#1A1A1A');
  out.push(sumRes.svg);
  y = sumRes.nextY + 6;

  // Core Proficiencies
  addFlankedHeader('Core Proficiencies');
  const profH = 72;
  const colW = (CONTENT_W - 6) / 3;
  out.push(`<rect x="${MARGIN}" y="${y}" width="${colW}" height="${profH}" fill="${gray}"/>`);
  out.push(`<rect x="${MARGIN + colW + 3}" y="${y}" width="${colW}" height="${profH}" fill="${gray}"/>`);
  out.push(`<rect x="${MARGIN + (colW + 3) * 2}" y="${y}" width="${colW}" height="${profH}" fill="${gray}"/>`);

  const pCols = [
    ['Regional Sales & Territory Leadership', 'Partner & Relationship Development', 'Strategic Account & P&L Management', 'Market Intelligence & Opportunity Analysis'],
    ['Territory & Market Expansion', 'Sales & Business Development', 'Revenue & Market Share Growth', 'Pipeline & Forecast Management'],
    ['Supplier Sourcing & Negotiation', 'Executive & C-Suite Engagement', 'Customer Acquisition & Retention', 'Contract & Partnership Negotiation']
  ];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      const cx = MARGIN + c * (colW + 3) + 8;
      out.push(`<text x="${cx}" y="${y + 16 + r * 15}" font-family="${font}" font-size="9.6" fill="#111111">•  ${esc(pCols[c][r])}</text>`);
    }
  }
  y += profH + 10;

  // Signature Accomplishments
  addFlankedHeader('Signature Accomplishments');
  const sigBullets = [
    'Exceeded sales quotas by 28–30% across Tesla, Generac, and SunPower, including a peak performance of approximately 120% of plan at Generac.',
    'Achieved 33% territory growth/26% market share at Generac, 15%→28% at SunPower, and 30% TAM growth at Tesla through field, inside-sales, and training alignment.',
    'Generated $30M+ in annual pipeline across Tesla Energy, Generac, and SunPower, while scaling Venture Solar Energy from $0 to $7.8M annualized revenue as Founder/CEO.',
    'Opened enterprise and retail channels by negotiating national contracts with Best Buy, Home Depot & Lowe’s, securing Tier-1 solar hardware, and structuring PACE/PPA agreements.',
    'Expanded Tesla’s Total Available Market by 30% through distributor leverage and training-driven recruitment, managing 40–50+ dealer/channel relationships across three territories and growing new dealers 8% quarterly.'
  ];
  for (const b of sigBullets) {
    const bW = CONTENT_W - 18;
    const bLines = wrapText(b, bW, 10.2, false);
    out.push(`<circle cx="${MARGIN + 6}" cy="${y - 3.5}" r="2.2" fill="#111111"/>`);
    const bRes = renderJustifiedLines(bLines, MARGIN + 18, y, 14.5, bW, font, 10.2, '#1A1A1A');
    out.push(bRes.svg);
    y = bRes.nextY + 2.5;
  }
  y += 6;

  // Professional Experience
  addFlankedHeader('Professional Experience');

  // Role 1: Tesla Energy
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="34" fill="${gray}"/>`);
  out.push(`<text x="${MARGIN + 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000">Tesla Energy, Pacific Northwest</text>`);
  out.push(`<text x="${W - MARGIN - 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000" text-anchor="end">Aug 2025 – Present</text>`);
  out.push(`<text x="${MARGIN + 6}" y="${y + 28.5}" font-family="${font}" font-size="10.4" font-weight="bold" fill="#000000">Senior Account Manager</text>`);
  y += 48;

  const r1Desc = wrapText(
    'Manage $18M annual strategic account portfolio across Pacific Northwest, encompassing 40+ customer and channel-partner relationships at regional-director scope. Formulate territory and account strategies to accelerate revenue growth, customer adoption, retention, and market penetration across a multi-state footprint. Assess market opportunities, competitive threats, and partner-expansion potential, converting market intelligence into actionable territory plans. Negotiate complex enterprise-level energy solutions while advancing business-development discussions and commercial opportunities. Evaluate pipeline health, sales activity, and territory performance to prioritize high-value opportunities and focus resources on growth potential.',
    CONTENT_W, 10.2, false
  );
  const r1Res = renderJustifiedLines(r1Desc, MARGIN, y, 14.5, CONTENT_W, font, 10.2, '#1A1A1A');
  out.push(r1Res.svg);
  y = r1Res.nextY + 3;

  out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="10.4" font-weight="bold" font-style="italic" fill="#000000">Key Contributions:</text>`);
  y += 15;

  const r1Bullets = [
    'Targeted 30% expansion of the commercial EV charging network within 12 months by spearheading strategic growth initiatives.',
    'Enhanced customer outcomes and streamlined execution by coordinating engineering, operations, finance, and sales leadership to resolve barriers.',
    'Strengthened strategic partnerships and commercial alignment by cultivating executive-level relationships with senior decision-makers and channel stakeholders.',
    'Supported downstream sales performance by educating business owners and dealer sales teams on positioning and communicating Tesla’s app-based energy management platform to residential customers.'
  ];
  for (const b of r1Bullets) {
    const bW = CONTENT_W - 18;
    const bLines = wrapText(b, bW, 10.2, false);
    out.push(`<circle cx="${MARGIN + 6}" cy="${y - 3.5}" r="2.2" fill="#111111"/>`);
    const bRes = renderJustifiedLines(bLines, MARGIN + 18, y, 14.5, bW, font, 10.2, '#1A1A1A');
    out.push(bRes.svg);
    y = bRes.nextY + 2.5;
  }
  y += 6;

  // Role 2 starts at bottom of Page 1 (Generac Power Systems)
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="34" fill="${gray}"/>`);
  out.push(`<text x="${MARGIN + 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000">Generac Power Systems, Pewaukee, WI</text>`);
  out.push(`<text x="${W - MARGIN - 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000" text-anchor="end">Jan 2024 – Aug 2025</text>`);
  out.push(`<text x="${MARGIN + 6}" y="${y + 28.5}" font-family="${font}" font-size="10.4" font-weight="bold" fill="#000000">Dealer Sales Manager</text>`);
  y += 48;

  const r2Desc = wrapText(
    'Directed multi-state dealer territory with end-to-end accountability for revenue growth, dealer performance, market share, and account development. Recruited new dealer partners while expanding existing channel relationships to strengthen territory coverage and growth potential. Facilitated sales training, performance coaching, business reviews, pipeline analysis, and planning across dealer organization.',
    CONTENT_W, 10.2, false
  );
  const r2Res = renderJustifiedLines(r2Desc, MARGIN, y, 14.5, CONTENT_W, font, 10.2, '#1A1A1A');
  out.push(r2Res.svg);

  // Footer
  out.push(`<line x1="${MARGIN}" y1="${H - 34}" x2="${W - MARGIN}" y2="${H - 34}" stroke="#D1D5DB" stroke-width="0.8"/>`);
  out.push(`<text x="${W - MARGIN}" y="${H - 18}" font-family="${font}" font-size="10" fill="#111111" text-anchor="end">1 | <tspan fill="#888888" letter-spacing="2">Page</tspan></text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

function buildCleanProfessionalPage2() {
  const gold = '#A68F0D';
  const gray = '#F2F2F2';
  const font = 'Calibri, Segoe UI, Arial, sans-serif';
  let y = 0;
  let out = [];

  // Top gold bar
  out.push(`<rect x="0" y="0" width="${W}" height="9" fill="${gold}"/>`);
  y = 16;

  // Stamp at top
  out.push(renderCareerFixersStamp(W / 2, y, 'PAGE 2 OF 2'));
  y += 54;

  const addFlankedHeader = (title) => {
    const textW = title.length * 8 + 28;
    const lineW = (CONTENT_W - textW) / 2;
    const cy = y + 9;
    out.push(`<line x1="${MARGIN}" y1="${cy}" x2="${MARGIN + lineW}" y2="${cy}" stroke="${gold}" stroke-width="1.8"/>`);
    out.push(`<text x="${W / 2}" y="${y + 13.5}" font-family="${font}" font-size="13.5" font-weight="bold" fill="#000000" text-anchor="middle">${esc(title)}</text>`);
    out.push(`<line x1="${W - MARGIN - lineW}" y1="${cy}" x2="${W - MARGIN}" y2="${cy}" stroke="${gold}" stroke-width="1.8"/>`);
    y += 26;
  };

  // Continuation of Generac Power Systems Key Contributions
  out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="10.4" font-weight="bold" font-style="italic" fill="#000000">Key Contributions:</text>`);
  y += 15;
  const genBullets = [
    'Achieved 33% territory sales growth and approximately 120% of plan by surpassing quarterly targets.',
    'Generated 22% territory revenue growth by executing targeted sales initiatives and deepening strategic dealer engagement.',
    'Enhanced sales productivity, lead conversion, product mix, and market penetration by developing dealer-specific business plans.',
    'Expanded market share by 26% through disciplined dealer development, competitive positioning, and targeted market strategies.',
    'Restored sales momentum in underperforming accounts by diagnosing performance gaps and implementing targeted corrective-action plans.'
  ];
  for (const b of genBullets) {
    const bW = CONTENT_W - 18;
    const bLines = wrapText(b, bW, 10.2, false);
    out.push(`<circle cx="${MARGIN + 6}" cy="${y - 3.5}" r="2.2" fill="#111111"/>`);
    const bRes = renderJustifiedLines(bLines, MARGIN + 18, y, 14.5, bW, font, 10.2, '#1A1A1A');
    out.push(bRes.svg);
    y = bRes.nextY + 2.5;
  }
  y += 8;

  const addRole = (company, dates, title, desc, bullets) => {
    out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="33" fill="${gray}"/>`);
    out.push(`<text x="${MARGIN + 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000">${esc(company)}</text>`);
    out.push(`<text x="${W - MARGIN - 6}" y="${y + 14}" font-family="${font}" font-size="10.6" font-weight="bold" fill="#000000" text-anchor="end">${esc(dates)}</text>`);
    out.push(`<text x="${MARGIN + 6}" y="${y + 28}" font-family="${font}" font-size="10.4" font-weight="bold" fill="#000000">${esc(title)}</text>`);
    y += 47;

    const dLines = wrapText(desc, CONTENT_W, 10.2, false);
    const dRes = renderJustifiedLines(dLines, MARGIN, y, 14.5, CONTENT_W, font, 10.2, '#1A1A1A');
    out.push(dRes.svg);
    y = dRes.nextY + 3;

    out.push(`<text x="${MARGIN}" y="${y}" font-family="${font}" font-size="10.4" font-weight="bold" font-style="italic" fill="#000000">Key Contributions:</text>`);
    y += 15;

    for (const b of bullets) {
      const bW = CONTENT_W - 18;
      const bLines = wrapText(b, bW, 10.2, false);
      out.push(`<circle cx="${MARGIN + 6}" cy="${y - 3.5}" r="2.2" fill="#111111"/>`);
      const bRes = renderJustifiedLines(bLines, MARGIN + 18, y, 14.5, bW, font, 10.2, '#1A1A1A');
      out.push(bRes.svg);
      y = bRes.nextY + 2.5;
    }
    y += 8;
  };

  addRole(
    'SunPower Corporation, Richmond, CA',
    'Feb 2023 – Dec 2023',
    'Regional Sales Manager',
    'Spearheaded regional sales growth initiatives encompassing account development, dealer relationships, market-share expansion, and revenue performance. Developed regional sales forecasts and performance reports to measure results, identify trends, and uncover growth opportunities. Collaborated with senior leadership to assess regional performance and establish revenue-growth priorities.',
    [
      'Extended regional market share by 15% through targeted account development and disciplined sales execution.',
      'Increased new dealer relationships by approximately 8% per quarter through focused business-development initiatives and partner acquisition.',
      'Expanded regional business opportunities and supported commercial alignment by cultivating relationships with key customers, dealers, and strategic partners.'
    ]
  );

  addRole(
    'Venture Solar Energy Inc., Roseville, CA',
    'May 2015 – Oct 2019',
    'Chief Executive Officer',
    'Founded and scaled renewable energy EPC company during the industry’s transition to the EPC model, establishing corporate strategy, sales, operations, and financial infrastructure from inception. Built and directed a seven-member sales organization comprising three inside sales professionals and four outside consultants, implementing talent development, sales processes, and training programs to support scalable growth. Orchestrated growth initiatives spanning partnerships, vendor agreements, market expansion, and M&A/portfolio opportunities to strengthen long-term enterprise value.',
    [
      'Reached $7.8M annualized revenue run rate within 12 months by institutionalizing repeatable sales and operational processes.',
      'Improved profitability by 30% through operational enhancements, cost controls, supplier negotiations, and strategic partnerships.',
      'Strengthened competitive differentiation and accelerated customer acquisition by building PACE financing and Power Purchase Agreement (PPA) programs.',
      'Secured best-in-market pricing on Tier-1 solar modules by negotiating full 40- and 53-foot container purchases from Trina, Jinko, and Canadian Solar through Northern California distributors, supporting sales expansion.'
    ]
  );

  addRole(
    'SolarCity/Tesla, San Mateo, CA',
    'Mar 2011 – Apr 2015',
    'Senior Channel Account Manager',
    'Negotiated complex, high-value agreements covering trading terms, program investments, and service arrangements with big-box retail stakeholders. Presented business reviews and performance insights to retail leadership, influencing assortment, pricing, and promotional strategies. Cultivated executive-level relationships with retail partners, strengthening account retention and expanding distribution reach.',
    [
      'Improved sales conversion by 18% through disciplined account management, risk assessment, and customer-needs analysis.',
      'Expanded account penetration and market share through business-development initiatives across multi-region retail channels.',
      'Reduced sales-cycle friction and enabled retail-partner adoption by structuring financing solutions such as PPAs, PACE, and loans.'
    ]
  );

  // Additional Experience
  addFlankedHeader('Additional Experience');
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="24" fill="${gray}"/>`);
  out.push(`<text x="${W / 2}" y="${y + 16}" font-family="${font}" font-size="10.4" fill="#111111" text-anchor="middle"><tspan font-weight="bold">Senior Manager – Logistics</tspan>  |  FedEx, Germantown, TN</text>`);
  y += 32;

  // Education
  addFlankedHeader('Education');
  out.push(`<rect x="${MARGIN}" y="${y}" width="${CONTENT_W}" height="40" fill="${gray}"/>`);
  out.push(`<text x="${W / 2}" y="${y + 16}" font-family="${font}" font-size="10.4" fill="#111111" text-anchor="middle"><tspan font-weight="bold">Business Management</tspan>  |  Diablo Valley College, Pleasant Hill, CA</text>`);
  out.push(`<text x="${W / 2}" y="${y + 33}" font-family="${font}" font-size="10.4" fill="#111111" text-anchor="middle"><tspan font-weight="bold">Graduate Certificate, Christian Studies &amp; Counseling</tspan>  |  Kingdom Men Ministries, Modesto, CA</text>`);

  // Footer
  out.push(`<line x1="${MARGIN}" y1="${H - 34}" x2="${W - MARGIN}" y2="${H - 34}" stroke="#D1D5DB" stroke-width="0.8"/>`);
  out.push(`<text x="${W - MARGIN}" y="${H - 18}" font-family="${font}" font-size="10" fill="#111111" text-anchor="end">2 | <tspan fill="#888888" letter-spacing="2">Page</tspan></text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 1.5}" height="${H * 1.5}">
    <rect width="${W}" height="${H}" fill="#FFFFFF"/>
    ${out.join('\n')}
  </svg>`;
}

async function main() {
  const dirs = [
    path.join(__dirname, 'public', 'images'),
    path.join(__dirname, 'images')
  ];
  for (const d of dirs) {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  }

  const jobs = [
    { id: 'executive-classic', p1: buildExecutiveClassicPage1(), p2: buildExecutiveClassicPage2() },
    { id: 'executive-branding', p1: buildExecutiveBrandingPage1(), p2: buildExecutiveBrandingPage2() },
    { id: 'clean-professional', p1: buildCleanProfessionalPage1(), p2: buildCleanProfessionalPage2() },
  ];

  for (const job of jobs) {
    const p1Buf = await sharp(Buffer.from(job.p1)).png({ compressionLevel: 9 }).toBuffer();
    const p2Buf = await sharp(Buffer.from(job.p2)).png({ compressionLevel: 9 }).toBuffer();

    for (const d of dirs) {
      fs.writeFileSync(path.join(d, `${job.id}-page-1.png`), p1Buf);
      fs.writeFileSync(path.join(d, `${job.id}-page-2.png`), p2Buf);
      fs.writeFileSync(path.join(d, `${job.id}.png`), p1Buf);
    }
    console.log(`✓ Generated ${job.id} (Page 1 & Page 2)`);
  }
}

main().catch(console.error);
