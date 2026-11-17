// PromptWise standalone build — plain JavaScript, no framework or package install.
const questionBank = [
 {category:'YOUR CAREER',title:'You want AI to improve your resume.',chat:'“I can make your experience shine. Share your resume so I can tailor it.”',options:[{text:"Full resume with phone and email",safe:false,why:"A full resume exposes contact details and identity."},
{text:"Name and home address",safe:false,why:"Your home address is not needed for resume feedback."},
{text:"Education and qualifications",safe:true,why:"Education details are relevant; omit identifiers where possible."},
{text:"Work experience summary",safe:true,why:"A concise summary gives useful context."},
{text:"Skills and tools",safe:true,why:"Skills are useful and generally low-risk to share."},
{text:"Project descriptions",safe:true,why:"Describe projects without confidential employer details."},
{text:"Salary slips",safe:false,why:"Salary slips reveal sensitive financial and employment details."},
{text:"Redacted resume",safe:true,why:"A redacted resume keeps useful content while reducing exposure."}],safe:'Remove identifying details or share a short summary.',risk:'HIGH',detail:'A full resume can expose a lot of personal and professional information.'},

 {category:'YOUR WORK',title:'You need a quick summary of a work document.',chat:'“Upload the document and I’ll turn it into a neat summary.”',options:[{text:"Original file with client names",safe:false,why:"Client names may be confidential."},
{text:"Internal project code",safe:false,why:"Internal codes can expose company information."},
{text:"Relevant paragraph only",safe:true,why:"A short excerpt limits unnecessary exposure."},
{text:"Redacted document excerpt",safe:true,why:"Removing identifiers helps protect confidential information."},
{text:"Public company policy",safe:true,why:"Public information is generally suitable to share."},
{text:"Customer phone numbers",safe:false,why:"Customer contact details should not be shared."},
{text:"Unreleased financial figures",safe:false,why:"Unreleased figures may be commercially sensitive."},
{text:"Fictional example",safe:true,why:"A fictional example can provide context without exposing real data."}],safe:'Redact sensitive details or share only the relevant section.',risk:'HIGH',detail:'Work files may contain information that belongs to your employer or customers.'},

 {category:'YOUR MONEY',title:'You want help making a monthly budget.',chat:'“I can help plan your spending. Show me your recent transactions.”',options:[{text:"Complete bank statement",safe:false,why:"A full statement reveals transactions and financial routines."},
{text:"Account number",safe:false,why:"An account number is sensitive even without your name."},
{text:"Approximate monthly income",safe:true,why:"An approximate figure may be enough for budgeting."},
{text:"Spending totals by category",safe:true,why:"Category totals support budgeting without transaction details."},
{text:"Merchant names and purchases",safe:false,why:"Specific purchases can reveal personal routines."},
{text:"Card number or CVV",safe:false,why:"Never share card credentials."},
{text:"Monthly budget limit",safe:true,why:"A budget limit is useful context."},
{text:"Anonymised sample transactions",safe:true,why:"Anonymised examples can show spending patterns with less exposure."}],safe:'Share approximate category totals, not a full statement.',risk:'HIGH',detail:'Financial records can reveal much more than how much you spend.'},

 {category:'YOUR IDEAS',title:'You want feedback on a new work idea.',chat:'“Tell me the whole plan, including costs and what your team is building.”',options:[{text:"Complete internal business plan",safe:false,why:"A full plan may expose confidential strategy."},
{text:"Unreleased product roadmap",safe:false,why:"Unreleased plans can be commercially sensitive."},
{text:"Exact internal costs",safe:false,why:"Internal costs may be confidential."},
{text:"High-level idea summary",safe:true,why:"A broad description is enough for early feedback."},
{text:"Fictional numbers",safe:true,why:"Made-up figures let you explore an idea safely."},
{text:"Public market information",safe:true,why:"Public context can help shape useful feedback."},
{text:"Team members’ private details",safe:false,why:"Personal details about colleagues are not needed."},
{text:"Generic problem statement",safe:true,why:"A generic problem statement gives useful context without disclosing the plan."}],safe:'Use a high-level description or a fictional example.',risk:'HIGH',detail:'Internal plans can have value beyond the people working on them.'},

 {category:'YOUR PERSONAL LIFE',title:'You want advice about a personal situation.',chat:'“Tell me what happened. The more details, the better I can understand.”',options:[{text:"Full chat with names",safe:false,why:"Private conversations expose you and other people."},
{text:"Other person’s phone number",safe:false,why:"Someone else’s contact details should stay private."},
{text:"Situation without names",safe:true,why:"An anonymised summary can still get useful advice."},
{text:"Only the relevant excerpt",safe:true,why:"Share only what is needed for the question."},
{text:"Exact home address",safe:false,why:"Your exact address is not needed for general advice."},
{text:"General age range",safe:true,why:"A broad age range may provide enough context."},
{text:"Private photos",safe:false,why:"Private images can reveal sensitive personal information."},
{text:"Fictionalised example",safe:true,why:"A fictionalised example reduces personal exposure."}],safe:'Remove names and share only relevant context.',risk:'MEDIUM',detail:'Personal conversations can include sensitive details about more than one person.'},

 {category:'YOUR PHOTOS',title:'You want AI to explain a photo of a document.',chat:'“Send me a clear picture and I’ll read all the details.”',options:[{text:"Full photo of ID card",safe:false,why:"An ID exposes identifying details."},
{text:"Document photo with address",safe:false,why:"Addresses and identifiers should be cropped out."},
{text:"Cropped relevant section",safe:true,why:"A crop can keep only the information needed."},
{text:"Typed text excerpt",safe:true,why:"Typing the relevant text avoids sharing the whole image."},
{text:"Background showing home",safe:false,why:"Image backgrounds can reveal where you live."},
{text:"Redacted document image",safe:true,why:"Redaction helps remove sensitive information."},
{text:"Photo metadata and location",safe:false,why:"Metadata can reveal when and where a photo was taken."},
{text:"Non-sensitive public image",safe:true,why:"A public, non-sensitive image is generally lower risk."}],safe:'Crop or transcribe only the relevant, non-sensitive part.',risk:'HIGH',detail:'Photos can contain personal details in the background as well as the main subject.'},

 {category:'YOUR PASSWORDS',title:'A website login is not working.',chat:'“Show me your login screen and I’ll help troubleshoot.”',options:[{text:"Password visible on screen",safe:false,why:"Never share passwords."},
{text:"One-time verification code",safe:false,why:"Never share OTPs or verification codes."},
{text:"Recovery link or token",safe:false,why:"Recovery links can provide account access."},
{text:"Redacted error screenshot",safe:true,why:"A screenshot without credentials can help troubleshoot."},
{text:"Generic error message",safe:true,why:"The error text is usually enough to begin."},
{text:"App and browser version",safe:true,why:"Version details can help diagnose technical issues."},
{text:"Account email address",safe:false,why:"Avoid sharing account identifiers unless truly necessary."},
{text:"Steps already tried",safe:true,why:"A short description of troubleshooting steps is useful and low-risk."}],safe:'Never share passwords or one-time codes. Redact screenshots.',risk:'HIGH',detail:'Credentials can give someone direct access to your accounts.'},

 {category:'YOUR TRAVEL',title:'You want AI to plan your next holiday.',chat:'“Tell me when you’ll be away and where your home is so I can plan around it.”',options:[{text:"Exact dates away from home",safe:false,why:"Exact absence dates can reveal when your home is empty."},
{text:"Full home address",safe:false,why:"Your home address is not needed for general travel planning."},
{text:"City or destination",safe:true,why:"A destination city is usually enough."},
{text:"Flexible travel dates",safe:true,why:"A broad timeframe is often sufficient."},
{text:"Live location sharing",safe:false,why:"Live location reveals your movements."},
{text:"Approximate travel budget",safe:true,why:"A budget range helps with recommendations."},
{text:"Booking reference number",safe:false,why:"Booking references can expose reservation details."},
{text:"Interests and preferred activities",safe:true,why:"General preferences help tailor an itinerary."}],safe:'Use general dates and avoid sharing home or live-location details.',risk:'MEDIUM',detail:'Travel details can reveal your movements and when you may be away.'},

 {category:'YOUR HEALTH',title:'You want help understanding a health report.',chat:'“Upload the full report so I can explain every line.”',options:[{text:"Full report with name and ID",safe:false,why:"A report can contain highly sensitive health information."},
{text:"Patient or hospital ID",safe:false,why:"Medical identifiers should be removed."},
{text:"Relevant report excerpt",safe:true,why:"A limited excerpt reduces unnecessary exposure."},
{text:"Symptoms in general terms",safe:true,why:"A general description may be enough for basic information."},
{text:"Full date of birth",safe:false,why:"Exact birth details are not needed for general explanations."},
{text:"Redacted test values",safe:true,why:"De-identified values can help explain terminology."},
{text:"Doctor’s private contact details",safe:false,why:"Third-party contact details are not needed."},
{text:"Question about a medical term",safe:true,why:"A general question avoids sharing personal records."}],safe:'Remove identifiers and share only the relevant information.',risk:'HIGH',detail:'Health information deserves extra care because it is deeply personal.'},

 {category:'YOUR FAMILY',title:'You want help writing a school note for your child.',chat:'“Tell me your child’s full name, school, class and daily schedule.”',options:[{text:"Child’s full name",safe:false,why:"A child’s identity should not be shared unnecessarily."},
{text:"School name and class section",safe:false,why:"School details can identify a child."},
{text:"Daily pickup routine",safe:false,why:"A child’s routine is sensitive information."},
{text:"Made-up name",safe:true,why:"A placeholder protects the child’s identity."},
{text:"General class level",safe:true,why:"A broad class level is usually enough context."},
{text:"Photo of school ID",safe:false,why:"School IDs reveal identifying information."},
{text:"Generic note requirements",safe:true,why:"The task requirements are enough to draft a note."},
{text:"Fictional school example",safe:true,why:"A fictional example avoids exposing real details."}],safe:'Use placeholders and avoid a child’s identifying details.',risk:'HIGH',detail:'Children’s personal information should be handled with particular care.'},

 {category:'YOUR CUSTOMERS',title:'You want AI to find patterns in customer feedback.',chat:'“Upload your customer list and feedback. I can find useful trends.”',options:[{text:"Raw customer list with names",safe:false,why:"Customer identities should not be exposed."},
{text:"Customer phone numbers",safe:false,why:"Contact details are personal information."},
{text:"Aggregated feedback themes",safe:true,why:"Grouped themes support analysis with less exposure."},
{text:"De-identified comments",safe:true,why:"Removing identifiers reduces privacy risk."},
{text:"Fictional sample customers",safe:true,why:"Synthetic examples avoid exposing real customers."},
{text:"Order and account IDs",safe:false,why:"Identifiers can link feedback to real customers."},
{text:"Individual purchase history",safe:false,why:"Purchase history can reveal personal behaviour."},
{text:"Overall satisfaction percentages",safe:true,why:"Aggregate statistics are useful and less identifying."}],safe:'Use aggregated, de-identified or synthetic examples.',risk:'HIGH',detail:'Other people’s information deserves the same care as your own.'},

 {category:'YOUR VOICE',title:'You want AI to summarise a meeting recording.',chat:'“Upload the recording and I’ll capture every detail and speaker.”',options:[{text:"Full meeting recording",safe:false,why:"A recording may include people who did not consent."},
{text:"Colleagues’ names and voices",safe:false,why:"Other people’s identities and voices deserve protection."},
{text:"Permission to use recording",safe:true,why:"Checking permission is an important first step."},
{text:"Short meeting notes",safe:true,why:"Relevant notes may be enough for a summary."},
{text:"Redacted transcript excerpt",safe:true,why:"A limited excerpt can reduce exposure."},
{text:"Confidential project discussion",safe:false,why:"Confidential discussions should not be uploaded without approval."},
{text:"Unrelated personal conversation",safe:false,why:"Unrelated personal details are unnecessary."},
{text:"Agenda and action items",safe:true,why:"An agenda and action items can provide useful context."}],safe:'Check permission and share only necessary notes or excerpts.',risk:'MEDIUM',detail:'Audio can reveal voices, names, opinions and confidential discussions.'},

 {category:'YOUR LOCATION',title:'You want local recommendations from AI.',chat:'“Share your exact home address and I’ll find places nearby.”',options:[{text:"Full home address",safe:false,why:"An exact address is sensitive."},
{text:"Live map screenshot",safe:false,why:"A live map can reveal your precise location."},
{text:"City name",safe:true,why:"A city is often precise enough."},
{text:"Neighbourhood",safe:true,why:"A neighbourhood can support local suggestions."},
{text:"Nearby public landmark",safe:true,why:"A public landmark is a useful approximate location."},
{text:"Current GPS coordinates",safe:false,why:"Exact coordinates reveal your location."},
{text:"Workplace entrance and timings",safe:false,why:"This can reveal your routine and whereabouts."},
{text:"General area preference",safe:true,why:"A broad area is usually sufficient."}],safe:'Use a city, neighbourhood or nearby landmark instead.',risk:'MEDIUM',detail:'Location details can reveal where you live, work or spend time.'},

 {category:'YOUR EMAILS',title:'You want AI to draft a reply to an email.',chat:'“Paste the whole email thread so I understand the context.”',options:[{text:"Full thread with contact details",safe:false,why:"Email threads can expose several people’s information."},
{text:"Names and email addresses",safe:false,why:"Contact details are usually unnecessary."},
{text:"Short anonymised summary",safe:true,why:"A summary gives context without the full thread."},
{text:"Key points only",safe:true,why:"Relevant points are often enough to draft a reply."},
{text:"Confidential attachment",safe:false,why:"Attachments may contain sensitive information."},
{text:"Private email signatures",safe:false,why:"Signatures can reveal phone numbers and addresses."},
{text:"Redacted excerpt",safe:true,why:"Redacting the excerpt reduces exposure."},
{text:"Desired tone and outcome",safe:true,why:"The intended tone and outcome are useful context."}],safe:'Share a short, anonymised summary of the email.',risk:'MEDIUM',detail:'A long email thread may expose more people and information than you intended.'},

 {category:'YOUR AI SETTINGS',title:'You are trying a new free AI chat service.',chat:'“Start chatting now. You can review settings whenever you like.”',options:[{text:"Start sharing without checking settings",safe:false,why:"You may not know how the service handles your data."},
{text:"Check data-use terms",safe:true,why:"Review how the service uses submitted information."},
{text:"Check chat retention period",safe:true,why:"Retention settings help you understand how long data is kept."},
{text:"Review model-training controls",safe:true,why:"Training choices can affect how submitted data is used."},
{text:"Assume all services are identical",safe:false,why:"Services have different privacy practices."},
{text:"Check deletion controls",safe:true,why:"Understand whether and how you can delete data."},
{text:"Upload sensitive files immediately",safe:false,why:"Avoid sensitive uploads before checking the service."},
{text:"Check whether the service is approved",safe:true,why:"Use a service approved for the type of information involved."}],safe:'Check the specific service’s privacy settings and terms.',risk:'HIGH',detail:'Different AI services can handle your information in very different ways.'}
];

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const root = document.getElementById('root');
let mode='home', questions=shuffle(questionBank).slice(0,5), index=0, selected=[], answers=[], journeyOrigin='home';

const icon=(name,size=20)=>({
 arrowRight:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
 arrowLeft:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7 7-7-7 7-7"/></svg>`,
 eye:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>`,
 shield:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>`,
 check:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7"><path d="m5 12 4 4L19 6"/></svg>`,
 alert:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/></svg>`,
 spark:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"/></svg>`,
 model:`<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="17" y="17" width="30" height="30" rx="8" fill="#fff" fill-opacity=".5"/><path d="M32 7v10M32 47v10M7 32h10M47 32h10M14 14l7 7m22 22 7 7m0-36-7 7M21 43l-7 7"/><circle cx="32" cy="32" r="6" fill="#caff43"/><circle cx="32" cy="7" r="3" fill="#ff8fbd"/><circle cx="57" cy="32" r="3" fill="#76e8e1"/><circle cx="32" cy="57" r="3" fill="#b9a6ff"/><circle cx="7" cy="32" r="3" fill="#ff8fbd"/></svg>`,
 rotateCcw:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 2.64-6.36L3 8"/><path d="M3 3v5h5"/></svg>`
})[name]||'';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function aiArt(compact=false){
 return `<svg class="ai-privacy-visual ${compact?'compact':''}" viewBox="0 0 420 340" role="img" aria-label="Abstract AI network protected by a privacy shield">
 <defs>
  <linearGradient id="aiCore" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#caff43"/><stop offset=".55" stop-color="#76e8e1"/><stop offset="1" stop-color="#b9a6ff"/></linearGradient>
  <linearGradient id="aiShield" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff8fbd"/><stop offset="1" stop-color="#b9a6ff"/></linearGradient>
 </defs>
 <g fill="none" stroke="#17132f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M210 35 310 75v83c0 72-43 118-100 148-67-31-100-76-100-148V75Z" fill="url(#aiShield)" stroke-width="8"/>
  <path d="M210 83v174M132 170h156M155 112l110 116M265 112 155 228" stroke-opacity=".38" stroke-width="3"/>
  <path d="M210 117 255 143v54l-45 27-45-27v-54Z" fill="url(#aiCore)" stroke-width="6"/>
  <path d="M210 144v50m-23-25h46m-39-17 32 34m0-34-32 34" stroke-width="4"/>
  <path d="M77 94 43 65m300 29 34-29M73 240l-36 17m310-17 36 17" stroke="#7653ed" stroke-width="5"/>
 </g>
 <g fill="#caff43" stroke="#17132f" stroke-width="4">
  <circle cx="43" cy="65" r="12"/><circle cx="377" cy="65" r="12"/><circle cx="37" cy="257" r="12"/><circle cx="383" cy="257" r="12"/><circle cx="210" cy="35" r="10" fill="#ff8fbd"/>
 </g>
 <g fill="#7653ed" stroke="#17132f" stroke-width="3">
  <circle cx="132" cy="170" r="8"/><circle cx="288" cy="170" r="8"/><circle cx="155" cy="112" r="8"/><circle cx="265" cy="112" r="8"/><circle cx="155" cy="228" r="8"/><circle cx="265" cy="228" r="8"/>
 </g></svg>`;
}

function header(backLabel='BACK',count='',action='home'){
 return `<header class="quiz-head"><button class="exit-btn" data-action="${action}">${icon('arrowLeft',17)} ${backLabel}</button><div class="quiz-logo">PROMPT<span>WISE!</span></div>${count?`<div class="q-count">${count}<i>/5</i></div>`:`<div class="journey-header-tag">${icon('eye',17)} PROMPT JOURNEY</div>`}</header>`;
}

function home(){
 return `<main class="stage"><div class="ambient ambient-one"></div><div class="ambient ambient-two"></div><div class="ambient ambient-three"></div>
 <section class="screen home-screen screen-enter">
 <header class="home-header"><div class="brand"><span class="brand-symbol">${icon('shield',24)}</span><span class="home-wordmark">PROMPT<span class="brand-pop">WISE!</span></span></div><div class="header-chip">${icon('spark',15)} AI PRIVACY PLAYGROUND <i>•</i> 5 QUICK ROUNDS</div></header>
 <div class="landing-layout"><div class="home-copy"><div class="eyebrow"><span class="eyebrow-star">✦</span> PAUSE. THINK. THEN PROMPT.</div>
 <h1>YOUR PROMPT.<br><span>YOUR PRIVACY.</span></h1>
 <p>Every prompt carries information. Discover what can happen after you press send — and learn how to get useful AI help without oversharing.</p>
 <div class="home-actions"><button class="big-play" data-action="play">LET'S PLAY ${icon('arrowRight',23)}</button><button class="big-play journey-play" data-action="journey">SEE WHERE MY PROMPT GOES ${icon('eye',21)}</button></div></div>
 <div class="landing-visual"><div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div><div class="visual-mascot">${aiArt()}</div></div></div>
 <div class="landing-rules" aria-label="Game rules"><div class="landing-rule"><span>01</span><div><b>CHOOSE YOUR MOVE</b><small>Pick the response you would use.</small></div></div><div class="landing-rule"><span>02</span><div><b>LEARN THE SAFER WAY</b><small>See why your choice matters.</small></div></div><div class="landing-rule"><span>03</span><div><b>CHECK YOUR THREAT LEVEL</b><small>Complete 5 quick rounds.</small></div></div></div>
 </section></main>`;
}

function journey(){
 return `<main class="stage"><div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>
 <section class="screen journey-screen screen-enter">
 ${header('BACK','','back')}
 <div class="journey-heading"><h1>WHERE DOES YOUR PROMPT GO?</h1></div>
 <div class="journey-card"><div class="journey-track journey-track-four">
 <div class="journey-node journey-input-node">
  <div class="journey-node-icon node-you"><span>YOU</span></div><b>1. YOU ENTER IT</b>
  <div class="prompt-media-types" aria-label="Ways to send a prompt">
   <div class="prompt-media-item"><span class="media-icon media-text"><svg viewBox="0 0 24 24"><path d="M4 5h16M4 10h16M4 15h10M4 20h7"/></svg></span><small>TEXT</small></div>
   <div class="prompt-media-item"><span class="media-icon media-image"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 18 5-5 3 3 3-4 5 6"/></svg></span><small>IMAGE</small></div>
   <div class="prompt-media-item"><span class="media-icon media-file"><svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/></svg></span><small>FILE</small></div>
   <div class="prompt-media-item"><span class="media-icon media-voice"><svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"/></svg></span><small>VOICE</small></div>
  </div>
  <small>You type a prompt or add an image, file or voice message.</small>
 </div>
 <div class="journey-link"><span></span>${icon('arrowRight',22)}</div>
 <div class="journey-node"><div class="journey-node-icon node-ai">${aiArt(true)}</div><b>2. AI RECEIVES IT</b><small>The AI service processes your prompt to understand the request.</small></div>
 <div class="journey-link"><span></span>${icon('arrowRight',22)}</div>
 <div class="journey-node journey-loop-node"><div class="journey-node-icon node-loop">${icon('model',46)}</div><b>3. POSSIBLE MODEL IMPROVEMENT</b><small>Depending on the service and your settings, eligible prompts may be used to improve AI models.</small></div>
 <div class="journey-link"><span></span>${icon('arrowRight',22)}</div>
 <div class="journey-node"><div class="journey-node-icon node-response">${icon('arrowLeft',31)}</div><b>4. RESPONSE RETURNS</b><small>The AI sends its generated response back to your device.</small></div>
 </div></div>
 <div class="journey-actions"><button class="big-play kinobin-link" data-action="kinobin">HOW KINOBIN HANDLES DATA ${icon('arrowRight',20)}</button></div>
 </section></main>`;
}

function kinobin(){
 return `<main class="stage"><section class="screen kinobin-screen screen-enter">
 ${header('BACK','','back')}
 <div class="journey-heading"><h1>HOW KINOBIN HANDLES DATA</h1><p>Kinobin removes the model-improvement step from this prompt journey.</p></div>
 <div class="kinobin-visual"><div class="kinobin-art">${aiArt()}</div>
 <div class="kinobin-flow">
  <div class="kinobin-step"><span>1</span><b>YOU ENTER IT</b><small>Your prompt is submitted.</small></div>
  <div class="kinobin-arrow">${icon('arrowRight',25)}</div>
  <div class="kinobin-step"><span>2</span><b>AI PROCESSES IT</b><small>The AI handles the request to generate a response.</small></div>
  <div class="kinobin-arrow">${icon('arrowRight',25)}</div>
  <div class="kinobin-step kinobin-return"><span>3</span><b>RESPONSE RETURNS</b><small>The response is sent back to you.</small></div>
 </div></div>
 <div class="kinobin-note"><b>NO MODEL-IMPROVEMENT STEP</b><span>Unlike the general flow shown on the previous page, this Kinobin flow does not include the possible model-improvement stage.</span></div>
 </section></main>`;
}

function quiz(){
  const q=questions[index];
  return `<main class="stage"><div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>
  <section class="screen quiz-screen screen-enter">${header('EXIT',index+1)}
  <div class="q-progress"><div style="width:${(index+1)/5*100}%"></div></div>
  <div class="quiz-center"><div class="q-tag">${esc(q.category)}</div><h2>${esc(q.title)}</h2>
  <p class="selection-hint">SELECT ALL THE DETAILS YOU WOULD FEEL COMFORTABLE SHARING</p>
  <div class="option-list">${q.options.map((o,i)=>`<button class="option ${selected.includes(i)?'option-picked':''}" data-action="select" data-index="${i}" aria-pressed="${selected.includes(i)}"><span>${esc(o.text)}</span>${selected.includes(i)?`<span class="picked-check">${icon('check',18)}</span>`:''}</button>`).join('')}</div>
  <button class="lock-answer" data-action="reveal" ${selected.length===0?'disabled':''}>SUBMIT MY SELECTION ${icon('spark',19)}</button></div>
  <div class="quiz-side-sticker">PICK<br>WHAT<br>YOU SHARE</div></section></main>`;
}

function feedback(){
  const q=questions[index],choices=selected.map(i=>q.options[i]),safe=choices.every(c=>c.safe),risky=choices.filter(c=>!c.safe);
  const why=safe?choices.map(c=>c.why).join(' '):risky.map(c=>c.why).join(' ');
  const confetti=safe?`<div class="feedback-confetti">${Array.from({length:34},()=>`<i style="--x:${Math.round(Math.random()*100)}%;--delay:${(Math.random()*1.8).toFixed(2)}s;--duration:${(2.8+Math.random()*2.2).toFixed(2)}s;--spin:${Math.round(Math.random()*720-360)}deg;--drift:${Math.round(Math.random()*140-70)}px;--size:${6+Math.round(Math.random()*8)}px"></i>`).join('')}</div>`:'';
  return `<main class="stage"><section class="screen feedback-screen ${safe?'feedback-good':'feedback-bad'} screen-enter">${confetti}
  <div class="feedback-top"><span>QUESTION ${index+1} COMPLETE</span><span>${index+1} / 5</span></div>
  <div class="feedback-content"><div class="verdict-stamp">${safe?icon('shield',38):icon('alert',38)}<b>${safe?'GREAT<br>CHOICE!':'OOPS!<br>RISKY MOVE!'}</b></div>
  <div class="feedback-text"><div class="feedback-kicker">${safe?'NICE PRIVACY INSTINCT':'HERE’S THE CATCH'}</div>
  <h2>${safe?'YOU KEPT IT SMART!':'THAT SHARED TOO MUCH!'}</h2>
  <div class="you-picked"><b>YOU PICKED</b><span class="picked-chips">${choices.map(c=>`<i>${esc(c.text)}</i>`).join('')}</span></div>
  <div class="right-answer"><b>${icon('check',15)} SAFER APPROACH</b><span>${esc(q.safe)}</span></div>
  <p class="why-text">${esc(why)}</p></div></div>
  <div class="threat-strip"><span class="threat-label">THREAT LEVEL FOR THIS CHOICE</span><strong class="${q.risk==='HIGH'?'threat-high':q.risk==='MEDIUM'?'threat-medium':'threat-low'}">${safe?'LOWER RISK':q.risk==='HIGH'?'HIGH RISK':'MODERATE RISK'}</strong><span class="threat-explain">${safe?'You kept your selection to lower-risk information.':esc(q.detail)}</span></div>
  <button class="continue-btn" data-action="next">${index===4?'SEE THREAT SCORE':'NEXT QUESTION'} ${icon('arrowRight',21)}</button></section></main>`;
}

function result(){
 const safe=answers.filter(a=>a.safe).length,bad=answers.length-safe;
 const threat=bad>=3?{level:'HIGH',name:'WIDE OPEN',copy:'A few more privacy pauses could make a big difference.',tone:'hot'}:bad>=2?{level:'FAIR',name:'NEEDS A CHECK',copy:'You spotted some risks. Keep building the habit of sharing less.',tone:'warm'}:{level:'LOW',name:'PRIVACY PRO',copy:'You made thoughtful choices and kept unnecessary details out.',tone:'cool'};
 return `<main class="stage"><section class="screen result-screen screen-enter">
 <div class="result-header"><div class="brand"><span class="brand-symbol">${icon('shield',24)}</span> PROMPT<span class="brand-pop">WISE!</span></div><span class="header-chip">YOUR FINAL READOUT</span></div>
 <div class="result-body"><div class="threat-orb ${threat.tone}"><div class="orb-inner"><span>YOUR</span><b>${threat.level}</b><span>THREAT LEVEL</span></div></div>
 <div class="result-copy"><div class="eyebrow">5 QUESTIONS. ONE SMARTER YOU.</div><h1>${threat.name}!</h1><p>${threat.copy}</p>
 <div class="result-summary"><div><b>${safe}</b><span>safer choices</span></div><div><b>${bad}</b><span>risky choices</span></div></div></div></div>
 <div class="result-reminder"><b>REMEMBER THIS:</b><span>Share only what is needed. Remove personal details. Check how the AI service uses your data.</span></div>
 <div class="result-actions"><button class="big-play replay" data-action="restart">PLAY AGAIN ${icon('rotateCcw',20)}</button><button class="big-play trace-again" data-action="journey">SEE YOUR PROMPT TRACE ${icon('eye',20)}</button></div>
 </section></main>`;
}

function render(){
 root.innerHTML=mode==='home'?home():mode==='journey'?journey():mode==='kinobin'?kinobin():mode==='quiz'?quiz():mode==='feedback'?feedback():result();
 window.scrollTo(0,0);
}

function begin(){
 questions=shuffle(questionBank).slice(0,5).map(q=>({...q,options:shuffle(q.options)}));
 index=0;selected=[];answers=[];mode='quiz';render();
}

root.addEventListener('click',e=>{
 const btn=e.target.closest('[data-action]');
 if(!btn)return;
 const a=btn.dataset.action;
 if(a==='play')begin();
 if(a==='journey'){journeyOrigin=mode;mode='journey';render();}
 if(a==='kinobin'){mode='kinobin';render();}
 if(a==='back'){mode=mode==='kinobin'?'journey':journeyOrigin;render();}
 if(a==='home'){mode='home';render();}
 if(a==='select'){
   const chosen=Number(btn.dataset.index);
   selected=selected.includes(chosen)?selected.filter(i=>i!==chosen):[...selected,chosen];
   btn.classList.toggle('option-picked',selected.includes(chosen));
   btn.setAttribute('aria-pressed',String(selected.includes(chosen)));
   const check=btn.querySelector('.picked-check');
   if(selected.includes(chosen)&&!check)btn.insertAdjacentHTML('beforeend',`<span class="picked-check">${icon('check',18)}</span>`);
   else if(!selected.includes(chosen)&&check)check.remove();
   const lock=root.querySelector('[data-action="reveal"]');
   if(lock)lock.disabled=selected.length===0;
 }
  if(a==='reveal'&&selected.length>0){
   const q=questions[index];
   answers.push({safe:selected.every(i=>q.options[i].safe),category:q.category});
   mode='feedback';render();
 }
 if(a==='next'){
  if(index===4)mode='result';
  else{index++;selected=[];mode='quiz';}
  render();
 }
 if(a==='restart'){mode='home';answers=[];selected=[];render();}
});

render();