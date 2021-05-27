function strip_tags(strip){ 
 strippedString = strip.replace(/(<([^>]+)>)/gi, "");
 return strippedString;
}

console.log(strip_tags(`<p><strong><em>SkillSanta
Assignments</em></strong></p>`));