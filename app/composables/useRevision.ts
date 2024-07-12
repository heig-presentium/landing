export function useRevision(): string {
  const { public: { revision } } = useRuntimeConfig()
  return revision
}
