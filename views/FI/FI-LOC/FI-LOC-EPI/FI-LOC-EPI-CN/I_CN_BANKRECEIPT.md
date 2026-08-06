---
name: I_CN_BANKRECEIPT
description: CN Bankreceipt
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-EPI
  - interface-view
  - bank
  - component:FI-LOC-EPI-CN
  - lob:Finance
  - bo:Bank
---
# I_CN_BANKRECEIPT

**CN Bankreceipt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `BankStmtHeader.CompanyCode` |
| key `HouseBank` | `BankStmtHeader.HouseBank` |
| key `HouseBankAccount` | `BankStmtHeader.HouseBankAccount` |
| key `BankReceiptNumber` | `BankRcpt.ebr_no` |
| `BankReceiptStatus` | `BankRcpt.status` |
| `BankReceiptEnterDate` | `BankRcpt.ebr_date` |
| `BankReceiptSource` | `BankRcpt.source` |
| `BankReceiptUsageText` | `BankRcpt.ebr_use` |
| `BankReceiptSummaryText` | `BankRcpt.summary` |
| `BankReceiptSerialNumber` | `BankRcpt.srl_no` |
| `BankReceiptBankDateTime` | `BankRcpt.bank_timestamp` |
| `BankReceiptBankBranchText` | `BankRcpt.bank_branch` |
| `BankReceiptBankTellerText` | `BankRcpt.bank_teller` |
| `BankReceiptBankRemarkText` | `BankRcpt.bank_remark` |
| `CN_BankReceiptIsFoundInDoc` | `BankRcpt.fdflg` |
| `BankReceiptIsReversal` | `BankRcpt.xreversal` |
| `BankReceiptReferenceText` | `BankRcpt.reference` |
| `ClsgBalAmtInBkAcctCrcy` | `BankRcpt.balance` |
| `BankReceiptTransTime` | `BankRcpt.bank_time` |
| `BankCountry` | `BankRcpt.part_bank_ctry` |
| `BankInternalID` | `BankRcpt.part_bank_key` |
| `BankName` | `BankRcpt.part_bank_name` |
| `BusinessPartnerName` | `BankStmtItem.BusinessPartnerName` |
| `PartnerBankIBAN` | `BankStmtItem.PartnerBankIBAN` |
| `ExchangeRate` | `cast ( BankStmtItem.ExchangeRate as fis_exchange_rate )` |
| `PaymentAdviceAccountType` | `BankStmtItem.PaymentAdviceAccountType` |
| `PaymentAdviceAccount` | `BankStmtItem.PaymentAdviceAccount` |
| `BankStatementPostingRule` | `BankStmtItem.PostingRule` |
| `SubledgerDocument` | `BankStmtItem.SubledgerDocument` |
| `PostingDate` | `BankStmtItem.PostingDate` |
| `CostCenter` | `BankStmtItem.CostCenter` |
| `ProfitCenter` | `BankStmtItem.ProfitCenter` |
| `BankPostingDate` | `BankStmtItem.BankPostingDate` |
| `DebitCreditCode` | `BankStmtItem.DebitCreditCode` |
| `AmountInAccountCurrency` | `BankStmtItem.AmountInAccountCurrency` |
| `TransactionCurrency` | `BankStmtItem.TransactionCurrency` |
| `AmountInOriginalCurrency` | `BankStmtItem.ForeignCurrencyAmount` |
| `OriginalCurrency` | `BankStmtItem.OriginalCurrency` |
| `PaymentExternalTransacType` | `BankStmtItem.PaymentExternalTransacType` |
| `BankAccountHolderName` | `BankStmtHeader.BankAccountHolderName` |
| `IBAN` | `BankStmtHeader.IBAN` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Bank Receipt Information for China'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_CN_BankReceipt
  as select from P_CN_BANKRECEIPT              as BankRcpt
  // get information from febep
    inner join   P_Arbanktransactiondocitem_06 as BankStmtItem   on  BankRcpt.kukey = BankStmtItem.StatementShortID
                                                                 and BankRcpt.esnum = BankStmtItem.StatementItem
  // get information from febko
    inner join   P_Arbanktransactiondoc_02     as BankStmtHeader on BankStmtItem.StatementShortID = BankStmtHeader.StatementShortID

{
  key BankStmtHeader.CompanyCode                              as CompanyCode,
  key BankStmtHeader.HouseBank                                as HouseBank,
  key BankStmtHeader.HouseBankAccount                         as HouseBankAccount,
  key BankRcpt.ebr_no                                         as BankReceiptNumber,
      BankRcpt.status                                         as BankReceiptStatus,
      BankRcpt.ebr_date                                       as BankReceiptEnterDate,
      BankRcpt.source                                         as BankReceiptSource,
      BankRcpt.ebr_use                                        as BankReceiptUsageText,
      BankRcpt.summary                                        as BankReceiptSummaryText,
      BankRcpt.srl_no                                         as BankReceiptSerialNumber,
      BankRcpt.bank_timestamp                                 as BankReceiptBankDateTime,
      BankRcpt.bank_branch                                    as BankReceiptBankBranchText,
      BankRcpt.bank_teller                                    as BankReceiptBankTellerText,
      BankRcpt.bank_remark                                    as BankReceiptBankRemarkText,
      @Semantics.booleanIndicator:true
      BankRcpt.fdflg                                          as CN_BankReceiptIsFoundInDoc,
      @Semantics.booleanIndicator:true
      BankRcpt.xreversal                                      as BankReceiptIsReversal,
      BankRcpt.reference                                      as BankReceiptReferenceText,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BankRcpt.balance                                        as ClsgBalAmtInBkAcctCrcy,
      BankRcpt.bank_time                                      as BankReceiptTransTime,
      BankRcpt.part_bank_ctry                                 as BankCountry,
      BankRcpt.part_bank_key                                  as BankInternalID,
      BankRcpt.part_bank_name                                 as BankName,
      BankStmtItem.BusinessPartnerName                        as BusinessPartnerName,
      BankStmtItem.PartnerBankIBAN                            as PartnerBankIBAN,
      cast ( BankStmtItem.ExchangeRate as fis_exchange_rate ) as ExchangeRate,
      BankStmtItem.PaymentAdviceAccountType                   as PaymentAdviceAccountType,
      BankStmtItem.PaymentAdviceAccount                       as PaymentAdviceAccount,
      BankStmtItem.PostingRule                                as BankStatementPostingRule,
      BankStmtItem.SubledgerDocument                          as SubledgerDocument,
      BankStmtItem.PostingDate                                as PostingDate,
      BankStmtItem.CostCenter                                 as CostCenter,
      BankStmtItem.ProfitCenter                               as ProfitCenter,
      BankStmtItem.BankPostingDate                            as BankPostingDate,
      BankStmtItem.DebitCreditCode                            as DebitCreditCode,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BankStmtItem.AmountInAccountCurrency                    as AmountInAccountCurrency,
      BankStmtItem.TransactionCurrency                        as TransactionCurrency,
      @Semantics.amount.currencyCode: 'OriginalCurrency'
      BankStmtItem.ForeignCurrencyAmount                      as AmountInOriginalCurrency,
      BankStmtItem.OriginalCurrency                           as OriginalCurrency,
      BankStmtItem.PaymentExternalTransacType                 as PaymentExternalTransacType,
      BankStmtHeader.BankAccountHolderName                    as BankAccountHolderName,
      BankStmtHeader.IBAN                                     as IBAN

}
```
