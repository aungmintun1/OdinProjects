
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cat from './Cat';
function App() {

  const client = new QueryClient(); 

  return (
    <div className="App">
    <QueryClientProvider client={client}>
    <Cat />
    </QueryClientProvider>

    </div>
  );
}

export default App;

/* 
1. import react query
a.“npm install @tanstack/react-query” 
b.“npm install axios”

2. declare and intialize client variable to QueryClient(); the function
3. wrap the QueryClientProvider tag around the components that requre the query function
4. define client as client in QueryClientProvider
5. go to components that are wrapped in the tag
*/
