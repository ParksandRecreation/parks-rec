import { useState, useRef, useEffect } from 'react';

export const Timer = () => {
  const Ref: any = useRef(null);
  const [timer, setTimer] = useState('00:10');
  const [alert, setAlert] = useState(false);
  const getTimeRemaining = (e: HTMLElement) => {
    const total =
      Date.parse(e as unknown as string) -
      Date.parse(new Date() as unknown as string);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      seconds,
    };
  };
  const startTimer = (e: any) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      if (seconds <= 5) setAlert(true);
      setTimer('00:' + (seconds > 9 ? seconds : '0' + seconds));
    }
  };
  const clearTimer = (e: any) => {
    setTimer('00:10');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    setAlert(false);
    clearTimer(getDeadTime());
  };

  return (
    <div className="countdownWrapper">
      <h2 className={`${alert ? 'alert' : ''} countdown`}>{timer}</h2>
      <button className="resetBtn" onClick={onClickReset}>
        Reset
      </button>
    </div>
  );
};
