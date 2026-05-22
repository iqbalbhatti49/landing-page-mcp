export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "How does Imagine MCP connect to AI agents?",
    a: "Imagine MCP uses the Model Context Protocol, an open standard that gives AI agents access to external tools. Once connected, your agent can generate images, create videos, produce music, upscale assets, remove backgrounds, and check your account balance — all within a single conversation.",
  },
  {
    q: "Which agents are supported?",
    a: "Imagine MCP works with Claude, Cursor, Cline, Hermes, and OpenClaw. Any agent or client that speaks MCP can connect — including custom setups running locally or on a server.",
  },
  {
    q: "What tools are available?",
    a: "Six creative endpoints: text-to-image, text-to-video, image upscaler, background remover, music generation, and balance inquiry. Each is a native MCP tool, callable directly in conversation.",
  },
  {
    q: "What can I create?",
    a: "Images at any resolution, videos up to 10 seconds, and original music — all from a single prompt. You can chain tools in sequence: generate an image, upscale it, strip its background, and feed it into a video tool, all in one agent session.",
  },
  {
    q: "Do I need an API key?",
    a: "No. Add the Imagine MCP server URL in your agent's settings and authenticate through your imagine.art account. No keys to generate, store, or rotate.",
  },
  {
    q: "How does pricing work?",
    a: "Imagine MCP uses the same credit system as the imagine.art platform. Each generation costs credits based on the tool and model selected. Your existing plan credits work seamlessly through any connected agent. Use imagine.balance() anytime to check your balance and renewal date.",
  },
  {
    q: "How long does generation take?",
    a: "Images typically complete in a few seconds. Videos take longer depending on duration and model. All generation runs asynchronously — your agent polls for results and delivers them the moment they're ready, so the conversation keeps flowing.",
  },
];
