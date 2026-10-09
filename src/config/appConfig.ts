import { config as loadEnv } from "dotenv"

loadEnv({ path: ".env.local" })

export interface AppConfig {
  region: string
  modelId: string
}

function getConfig(): AppConfig {
  const { REGION, MODEL_ID } = process.env

  if (!REGION || !MODEL_ID) {
    throw new Error("REGION and MODEL_ID must be set in .env.local")
  }

  return { region: REGION, modelId: MODEL_ID }
}

export const appConfig = getConfig()
