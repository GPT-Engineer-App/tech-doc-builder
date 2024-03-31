import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem, Code, Flex, Link, useMediaQuery } from "@chakra-ui/react";

const Index = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex>
      <Box as="nav" id="navbar" position={isLargerThan768 ? "fixed" : "static"} left={0} top={0} width={isLargerThan768 ? "300px" : "100%"} height="100vh" overflowY="auto" borderRight="1px solid #ccc" p={4}>
        <Heading as="h1" size="lg" mb={4}>
          JS Documentation
        </Heading>
        <Link href="#Introduction" className="nav-link">
          Introduction
        </Link>
        <Link href="#What_you_should_already_know" className="nav-link" mt={2}>
          What you should already know
        </Link>
        <Link href="#JavaScript_and_Java" className="nav-link" mt={2}>
          JavaScript and Java
        </Link>
        <Link href="#Hello_world" className="nav-link" mt={2}>
          Hello world
        </Link>
        <Link href="#Variables" className="nav-link" mt={2}>
          Variables
        </Link>
      </Box>
      <Box as="main" id="main-doc" ml={isLargerThan768 ? "300px" : 0} p={isLargerThan768 ? 8 : 4}>
        <Box as="section" className="main-section" id="Introduction">
          <Heading as="h2">Introduction</Heading>
          <Text>JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.</Text>
          <Text>JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:</Text>
          <UnorderedList>
            <ListItem>Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</ListItem>
            <ListItem>Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</ListItem>
          </UnorderedList>
        </Box>
        <Box as="section" className="main-section" id="What_you_should_already_know">
          <Heading as="h2">What you should already know</Heading>
          <Text>This guide assumes you have the following basic background:</Text>
          <UnorderedList>
            <ListItem>A general understanding of the Internet and the World Wide Web (WWW).</ListItem>
            <ListItem>Good working knowledge of HyperText Markup Language (HTML).</ListItem>
            <ListItem>Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</ListItem>
          </UnorderedList>
        </Box>
        <Box as="section" className="main-section" id="JavaScript_and_Java">
          <Heading as="h2">JavaScript and Java</Heading>
          <Text>JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</Text>
          <Text>In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.</Text>
          <Text>JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.</Text>
        </Box>
        <Box as="section" className="main-section" id="Hello_world">
          <Heading as="h2">Hello world</Heading>
          <Text>To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:</Text>
          <Code>
            {`function greetMe(yourName) {
  alert("Hello " + yourName);
}
greetMe("World");`}
          </Code>
          <Text>Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!</Text>
        </Box>
        <Box as="section" className="main-section" id="Variables">
          <Heading as="h2">Variables</Heading>
          <Text>You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.</Text>
          <Text>A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).</Text>
          <Text>You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
