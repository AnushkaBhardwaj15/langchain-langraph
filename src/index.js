import "dotenv/config";
import readline from "node:readline/promises";
import {stdin, stdout as output} from "node:process";
import {createAgent} from "langchain";
import { ChatOpenAI } from "@langchain/openai";

const agent = createAgent({
    model: new ChatOpenAI({model:"gpt-4o-mini"}),
    systemPrompt: "You are a helpful assistant.Answer clearly and keep the messgaes short"
});

const result = await agent.invoke({
    messages:[{role:"human", content:"how do u dance?"}]
})

console.log("Agent:", result.messages.at(-1))