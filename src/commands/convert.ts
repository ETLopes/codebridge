import {Args, Command, Flags} from '@oclif/core'
import fs from 'node:fs/promises'
import path from 'node:path'

export default class Convert extends Command {
  static args = {
    file: Args.string({
      description: 'Path to the input source file to convert',
      required: true,
    }),
  }
  static description = 'Convert a source file to a target language (mock)'
  static examples = ['<%= config.bin %> <%= command.id %> ./examples/sample.cob --language java']
  static flags = {
    language: Flags.string({
      char: 'l',
      description: 'Target language to convert to',
      options: ['java', 'typescript', 'python'],
    }),
    outDir: Flags.string({
      char: 'o',
      description: 'Output directory for converted files',
    }),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Convert)
    const inputPath = path.resolve(process.cwd(), args.file)

    // Step 0: basic existence check
    this.log(`Reading input file: ${inputPath}`)
    let inputContent: string
    try {
      inputContent = await fs.readFile(inputPath, 'utf8')
    } catch {
      this.error(`Cannot read file: ${inputPath}`)
      return
    }

    this.log('Analyzing source to identify language...')
    await sleep(300)
    const detected = detectLanguageFromFilename(inputPath) ?? 'cobol'
    this.log(`Detected source language: ${detected}`)

    // Step 2: prompt for target language if not provided
    let targetLanguage = flags.language
    if (!targetLanguage) {
      this.log('Prompting for target language...')
      const {default: prompts} = await import('prompts')
      const {language} = await prompts({
        choices: [
          {title: 'Java', value: 'java'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Python', value: 'python'},
        ],
        message: 'Select the target language',
        name: 'language',
        type: 'select',
      })
      targetLanguage = language
      if (!targetLanguage) {
        this.error('No target language selected. Exiting.')
        return
      }
    }
    this.log(`Target language: ${targetLanguage}`)

    // Step 3: mock understanding requirements & related files
    this.log('Understanding program requirements...')
    await sleep(400)
    this.log('Scanning related files and dependencies (mock)...')
    await sleep(400)

    // Step 4: mock building target code representation
    this.log('Building target code structure (mock)...')
    await sleep(500)

    // Step 5: mock convert
    this.log('Converting to target language (mock)...')
    await sleep(600)
    const outputContent = generateMockOutput(targetLanguage, inputPath, inputContent)

    // Step 6: write output file
    const outputDir = flags.outDir ? path.resolve(process.cwd(), flags.outDir) : path.dirname(inputPath)
    await fs.mkdir(outputDir, {recursive: true})
    const base = path.basename(inputPath, path.extname(inputPath))
    const ext = mockExtensionFor(targetLanguage)
    const outputPath = path.join(outputDir, `${base}.converted.${ext}`)
    await fs.writeFile(outputPath, outputContent, 'utf8')

    this.log(`Conversion complete! Wrote mock file: ${outputPath}`)
  }
}

function detectLanguageFromFilename(filePath: string): string | undefined {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.cob' || ext === '.cbl' || ext === '.cobol') return 'cobol'
  if (ext === '.java') return 'java'
  if (ext === '.ts' || ext === '.tsx') return 'typescript'
  if (ext === '.py') return 'python'
  return undefined
}

function mockExtensionFor(language: string): string {
  switch (language) {
    case 'java': {
      return 'java'
    }

    case 'python': {
      return 'py'
    }

    case 'typescript': {
      return 'ts'
    }

    default: {
      return 'txt'
    }
  }
}

function generateMockOutput(language: string, inputPath: string, inputContent: string): string {
  const header = `// CodeBridge Mock Conversion\n// Source: ${inputPath}\n// Target Language: ${language}\n\n`
  if (language === 'java') {
    return (
      header +
      'public class ConvertedProgram {\n' +
      '    public static void main(String[] args) {\n' +
      '        System.out.println("This is a mock conversion of the source code.");\n' +
      '        // Original source preview (first 200 chars):\n' +
      '        // ' +
      escapeForLineComment(inputContent.slice(0, 200)) +
      '\n' +
      '    }\n' +
      '}\n'
    )
  }

  if (language === 'typescript') {
    return (
      header +
      'export function main(): void {\n' +
      '  console.log("This is a mock conversion of the source code.")\n' +
      '  // Original source preview (first 200 chars):\n' +
      '  // ' +
      escapeForLineComment(inputContent.slice(0, 200)) +
      '\n' +
      '}\n'
    )
  }

  if (language === 'python') {
    return (
      header +
      'def main():\n' +
      '    print("This is a mock conversion of the source code.")\n' +
      '    # Original source preview (first 200 chars):\n' +
      '    # ' +
      escapeForLineComment(inputContent.slice(0, 200)) +
      '\n' +
      '\n' +
      'if __name__ == "__main__":\n' +
      '    main()\n'
    )
  }

  return header + '/* mock output */\n'
}

function escapeForLineComment(s: string): string {
  return s.replaceAll(/\r?\n/g, ' ')
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
