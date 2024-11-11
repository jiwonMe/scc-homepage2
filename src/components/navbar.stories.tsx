import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '@/components/navbar';

// Meta 정보 정의
const meta: Meta<typeof Navbar> = {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    // Storybook에서 스크롤 이벤트를 시뮬레이션하기 위한 설정
    chromatic: { 
      viewports: [320, 768, 1024],
      delay: 1000
    },
  },
  // 스토리북 배경색 설정을 위한 데코레이터
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

// 기본 스토리
export const Default: Story = {};

// 스크롤된 상태의 스토리
export const Scrolled: Story = {
  parameters: {
    chromatic: { delay: 300 },
    // 스크롤된 상태를 시뮬레이션하기 위한 설정
    viewport: {
      defaultViewport: 'desktop'
    },
  },
  play: async ({ canvasElement }) => {
    // 스크롤 이벤트 시뮬레이션
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
  },
};

// 모바일 뷰포트에서의 스토리
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
  },
};

// 서브메뉴가 열린 상태의 스토리
export const WithOpenSubmenu: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
  },
  play: async ({ canvasElement }) => {
    const menuItem = canvasElement.querySelector('a[href="/about"]');
    if (menuItem) {
      menuItem.dispatchEvent(new MouseEvent('mouseenter'));
    }
  },
};

// 키보드 네비게이션 테스트를 위한 스토리
export const KeyboardNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: '키보드 탐색을 위한 접근성 테스트 스토리입니다. Tab, Enter, Space, Escape 키를 사용해보세요.'
      }
    }
  }
}; 