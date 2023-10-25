import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

// Tambahkan event listener untuk tombol Submit
document.getElementById("button").addEventListener("click", function () {
  PostSignUp();
});

function PostSignUp() {
  let target_url = "https://us-central1-ordinal-stone-389604.cloudfunctions.net/petapedia";
  let tokenkey = "token";
  let tokenvalue = "8e87pod9d9a8fh9sfd87f9dhsf98dsf98sdf9ssd98f";
  let datainjson = {
    "username": getValue("username"),
    "password": getValue("password")
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  // Periksa hasil autentikasi
  if (result.status === true) {
    // Jika berhasil, tampilkan pesan "Berhasil masuk ke dashboard"
    setInner("pesan", "Berhasil masuk ke dashboard");
  } else {
    // Jika password salah, tampilkan pesan "Password salah"
    setInner("pesan", "Password salah");
  }
  
  // Simpan token (jika diperlukan)
  if (result.token) {
    setCookieWithExpireHour("token", result.token, 2);
  }
}
