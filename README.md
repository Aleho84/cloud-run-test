<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_cloud_run_logo_icon_168148.png" alt="logo"></a>
</p>

<h3 align="center">cloud-run-test</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/aleho84/cloud-run-test)]()
[![Version](https://img.shields.io/github/package-json/v/alehodev/aleho-bot)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

</div>

---

<p align="center"> Simple example to deploy an Endpoint in Google Cloud
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
- [🚀 Deployment ](#-deployment-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)

## 🧐 About <a name = "about"></a>

This repository shows how to make a simple endpoint deployment done in nodejs and express by creating and using 'secrets' to store environment variables.

## 🏁 Getting Started <a name = "getting_started"></a>

1.  [Install the Google Cloud SDK](https://cloud.google.com/sdk/?hl=es).
1.  Acquire local credentials for authenticating with Google Cloud Platform APIs:

        gcloud auth application-default login

1.  Clone this repo:

        git clone https://github.com/Aleho84/cloud-run-test.git

1.  Install dependencies:

        npm install

1.  Run the sample with `npm` 

        npm start


1.  Visit the application at http://localhost:8080.


## 🚀 Deployment <a name = "deployment"></a>

To deploy a sample application:

1.  Use the [Google Cloud Console](https://console.cloud.google.com/) to create a Google Cloud Platform
    project.
1.  [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project.

1.  Use the Cloud SDK to deploy your app.

        gcloud app deploy

1.  View your deployed application at `https://YOUR_PROJECT_ID.appspot.com`.

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework

## ✍️ Authors <a name = "authors"></a>

- [@aleho84](https://github.com/aleho84) - Idea & Initial work
