import { useContext } from "react";
import { NetworkContext } from "../context/NetworkContext";
import axios from 'axios';

export function FetchData() {
  const { setReqdetails, requests, setRequests } = useContext(NetworkContext);

  async function getDataUsingFetch() {
    try {
      let resp = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await resp.json();
      const reqDetail = {
        url: resp.url,
        method: "GET",
        type: "fetch",
        status: resp.status,
        headers: { 'content-type': 'application/json' },
        data: data,
      };
      setReqdetails(reqDetail);
      setRequests([...requests, reqDetail]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataUsingAxios() {
    try {
      let resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const reqDetail = {
        url: resp.config.url,
        method: resp.config.method.toUpperCase(),
        type: "axios",
        status: resp.status,
        headers: { 'content-type': 'application/json' },
        data: resp.data,
      };
      setReqdetails(reqDetail);
      setRequests([...requests, reqDetail]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataUsingFetchDoc() {
    try {
      let resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: { 'Content-Type': 'text/html' }
      });
      let data = await resp.json();
      const reqDetail = {
        url: resp.url,
        method: "GET",
        type: "doc",
        status: resp.status,
        headers: { 'content-type': 'text/html' },
        data: data,
      };
      setReqdetails(reqDetail);
      setRequests([...requests, reqDetail]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataUsingAxiosJS() {
    try {
      let resp = await axios.get("https://jsonplaceholder.typicode.com/comments", {
        headers: { 'Content-Type': 'application/javascript' }
      });
      const reqDetail = {
        url: resp.config.url,
        method: resp.config.method.toUpperCase(),
        type: "js",
        status: resp.status,
        headers: { 'content-type': 'application/javascript' },
        data: resp.data,
      };
      setReqdetails(reqDetail);
      setRequests([...requests, reqDetail]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={getDataUsingFetch}>Fetch</button>
      <button onClick={getDataUsingAxios}>axios</button>
      <button onClick={getDataUsingFetchDoc}>Doc </button>
      <button onClick={getDataUsingAxiosJS}> JS</button>
    </>
  );
}
