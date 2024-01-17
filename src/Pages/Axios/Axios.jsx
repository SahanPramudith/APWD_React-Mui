import axios from "axios";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PostCard from "../../Component/PostCard/postCard.jsx";
import instance from "../../AxiosOder/AxiosOder.jsx";



export default function Axios() {

    useEffect(() => {
        getData()
    }, []);


    const [data, setData] = useState([])
    const [loder, setLoder] = useState(true)

    const getData = () => {
        instance.get('/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)
                setLoder(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
    const PostData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //
    // const UpdateData = () => {
    //     axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(err);
    //         });
    //
    // }
    //
    // const DeleteData = () => {
    //     axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
    //         method: 'DELETE',
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             if (error.response) {
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 console.log(error.request);
    //             } else {
    //                 console.log('Error', error.message);
    //             }
    //             console.log(error.config);
    //         });
    // }
    
    return(
        <div>
            <h1>Axios</h1>
            {
                loder ?
                    <Box>
                        <h1>Loding .....!</h1>
                    </Box>
                    :

                    <Box sx={{display: 'flex',flexWrap:'Wrap'}}>
                        {
                            data.map((val,index)=>(
                                <PostCard titel={val.title} id={val.id} description={val.body}/>
                            ))
                        }
                    </Box>
            }
            <br/>
            <br/>
            <Button variant="outlined" color="error" onClick={() => PostData()}>
                PostData
            </Button>
            <br/>
            <br/>
            {/*<Button variant="outlined" color="error" onClick={() => UpdateData()}>*/}
            {/*    update*/}
            {/*</Button>*/}
            {/*<br/><br/>*/}
            {/*<Button variant="outlined" color="error" onClick={() => DeleteData()}>*/}
            {/*    Delet*/}
            {/*</Button>*/}
        </div>
    )
}