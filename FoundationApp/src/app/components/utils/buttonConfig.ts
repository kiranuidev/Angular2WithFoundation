import{ButtonTypes,ButtonSize, ButtonColors} from '../utils'
export class ButtonConfig
{
  ButtonType:ButtonTypes=ButtonTypes.Square;
  ButtonSize:ButtonSize=ButtonSize.small;
  ButtonColor:ButtonColors=ButtonColors.Success;
  ButtonClass:String
  ButtonGroupList:Array<String>
  ButtonText:String="Hello";
}
