import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { useState } from 'react'

// const QuestionDetail = (props) => {

//     const [ likeCount, setLikeCount ] = useState(0)

//     return(
//         <div className = "card rounded-0 mt-3" >
//         <div className = "card-body">
//             <h3 className = "card-title">{props.question.title}</h3>
//             <p className = "lead">
//                 <span className = "badge bg-primary">{props.question.tag}</span>
//             </p>
//             <button className="btn btn-primary mt-1" onClick={() => setLikeCount(likeCount + 1)}>Like</button>
//             <button className="btn btn-primary mt-1" onClick={() => setLikeCount(likeCount - 1)}>Dislike</button>
//             {   likeCount > 0 ?
//                 <span className = "badge bg-primary">{likeCount}</span>:''
//             }

//         </div>
//     </div>
//     )
// }

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      dislikeCount: 0,
    };
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  like() {
    this.setState(function (state) {
      return {
        likeCount: state.likeCount + 1,
      };
    });
  }
  dislike() {
    this.setState(function (state) {
      return {
        dislikeCount: state.dislikeCount + 1,
      };
    });
  }

  render() {
    return (
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <h3 className="card-title">{this.props.question.title}</h3>
          <p className="lead">
            <span className="badge bg-primary">{this.props.question.tag}</span>
          </p>
          {/* <button className="btn btn-primary mt-1" onClick={this.like}>
            Like
          </button> */}
          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={this.like}
            style={{ marginRight: '10mm' }}
          >
            Like
            {this.state.likeCount > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {this.state.likeCount}
              </span>
            ) : (
              ''
            )}
          </button>

          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={this.dislike}
          >
            Dislike
            {this.state.dislikeCount > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {this.state.dislikeCount}
              </span>
            ) : (
              ''
            )}
          </button>
          {/* <button className="btn btn-primary mt-1" onClick={this.dislike}>Dislike</button>
                {   this.state.likeCount > 0 ?
                    <span className = "badge bg-primary">{this.state.likeCount}</span>:''
                } */}
        </div>
      </div>
    );
  }
}

export default QuestionDetail;
