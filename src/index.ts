import { Agent, BedrockModel } from "@strands-agents/sdk"
import { appConfig } from "./config/appConfig.js"

const model = new BedrockModel({
  region: appConfig.region,
  modelId: appConfig.modelId,
  maxTokens: 4096,
  temperature: 0.7,
})

const agent = new Agent({
  model,
  systemPrompt: "You are a helpful assistant.",
})

const result = await agent.invoke('Hello, can you write a haiku about Berlin Lichterfelde-West?')

console.log(result)
