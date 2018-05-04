import React from 'react';
import { Link } from 'react-router';

class ShuffleImages extends Component {

    // constructor() {
    //     super(props);
    //     this.state = {
    //         images: this.shuffle(this.props.images)
    //     }
    // }

    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // return array;
    console.log(array);

    shuffle(images){
         ///shuffle using some algoRHYTHM!
         //random list of elements in an array
        return images
    }

    render() {
        return (
            <ul>
            {this.state.images.map((image, idx) => {
                    return (
                        <li key={idx}>
                        <p>{image.title}</p>
                        <p>{image.text}</p>
                        <p>{image.category}</p>
                        <Link to={`/blog/post-1/:${image.id}`}>Weiter lesen</Link>
                        </li>
                    );
            })}
            </ul>
        );
    }
} //close class ShuffleImages

ShuffleImages.propTypes = {
    images: React.PropTypes.array,
};

export default ShuffleImages;