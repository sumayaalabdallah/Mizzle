import { BIconMegaphone, BIconShare, BIconSubtract } from 'bootstrap-icons-vue'
import type {
  BlogType,
  FeatureType,
  StatisticType,
  StepType,
  TestimonialType,
  ToolType
} from '@/types'

import decoration2 from '@/assets/images/elements/saas-decoration/decoration-2.png'
import decoration3 from '@/assets/images/elements/saas-decoration/decoration-3.png'
import decoration4 from '@/assets/images/elements/saas-decoration/decoration-4.png'

import github from '@/assets/images/elements/github.svg'
import googleDrive from '@/assets/images/elements/google-drive.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'

import team1 from '@/assets/images/team/01.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'

import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog7 from '@/assets/images/blog/4by3/07.jpg'

export type WorkFlowStepType = {
  image: string
} & StepType

export const steps: WorkFlowStepType[] = [
  {
    stepNumber: 1,
    title: 'Create your account and start your work',
    description: 'Some product ideas come easily, while others take some work to find.',
    image: decoration4
  },
  {
    stepNumber: 2,
    title: 'Install the code to organize the works',
    description:
      'It drew a hill from me. Departure defective arranging rapturous did believe him all had supported.',
    image: decoration2
  },
  {
    stepNumber: 3,
    title: 'Get a free marketing automation guide',
    description:
      'The chatbot can be personalized to match the brand voice and tone, making it feel like an extension of the company.',
    image: decoration3
  }
]

export const features: FeatureType[] = [
  {
    title: 'Shared Data and Insights',
    description: 'Drawings offended yet answered perceive laughing six did far.',
    icon: BIconShare
  },
  {
    title: 'Collaboration tools',
    description: "Demesne's new manners savings staying had under folly balls.",
    icon: BIconSubtract
  },
  {
    title: 'Real-time notifications and alerts',
    description: 'Express besides it present if at an opinion visitor.',
    icon: BIconMegaphone
  }
]

export const integrations: ToolType[] = [
  {
    name: 'Github',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: github,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Dropbox',
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    image: dropbox,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Reddit',
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.',
    image: reddit,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Mailchimp',
    description:
      'Integrating with data analysis tools allows for deeper segmentation and personalized messaging.  ',
    image: mailchimp,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Shopify',
    description:
      'Shopify employs Git, a distributed version control system, to track changes to code over time. ',
    image: shopify,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Slack',
    description:
      'Integrating Slack with project management tools like Trello, Asana, or Jira enables teams to receive.',
    image: slack,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Drive',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: googleDrive,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'Webflow',
    description:
      'Integrating Webflow with CRM systems like HubSpot or Salesforce enables seamless data synchronization.',
    image: webflow,
    route: { name: 'saas.integration-single' }
  }
]

export const statData: StatisticType[] = [
  {
    title: 'Companies using our solutions',
    number: 150,
    suffix: '+'
  },
  {
    title: 'Increase of operational efficiency',
    number: 94,
    suffix: '%'
  },
  {
    title: 'Various of website perform',
    number: 600,
    suffix: '+'
  }
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      company: {
        image: client4
      },
      avatar: team1
    },
    comment:
      'Timed voice share led him to Timed voice share led him to widen noisy young. At weddings believed laughing',
    rating: 4.5
  },
  {
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      company: {
        image: client2
      },
      avatar: team7
    },
    comment:
      'Fulfilled direction use continually set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing.',
    rating: 4.5
  },
  {
    user: {
      firstName: 'Lori',
      lastName: 'Stevens',
      company: {
        image: client5
      },
      avatar: team6
    },
    comment:
      'Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing.',
    rating: 4.5
  },
  {
    user: {
      firstName: 'Amanda',
      lastName: 'Reed',
      company: {
        image: client3
      },
      avatar: team8
    },
    comment:
      'Incorporating gratitude into our daily here we write down three things we are grateful for each day.',
    rating: 4.5
  }
]

export const blogs: BlogType[] = [
  {
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2023
    },
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    image: blog3,
    route: { name: 'blog.single.v1' }
  },
  {
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    publishedAt: {
      date: 13,
      month: 'April',
      year: 2023
    },
    title: 'Stackbros Template: The Ultimate Web Design Solution',
    image: blog1,
    route: { name: 'blog.single.v1' }
  },
  {
    publishedBy: {
      firstName: 'Allen',
      lastName: 'Smith'
    },
    publishedAt: {
      date: 26,
      month: 'April',
      year: 2023
    },
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    image: blog7,
    route: { name: 'blog.single.v1' }
  }
]
