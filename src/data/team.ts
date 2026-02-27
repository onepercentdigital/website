/**
 * Team Member Data
 *
 * This file contains information about the One Percent Digital team members.
 * Used on the About page to display team bios and credentials.
 */

export interface TeamMember {
  name: string;
  initials: string;
  imageId: string;
  title: string;
  bio: string[];
  shortBio?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Luke Jordon',
    initials: 'LJ',
    imageId: '8440624d-eb0f-49a8-792a-f630c4777400',
    title: 'Co-Founder & Lead Optimization Architect',
    bio: [
      "Having worked with over 100 brands since 2015, Luke is a seasoned expert in top ranking SEO engineering and scaling strategies. His unique talent lies in effortlessly navigating Google algorithm updates while continuously boosting each client's online presence and securing maximum market share in their industry.",
      'In addition to his SEO expertise, Luke has successfully exited multiple E-commerce brands he co-founded, leveraging GEO, SEO, and paid advertising to drive growth. This hands-on experience equips him with the insights needed to manage various marketing channels effectively at scale. Now he brings that same expertise to help other businesses achieve their goals.',
    ],
    shortBio:
      'Co-founder with 100+ brand partnerships since 2015. Luke navigates Google algorithm updates while maximizing market share for every client.',
  },
  {
    name: 'Mackey Martin',
    initials: 'MM',
    imageId: '81748d2d-b7ed-492d-dfbf-c6b486e16d00',
    title: 'Co-Founder & Lead Optimization Architect',
    bio: [
      "Best defined as the bright mind behind One Percent Digital's flawless operational procedures and execution, Mackey possesses a laser focus and attention to detail second to none. From onboarding to the end goal of any project, he treats each business like his own, delves deep into their unique needs and adds significant value to every SEO strategy.",
      'Over the past decade, he co-founded and successfully exited several E-commerce brands using GEO, SEO, and paid advertising, which explains why he is so fluent in entrepreneurship. He is a businessman before an SEO expert and understands the ropes behind running a successful business. Now he channels that experience into helping others achieve similar success.',
    ],
    shortBio:
      'Co-founder with a decade of e-commerce experience. Mackey treats each business like his own, bringing laser focus to every SEO and GEO strategy.',
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
