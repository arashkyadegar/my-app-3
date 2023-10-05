import React from "react";
import { PropsWithChildren, useState } from "react";
import myAppContext from "./context/context";

export default function AddPost({props} : any)  {
  // const {createPostModal,setCreatePostModal} = React.useContext(myAppContext);
  const {userProfile,setUserProfile} = React.useContext(myAppContext);
  const {addPostForm,setAddPostForm} = React.useContext(myAppContext);
  const {addPostTagInput,setAddPostTagInput} = React.useContext(myAppContext);

   function createPost() {
    setUserProfile({
      ...userProfile,
      name : 'ashkan yadegar'
    })
   }

   function fillTag(event:any) {
      let text = event.target.value;
      setAddPostTagInput(text);
   }

   function addTags(event: any) {
    let text: string = addPostTagInput;
    if(text.length != 0) { 
      let list = addPostForm.tags;
      list.push(text);
        setAddPostForm({
                ...addPostForm,
                tags:list
              }
              ) 
    }
   setAddPostTagInput("");
   }

  function fillTitleText(event: any) {
    let text: string = event.target.value;
     if(text.length == 0) {
      setAddPostForm({
               ...addPostForm,
               titleError:"لطفا عنوان نظر خود را وارد کنید",
               formIsValid:false
            }
            ) 
     }else{
      setAddPostForm({
        ...addPostForm,
          titleError:"",
          title:text,
          formIsValid:true
        }
     ) 
     }
  }

  
  function fillBodyText(event: any) {
    let text: string = event.target.value;
     if(text.length == 0) {
            setAddPostForm({
               ...addPostForm,
               bodyError:"لطفا متن نظر خود را وارد کنید",
               formIsValid:false
            }
            ) 
     }else{
      setAddPostForm({
        ...addPostForm,
            bodyError:"",
            body:text,
           formIsValid:true
        }
     ) 
     } 
  }




  return (
      <div className=" flex flex-row w-3/6 overflow-hidden  border-gray-900 rounded-lg bg-white  shadow-xl shadow-gray-800">
      {/* left-col */}
      <div className=" flex flex-col items-center justify-center basis-1/4 bg-gradient-to-t from-purple-600 to-white">
            <img src="icons-new-post-64.png" alt="" />
      </div>
      {/* right-col */}
      <div className="basis-2/3 p-4">
        <div className="flex flex-col relative  mb-2">
          <label htmlFor="twitter-account" className="text-base pb-1">عنوان</label>
          <input onChange={fillTitleText} type="text" id="twitterAccount" name="twitter-account" className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8" />
          <p className="text-red-600 text-xs">{addPostForm.titleError}</p>
        </div>

        <div className="flex flex-col relative ">
          <label htmlFor="twitter-account" className="text-base pb-1">متن</label>
          <textarea onChange={fillBodyText} name="" id="" rows={3}  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"></textarea>

          <p className="text-red-600 text-xs">{addPostForm.bodyError}</p>

        </div>

        <div className="flex flex-col relative  mb-2">
          <label htmlFor="twitter-account" className="text-base pb-1">تگ ها</label>
          <div className="flex flex-row gap-2">
            <input onChange={fillTag}  type="text" id="twitterAccount" name="twitter-account" className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8" />
            <button onClick={addTags} className="bg-green-600 inline px-2  rounded-md text-white">ثبت</button>
          </div>
          <ul className="flex gap-2 p-2 flex-wrap">
            {addPostForm.tags.map((tag:any) => {
                return <li   className="bg-gray-400  text-xs inline px-3 py-2 rounded-full text-white hover:text-gray-500 shadow-md shadow-gray-500">{tag}</li>
            })}
          </ul>
       
        </div>


        <div className="flex justify-end">
          <button onClick={createPost} className="bg-green-600 inline px-4 py-2 rounded-md text-white">ثبت</button>
        </div>
        
      </div>

      </div>
    )
  }

