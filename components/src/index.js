import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning!</h4>

                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                < CommentDetail 
                    author="Sam" 
                    date="October 21, 1987" 
                    avatar={faker.image.avatar()}
                    content="Great first week at Headstorm!"
                />
            </ApprovalCard>
            <ApprovalCard >
                < CommentDetail 
                    author="Jane" 
                    date="July 11, 2009"
                    avatar={faker.image.avatar()}
                    content="Team of tech heroes save sea mammals!"
                />
            </ApprovalCard>
           <ApprovalCard>
            < CommentDetail 
                    author="Olivia" 
                    date="September 8, 1989"
                    avatar={faker.image.avatar()}
                    content="Great first week at Headstorm!"
                />
            </ApprovalCard>
        </div>

        
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));