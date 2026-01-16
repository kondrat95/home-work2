import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
<<<<<<< HEAD
                    src={props.message.user.avatar}
=======
                    // создаёт студент

                    //
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
<<<<<<< HEAD
                        {props.message.user.name}
=======
                        {/*создаёт студент*/}

                        {/**/}
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
<<<<<<< HEAD
                        {props.message.message.text}
=======
                        {/*создаёт студент*/}

                        {/**/}
>>>>>>> 039147c80769dc492ed26fd72cdef6b3ae7eb448
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
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

export default FriendMessage
