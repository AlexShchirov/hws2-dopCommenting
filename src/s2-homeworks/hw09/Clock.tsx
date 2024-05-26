import React, { useState, useEffect } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [date, setDate] = useState<Date>(
        new Date(restoreState("hw9-date", Date.now()))
    );
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        // Запуск таймера при монтировании компонента
        start();
        return () => stop(); // Очистка таймера при размонтировании компонента
    }, []);

    const start = () => {
        stop(); // Останавливаем предыдущий таймер, если он был
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    };

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }
    };

    const onMouseEnter = () => {
        setShow(true);
    };

    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString(); // Форматирование времени
    const stringDate = date.toLocaleDateString(); // Форматирование даты
    const stringDay = date.toLocaleString("en-us", { weekday: "long" }); // День недели
    const stringMonth = date.toLocaleString("en-us", { month: "long" }); // Месяц

    return (
        <div className={s.clock}>
            <div
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span>{stringDay}</span>, <strong>{stringTime}</strong>
            </div>

            {show && (
                <div className={s.more}>
                    <span>{stringMonth}</span>, <span>{stringDate}</span>
                </div>
            )}

            <div className={s.buttonsContainer}>
                <SuperButton disabled={!!timerId} onClick={start}>
                    start
                </SuperButton>
                <SuperButton disabled={!timerId} onClick={stop}>
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
