import Header from "./header/Header";
import Footer from "./footer/Footer";
import isPalindrome from "./palindrome"; // Importing the palindrome function
import Container from "./container/Container";
import Logo from "./Logo";
import LogoutBtn from "./header/LogoutBtn";


// Example usage of the palindrome function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false


export { 
    Header,
    Footer,
    Container,
    Logo,
    LogoutBtn
}
