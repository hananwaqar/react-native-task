export function getWordBeforeHyphen(str) {
    if (str.startsWith('location-on-')) {
      return 'location-on';
    }
  
    if (str.includes('-')) {
      const lastHyphenIndex = str.lastIndexOf('-');
      if (lastHyphenIndex !== -1) {
        const beforeLastHyphen = str.substring(0, lastHyphenIndex);
        const secondLastHyphenIndex = beforeLastHyphen.lastIndexOf('-');
        if (secondLastHyphenIndex !== -1) {
          return beforeLastHyphen.substring(0, secondLastHyphenIndex);
        } else {
          return beforeLastHyphen;
        }
      }
    }
  
    return str;
  }
  