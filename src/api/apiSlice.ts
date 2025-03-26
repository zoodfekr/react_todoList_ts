import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { server_url } from '../app_setting'
import axios from 'axios'

const uploadFile = async props => {
  let status

  //console.log'props axios', props)

  if (props.type === 's2st' || props.type === 's2tt' || props.type === 'asr') {
    status = 'audio'
  } else {
    status = 'text'
  }

  const method = 'POST'
  const baseUrl = server_url

  const url = `${baseUrl}${status === 'audio' ? 'api/audio/' : 'api/text/'}`

  const formData = new FormData()

  if (status === 'audio') {
    formData.append('audio', props.audio)
  } else {
    formData.append('text', props.text)
  }

  formData.append('type', props.type)
  // formData.append('source_language', props?.source_language ??  )
  if (props?.source_language) {
    formData.append('source_language', props?.source_language)
  }
  formData.append('target_language', props.target_language)

  try {
    const response = await axios({
      url,
      method,
      data: formData,
      headers: {
        authorization: `Bearer ${props.token}`
      },
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        props.showProgress(percentCompleted)
        //console.log`Upload Progress: ${percentCompleted}%`)
      }
    })

    return response.data
  } catch (error) {
    console.error('Error uploading data:', error)
    throw error
  }
}

export default uploadFile

export const apiSlice = createApi({
  reducerPath: 'api', //state.api
  baseQuery: fetchBaseQuery({ baseUrl: server_url }),

  tagTypes: [
    'LANG',
    'SENDDATA',
    'CAPTCHA',
    'UPDATE-TOKEN',
    'CHANGE_PASSWORD',
    'KARBAR',
    'DASTRASIHA',
    'SATHEKARBAR',
    'RESET_PASSWORD',
    'SATHEKARBARBYID',
    'TRANSLATE',
    'TRANSLATEALL',
    'USERINFO',
    'TRANSLATESINGLE',
    'DASHBOARD'
  ],

  endpoints: builder => ({
    // دریافت توکن
    get_Token: builder.mutation({
      query: props => {
        const url = `api/token/`
        const method = 'POST'
        return {
          url,
          method,
          body: {
            username: props.username,
            password: props.password,
            captcha_response: props.captcha_response,
            captcha_key: props.captcha_key
          }
        }
      },
      providesTags: ['TOKEN']
    }),

    update_Token: builder.mutation({
      query: props => ({
        url: `api/token/refresh/`,
        method: 'POST',
        headers: { authorization: `Bearer ${props.token}` },
        body: { refresh: props.refresh }
      }),
      providesTags: ['UPDATE-TOKEN']
    }),

    getLang: builder.query({
      query: props => {
        const url = 'api/lang/'
        const method = 'GET'
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['LANG']
    }),

    getSoundData: builder.mutation({
      query: props => {
        let status

        if (
          props.type === 's2st' ||
          props.type === 's2tt' ||
          props.type === 'asr'
        ) {
          status = 'audio'
        } else {
          status = 'text'
        }

        const url = status === 'audio' ? 'api/audio/' : 'api/text/'
        const method = 'POST'

        const formData = new FormData()

        if (status === 'audio') {
          formData.append('audio', props.audio)
        } else {
          formData.append('text', props.text)
        }

        formData.append('type', props.type)
        formData.append('source_language', props?.source_language ?? 'eng')
        formData.append('target_language', props.target_language)

        return {
          url,
          method,
          body: formData,
          headers: {
            authorization: `Bearer ${props.token}`
          },
          onUploadProgress: progressEvent => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )
            props.showProgress(percentCompleted)
            //console.log`Upload Progress: ${percentCompleted}%`)
          }
        }
      },
      invalidatesTags: ['SENDDATA']
    }),

    getCaptchaInfo: builder.query({
      query: props => {
        const url = `api/captcha/get/`
        const method = 'GET'
        return {
          url,
          method,
          headers: {}
        }
      },
      providesTags: ['CAPTCHA']
    }),

    changeUserPassword: builder.mutation({
      query: props => {
        const method = 'POST'
        const url = `api/users/user-change-password/`

        return {
          url,
          method,
          body: {
            password: props.password,
            password_confirmation: props.password_confirmation,
            password_old: props.password_old
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['CHANGE_PASSWORD']
    }),

    getKarbar: builder.query({
      query: props => {
        const url = 'api/users/karbar/'
        const method = 'GET'
        let paramsValue = props.params
        const params = paramsValue
        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['KARBAR']
    }),

    getdastrasiha: builder.query({
      query: props => {
        const url = 'api/users/dastrasiha/'
        const method = 'GET'
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['DASTRASIHA']
    }),

    getsathekarbar: builder.query({
      query: props => {
        const url = 'api/users/sathekarbar/'
        const method = 'GET'
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['SATHEKARBAR']
    }),

    getsathekarbarByID: builder.query({
      query: props => {
        const url = `api/users/sathekarbar/${props.id}/`
        const method = 'GET'
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['SATHEKARBARBYID']
    }),

    addSathekarbar: builder.mutation({
      query: props => {
        const method = 'POST'
        const url = `api/users/sathekarbar/`

        //console.log'in redux', props)
        return {
          url,
          method,
          body: {
            name: props.body.name,
            dastrasi: props.body.dastrasi
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['SATHEKARBAR']
    }),

    editSathekarbar: builder.mutation({
      query: props => {
        const method = 'PUT'
        const url = `api/users/sathekarbar/${props.id}/`

        //console.log'in redux', props)
        return {
          url,
          method,
          body: {
            name: props.body.name,
            dastrasi: props.body.dastrasi
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['SATHEKARBAR', 'SATHEKARBARBYID']
    }),

    add_karbar: builder.mutation({
      query: props => {
        const method = 'POST'
        const url = `api/users/karbar/`

        return {
          url,
          method,
          body: {
            first_name: props.first_name,
            last_name: props.last_name,
            phone_number: props.phone_number,
            sathekarbar: props.sathekarbar,
            username: props.username,
            password: props.password
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['KARBAR']
    }),

    delete_karbar: builder.mutation({
      query: props => {
        const method = 'DELETE'
        const url = `api/users/karbar/${props.id}/`
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['KARBAR']
    }),

    delete_sathekarbar: builder.mutation({
      query: props => {
        const method = 'DELETE'
        const url = `api/users/sathekarbar/${props.id}/`
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['SATHEKARBAR']
    }),

    edit_karbar: builder.mutation({
      query: props => {
        const method = 'PUT'
        const url = `api/users/karbar/${props.id}/`

        return {
          url,
          method,
          body: {
            first_name: props.first_name,
            last_name: props.last_name,
            phone_number: props.phone_number,
            sathekarbar: props.sathekarbar,
            username: props.username,
            password: props.password,
            password_confirmation: props.password_confirmation,
            is_active: props.is_active
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['KARBAR']
    }),

    resetUserPassword: builder.mutation({
      query: props => {
        const method = 'POST'
        const url = `api/users/user-reset-password/${props.id}/`

        return {
          url,
          method,
          body: {
            password: props.password,
            password_confirmation: props.password_confirmation
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      }
      // invalidatesTags: ["RESET_PASSWORD"]
    }),

    getUserinfo: builder.query({
      query: props => {
        const url = 'api/users/userinfo/'
        const method = 'GET'
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['USERINFO']
    }),

    get_report: builder.query({
      query: props => {
        const url = 'api/translate/'
        const method = 'GET'

        const params = props.params

        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['TRANSLATE']
    }),

    get_reportAll: builder.query({
      query: props => {
        const url = 'api/translateall/'
        const method = 'GET'

        //console.log'in fun ', props)
        const params = props.params
        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['TRANSLATEALL']
    }),

    del_report: builder.mutation({
      query: props => {
        const method = 'DELETE'
        const url =
          props.place === 'report' ? `api/translate/${props.id}/` : `api/translateall/${props.id}/`
        return {
          url,
          method,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['TRANSLATEALL' , 'TRANSLATE']
    }),

    
    get_report_single: builder.query({
      query: props => {
        const method = 'GET'
        const url =
          props.place === 'report'
            ? `api/translate/${props.id}/`
            : `api/translateall/${props.id}/`

        const params = {}
        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['TRANSLATESINGLE']
    }),

    activeUser: builder.mutation({
      query: props => {
        const method = 'PUT'
        const url = `api/users/karbar-active/${props.id}/`

        return {
          url,
          method,
          body: {
            is_active: props.is_active
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: ['KARBAR']
    }),

    translateupdate: builder.mutation({
      query: props => {
        const method = 'PUT'
        const url = `api/translateupdate/${props.id}/`
        return {
          url,
          method,
          body: {
            name: props.name
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      invalidatesTags: (result, error, props) => {
        return props.place === 'report' ? ['TRANSLATE'] : ['TRANSLATEALL']
      }
    }),


    translatesave: builder.mutation({
      query: props => {
        const method = 'POST'
        const url = `api/translatesave/${props.id}/`
        return {
          url,
          method,
          body: {
            name: props.name
          },
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      // invalidatesTags: (result, error, props) => {
      //   return props.place === 'report' ? ['TRANSLATE'] : ['TRANSLATEALL']
      // }
    }),



    get_trtype: builder.query({
      query: props => {
        const method = 'GET'
        const url = 'api/trtype/'

        const params = {}
        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      }
    }),

    getDashboard: builder.query({
      query: props => {
        const method = 'GET'
        const url = `api/dashboard/`

        const params = {}
        return {
          url,
          method,
          params,
          headers: {
            authorization: `Bearer ${props.token}`
          }
        }
      },
      providesTags: ['DASHBOARD']
    }),


  })
})

export const {
  useGetLangQuery, // دریافت زبان ها
  useGetSoundDataMutation,
  useGetCaptchaInfoQuery,
  useGet_TokenMutation,
  useUpdate_TokenMutation, // به روز رسانی توکن
  useChangeUserPasswordMutation,
  useGetKarbarQuery,
  useGetdastrasihaQuery,
  useGetsathekarbarQuery,
  useEditSathekarbarMutation,

  useAdd_karbarMutation,
  useDelete_karbarMutation,
  useEdit_karbarMutation,
  useResetUserPasswordMutation,
  useAddSathekarbarMutation,
  useDelete_sathekarbarMutation,
  useGetsathekarbarByIDQuery,
  useGetUserinfoQuery,
  useGet_reportQuery, // دریافت گزارش
  useGet_reportAllQuery, // دریافت گزارش کل ادمین
  useDel_reportMutation, // حذف گزارش
  useGet_report_singleQuery, // دریافت یک گزارش
  useActiveUserMutation, // فعال و غیرفعال سازی کاربر
  useTranslateupdateMutation, // تغییر نام بایگانی
  useGet_trtypeQuery, // دریافت نوع ترجمه
  useGetDashboardQuery, // دریافت اطلاعات داشبورد
  useTranslatesaveMutation, // ذخیره نام تبدیل ها در جدول
} = apiSlice
