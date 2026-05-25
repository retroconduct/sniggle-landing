// Sniggle Landing Website Logic

// 1. Complete WBS Project Roadmap Data
const wbsData = [
    { code: '1.1.1.1', phase: 'Phase 1: Concept & Architecture', category: 'Hardware Specifications', desc: 'Define physical inputs (buttons, screen, SOS function)', timeline: 'Weeks 1–4', status: 'Completed' },
    { code: '1.1.1.2', phase: 'Phase 1: Concept & Architecture', category: 'Hardware Specifications', desc: 'Select cellular module (LTE-M / NB-IoT) and MCU', timeline: 'Weeks 1–4', status: 'Completed' },
    { code: '1.1.2.1', phase: 'Phase 1: Concept & Architecture', category: 'Industrial Design', desc: 'Draft initial product sketches', timeline: 'Weeks 1–4', status: 'Completed' },
    { code: '1.1.2.2', phase: 'Phase 1: Concept & Architecture', category: 'Industrial Design', desc: 'Create 3D CAD models and digital renders', timeline: 'Weeks 1–4', status: 'In Progress' },
    { code: '1.1.3.1', phase: 'Phase 1: Concept & Architecture', category: 'Digital Presence', desc: 'Build single-page teaser website', timeline: 'Weeks 1–4', status: 'In Progress' },
    { code: '1.1.3.2', phase: 'Phase 1: Concept & Architecture', category: 'Digital Presence', desc: 'Integrate email waitlist capture form', timeline: 'Weeks 1–4', status: 'In Progress' },
    
    { code: '1.2.1.1', phase: 'Phase 2: Proof of Concept (PoC)', category: 'Hardware Prototyping', desc: 'Wire off-the-shelf dev boards (breadboarding)', timeline: 'Weeks 5–8', status: 'Not Started' },
    { code: '1.2.1.2', phase: 'Phase 2: Proof of Concept (PoC)', category: 'Hardware Prototyping', desc: '3D-print rough, oversized plastic test cases', timeline: 'Weeks 5–8', status: 'Not Started' },
    { code: '1.2.2.1', phase: 'Phase 2: Proof of Concept (PoC)', category: 'Software & Firmware MVP', desc: 'Write basic firmware to ping cell tower', timeline: 'Weeks 5–8', status: 'Not Started' },
    { code: '1.2.2.2', phase: 'Phase 2: Proof of Concept (PoC)', category: 'Software & Firmware MVP', desc: 'Setup basic cloud routing to receive data packet', timeline: 'Weeks 5–8', status: 'Not Started' },
    { code: '1.2.3.1', phase: 'Phase 2: Proof of Concept (PoC)', category: 'Marketing Setup', desc: 'Create automated "Welcome" email sequence for waitlist', timeline: 'Weeks 5–8', status: 'Not Started' },
    
    { code: '1.3.1.1', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Custom PCB Design', desc: 'Design custom PCB layout to fit final casing dimensions', timeline: 'Weeks 9–14', status: 'Not Started' },
    { code: '1.3.1.2', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Custom PCB Design', desc: 'Manufacture EVT batch (20-50 units)', timeline: 'Weeks 9–14', status: 'Not Started' },
    { code: '1.3.2.1', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Internal Testing', desc: 'Perform cellular antenna performance tests inside enclosure', timeline: 'Weeks 9–14', status: 'Not Started' },
    { code: '1.3.2.2', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Internal Testing', desc: 'Conduct battery heat and power-draw tests', timeline: 'Weeks 9–14', status: 'Not Started' },
    { code: '1.3.3.1', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Community Building', desc: 'Transition website to "Build in Public" hub', timeline: 'Weeks 9–14', status: 'Not Started' },
    { code: '1.3.3.2', phase: 'Phase 3: Engineering Validation (EVT)', category: 'Community Building', desc: 'Publish early prototype testing content', timeline: 'Weeks 9–14', status: 'Not Started' },
    
    { code: '1.4.1.1', phase: 'Phase 4: Design Validation (DVT)', category: 'Tooling & Manufacturing Prep', desc: 'Order and cut steel injection molds for plastic casing', timeline: 'Weeks 15–20', status: 'Not Started' },
    { code: '1.4.1.2', phase: 'Phase 4: Design Validation (DVT)', category: 'Tooling & Manufacturing Prep', desc: 'Produce DVT batch (50-100 units) using final materials', timeline: 'Weeks 15–20', status: 'Not Started' },
    { code: '1.4.2.1', phase: 'Phase 4: Design Validation (DVT)', category: 'Durability & Compliance', desc: 'Execute drop, tumble, and IP-rating water resistance tests', timeline: 'Weeks 15–20', status: 'Not Started' },
    { code: '1.4.2.2', phase: 'Phase 4: Design Validation (DVT)', category: 'Durability & Compliance', desc: 'Submit devices for regulatory certification (FCC/CE)', timeline: 'Weeks 15–20', status: 'Not Started' },
    { code: '1.4.3.1', phase: 'Phase 4: Design Validation (DVT)', category: 'Audience Engagement', desc: 'Send co-design surveys to email list (color/feature voting)', timeline: 'Weeks 15–20', status: 'Not Started' },
    
    { code: '1.5.1.1', phase: 'Phase 5: PVT & Pre-Order', category: 'Factory Line Validation', desc: 'Run pilot batch (100-300 units) on actual assembly line', timeline: 'Weeks 21–24', status: 'Not Started' },
    { code: '1.5.1.2', phase: 'Phase 5: PVT & Pre-Order', category: 'Factory Line Validation', desc: 'Build and install QA testing jigs for factory workers', timeline: 'Weeks 21–24', status: 'Not Started' },
    { code: '1.5.2.1', phase: 'Phase 5: PVT & Pre-Order', category: 'Software Finalization', desc: 'Lock Release Candidate (RC) firmware for factory flashing', timeline: 'Weeks 21–24', status: 'Not Started' },
    { code: '1.5.3.1', phase: 'Phase 5: PVT & Pre-Order', category: 'Pre-Order Campaign', desc: 'Film high-quality demonstration video with PVT unit', timeline: 'Weeks 21–24', status: 'Not Started' },
    { code: '1.5.3.2', phase: 'Phase 5: PVT & Pre-Order', category: 'Pre-Order Campaign', desc: 'Launch pre-order engine (Shopify or Crowdfunding)', timeline: 'Weeks 21–24', status: 'Not Started' },
    
    { code: '1.6.1.1', phase: 'Phase 6: Mass Production', category: 'Manufacturing & Logistics', desc: 'Execute first mass commercial run (1,000+ units)', timeline: 'Weeks 25+', status: 'Not Started' },
    { code: '1.6.1.2', phase: 'Phase 6: Mass Production', category: 'Manufacturing & Logistics', desc: 'Package units and arrange freight to 3PL warehouse', timeline: 'Weeks 25+', status: 'Not Started' },
    { code: '1.6.2.1', phase: 'Phase 6: Mass Production', category: 'Software Launch', desc: 'Launch parent companion apps (iOS & Android)', timeline: 'Weeks 25+', status: 'Not Started' },
    { code: '1.6.2.2', phase: 'Phase 6: Mass Production', category: 'Software Launch', desc: 'Configure Over-The-Air (OTA) update server', timeline: 'Weeks 25+', status: 'Not Started' },
    { code: '1.6.3.1', phase: 'Phase 6: Mass Production', category: 'E-Commerce Go-Live', desc: 'Transition website to full transactional storefront', timeline: 'Weeks 25+', status: 'Not Started' },
    { code: '1.6.3.2', phase: 'Phase 6: Mass Production', category: 'E-Commerce Go-Live', desc: 'Publish digital manuals and customer support portal', timeline: 'Weeks 25+', status: 'Not Started' },
    
    { code: '1.7.1.1', phase: 'Project Management (Cross-Phase)', category: 'Supply Chain', desc: 'Source and negotiate with contract manufacturer (CM)', timeline: 'Ongoing', status: 'Ongoing' },
    { code: '1.7.1.2', phase: 'Project Management (Cross-Phase)', category: 'Supply Chain', desc: 'Source packaging suppliers', timeline: 'Ongoing', status: 'Ongoing' },
    { code: '1.7.2.1', phase: 'Project Management (Cross-Phase)', category: 'Financials', desc: 'Manage project budget and tooling costs', timeline: 'Ongoing', status: 'Ongoing' },
    { code: '1.7.2.2', phase: 'Project Management (Cross-Phase)', category: 'Financials', desc: 'Set final retail margin and pricing strategy', timeline: 'Ongoing', status: 'Ongoing' }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2. ROADMAP VIEW TOGGLE & WBS RENDERING ---
    const btnViewTimeline = document.getElementById('btn-view-timeline');
    const btnViewWbs = document.getElementById('btn-view-wbs');
    const timelineContainer = document.getElementById('timeline-container');
    const wbsContainer = document.getElementById('wbs-container');
    const wbsSearchBox = document.getElementById('wbs-search-box');
    const wbsTableBody = document.getElementById('wbs-table-body');
    const roadmapSearch = document.getElementById('roadmap-search');
    const roadmapFilter = document.getElementById('roadmap-filter');

    // Toggle roadmap view
    btnViewTimeline.addEventListener('click', () => {
        btnViewTimeline.classList.add('active');
        btnViewWbs.classList.remove('active');
        timelineContainer.style.display = 'flex';
        wbsContainer.style.display = 'none';
        wbsSearchBox.style.display = 'none';
    });

    btnViewWbs.addEventListener('click', () => {
        btnViewWbs.classList.add('active');
        btnViewTimeline.classList.remove('active');
        timelineContainer.style.display = 'none';
        wbsContainer.style.display = 'block';
        wbsSearchBox.style.display = 'flex';
        renderWbsTable();
    });

    // Render WBS table dynamically with search/filters
    function renderWbsTable() {
        const query = roadmapSearch.value.toLowerCase();
        const categoryFilter = roadmapFilter.value;
        wbsTableBody.innerHTML = '';

        const filtered = wbsData.filter(item => {
            const matchesQuery = item.desc.toLowerCase().includes(query) || 
                                 item.phase.toLowerCase().includes(query) ||
                                 item.code.includes(query);
            
            const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
            
            return matchesQuery && matchesCategory;
        });

        if (filtered.length === 0) {
            wbsTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">No tasks match your search parameters. Try typing "PCB", "firmware", "mold", etc.</td></tr>`;
            return;
        }

        filtered.forEach(item => {
            let badgeClass = 'badge-not-started';
            if (item.status === 'Completed') badgeClass = 'badge-completed';
            else if (item.status === 'In Progress') badgeClass = 'badge-in-progress';
            else if (item.status === 'Ongoing') badgeClass = 'badge-ongoing';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="wbs-code">${item.code}</td>
                <td class="wbs-phase">${item.phase}</td>
                <td><span style="font-size: 0.85rem; background: rgba(255,255,255,0.05); padding: 0.2rem 0.5rem; border-radius: 4px;">${item.category}</span></td>
                <td style="font-weight: 500;">${item.desc}</td>
                <td style="color: var(--text-muted); font-size: 0.9rem;">${item.timeline}</td>
                <td><span class="badge ${badgeClass}">${item.status}</span></td>
            `;
            wbsTableBody.appendChild(row);
        });
    }

    roadmapSearch.addEventListener('input', renderWbsTable);
    roadmapFilter.addEventListener('change', renderWbsTable);


    // --- 3. INTERACTIVE SOS & BUTTON SCREEN SIMULATOR ---
    const simSosTrigger = document.getElementById('sim-sos-trigger');
    const simDevice = document.getElementById('sim-device');
    const phoneAlertOverlay = document.getElementById('phone-alert-overlay');
    const btnCallKid = document.getElementById('btn-call-kid');
    const btnDismissAlert = document.getElementById('btn-dismiss-alert');
    const simulatorSection = document.getElementById('simulator');

    // Screen navigation
    const simPrevBtn = document.getElementById('sim-prev-btn');
    const simNextBtn = document.getElementById('sim-next-btn');
    const simDeviceScreen = document.getElementById('sim-device-screen');
    const simScreenIcon = document.getElementById('sim-screen-icon');
    const simScreenText = document.getElementById('sim-screen-text');

    const screenModes = [
        { icon: '🐌', text: 'HELLO!' },
        { icon: '🔋', text: '98% LTE' },
        { icon: '💬', text: 'SAFE' },
        { icon: '❤️', text: 'CALL ME?' }
    ];
    let currentModeIdx = 0;

    function updateScreen() {
        const mode = screenModes[currentModeIdx];
        simScreenIcon.textContent = mode.icon;
        simScreenText.textContent = mode.text;
        
        simDeviceScreen.style.color = 'var(--secondary-teal)';
        simDeviceScreen.style.textShadow = '0 0 5px var(--secondary-teal)';
        simDeviceScreen.style.boxShadow = 'inset 0 0 10px rgba(78, 204, 163, 0.4)';
    }

    simPrevBtn.addEventListener('click', () => {
        if (simulatorSection.classList.contains('simulating')) return;
        currentModeIdx = (currentModeIdx - 1 + screenModes.length) % screenModes.length;
        updateScreen();
    });

    simNextBtn.addEventListener('click', () => {
        if (simulatorSection.classList.contains('simulating')) return;
        currentModeIdx = (currentModeIdx + 1) % screenModes.length;
        updateScreen();
    });

    simSosTrigger.addEventListener('click', () => {
        // Toggle simulation active state
        simulatorSection.classList.add('simulating');
        
        // Update screen to SOS Mode
        simScreenIcon.textContent = '🚨';
        simScreenText.textContent = 'SOS SENT';
        simDeviceScreen.style.color = 'var(--primary-red)';
        simDeviceScreen.style.textShadow = '0 0 5px var(--primary-red)';
        simDeviceScreen.style.boxShadow = 'inset 0 0 10px rgba(255, 94, 98, 0.4)';
        
        // Custom device vibration feedback simulator (visual shake)
        simDevice.style.transform = 'scale(1.02)';
        setTimeout(() => { simDevice.style.transform = 'scale(1)'; }, 100);
        setTimeout(() => { simDevice.style.transform = 'scale(1.02)'; }, 200);
        setTimeout(() => { simDevice.style.transform = 'scale(1)'; }, 300);
    });

    btnCallKid.addEventListener('click', () => {
        btnCallKid.textContent = 'Voice Connection Established...';
        btnCallKid.style.backgroundColor = '#10ac84';
        
        // Simulating simple cellular ring/beep
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.frequency.setValueAtTime(520, audioCtx.currentTime); // Pitch
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime); // Soft volume
            
            // Double beep
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
            
            setTimeout(() => {
                const osc2 = audioCtx.createOscillator();
                const gainNode2 = audioCtx.createGain();
                osc2.connect(gainNode2);
                gainNode2.connect(audioCtx.destination);
                osc2.frequency.setValueAtTime(520, audioCtx.currentTime);
                gainNode2.gain.setValueAtTime(0.08, audioCtx.currentTime);
                osc2.start();
                osc2.stop(audioCtx.currentTime + 0.15);
            }, 300);
        } catch (e) {
            console.log('Audio Context not allowed or supported by browser without user interaction:', e);
        }
        
        setTimeout(() => {
            btnCallKid.textContent = 'Active Call: 0:02';
        }, 1500);
    });

    btnDismissAlert.addEventListener('click', () => {
        simulatorSection.classList.remove('simulating');
        updateScreen();
        // Reset call button
        setTimeout(() => {
            btnCallKid.textContent = 'Call Sniggle Device';
            btnCallKid.style.backgroundColor = 'var(--accent-emerald)';
        }, 400);
    });


    // --- 4. CO-DESIGN SURVEY VOTING & DYNAMIC CUSTOMIZER ---
    const colorWidget = document.getElementById('color-voting-widget');
    const colorButtons = document.querySelectorAll('.color-option-btn');
    const root = document.documentElement;

    function updateDeviceTheme(color) {
        if (color === 'mint') {
            root.style.setProperty('--device-bg', '#4ecca3');
            root.style.setProperty('--device-accent', '#ff5e62');
        } else if (color === 'coral') {
            root.style.setProperty('--device-bg', '#ff5e62');
            root.style.setProperty('--device-accent', '#ffd369');
        } else if (color === 'sky') {
            root.style.setProperty('--device-bg', '#54a0ff');
            root.style.setProperty('--device-accent', '#ffd369');
        } else {
            // Default Snail Yellow
            root.style.setProperty('--device-bg', '#ffd369');
            root.style.setProperty('--device-accent', '#ff5e62');
        }
    }

    // Check if voted already
    const savedColor = localStorage.getItem('sniggle_color_vote');
    if (savedColor) {
        colorWidget.classList.add('voted');
        const selectedBtn = document.querySelector(`.color-option-btn[data-color="${savedColor}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');
        updateDeviceTheme(savedColor);
    }

    colorButtons.forEach(btn => {
        const color = btn.getAttribute('data-color');

        // Hover to preview color
        btn.addEventListener('mouseenter', () => {
            if (localStorage.getItem('sniggle_color_vote')) return;
            updateDeviceTheme(color);
        });

        // Hover away restores color
        btn.addEventListener('mouseleave', () => {
            const activeVote = localStorage.getItem('sniggle_color_vote');
            if (activeVote) {
                updateDeviceTheme(activeVote);
            } else {
                updateDeviceTheme('default');
            }
        });

        // Click to vote and lock color
        btn.addEventListener('click', () => {
            if (localStorage.getItem('sniggle_color_vote')) return; // Allow only one vote
            
            localStorage.setItem('sniggle_color_vote', color);
            colorWidget.classList.add('voted');
            btn.classList.add('selected');
            updateDeviceTheme(color);

            // Slightly increment percentages dynamically for simulated effect
            let mintPercent = 48;
            let coralPercent = 32;
            let skyPercent = 20;

            if (color === 'mint') mintPercent += 1;
            else if (color === 'coral') coralPercent += 1;
            else if (color === 'sky') skyPercent += 1;

            document.getElementById('vote-mint').textContent = `${mintPercent}% of votes`;
            document.getElementById('vote-coral').textContent = `${coralPercent}% of votes`;
            document.getElementById('vote-sky').textContent = `${skyPercent}% of votes`;
        });
    });


    // --- 5. WAITLIST FORM ---
    const waitlistForm = document.getElementById('waitlist-form');
    const waitlistEmail = document.getElementById('waitlist-email');
    const waitlistSuccess = document.getElementById('waitlist-success');

    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = waitlistEmail.value.trim();
        
        if (email) {
            // Save to localStorage simulated db
            let list = [];
            try {
                list = JSON.parse(localStorage.getItem('sniggle_waitlist') || '[]');
            } catch (err) {}
            
            list.push({ email: email, timestamp: new Date().toISOString() });
            localStorage.setItem('sniggle_waitlist', JSON.stringify(list));

            // Show success state
            waitlistForm.style.display = 'none';
            waitlistSuccess.style.display = 'block';
        }
    });


    // --- 6. TECHNICAL SPECS ACCORDION ---
    const specsHeaders = document.querySelectorAll('.specs-header');
    
    specsHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close other items
            document.querySelectorAll('.specs-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
