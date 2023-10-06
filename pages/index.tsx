import { Box, Flex, Theme, Text, Button, Section } from '@radix-ui/themes';
import * as React from 'react';
import NextLink from 'next/link';
import { ThemesHeader } from '@components/ThemesHeader';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { MagicCurtain } from '@components/MagicCurtain';
import { MobileMenuProvider } from '@components/MobileMenu';
import { useTheme } from 'next-themes';
import { SerifHeading } from '@components/SerifHeading';
import { SyntaxSchemeProvider } from '@components/Pre';
import { ThemesHeroLayout } from '@components/ThemesHeroLayout';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import Image from 'next/image';

export default function ThemesHome() {
  const { resolvedTheme } = useTheme();
  const inverted = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title="RPRSNT - supercharging casework with AI"
        description="An open source component library for building modern React apps that helps you build faster and makes it easy to create beautiful, accessible interfaces that are a breeze to maintain."
        image="themes.png"
      />

      {/* <ThemesMobileMenu /> */}

      <MagicCurtain.Root>
        <MagicCurtain.Item defaultVisibility="visible">
          <Theme hasBackground accentColor="indigo" grayColor="slate">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage/>
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="indigo" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesDashboard align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="indigo" grayColor="slate" appearance={inverted}>
            <Box height="0">{/* <ThemesHeader ghost /> */}</Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
              <BackgroundImage/>
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-default-fonts" hasBackground={false}>
                  <ExampleThemesDashboard align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>



        <Theme appearance="light" hasBackground={false}>
          <MagicCurtain.Controls
            images={resolvedTheme === 'light' ? previewImages : previewImagesDarkMode}
          />
        </Theme>
      </MagicCurtain.Root>
    </MobileMenuProvider>
  );
}

const previewImages = [
  'https://workos.imgix.net/images/2f5a1e4b-39c5-4604-b278-a219f9898159.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/5516f53e-0b29-4fc2-92d8-74566aa91976.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/59b77353-32f4-4176-ac36-8299ed7c1236.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/bc735904-1193-48a0-bcc6-37c9b73312fa.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/bde22677-6a86-495a-baf9-7328e8f52401.png?auto=format&fit=clip&q=80&w=496',
  'https://workos.imgix.net/images/f6c9aea7-8bcc-458a-8531-3b36458dc031.png?auto=format&fit=clip&q=80&w=496',
];

const previewImagesDarkMode = [
  previewImages[1],
  previewImages[0],
  previewImages[3],
  previewImages[2],
  previewImages[5],
  previewImages[4],
];

const MainContent = ({
  codeBlockScheme = 'indigo',
}: {
  codeBlockScheme?: React.ComponentProps<typeof SyntaxSchemeProvider>['scheme'];
}) => (
  <Box>
    <Section size={{ initial: '2', md: '3', lg: '2' }} pb={{ initial: '4', lg: '7' }}>
      <Box>
        <Box display={{ lg: 'none' }}>
          <SerifHeading mb="3">Supercharge casework with AI</SerifHeading>
        </Box>
        <Box display={{ initial: 'none', lg: 'block' }}>
          <SerifHeading
            mb="4"
            style={{ lineHeight: 0.9, '--heading-font-size-adjust': 1.3 } as React.CSSProperties}
          >
            Supercharge casework with AI
          </SerifHeading>
        </Box>
      </Box>

      <Box style={{ maxWidth: 500 }}>
        <Text size={{ initial: '4', xs: '5' }}>
          <Text as="p" mb="5" color="gray">
            A human-centered platform designed to grow your movement and move it to action.
          </Text>
        </Text>

        <Flex gap="4" direction={{ initial: 'column', xs: 'row' }}>
          <NextLink href="https://tally.so/r/w4B7Nr" passHref legacyBehavior>
            <Button
              asChild
              size={{ initial: '3', xs: '4' }}
              color="gray"
              highContrast
              style={{ flexGrow: 1 }}
            >
              <a>
                Get started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  style={{ opacity: 1, marginRight: -3 }}
                >
                  <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
                </svg>
              </a>
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Section>
  </Box>
);

const BackgroundImage = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const bgImageSrc = resolvedTheme === 'dark' ? '/rprsnt_bg_2.svg' : '/rprsnt_bg_1.svg';

  return <Image src={bgImageSrc} alt="Background Image" layout="fill" objectFit="cover" />;
};