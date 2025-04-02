export interface Question {
  id: number;
  text: string;
  options: {
    vata: string;
    pitta: string;
    kapha: string;
  };
  category: "physical" | "mental" | "behavioral";
}

export interface DoshaScore {
  vata: number;
  pitta: number;
  kapha: number;
}

export const doshaQuestions: Question[] = [
  {
    id: 1,
    text: "How would you describe your frame and body build?",
    options: {
      vata: "Thin, lean, I find it difficult to gain weight",
      pitta: "Medium, athletic build with moderate muscle development",
      kapha: "Solid, sturdy build, I gain weight easily and lose it slowly"
    },
    category: "physical"
  },
  {
    id: 2,
    text: "Which best describes your skin?",
    options: {
      vata: "Dry, rough, or thin skin that tends to get flaky",
      pitta: "Fair, sensitive skin that flushes easily or gets rashes",
      kapha: "Thick, oily, smooth and cool to the touch"
    },
    category: "physical"
  },
  {
    id: 3,
    text: "How would you describe your hair?",
    options: {
      vata: "Dry, frizzy, or brittle",
      pitta: "Fine, early graying, or tends to thin out",
      kapha: "Thick, wavy, oily, and lustrous"
    },
    category: "physical"
  },
  {
    id: 4,
    text: "Which describes your appetite?",
    options: {
      vata: "Variable, I sometimes forget to eat or can skip meals",
      pitta: "Strong, I get irritable if I miss a meal",
      kapha: "Steady but can easily skip meals without much discomfort"
    },
    category: "physical"
  },
  {
    id: 5,
    text: "How do you respond to weather changes?",
    options: {
      vata: "I dislike cold, windy weather and prefer warmth",
      pitta: "I dislike hot, humid conditions and prefer cooler environments",
      kapha: "I dislike cold, damp conditions but don't mind heat"
    },
    category: "physical"
  },
  {
    id: 6,
    text: "How would you describe your sleep pattern?",
    options: {
      vata: "Light sleeper, tend to wake up easily, or have insomnia",
      pitta: "Moderate sleep needs, sleep is usually sound but can be disturbed",
      kapha: "Heavy sleeper, tend to sleep long and deeply"
    },
    category: "physical"
  },
  {
    id: 7,
    text: "Which best describes your speaking style?",
    options: {
      vata: "Fast, enthusiastic, sometimes I jump between topics",
      pitta: "Clear, precise, convincing and articulate",
      kapha: "Slow, methodical, thoughtful, sometimes I need time to respond"
    },
    category: "behavioral"
  },
  {
    id: 8,
    text: "How do you typically respond to stress?",
    options: {
      vata: "I get anxious, worried, or overwhelmed",
      pitta: "I become irritable, intense, or critical",
      kapha: "I withdraw, become quiet, or avoid dealing with the situation"
    },
    category: "mental"
  },
  {
    id: 9,
    text: "How would you describe your memory?",
    options: {
      vata: "Quick to learn but also quick to forget",
      pitta: "Sharp, focused, and generally reliable",
      kapha: "Slow to learn but excellent long-term retention"
    },
    category: "mental"
  },
  {
    id: 10,
    text: "What's your usual energy pattern throughout the day?",
    options: {
      vata: "Variable energy with bursts of activity followed by fatigue",
      pitta: "Strong, purposeful energy, particularly around midday",
      kapha: "Steady, sustained energy but can feel sluggish in the morning"
    },
    category: "physical"
  },
  {
    id: 11,
    text: "How would you describe your approach to work or projects?",
    options: {
      vata: "Creative, enthusiastic initially but may lose interest",
      pitta: "Focused, organized, efficient, and goal-oriented",
      kapha: "Methodical, steady, thorough, and reliable"
    },
    category: "behavioral"
  },
  {
    id: 12,
    text: "How adaptable are you to change?",
    options: {
      vata: "I change quickly and easily, sometimes too much",
      pitta: "I can adapt when necessary but prefer to be in control",
      kapha: "I prefer stability and routine, change can be difficult"
    },
    category: "behavioral"
  },
  {
    id: 13,
    text: "How do you typically respond to new situations?",
    options: {
      vata: "I get excited and enthusiastic, but may feel anxious",
      pitta: "I assess the situation and quickly develop a strategy",
      kapha: "I prefer to observe first and adapt slowly to changes"
    },
    category: "behavioral"
  },
  {
    id: 14,
    text: "Which describes your communication style?",
    options: {
      vata: "Quick, animated, sometimes jumping between topics",
      pitta: "Clear, direct, concise, and to the point",
      kapha: "Thoughtful, measured, and sometimes slow to respond"
    },
    category: "behavioral"
  },
  {
    id: 15,
    text: "How would you describe your emotional patterns?",
    options: {
      vata: "I feel emotions intensely but they change quickly",
      pitta: "I have strong emotions, particularly around issues of fairness or achievement",
      kapha: "My emotions are steady and it takes a lot to upset my equilibrium"
    },
    category: "mental"
  },
  {
    id: 16,
    text: "How is your persistence and follow-through?",
    options: {
      vata: "I start projects enthusiastically but sometimes struggle to finish them",
      pitta: "I set goals and work diligently until I achieve them",
      kapha: "Once I commit to something, I steadily work until completion"
    },
    category: "behavioral"
  },
  {
    id: 17,
    text: "What is your typical bowel movement pattern?",
    options: {
      vata: "Irregular, tends toward constipation or dry stools",
      pitta: "Regular, soft but formed stools, may tend toward loose",
      kapha: "Slow, regular, well-formed stools"
    },
    category: "physical"
  },
  {
    id: 18,
    text: "How do you handle financial matters?",
    options: {
      vata: "I tend to spend impulsively and may not always keep track",
      pitta: "I'm organized and strategic with money, often saving for specific goals",
      kapha: "I'm cautious with spending and prefer saving for security"
    },
    category: "behavioral"
  },
  {
    id: 19,
    text: "Which best describes your joints?",
    options: {
      vata: "My joints are thin, sometimes crack or feel stiff",
      pitta: "My joints are of medium size and moderately flexible",
      kapha: "My joints are large, well-lubricated, and stable"
    },
    category: "physical"
  },
  {
    id: 20,
    text: "How do you approach learning new information?",
    options: {
      vata: "I grasp concepts quickly but may forget details later",
      pitta: "I focus intensely and learn systematically through analysis",
      kapha: "I learn slowly but retain information well once learned"
    },
    category: "mental"
  }
];

export const doshaDescriptions = {
  vata: {
    title: "Vata",
    subtitle: "Air & Ether",
    description: "Vata types are characterized by qualities of air and space, embodying movement, creativity, and quickness. When in balance, Vata individuals are energetic, creative, and flexible thinkers.",
    characteristics: [
      "Creative and imaginative",
      "Quick to learn but might forget easily",
      "Thin frame with prominent joints",
      "Dry skin and hair",
      "Variable energy and appetite",
      "Tendency toward anxiety when out of balance"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Favor warm, cooked, moist, and slightly oily foods. Reduce raw foods, especially in winter. Include sweet, sour, and salty tastes.",
      lifestyle: "Maintain regular routines, especially with sleep and meals. Practice gentle, grounding exercise like yoga and walking. Keep warm and avoid excessive cold or wind.",
      herbs: "Ashwagandha, ginger, cinnamon, and cardamom can be beneficial."
    }
  },
  pitta: {
    title: "Pitta",
    subtitle: "Fire & Water",
    description: "Pitta types embody qualities of fire and water, representing transformation, intensity, and sharpness. When balanced, Pittas are intelligent, focused, and great leaders.",
    characteristics: [
      "Strong intellect and good concentration",
      "Medium build with good muscle development",
      "Fair skin that burns easily",
      "Strong digestion and appetite",
      "Natural leaders with sharp focus",
      "Tendency toward irritability when out of balance"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Favor cooling, moderately heavy foods. Include sweet, bitter, and astringent tastes. Limit spicy, salty, and sour foods.",
      lifestyle: "Avoid excessive heat and intense competition. Engage in moderate exercise during cooler times of day. Practice relaxation techniques and moonlight walks.",
      herbs: "Aloe vera, coriander, mint, and fennel can be beneficial."
    }
  },
  kapha: {
    title: "Kapha",
    subtitle: "Earth & Water",
    description: "Kapha types reflect qualities of earth and water, representing stability, nurturing, and strength. When in balance, Kaphas are compassionate, patient, and grounded individuals.",
    characteristics: [
      "Strong, sturdy build with well-developed physique",
      "Smooth, cool skin with good hydration",
      "Calm, steady temperament",
      "Strong immunity and stamina",
      "Loyal and supportive nature",
      "Tendency toward lethargy when out of balance"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor light, dry, and warm foods. Include pungent, bitter, and astringent tastes. Limit heavy, oily, and sweet foods.",
      lifestyle: "Engage in regular, stimulating exercise. Create variety and new experiences in your routine. Rise early and avoid daytime naps.",
      herbs: "Ginger, black pepper, turmeric, and honey can be beneficial."
    }
  },
  vata_pitta: {
    title: "Vata-Pitta",
    subtitle: "Air, Ether & Fire",
    description: "A Vata-Pitta constitution combines the creativity and movement of Vata with the intensity and sharpness of Pitta. This dual-dosha type benefits from balancing practices for both energies.",
    characteristics: [
      "Creative and intelligent",
      "Quick-thinking and articulate",
      "Moderate to thin build",
      "Skin tends to be dry and sensitive",
      "Variable energy with periods of intensity",
      "May fluctuate between anxiety and irritability"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Favor warm, nourishing, moderately oily foods. Reduce extremely spicy, cold, or raw foods. Include sweet, sour, and salty tastes in moderation.",
      lifestyle: "Maintain regular routines while allowing for creative expression. Balance activity with rest. Avoid extreme temperatures.",
      herbs: "Ashwagandha, brahmi, and shatavari can be beneficial."
    }
  },
  pitta_kapha: {
    title: "Pitta-Kapha",
    subtitle: "Fire, Water & Earth",
    description: "A Pitta-Kapha constitution combines the intensity and focus of Pitta with the stability and strength of Kapha. This dual-dosha type tends to have good physical stamina and mental determination.",
    characteristics: [
      "Strong physique with good muscle tone",
      "Sharp intellect with emotional stability",
      "Oily skin with good color",
      "Strong digestion and steady appetite",
      "Determined and methodical",
      "May struggle with stubbornness or intensity"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Favor light, warm foods that are not too oily. Include bitter, astringent, and pungent tastes. Moderate sweet, sour, and salty tastes.",
      lifestyle: "Regular, moderate exercise is important. Balance work with relaxation. Maintain schedules but allow for flexibility.",
      herbs: "Triphala, amalaki, and guduchi can be beneficial."
    }
  },
  vata_kapha: {
    title: "Vata-Kapha",
    subtitle: "Air, Ether & Earth, Water",
    description: "A Vata-Kapha constitution combines the creativity and movement of Vata with the stability and nurturing qualities of Kapha. This dual-dosha type often experiences fluctuations between activity and inertia.",
    characteristics: [
      "Variable physique, sometimes thin, sometimes heavier",
      "Dry yet cool skin",
      "Creative with good long-term memory",
      "Fluctuating energy levels",
      "Both adaptable and resistant to change",
      "May experience anxiety or lethargy when out of balance"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor warm, light, and mildly spiced foods. Include pungent, bitter and astringent tastes. Moderate sweet, sour, and salty tastes.",
      lifestyle: "Regular, moderate exercise is important. Find balance between routine and stimulation. Keep warm and dry.",
      herbs: "Ginger, tulsi, and punarnava can be beneficial."
    }
  },
  tri_dosha: {
    title: "Tri-Dosha",
    subtitle: "Balanced Constitution",
    description: "A Tri-Doshic constitution represents a relatively equal balance of all three doshas. This rare constitution combines qualities of Vata, Pitta, and Kapha, often resulting in good health and adaptability.",
    characteristics: [
      "Well-proportioned physique",
      "Balanced skin qualities",
      "Good mental and physical energy",
      "Adaptable to different environments",
      "Generally good health resistance",
      "Requires attention to whichever dosha becomes aggravated"
    ],
    color: "border-ayurveda-forest",
    recommendations: {
      diet: "Focus on seasonal eating and paying attention to which dosha might be becoming imbalanced. Include all six tastes in your diet.",
      lifestyle: "Adjust your routine seasonally. Practice moderate exercise regularly. Pay attention to which dosha might need more attention based on environmental factors.",
      herbs: "Triphala, ashwagandha, and holy basil are generally beneficial."
    }
  }
};

export const calculateDoshaType = (scores: DoshaScore): keyof typeof doshaDescriptions => {
  const { vata, pitta, kapha } = scores;
  const total = vata + pitta + kapha;
  
  // Calculate percentages
  const vataPercent = (vata / total) * 100;
  const pittaPercent = (pitta / total) * 100;
  const kaphaPercent = (kapha / total) * 100;
  
  // Thresholds for primary and secondary doshas
  const primaryThreshold = 40; // If a dosha is over 40%, it's primary
  const secondaryThreshold = 30; // If a dosha is over 30%, it's significant
  
  // Check for dominant single dosha (more than 50%)
  if (vataPercent >= 50) return "vata";
  if (pittaPercent >= 50) return "pitta";
  if (kaphaPercent >= 50) return "kapha";
  
  // Check for dual-dosha types
  if (vataPercent >= primaryThreshold && pittaPercent >= secondaryThreshold) return "vata_pitta";
  if (pittaPercent >= primaryThreshold && kaphaPercent >= secondaryThreshold) return "pitta_kapha";
  if (vataPercent >= primaryThreshold && kaphaPercent >= secondaryThreshold) return "vata_kapha";
  if (pittaPercent >= primaryThreshold && vataPercent >= secondaryThreshold) return "vata_pitta";
  if (kaphaPercent >= primaryThreshold && pittaPercent >= secondaryThreshold) return "pitta_kapha";
  if (kaphaPercent >= primaryThreshold && vataPercent >= secondaryThreshold) return "vata_kapha";
  
  // If all three are relatively balanced
  return "tri_dosha";
};
