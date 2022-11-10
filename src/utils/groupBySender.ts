import { IEditedMessage } from "./interface";

export function groupBySender(array: Array<IEditedMessage>): Array<Array<IEditedMessage>> {
  
    let outerResult = [];
  
    let inner = [];
  
    for (let index = 0; index < array.length; index++) {
      const doesPreviousExist = !!array[index - 1]?.user.name;
      const isCurrentSenderEqualsPrevious = array[index].user.name === array[index - 1]?.user.name;
  
      if (!doesPreviousExist || isCurrentSenderEqualsPrevious) { 
        inner.push(array[index]);
      } else { 
        outerResult.push(inner);
        inner = [];
        inner.push(array[index]);
      }
    }
  
    outerResult.push(inner); 
    return outerResult;
  }