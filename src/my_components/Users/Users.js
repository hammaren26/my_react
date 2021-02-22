import React from 'react';
import s from "./Users.module.scss";
import userPhoto from "../../assets/images/16.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return (
                            <span
                                className={`${s.paginationItem} ${props.currentPage === page ? s.selected : ''}`}
                                onClick={(event) => {
                                    props.onPageChanged(page);
                                }}
                            >
                                {page}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img
                                            src={
                                                user.photos.small != null
                                                    ? user.photos.large
                                                    : userPhoto
                                            }
                                            alt=""
                                            className={s.usersLogo}
                                        />
                                    </NavLink>
                                </div>
                                <div> {
                                    user.followed
                                        ? <button onClick={
                                            () => {
                                                let base_url = `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`;
                                                axios.delete(base_url, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "ace3cadb-a0de-40a5-831b-91417c9feabb"
                                                    }
                                                }).then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                })
                                            }
                                        }>
                                            Unfollow
                                        </button>
                                        : <button
                                            onClick={
                                                () => {
                                                    let base_url = `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`;
                                                    axios.post(base_url, {}, {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "ace3cadb-a0de-40a5-831b-91417c9feabb"
                                                        }
                                                    }).then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(user.id);
                                                        }
                                                    })
                                                }
                                            }>
                                            Follow
                                        </button>
                                }
                                        </div>
                            </span>
                            <div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Users;