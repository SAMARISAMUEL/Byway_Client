import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

import ProfileCard from "../components/ProfileCard";
const ProfilePage = () => {
  return (
    <div>
      <MainNavBar />
      <main className="flex">
        <div>
          <ProfileCard />
        </div>

        <form>
          <div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="email" placeholder="Last Name" />
            </div>
            <div>
              <label>HeadLine</label>
              <input type="text" placeholder="Headline" />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Say Something about yourself "
              ></textarea>
            </div>
            <div>
              <label htmlFor="">Language</label>
              <select name="" id="">
                <option value="">English</option>
                <option value="">French</option>{" "}
                <option value="">German</option> <option value="">Dutch</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <h3>Image Preview</h3>
              <div>
                <iframe src="" frameborder="0" className="w-[50%]"></iframe>
              </div>
            </div>
            <div>
              <h3>Add/Change Image</h3>
              <input type="file" name="" id="" />
              <button>Upload Image</button>
            </div>
          </div>
          <div>
            <h3>Links</h3>
            <div>
              <label>Instagram</label>
              <input type="text" placeholder="Instagram" />
            </div>
            <div>
              <label>Twitter</label>
              <input type="text" placeholder="Twitter" />
            </div>
            <div>
              <label>LinkedIn</label>
              <input type="text" placeholder="LinkedIn" />
            </div>
            <div>
              <label>YouTube</label>
              <input type="text" placeholder="YouTube" />
            </div>
            <div>
              <label>Website</label>
              <input type="text" placeholder="www." />
            </div>

            <div>
              <label>Facebook</label>
              <input type="text" placeholder="Facebook" />
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
