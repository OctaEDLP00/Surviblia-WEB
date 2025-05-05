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
