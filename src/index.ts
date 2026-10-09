import { Agent, BedrockModel } from "@strands-agents/sdk"
import { config } from "dotenv"

config({ path: ".env.local" })

const { REGION, MODEL_ID } = process.env

if (!REGION || !MODEL_ID) {
  throw new Error("REGION and MODEL_ID must be set in .env.local")
}

const model = new BedrockModel({
  region: REGION,
  modelId: MODEL_ID,
  maxTokens: 4096,
  temperature: 0.7,
})

const agent = new Agent({
  model,
  systemPrompt: "You are a helpful assistant.",
})

const result = await agent.invoke('Hello, can you write a haiku about Berlin Lichterfelde-West?')

console.log(result)
