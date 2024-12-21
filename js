$(document).ready(function () {
    $("#post-form").submit(function (e) {
        e.preventDefault();

        const postContent = $("#post-content").val();
        if (postContent.trim() !== "") {
            const post = $(`
                <div class="post">
                    <p>${postContent}</p>
                    <button class="like-btn">Like (<span class="like-count">0</span>)</button>
                </div>
            `);

            post.find(".like-btn").click(function () {
                const count = $(this).find(".like-count");
                count.text(parseInt(count.text()) + 1);
            });

            $("#feed").prepend(post);
            $("#post-content").val(""); // Clear input
        }
    });
});

