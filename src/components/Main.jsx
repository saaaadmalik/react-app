function Main(props){
    let a = 200;
    return (
        <div style={{backgroundColor:'#760000', color:'white',padding:'20px',width:'800px',margin:'10px auto'}}> {/* outer curly braces represent that there is dynamic expression/variable/etc and inner represents that ibject is passed and css is applied through object*/}
        <h1>Main part of Website {a} --- {400-100}</h1>  {/* //These curly braces are used to write dynamic expressions or variables etc */}
        <h2>This is also main part of the website {props.test}</h2>        

        </div> 
    )
}

export default Main;


//in jsx(i.e. in return statement), {} are not objects  but they are expressions and outside return they can be object

// ******** Data Sharing across the components *********
// every react functional component's argument is props (that is an object). function get these props from other components in form of objects
//  props{
//     test:50,
//     test2:30,
//     test1:20
// }
//  props.test =>50 ----- props.test1 => 20 -----props.test2 =>30    

//if we have multiple nested components i.e main component -> sub comp ->sub comp . The n we have to share data
//accordingly from main to sub to sub , and this is called props driling 