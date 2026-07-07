import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class='bx bx-award about_icon'></i>

            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle"> 4 + Years
            </span>
        </div>

        <div className="about_box">
        <i class='bx bx-briefcase-alt about_icon' ></i>

            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">10 + Projects</span>
        </div>

        <div className="about_box">
        <i class='bx bx-git-branch about_icon' ></i>

            <h3 className="about_title">Open Source</h3>
            <span className="about_subtitle">6 + Merged PRs</span>
        </div>


    </div>
  )
}

export default Info
