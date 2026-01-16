import React from 'react'
import s from './Message.module.css'
<<<<<<< HEAD
import {message0} from "../HW1";
=======
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448

// нужно создать правильный тип вместо any
export type MessagePropsType = any

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
<<<<<<< HEAD
                    src={props.message.user.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
=======
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}

                        {/**/}
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
<<<<<<< HEAD
                {props.message.message.time}
=======
                {/*создаёт студент*/}

                {/**/}
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448
            </div>
        </div>
    )
}

export default Message
