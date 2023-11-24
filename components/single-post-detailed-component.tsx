import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import SingleCommentComponent from "./single-comment-component";
import React from "react";
import { CommentForm } from "@/models/entities";
import { CommentService } from "@/services/commentService";
import { LikeService } from "@/services/likeService";
import validator from "validator";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import {
  selectedPostLike,
  selectedPostDislike,
  selectedPostUpdated,
} from "@/redux/store/selectedPost";
import { commentsRecieved } from "../redux/store/comments";
import * as actions from "../redux/store/api";

export default function SinglePostDetailedComponent(this: any, { props }: any) {
  const post = props.post[0];
  const comments = props.comments;
  const postId = props.postId;
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.entities.user);
  const selectedPostState = useAppSelector(
    (state) => state.entities.selectedPost
  );

  const commentsState = useAppSelector((state) => state.entities.comments);
  const [postDrpDwnHide, setPostDrpDwnHide] = useState(false);
  const [firstRender, setFirstrender] = useState(false);
  const [commentForm, setCommentForm] = useState(new CommentForm());

  async function submitDeleteLike(event: any): Promise<void> {
    console.log('ok');
    if (userState.data._id) {
      dispatch(
        actions.apiCallBegan({
          url: "/likes/",
          method: "DELETE",
          onSuccess: "selectedPost/selectedPostDislike",
          body: JSON.stringify({
            userId: userState.data._id,
            postId: selectedPostState.data._id,
            date: ""
          }),
        })
      );
      dispatch(selectedPostDislike({ liked: false }));
    } else {
      Swal.fire({
        title: "خطا در انجام عملیات!",
        text: "برای حذف در علاقه مندی ها وارد سایت شوید",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  }

  async function submitSendLike(event: any): Promise<void> {
    if (userState.data._id) {
      dispatch(
        actions.apiCallBegan({
          url: "/likes/",
          method: "POST",
          onSuccess: "selectedPost/selectedPostLike",
          body: JSON.stringify({
            userId: userState.data._id,
            postId: selectedPostState.data._id,
            date: ""
          }),
        })
      );
      dispatch(selectedPostDislike({ liked: true }));
    } else {
      Swal.fire({
        title: "خطا در انجام عملیات!",
        text: "برای ثبت در علاقه مندی ها وارد سایت شوید",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  }

  useEffect(() => {
   // if (firstRender) {
      //loadComments();
      // setFirstrender(true);
       dispatch(
        selectedPostUpdated({
          _id: post._id,
          author: post.author,
          title: post.title,
          body: post.body,
          rate: post.rate,
          img: post.img,
          date: post.date,
          isVisible: post.isVisible,
          documents: post.documents,
          tags: post.tags,
          links: post.links,
          likes: post.likes,
          comments: post.comments,
          liked: post.liked,
        })
      );
   // }
    dispatch(commentsRecieved(comments));
  }, []);

  moment.locale();

  const togglePostDrpDwn = () => {
    setPostDrpDwnHide(!postDrpDwnHide);
  };

  function loadComments() {
    dispatch(
      actions.apiCallBegan({
        url: "/comments/" + postId,
        method: "GET",
        onSuccess: "comments/commentsRecieved",
      })
    );
  }

  function fillCommentText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setCommentForm({
        ...commentForm,
        commentTextError: "لطفا متن نظر خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setCommentForm({
        ...commentForm,
        commentTextError: "",
        commentText: text,
        formIsValid: true,
      });
    }
  }

  async function submitSendComment(event: any): Promise<void> {
    event.preventDefault();
    if (userState.data._id) {
      if (commentForm.formIsValid) {
        dispatch(
          actions.apiCallBegan({
            url: "/comments/" + postId,
            method: "POST",
            onSuccess: "",
            body: JSON.stringify({
              userId: userState.data._id,
              postId: postId,
              commentId: "",
              text: commentForm.commentText,
              rate: 0,
              isVisible: false,
              date: "",
            }),
          })
        );
        loadComments();
      }
    } else {
      Swal.fire({
        title: "خطا در انجام عملیات!",
        text: "برای ثبت نظر لطفا وارد سایت شوید",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  }
  return (
    <div
      key={post._id}
      className=" text-sm rounded-lg  overflow-hidden border border-gray-400 shadow-lg"
    >
      <div className="flex flex-col bg-white ">
        <div className="bg-white flex flex-row p-2 ">
          <div className=" w-full flex-wrap flex flex-row ">
            {/* img-div  */}
            <div className="">
              <img
                src={
                  post.author === undefined
                    ? "unknown-avatar.png"
                    : post.author.img
                }
                alt="avatar"
                className=" cursor-pointer aspect-square w-16 h-16 rounded-full mr-2 shadow-sm shadow-black"
              />
            </div>
            <div className="flex flex-col p-4 ">
              <h3 className="w-full font-bold text-sm mb-1">
                {post.author === undefined ? "unknown" : post.author.name}
              </h3>
              <h3 className="text-xs ">
                {moment(new Date(post.date)).subtract(10, "days").calendar()}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 text-gray-600 float-right"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h3>
            </div>
            <div className="relative grow  flex justify-end items-center text">
              <div
                className="relative   h-10 items-end"
                x-data="{userOptsDropDwn : false}"
              >
                <svg
                  onClick={togglePostDrpDwn}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600  cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
                {postDrpDwnHide && (
                  <ul className="bg-gray-200 text-gray-500  rounded-md w-auto absolute left-5 top-0 flex flex-col p-2 text-left divide-y-2 gap-1">
                    <li className="cursor-pointer hover:text-gray-900">
                      follow
                    </li>
                    <li className="cursor-pointer hover:text-gray-900">
                      Message
                    </li>
                    <li className="cursor-pointer hover:text-gray-900">
                      Block
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className=" w-full flex flex-row justify-between">
              <div className="flex flex-row p-4 gap-2">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-amber-950"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <h3 className="text-xs">
                    {moment(new Date(post.date), "YYYYMMDD").fromNow()}
                  </h3>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-green-800 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <h3 className="text-xs">Bojnourd</h3>
                </div>
              </div>
              <div className="flex flex-row m-4 gap-2 ">
                <div>
                  {selectedPostState.data.liked && (
                    <a>
                      <img
                        src="icons8-heart-red-filled.png"
                        className="w-8 h-8 cursor-pointer"
                        onClick={submitDeleteLike}
                      />
                    </a>
                  )}

                  {!selectedPostState.data.liked && (
                    <a>
                      <img
                        src="icons8-heart-black-empty.png"
                        className="w-8 h-8 cursor-pointer"
                        onClick={submitSendLike}
                      />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-center  bg-red-300 hover:bg-red-400 p-1 rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer bg-transparent text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center  bg-green-300 hover:bg-green-400 p-1  rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer bg-transparent text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4">
            <div className="">
              <h3 className="font-bold">{post.title}</h3>
            </div>
            <div className="flex   flex-col justify-between text-justify py-3">
              <div>
                <p className="line-clamp-2 mb-5">{post.body}</p>
              </div>
              <div className="flex justify-end text-blue-600 font-semibold">
                <Link
                  href={{
                    pathname: `/single-post`,
                    query: { postId: postId },
                  }}
                >
                  {" "}
                  مشاهده
                </Link>
              </div>
            </div>
          </div>

          {/* <div className=" pb-5 flex gap-2 flex-wrap">

          {props.tags.map((tag:any) => {
          return <button  className="bg-gray-400  text-xs inline px-3 py-2 rounded-full text-white hover:text-gray-500 shadow-md shadow-gray-500">{tag}</button>
          })}
        
          
          </div> */}
          <div className="py-5 px-5 border-y text-gray-600 border-black flex flex-row justify-between">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-2">
                {/* heart-svg  */}
                <a>{selectedPostState.data.likes.length} نفر پسندیدند</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <a>{commentsState.list.length} نظر</a>
                {/* comments-svg  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <form>
                <div className="flex flex-row flex-wrap w-full bg-white gap-2 ">
                  <label htmlFor="twitter-account" className="text-base ">
                    متن
                  </label>
                  <textarea
                    required
                    onChange={fillCommentText}
                    name=""
                    id=""
                    rows={2}
                    className="peer w-10/12 outline-none rounded-lg bg-transparent border border-gray-600 p-2"
                  ></textarea>
                  <button
                    type="submit"
                    onClick={submitSendComment}
                    className=" bg-green-400 h-10 inline px-4 py-2 rounded-md text-white"
                  >
                    ارسال
                  </button>
                  <p className="invisible peer-invalid:visible mr-8 text-red-600 text-xs ">
                    "لطفا متن پیام خود را بنویسید"
                  </p>
                </div>
              </form>
            </div>

            {/* visit-svg */}
            <div className="flex flex-row">
              <a>۵۱۲</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {commentsState.list.map((comment: any) => {
            return <SingleCommentComponent key={comment._id} props={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}
