function decrypt(word):
    secondStep = 1
    decryption = ""

    for i from 0 to word.length - 1:
    //
        newLetterAscii = asciiValue(word[i])
        newLetterAscii = newLetterAscii - secondStep


//newLetterAscii: 100 -1 = 99
//newLetterAscii: 110 - 100 = 10

        while (newLetterAscii < asciiValue('a')):
//newLetterAscii: 110 - 99 = 2 + 26= 28+26=44 + 28 + 28 = 114
            newLetterAscii += 26

//decrytion = "" + c
//
        decryption = decryption + asciiToChar(newLetterAscii)
//second step = 1+ 99 = 100
        secondStep += newLetterAscii

    return decryption


function decrypt(word):
    secondStep = 1
    decryption = ""

    for i from 0 to word.length - 1:
        newLetterAscii = asciiValue(word[i])
        newLetterAscii = newLetterAscii - secondStep

        while (newLetterAscii < asciiValue('a')):
            newLetterAscii += 26

        decryption = decryption + asciiToChar(newLetterAscii)
        //important
        secondStep += newLetterAscii

    return decryption
