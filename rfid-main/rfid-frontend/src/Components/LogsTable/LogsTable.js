import style from "./LogsTable.module.css";
import RefreshButton from "../RefreshButton";
import { URL_GET_LOGS } from "../../Constants/axios";


import axios from "axios";
import { useState, useEffect } from "react";

export default function LogsTable(second) {
    const [logs, setLogs] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getLogs = async () => {
        await axios.get(URL_GET_LOGS).then((val) => {
            setLogs(val.data);
        });
    };


    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        getLogs();
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getLogs();
    //     }, 5000);
    //     return () => {
    //         setRefresh(false)
    //         clearInterval(interval);
    //     };
    // }, [refresh]);

    return (
        <div style={{ width: "100%" }}>
            <RefreshButton onClick={() => setRefresh(true)} />
            <table className={style.logsTable}>
                <tr>
                    <th>LogId</th>
                    <th>UserId</th>
                    <th>LogType</th>
                    <th>LogDate</th>
                </tr>

                {logs.map((log) => {
                    return (
                        <tr>
                            <td>{log.LogId}</td>
                            <td>{log.UserId}</td>
                            <td>{log.LogType}</td>
                            <td>{log.LogDate}</td>
                        </tr>
                    );
                })}
            </table>
        </div>

    );
}
