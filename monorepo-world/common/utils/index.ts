import axios from 'axios'

// 公共模块-工具函数  
export function hello() {
  console.log('hello common utils')
}

// 公共模块-工具函数-随机字符串
export const randomString = () => {
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890";
  var maxPos = chars.length;
  var pwd = "";
  for (var i = 0; i < 32; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 正则判断内容是否为文本文件地址
 * @param content
 * @returns {boolean}
 */
export function isContentAsTxtFile(content: string) {
    const reg = /^(https?):\/\/[^\s]+\.txt$/
    return reg.test(content)
}

/**
 * 读取远程文本文件内容
 * @param url
 * @returns {Promise<unknown>}
 */
export function readTxtFile(url: string) {
    return new Promise((resolve) => {
        axios({
            method: 'get',
            url,
            responseType: 'blob',
            withCredentials: false,
            transformResponse: [
                function (data) {
                    let reader = new FileReader()
                    reader.readAsText(data, 'utf-8')
                    reader.onload = function () {
                        //此处便是返回值
                        resolve(reader.result || '')
                    }
                }
            ]
        }).then(() => {
            // console.log('reader.res',res)
        })
    })
}

// 使用 获取远程文本文件内容
// const res = await getResList({menuId: tab.value});
// if (res.code === 200) {
//   const list = res.data ?? []
//   for (let i = 0; i < list.length; i++) {
//     const desc = list[i].resDesc
//     if (isContentAsTxtFile(desc)) {
//       list[i].resDesc = await readTxtFile(desc)
//     }
//   }
//   dataList.value = list
// }