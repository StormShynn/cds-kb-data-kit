---
name: I_CN_BANKRECEIPT
description: "CN Bankreceipt"
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `HouseBank` | ✓ | |  |  |  |  |
| `HouseBankAccount` | ✓ | |  |  |  |  |
| `BankReceiptNumber` | ✓ | |  | `ebr_no` |  |  |
| `BankReceiptStatus` |  | |  | `status` |  |  |
| `BankReceiptEnterDate` |  | |  | `ebr_date` |  |  |
| `BankReceiptSource` |  | |  | `source` |  |  |
| `BankReceiptUsageText` |  | |  | `ebr_use` |  |  |
| `BankReceiptSummaryText` |  | |  | `summary` |  |  |
| `BankReceiptSerialNumber` |  | |  | `srl_no` |  |  |
| `BankReceiptBankDateTime` |  | |  | `bank_timestamp` |  |  |
| `BankReceiptBankBranchText` |  | |  | `bank_branch` |  |  |
| `BankReceiptBankTellerText` |  | |  | `bank_teller` |  |  |
| `BankReceiptBankRemarkText` |  | |  | `bank_remark` |  |  |
| `CN_BankReceiptIsFoundInDoc` |  | |  | `fdflg` |  |  |
| `BankReceiptIsReversal` |  | |  | `xreversal` |  |  |
| `BankReceiptReferenceText` |  | |  | `reference` |  |  |
| `ClsgBalAmtInBkAcctCrcy` |  | |  | `balance` |  |  |
| `BankReceiptTransTime` |  | |  | `bank_time` |  |  |
| `BankCountry` |  | |  | `part_bank_ctry` |  |  |
| `BankInternalID` |  | |  | `part_bank_key` |  |  |
| `BankName` |  | |  | `part_bank_name` |  |  |
| `BusinessPartnerName` |  | |  |  |  |  |
| `PartnerBankIBAN` |  | |  |  |  |  |
| `ExchangeRate` |  | |  | `cast ( BankStmtItem.ExchangeRate as fis_exchange_rate )` |  |  |
| `PaymentAdviceAccountType` |  | |  |  |  |  |
| `PaymentAdviceAccount` |  | |  |  |  |  |
| `BankStatementPostingRule` |  | |  | `PostingRule` |  |  |
| `SubledgerDocument` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BankPostingDate` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `AmountInAccountCurrency` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInOriginalCurrency` |  | |  | `ForeignCurrencyAmount` |  |  |
| `OriginalCurrency` |  | |  |  |  |  |
| `PaymentExternalTransacType` |  | |  |  |  |  |
| `BankAccountHolderName` |  | |  |  |  |  |
| `IBAN` |  | |  |  |  |  |

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
