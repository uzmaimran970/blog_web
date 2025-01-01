import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '91gl6r32',
    dataset: 'blog'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
