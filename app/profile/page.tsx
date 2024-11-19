"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string;
}

interface ExtendedSession extends Session {
  user: ExtendedUser;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  image: string | null;
  joinDate: string;
  authProvider: string;
}

export default function Profile() {
  const { data: sessionData } = useSession();
  const session = sessionData as ExtendedSession;

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // Redirect to the homepage if the user is logged in
      router.push("/");
    }
  }, [session, router]);

  const [profileData, setProfileData] = useState<ProfileData>({
    name: session?.user?.name || "User Name",
    email: session?.user?.email || "user@example.com",
    bio: "AI enthusiast and technology lover",
    image: session?.user?.image || null,
    joinDate: "November 15, 2024",
    authProvider: session?.user?.provider || "email",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password change logic here
    setShowPasswordForm(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setProfileData({
            ...profileData,
            image: result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(profileData.authProvider);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-black text-white p-4 lg:p-8">
      <Header />
      {/* Main Content */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full sm:w-[70%] md:w-[60%] flex flex-col items-center gap-8 p-6">
          {/* Profile Header */}
          <div className="relative w-full flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-[#393A40] overflow-hidden">
                {profileData.image ? (
                  <Image
                    src={profileData.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    {profileData.name[0]}
                  </div>
                )}
              </div>
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            <div className="flex items-center gap-3">
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2 text-xl font-semibold"
                />
              ) : (
                <h1 className="text-2xl font-semibold">{profileData.name}</h1>
              )}
              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className="p-2 rounded-lg hover:bg-[#393A40] transition-colors"
              >
                {isEditing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="text-sm text-[#787A7E]">
              Member since {profileData.joinDate}
            </div>
          </div>

          {/* Current Plan */}
          <section className="w-full border-2 border-[#2E3036] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Current Plan</h2>
              <Link
                href="/upgrade"
                className="px-4 py-2 bg-[#D3830A]/15 text-white rounded-lg hover:bg-[#D3830A]/20 transition-colors"
              >
                Upgrade Plan
              </Link>
            </div>
            <div className="bg-[#1E1F23] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Pro Plan</h3>
                  <p className="text-[#787A7E]">$15/month</p>
                </div>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                  Active
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-[#2E3036]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#787A7E]">Next billing date:</span>
                  <span>December 19, 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* Profile Sections */}
          <div className="w-full space-y-6">
            {/* Account Info */}
            <section className="w-full border-2 border-[#2E3036] rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">
                Account Information
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[#787A7E]">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#787A7E]">Bio</label>
                  <textarea
                    value={profileData.bio}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    className="w-full bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2 min-h-[100px]"
                  />
                </div>
                <div className="pt-4 border-t border-[#2E3036]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Authentication Method</h3>
                      <p className="text-sm text-[#787A7E] mt-1">
                        {profileData.authProvider === "email"
                          ? "Email and Password"
                          : `Signed in with ${profileData.authProvider}`}
                      </p>
                    </div>
                    {profileData.authProvider === "email" && (
                      <button
                        onClick={() => setShowPasswordForm(!showPasswordForm)}
                        className="px-4 py-2 bg-[#393A40] rounded-lg hover:bg-[#4A4B52] transition-colors"
                      >
                        Change Password
                      </button>
                    )}
                  </div>

                  {showPasswordForm && profileData.authProvider === "email" && (
                    <form
                      onSubmit={handlePasswordChange}
                      className="mt-4 space-y-4"
                    >
                      <div className="space-y-2">
                        <label className="text-sm text-[#787A7E]">
                          Current Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              currentPassword: e.target.value,
                            })
                          }
                          className="w-full bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-[#787A7E]">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              newPassword: e.target.value,
                            })
                          }
                          className="w-full bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-[#787A7E]">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              confirmPassword: e.target.value,
                            })
                          }
                          className="w-full bg-black/0 border-2 border-[#2E3036] rounded-lg px-4 py-2"
                        />
                      </div>
                      <div className="flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setShowPasswordForm(false)}
                          className="px-4 py-2 bg-[#393A40] rounded-lg hover:bg-[#4A4B52] transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
