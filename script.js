const quotes = {
    happy: [
        "Your happiness is my favorite thing to witness.",
        "Seeing you happy makes my whole world brighter.",
        "You're a walking sunshine, and I love soaking it in.",
        "Your smile is my safe place, my happiest moment.",
        "Every time you laugh, my heart feels at home.",
        "Happiness looks so perfect on you, Aimi.",
        "You deserve every drop of joy life has to offer.",
        "If happiness had a name, it would be yours.",
        "Keep shining, my love. The world is better with your light.",
        "Your joy is my greatest gift. Never stop smiling."
    ],
    angry: [
        "Take a deep breath, love. I'm here, always.",
        "No matter what happens, I’ll stand by you.",
        "Even in anger, you are someone I love endlessly.",
        "I know things feel heavy, but you're never alone in this.",
        "Anger will pass, but my love for you never will.",
        "You don’t have to carry this alone. I’ve got you.",
        "Talk to me when you’re ready. I’m here, no matter what.",
        "You're stronger than whatever is upsetting you.",
        "Even storms end, and so will this moment. I'll hold your hand through it.",
        "You’re allowed to feel angry. Just remember, I'm always on your side."
    ],
    sad: [
        "I wish I could take away every sadness from you.",
        "You don’t have to be strong all the time. Let me be strong for you.",
        "Whatever you're feeling, I am here. Always.",
        "Even on your lowest days, my love for you never fades.",
        "You are not alone, Aimi. I am right here beside you.",
        "It’s okay to feel sad. I will hold you through it.",
        "If you need a hand, take mine. I’ll never let go.",
        "Even the darkest night will pass, and I’ll be here to see the sunrise with you.",
        "You’re precious, even in moments of sadness.",
        "No matter how heavy your heart feels, mine will always hold yours."
    ],
    unmotivated: [
        "You are capable of more than you realize.",
        "Even if today is slow, you are still moving forward.",
        "You don’t have to be perfect, you just have to keep going.",
        "Progress is progress, no matter how small.",
        "You’ve overcome so much, and I believe in you completely.",
        "Even on days you doubt yourself, I never do.",
        "You are enough, exactly as you are.",
        "Take a break, but never give up. You’re doing amazing.",
        "You have a heart full of strength. Trust in yourself.",
        "Whatever you need, I am here to support you, always."
    ],
    tired: [
        "Rest, my love. You deserve it.",
        "You don’t have to do everything at once. Breathe.",
        "You are doing your best, and that is enough.",
        "Sleep peacefully knowing I’m always here for you.",
        "Even on tired days, you are loved beyond words.",
        "Close your eyes, relax, and let your heart rest.",
        "You don’t have to be strong every second. Just be you.",
        "You’re allowed to slow down, to pause, to just exist.",
        "No matter how tired you feel, my love for you never fades.",
        "Take it easy, love. The world can wait while you rest."
    ]
};

function showQuote(feeling) {
    let randomIndex = Math.floor(Math.random() * quotes[feeling].length);
    let quote = quotes[feeling][randomIndex];
    document.getElementById("quoteDisplay").innerHTML = `<p>${quote}</p>`;
}
