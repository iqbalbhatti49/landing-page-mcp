import type { ReactNode } from "react";

export type MethodId = "claude" | "cursor" | "hermes" | "openclaw";

export type StepAction =
  | { type: "copy"; value: string; layout: "inline" | "block" }
  | { type: "message"; agentLabel: string; body: ReactNode };

export interface InstallStep {
  num: string;
  title: string;
  body: ReactNode;
  action?: StepAction;
}

export interface InstallMethod {
  id: MethodId;
  label: string;
  steps: InstallStep[];
}

const MCP_URL = "https://mcp.imagine.art";

const JSON_CONFIG = `{
  "mcpServers": {
    "ImagineArt": {
      "type": "http",
      "url": "${MCP_URL}",
      "headers": {
        "Authorization": "Bearer <your-bearer-token>"
      }
    }
  }
}`;

const AGENT_PROMPT = `Connect the Imagine MCP at ${MCP_URL} — it supports OAuth device flow, discovery at ${MCP_URL}/.well-known/oauth-protected-resource. Run the device flow and send me the link like: Authorize here: https://imagine.art/device?code=XXXXXXXX Then poll the token endpoint until I authorize and confirm once it succeeds.`;

function deviceFlowSteps(agentLabel: string): InstallStep[] {
  return [
    {
      num: "01",
      title: "Send this prompt",
      body: (
        <>
          Copy this prompt and send it in your agent&apos;s chat to start the
          connection.
        </>
      ),
      action: { type: "copy", value: AGENT_PROMPT, layout: "inline" },
    },
    {
      num: "02",
      title: "Follow the authorization link",
      body: (
        <>
          Your agent replies with a sign-in link. Open it, log in with your{" "}
          <strong>imagine.art</strong> account, and approve access.
        </>
      ),
      action: {
        type: "message",
        agentLabel,
        body: (
          <>
            Authorize here:{" "}
            <span className="text-primary-30 break-all">
              https://imagine.art/device?code=…
            </span>
          </>
        ),
      },
    },
  ];
}

export const INSTALL_METHODS: Record<MethodId, InstallMethod> = {
  claude: {
    id: "claude",
    label: "Claude",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Launch Claude. Open{" "}
            <strong>Settings, Connectors, Add custom connector</strong>.
          </>
        ),
      },
      {
        num: "02",
        title: "Add the server",
        body: (
          <>
            Name it <strong>Imagine MCP</strong>. Paste this URL:
          </>
        ),
        action: { type: "copy", value: MCP_URL, layout: "inline" },
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            Click <strong>Add, Connect</strong>. Sign in with your{" "}
            <strong>imagine.art</strong> account. Ask Claude to{" "}
            <em>generate an image</em>.
          </>
        ),
      },
    ],
  },
  cursor: {
    id: "cursor",
    label: "Cursor",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Open Cursor. Go to{" "}
            <strong>Settings, MCP, Add new MCP server</strong>, or edit{" "}
            <code>~/.cursor/mcp.json</code> directly.
          </>
        ),
      },
      {
        num: "02",
        title: "Add the server",
        body: (
          <>
            Paste this configuration. Replace{" "}
            <code>&lt;your-bearer-token&gt;</code> with the token from your{" "}
            <strong>imagine.art</strong> account.
          </>
        ),
        action: { type: "copy", value: JSON_CONFIG, layout: "block" },
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            Save and restart Cursor. Ask the agent to{" "}
            <em>generate a hero image</em>. It picks the right tool.
          </>
        ),
      },
    ],
  },
  hermes: {
    id: "hermes",
    label: "Hermes",
    steps: deviceFlowSteps("Hermes"),
  },
  openclaw: {
    id: "openclaw",
    label: "OpenClaw",
    steps: deviceFlowSteps("OpenClaw"),
  },
};

export const METHOD_ORDER: MethodId[] = ["claude", "cursor", "hermes", "openclaw"];
