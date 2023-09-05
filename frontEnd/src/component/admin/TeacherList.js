import React, {useState} from 'react';
import AdminApi from "../../api/AdminApi";

const TeacherList = ({teacherList}) => {


    function onDeleteTeacher(ecomingItem) {
        console.log(ecomingItem.teacherId);

          if (window.confirm("Are you sure you want to delete teacher?\ndetails:\n     teacher's name: " + ecomingItem.teacherName + "\n     teacher's Lastname: " +ecomingItem.teacherFamily  )) {
              //TODO: check
                window.open('http://localhost:8081/admin/deleteTeacher?teacherId='+ecomingItem.teacherId);

                 AdminApi.get('/deleteTeacher', {
                      params:{
                            teacherId : ecomingItem.teacherId
                      }
                  });

              }
    }


    return (
        <div>


            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Teacher's ID</th>
                    <th>Teacher's Name</th>
                    <th>Teacher's Last Name</th>
                    <th>List of Courses Taken by Teacher</th>
                    <th>Action</th>

                </tr>
                </thead>


                <tbody>


                {/*iteration row for all*/}

                {
                    teacherList.map(
                        anyItem =>
                            <tr key={anyItem.teacherId}>
                                <td data-label="Teacher's Id">{anyItem.teacherId}</td>
                                <td data-label="Teacher's Name">{anyItem.teacherName}</td>
                                <td data-label="Teacher's Last Name">{anyItem.teacherFamily}</td>
                                <td data-label="List of Courses Taken by Teacher"></td>

                                <td data-label="Action">
                                    <button onClick={() => {onDeleteTeacher(anyItem)} } className={"ui button"}>Delete</button>
                                </td>


                            </tr>
                    )

                }
                </tbody>
            </table>


        </div>
    );
}
export default TeacherList;