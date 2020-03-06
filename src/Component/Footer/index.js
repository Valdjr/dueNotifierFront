import React from "react";
import { FaGithub, FaGithubAlt } from "react-icons/fa";

import { Container } from "./style";

export default function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/Valdjr/dueNotifierFront"
        title="Github Front-end"
      >
        <FaGithub size={30} />
      </a>
      <a href="https://github.com/Valdjr/dueNotifier" title="Github Back-end">
        <FaGithubAlt size={30} />
      </a>
    </Container>
  );
}
