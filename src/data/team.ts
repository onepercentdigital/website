/**
 * Team Member Data
 *
 * This file contains information about the One Percent SEO team members.
 * Used on the About page to display team bios and credentials.
 */

export interface TeamMember {
  name: string;
  initials: string;
  title: string;
  bio: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Luke Jordon',
    initials: 'LJ',
    title: 'Co-Founder & SEO Lead Architect',
    bio: [
      "Having worked with over 300 brands since 2012, Luke is a seasoned expert in top ranking SEO engineering and scaling strategies. His unique talent lies in effortlessly navigating Google algorithm updates while continuously boosting each client's online presence and securing maximum market share in their industry.",
      "In addition to his SEO expertise, Luke co-owns multiple thriving E-commerce brands. This hands-on experience equips him with the insights needed to manage various marketing channels effectively at scale. All this skill and knowledge make him an SEO expert you can't afford to miss.",
    ],
  },
  {
    name: 'Mackey Martin',
    initials: 'MM',
    title: 'Co-Founder & SEO Lead Architect',
    bio: [
      "Best defined as the bright mind behind 1% SEO's flawless operational procedures and execution, Mackey possesses a laser focus and attention to detail second to none. From onboarding to the end goal of any project, he treats each business like his own, delves deep into their unique needs and adds significant value to every SEO strategy.",
      'Over the past decade, he has co-founded several successful E-commerce brands, which explains why he is so fluent in entrepreneurship. He is a businessman before an SEO expert and understands the ropes behind running a successful business – a quality many SEO agencies often lack.',
    ],
  },
  {
    name: 'Austin Falk',
    initials: 'AF',
    title: 'Account Manager & SEO Architect',
    bio: [
      "An advocate for sharing the stories of individuals and their passion projects, Austin develops strategic technical visions for One Percent SEO's clients with recommendations and roadmaps for proposed solutions. With a knack for efficiency and long-term adaptability, he helps clients traverse the ever-changing digital landscape.",
      'A storyteller with public-facing experience in various industries, and an advocate for truth, Austin is constantly learning. He strives to leave a positive mark on this world through the power of storytelling, relentless effort, and camaraderie with fellow creatives and developers. His curious spirit delivers innovation and performant results consistently.',
    ],
  },
];

/**
 * Get all team members
 */
export function getAllTeamMembers(): TeamMember[] {
  return team;
}

/**
 * Get team member by name
 */
export function getTeamMemberByName(name: string): TeamMember | undefined {
  return team.find((member) => member.name === name);
}
