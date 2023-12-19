import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/129278520_108188031145984_6876501674729004834_n.jpg?stp=c0.21.120.120a_cp0_dst-jpg_e15_p120x120_q65&_nc_cat=100&ccb=1-7&_nc_sid=db1b99&_nc_ohc=JZY4tPSuQ3IAX_zlfCa&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAEC-ywrJJW2HnCQSFzzy4GrYPZSAlwKJx2SjeYQt8gXw&oe=65A8EEDD"
      />
      <Card.Body>
        <Card.Title>Yassine Zehani</Card.Title>
        <Card.Text>
          Yassine zehani from tunisia im web developper in go my code .
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
