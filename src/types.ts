import * as Nexus from "nexusui";

export type Size = [number, number];

export type ToggleProps = {
  size?: Size;
  state?: boolean;
  onChange?: (state: boolean) => any;
};

export type ButtonMode = "button" | "aftertouch" | "impulse" | "toggle";

export type ButtonProps = {
  size?: Size;
  mode?: ButtonMode;
  state?: boolean;
  onChange?: (state: boolean) => any;
};

export type DialProps = {
  size?: Size;
  interaction?: "radial" | "vertical" | "horizontal";
  mode?: "absolute" | "relative";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
};

export type NumberProps = {
  size?: Size;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
};

export type PositionProps = {
  size?: Size;
  mode?: "absolute" | "relative";
  x?: number;
  y?: number;
  minX?: number;
  minY?: number;
  maxX?: number;
  maxY?: number;
  stepX?: number;
  stepY?: number;
  onChange?: (value: { x: number; y: number }) => any;
};
export type SliderProps = {
  size?: Size;
  mode?: "absolute" | "relative";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
};
export type EnvelopeProps = {
  size?: Size;
  noNewPoints?: boolean;
  points?: { x: number; y: number }[];
  onChange?: (points: { x: number; y: number }[]) => any;
};

export type MultisliderProps = {
  size?: Size;
  numberOfSliders?: number;
  min?: number;
  max?: number;
  step?: number;
  candycane?: number;
  values?: number[];
  smoothing?: number;
  mode?: "bar" | "line";
  onChange?: (change: { index: number; value: number }) => any;
};

export type PianoProps = {
  size?: Size;
  mode?: "button" | "toggle" | "impulse";
  lowNote?: number;
  highNote?: number;
  onChange?: (change: { note: number; state: boolean }) => any;
  onReady?: (piano: Nexus.piano) => any;
};

export type RadioButtonProps = {
  size?: Size;
  numberOfButtons?: number;
  active?: number;
  onReady?: (button: Nexus.RadioButton) => any;
  onChange?: (change: number) => any;
};

export type SelectChange = { value: string; index: number };

export type SelectProps = {
  size?: Size;
  options: string[];
  value?: string;
  selectedIndex?: number;
  onReady?: (select: Nexus.Select) => any;
  onChange?: (change: SelectChange) => any;
};

export type SequencerProps = {
  size?: Size;
  mode?: ButtonProps["mode"];
  rows?: number;
  columns?: number;
  onChange?: (change: SequencerChange) => any;
  onStep?: (change: boolean[]) => any;
  onReady?: (select: Nexus.Sequencer) => any;
  r?: React.Ref<null | Nexus.Sequencer>;
};

export type SequencerChange = { row: number; column: number; state: boolean };

export type TextButtonProps = {
  size?: Size;
  state?: boolean;
  text?: string;
  alternateText?: string;
  onChange?: (change: string) => any;
  onReady?: (textbutton: Nexus.TextButton) => any;
};

export type TiltProps = {
  size?: Size;
  active?: boolean;
  onChange?: (change: { x: number; y: number; z: number }) => any;
  onReady?: (tilt: Nexus.Tilt) => any;
};

export type PanProps = {
  size?: Size;
  value?: number;
  onChange?: (change: PanChange) => any;
  onReady?: (pan: Nexus.Pan) => any;
};

export type PanChange = { value: number; L: number; R: number };

export type Pan2DProps = {
  size?: Size;
  range?: number;
  mode?: "absolute" | "relative";
  speakers?: [number, number][];
  onChange?: (change: Pan2DChange) => any;
  onReady?: (pan: Nexus.Pan2DProps) => any;
};
export type Pan2DChange = number[];
