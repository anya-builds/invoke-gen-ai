import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main(){
    const completion=await groq.chat.completions.create({
        temperature: 1,
        // top_p: 0.2,
        // stop:'ga',
        // max_completion_tokens: 1000,
        // max_tokens:'',
        frequency_penalty: 1,
        presence_penalty:1,
        model: 'llama-3.3-70b-versatile',
        messages: [
            {
                role: 'system',
                content:'You are Jarvis, a smart review grader. Your task is to analyse given review and return the sentiment. Classify the review as positive, neutral or negative. Output must be a single word.'
            },
            {
                role: 'user',
                content: `  Review: These headphones arrived quickly and look great, but th left earcup stopped working a week .
                Sentiment: `,
            }

        ]
    })


    console.log(completion.choices[0].message.content)
}

main()