'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { useEffect, useState } from 'react';

import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from '@/components/animate-ui/primitives/effects/theme-toggler';
import { buttonVariants } from '@/components/animate-ui/components/buttons/icon';
import { cn } from '@/lib/utils';

const getIcon = (
  effective: ThemeSelection,
  resolved: Resolved,
  modes: ThemeSelection[],
) => {
  const theme = modes.includes('system') ? effective : resolved;
  return theme === 'system' ? (
    <Monitor className="h-5 w-5" />
  ) : theme === 'dark' ? (
    <Moon className="h-5 w-5" />
  ) : (
    <Sun className="h-5 w-5" />
  );
};

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps['onImmediateChange'];
    direction?: ThemeTogglerPrimitiveProps['direction'];
  };

function ThemeTogglerButton({
  variant = 'default',
  size = 'default',
  modes = ['light', 'dark', 'system'],
  direction = 'ltr',
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render real content after mount (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => (
        <button
          data-slot="theme-toggler-button"
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={(e) => {
            onClick?.(e);
            toggleTheme(getNextTheme(effective, modes));
          }}
          {...props}
        >
          {mounted ? (
            getIcon(effective, resolved, modes)
          ) : (
            <div className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      )}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };