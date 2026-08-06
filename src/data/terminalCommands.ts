// ============================================================================
// terminalCommands.ts
// Maps terminal command strings to their output. Add a new command by
// adding a new key here — TerminalView.jsx never needs to change.
// ============================================================================

// ============================================================================
// terminalCommands.ts
// Expanded suite of commands for the simulated terminal environment.
// ============================================================================

import { profile, skills, experience, projects, education } from './profileData';

const INDENT = '  ';

function formatList(items: string[]): string {
  return items.map((item) => `${INDENT}• ${item}`).join('\n');
}

export const terminalCommands: Record<string, () => string> = {
  help: () =>
    [
      'System Command Center — Available Commands:',
      '',
      `${INDENT}help         show this command directory`,
      `${INDENT}about        display professional bio summary`,
      `${INDENT}experience   list professional employment history`,
      `${INDENT}projects     explore full-stack software builds`,
      `${INDENT}skills       inspect complete technical stack`,
      `${INDENT}education    show academic credentials & coursework`,
      `${INDENT}contact      get direct communication channels`,
      `${INDENT}phone        display direct mobile number`,
      `${INDENT}whoami       print current active session user`,
      `${INDENT}date         display current system date & time`,
      `${INDENT}uname        print system kernel & machine info`,
      `${INDENT}pwd          print working directory path`,
      `${INDENT}ls           list contents of home directory`,
      `${INDENT}history      display command invocation log`,
      `${INDENT}neofetch     system architecture & environment specs`,
      `${INDENT}clear        clear terminal history buffer`,
    ].join('\n'),

  about: () =>
    [
      `${profile.name} — ${profile.role}`,
      `${INDENT}${profile.tagline}`,
      '',
      `${INDENT}location  ${profile.location}`,
      `${INDENT}email     ${profile.email}`,
      `${INDENT}phone     ${profile.phone}`,
    ].join('\n'),

  experience: () =>
    experience
      .map((job) =>
        [
          `${job.role} @ ${job.company} (${job.location})`,
          `${INDENT}${job.period}`,
          '',
          formatList(job.highlights),
        ].join('\n'),
      )
      .join('\n\n'),

  projects: () =>
    projects
      .map((p) =>
        [
          `${p.name} — ${p.subtitle}`,
          `${INDENT}${p.description}`,
          `${INDENT}stack: ${p.stack.join(', ')}`,
          `${INDENT}live:  ${p.links.live ?? 'N/A'}`,
          `${INDENT}code:  ${p.links.code ?? 'N/A'}`,
        ].join('\n'),
      )
      .join('\n\n'),

  skills: () =>
    [
      `languages    ${skills.languages.join(', ')}`,
      `frontend     ${skills.frontend.join(', ')}`,
      `backend      ${skills.backend.join(', ')}`,
      `databases    ${skills.databases.join(', ')}`,
      `tools        ${skills.tools.join(', ')}`,
      `core         ${skills.core.join(', ')}`,
    ].join('\n'),

  education: () =>
    education
      .map((e) =>
        [
          `${e.degree} — ${e.institution} (${e.location})`,
          `${INDENT}${e.period}`,
          formatList(e.coursework),
        ].join('\n'),
      )
      .join('\n\n'),

  contact: () =>
    [
      `email     ${profile.email}`,
      `phone     ${profile.phone}`,
      `linkedin  ${profile.links.linkedin}`,
      `github    ${profile.links.github}`,
    ].join('\n'),

  phone: () =>
    `Direct Mobile Line: ${profile.phone} (Available for professional inquiries)`,

  whoami: () => 'guest@sharad-portfolio-node',

  date: () => new Date().toUTCString(),

  uname: () => 'Linux sharad-arch-desktop 6.12.8-arch1-1 x86_64 GNU/Linux',

  pwd: () => '/home/guest/portfolio',

  ls: () =>
    ['Desktop/', 'Documents/', 'Projects/', 'resume.pdf', 'config.json'].join('   '),

  neofetch: () =>
    [
      `${profile.name.toLowerCase().replace(' ', '-')}@portfolio`,
      '-----------------------',
      'OS: Arch Linux x86_64',
      'WM: Sway (Wayland)',
      'Shell: zsh 5.9',
      'Theme: Tokyo Night [GTK3]',
      `Terminal: ${profile.osBadge}`,
      'CPU: Full-Stack Engineer (Angular/React/Node)',
      `Uptime: since ${profile.role}`,
    ].join('\n'),
};

export interface CommandResult {
  type: 'output' | 'clear';
  text?: string;
}

export function runCommand(input: string, commandLog: string[] = []): CommandResult {
  const cmd = input.trim().toLowerCase();

  if (cmd === 'clear') {
    return { type: 'clear' };
  }
  if (cmd === '') {
    return { type: 'output', text: '' };
  }

  if (cmd === 'history') {
    return {
      type: 'output',
      text: commandLog.map((c, idx) => `${INDENT}${idx + 1}  ${c}`).join('\n'),
    };
  }

  const handler = terminalCommands[cmd];
  if (!handler) {
    return {
      type: 'output',
      text: `command not found: ${cmd}\nType 'help' to see available commands and tools.`,
    };
  }
  return { type: 'output', text: handler() };
}
