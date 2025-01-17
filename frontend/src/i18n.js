import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: "Hello world",
      login: "Login",
      loginfailed: "Login failed. Please check your username and password.",
      register: "Register",
      registerfailed: "Username already exists. Choose a different one.",
      registersuccess:
        "Registration successful, redirecting to the main page...",
      home: "Home",
      login_required: "You need to login first.",
      width: "Width",
      height: "Height",
      fontSize: "Font Size",
      lineSpacing: "Line Spacing",
      topMargin: "Top Margin",
      bottomMargin: "Bottom Margin",
      leftMargin: "Left Margin",
      rightMargin: "Right Margin",
      backgroundImageSpecified: "Background image is already specified",
      fontFile: "Font File",
      chooseFile: "Choose File",
      backgroundImageFile: "Background Image File",
      widthAndHeightSpecified: "Width and height are already specified",
      loading: "Loading",
      text: "Text",
      enterText: "Please enter the text to be converted",
      orUploadDocument: "or upload a document file",
      preview: "Preview",
      loadSettings: "Load Settings",
      saveSettings: "Save Settings",
      generateFullHandwritingImage: "Generate Full Handwriting Image",
      previewImage: "Preview Image",
      projectAddress: "Project Address",
      reigisterlogin: "Register/Login",
      username: "Username",
      password: "Password",
      lineSpacingSigma: "Line Spacing Sigma",
      fontSizeSigma: "Font Size Sigma",
      wordSpacingSigma: "Word Spacing Sigma",
      perturbXSigma: "Perturb X Sigma",
      perturbYSigma: "Perturb Y Sigma",
      perturbThetaSigma: "Perturb Theta Sigma",
      wordSpacing: "Word Spacing",
      expand: "expand",
    },
  },
  cn: {
    message: {
      hello: "你好",
      login: "登录",
      loginfailed: "登录失败，请检查用户名和密码。",
      register: "注册",
      registerfailed: "用户名已存在，请选择其他用户名。",
      registersuccess: "注册成功，正在跳转到主页...",
      home: "首页",
      login_required: "请先登录。",
      width: "宽度",
      height: "高度",
      fontSize: "字体大小",
      lineSpacing: "行间距",
      topMargin: "上边距",
      bottomMargin: "下边距",
      leftMargin: "左边距",
      rightMargin: "右边距",
      backgroundImageSpecified: "背景图片已经指定",
      fontFile: "字体文件",
      chooseFile: "选择文件",
      backgroundImageFile: "背景图片文件",
      widthAndHeightSpecified: "宽度和高度已经指定",
      loading: "加载中",
      text: "文字",
      enterText: "请输入要转换的文字",
      orUploadDocument: "或者上传一个文档文件",
      preview: "预览",
      loadSettings: "载入设置",
      saveSettings: "保存设置",
      generateFullHandwritingImage: "生成完整手写图片",
      previewImage: "预览图像",
      projectAddress: "项目地址",
      reigisterlogin: "注册/登录",
      username: "用户名",
      password: "密码",
      lineSpacingSigma: "行间距扰动",
      fontSizeSigma: "字体大小扰动",
      wordSpacingSigma: "字间距扰动",
      perturbXSigma: "笔画横向偏移",
      perturbYSigma: "笔画纵向偏移",
      perturbThetaSigma: "笔画旋转偏移",
      wordSpacing: "字间距",
      expand: "更多内容",
    },
  },
};

const i18n = createI18n({
  locale: 'cn', // 默认显示的语言 
  messages,
})

export default i18n
