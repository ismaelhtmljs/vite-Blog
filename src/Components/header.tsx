import React from "react";
import { FaGithub, FaWindows } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaMastodon } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { Link } from "react-router-dom";

function GithubCLICK() {
    window.open('https://github.com/vitejs', 'bank_');
}

function DiscordCLICK() {
    window.open('https://discord.com/invite/aYVNktYeEB', 'bank_');
}

function TwitterCLICK() {
    window.open('https://x.com/vite_js','bank_');
}

function BluesSky() {
    window.open('https://bsky.app/profile/vite.dev', 'bank_');
}

function Mastodon(){
    window.open('https://elk.zone/m.webtoo.ls/@vite','bank_');
}

function Header() {
    return(
        <header>
            <nav>
                <div className="titulo">
                    <h1>VITE</h1><SiVite className="vite-icon"/>
                    <div className="Frase">
                        <p>acelera hoy, innova mañana.</p>
                    </div>
                    <p>Encuéntranos online</p>
                    <div className="iconos">
                        <FaGithub style={{ color: '#ffffff', fontSize: '2rem' }}  className="GitHubICON" onClick={GithubCLICK}/>
                        <FaDiscord style={{ color: '#5865F2', fontSize: '2rem' }} className="DiscordICON" onClick={DiscordCLICK}/>
                        <FaTwitter style={{ color: '#ffffff', fontSize: '2rem' }} className="TwitterICON" onClick={TwitterCLICK}></FaTwitter>
                        <FaBluesky style={{ color: '#00A6D6', fontSize: '2rem', cursor: 'pointer' }} className="BluesSkyICON" onClick={BluesSky}></FaBluesky>
                        <FaMastodon style={{ color: '#3088d4', fontSize: '2rem', cursor: 'pointer' }} className="MastodonICON" onClick={Mastodon}/>
                    </div>
                </div>
                <div className="opcionesHeader">
                    <ul>
                        <li><Link to="/" >Vite Blog</Link></li>
                        <li><Link to="/What-is-vite" >Que es <strong>VITE</strong></Link></li>
                        <li><Link to="/Documentation" >Documentación de <strong>vite</strong></Link></li>
                        <li><Link to="/Vite-test" >Prueba <strong>VITE</strong></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;