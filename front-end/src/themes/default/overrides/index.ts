import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Backdrop from './Backdrop';
import Table from './Table';
import Typography from './Typography';
import IconButton from './IconButton';
import TextField from './TextField';

export default function ComponentsOverrides( theme ) {
  return merge(
    Card( theme ),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Table(theme),
    TextField(theme)
  );
}
