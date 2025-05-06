{ pkgs, ... }: {
  channel = "24.11";

  packages = [
    pkgs.nodejs_23
    pkgs.corepack_22
    pkgs.typescript
  ];

  env = {};

  idx = {

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
      "alburdette619.docthis-core"
      "wraith13.bracket-lens"
      "editorconfig.editorconfig"
      "aaron-bond.better-comments"
      "oven.bun-vscode"
      "mrmlnc.vscode-duplicate"
      "miguelsolorio.fluent-icons"
      "ctcuff.font-preview"
      "grapecity.gc-excelviewer"
      "codezombiech.gitignore"
      "github.vscode-pull-request-github"
      "visualstudioexptteam.vscodeintellicode"
      "visualstudioexptteam.intellicode-api-usage-examples"
      "ms-vscode.live-server"
      "zhuangtongfa.material-theme"
      "christian-kohler.path-intellisense"
      "miguelsolorio.symbols"
      "marcoq.vscode-typescript-to-json-schema"
      "yutengjing.vscode-archive"
      "christian-kohler.npm-intellisense"
      "redhat.vscode-yaml"
      "redhat.vscode-xml"
      "talhabalaj.actual-font-changer"
      "yzhang.markdown-all-in-one"
      "ibm.output-colorizer"
      "thomascsd.vscode-readme-pattern"
    ];


    workspace = {
      onCreate = {
        pnpm-install: "pnpm i";
      };
    };

    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "pnpm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        }
      }
    };
  };
}
