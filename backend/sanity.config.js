import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'first_sanity_project',

  projectId: '91gl6r32',
  dataset: 'blog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
