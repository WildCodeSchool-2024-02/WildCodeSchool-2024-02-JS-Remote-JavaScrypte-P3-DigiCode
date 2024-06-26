


export default function CategoryPage () {



    const handleBack = () => {
        window.history.back();
       };

       return <button type="button" onClick={handleBack} className="backButton">Back</button>;
          
}