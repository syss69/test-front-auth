<script>
</script>
<template>
    <div class="pageContent">
        <div class="pictureContainer"></div>
        <div class="descriptionContainer">
            <h1>Profile NAME</h1>
            <h5>My Role</h5>
        </div>
        <div class="missionsContainer">
            <h2 style="color:blanchedalmond">Vos missions:</h2>
            <div class="mission">
                <h3>Mission Tittle</h3>
                <p>Mission description</p>
            </div>
        </div>
    </div>
</template>
<style>
.pageContent{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.pictureContainer{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: aqua;
}
</style>