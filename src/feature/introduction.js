import React from "react";
import {
  OrbitControls,
  RenderTexture,
  PerspectiveCamera,
  Text,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import contacts from "../constant/contacts";
import introduction from "../constant/introductionText";

const Introduction = () => {
  return (
    <div id="intro" className="container text-center vh-100  main">
      <div className="row vh-100 align-items-center">
        <div className="col personalInfo">
          <div className="row title">
            <h3>My name is</h3>
            <h1 className="display-1 name name-animation"> </h1>
            <h2>Full-stack Developer, UI/UX Designer, Team Player</h2>
            <p dangerouslySetInnerHTML={{ __html: introduction.text }} />
          </div>
          <div className="row contact align-items-center">
            <a
              className="col contact-animation"
              href={`tel:${contacts.phone}`}
              style={{ "--i": "1" }}
            >
              <i className="fa-solid fa-phone fa-xl"></i>
            </a>
            <a
              className="col contact-animation"
              href={`mailto:${contacts.email}`}
              style={{ "--i": "2" }}
            >
              <i className="fa-solid fa-at fa-xl"></i>
            </a>
            <a
              className="col contact-animation"
              href={contacts.linkedin}
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "3" }}
            >
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a
              className="col contact-animation"
              href={contacts.github}
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "4" }}
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </div>
        </div>
        <div id="card" className="col">
          <Canvas style={{ position: "absolute"}}>
            {/* only threejs element inside of <Canvas></Canvas> */}
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[3, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#FFF380"
                attach="material"
                distort={0.2}
                speed={1}
              />
            </Sphere>
          </Canvas>
          <img
            className="photo-card-photo img-responsive photo-card photo-card-photo-animation"
            src="./imgs/profile.jpg"
            alt="profile"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
