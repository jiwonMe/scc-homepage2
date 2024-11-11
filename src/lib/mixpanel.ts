import mixpanel from 'mixpanel-browser';

if (typeof window !== 'undefined') {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!);
}

export const track = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(eventName, properties);
  }
};