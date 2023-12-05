"use client";

import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import { useState } from "react";
import Image from "next/image";

import profileImg from "../../public/images/profile.png";

import editIcon from "../../public/icons/EditIcon.png";
import closeIcon from "../../public/icons/CloseXIcon.png";
import updateIcon from "../../public/icons/UpdateIcon.png";

const ProfilePage = () => {
  const [isShowSingleModal, setIsShowSingleModal] = useState(false);
  const [singleModalTitle, setSingleModalTitle] = useState("");
  const [singleModalPlaceholder, setSingleModalPlaceholder] = useState("");
  const [isShowPasswordModal, setIsShowPasswordModal] = useState(false);
  const [isShowCropImageModal, setIsShowCropImageModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const updateImage = () => {
    setIsShowCropImageModal(true);
  }

  const updateName = () => {
    setIsShowSingleModal(true);
    setSingleModalTitle("Update Username");
    setSingleModalPlaceholder("Username...");
  };

  const updateEmail = () => {
    setIsShowSingleModal(true);
    setSingleModalTitle("Update Email");
    setSingleModalPlaceholder("Email...");
  };

  const updatePhone = () => {
    setIsShowSingleModal(true);
    setSingleModalTitle("Update Phone number");
    setSingleModalPlaceholder("Phone number...");
  };

  const updateJobTitle = () => {
    setIsShowSingleModal(true);
    setSingleModalTitle("Update Job Title");
    setSingleModalPlaceholder("Job Title...");
  };

  const updatePassword = () => {
    setIsShowPasswordModal(true);
  };

  return (
    <div className="flex">
      <SideBar index={-1} />
      <div className="absolute left-[320px] w-panel h-[100vh] bg-gray-4">
        <Header title={"My Profile"} />

        <div className="m-[40px] ml-[52px]">
          <p className="m-[20px] text-gray-10 font-bold">Profile Image</p>

          <div className="flex flex-wrap items-end">
            <Image
              src={profileImg}
              width={175}
              height={175}
              alt="Profile Image"
              className="rounded-[23px] ml-[40px]"
            />
            <button className="mx-[24px] mt-[24px] h-fit bg-gray-5 rounded-[24px] px-[16px] py-[12px] font-small shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 text-white flex items-center" onClick={updateImage}>
              <Image src={updateIcon} width={25} height={25} alt="close" />
              <p className="ml-[10px] font-bold">Update</p>
            </button>
          </div>
        </div>

        <hr className="m-[40px] ml-[72px] h-[2px] bg-gray-10 max-w-[1072px]" />

        <div className="m-[40px] ml-[62px]">
          <div className="flex items-center">
            <p className="m-[10px] text-gray-10 font-bold w-[90px]">Name: </p>
            <p className="m-[10px] text-white font-bold w-[200px]">
              Kyle Szostek{" "}
            </p>
            <button className="w-[20px] h-[20px]" onClick={updateName}>
              <Image src={editIcon} width={20} height={20} alt="Edit Name" />
            </button>
          </div>
          <div className="flex items-center">
            <p className="m-[10px] text-gray-10 font-bold w-[90px]">Email: </p>
            <p className="m-[10px] text-white font-bold w-[200px]">
              kyle@gmail.com{" "}
            </p>
            <button className="w-[20px] h-[20px]" onClick={updateEmail}>
              <Image src={editIcon} width={20} height={20} alt="Edit Email" />
            </button>
          </div>
          <div className="flex items-center">
            <p className="m-[10px] text-gray-10 font-bold w-[90px]">Phone: </p>
            <p className="m-[10px] text-white font-bold w-[200px]">
              800-555-1235{" "}
            </p>
            <button className="w-[20px] h-[20px]" onClick={updatePhone}>
              <Image
                src={editIcon}
                width={20}
                height={20}
                alt="Edit Phone number"
              />
            </button>
          </div>
          <div className="flex items-center">
            <p className="m-[10px] text-gray-10 font-bold w-[90px]">
              Job Title:{" "}
            </p>
            <p className="m-[10px] text-white font-bold w-[200px]">
              SR.VDC Engineer{" "}
            </p>
            <button className="w-[20px] h-[20px]" onClick={updateJobTitle}>
              <Image
                src={editIcon}
                width={20}
                height={20}
                alt="Edit Job Title"
              />
            </button>
          </div>
          <div className="flex items-center">
            <p className="m-[10px] text-gray-10 font-bold w-[90px]">
              Password:{" "}
            </p>
            <p className="m-[10px] text-white font-bold w-[200px]">
              ***************{" "}
            </p>
            <button className="w-[20px] h-[20px]" onClick={updatePassword}>
              <Image
                src={editIcon}
                width={20}
                height={20}
                alt="Edit Password"
              />
            </button>
          </div>
        </div>
      </div>

      {isShowCropImageModal && (
        <div
          id="modal_image"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-[490px] max-h-full">
            <div
              className="fixed bg-black opacity-30 w-[100vw] h-[100vh] left-0 top-0"
              onClick={() => setIsShowCropImageModal(false)}
            ></div>
            <div className="relative bg-gray-4 border-[1px] border-gray-6 rounded-[26px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6">
              <div className="flex items-center justify-center p-4 md:p-5 ">
                <h3 className="text-center text-xl font-semibold dark:text-white text-small text-white">
                  Crop Picture
                </h3>
                <button
                  type="button"
                  className="absolute right-0 mr-[20px] text-white bg-gray-8 hover:bg-gray-200 hover:text-gray-900 rounded-[55px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setIsShowCropImageModal(false)}
                >
                  <Image src={closeIcon} width={20} height={20} alt="close" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="mx-[50px] my-[30px] flex justify-center items-end">
                <Image src={profileImg} width={224} height={224} alt="profile image" className="mx-[13px]"/>
                <Image src={profileImg} width={142} height={142} alt="profile image" className="mx-[13px]"/>
              </div>
              <div className="flex justify-center items-center p-4 md:p-5 mx-[60px]">
                <button
                  type="button"
                  className="rounded-[24px] text-white bg-gray-5 mx-[6px] py-[12px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 w-full"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-[24px] text-white bg-gray-7 mx-[6px] py-[12px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 w-full"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isShowSingleModal && (
        <div
          id="modal_single"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-[520px] max-h-full">
            <div
              className="fixed bg-black opacity-30 w-[100vw] h-[100vh] left-0 top-0"
              onClick={() => setIsShowSingleModal(false)}
            ></div>
            <div className="relative bg-gray-4 border-[1px] border-gray-6 rounded-[26px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6">
              <div className="flex items-center justify-center p-4 md:p-5 ">
                <h3 className="text-center text-xl font-semibold dark:text-white text-small text-white">
                  {singleModalTitle}
                </h3>
                <button
                  type="button"
                  className="absolute right-0 mr-[20px] text-white bg-gray-8 hover:bg-gray-200 hover:text-gray-900 rounded-[55px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setIsShowSingleModal(false)}
                >
                  <Image src={closeIcon} width={20} height={20} alt="close" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="mx-[50px] my-[40px] flex justify-center">
                <input
                  className="bg-gray-3 text-gray-11 placeholder:italic rounded-[33px] px-[30px] py-[16px] focus:border-none focus:outline-none w-full focus:ring-0 border-none"
                  type="text"
                  placeholder={singleModalPlaceholder}
                />
              </div>
              <div className="flex justify-center items-center p-4 md:p-5">
                <button
                  type="button"
                  className="rounded-[24px] text-white bg-gray-5 px-[90px] py-[12px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isShowPasswordModal && (
        <div
          id="modal_password"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-[690px] max-h-full">
            <div
              className="fixed bg-black opacity-30 w-[100vw] h-[100vh] left-0 top-0"
              onClick={() => setIsShowPasswordModal(false)}
            ></div>
            <div className="relative bg-gray-4 border-[1px] border-gray-6 rounded-[26px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6">
              <div className="flex items-center justify-center p-4 md:p-5 ">
                <h3 className="text-center text-xl font-semibold dark:text-white text-small text-white">
                  Change Password
                </h3>
                <button
                  type="button"
                  className="absolute right-0 mr-[20px] text-white bg-gray-8 hover:bg-gray-200 hover:text-gray-900 rounded-[55px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setIsShowPasswordModal(false)}
                >
                  <Image src={closeIcon} width={20} height={20} alt="close" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="mx-[70px] my-[10px] flex justify-center flex-col">
                <input
                  className="bg-gray-3 text-gray-11 placeholder:italic rounded-[33px] px-[30px] py-[16px] focus:border-none focus:outline-none w-full focus:ring-0 border-none my-[12px]"
                  type="password"
                  placeholder="Current Password..."
                />
                <input
                  className="bg-gray-3 text-gray-11 placeholder:italic rounded-[33px] px-[30px] py-[16px] focus:border-none focus:outline-none w-full focus:ring-0 border-none my-[12px]"
                  type="password"
                  placeholder="New Password..."
                />
                <input
                  className="bg-gray-3 text-gray-11 placeholder:italic rounded-[33px] px-[30px] py-[16px] focus:border-none focus:outline-none w-full focus:ring-0 border-none my-[12px]"
                  type="password"
                  placeholder="Confirm New Password..."
                />
              </div>
              <div className="flex justify-center items-center p-4 md:p-5">
                <button
                  type="button"
                  className="rounded-[24px] text-white bg-gray-5 px-[90px] py-[12px] shadow-md drop-shadow-0 drop-shadow-y-3 blur-6"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;