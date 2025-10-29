import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main(){
    const completion=await groq.chat.completions.create({
        temperature: 1,
        // top_p: 0.2,
        // stop:'ga',
        // max_completion_tokens: 1000,
        // max_tokens:'',
        // frequency_penalty: 1,
        // presence_penalty:1,
        response_format: {type: 'json_object'},
        model: 'llama-3.3-70b-versatile',
        messages: [
            {
                role: 'system',
                content: '',
                // content:`You are Jarvis, a smart review grader. Your task is to 
            },
            {
                role: 'user',
                content: `You are a interview grader assistant.Your task to generate candidate evaluation score.
                output must be following JSON structure:
                {
                "confidence":number (1-10 scale),
                "accuracy":number(1-10 scale),
                "pass": boolean (true or false)
            }
                The response must:
                    1. Include ALL fields shown above
                    2. Use only the exact field names shown
                    3. Follow the exact data types specified
                    4. Contain ONLY the JSON object and nothing else
                }`,
            }

        ]
    })


    console.log(JSON.parse(completion.choices[0].message.content))
}

main()