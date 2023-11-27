import React from "react";
import { PropsWithChildren, useState } from "react";
import myAppContext from "./context/context";
import { User, Post } from "@/models/entities";
import { PostService } from "@/services/postService";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { submitCreatePostAction } from "@/redux/store/posts";

export default function AddPost({ props }: any) {
  const { user } = useAppSelector((state) => state.entities);
  const { addPostForm, setAddPostForm } = React.useContext(myAppContext);
  const { addPostTagInput, setAddPostTagInput } =
    React.useContext(myAppContext);
  const { createPostModal, setCreatePostModal } =
    React.useContext(myAppContext);
    const dispatch = useAppDispatch();
  function createPost() {
    let post = new Post();
    post._id = "";
    post.author = {
      _id: user.data._id,
      name: "",
      img: "",
      password: "",
      token: "",
      remember: false,
      tags: [],
       likes: [],
      followers: [""],
      followings: [""],
    };
    post.title = addPostForm.title;
    post.body = addPostForm.body;
    post.rate = 0;
    post.date = "";
    post.tags = addPostForm.tags;
    post.img = "";
    post.isVisible = true;
    post.documents = [];
    post.links = [];
    post.comments = [];
    dispatch(submitCreatePostAction(post));
  }

  function fillTag(event: any) {
    let text = validator.escape(event.target.value);
    setAddPostTagInput(text);
  }

  function addTags(event: any) {
    let text: string = addPostTagInput;
    if (!validator.isEmpty(text)) {
      let list = addPostForm.tags;
      list.push(text);
      setAddPostForm({
        ...addPostForm,
        tags: list,
      });
    }
    setAddPostTagInput("");
  }

  function fillTitleText(event: any) {
    let text: string = validator.escape(event.target.value);

    if (validator.isEmpty(text)) {
      setAddPostForm({
        ...addPostForm,
        titleError: "لطفا عنوان نظر خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddPostForm({
        ...addPostForm,
        titleError: "",
        title: text,
        formIsValid: true,
      });
    }
  }

  function fillBodyText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddPostForm({
        ...addPostForm,
        bodyError: "لطفا متن نظر خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddPostForm({
        ...addPostForm,
        bodyError: "",
        body: text,
        formIsValid: true,
      });
    }
  }

  return (
    <div className=" flex flex-row w-3/6 overflow-hidden  border-gray-900 rounded-lg bg-white  shadow-xl shadow-gray-800">
      {/* left-col */}
      <div className=" flex flex-col items-center justify-center basis-1/4 bg-gradient-to-t from-purple-600 to-white">
        <img src="icons-new-post-64.png" alt="" />
      </div>
      {/* right-col */}
      <div className="container">
        <div className="basis-2/3 p-4">
          <div className="flex flex-col relative  mb-2">
            <label htmlFor="twitter-account" className="text-base pb-1">
              عنوان
            </label>
            <input
              onChange={fillTitleText}
              type="text"
              id="twitterAccount"
              name="twitter-account"
              className="outline-none rounded-lg bg-transparent border border-gray-400 p-1 pl-8 invalid:border-red-600"
            />
            <p className="text-red-400 text-xs">{addPostForm.titleError}</p>
          </div>

          <div className="flex flex-col relative mb-2">
            <label htmlFor="twitter-account" className="text-base pb-1">
              متن
            </label>
            <textarea
              onChange={fillBodyText}
              name=""
              id=""
              rows={3}
              className="outline-none rounded-lg bg-transparent border border-gray-400 p-1 pl-8"
            ></textarea>

            <p className="text-red-400 text-xs">{addPostForm.bodyError}</p>
          </div>

          <div className="flex flex-col relative  mb-2">
            <label htmlFor="twitter-account" className="text-base pb-1">
              تگ ها
            </label>
            <div className="flex flex-row gap-2">
              <input
                onChange={fillTag}
                type="text"
                id="twitterAccount"
                name="twitter-account"
                className="outline-none w-full rounded-lg bg-transparent border border-gray-400 p-1 pl-8"
              />
              <button
                onClick={addTags}
                className="bg-blue-400 hover:bg-blue-600 transition-all duration-200 inline px-3 py-2   rounded-md text-white"
              >
                +
              </button>
            </div>
            <ul className="flex gap-2 p-2 flex-wrap">
              {addPostForm.tags.map((element: any) => {
                return (
                  <li className="bg-gray-400  text-xs inline px-3 py-2 rounded-full text-white hover:text-gray-500 shadow-md shadow-gray-500">
                    {element}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={createPost}
              className="bg-blue-400 hover:bg-blue-600 transition-all duration-200  inline px-4 py-2 rounded-md text-white"
            >
              ثبت
            </button>

            <button
              onClick={() => setCreatePostModal(false)}
              className="bg-red-400 hover:bg-red-600 transition-all duration-200 inline px-4 py-2 rounded-md text-white"
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
