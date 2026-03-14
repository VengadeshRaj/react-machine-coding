const { spawn } = require("child_process");
const getPort = require("get-port").default;

async function startApp() {
  const appName = process.argv[2];

  if (!appName) {
    console.log("Please provide an app name");
    process.exit(1);
  }

  const port = await getPort({ port: 3001 });

  console.log(`Starting ${appName} on port ${port}`);

  const child = spawn(
    "pnpm",
    ["--filter", appName, "exec", "cross-env", `PORT=${port}`, "react-scripts", "start"],
    { stdio: "inherit", shell: true }
  );

  child.on("close", (code) => process.exit(code));
}

startApp();
