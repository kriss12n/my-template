import React,{Suspense, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Dashboard} from "../components/Dashboard";
import { useSocket } from "../hooks/useSockets";

export const AppRouter = () => {


    const dispatch = useDispatch();
    const { socket, conectarSocket, desconectarSocket, online } = useSocket("http://localhost:8000");
    // useEffect(() => {
    //     dispatch(loadSocketParams(socket, online))
    // }, [dispatch, online, socket]);

    // useEffect(() => {
        
    //         conectarSocket();
    //         console.log([socket,online]);
        
    // }, [ conectarSocket,socket ,online])


    // useEffect(() => {
        
    //         desconectarSocket();
        
    // }, [ desconectarSocket])

    useEffect(() => {
        socket?.on("lista-alertas", zonas => {
            // dispatch(loadUsers(zonas));
            console.log(zonas)
        })
    }, [socket, dispatch])


    return (
            <Suspense fallback={(<div>Loading...</div>)} >
        <Router>
                    
                <Switch>
                    <Dashboard>
                    
                    </Dashboard>
                </Switch>
        </Router>
            </Suspense>
    )
}
