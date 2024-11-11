import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HomeIcon, SettingsIcon, UsersIcon } from 'lucide-react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

// Navigation items for the sidebar
const navItems = [
  { href: '/admin', icon: HomeIcon, label: 'Dashboard' },
  { href: '/admin/users', icon: UsersIcon, label: 'Users' },
  { href: '/admin/settings', icon: SettingsIcon, label: 'Settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <aside
      className={cn('w-64 border-r bg-background px-4 py-6', className)}
      {...props}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-14 items-center border-b px-2 font-semibold">
          Admin Panel
        </div>
        <nav className="flex-1">
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};