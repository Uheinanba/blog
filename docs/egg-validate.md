### usage
```
// {app_root}/config/plugin.js
exports.validate = {
  package: 'egg-validate',
};
```

### validate request body
```
//  {app_root}/app/controller/home.js
export.index = async function() {
  this.validate({ id: 'id' }); // will throw if invalid
  // or
  const errors = this.app.validator.validate({ id: 'id' }, this.request.body);
}
```

### validate rule(规则)
// https://github.com/node-modules/parameter
```
var rule = {
  name: 'string',
  age: {type: 'int', max: 200},
  gender: ['male', 'female'],
  working: 'boolean',
  salary: {type: 'number', min: 0},
  birthday: 'date',
  now: 'dateTime',
  id: 'id',
  childrens: {
    type: 'array',
    itemType: 'object',
    required: false,
    rule: {
      name: 'string',
      age: 'int',
      gender: ['male', 'female'],
      birthday: {type: 'date', required: false}
    }
  },
  mate: {
    type: 'object',
    required: false,
    rule: {
      name: 'string',
      age: 'int',
      gender: ['male', 'female'],
      birthday: {type: 'date', required: false}
    }
  }
};

abbr
'int' => {type: 'int', required: true}
'integer' => {type: 'integer', required: true}
'number' => {type: 'number', required: true}
'date' => {type: 'date', required: true}
'dateTime' => {type: 'dateTime', required: true}
'id' => {type: 'id', required: true}
'boolean' => {type: 'boolean', required: true}
'bool' => {type: 'bool', required: true}
'string' => {type: 'string', required: true, allowEmpty: false}
'email' => {type: 'email', required: true, allowEmpty: false, format: EMAIL_RE}
'password' => {type: 'password', required: true, allowEmpty: false, format: PASSWORD_RE, min: 6}
'object' => {type: 'object', required: true}
'array' => {type: 'array', required: true}
[1, 2] => {type: 'enum', values: [1, 2]}
/\d+/ => {type: 'string', required: true, allowEmpty: false, format: /\d+/}

```


