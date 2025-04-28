


const Login = async () => {
  return (
    <>
      <form >
        <button
          type="submit" name="action" value="google"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Sign in with Google
        </button>
        <button
          type="submit" name="action" value="github"
          className="px-4 py-2 bg-pink-600 hover:bg-green-600 text-white font-semibold  rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Sign in with Github
        </button>
      </form>
    </>
  );
};

export default Login;
