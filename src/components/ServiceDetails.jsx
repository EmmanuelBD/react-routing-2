/*import React from 'react';

const ServiceDetails = (props) => {
    return (
        <div>
            <h1>Service Details: {props.match.params.id}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vero officia. Accusantium hic impedit ea, iste aperiam consequatur ullam porro quos repellendus laboriosam totam, alias qui fugit magni quis optio.
            </p>
        </div>
    );
}

export default ServiceDetails;*/

import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Service Details: {id}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        vero officia. Accusantium hic impedit ea, iste aperiam consequatur
        ullam porro quos repellendus laboriosam totam, alias qui fugit magni
        quis optio.
      </p>
    </div>
  );
};

export default ServiceDetails;

