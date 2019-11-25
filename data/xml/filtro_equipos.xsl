<?xml version='1.0' ?> 
<xsl:stylesheet version="1.1" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  <xsl:template match="/">
    <HTML>
      <BODY>
        <h1><B><p align="center">OVERWATCH</p></B></h1>
        <h2> Equipos de región de Norte América: </h2>
        <TABLE> 
          <xsl:for-each  select="EQUIPOS/OVERWATCH/DIVATLANTICO/EQUIPO[REGION='NORTH AMERICA']">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each> 
          <xsl:for-each  select="EQUIPOS/OVERWATCH/DIVPACIFICO/EQUIPO[REGION='NORTH AMERICA']">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de Europa: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/OVERWATCH/DIVATLANTICO/EQUIPO[REGION='EUROPE']">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de China: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/OVERWATCH/DIVPACIFICO/EQUIPO[REGION='CHINA']">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de Korea: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/OVERWATCH/DIVPACIFICO/EQUIPO[REGION='KOREA']">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
      <br/>
      <br/>
      <h1><B><p align="center">LEAGUE OF LEGENDS</p></B></h1>
      <h2> Equipos de la región de China: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LPL/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de Korea: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LCK/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de Europa: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LEC/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la región de Norte América: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LCS/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de las regiones de Taiwan, Macao y Hong Kong: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LMS/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la region de Vietnam: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/VCS/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la region de Latino América: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/LLA/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la region de Oceanía: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/OPL/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
        <h2> Equipos de la region de Turquía: </h2>
        <TABLE>
          <xsl:for-each  select="EQUIPOS/LEGUEOFLEGENDS/TCL/EQUIPO">
            <xsl:sort order="ascending" select="@NAME"/> 
            <TR>
              <TD><B> Nombre del equipo: </B><xsl:value-of select="@NAME"/></TD>
              <TD><B> Localización: </B><xsl:value-of select="LOCALITATION"/></TD> 
            </TR>
          </xsl:for-each>
        </TABLE>
      </BODY>
    </HTML> 
  </xsl:template>
</xsl:stylesheet> 