import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QuestionDetail from './QuestionDetail';
import EmptyQuestionMessage from './EmptyQuestionMessage';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import NewQuestion from './NewQuestion';

const QuestionList = () => {
  const questionsTags = [
    { label: 'All', value: 0 },
    { label: 'Ruby', value: 1 },
    { label: 'Rails', value: 2 },
    { label: 'React', value: 3 },
    { label: 'Bootstrap', value: 4 },
  ];

  const [questionsList, setQuestionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(true);

  const questionsUrl = 'http://localhost:8080/api/v1/questions';

  const fetchQuestionList = () => {
    setIsShowLoader(true);
    setIsShowAlert(false);
    fetch(questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
        } else {
          setIsShowAlert(false);
        }
        setIsShowLoader(false);
      });
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

  const updateSelectedItem = (event) => {
    setIsShowLoader(true);
    setIsShowAlert(false);
    const selectedValue = parseInt(event.target.value); // Convert to number if needed
    setQuestionsList([]);
    setSelectedOption(selectedValue);
    fetch(`${questionsUrl}?tags=${questionsTags[selectedValue].label}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
        } else {
          setIsShowAlert(false);
        }
        setIsShowLoader(false);
      });
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter Questions by Tags</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create question
        </button>
        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(event) => updateSelectedItem(event)}
        >
          {questionsTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
        {questionsList.length > 0
          ? questionsList.map((question) => (
              <QuestionDetail question={question} key={question.id} />
            ))
          : ''}
        {isShowAlert ? (
          <EmptyQuestionMessage tag={questionsTags[selectedOption].label} />
        ) : (
          <Loader isShowLoader={isShowLoader} />
        )}
      </div>
      <NewQuestion />
    </div>
  );
};

export default QuestionList;
