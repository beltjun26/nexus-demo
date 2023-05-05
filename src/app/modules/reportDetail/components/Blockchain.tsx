/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import {Card3} from '../../../../_metronic/partials/content/cards/Card3'
import {useParams} from 'react-router-dom'
import {NexusDataContext} from '../../../data/data'
import {BlockchainCard} from '../../../../_metronic/partials/content/cards/BlockchainCard'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

export function Blockchain() {
  const nexusData = useContext(NexusDataContext)
  const {reportId} = useParams()

  const reportDetail = nexusData.reportDetails.find((report) => report.report_id === reportId)

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Blockchain
          <span className='fs-6 text-gray-400 fw-bold ms-1'>(1)</span>
        </h3>
      </div>

      <div className='row g-12 g-xl-12 mb-10'>
        <div className='col-md-12 col-xxl-12'>
          <div className='card'>
            <div className='card-body d-flex flex-center flex-column p-9'>
              <div className='mb-5'>
                <div className='symbol symbol-75px symbol-circle'>
                  <img alt='Pic' src={toAbsoluteUrl('/media/svg/coins/bitcoin.svg')} />
                </div>
              </div>

              <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
                Bitcoin
              </a>

              <div className='fw-bold text-gray-400 mb-2'>
                {reportDetail?.blochain_info.bitcoin?.btc_wallet_id}
              </div>
              <div className='fw-bold text-gray-700 mb-6'>
                Balance {reportDetail?.blochain_info.bitcoin?.btc_wallet_balance}
              </div>
              <h4 className='fw-bolder my-4'>Chain Stat</h4>
              <div className='d-flex flex-center flex-wrap mb-5'>
                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.chain_stats
                        .funded_txo_count
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Funded TXO Count</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.chain_stats
                        .funded_txo_sum
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Funded TXO Sum</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.chain_stats
                        .spent_txo_count
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Spent TXO count</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {reportDetail?.blochain_info.bitcoin?.btc_wallet_info.chain_stats.spent_txo_sum}
                  </div>
                  <div className='fw-bold text-gray-400'>Spent TXO Sum</div>
                </div>
              </div>
              <h4 className='fw-bolder my-4'>Mempool Stat</h4>
              <div className='d-flex flex-center flex-wrap mb-5'>
                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.mempool_stats
                        .funded_txo_count
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Funded TXO Count</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.mempool_stats
                        .funded_txo_sum
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Funded TXO Sum</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.mempool_stats
                        .spent_txo_count
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Spent TXO count</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
                  <div className='fs-6 fw-bolder text-gray-700'>
                    {
                      reportDetail?.blochain_info.bitcoin?.btc_wallet_info.mempool_stats
                        .spent_txo_sum
                    }
                  </div>
                  <div className='fw-bold text-gray-400'>Spent TXO Sum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>Transactions</h3>
      </div>

      {reportDetail?.blochain_info.bitcoin?.recent_tx.map((transaction, index) => (
        <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
          <div className='card-header cursor-pointer'>
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>Transaction Detail ({transaction.txid})</h3>
            </div>
          </div>

          <div className='card-body p-9'>
            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>txid</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>{transaction.txid}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>version</label>

              <div className='col-lg-8 fv-row'>
                <span className='fw-bold fs-6'>{transaction.version}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>locktime</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <span className='fw-bolder fs-6 me-2'>{transaction.locktime}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>size</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <span className='fw-bolder fs-6 me-2'>{transaction.size}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Weight</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <span className='fw-bolder fs-6 me-2'>{transaction.weight}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Fee</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <span className='fw-bolder fs-6 me-2'>{transaction.fee}</span>
              </div>
            </div>

            <div className='accordion accordion-icon-toggle' id='kt_accordion_2'>
              <div className='mb-5'>
                <div
                  className='accordion-header py-3 d-flex collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${transaction.txid}-vin`}
                >
                  <span className='accordion-icon'>
                    <KTSVG
                      className='svg-icon svg-icon-4'
                      path='/media/icons/duotune/arrows/arr064.svg'
                    />
                  </span>
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>VIN</h3>
                </div>
                <div
                  id={`${transaction.txid}-vin`}
                  className='collapse fs-6 ps-10'
                  data-bs-parent='#kt_accordion_2'
                >
                  {/* Insert accordion */}

                  {transaction.vin.map((vin, index) => (
                      <>
                        <div className='card-title mb-3'>
                          <h5 className='fw-bolder m-0'>Transaction Detail</h5>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Transaction ID</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.txid}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>vout</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.vout}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Sequence</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.sequence}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Signature</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.scriptsig}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Signature ASM</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.scriptsig_asm}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Script Pubkey</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.prevout.scriptpubkey}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Script Pubkey ASM</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.prevout.scriptpubkey_asm}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Script Pubkey Type</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.prevout.scriptpubkey_type}</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Script Pubkey Address</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.prevout.scriptpubkey_address}</span>
                          </div>
                        </div>
                        <div className='row mb-6'>
                          <label className='col-lg-4 fw-bold text-muted'>Is Coint Base</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vin.is_coinbase ? 'True' : 'False'}</span>
                          </div>
                        </div>
                      </>
                  ))}
                </div>
              </div>
              <div className='mb-5'>
                <div
                  className='accordion-header py-3 d-flex collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${transaction.txid}-vout`}
                >
                  <span className='accordion-icon'>
                    <KTSVG
                      className='svg-icon svg-icon-4'
                      path='/media/icons/duotune/arrows/arr064.svg'
                    />
                  </span>
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>VOUT</h3>
                </div>
                <div
                  id={`${transaction.txid}-vout`}
                  className='collapse fs-6 ps-10'
                  data-bs-parent='#kt_accordion_2'
                >
                  {/* Insert accordion */}

                  {transaction.vout.map((vout, index) => (
                      <>
                        <div className='card-title mb-3'>
                          <h5 className='fw-bolder m-0'>Transaction Detail</h5>
                        </div>

                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Value</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vout.value}</span>
                          </div>
                        </div>

                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Pubkey</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vout.scriptpubkey}</span>
                          </div>
                        </div>

                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Pubkey ASM</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vout.scriptpubkey_asm}</span>
                          </div>
                        </div>

                        <div className='row mb-2'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Pubkey Type</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vout.scriptpubkey_type}</span>
                          </div>
                        </div>

                        <div className='row mb-6'>
                          <label className='col-lg-4 fw-bold text-muted'>Script Pubkey Address</label>

                          <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{vout.scriptpubkey_address}</span>
                          </div>
                        </div>

                      </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
