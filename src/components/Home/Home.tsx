// import { css } from '@linaria/core';
import { Link } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { Button, Space, Spin, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
    // select
    selectCount,
    selectTodos,
    selectIsLoading,

    // actions
    increment,
    decrement,
    incrementByAmount,

    // async actions
    fetchTodos,
} from '../../redux/slices/HomeSlice/HomeSlice';

// const title = css`
//     color: red;
// `;

function Home() {
    const counter = useAppSelector(selectCount);
    const isLoading = useAppSelector(selectIsLoading);
    const todos = useAppSelector(selectTodos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleIncrement = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);

    const handleIncrementByAmount = useCallback(() => {
        dispatch(incrementByAmount(10));
    }, [dispatch]);

    if (isLoading) {
        return <Spin tip="Loading" size="large" />;
    }

    return (
        <Space direction="vertical">
            <Link to="/kekw">To kekw</Link>

            <Typography.Title type="danger">Home Page</Typography.Title>

            <Typography.Text type="success">
                counter = {counter}
            </Typography.Text>

            <Space>
                <Button size="middle" onClick={handleIncrementByAmount}>
                    inc by 10
                </Button>
                <Button size="middle" onClick={handleIncrement}>
                    increment
                </Button>
                <Button size="middle" onClick={handleDecrement}>
                    decrement
                </Button>
            </Space>

            {todos.map((todo) => (
                <Typography.Text key={todo.id}>{todo.title}</Typography.Text>
            ))}
        </Space>
    );
}

export default Home;
