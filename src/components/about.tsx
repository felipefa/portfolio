import { ArrowsOutSimple, Minus, X } from '@phosphor-icons/react/dist/ssr';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { SectionTitle } from '@/components/sectionTitle';
import { getExperienceAsString } from '@/shared/utils/getExperienceAsString';

export function About() {
  const experience = getExperienceAsString();

  return (
    <section
      className="flex flex-col items-center justify-center flex-1 xl:flex-row min-h-svh h-svh"
      id="about"
    >
      <SectionTitle className="mb-8 xl:mb-0 xl:-rotate-90">About</SectionTitle>
      <div className="border-primary-500/15 border-2 bg-purple-950 min-h-80 xl:max-h-96 min-w-80 w-[80%] lg:w-[70%] xl:w-[50%] max-w-6xl rounded-2xl shadow-2xl shadow-primary-500/15 flex flex-col overflow-hidden xl:-ml-28">
        <div className="flex items-center px-4 py-2 border-b-2 border-primary-500/15">
          <X className="mr-2" />
          <Minus className="mr-2" />
          <ArrowsOutSimple />
          <p className="flex-1 -ml-16 text-lg text-center">code</p>
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
