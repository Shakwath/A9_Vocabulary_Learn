import React from 'react';
import { Link } from "react-router-dom";
import "./Tutorials.css"; // Import the CSS file

const Tutorials = () => {
    return (
        <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold text-center mb-4">
        Learn Vocabularies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="card card-border video-responsive">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/GADqvorP45M?si=aDZ-Vp92B9ggUjQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lI4c_R8Wxuc?si=YH9Ixt9JBW7gVJva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/mNX1wpIQ4Uk?si=m5FF_-zkfuNsnQa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XEGITixasIs?si=enC0d7NRqNrNSN6_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sDTCuXvSNFw?si=Wc2Wkgx5esQ8t_iX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/Vg4Yk8PTZ4k?si=DU6UZlPKKdwcQvoK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/startlearning" className="btn btn-primary mt-4">
          Start Lesson
        </Link>
      </div>
    </div>
    );
};

export default Tutorials;