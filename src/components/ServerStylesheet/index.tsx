import { getCssText } from '@/styles'

export const ServerStylesheet = () => {
  return (
		<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
	)
}