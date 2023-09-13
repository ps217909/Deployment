function getValueTekstBox(textbox) 
{
    var myValue = document.getElementById(textbox).value;
    if (!isNaN(myValue)) 
    {
        return myValue;
    }
    else 
    {
        alert("The value inserted is not a valud value, use only numbers and one .");
    }
}
function getStringValueTekstBox(textbox) 
{
    var myValue = document.getElementById(textbox).value;
    return myValue;
}

function setResult(result, textbox) 
{
    document.getElementById(textbox).value = result;
}

function MyLogin() 
{
    var Gebruikersnaam = getStringValueTekstBox("TbGebruikersNaam");
    var Wachtwoord = getStringValueTekstBox("TbWachtwoord");

    if (Gebruikersnaam == "Bressanone" && Wachtwoord == "PizzaCrew") 
    {
        window.location = "PersoneelsP.html";
    }
    else 
    {
        alert("Onjuiste inloggegevens")
    }
}

function MyPrizePizza()
{
    var Ing1 = getStringValueTekstBox("TBIng-1");
    var Ing2 = getStringValueTekstBox("TBIng-2");
    var Ing3 = getStringValueTekstBox("TBIng-3");
    var Ing4 = getStringValueTekstBox("TBIng-4");
    var Ing5 = getStringValueTekstBox("TBIng-5");
    var Ing6 = getStringValueTekstBox("TBIng-6");
    var Ing7 = getStringValueTekstBox("TBIng-7");
    var Ing8 = getStringValueTekstBox("TBIng-8");
    var PPK1 =  parseFloat(getStringValueTekstBox("TBPPK-1"));
    var PPK2 =  parseFloat(getStringValueTekstBox("TBPPK-2"));
    var PPK3 =  parseFloat(getStringValueTekstBox("TBPPK-3"));
    var PPK4 =  parseFloat(getStringValueTekstBox("TBPPK-4"));
    var PPK5 =  parseFloat(getStringValueTekstBox("TBPPK-5"));
    var PPK6 =  parseFloat(getStringValueTekstBox("TBPPK-6"));
    var PPK7 =  parseFloat(getStringValueTekstBox("TBPPK-7"));
    var PPK8 =  parseFloat(getStringValueTekstBox("TBPPK-8"));
    var Nodig1 = parseFloat(getStringValueTekstBox("TBNodig-1"));
    var Nodig2 = parseFloat(getStringValueTekstBox("TBNodig-2"));
    var Nodig3 = parseFloat(getStringValueTekstBox("TBNodig-3"));
    var Nodig4 = parseFloat(getStringValueTekstBox("TBNodig-4"));
    var Nodig5 = parseFloat(getStringValueTekstBox("TBNodig-5"));
    var Nodig6 = parseFloat(getStringValueTekstBox("TBNodig-6"));
    var Nodig7 = parseFloat(getStringValueTekstBox("TBNodig-7"));
    var Nodig8 = parseFloat(getStringValueTekstBox("TBNodig-8"));
    var P1 = ((PPK1 / 1000) * Nodig1).toFixed(2);
    var P2 = ((PPK2 / 1000) * Nodig2).toFixed(2);
    var P3 = ((PPK3 / 1000) * Nodig3).toFixed(2);
    var P4 = ((PPK4 / 1000) * Nodig4).toFixed(2);
    var P5 = ((PPK5 / 1000) * Nodig5).toFixed(2);
    var P6 = ((PPK6 / 1000) * Nodig6).toFixed(2);
    var P7 = ((PPK7 / 1000) * Nodig7).toFixed(2);
    var P8 = ((PPK8 / 1000) * Nodig8).toFixed(2);
    var P35_1 = (P1 * 1.96).toFixed(2);
    var P35_2 = (P2 * 1.96).toFixed(2);
    var P35_3 = (P3 * 1.96).toFixed(2);
    var P35_4 = (P4 * 1.96).toFixed(2);
    var P35_5 = (P5 * 1.96).toFixed(2);
    var P35_6 = (P6 * 1.96).toFixed(2);
    var P35_7 = (P7 * 1.96).toFixed(2);
    var P35_8 = (P8 * 1.96).toFixed(2);

    var PP25 = 0;

    //Vanaf hier begint rij 1

    if (PPK1 > 0 && Nodig1 > 0 && Ing1 != "") 
    {
        setResult("€ " + P1, "TBP25-1")
        setResult("€ " + P35_1, "TBP35-1")
        PP25 += parseFloat(P1)
    }

    else if (PPK1 < 1 || Nodig1 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 1")
        setResult(" " , "TBP25-1")
        setResult(" " , "TBP35-1")
    }

    else if (PPK1 > 0 && Nodig1 > 0 && Ing1 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij1")
        setResult(" " , "TBP25-1")
        setResult(" " , "TBP35-1")
    }

    else if (PPK1 > 0 || Nodig1 > 0 || Ing1 != "") 
    {
        alert("vul alles in. in rij 1")
        setResult(" " , "TBP25-1")
        setResult(" " , "TBP35-1")
    }

    //Vanaf hier begint rij 2

    if (PPK2 > 0 && Nodig2 > 0 && Ing2 != "") 
    {
        setResult("€ " + P2, "TBP25-2")
        setResult("€ " + P35_2, "TBP35-2")
        PP25 += parseFloat(P2)
    }

    else if (PPK2 < 1 || Nodig2 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 2")
        setResult(" " , "TBP25-2")
        setResult(" " , "TBP35-2")
    }

    else if (PPK2 > 0 && Nodig2 > 0 && Ing2 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij2")
        setResult(" " , "TBP25-2")
        setResult(" " , "TBP35-2")
    }

    else if (PPK2 > 0 || Nodig2 > 0 || Ing2 != "") 
    {
        alert("vul alles in. in rij 2")
        setResult(" " , "TBP25-2")
        setResult(" " , "TBP35-2")
    }

    //Vanaf hier begint rij 3

    if (PPK3 > 0 && Nodig3 > 0 && Ing3 != "") 
    {
        setResult("€ " + P3, "TBP25-3")
        setResult("€ " + P35_3, "TBP35-3")
        PP25 += parseFloat(P3)
    }

    else if (PPK3 < 1 || Nodig3 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 3")
        setResult(" " , "TBP25-3")
        setResult(" " , "TBP35-3")
    }

    else if (PPK3 > 0 && Nodig3 > 0 && Ing3 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij 3")
        setResult(" " , "TBP25-3")
        setResult(" " , "TBP35-3")
    }

    else if (PPK3 > 0 || Nodig3 > 0 || Ing3 != "") 
    {
        alert("vul alles in. in rij 3")
        setResult(" " , "TBP25-3")
        setResult(" " , "TBP35-3")
    }

    //Vanaf hier begint rij 4

    if (PPK4 > 0 && Nodig4 > 0 && Ing4 != "") 
    {
        setResult("€ " + P4, "TBP25-4")
        setResult("€ " + P35_4, "TBP35-4")
        PP25 += parseFloat(P4)

    }

    else if (PPK4 < 1 || Nodig4 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 4")
        setResult(" " , "TBP25-4")
        setResult(" " , "TBP35-4")
    }

    else if (PPK4 > 0 && Nodig4 > 0 && Ing4 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij 4")
        setResult(" " , "TBP25-4")
        setResult(" " , "TBP35-4")
    }

    else if (PPK4 > 0 || Nodig4 > 0 || Ing4 != "") 
    {
        alert("vul alles in. in rij 4")
        setResult(" " , "TBP25-4")
        setResult(" " , "TBP35-4")
    }

    //Vanaf hier begint rij 5

    if (PPK5 > 0 && Nodig5 > 0 && Ing5 != "") 
    {
        setResult("€ " + P5, "TBP25-5")
        setResult("€ " + P35_5, "TBP35-5")
        PP25 += parseFloat(P5)
    }

    else if (PPK5 < 1 || Nodig5 < 1)
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 5")
        setResult(" " , "TBP25-5")
        setResult(" " , "TBP35-5")
    }

    else if (PPK5 > 0 && Nodig5 > 0 && Ing5 == "")
    {
        alert("vul de naam van het ingrediënt in op rij 5")
        setResult(" " , "TBP25-5")
        setResult(" " , "TBP35-5")
    }

    else if (PPK5 > 0 || Nodig5 > 0 || Ing5 != "")
    {
        alert("vul alles in. in rij 5")
        setResult(" " , "TBP25-5")
        setResult(" " , "TBP35-5")
    }

    //Vanaf hier begint rij 6

    if (PPK6 > 0 && Nodig6 > 0 && Ing6 != "") 
    {
        setResult("€ " + P6, "TBP25-6")
        setResult("€ " + P35_6, "TBP35-6")
        PP25 += parseFloat(P6)
    }

    else if (PPK6 < 1 || Nodig6 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 6")
        setResult(" " , "TBP25-6")
        setResult(" " , "TBP35-6")
    }

    else if (PPK6 > 0 && Nodig6 > 0 && Ing6 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij 6")
        setResult(" " , "TBP25-6")
        setResult(" " , "TBP35-6")
    }

    else if (PPK6 > 0 || Nodig6 > 0 || Ing6 != "") 
    {
        alert("vul alles in. in rij 6")
        setResult(" " , "TBP25-6")
        setResult(" " , "TBP35-6")
    }

    //Vanaf hier begint rij 7

    if (PPK6 > 0 && Nodig7 > 0 && Ing7 != "") 
    {
        setResult("€ " + P7, "TBP25-7")
        setResult("€ " + P35_7, "TBP35-7")
        PP25 += parseFloat(P7)
    }

    else if (PPK7 < 1 || Nodig7 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 7")
        setResult(" " , "TBP25-7")
        setResult(" " , "TBP35-7")
    }

    else if (PPK7 > 0 && Nodig7 > 0 && Ing7 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij 7")
        setResult(" " , "TBP25-7")
        setResult(" " , "TBP35-7")
    }

    else if (PPK7 > 0 || Nodig7 > 0 || Ing7 != "") s
    {
        alert("vul alles in. in rij 7")
        setResult(" " , "TBP25-7")
        setResult(" " , "TBP35-7")
    }

    //Vanaf hier begint rij 8

    if (PPK8 > 0 && Nodig8 > 0 && Ing8 != "")
    {
        setResult("€ " + P8, "TBP25-8")
        setResult("€ " + P35_8, "TBP35-8")
        PP25 += parseFloat(P8)
    }

    else if (PPK8 < 1 || Nodig8 < 1) 
    {
        alert("De prijs of de hoeveelheid in grammen kunnen niet 0 of onder de 0 zijn in rij 8")
        setResult(" ", "TBP25-8")
        setResult(" " , "TBP35-8")
    }

    else if (PPK8 > 0 && Nodig8 > 0 && Ing8 == "") 
    {
        alert("vul de naam van het ingrediënt in op rij 8")
        setResult(" ", "TBP25-8")
        setResult(" " , "TBP35-8")
    }

    else if (PPK8 > 0 || Nodig8 > 0 || Ing8 != "") 
    {
        alert("vul alles in. in rij 8")
        setResult(" ", "TBP25-8")
        setResult(" " , "TBP35-8")
    }

    //Dit zijn de laaste 2 kostprijzen / 25 cm en 35 cm

    var PP35 = PP25	 * 1.96;
    if (PP25 > 0) 
    {
        setResult("€ " + PP25.toFixed(2), "TB25CM_UITKOMST");
        setResult("€ " + PP35.toFixed(2), "TB35CM_UITKOMST");
    }
}
