import React, { Component } from "react";
import {
  List,
  ContainerFooter,
  ContainerIcones,
  ColumnInfo,
} from "./styleFooter";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsApple,
} from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export class Footers extends Component {
  render() {
    return (
      <ContainerFooter>
        <ColumnInfo>
          <h3>Serviços</h3>
          <ul>
            <List>Assistência Técnica</List>
            <List>Aulas</List>
            <List>Autos</List>
            <List>Consultoria</List>
            <List>Design e Tecnologia</List>
          </ul>
        </ColumnInfo>

        <ColumnInfo>
          <h3>Institucional</h3>
          <ul>
            <List>Quem somos</List>
            <List>Relação com investidores</List>
            <List>Trabalhe conosco</List>
            <List>Profissionais verificados</List>
            <List>Blo do GetNinjas</List>
          </ul>
        </ColumnInfo>

        <ColumnInfo>
          <h3>Redes Sociais</h3>

          <ContainerIcones>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={40} color={"#7866be"} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={40} color={"#7866be"} />
            </a>
            <a
              href="https://twitter.com/home?lang=pthttps://twitter.com/home?lang=pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={40} color={"#7866be"} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube size={40} color={"#7866be"} />
            </a>
          </ContainerIcones>
        </ColumnInfo>

        <ColumnInfo>
          <h3>Downloads</h3>

          <ContainerIcones>
            <a
              href="https://play.google.com/store/?utm_source=latam_Med&utm_medium=hasem&utm_content=Jul1520&utm_campaign=Evergreen&pcampaignid=MKT-FDR-latam-br-1002290-Med-hasem-py-Evergreen-Jul1520-Text_Search_BKWS-2072327022&gclid=Cj0KCQjwxtSSBhDYARIsAEn0thQSDMw_ulw46IfuSrI9GirvzgPchCivj3Hm-eskj-5vGP6wUE9zoKsaAi-UEALw_wcB&gclsrc=aw.ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGooglePlaystore size={40} color={"#7866be"} />
            </a>
            <a
              href="https://www.apple.com/br/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsApple size={40} color={"#7866be"} />
            </a>
          </ContainerIcones>
        </ColumnInfo>
      </ContainerFooter>
    );
  }
}
