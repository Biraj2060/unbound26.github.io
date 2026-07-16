export type Track = 'build' | 'battle'

export interface TrackTheme {
  key: Track
  label: string
  name: string
  accentVar: string
}
