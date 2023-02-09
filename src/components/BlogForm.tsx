import { ChangeEvent, FormEvent, useState } from 'react';
import useForm from '../hooks/useForm';
import { postBlog, ResponseObject } from '../interfaces';
import { addBlog } from '../services/requests';

interface FormStates {
  isLoading: boolean;
}

const BlogForm = (): JSX.Element => {
  const [inputValues, dispatch] = useForm();
  const [isLoading, setIsLoading] = useState<FormStates['isLoading']>(false);

  const handleResponse = (res: ResponseObject<postBlog>): void => {
    setIsLoading(false);

    if (res.isOk) {
      alert('post completed');
      dispatch({ type: 'clear' });
    } else {
      alert('somethig go wrong' + res.text);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    addBlog(inputValues).then(handleResponse);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: 'changeValue',
      payload: { inputName: e.target.name, inputValue: e.target.value },
    });
  };

  return (
    <>
      {isLoading ? (
        <h2 className='title w600'>Posting...</h2>
      ) : (
        <>
          <h2 className='subtitle'>Create a new Blog</h2>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor='formTitle_id'>aaaaa</label>
            <input
              onChange={handleChange}
              type='text'
              name='title'
              id='formTitle_id'
              placeholder='Blog title'
              value={inputValues.title}
              required
            />
            <label htmlFor='formBody_id'>bbbbb</label>
            <textarea
              onChange={handleChange}
              value={inputValues.body}
              name='body'
              id='formBody_id'
              placeholder='Blog description'
              cols={30}
              rows={10}
              required></textarea>
            <button type='submit'>Submit blog</button>
          </form>
        </>
      )}
    </>
  );
};

export default BlogForm;
