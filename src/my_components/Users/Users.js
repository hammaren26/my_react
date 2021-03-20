import React from 'react';
import s from "./Users.module.scss";
import userPhoto from "../../assets/images/16.jpg";
import {NavLink} from "react-router-dom";


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
                                <div>
                                    {
                                        user.followed
                                            ? <button
                                                disabled={props.followingInProgress.some(id => id === user.id)}
                                                onClick={() => {props.unfollow(user.id)}}
                                              >
                                                Unfollow
                                              </button>

                                            : <button
                                                disabled={props.followingInProgress.some(id => id === user.id)}
                                                onClick={() => {props.follow(user.id)}}
                                              >
                                                Follow
                                              </button>
                                    }
                                </div>
                                    </span>
                            <div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>Статус: {user.status}</div>
                                    <div>Айдишник: {user.id}</div>
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