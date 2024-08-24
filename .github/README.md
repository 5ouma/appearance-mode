<h1 align="center">Appearance Mode</h1>

<div align="center">

**🌗 Show which appearance mode your device is in**

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/5ouma/appearance-mode?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/5ouma/appearance-mode?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/5ouma/appearance-mode?style=flat-square)](https://github.com/5ouma/appearance-mode/commit/HEAD)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/5ouma/appearance-mode?style=flat-square)](https://github.com/5ouma/appearance-mode/commits/main)
<br />
[![Test](https://img.shields.io/github/actions/workflow/status/5ouma/appearance-mode/test.yml?label=test&style=flat-square)](https://github.com/5ouma/appearance-mode/actions/workflows/test.yml)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/5ouma/appearance-mode/main.svg?style=flat-square)](https://results.pre-commit.ci/latest/github/5ouma/appearance-mode/main)
[![codecov](https://codecov.io/github/5ouma/appearance-mode/graph/badge.svg?token=OQB55KXJIL)](https://codecov.io/github/5ouma/appearance-mode)

</div>

<br /><br />

## 🌄 Preview

|        |      Light      |      Dark      |
| :----: | :-------------: | :------------: |
|  Mac   |  ![mac-light]   |  ![mac-dark]   |
| iPhone | ![iphone-light] | ![iphone-dark] |

[mac-light]: ./images/mac/mac-light.png
[mac-dark]: ./images/mac/mac-dark.png
[iphone-light]: ./images/iphone/iphone-light.png
[iphone-dark]: ./images/iphone/iphone-dark.png

<br /><br />

## 🔨 Development

1. Clone this repository

   ```sh
   git clone https://github.com/5ouma/appearance-mode.git
   ```

2. Install [Deno](https://deno.com)

3. Run the [`server.tsx`](../src/server.tsx) via these task runners

   ```sh
   # For production
   deno task start
   ```

   ```sh
   # For development
   deno task dev
   ```
