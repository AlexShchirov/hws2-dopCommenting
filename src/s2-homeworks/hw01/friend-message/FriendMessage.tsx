import React from "react";
import s from "./FriendMessage.module.css";
import { MessageType } from "../HW1";
import { screen } from "@testing-library/react";

// создать тип вместо any и отобразить приходящие данные
// ВСЕ ТОЖЕ САМОЕ, ЧТО И В КОМПОНЕНТЕ Message -ПОЭТОМУ ПОДСКАЗОК МЕНЬШЕ

export type FriendMessagePropsType = {
    message: MessageType;
};

const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={"hw1-friend-message-" + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    src={props.message.user.avatar}
                    id={"hw1-friend-avatar-" + props.message.id}
                    alt="тут должен быть аватар"
                    // создаёт студент
                />
                <div className={s.friendText}>
                    <div
                        id={"hw1-friend-name-" + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.message.text}
                        {/*создаёт студент*/}
                    </div>
                    <pre
                        id={"hw1-friend-text-" + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                        {/*создаёт студент*/}
                    </pre>
                </div>
            </div>
            <div
                id={"hw1-friend-time-" + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time}
            </div>
        </div>
    );
};

export default FriendMessage;
