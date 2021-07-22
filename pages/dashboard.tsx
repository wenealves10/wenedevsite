import useAuth from 'src/hooks/useAuth';
export default function DashBoard(){

    const { user} = useAuth();

    return (<div>
             <h1>DashBoard: {user?.displayName}</h1>
          </div>);
}
