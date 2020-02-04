import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormEvent from '../components/FormEvent';


export const formEvent ={

};

export const actions ={

}
storiesOf('FormEvent', module)
  .add('default', () => <FormEvent formEvent={formEvent} {...actions} />)
  