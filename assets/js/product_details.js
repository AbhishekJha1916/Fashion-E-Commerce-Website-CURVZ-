let array = document.getElementById('filters');
console.log(array);

function desclick(id){
    document.getElementById('tab1').style.borderBottom = '1px solid #5A1413';
    document.getElementById('tab2').style.borderBottom = 'none';
    document.getElementById('tab3').style.borderBottom = 'none';
    document.getElementById('description').style.display = 'contents';
    document.getElementById('specification').style.display = 'none';
    document.getElementById('review').style.display = 'none';
}

function specclick(){
    document.getElementById('tab1').style.borderBottom = 'none';
    document.getElementById('tab2').style.borderBottom = '1px solid #5A1413';
    document.getElementById('tab3').style.borderBottom = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('specification').style.display = 'contents';
    document.getElementById('review').style.display = 'none';
}

function revclick(){
    document.getElementById('tab1').style.borderBottom = 'none';
    document.getElementById('tab2').style.borderBottom = 'none';
    document.getElementById('tab3').style.borderBottom = '1px solid #5A1413';
    document.getElementById('description').style.display = 'none';
    document.getElementById('specification').style.display = 'none';
    document.getElementById('review').style.display = 'contents';
}