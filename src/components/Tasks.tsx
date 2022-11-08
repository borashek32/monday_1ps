import React from 'react';
import {DataPropsType} from "../App";

type DataType = {
    data: DataPropsType
}

export const Tasks = (props: DataType) => {
    return (
        <div>
            <div>
                <h3>{props.data.title}</h3>
                <ul>
                    {props.data.tasks.map(el => {
                        return (
                            <li>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        );
                    })}
                </ul>
                <br/><br/>
                <h3>Students</h3>
                <ul>
                    {props.data.students.map(el => {
                        return (
                            <li>
                                <span>{el}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}