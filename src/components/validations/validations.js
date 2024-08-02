const validationRules = {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: {
        patternMsg:"Invalid email format"
      }
    },
    fname: {
      pattern: /^[a-zA-Z]+$/,
      errorMessage: {
        patternMsg:"Only letters are allowed"
      },
  
    },
    lname: {
      pattern: /^[a-zA-Z]+$/,
      errorMessage: {
        patternMsg:"Only letters are allowed"
      },
  
    },
    phoneNumber:{
      pattern:/^[0-9]/,
      errorMessage: {
        patternMsg:"Only numbers are allowed"
      },
    },
    password: {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      minLength: 4,
      maxLength: 10,
      errorMessage: {
        minLengthMsg: "Password must be at least 4 characters long",
        maxLengthMsg: "Password must not exceed 10 characters"
      }
    },
    confirmPassword: {
      errorMessage: {
        mismatch: "Passwords do not match"
      }
    },
  };