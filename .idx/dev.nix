# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11";
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_23
    pkgs.corepack_22
    pkgs.typescript
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # add extensions in .vscode/extensions.json recommended
      "astro-build.astro-vscode"
      "bradlc.vscode-tailwindcss"
      "heybourn.headwind"
      "usernamehw.errorlens"
      "tobermory.es6-string-html"
      "kisstkondoros.vscode-gutter-preview"
      "wix.vscode-import-cost"
      "ms-vscode.vscode-typescript-next"
      "pflannery.vscode-versionlens"
      "unifiedjs.vscode-mdx"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "yoavbls.pretty-ts-errors"
      "ultram4rine.vscode-choosealicense"
      # "alburdette619.docthis-core"
      # "wraith13.bracket-lens"
      "editorconfig.editorconfig"
      "aaron-bond.better-comments"
      "oven.bun-vscode"
      "mrmlnc.vscode-duplicate"
      "miguelsolorio.fluent-icons"
      "ctcuff.font-preview"
      "grapecity.gc-excelviewer"
      "codezombiech.gitignore"
      "github.vscode-pull-request-github"
      # "visualstudioexptteam.vscodeintellicode"
      # "visualstudioexptteam.intellicode-api-usage-examples"
      "ms-vscode.live-server"
      "zhuangtongfa.material-theme"
      "christian-kohler.path-intellisense"
      # "miguelsolorio.symbols"
      # "marcoq.vscode-typescript-to-json-schema"
      "yutengjing.vscode-archive"
      "christian-kohler.npm-intellisense"
      "redhat.vscode-yaml"
      "redhat.vscode-xml"
      # "talhabalaj.actual-font-changer"
      "yzhang.markdown-all-in-one"
      "ibm.output-colorizer"
      # "thomascsd.vscode-readme-pattern"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = ''pnpm i'';
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "src/pages/index.astro" ];
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "pnpm" "run" "dev" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
