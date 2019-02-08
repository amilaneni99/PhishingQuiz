var db = [
    {
        title: {
                origTitle: "Let's start with this Google Doc email.",
                correctTitle: "Correct! This is a phishing email.",
                wrongTitle: "This is actually a phishing email."
            },
        desc: {
                origDesc: "Make sure that you check link URLs by hovering or using long presses, and to explore the email addresses. Don't worry. None of the links will work – we don't want to send you anywhere funny!",
                correctDesc: "You must have spotted the look-alike URL. Be cautious about hyperlinks and attachments that you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.",
                worngDesc: "The URL looks correct, but is actually a look-alike. Be cautious about hyperlinks and attachments that you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information."
            },
        answerIndex: 0,
        answers: [
            {
                id:0,
                content: "Phishing",
                answer: true
            },
            {
                id:1,
                content: "Legitimate",
                answer: false
            }
        ],
        
    },
    {
        title:{
                origTitle: "You've received a fax!",
                correctTitle: "Correct! This is a phishing email.",
                wrongTitle: "This is actually a phishing email."
            },
        desc:{
                origDesc: "We know that you're excited, but take your time.",
                correctDesc: "Well spotted! As you saw, the sender's email domain is misspelled as 'efacks' and the link actually points to 'mailru382.co'. Phishing often tries to trick you with look-alike URLs.",
                worngDesc: "The sender's email domain is misspelled as 'efacks' and the link actually points at 'mailru382.co'. Phishing often tries to trick you with look-alike URLs."
            },
        answerIndex: 0,
        answers: [
            {
                id:0,
                content: "Phishing",
                answer: true
            },
            {
                id:1,
                content: "Legitimate",
                answer: false
            }
        ]
    }

];

export default db;