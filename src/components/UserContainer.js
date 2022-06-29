import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer(){

    //const value = useSelector(state => state);
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);
    //const error = useSelector(state => state.user.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return(
        <div>
            {loading && <div data-testid="loading">Loading...</div>}
            {users && users.map((user) =>
                <div key={user.id}>
                {user.name}
                </div>
            )}
        </div>
    )
}

export default UserContainer;
