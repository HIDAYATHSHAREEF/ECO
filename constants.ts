import { Article, Badge, Difficulty, LeaderboardUser, LearningPath, Topic, Challenge } from './types';

export const BADGES: Badge[] = [
  { id: 'b1', name: 'Eco-Reader', description: 'Read 5 articles', icon: '📖' },
  { id: 'b2', name: 'Green Scholar', description: 'Scored 100% in 3 quizzes', icon: '🧠' },
  { id: 'b3', name: 'Water Warrior', description: 'Completed all Water topic articles', icon: '💧' },
  { id: 'b4', name: 'Energy Expert', description: 'Completed all Energy topic articles', icon: '💡' },
  { id: 'b5', name: 'Streak Starter', description: 'Achieved a 3-day learning streak', icon: '🔥' }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Understanding Climate Change: The Basics',
    summary: 'A beginner-friendly introduction to the science of climate change, its causes, and its global impact.',
    topic: Topic.ClimateChange,
    difficulty: Difficulty.Beginner,
    imageUrl: 'https://picsum.photos/seed/climate1/600/400',
    content: `
      <p class="mb-4">Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">The Greenhouse Effect</h3>
      <p class="mb-4">Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures. The main greenhouse gases that are causing climate change include carbon dioxide (CO₂) and methane. These come from using gasoline for driving a car or coal for heating a building, for example.</p>
      <img src="https://picsum.photos/seed/greenhouse/500/300" alt="Greenhouse Effect Diagram" class="rounded-lg my-4 mx-auto">
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">What are the consequences?</h3>
      <p>The consequences of climate change now include, among others, intense droughts, water scarcity, severe fires, rising sea levels, flooding, melting polar ice, catastrophic storms and declining biodiversity.</p>
    `,
    quiz: [
      { id: 'q1a1', question: 'What is the main driver of climate change since the 1800s?', type: 'mcq', options: ['Volcanic eruptions', 'Human activities', 'Solar cycles', 'Natural weather patterns'], answer: 'Human activities', difficulty: 'easy' },
      { id: 'q1a2', question: 'Carbon dioxide is the most significant greenhouse gas.', type: 'true-false', answer: 'True', difficulty: 'easy' },
      { id: 'q1a3', question: 'Which of the following is NOT a consequence of climate change?', type: 'mcq', options: ['Rising sea levels', 'Increased biodiversity', 'Intense droughts', 'Melting polar ice'], answer: 'Increased biodiversity', difficulty: 'medium' }
    ]
  },
  {
    id: 'a2',
    title: 'The Problem with Plastics',
    summary: 'Dive into the world of plastic pollution, its impact on our oceans, and what we can do about it.',
    topic: Topic.Waste,
    difficulty: Difficulty.Beginner,
    imageUrl: 'https://picsum.photos/seed/plastic/600/400',
    content: `
      <p class="mb-4">Plastic is a versatile and inexpensive material, which has led to its widespread use. However, its durability means it doesn't easily break down. Most plastic items never fully disappear; they just get smaller and smaller.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Ocean Impact</h3>
      <p class="mb-4">A significant amount of plastic waste ends up in our oceans. Marine animals can mistake plastic for food or become entangled in it, leading to injury and death. These plastics break down into microplastics, which can enter the food chain and harm entire ecosystems.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Reducing Your Plastic Footprint</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li>Use reusable shopping bags.</li>
        <li>Carry a reusable water bottle and coffee cup.</li>
        <li>Avoid single-use plastics like straws and cutlery.</li>
        <li>Choose products with minimal or no plastic packaging.</li>
      </ul>
    `,
    quiz: [
      { id: 'q2a1', question: 'Plastic waste fully disappears over time.', type: 'true-false', answer: 'False', difficulty: 'easy' },
      { id: 'q2a2', question: 'What are tiny pieces of broken-down plastic called?', type: 'mcq', options: ['Nanoplastics', 'Microplastics', 'Plastic dust', 'Sea glitter'], answer: 'Microplastics', difficulty: 'medium' },
      { id: 'q2a3', question: 'Using a reusable water bottle helps reduce plastic waste.', type: 'true-false', answer: 'True', difficulty: 'easy' }
    ]
  },
  {
    id: 'a3',
    title: 'Solar Power: A Bright Solution',
    summary: 'An intermediate look at how solar panels work and their role in a sustainable energy future.',
    topic: Topic.Energy,
    difficulty: Difficulty.Intermediate,
    imageUrl: 'https://picsum.photos/seed/solar/600/400',
    content: `
      <p class="mb-4">Solar power is the conversion of energy from sunlight into electricity. This can be done directly using photovoltaics (PV), or indirectly using concentrated solar power. Photovoltaic cells convert light into an electric current using the photovoltaic effect.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">How do Photovoltaics (PV) Work?</h3>
      <p class="mb-4">Solar panels are made of many smaller units called photovoltaic cells. These cells are made of silicon, a semiconductor. When sunlight strikes the cell, it knocks electrons loose from their atoms. As the electrons flow through the cell, they generate an electric current. This is known as the Direct Current (DC). An inverter is then used to convert the DC electricity to Alternating Current (AC), which is the type of electricity used in our homes.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Advantages of Solar Energy</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li><strong>Renewable:</strong> The sun is an inexhaustible source of energy.</li>
        <li><strong>Clean:</strong> It produces no greenhouse gas emissions.</li>
        <li><strong>Reduces Electricity Bills:</strong> You generate your own power.</li>
        <li><strong>Low Maintenance:</strong> Solar panels require very little maintenance.</li>
      </ul>
    `,
    quiz: [
      { id: 'q3a1', question: 'What is the name of the effect that allows solar cells to create electricity?', type: 'mcq', options: ['Photoelectric effect', 'Solar effect', 'Photovoltaic effect', 'Current effect'], answer: 'Photovoltaic effect', difficulty: 'medium' },
      { id: 'q3a2', question: 'Solar panels generate Alternating Current (AC) directly.', type: 'true-false', answer: 'False', difficulty: 'hard' },
      { id: 'q3a3', question: 'What device converts DC electricity to AC electricity?', type: 'mcq', options: ['Converter', 'Inverter', 'Transformer', 'Rectifier'], answer: 'Inverter', difficulty: 'medium' }
    ]
  },
  {
    id: 'a4',
    title: 'Delhi\'s Air Pollution Challenge',
    summary: 'An advanced analysis of the sources and health impacts of air pollution in Delhi, India.',
    topic: Topic.ClimateChange,
    difficulty: Difficulty.Advanced,
    imageUrl: 'https://picsum.photos/seed/delhi/600/400',
    content: `
      <p class="mb-4">New Delhi, the capital of India, frequently ranks among the world's most polluted cities. The air quality index (AQI) often reaches "hazardous" levels, particularly during the winter months. This is a complex issue with multiple contributing factors.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Major Sources of Pollution</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li><strong>Vehicular Emissions:</strong> A massive number of private and commercial vehicles contribute significantly.</li>
        <li><strong>Stubble Burning:</strong> Farmers in neighboring states burn crop residue post-harvest, and the smoke travels to Delhi.</li>
        <li><strong>Industrial Pollution:</strong> Emissions from factories and power plants add to the toxic mix.</li>
        <li><strong>Construction Dust:</strong> Large-scale construction projects release particulate matter into the air.</li>
        <li><strong>Meteorological Conditions:</strong> In winter, lower temperatures and slower wind speeds trap pollutants closer to the ground, a phenomenon known as temperature inversion.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Health Impacts</h3>
      <p>Long-term exposure to high levels of air pollution can lead to severe respiratory and cardiovascular diseases, including asthma, bronchitis, heart attacks, and lung cancer. It particularly affects vulnerable populations like children and the elderly.</p>
    `,
    quiz: [
      { id: 'q4a1', question: 'What is the term for when pollutants are trapped near the ground by weather conditions?', type: 'mcq', options: ['Greenhouse Effect', 'Temperature Inversion', 'Atmospheric Pressure', 'El Niño'], answer: 'Temperature Inversion', difficulty: 'hard' },
      { id: 'q4a2', 'question': 'Stubble burning in neighboring states is a major contributor to Delhi\'s air pollution.', type: 'true-false', answer: 'True', difficulty: 'medium' },
      { id: 'q4a3', 'question': 'Which of these is NOT a primary source of air pollution in Delhi?', type: 'mcq', options: ['Vehicular emissions', 'Volcanic activity', 'Industrial pollution', 'Construction dust'], answer: 'Volcanic activity', difficulty: 'medium' }
    ]
  },
  {
    id: 'a5',
    title: 'Conserving Water: Every Drop Counts',
    summary: 'Learn practical and effective tips for saving water in your daily life.',
    topic: Topic.Water,
    difficulty: Difficulty.Beginner,
    imageUrl: 'https://picsum.photos/seed/water/600/400',
    content: `
      <p class="mb-4">Water is a precious resource, and with growing populations and climate change, water scarcity is a real threat in many parts of the world. Conserving water is a crucial step towards a sustainable future.</p>
      <h3 class="text-xl font-semibold mb-2 text-primary-dark">Tips for Saving Water at Home</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li><strong>Fix Leaks:</strong> A small drip from a faucet can waste gallons of water per day.</li>
        <li><strong>Shorter Showers:</strong> Try to limit your showers to 5 minutes.</li>
        <li><strong>Turn Off the Tap:</strong> Don't let water run while brushing your teeth or washing dishes.</li>
        <li><strong>Full Loads Only:</strong> Only run your washing machine and dishwasher when they are full.</li>
        <li><strong>Use a Broom:</strong> Sweep your driveway or sidewalk instead of hosing it down.</li>
      </ul>
      <p>By making small changes in our daily habits, we can collectively make a huge impact on water conservation.</p>
    `,
    quiz: [
        { id: 'q5a1', question: 'Leaving the tap running while brushing your teeth wastes water.', type: 'true-false', answer: 'True', difficulty: 'easy' },
        { id: 'q5a2', question: 'It is more water-efficient to run a half-full dishwasher than to wash dishes by hand.', type: 'true-false', answer: 'False', difficulty: 'medium' },
        { id: 'q5a3', question: 'What is the first recommended step for saving water at home?', type: 'mcq', options: ['Take shorter showers', 'Fix leaks', 'Install new appliances', 'Water your garden less'], answer: 'Fix leaks', difficulty: 'medium' }
    ]
  },
  {
    id: 'a6',
    title: 'What is Climate Change?',
    summary: 'A detailed look into the mechanisms of climate change, from greenhouse gases to its cascading effects on our planet.',
    topic: Topic.ClimateChange,
    difficulty: Difficulty.Beginner,
    imageUrl: 'https://picsum.photos/seed/climate2/600/400',
    tableOfContents: [
      { id: 'intro', title: 'Introduction to Climate Change' },
      { id: 'greenhouse', title: 'The Greenhouse Effect Explained' },
      { id: 'causes', title: 'Human vs. Natural Causes' },
      { id: 'effects', title: 'Key Effects on Our Planet' },
      { id: 'conclusion', title: 'Why It Matters' }
    ],
    content: `
      <h3 id="intro" class="text-2xl font-bold text-primary-dark mb-3">Introduction to Climate Change</h3>
      <p class="mb-4">Climate change is not just about warmer weather. It represents a significant and lasting change in the statistical distribution of weather patterns over periods ranging from decades to millions of years. It may be a change in average weather conditions, or in the distribution of weather around the average conditions (such as more or fewer extreme weather events). At its core, the Earth's climate is a complex, interactive system consisting of the atmosphere, land surfaces, snow and ice, oceans and other bodies of water, and living things.</p>
      
      <h3 id="greenhouse" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Greenhouse Effect Explained</h3>
      <p class="mb-4">The Earth receives energy from the sun in the form of ultraviolet, visible, and near-infrared radiation. About 26% of this incoming solar energy is reflected to space by the atmosphere and clouds, and 19% is absorbed by the atmosphere and clouds. Most of the remaining energy is absorbed at the Earth's surface. Because the Earth's surface is colder than the sun, it radiates energy at much longer wavelengths, primarily in the infrared part of the spectrum. Much of this thermal radiation emitted by the land and ocean is absorbed by the atmosphere, including clouds, and reradiated back to Earth. This is called the greenhouse effect.</p>
      <p class="mb-4">Gases in the atmosphere that absorb this radiation are called 'greenhouse gases' because they effectively trap heat, much like the glass roof of a greenhouse. Key greenhouse gases include water vapor (H₂O), carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O). While the natural greenhouse effect is essential for life on Earth (without it, the average temperature would be about -18°C), human activities have been dangerously intensifying it.</p>
      <img src="https://picsum.photos/seed/effect/500/300" alt="Diagram of the Greenhouse Effect" class="rounded-lg my-4 mx-auto">

      <h3 id="causes" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Human vs. Natural Causes</h3>
      <p class="mb-4">While the Earth's climate has always changed naturally due to factors like volcanic eruptions, shifts in ocean currents, and variations in solar radiation, the scientific consensus is that the warming we've seen since the mid-20th century is primarily due to human activity. The industrial revolution marked a turning point, with the large-scale burning of fossil fuels like coal, oil, and gas releasing massive amounts of CO₂ into the atmosphere. Deforestation has also played a critical role, as forests act as 'carbon sinks', absorbing CO₂. When they are cleared, this stored carbon is released.</p>

      <h3 id="effects" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Key Effects on Our Planet</h3>
      <p class="mb-4">The intensification of the greenhouse effect has widespread consequences:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Rising Temperatures:</strong> Global average temperatures have been steadily increasing, leading to more frequent and intense heatwaves.</li>
        <li><strong>Melting Ice and Rising Seas:</strong> Glaciers and ice sheets are melting at an accelerated rate, contributing to a rise in global sea levels. This threatens coastal communities and ecosystems.</li>
        <li><strong>Extreme Weather:</strong> Climate change is increasing the frequency and intensity of extreme weather events, including hurricanes, droughts, floods, and wildfires.</li>
        <li><strong>Ocean Acidification:</strong> As the oceans absorb more CO₂, they become more acidic. This harms marine life, particularly organisms with calcium carbonate shells like corals and shellfish.</li>
      </ul>

      <h3 id="conclusion" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Why It Matters</h3>
      <p>Understanding climate change is the first step toward addressing one of the most significant challenges of our time. Its impacts are not abstract or distant; they affect our health, our economy, our food and water security, and the planet's biodiversity. Taking action requires a global effort to reduce emissions, transition to renewable energy, and adapt to the changes already underway.</p>
    `,
    quiz: [
      { id: 'q6a1', question: 'Which gas is the most significant contributor to the human-caused greenhouse effect?', type: 'mcq', options: ['Methane', 'Water Vapor', 'Carbon Dioxide', 'Nitrous Oxide'], answer: 'Carbon Dioxide', difficulty: 'easy' },
      { id: 'q6a2', question: 'Without the natural greenhouse effect, Earth would be too hot to support life.', type: 'true-false', answer: 'False', difficulty: 'medium' },
      { id: 'q6a3', question: 'What is a "carbon sink"?', type: 'mcq', options: ['A type of fossil fuel', 'A process that releases carbon', 'A natural environment that absorbs carbon', 'An industrial machine'], answer: 'A natural environment that absorbs carbon', difficulty: 'medium' }
    ]
  },
  {
    id: 'a7',
    title: 'Plastic Pollution & Marine Life',
    summary: 'Explore the devastating journey of single-use plastics from our hands to the deepest oceans and its impact on marine ecosystems.',
    topic: Topic.Waste,
    difficulty: Difficulty.Intermediate,
    imageUrl: 'https://picsum.photos/seed/marinelife/600/400',
    tableOfContents: [
      { id: 'intro-plastic', title: 'The Age of Plastic' },
      { id: 'journey', title: 'The Journey to the Ocean' },
      { id: 'impact', title: 'Direct Impact on Marine Life' },
      { id: 'microplastics', title: 'The Invisible Threat: Microplastics' },
      { id: 'solutions', title: 'What Can Be Done?' }
    ],
    content: `
      <h3 id="intro-plastic" class="text-2xl font-bold text-primary-dark mb-3">The Age of Plastic</h3>
      <p class="mb-4">Plastic is a revolutionary material: it's cheap, durable, lightweight, and versatile. Since its mass production began in the 1950s, it has infiltrated every aspect of our lives. However, the very qualities that make it so useful also make it a persistent environmental pollutant. Much of the plastic we use is designed to be thrown away after a single use—bottles, bags, packaging, cutlery. This has created a global waste crisis.</p>
      
      <h3 id="journey" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Journey to the Ocean</h3>
      <p class="mb-4">How does a plastic bottle dropped on a city street end up in the middle of the Pacific Ocean? It's a journey facilitated by wind and water. Plastic litter is often washed into storm drains, which lead to rivers, and rivers ultimately flow into the sea. It's estimated that 80% of marine plastic pollution originates from land-based sources. Once in the ocean, currents can carry plastic debris for thousands of miles, concentrating it in large rotating systems of currents known as gyres, the most famous of which is the Great Pacific Garbage Patch.</p>

      <h3 id="impact" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Direct Impact on Marine Life</h3>
      <p class="mb-4">For marine animals, plastic waste is a deadly hazard. Many creatures are affected in two primary ways:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Entanglement:</strong> Seals, turtles, dolphins, and seabirds can become entangled in larger plastic items like fishing nets (often called 'ghost nets'), six-pack rings, and plastic bags. This can lead to injury, drowning, strangulation, and starvation.</li>
        <li><strong>Ingestion:</strong> Many animals mistake plastic for food. Sea turtles often confuse plastic bags for jellyfish, their natural prey. Seabirds mistake plastic pellets for fish eggs. Ingesting plastic can cause internal injuries, block the digestive tract, and lead to a false sense of fullness, causing the animal to starve to death.</li>
      </ul>
      <img src="https://picsum.photos/seed/turtles/500/300" alt="Sea turtle near plastic debris" class="rounded-lg my-4 mx-auto">

      <h3 id="microplastics" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Invisible Threat: Microplastics</h3>
      <p class="mb-4">Over time, sunlight and wave action break down larger plastic items into tiny fragments called microplastics (less than 5mm in size). These particles are now found everywhere, from the surface of the sea to the deepest ocean trenches. They are ingested by small organisms like plankton and shellfish, and from there, they travel up the food chain. This means that the plastic we discard can end up on our own plates in the fish we eat, with health consequences that are still not fully understood.</p>

      <h3 id="solutions" class="text-2xl font-bold text-primary-dark mb-3 mt-6">What Can Be Done?</h3>
      <p>Tackling plastic pollution requires a multi-pronged approach. Governments and corporations must improve waste management systems and innovate materials. As individuals, the most effective action is to reduce our consumption of single-use plastics. This means saying no to plastic straws, carrying reusable bags and bottles, choosing products with less packaging, and participating in local cleanup efforts. Every piece of plastic we prevent from entering the environment makes a difference.</p>
    `,
    quiz: [
      { id: 'q7a1', question: 'What is the primary source of plastic pollution in the ocean?', type: 'mcq', options: ['Spills from ships', 'Land-based sources', 'Abandoned fishing gear', 'Beach litter'], answer: 'Land-based sources', difficulty: 'medium' },
      { id: 'q7a2', question: 'Sea turtles often mistake plastic bags for what food source?', type: 'mcq', options: ['Seaweed', 'Small fish', 'Jellyfish', 'Coral'], answer: 'Jellyfish', difficulty: 'easy' },
      { id: 'q7a3', 'question': 'Microplastics are only found on the ocean surface.', type: 'true-false', answer: 'False', difficulty: 'medium' }
    ]
  },
  {
    id: 'a8',
    title: 'Carbon Capture & Direct Air Capture',
    summary: 'A deep dive into advanced technologies designed to trap CO₂ from industrial sources and even directly from the atmosphere.',
    topic: Topic.Technology,
    difficulty: Difficulty.Advanced,
    imageUrl: 'https://picsum.photos/seed/capture/600/400',
    tableOfContents: [
      { id: 'intro-ccus', title: 'What is Carbon Capture?' },
      { id: 'point-source', title: 'Point Source Capture (CCUS)' },
      { id: 'dac', title: 'Direct Air Capture (DAC)' },
      { id: 'storage', title: 'Storage and Utilization' },
      { id: 'challenges', title: 'Challenges and Future Outlook' }
    ],
    content: `
      <h3 id="intro-ccus" class="text-2xl font-bold text-primary-dark mb-3">What is Carbon Capture?</h3>
      <p class="mb-4">While transitioning to renewable energy is the ultimate goal, the reality is that some industries—like cement and steel production—are incredibly difficult to decarbonize. Carbon Capture, Utilization, and Storage (CCUS) and Direct Air Capture (DAC) are technologies designed to mitigate CO₂ emissions. They work by trapping carbon dioxide before it can enter the atmosphere and either storing it safely underground or using it to create other products.</p>
      
      <h3 id="point-source" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Point Source Capture (CCUS)</h3>
      <p class="mb-4">Point Source Capture refers to trapping CO₂ emissions directly at their source, such as a power plant or an industrial facility. This is the most mature form of carbon capture. There are three main methods:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Post-combustion:</strong> CO₂ is separated from the flue gas after the fossil fuel has been burned. This is the most common method and can be retrofitted to existing plants.</li>
        <li><strong>Pre-combustion:</strong> The fossil fuel is partially oxidized before it's burned, creating a 'syngas' of hydrogen and CO₂. The CO₂ is then captured, and the hydrogen-rich fuel is burned without producing any CO₂.</li>
        <li><strong>Oxy-fuel combustion:</strong> The fuel is burned in nearly pure oxygen instead of air. This produces a flue gas that is mostly CO₂ and water, making the CO₂ much easier to separate and capture.</li>
      </ul>

      <h3 id="dac" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Direct Air Capture (DAC)</h3>
      <p class="mb-4">Direct Air Capture is a newer, more ambitious technology that aims to remove existing CO₂ directly from the ambient air. Unlike point source capture, DAC facilities can be located anywhere in the world. They work like giant air purifiers, using large fans to pull in air and pass it over chemical filters or liquid solutions that bind specifically with CO₂. The captured CO₂ is then released from the filters through heating and collected for storage or use.</p>
      <p class="mb-4">The major challenge for DAC is that CO₂ in the atmosphere is much more dilute (around 420 parts per million) than in the flue gas of a power plant. This makes DAC a very energy-intensive and expensive process, though costs are expected to fall as the technology scales up.</p>
      <img src="https://picsum.photos/seed/dac/500/300" alt="Direct Air Capture facility" class="rounded-lg my-4 mx-auto">

      <h3 id="storage" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Storage and Utilization</h3>
      <p class="mb-4">Once captured, the CO₂ must be dealt with. The two main pathways are:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Geological Storage:</strong> The CO₂ is compressed into a liquid-like state and injected deep underground into porous rock formations, often depleted oil and gas reservoirs or saline aquifers. These sites are chosen for their geological stability to ensure the CO₂ is permanently trapped.</li>
        <li><strong>Utilization:</strong> The captured CO₂ is used as a feedstock to create valuable products. Examples include making carbonated beverages, producing synthetic fuels (by combining CO₂ with hydrogen), creating plastics, or curing concrete.</li>
      </ul>

      <h3 id="challenges" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Challenges and Future Outlook</h3>
      <p>Carbon capture technologies are not a silver bullet. They face challenges related to high costs, large energy requirements, and public concerns about the long-term safety of CO₂ storage. However, many scientists and policymakers agree that they will be a necessary tool, alongside rapid emissions reductions, to meet global climate targets and address historical emissions already in the atmosphere.</p>
    `,
    quiz: [
      { id: 'q8a1', question: 'What is the main difference between CCUS and DAC?', type: 'mcq', options: ['CCUS is cheaper than DAC', 'DAC removes CO₂ from ambient air, while CCUS captures it at the source', 'CCUS stores CO₂ underground, while DAC reuses it', 'DAC is an older technology than CCUS'], answer: 'DAC removes CO₂ from ambient air, while CCUS captures it at the source', difficulty: 'hard' },
      { id: 'q8a2', question: 'Which of the following is NOT a method of point source capture?', type: 'mcq', options: ['Post-combustion', 'Pre-combustion', 'Geo-sequestration', 'Oxy-fuel combustion'], answer: 'Geo-sequestration', difficulty: 'medium' },
      { id: 'q8a3', 'question': 'Direct Air Capture is less energy-intensive than point source capture.', type: 'true-false', answer: 'False', difficulty: 'hard' }
    ]
  },
  {
    id: 'a9',
    title: 'AI & IoT for Disaster Warning',
    summary: 'Discover how Artificial Intelligence and the Internet of Things are revolutionizing our ability to predict and respond to climate-related disasters.',
    topic: Topic.Technology,
    difficulty: Difficulty.Advanced,
    imageUrl: 'https://picsum.photos/seed/ai/600/400',
    tableOfContents: [
      { id: 'intro-tech', title: 'A New Era of Prediction' },
      { id: 'iot', title: 'The Role of IoT: The Eyes and Ears' },
      { id: 'ai', title: 'The Role of AI: The Brain' },
      { id: 'applications', title: 'Real-World Applications' },
      { id: 'future', title: 'The Future of Smart Warnings' }
    ],
    content: `
      <h3 id="intro-tech" class="text-2xl font-bold text-primary-dark mb-3">A New Era of Prediction</h3>
      <p class="mb-4">As climate change increases the frequency and intensity of extreme weather events, the need for accurate and timely disaster warnings has never been more critical. Traditional forecasting methods are improving, but the integration of Artificial Intelligence (AI) and the Internet of Things (IoT) is creating a paradigm shift, enabling us to build smarter, faster, and more localized early warning systems to save lives and protect infrastructure.</p>
      
      <h3 id="iot" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Role of IoT: The Eyes and Ears</h3>
      <p class="mb-4">The Internet of Things (IoT) refers to a vast network of interconnected physical devices—from simple sensors to complex weather stations—that collect and share data in real-time. In disaster management, these devices act as a widespread nervous system for the planet.</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>For Floods:</strong> IoT sensors placed in rivers and streams can monitor water levels, flow rates, and soil moisture content continuously.</li>
        <li><strong>For Wildfires:</strong> Sensors in forests can detect changes in temperature, humidity, and smoke, providing the earliest possible alert of a fire starting.</li>
        <li><strong>For Landslides:</strong> Devices can measure ground movement, soil stability, and rainfall intensity in vulnerable areas.</li>
        <li><strong>For Cyclones:</strong> Connected buoys at sea and drones can gather crucial data on wind speed, pressure, and sea surface temperature right from the heart of a developing storm.</li>
      </ul>

      <h3 id="ai" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Role of AI: The Brain</h3>
      <p class="mb-4">Collecting massive amounts of data from IoT sensors is only half the battle. The real magic happens when Artificial Intelligence, specifically machine learning, is used to analyze this data. AI algorithms can:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Identify Patterns:</strong> AI can sift through historical and real-time data to find complex patterns that precede a disaster, patterns that a human analyst might miss.</li>
        <li><strong>Improve Predictions:</strong> By feeding vast datasets into machine learning models, AI can create highly accurate predictive models for a storm's path, a flood's inundation area, or a wildfire's spread.</li>
        <li><strong>Automate Alerts:</strong> Once a high-risk threshold is met, AI can automatically trigger targeted alerts to the specific communities that will be affected, sending messages via mobile phones or public announcement systems.</li>
      </ul>
      <img src="https://picsum.photos/seed/network/500/300" alt="Network of sensors and data flow" class="rounded-lg my-4 mx-auto">
      
      <h3 id="applications" class="text-2xl font-bold text-primary-dark mb-3 mt-6">Real-World Applications</h3>
      <p class="mb-4">This technology is already being deployed globally. In India, AI models are used to predict floods with greater accuracy, giving authorities more time to evacuate vulnerable populations. In California, AI analyzes satellite imagery to detect new wildfires faster than human spotters can. Google's AI-powered flood forecasting initiative provides alerts to millions of people in India and Bangladesh.</p>

      <h3 id="future" class="text-2xl font-bold text-primary-dark mb-3 mt-6">The Future of Smart Warnings</h3>
      <p>The combination of AI and IoT holds the promise of creating hyper-personalized and highly effective disaster warning systems. Imagine receiving an alert on your phone that not only warns of an impending flood but also provides a safe evacuation route based on real-time traffic and flood data. While challenges around data privacy, cost, and infrastructure remain, the potential of this technology to build a more resilient world in the face of climate change is immense.</p>
    `,
    quiz: [
      { id: 'q9a1', question: 'In the context of disaster warning, what is the primary role of IoT devices?', type: 'mcq', options: ['Analyzing data', 'Sending alerts to people', 'Collecting real-time environmental data', 'Making predictions'], answer: 'Collecting real-time environmental data', difficulty: 'medium' },
      { id: 'q9a2', question: 'How does AI improve disaster prediction?', type: 'mcq', options: ['By creating more sensors', 'By identifying complex patterns in large datasets', 'By physically stopping the disaster', 'By launching weather satellites'], answer: 'By identifying complex patterns in large datasets', difficulty: 'medium' },
      { id: 'q9a3', 'question': 'AI and IoT systems can only be used for predicting floods.', type: 'true-false', answer: 'False', difficulty: 'easy' }
    ]
  },
];


export const LEADERBOARD_DATA: LeaderboardUser[] = [
    { id: 'u1', name: 'Alex Ray', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', points: 1250 },
    { id: 'u2', name: 'Jane Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', points: 1100 },
    { id: 'u3', name: 'Sam Wilson', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', points: 980 },
    { id: 'u4', name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', points: 850 },
    { id: 'u5', name: 'Ken Adams', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d', points: 720 },
]

export const FEATURED_ARTICLE_ID = 'a1';

export const LEARNING_PATHS: LearningPath[] = [
    {
        id: 'lp1',
        title: 'Climate Awareness (Basics)',
        description: 'Start your journey here. Understand the fundamental concepts of climate change and its most visible impacts on our planet.',
        icon: '🌱',
        articleIds: ['a6', 'a7']
    },
    {
        id: 'lp2',
        title: 'Future & Advanced Solutions',
        description: 'Explore the cutting-edge technologies and innovative strategies being developed to combat climate change and build a more resilient world.',
        icon: '⚡',
        articleIds: ['a8', 'a9']
    }
];

export const CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    title: 'Home Waste Audit',
    description: 'Become a waste detective in your own home! Identify major waste sources and find sustainable alternatives.',
    scenario: 'You\'ve noticed your family\'s trash bin is always full. Your challenge is to conduct a mini waste audit to understand your household\'s waste patterns and propose effective, eco-friendly changes.',
    topic: Topic.Waste,
    difficulty: Difficulty.Beginner,
    points: 150,
    icon: '🗑️',
    tasks: [
      {
        id: 'c1t1',
        question: 'In a typical household, which category of waste is often the heaviest and contributes significantly to methane emissions in landfills?',
        type: 'mcq',
        options: ['Plastic Packaging', 'Food Scraps', 'Paper and Cardboard', 'Glass Bottles'],
        answer: 'Food Scraps',
        feedback: 'Correct! Food waste is a major issue. In landfills, it decomposes without oxygen, producing methane—a potent greenhouse gas.'
      },
      {
        id: 'c1t2',
        question: 'Your audit reveals numerous single-use plastic water bottles. What is the MOST effective long-term solution to reduce this specific waste?',
        type: 'mcq',
        options: ['Reusing each bottle once before throwing it away', 'Switching to larger plastic bottles', 'Installing a water filter and using a reusable bottle', 'Crushing the bottles to save space in the recycling bin'],
        answer: 'Installing a water filter and using a reusable bottle',
        feedback: 'Excellent! This addresses the problem at its source by eliminating the need for single-use bottles altogether.'
      },
      {
        id: 'c1t3',
        question: 'You find a lot of vegetable peels and coffee grounds in the trash. The best way to divert this type of waste from the landfill is through composting.',
        type: 'true-false',
        answer: 'True',
        feedback: 'Absolutely! Composting turns food scraps into nutrient-rich soil for gardens, reducing landfill waste and methane emissions.'
      }
    ]
  },
  {
    id: 'c2',
    title: 'Energy Bill Detective',
    description: 'Analyze a mock energy bill to find "energy vampires" and cut down on electricity consumption.',
    scenario: 'Your monthly electricity bill seems high. Your mission is to analyze a provided summary of a household\'s energy usage and identify the key areas where savings can be made.',
    topic: Topic.Energy,
    difficulty: Difficulty.Intermediate,
    points: 200,
    icon: '💡',
    tasks: [
      {
        id: 'c2t1',
        question: 'The energy report shows a surprisingly high amount of electricity usage overnight when everyone is asleep. What is the most likely cause?',
        type: 'mcq',
        options: ['The refrigerator running', 'Night lights in the hallway', 'Phantom load from electronics on standby', 'The Wi-Fi router'],
        answer: 'Phantom load from electronics on standby',
        feedback: 'Correct! "Phantom load" or "vampire power" from devices like TVs, chargers, and game consoles that are turned off but still plugged in can account for up to 10% of household electricity use.'
      },
      {
        id: 'c2t2',
        question: 'Which of these common appliances typically consumes the most energy, making it a primary target for usage reduction?',
        type: 'mcq',
        options: ['Microwave Oven', 'Laptop Computer', 'Heating and Air Conditioning (HVAC) system', 'Dishwasher'],
        answer: 'Heating and Air Conditioning (HVAC) system',
        feedback: 'Exactly! HVAC systems are the single biggest energy consumers in most homes. Adjusting the thermostat by just a few degrees can lead to significant savings.'
      },
      {
        id: 'c2t3',
        question: 'Replacing old incandescent light bulbs with modern LEDs is a good way to save on lighting costs.',
        type: 'true-false',
        answer: 'True',
        feedback: 'That\'s right! LED bulbs use at least 75% less energy and last 25 times longer than incandescent lighting, making them a very smart switch.'
      }
    ]
  }
];