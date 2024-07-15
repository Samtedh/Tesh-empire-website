function postStory() {
    const storyContainer = document.getElementById('story-container');
    const newStory = document.getElementById('new-story').value;
    if (newStory) {
        const storyDiv = document.createElement('div');
        storyDiv.textContent = newStory;
        storyDiv.style.marginBottom = '1em';
        storyContainer.appendChild(storyDiv);
        document.getElementById('new-story').value = '';
    }
}
