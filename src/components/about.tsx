import { ArrowsOutSimple, Minus, X } from '@phosphor-icons/react/dist/ssr';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { getExperienceAsString } from '@/shared/utils/getExperienceAsString';

export function About() {
  const experience = getExperienceAsString();

  return (
    <section
      className="flex flex-1 flex-col xl:flex-row items-center justify-center min-h-svh h-svh"
      id="about"
    >
      <p className="xl:-rotate-90 text-[rgba(var(--foreground-rgb),0.15)] font-display text-7xl md:text-8xl mb-8 xl:mb-0">
        About
      </p>
      <div className="border-[rgba(var(--foreground-rgb),0.15)] border-2 bg-[rgb(var(--background-rgb))] min-h-80 h-[50%] xl:max-h-96 min-w-80 w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[960px] rounded-2xl shadow-2xl shadow-[rgba(var(--foreground-rgb),0.15)] flex flex-col overflow-hidden xl:-ml-28">
        <div className="border-[rgba(var(--foreground-rgb),0.15)] border-b-2 flex items-center px-4 py-2">
          <X className="mr-2" />
          <Minus className="mr-2" />
          <ArrowsOutSimple />
          <p className="text-center flex-1 text-lg -ml-16">code</p>
        </div>
        <div className="flex flex-1">
          <SyntaxHighlighter
            customStyle={{
              backgroundColor: 'transparent',
              minWidth: '100%',
            }}
            language="json"
            showLineNumbers
            style={stackoverflowDark}
            wrapLines
          >
            {`{\n\t"myName": "Felipe Araujo",\n\t"myExperience": "${experience}",\n\t"myMainSkills": ["React", "React Native", "TypeScript", "Node.js"],\n\t"myEducation": "Bachelor in Computer Science",\n\t"myCurrentLocation": "Cologne, Germany",\n\t"languages": ["English", "Portuguese"]\n}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}
