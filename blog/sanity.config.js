import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Healthdrive',

  projectId: 'd5f7vek9',
  dataset: 'hdnblog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
