<template>
  <section id="projects" class="projects container--fluid">
    <h1>{{ $t("projects.heading") }}</h1>
    <div class="projects__container container--fluid">
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img class="projects__logo projects__logo--disc" src="../assets/disc_logo.png" alt="DiSC Logo">
          <h3 class="projects__header">
            <a
              href="https://digital-solutions.consulting"
              class="projects__link"
              target="_blank"
              rel="nofollow"
            >DiSC - Digital Solutions Consulting GmbH</a>
          </h3>
          <h4>Senior Consultant, Nov 2020 - Now</h4>
          <h4>NRW/RLP, Germany</h4>
          <!--          TODO: make them an array, iterate, finito.-->
          <p>{{ $t("projects.disc.first") }}</p>
          <p>{{ $t("projects.disc.second") }}</p>
          <p>{{ $t("projects.disc.third") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img class="projects__logo projects__logo--1und1" src="../assets/1und1_logo.svg" alt="1und1 Logo">
          <h3 class="projects__header">
            <a
              href="https://1und1.de"
              class="projects__link"
              target="_blank"
              rel="nofollow"
            >1&1 Telecommunication SE</a>
          </h3>
          <h4>Advanced Software Developer, Jan 2018 - Nov 2020</h4>
          <h4>Montabaur, Germany</h4>
          <p>{{ $t("projects.1und1.first") }}</p>
          <p>{{ $t("projects.1und1.second") }}</p>
          <p>{{ $t("projects.1und1.third") }}</p>
          <p>{{ $t("projects.1und1.fourth") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img
            class="projects__logo projects__logo--chamaeleon"
            src="../assets/chamaeleon_logo.svg"
            alt="Chamaeleon AG logo"
          >
          <h3 class="projects__header">
            <a href="https://chamaeleon.de" class="projects__link" target="_blank" rel="nofollow">IONAS 4</a>
          </h3>
          <h4>Software Developer / CMS Consultant, Jul 2016 - Dec 2017</h4>
          <h4>Montabaur, Germany</h4>
          <p>{{ $t("projects.chamaeleon.first") }}</p>
          <p>{{ $t("projects.chamaeleon.second") }}</p>
          <!--<p>{{ $t("projects.chamaeleon.third") }}</p>-->
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img class="projects__logo projects__logo--datagroup" src="../assets/datagroup_logo.svg" alt="Datagroup Logo">
          <h3 class="projects__header">
            <a
              href="https://www.datagroup.de"
              class="projects__link"
              target="_blank"
              rel="nofollow"
            >DATAGROUP / Bayer Healthcare</a>
          </h3>
          <h4>On-Site-Support & Software Development, Nov 2014 - Jul 2016</h4>
          <h4>Cologne Area, Germany</h4>
          <p>{{ $t("projects.datagroup.first") }}</p>
          <p>{{ $t("projects.datagroup.second") }}</p>
          <p>{{ $t("projects.datagroup.third") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img
            class="projects__logo projects__logo--xylo-it"
            src="../assets/xylo-it_logo.png"
            alt="Xylo-IT Logo"
          >
          <h3 class="projects__header">
            <a href="https://xylo-it.de" class="projects__link" target="_blank" rel="nofollow">Self employed</a>
          </h3>
          <h4>Software Developer / Web Consulting, Mar 2014 - present</h4>
          <h4>Cologne/Bonn Area, Germany</h4>
          <p>{{ $t("projects.xylo-it.first") }}</p>
          <p>{{ $t("projects.xylo-it.second") }}</p>
          <!--<p>{{ $t("projects.xylo-it.third") }}</p>-->
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <img class="projects__logo projects__logo--agrip" src="../assets/agrip_logo.png" alt="Agrip Logo">
          <h3 class="projects__header">
            <a href="https://agrip.de" class="projects__link" target="_blank" rel="nofollow">AGRIP.IT</a>
          </h3>
          <h4>IT System Administrator, Mar 2014 - Nov 2014</h4>
          <h4>Cologne/Bonn Area, Germany</h4>
          <p>{{ $t("projects.agrip.first") }}</p>
          <p>{{ $t("projects.agrip.second") }}</p>
          <p>{{ $t("projects.agrip.third") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <div class="projects__logo projects__logo--chinook" />
          <h3 class="projects__header">
            <a
              href="http://www.chinook-design.de/"
              class="projects__link"
              target="_blank"
              rel="nofollow"
            >Chinook deSign AG</a>
          </h3>
          <h4>IT Data Scientist, Jun 2013 - Mar 2014</h4>
          <h4>Frankfurt, Germany</h4>
          <p>{{ $t("projects.chinook.first") }}</p>
          <p>{{ $t("projects.chinook.second") }}</p>
          <p>{{ $t("projects.chinook.third") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="column--2 projects__offset" />
        <div class="projects__info column-mobile--12 column--8">
          <div class="projects__logo projects__logo--hmbuchdata" />
          <img class="projects__logo projects__logo--buchdata" src="../assets/buchdata_logo.png" alt="H+M Buchdata Logo">
          <h3 class="projects__header">
            <a
              href="http://www.hmbuchdata.de"
              class="projects__link"
              target="_blank"
              rel="nofollow"
            >H+M Buchdata EDV / Werner-von-Siemens-Schule</a>
          </h3>
          <h4>IT-Systemelektroniker (Duale Berufsausbildung), Aug 2010 - Jun 2013</h4>
          <h4>Frankfurt, Germany</h4>
          <p>{{ $t("projects.buchdata.first") }}</p>
          <p>{{ $t("projects.buchdata.second") }}</p>
          <p>{{ $t("projects.buchdata.third") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
