//************** Components **************
import OptionsMap from './Component/OptionsMap';
//************** PracticeExample **************
import FindSumOfFirstNNaturalNumbers from './Tutorial/FindSumOfFirst_N_Natural_Numbers';
import MergeArraysAndSortSlice from './Tutorial/MergeArraysAndSortSlice';
import SetTimeoutInsideAForLoopInJavaScript from './Tutorial/SetTimeoutInsideAForLoopInJavaScript';
import AssignASpecificNumberOfUniqueNumbers from './Tutorial/AssignASpecificNumberOfUniqueNumbers';
import CSSTutorial from './Tutorial/CSSTutorial';
import ProgressDIYUse from './Tutorial/ProgressDIYUse';
import TraversingAndRendering from './Tutorial/TraversingAndRendering';
import RpgGame from './RPG/RPG_Game';
import TutorialTemplate from './Tutorial/TutorialTemplate';
import FetchOpenAI from './Tutorial/FetchOpenAI';
import IsDragging from './Tutorial/IsDragging';
//************** ReactBasics **************
import UseOtherComponents from './Tutorial/UseOtherComponents';
import HookContext from './hook/hookContext';
import HookUseState from './hook/hookState';
import HookCallback from './hook/hookCallback';
import HookEffect from './hook/hookEffect';
import ReactFragment from './Tutorial/ReactFragment';
// import SlideOut from './UIDemo/SlideOut';
//************** leetcode **************
import LengthOfLongestSubstring3 from './Tutorial/LengthOfLongestSubstring3';
import ReverseInteger7 from './Tutorial/ReverseInteger7';
import PalindromeNumber9 from './Tutorial/PalindromeNumber9';
import RomanToInteger13 from './Tutorial/RomanToInteger13';
import LongestCommonPrefix14 from './Tutorial/LongestCommonPrefix14';
import ValidParentheses20 from './Tutorial/ValidParentheses20';
import MergeTwoSortedLists21 from './Tutorial/MergeTwoSortedLists21';
import MergeKSortedLists23 from './Tutorial/MergeKSortedLists23';
import ValidPalindrome125 from './Tutorial/ValidPalindrome125';
import FindFirstSingleNumber136 from './Tutorial/FindFirstSingleNumber136';
import MoveZeroes283 from './Tutorial/MoveZeroes283';
import FibonacciNumber509 from './Tutorial/FibonacciNumber509';

export const ReactBasicsRoutes = [
  { path: "/ReactFragment", component: ReactFragment,text: "ReactFragment" },
  { path: "/HookCallback", component: HookCallback,text: "useCallback"},
  { path: "/HookEffect", component: HookEffect,text: "useEffect"  },
  { path: "/HookContext", component: HookContext,text: "useContext" },
  { path: "/HookUseState", component: HookUseState,text: "useState" },
  { path: "/UseOtherComponents", component: UseOtherComponents,text: "useOtherComponents" },
];
export const PracticeExampleRoutes = [
  { to: "/NativeHTML/GeneratorSlopeEquation", text: "GeneratorSlopeEquation" },
  { to: "/NativeHTML/Canvas Fireball Follow Exercise", text: "Canvas Fireball Follow Exercise" },
  { to:"/RpgGame",path: "/RpgGame", component: RpgGame,text: "RPG_Game" },
  { path: "/IsDragging", component: IsDragging, text: "IsDragging" },
  { path: "/OptionsMap", component: OptionsMap, text: "OptionsMap" },
  { path: "/CSSTutorial", component: CSSTutorial, text: "CSSTutorial" },
  { path: "/FetchOpenAI", component: CSSTutorial, text: "FetchOpenAI" },
  { path: "/ProgressDIYUse", component: ProgressDIYUse, text: "ProgressDIYUse" },
  { path: "/TraversingAndRendering", component: TraversingAndRendering, text: "TraversingAndRendering" },
  { path: "/TutorialTemplate", component: TutorialTemplate, text: "TutorialTemplate" },
  { path: "/ReactFragment", component: ReactFragment, text: "ReactFragment" },
  { path: "/FindSumOfFirst_N_Natural_Numbers", component: FindSumOfFirstNNaturalNumbers, text: "FindSumOfFirst_N_Natural_Numbers" },
  { path: "/MergeArraysAndSortSlice", component: MergeArraysAndSortSlice, text: "MergeArraysAndSortSlice" },
  { path: "/SetTimeoutInsideAForLoopInJavaScript", component: SetTimeoutInsideAForLoopInJavaScript, text: "SetTimeoutInsideAForLoopInJavaScript" },
  { path: "/AssignASpecificNumberOfUniqueNumbers", component: AssignASpecificNumberOfUniqueNumbers, text: "AssignASpecificNumberOfUniqueNumbers" }

];
export const technicalTrainingRoutes = [
  { path: "/LengthOfLongestSubstring3", component: LengthOfLongestSubstring3, text: "LengthOfLongestSubstring3" },
  { path: "/ReverseInteger7", component: ReverseInteger7, text: "ReverseInteger7" },
  { path: "/PalindromeNumber9", component: PalindromeNumber9, text: "PalindromeNumber9" },
  { path: "/RomanToInteger13", component: RomanToInteger13, text: "RomanToInteger13" },
  { path: "/LongestCommonPrefix14", component: LongestCommonPrefix14, text: "LongestCommonPrefix14" },
  { path: "/ValidParentheses20", component: ValidParentheses20, text: "ValidParentheses20" },
  { path: "/MergeTwoSortedLists21", component: MergeTwoSortedLists21, text: "MergeTwoSortedLists21" },
  { path: "/MergeKSortedLists23", component: MergeKSortedLists23, text: "MergeKSortedLists23" },
  { path: "/ValidPalindrome125", component: ValidPalindrome125, text: "ValidPalindrome125" },
  { path: "/FindFirstSingleNumber136", component: FindFirstSingleNumber136, text: "FindFirstSingleNumber136" },
  { path: "/MoveZeroes283", component: MoveZeroes283, text: "MoveZeroes283" },
  { path: "/FibonacciNumber509", component: FibonacciNumber509, text: "FibonacciNumber509" }
];
