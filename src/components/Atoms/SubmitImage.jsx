import {useEffect, useState} from "react";
import styled from "styled-components";

const ButtonCon = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    padding: 0 20px 10px 0;
`;

const Button = styled.button`
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #fff;
    border-radius: 10px;
`;


export const SubmitImage = ({username, userRole, selectedValue}) => {
    const [inputImg, setInputImg] = useState(null);

    const invoke = (event) => {
        const file = event.target.files[0];

        console.log(file)

        if (file) {
            setInputImg(file);
        }
    }


    const handleImageChange = async () => {

        if (inputImg == null) return null;

        const reader = new FileReader();

        console.log('file', inputImg);
        console.log('username', username);
        console.log('userRole', userRole);
        console.log('selectedValue', selectedValue);

        const formData = new FormData();
        formData.append('file', inputImg);
        formData.append('username', username);
        formData.append('userrole', userRole);
        formData.append('selectedValue', selectedValue);

        try {
            const response = await fetch('http://localhost:3125/clean/input', {
                method: 'POST',
                body: formData,
            });

        } catch (error) {
            console.error('파일 업로드 오류:', error);
        }
    };



    return (
        <>
            <ButtonCon>
                <img className="uploadImg" src="" alt="이미지를 업로드 해주세요"/>
                <Button className="uploadBtn">
                    청소완료 사진 업로드{" "}
                    <img
                        className="icon"
                        src="../src/assets/popup/Image_02.png"
                        alt="icon"
                    />
                    <input className="fileInput" type="file" accept="image/*" onChange={invoke}/>
                </Button>
                <Button onClick={handleImageChange}>제출</Button>
            </ButtonCon>
        </>
    )

}
