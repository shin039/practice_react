// 文字列定数
export const CHANGE_NAME     = 'CHANGE_NAME'
export const CHANGE_AGE      = 'CHANGE_AGE'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const RQ_DATA         = 'RQ_DATA'
export const RECV_DATA_SUC   = 'RECV_DATA_SUC'
export const RECV_DATA_FAIL  = 'RECV_DATA_FAIL'

// action creaters
export const changeName     = name           => ({ type: CHANGE_NAME, name, })
export const changeAge      = age            => ({ type: CHANGE_AGE , age,  })
export const initializeForm = ()             => ({ type: INITIALIZE_FORM,   })
export const reqestData     = ()             => ({ tyep: RQ_DATA, })
export const recvDataSuc    = characterArray => ({ tyep: RECV_DATA_SUC, characterArray, })
export const recvDataFail   = ()             => ({ tyep: RECV_DATA_FAIL, })

