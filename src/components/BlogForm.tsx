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
            <div className='formInput formInput__title'>
              <label htmlFor='formTitle_id' className=' formInput__label'>
                Write your title
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='title'
                id='formTitle_id'
                placeholder='Blog title'
                value={inputValues.title}
                required
                className='paper formInput__input'
              />
            </div>
            <div className='formInput formInput__desc'>
              <label htmlFor='formBody_id' className='formInput__label'>
                What is about?
              </label>
              <textarea
                onChange={handleChange}
                value={inputValues.body}
                name='body'
                id='formBody_id'
                placeholder='Blog description'
                rows={10}
                required
                className='paper formInput__input'
              />
              <button type='submit' className='genericButton'>
                Submit blog
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default BlogForm;
