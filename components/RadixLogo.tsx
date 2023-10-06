import Image from 'next/image';
import { useTheme } from 'next-themes';

export const RadixLogo = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = resolvedTheme === 'dark' ? '/rprsnt_logo_web_white.svg' : '/rprsnt_logo_web.svg';

  return <Image src={logoSrc} alt="Logo Web" width={100} height={100} />;
};

export const RadixLogoIcon = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = resolvedTheme === 'dark' ? '/rprsnt_logo_mobile_white.svg' : '/rprsnt_logo_mobile.svg';

  return <Image src={logoSrc} alt="Logo Mobile" width={100} height={100} />;
};