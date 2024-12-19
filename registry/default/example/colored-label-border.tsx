import { ColoredLabel } from "@/registry/default/annui/colored-label"

export default function ColoredLabelBorder() {
  return (
    <div className="flex flex-wrap gap-2">
      <ColoredLabel color="#A294F9" variant="border">
        Border
      </ColoredLabel>
      <ColoredLabel color="#A294F9" variant="border" borderOpacity={1}>
        Border
      </ColoredLabel>
      <ColoredLabel color="#A294F9" variant="border" className="border-dashed">
        Dashed
      </ColoredLabel>
      <ColoredLabel
        color="#A294F9"
        variant="border"
        className="border-dashed"
        borderOpacity={1}
      >
        Dashed
      </ColoredLabel>
    </div>
  )
}
