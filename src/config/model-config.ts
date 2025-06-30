/**
 * Centralized Model Configuration System
 * Handles environment variables, shortcodes, and fallbacks
 */

// Model shortcode mappings
export const MODEL_SHORTCODES: Record<string, string> = {
  // Free models
  'deepseek': 'deepseek/deepseek-r1-0528-qwen3-8b:free',
  'deepseek-free': 'deepseek/deepseek-r1-0528-qwen3-8b:free',
  'llama-free': 'meta-llama/llama-3.2-3b-instruct:free',
  'qwen-free': 'qwen/qwen-2.5-7b-instruct:free',
  
  // Paid models
  'deepseek-paid': 'deepseek/deepseek-r1-0528-qwen3-8b',
  'gpt-4': 'openai/gpt-4-turbo',
  'gpt-3.5': 'openai/gpt-3.5-turbo',
  'claude-3': 'anthropic/claude-3-sonnet',
  'llama-70b': 'meta-llama/llama-3.1-70b-instruct',
  'mixtral': 'mistralai/mixtral-8x7b-instruct',
  
  // Research model general
  'perplexity-sonar': "perplexity/llama-3.3-sonar-70b-online",
  
  // Research model fast
  'perplexity-fast': "perplexity/llama-3.3-sonar-small-32k-online",
  
  // Research model deep
  'perplexity-deep': "perplexity/llama-3.3-sonar-pro-70b-200k-online",
  
  // Research model academic
  'perplexity-academic': "perplexity/llama-3.3-sonar-reasoning-pro-high-70b-200k-online",
  
  // Google/Gemini models (legacy compatibility)
  'gemini': 'google/gemini-2.5-flash-preview-05-20',
  'gemini-flash': 'google/gemini-2.5-flash-preview-05-20',
  'gemini-pro': 'google/gemini-1.5-pro',
  
  // Development/testing
  'test': 'deepseek/deepseek-r1-0528-qwen3-8b:free',
  'dev': 'deepseek/deepseek-r1-0528-qwen3-8b:free'
};

// Service-specific environment variables
export const SERVICE_ENV_VARS: Record<string, string> = {
  // Core services
  'sequential_thought_generation': 'SEQUENTIAL_THOUGHT_MODEL',
  'rules_generation': 'RULES_MODEL',
  'user_stories_generation': 'USER_STORIES_MODEL',
  'dependency_analysis': 'DEPENDENCY_ANALYSIS_MODEL',
  'fullstack_starter_kit_module_selection': 'FULLSTACK_KIT_MODEL',
  'workflow_step_execution': 'WORKFLOW_STEP_MODEL',
  'atomic_task_detection': 'ATOMIC_TASK_MODEL',
  'intent_recognition': 'INTENT_RECOGNITION_MODEL',
  'dependency_graph_analysis': 'DEPENDENCY_GRAPH_MODEL',
  'context_curator_intent_analysis': 'CONTEXT_INTENT_MODEL',
  'context_curator_file_discovery': 'CONTEXT_FILE_MODEL',
  'context_curator_task_decomposition': 'CONTEXT_TASK_MODEL',
  'research_query_generation': 'RESEARCH_QUERY_MODEL',
  'research_query_fast': 'RESEARCH_QUERY_FAST',
  'research_query_deep': 'RESEARCH_QUERY_DEEP',
  'research_query_academic': 'RESEARCH_QUERY_ACADEMIC',
  'agent_task_assignment': 'AGENT_TASK_MODEL',
  'agent_status_analysis': 'AGENT_STATUS_MODEL',
  'capability_matching': 'CAPABILITY_MATCH_MODEL',
  'transport_optimization': 'TRANSPORT_OPT_MODEL',
  'project_analysis': 'PROJECT_ANALYSIS_MODEL',
  'task_validation': 'TASK_VALIDATION_MODEL',
  'orchestration_workflow': 'ORCHESTRATION_MODEL',
  'prd_integration': 'PRD_INTEGRATION_MODEL',
  'natural_language_processing': 'NLP_MODEL',
  'default_generation': 'DEFAULT_MODEL',
  
  // Context curator specific
  'intent_analysis': 'CONTEXT_INTENT_MODEL',
  'file_discovery': 'CONTEXT_FILE_MODEL',
  'relevance_scoring': 'RELEVANCE_SCORING_MODEL',
  'meta_prompt_generation': 'META_PROMPT_MODEL',
  
  // Task manager specific
  'task_decomposition': 'TASK_DECOMPOSITION_MODEL',
  'task_refinement': 'TASK_REFINEMENT_MODEL',
  'agent_coordination': 'AGENT_COORDINATION_MODEL',
  
  // Generator specific
  'prd_generation': 'PRD_GENERATION_MODEL',
  'prd_enhancement': 'PRD_ENHANCEMENT_MODEL',
  'research_enhancement': 'RESEARCH_ENHANCEMENT_MODEL',
  'research_structuring': 'RESEARCH_STRUCTURING_MODEL',
  'rules_examples': 'RULES_EXAMPLES_MODEL',
  'task_list_generation': 'TASK_LIST_MODEL',
  'acceptance_criteria_generation': 'ACCEPTANCE_CRITERIA_MODEL',
  'fullstack_starter_kit_dynamic_yaml_module_generation': 'YAML_MODULE_MODEL'
};

// Default environment variable values
const DEFAULT_ENV_VALUES: Record<string, string> = {
  // Primary model settings
  'DEFAULT_MODEL': 'deepseek',
  'FALLBACK_MODEL': 'deepseek',
  
  // Service-specific defaults (using shortcodes)
  'SEQUENTIAL_THOUGHT_MODEL': 'deepseek',
  'RULES_MODEL': 'deepseek',
  'USER_STORIES_MODEL': 'deepseek',
  'DEPENDENCY_ANALYSIS_MODEL': 'deepseek',
  'FULLSTACK_KIT_MODEL': 'deepseek',
  'WORKFLOW_STEP_MODEL': 'deepseek',
  'ATOMIC_TASK_MODEL': 'deepseek',
  'INTENT_RECOGNITION_MODEL': 'deepseek',
  'DEPENDENCY_GRAPH_MODEL': 'deepseek',
  'CONTEXT_INTENT_MODEL': 'deepseek',
  'CONTEXT_FILE_MODEL': 'deepseek',
  'CONTEXT_TASK_MODEL': 'deepseek',
  'RESEARCH_QUERY_MODEL': 'deepseek',
  'RESEARCH_QUERY_FAST': 'deepseek',
  'RESEARCH_QUERY_DEEP': 'deepseek',
  'RESEARCH_QUERY_ACADEMIC': 'deepseek',
  'AGENT_TASK_MODEL': 'deepseek',
  'AGENT_STATUS_MODEL': 'deepseek',
  'CAPABILITY_MATCH_MODEL': 'deepseek',
  'TRANSPORT_OPT_MODEL': 'deepseek',
  'PROJECT_ANALYSIS_MODEL': 'deepseek',
  'TASK_VALIDATION_MODEL': 'deepseek',
  'ORCHESTRATION_MODEL': 'deepseek',
  'PRD_INTEGRATION_MODEL': 'deepseek',
  'NLP_MODEL': 'deepseek',
  'RELEVANCE_SCORING_MODEL': 'deepseek',
  'META_PROMPT_MODEL': 'deepseek',
  'TASK_DECOMPOSITION_MODEL': 'deepseek',
  'TASK_REFINEMENT_MODEL': 'deepseek',
  'AGENT_COORDINATION_MODEL': 'deepseek',
  'PRD_GENERATION_MODEL': 'deepseek',
  'PRD_ENHANCEMENT_MODEL': 'deepseek',
  'RESEARCH_ENHANCEMENT_MODEL': 'deepseek',
  'RESEARCH_STRUCTURING_MODEL': 'deepseek',
  'RULES_EXAMPLES_MODEL': 'deepseek',
  'TASK_LIST_MODEL': 'deepseek',
  'ACCEPTANCE_CRITERIA_MODEL': 'deepseek',
  'YAML_MODULE_MODEL': 'deepseek'
};

/**
 * Resolves a shortcode or full model name to the actual model identifier
 */
export function resolveModelName(modelInput: string): string {
  // If it's already a full model name (contains /), return as-is
  if (modelInput.includes('/')) {
    return modelInput;
  }
  
  // Otherwise, try to resolve as shortcode
  return MODEL_SHORTCODES[modelInput] || modelInput;
}

/**
 * Gets the model for a specific service, with fallback chain
 */
export function getServiceModel(serviceName: string): string {
  // 1. Try service-specific environment variable
  const serviceEnvVar = SERVICE_ENV_VARS[serviceName];
  if (serviceEnvVar) {
    const serviceModel = process.env[serviceEnvVar] || DEFAULT_ENV_VALUES[serviceEnvVar];
    if (serviceModel) {
      return resolveModelName(serviceModel);
    }
  }
  
  // 2. Try default model from environment
  const defaultModel = process.env.DEFAULT_MODEL || DEFAULT_ENV_VALUES.DEFAULT_MODEL;
  if (defaultModel) {
    return resolveModelName(defaultModel);
  }
  
  // 3. Use fallback model
  const fallbackModel = getFallbackModel();
  return resolveModelName(fallbackModel);
}

/**
 * Gets the default model (used when no service is specified)
 */
export function getDefaultModel(): string {
  const defaultModel = process.env.DEFAULT_MODEL || DEFAULT_ENV_VALUES.DEFAULT_MODEL;
  return resolveModelName(defaultModel);
}

/**
 * Gets the fallback model (used when primary model fails)
 */
export function getFallbackModel(): string {
  const fallbackModel = getFallbackModel();
  return resolveModelName(fallbackModel);
}

/**
 * Gets all available shortcodes
 */
export function getAvailableShortcodes(): string[] {
  return Object.keys(MODEL_SHORTCODES);
}

/**
 * Gets the full model name for a shortcode
 */
export function getFullModelName(shortcode: string): string | undefined {
  return MODEL_SHORTCODES[shortcode];
}

/**
 * Lists all service environment variables
 */
export function getServiceEnvironmentVariables(): Record<string, string> {
  return SERVICE_ENV_VARS;
}

/**
 * Creates a sample .env file content with all available options
 */
export function generateSampleEnvFile(): string {
  const lines = [
    '# VibeCoder Model Configuration',
    '# Use shortcodes (e.g., "deepseek", "gpt-4") or full model names',
    '',
    '# Global Settings',
    'DEFAULT_MODEL=deepseek',
    'FALLBACK_MODEL=deepseek',
    '',
    '# Available Shortcodes:',
    ...getAvailableShortcodes().map(code => `# ${code} -> ${MODEL_SHORTCODES[code]}`),
    '',
    '# Service-Specific Models (optional - will use DEFAULT_MODEL if not set)',
    ...Object.entries(SERVICE_ENV_VARS).map(([service, envVar]) => 
      `# ${envVar}=deepseek  # for ${service}`
    ),
    '',
    '# Example configurations:',
    '# DEFAULT_MODEL=gpt-4',
    '# FALLBACK_MODEL=deepseek',
    '# RULES_MODEL=claude-3',
    '# CONTEXT_INTENT_MODEL=llama-70b',
    ''
  ];
  
  return lines.join('\n');
}

// Legacy compatibility function for existing code
export function getLegacyModel(legacyDefault?: string): string {
  if (legacyDefault && legacyDefault !== 'deepseek/deepseek-r1-0528-qwen3-8b:free') {
    // If legacy code provides a non-default model, use it
    return resolveModelName(legacyDefault);
  }
  
  // Otherwise use the new system
  return getDefaultModel();
}
