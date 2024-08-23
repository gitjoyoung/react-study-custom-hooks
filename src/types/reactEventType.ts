// 클릭 이벤트는 다음과 같이 타입이 지정됩니다.
type ClickEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

// 키보드 이벤트는 다음과 같이 타입이 지정됩니다.
type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

// 폼 이벤트는 다음과 같이 타입이 지정됩니다.
type FormEventHandler = (event: React.FormEvent<HTMLElement>) => void;

// 휠 이벤트는 다음과 같이 타입이 지정됩니다.
type WheelEventHandler = (event: React.WheelEvent<HTMLElement>) => void;

// 드래그 이벤트는 다음과 같이 타입이 지정됩니다.
type DragEventHandler = (event: React.DragEvent<HTMLElement>) => void;

// 포커스 이벤트는 다음과 같이 타입이 지정됩니다.
type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;

// 터치 이벤트는 다음과 같이 타입이 지정됩니다.
type TouchEventHandler = (event: React.TouchEvent<HTMLElement>) => void;

// 트랜지션 이벤트는 다음과 같이 타입이 지정됩니다.
type TransitionEventHandler = (
  event: React.TransitionEvent<HTMLElement>
) => void;

// 애니메이션 이벤트는 다음과 같이 타입이 지정됩니다.
type AnimationEventHandler = (event: React.AnimationEvent<HTMLElement>) => void;
