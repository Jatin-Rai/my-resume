import React from "react";
import Contact from "./Contact";
import data from '../../data/mydetails.json';

const name = data.personalinfo.name;

export default Contact;

export const Head = () => <title>Contact | {name}</title>