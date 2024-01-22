import { RestroCards } from "./RestroCards";

export const Body = () => {
    return (
        <>
         <div>
            <img class="image-big" src="https://citizens.ec.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2023-02/fw_banner142951.jpg?itok=-Frm6oAK"></img>
        </div>
         <div className="body">
            <div className="restro-container">
            <RestroCards name="Meghana Foods" cuisine="North Indian, Asian" image="https://www.holidify.com/images/cmsuploads/compressed/9dd2e32b-613d-4515-9597-39ba6ad86b8b_20181227134422.jpg" starRating="4.4" time="30minutes"/>
            <RestroCards name="Burger Buddy" cuisine="Fast Food, Burger" image="https://images.herzindagi.info/image/2022/Apr/burger-tasty.jpg" starRating="4.8" time="60minutes"/>
            <RestroCards name="Cooks" cuisine="Fast Food, Burger" image="https://www.holidify.com/images/cmsuploads/compressed/9dd2e32b-613d-4515-9597-39ba6ad86b8b_20181227134422.jpg" starRating="4.8" time="60minutes"/>
            <RestroCards name="Chicago Pizza" cuisine="Fast Food, Burger" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/02/foods_cause_cancer_Hot_dogs_1296x728_header-1024x575.jpg?w=1155&h=1528" starRating="4.8" time="60minutes"/>
            <RestroCards name="Bikanerwala" cuisine="Fast Food, Burger" image="https://images.herzindagi.info/image/2022/Apr/burger-tasty.jpg" starRating="4.8" time="60minutes"/>
            <RestroCards name="Meghana Foods" cuisine="North Indian, Asian" image="https://www.holidify.com/images/cmsuploads/compressed/9dd2e32b-613d-4515-9597-39ba6ad86b8b_20181227134422.jpg" starRating="4.4" time="30minutes"/>
            <RestroCards name="Burger Buddy" cuisine="Fast Food, Burger" image="https://images.herzindagi.info/image/2022/Apr/burger-tasty.jpg" starRating="4.8" time="60minutes"/>
            </div>
        </div>
        </>
    );
  };
  