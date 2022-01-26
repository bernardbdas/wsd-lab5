<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head></head>
            <body style="text-align:center">
                <h1 >Employee Management System</h1>
                <table border="2" align="center">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>EMAIL</th>
                        <th>MobNum</th>
                        <th>Designation</th>
                        <th>Promotion</th>
                    </tr>
                    <xsl:for-each select="company/employee">
                        <xsl:sort select="emp-id"></xsl:sort>
                        <xsl:if test="emp-age &gt; 50">
                            <tr>
                                <td>
                                    <xsl:value-of select = "emp-id"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-name"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-age"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-salary"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-email"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-phone"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-designation"></xsl:value-of>
                                </td>
                                <td>Assosiate Project Manager</td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="emp-age &lt; 50 and emp-age &gt; 40">
                            <tr>
                                <td>
                                    <xsl:value-of select = "emp-id"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-name"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-age"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-salary"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-email"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-phone"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-designation"></xsl:value-of>
                                </td>
                                <td>Team Leader</td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="emp-age &lt; 40">
                            <tr>
                                <td>
                                    <xsl:value-of select = "emp-id"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-name"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-age"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-salary"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-email"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-phone"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="emp-designation"></xsl:value-of>
                                </td>
                                <td>Developer</td>
                            </tr>
                        </xsl:if>

                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>