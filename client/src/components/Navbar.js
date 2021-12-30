import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';

import '../styles/App.css'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    '&:hover': {
        backgroundColor: blueGrey[700],
    },
}));


export default function Navbar() {
    return (
        <div>

            <nav>
                <Link className="initials animation" to="/">LCR</Link>
                <ul>

                    <li>
                        <ColorButton className="navBtn" variant="contained"><Link className="navBtn" to="/about">About</Link></ColorButton>
                    </li>
                    <li>
                        <ColorButton variant="contained"><Link className="navBtn" to="/projects">Projects</Link></ColorButton>
                    </li>
                    <li>
                        <ColorButton variant="contained"><HashLink className="navBtn" to="#contact">Contact</HashLink></ColorButton>
                    </li>
                    <li>
                        <ColorButton variant="contained"><Link className="navBtn" to="/resume">Resume</Link></ColorButton>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
