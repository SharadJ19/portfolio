// ============================================================================
// terminalCommands.ts
// Maps terminal command strings to their output. Add a new command by
// adding a new key here — TerminalView.jsx never needs to change.
// ============================================================================

import { profile, skills, experience, projects, education } from './profileData';

const INDENT = '  ';

function formatList(items: string[]): string {
  return items.map((item) => `${INDENT}• ${item}`).join('\n');
}

export const terminalCommands: Record<string, () => string> = {
  help: () =>
    [
      'Available commands:',
      '',
      `${INDENT}help          show this list`,
      `${INDENT}about         who is Sharad Chandel`,
      `${INDENT}experience    work history`,
      `${INDENT}projects      things I've built`,
      `${INDENT}skills        tech stack`,
      `${INDENT}education     academic background`,
      `${INDENT}contact       how to reach me`,
      `${INDENT}neofetch      system info (obviously)`,
      `${INDENT}clear         clear the terminal`,
    ].join('\n'),

  about: () =>
    [
      `${profile.name} — ${profile.role}`,
      `${INDENT}${profile.tagline}`,
      '',
      `${INDENT}location  ${profile.location}`,
      `${INDENT}email     ${profile.email}`,
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
      `languages   ${skills.languages.join(', ')}`,
      `frontend    ${skills.frontend.join(', ')}`,
      `backend     ${skills.backend.join(', ')}`,
      `databases   ${skills.databases.join(', ')}`,
      `tools       ${skills.tools.join(', ')}`,
      `core        ${skills.core.join(', ')}`,
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
      `linkedin  ${profile.links.linkedin}`,
      `github    ${profile.links.github}`,
      `website   ${profile.links.website}`,
    ].join('\n'),

  neofetch: () =>
    [
      `${profile.name.toLowerCase().replace(' ', '-')}@portfolio`,
      '-----------------------',
      'OS: Arch Linux x86_64',
      'WM: Sway (Wayland)',
      'Shell: zsh',
      'Theme: Tokyo Night [GTK3]',
      `Terminal: ${profile.osBadge}`,
      'CPU: Full-Stack Engineer (Angular/NestJS/React/Node)',
      `Uptime: since ${profile.role}`,
    ].join('\n'),
};

export interface CommandResult {
  type: 'output' | 'clear';
  text?: string;
}

export function runCommand(input: string): CommandResult {
  const cmd = input.trim().toLowerCase();

  if (cmd === 'clear') {
    return { type: 'clear' };
  }
  if (cmd === '') {
    return { type: 'output', text: '' };
  }

  const handler = terminalCommands[cmd];
  if (!handler) {
    return {
      type: 'output',
      text: `command not found: ${cmd}\nType 'help' to see available commands.`,
    };
  }
  return { type: 'output', text: handler() };
}
