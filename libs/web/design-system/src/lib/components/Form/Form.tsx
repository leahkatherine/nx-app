import {
  Stack,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  FormHelperText,
  FormControl,
  FormLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Checkbox,
} from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Joi from 'joi';

interface InputLine {
  label: string;
  type:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'date'
    | 'time'
    | 'multiline'
    | 'select'
    | 'radio'
    | 'checkbox';
  name: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

type FormData = {
  name: string | number;
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
  tel: string | number;
  date: string | number;
  time: string | number;
};

interface FormProps {
  schema: Joi.ObjectSchema<any>;
  defaultValues: object;
  questions: InputLine[];
  onSubmit: (data: any) => void; 
}


export const controllerGlobalSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000000',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000000',
    },
  },
};

export const Form = ({
  schema,
  defaultValues,
  questions,
  onSubmit,
}: FormProps) => {
  // get the type of defaultValues

  type DefaultValues = typeof defaultValues;
  const { control, handleSubmit } = useForm<DefaultValues>({
    defaultValues: defaultValues as DefaultValues, // Add the cast here
    resolver: joiResolver(schema),
  });
  

  const onSubmitLocal: SubmitHandler<DefaultValues> = (data) => {
    console.log(data);
    onSubmit(data as FormData);
  };

  function getComponent(question: InputLine) {
    switch (question.type) {
      case 'text':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'password':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'email':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'number':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'tel':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'date':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'time':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'multiline':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                multiline
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
      case 'select':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => {
              return (
                <TextField
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={question.label}
                  variant="outlined"
                  select
                  sx={{
                    ...controllerGlobalSx,
                  }}
                >
                  {question.options?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              );
            } } />
        );
      case 'radio':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <FormControl component="fieldset" error={!!error}>
                <RadioGroup value={value} onChange={onChange}>
                  {question.options?.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option} />
                  ))}
                </RadioGroup>
                {error && <FormHelperText>{error.message}</FormHelperText>}
              </FormControl>
            )} />
        );
      case 'checkbox':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({ field: { onChange, value = [], onBlur }, fieldState: { error }, formState }) => (
              <FormControl component="fieldset" error={!!error}>
                <FormLabel component="legend">{question.label}</FormLabel>
                <FormGroup>
                  {question.options?.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={<Checkbox
                        checked={value.includes(option as never)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          onChange(checked ? [...value, option] : value.filter((item) => item !== option));
                        } }
                        onBlur={onBlur}
                        value={option} />}
                      label={option} />
                  ))}
                </FormGroup>
                {error && <FormHelperText>{error.message}</FormHelperText>}
              </FormControl>
            )} />
        );

      default:
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value }, fieldState: { error }, formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
                sx={{
                  ...controllerGlobalSx,
                }} />
            )} />
        );
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLocal)}>
      <Stack
        spacing={2}
        sx={{
          width: '100%',
          margin: 'auto',
          alignItems: 'center',
        }}
      >
        {questions.map((question) => getComponent(question))}
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '60%',
          }}
          >
          Register
          </Button>
        
      </Stack>
 
    </form>
  );
};
