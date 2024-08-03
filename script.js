const github = document.getElementById("git-hub");
const telegram = document.getElementById("telegram");
const twitch = document.getElementById("twitch");
const x = document.getElementById("x");
const pfp = document.getElementById("pfp");
const decoration = document.getElementById("decoration-asset");
const avatarDecoration = document.getElementById("avat-dec");
const name = document.getElementById("name");
const statusDiv = document.getElementById("status");
const banner = document.getElementById("banner");
const badgesDiv = document.getElementById("badges");
const badges = [
    ["active_developer","https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png"],
    ["nitro","https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png"],
    ["quest","https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png"],
    ["house_bravery","https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png"],
    ["house_balance","https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png"],
    ["house_brilliance","https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png"],
    ["discord_certified_moderator","https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png"],
    ["early_supporter","https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png"],
    ["bughunter_level_1","https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png"],
    ["hypesquad_events","https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png"],
    ["bughunter_level_2","https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png"],
    ["early_verified_bot_developer","https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png"],
    ["removed_tag","https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"]
];
let activebBadges = 0;
function findBadge(t) {
    for(let i = 0;i < badges.length;i++) {
        if(badges[i][0] == t.toLowerCase()) {
            return badges[i][1];
        }
    }
}
document.addEventListener("DOMContentLoaded", async ()=>{
    await fetch("https://discordlookup.mesalytic.moe/v1/user/210608545618460672")
    .then(res => res.json())
    .then((res)=>{
        pfp.src = res.avatar.link;
        name.innerHTML = res.username;
        if(res.banner.link == null) {
            banner.style.backgroundColor = res.raw.banner_color;
        } else {
            banner.style.backgroundImage = `url(${res.banner.link})`
        }
        const discordBadge = res.badges;
        let code = ``;
        for(let i = 0;i < discordBadge.length;i++) {
            activebBadges += 1;
            code += `<img src="${findBadge(discordBadge[i])}" width="30px" draggable="false" id="badge">`;
        }
        if(res.avatar.is_animated == true || res.banner.is_animated == true || res.raw.banner != null) {
            code += `<img src="${findBadge("nitro")}" width="30px" draggable="false" id="badge">`;
            activebBadges += 1;
        }
        if(new Date(res.created_at).getFullYear() < "2024") {
            code += `<img src="${findBadge("removed_tag")}" width="30px" draggable="false" id="badge">`;
            activebBadges += 1;
        }
        badgesDiv.innerHTML = code;
        badgesDiv.style.width = activebBadges*10 + "%";
        let margin = (activebBadges*10)/2
        badgesDiv.style.marginLeft = `calc(50% - ${margin + "%"})`
        if(res.avatar_decoration == null || res.avatar_decoration.asset == null) return;
        avatarDecoration.src = `https://cdn.discordapp.com/avatar-decoration-presets/${res.avatar_decoration.asset}.png?size=80&passthrough=true`
        avatarDecoration.style.width = "100px";
        avatarDecoration.style.position = "absolute";
        avatarDecoration.style.marginLeft = "-90px";
        avatarDecoration.style.marginTop = "-50px";
    });

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
})
github.addEventListener("click",()=>{
    window.location.href = "https://github.com/Tunud0"
});
telegram.addEventListener("click",()=>{
    window.location.href = "https://t.me/Tunudo";
});
twitch.addEventListener("click",()=>{
    window.location.href = "https://www.twitch.tv/tunud0_";
});
x.addEventListener("click",()=>{
    window.location.href = "https://x.com/Tunud0";
});
