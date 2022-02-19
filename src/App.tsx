import "./App.css";

import {
  SimplePropsExample,
  ObjectExample,
  ArrayExample,
} from "./components/simpleTypeExamples";
import {
  Status,
  Children,
  ChildrenElement,
  OptionalProps,
} from "./components/advancedProps";
import { Button, Input } from "./components/eventTypes";
import { StyleContainer } from "./components/styleTypes";
import { LoggedIn, User, User2 } from "./components/useStateHook";
import { Counter, Counter2 } from "./components/useReducerHook";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";
import { UserForContext } from "./contextWithFutureValue/User";
import { UserContextProvider } from "./contextWithFutureValue/UserContext";

import { name, arrayList } from "./constants";
import { DomRef } from "./useRefExamples/DomRef";
import { MutableRef } from "./useRefExamples/MutableRef";
import { ClassCounter } from "./classComponents/classCounter";
import { PrivateHoc } from "./HOC/PrivateHoc";
import { ProfileHoc } from "./HOC/ProfileHoc";
import { GenericsList } from "./generics/genericsList";
import { RandomNumber } from "./restrictingProps/randomNumber";
import { Toast } from "./templateLiteralsAndExclude/toast";
import { HTMLButton } from "./wrappingHTML/HTMLButton";
import { HTMLInput } from "./wrappingHTML/HTMLInput";
import { PolymorphicExample } from "./PolymorphicComponents/Text";

const SimplePropsExamples = () => {
  return (
    <div>
      <SimplePropsExample name="Omer" count={10} loggedIn={true} />

      <ObjectExample name={name} />

      <ArrayExample list={arrayList} />
    </div>
  );
};

const AdvancePropsExamples = () => {
  return (
    <div>
      <Status status="success" />

      <Children>Heading Children Prop</Children>

      <ChildrenElement>
        <Children>Children Element Prop</Children>
      </ChildrenElement>

      <OptionalProps name="Omer" loggedIn={true} />
    </div>
  );
};

const EventTypeEcamples = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log("handleClick console", event, id);
        }}
      />

      <Input value="" />
    </div>
  );
};

const StyleExamples = () => {
  return (
    <>
      <StyleContainer
        styles={{
          border: "1px solid black",
          padding: "1rem",
        }}
      />
    </>
  );
};

const UseStateHookExamples = () => {
  return (
    <>
      <LoggedIn />

      <User />

      <User2 />
    </>
  );
};

const UseReducerExample = () => {
  return (
    <>
      <Counter />
      <Counter2 />
    </>
  );
};

const UseContextExample = () => {
  return (
    <>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <UserForContext />
      </UserContextProvider>
    </>
  );
};

const UseRefExample = () => {
  return (
    <>
      <DomRef />

      <MutableRef />
    </>
  );
};

const GenericsExamples = () => {
  return (
    <>
      {/* <GenericsList
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* we have to pass list of number type to items now, but typescript gives error that 
    type number is not assignable to string type array */}
      {/* we can resolve this problem by giving type string and number */}
      {/* <GenericsList
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* we have to assign array of object now but typescript allows only numbers and string array */}
      {/* we have to fix this by adding generic types */}
      <GenericsList
        items={[
          {
            id: "1",
            first: "omer",
            last: "javed",
          },
          {
            id: "2",
            first: "spider",
            last: "man",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </>
  );
};

const WrapHTMLElements = () => {
  return (
    <>
      {/* this example throw error because we have Omitted children props to accept string only */}
      {/* <HTMLButton
        variant="primary"
        onClick={() => console.log("rest props example")}
      >
        <div>Primary Button</div>
      </HTMLButton> */}

      <HTMLButton
        variant="primary"
        onClick={() => console.log("rest props example")}
      >
        Primary Button
      </HTMLButton>

      <HTMLInput type="text" name="input-test" />
    </>
  );
};

const Polymoprhic = () => {
  return (
    // we want to render HTML elements based on "as" props
    <>
      <PolymorphicExample as="h1" size="lg">
        Heading
      </PolymorphicExample>
      <PolymorphicExample as="p" size="md">
        Paragraph
      </PolymorphicExample>
      <PolymorphicExample
        as="label"
        htmlFor="some-id"
        size="sm"
        color="secondary"
      >
        Label
      </PolymorphicExample>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      {/* <SimplePropsExamples /> */}

      {/* <AdvancePropsExamples /> */}

      {/* <EventTypeEcamples /> */}

      {/* <StyleExamples /> */}

      {/* <UseStateHookExamples /> */}

      {/* <UseReducerExample /> */}

      {/* <UseContextExample /> */}

      {/* <UseRefExample /> */}

      {/* <ClassCounter message="the count value is " /> */}

      {/* <PrivateHoc isLoggedIn={true} component={ProfileHoc} /> */}

      {/* <GenericsExamples /> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position="center" /> */}

      {/* <WrapHTMLElements /> */}

      <Polymoprhic />
    </div>
  );
};

export default App;
