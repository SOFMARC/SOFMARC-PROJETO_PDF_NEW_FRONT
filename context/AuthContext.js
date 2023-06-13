import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";
import {login, cadastro} from '../services/database'
import { destroy } from 'cookie';
import useSWR from 'swr';

export const AuthContext = createContext({})


export function AuthProvider({children}){
    
    const [users_all, setUsers] =  useState(null)
    const [user, setUser] =  useState(null)
    const [uploads, setUploads] =  useState(null)


    useEffect(()=> {
        loadingStoreData()
        get_uploads_user()
    },[])


    const get_alls_users_clients = async () => {
        const { 'pdfreader.token': token } = parseCookies();
    
        console.log(token);
        try {
          if (token) {
            const res = await fetch(`http://4.150.57.210:5000/user/all`, { method: 'GET', headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            console.log('all users', data);
            setUsers(data);
            return data;
          } else {
            //setLoad(false)
          }
        } catch (error) {
          console.log('Failed to fetch users:', error);
          throw error;
        }
    };


    const loadingStoreData = async ()  => {
        const { 'pdfreader.token':token } = parseCookies();

            localStorage.setItem('token', token);
            try {
                const res = await fetch(`http://4.150.57.210:5000/auth`, { method: 'GET',  headers: {Authorization: `Bearer ${token}`} }) 
                const data = await res.json()
                if (data.status === "success authentication") {
                    //setUser(data);
                    //console.log("database", data)
                    //get_uploads_user();
                    setUser(data);
                    return data 
                } else {
                    console.log("faild autenticado")
                    signOut()
                }
            } catch {
                console.log("Failed to")
            }

      };



      const get_uploads_user = async ()  => {
        const { 'pdfreader.token':token } = parseCookies();
        
        console.log(token);
        try {
            if (token) {
                localStorage.setItem('token', token);
                //chamar query passando o token
                const res = await fetch(`http://4.150.57.210:5000/user/uploads`, { method: 'GET',  headers: {Authorization: `Bearer ${token}`} }) 
                const data = await res.json()
                console.log('uploads 2', data)
                setUploads(data)
                return data
            } else {
                //setLoad(false)
            }
        } catch {

        }
    };

    const { data } = useSWR('allUsers', get_alls_users_clients);

    //const { data:user } = useSWR('user', loadingStoreData);

    //const { data:uploads } = useSWR('uploads', get_uploads_user);





    const isAuthenticated = !!user;

    async function signIn(resp) {
        const data = await login(resp)
        console.log("login", data.data.token)
        if(data.data.status === 200) {

            setCookie(undefined, 'pdfreader.token', data.data.token, {
                maxAge: 60 * 60 * 5, //5 hour
            })


            loadingStoreData();

            get_uploads_user()

            Router.push('/components/dashboard/dashboard/')

            //await localStorage.setItem('@login-id', JSON.stringify(data.data));
        }
        
        return data
    }
    
    async function signUp(resp) {
        const data = await cadastro(resp)
        if(data.data.name !== 'error') {

            setCookie(undefined, 'pdfreader.token', data.data.token, {
                maxAge: 60 * 60 * 5, //5 hour
            })

            loadingStoreData();

            get_uploads_user()

            Router.push('/components/dashboard/dashboard/')
            //await localStorage.setItem('@login-id', JSON.stringify(data.data));
        }

        return data
    }

    async function signOut() {
        destroyCookie(null, 'pdfreader.token');
        destroyCookie(null, 'pdfreader.token');
        document.cookie = 'pdfreader.token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        //window.location.href  = '/'
        
    }



    const get_uploads_logs = async (id)  => {
        const { 'pdfreader.token':token } = parseCookies();
        
        try {
            if (token) {
                //chamar query passando o token
                const res = await fetch(`http://4.150.57.210:5000/logs/upload/${id}`, { method: 'GET'}) 
                const data = await res.json()
                console.log('all logs', data)

                return data
            } else {
                //setLoad(false)
            }
        } catch {

        }

    };

    return (
        <AuthContext.Provider value={{isAuthenticated, signIn, signUp, user, data, uploads, signOut, get_uploads_logs, get_uploads_user, loadingStoreData, get_alls_users_clients}}>
            {children}
        </AuthContext.Provider>
    )
}