codebridge
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/codebridge.svg)](https://npmjs.org/package/codebridge)
[![Downloads/week](https://img.shields.io/npm/dw/codebridge.svg)](https://npmjs.org/package/codebridge)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g codebridge
$ codebridge COMMAND
running command...
$ codebridge (--version)
codebridge/0.0.0 darwin-arm64 node-v24.7.0
$ codebridge --help [COMMAND]
USAGE
  $ codebridge COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`codebridge convert FILE`](#codebridge-convert-file)
* [`codebridge hello PERSON`](#codebridge-hello-person)
* [`codebridge hello world`](#codebridge-hello-world)
* [`codebridge help [COMMAND]`](#codebridge-help-command)
* [`codebridge plugins`](#codebridge-plugins)
* [`codebridge plugins add PLUGIN`](#codebridge-plugins-add-plugin)
* [`codebridge plugins:inspect PLUGIN...`](#codebridge-pluginsinspect-plugin)
* [`codebridge plugins install PLUGIN`](#codebridge-plugins-install-plugin)
* [`codebridge plugins link PATH`](#codebridge-plugins-link-path)
* [`codebridge plugins remove [PLUGIN]`](#codebridge-plugins-remove-plugin)
* [`codebridge plugins reset`](#codebridge-plugins-reset)
* [`codebridge plugins uninstall [PLUGIN]`](#codebridge-plugins-uninstall-plugin)
* [`codebridge plugins unlink [PLUGIN]`](#codebridge-plugins-unlink-plugin)
* [`codebridge plugins update`](#codebridge-plugins-update)

## `codebridge convert FILE`

Convert a source file to a target language (mock)

```
USAGE
  $ codebridge convert FILE [-l java|typescript|python] [-o <value>]

ARGUMENTS
  FILE  Path to the input source file to convert

FLAGS
  -l, --language=<option>  Target language to convert to
                           <options: java|typescript|python>
  -o, --outDir=<value>     Output directory for converted files

DESCRIPTION
  Convert a source file to a target language (mock)

EXAMPLES
  $ codebridge convert ./examples/sample.cob --language java
```

_See code: [src/commands/convert.ts](https://github.com/ETLopes/codebridge/blob/v0.0.0/src/commands/convert.ts)_

## `codebridge hello PERSON`

Say hello

```
USAGE
  $ codebridge hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ codebridge hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/ETLopes/codebridge/blob/v0.0.0/src/commands/hello/index.ts)_

## `codebridge hello world`

Say hello world

```
USAGE
  $ codebridge hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ codebridge hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ETLopes/codebridge/blob/v0.0.0/src/commands/hello/world.ts)_

## `codebridge help [COMMAND]`

Display help for codebridge.

```
USAGE
  $ codebridge help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for codebridge.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `codebridge plugins`

List installed plugins.

```
USAGE
  $ codebridge plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ codebridge plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `codebridge plugins add PLUGIN`

Installs a plugin into codebridge.

```
USAGE
  $ codebridge plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into codebridge.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CODEBRIDGE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CODEBRIDGE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ codebridge plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ codebridge plugins add myplugin

  Install a plugin from a github url.

    $ codebridge plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ codebridge plugins add someuser/someplugin
```

## `codebridge plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ codebridge plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ codebridge plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `codebridge plugins install PLUGIN`

Installs a plugin into codebridge.

```
USAGE
  $ codebridge plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into codebridge.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CODEBRIDGE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CODEBRIDGE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ codebridge plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ codebridge plugins install myplugin

  Install a plugin from a github url.

    $ codebridge plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ codebridge plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `codebridge plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ codebridge plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ codebridge plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `codebridge plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ codebridge plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ codebridge plugins unlink
  $ codebridge plugins remove

EXAMPLES
  $ codebridge plugins remove myplugin
```

## `codebridge plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ codebridge plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `codebridge plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ codebridge plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ codebridge plugins unlink
  $ codebridge plugins remove

EXAMPLES
  $ codebridge plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `codebridge plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ codebridge plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ codebridge plugins unlink
  $ codebridge plugins remove

EXAMPLES
  $ codebridge plugins unlink myplugin
```

## `codebridge plugins update`

Update installed plugins.

```
USAGE
  $ codebridge plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->
