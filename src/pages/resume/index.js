import React from "react";
import Resume from "./Resume";
import data from '../../data/mydetails.json';

const name = data.personalinfo.name;

export default Resume;

export const Head = () => <title>Resume | {name}</title>
