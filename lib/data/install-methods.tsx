import type { ReactNode } from "react";

export type MethodId = "claude" | "cursor" | "hermes" | "openclaw" | "cli";

export type CommandKind = "inline" | "block";

export interface InstallStep {
  num: string;
  title: string;
  body: ReactNode;
}

export interface InstallMethod {
  id: MethodId;
  label: string;
  command: string;
  commandKind: CommandKind;
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

const CLI_COMMAND = `claude mcp add --transport http imagine-art ${MCP_URL} --header "Authorization: Bearer <your-bearer-token>"`;

export const INSTALL_METHODS: Record<MethodId, InstallMethod> = {
  claude: {
    id: "claude",
    label: "Claude Desktop",
    command: MCP_URL,
    commandKind: "inline",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Launch Claude Desktop. Open{" "}
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
    command: JSON_CONFIG,
    commandKind: "block",
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
    command: JSON_CONFIG,
    commandKind: "block",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Launch Hermes. Open{" "}
            <strong>Settings, MCP servers, Add server</strong>.
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
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            Save and reload. Ask Hermes to <em>generate an image</em>.
          </>
        ),
      },
    ],
  },
  openclaw: {
    id: "openclaw",
    label: "OpenClaw",
    command: JSON_CONFIG,
    commandKind: "block",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Open OpenClaw. Go to{" "}
            <strong>Settings, MCP, Add new MCP server</strong>.
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
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            Save and restart OpenClaw. Ask the agent to{" "}
            <em>generate a hero image</em>.
          </>
        ),
      },
    ],
  },
  cli: {
    id: "cli",
    label: "CLI",
    command: CLI_COMMAND,
    commandKind: "inline",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Open a terminal with <strong>Claude Code</strong> or{" "}
            <strong>Codex CLI</strong> installed.
          </>
        ),
      },
      {
        num: "02",
        title: "Add the server",
        body: (
          <>
            Run the command. Replace{" "}
            <code>&lt;your-bearer-token&gt;</code> with the token from your{" "}
            <strong>imagine.art</strong> account.
          </>
        ),
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            The server is registered with your CLI. Start a session and ask the
            agent to <em>generate an image</em>.
          </>
        ),
      },
    ],
  },
};

export const METHOD_ORDER: MethodId[] = ["claude", "cursor", "hermes", "openclaw", "cli"];
