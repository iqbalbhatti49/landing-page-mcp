import type { ReactNode } from "react";

export type MethodId = "claude" | "cursor" | "cli";

export interface InstallStep {
  num: string;
  title: string;
  body: ReactNode;
}

export interface InstallMethod {
  id: MethodId;
  label: string;
  command: string;
  steps: InstallStep[];
}

export const INSTALL_METHODS: Record<MethodId, InstallMethod> = {
  claude: {
    id: "claude",
    label: "Claude Desktop",
    command: "npx -y @imagine/mcp-server",
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
            Name it <strong>Imagine</strong>. Paste this command:
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
    command: "npx -y @imagine/mcp-server",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Open Cursor. Go to{" "}
            <strong>Settings, MCP, Add new MCP server</strong>.
          </>
        ),
      },
      {
        num: "02",
        title: "Add the server",
        body: (
          <>
            Add a new server named <strong>imagine</strong> with this
            configuration:
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
  cli: {
    id: "cli",
    label: "CLI",
    command: "npm i -g @imagine/mcp-server && imagine-mcp",
    steps: [
      {
        num: "01",
        title: "Open your client",
        body: (
          <>
            Open a terminal. You need <strong>Node 18+</strong> and{" "}
            <code>npx</code> available.
          </>
        ),
      },
      {
        num: "02",
        title: "Add the server",
        body: <>Run the install command. Your API key is prompted on first run:</>,
      },
      {
        num: "03",
        title: "Connect and create",
        body: (
          <>
            Server starts on <code>localhost:8787</code>. Point any MCP client
            at it.
          </>
        ),
      },
    ],
  },
};

export const METHOD_ORDER: MethodId[] = ["claude", "cursor", "cli"];
