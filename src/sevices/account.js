
import axiosInstance from '../utils/axiosConfig'
import { useNavigate } from "react-router-dom";
import { ACCOUNT_API_URL } from '../constant/apiUrls';

const headers = {
  'Content-Type': 'application/json'
}

export const EmployerSignup = (body) => {
  return axiosInstance.post(ACCOUNT_API_URL.employerSignup, body)
}
export const JobseekerSignup = (body) => {
  return axiosInstance.post(ACCOUNT_API_URL.jobSeekerSignup, body)
}
export const CandidatesSearch = (body) => {
  return axiosInstance.post(ACCOUNT_API_URL.candidatesSearch, body)
}


export const PostJob = (body) => {
  return axiosInstance.post(ACCOUNT_API_URL.postjob, body)
}
export const joblistSearch = (body) => {
  return axiosInstance.post(ACCOUNT_API_URL.jobList, body)
}