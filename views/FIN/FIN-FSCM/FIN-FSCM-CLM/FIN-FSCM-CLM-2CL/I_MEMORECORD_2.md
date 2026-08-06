---
name: I_MEMORECORD_2
description: Memorecord 2
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_MEMORECORD_2

**Memorecord 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MemoRecord` | `Memorecord.document_id` |
| `MemoRecordDescription` | `Memorecord.description` |
| `CompanyCode` | `Memorecord.company_code` |
| `MemoRecordCategory` | `Memorecord.category` |
| `MemoRecordType` | `Memorecord.planning_type` |
| `PlanningLevel` | `Memorecord.planning_level` |
| `MemoRecordBalanceDateDimension` | `Memorecord.date_dimension` |
| `TransactionDate` | `Memorecord.transaction_date` |
| `MemoRecordExpirationDateTime` | `Memorecord.expiration_datetime` |
| `MemoRecordStatus_2` | `Memorecord.status` |
| `MemoRecordStatus` | `Memorecord.status` |
| `BankAccountInternalID` | `Memorecord.acc_id` |
| `AmountInTransactionCurrency` | `Memorecord.amount_in_transaction_currency` |
| `TransactionCurrency` | `Memorecord.transaction_currency` |
| `AmountInCompanyCodeCurrency` | `Memorecord.amount_in_company_code_curr` |
| `CompanyCodeCurrency` | `Memorecord.company_code_currency` |
| `CashFlowReconciliationBundle` | `Memorecord.source_rcn_bndl` |
| `CashPlanningGroup` | `Memorecord.planning_group` |
| `LiquidityItem` | `Memorecord.liquidity_item` |
| `BankStatementShortID` | `Memorecord.kukey` |
| `BankStatementItem` | `Memorecord.esnum` |
| `ProfitCenter` | `Memorecord.profit_center` |
| `Fund` | `Memorecord.fund` |
| `GrantID` | `Memorecord.grant_nbr` |
| `BusinessArea` | `Memorecord.business_area` |
| `MemoRecordStatisticsIndicator` | `Memorecord.statistics_indicator` |
| `MemoRecordCharacteristic` | `Memorecord.characteristics` |
| `MemoRecordInternalReference` | `Memorecord.refer` |
| `BankStatementDate` | `Memorecord.azdat` |
| `MemoRecordChannel` | `Memorecord.channel` |
| `CreationDate` | `Memorecord.created_on` |
| `LastChangeDate` | `Memorecord.changed_on` |
| `CreatedByUser` | `Memorecord.created_by` |
| `LastChangeByUser` | `Memorecord.changed_by` |
| `CreationDateTime` | `Memorecord.created_at` |
| `LastChangeDateTime` | `Memorecord.changed_at` |
| `LocalLastChangeDateTime` | `Memorecord.local_changed_at` |
| `HouseBank` | `Memorecord.hbkid` |
| `HouseBankAccount` | `Memorecord.hktid` |
| `PostingDate` | `Memorecord.posting_date` |
| `GLAccount` | `Memorecord.gl_account` |
| `MemoRecordImport` | `Memorecord.memorecordimportid` |
| `MemoRecordIsLeadingDocument` | `Memorecord.is_leading_doc` |
| `MemoRecdOffsettingCompanyCode` | `Memorecord.offset_company_code` |
| `MemoRecordOffsettingHouseBank` | `Memorecord.offset_hbkid` |
| `MemoRecdOffstgHouseBankAccount` | `Memorecord.offset_hktid` |
| `MemoRecordPairingReason` | `Memorecord.pairing_reason` |
| `MemoRecdOffstgBkAcctInternalID` | `Memorecord.offset_acc_id` |
| `OffsettingMemoRecord` | `Memorecord.offset_doc_id` |
| `MemoRecdOffstgTransactionDate` | `Memorecord.offset_transaction_date` |
| `_CompanyCode` | *Association* |
| `_MemoRecordCategoryText` | *Association* |
| `_Currency` | *Association* |
| `_BankAccount` | *Association* |
| `_OffsetBankAccount` | *Association* |
| `_OffsetCompanyCode` | *Association* |
| `_MemoRecordStatusText` | *Association* |
| `_MemoRecordTypeText` | *Association* |
| `_PlanningLevelText` | *Association* |
| `_CashPlanningGroupText` | *Association* |
| `_LiquidityItemText` | *Association* |
| `_GLAccountInCompanyCode` | *Association* |
| `_GrantText` | *Association* |
| `_BalDteDimnText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_StatisticalItemText` | *Association* |
| `_BankAccountText` | *Association* |
| `_OffstgBankAccountText` | *Association* |
| `_GLAccountTextInCompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MemoRecordCategoryText` | `I_MemoRecordCategoryText` | [0..*] |
| `_Currency` | `I_Currency` | [0..1] |
| `_BankAccount` | `I_BankAccount` | [0..1] |
| `_OffsetBankAccount` | `I_BankAccount` | [0..1] |
| `_OffsetCompanyCode` | `I_CompanyCode` | [0..1] |
| `_MemoRecordStatusText` | `I_MemoRecordStatusText_2` | [0..*] |
| `_MemoRecordTypeText` | `I_MemoRecordTypeText` | [0..*] |
| `_PlanningLevelText` | `I_PlanningLevelText` | [0..*] |
| `_CashPlanningGroupText` | `I_CashPlanningGroupText` | [0..*] |
| `_LiquidityItemText` | `I_LiquidityItemText` | [0..*] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_GrantText` | `I_GrantText` | [0..*] |
| `_BalDteDimnText` | `I_MemoRecordBalDteDimnText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_StatisticalItemText` | `I_StatisticalItemText` | [0..*] |
| `_BankAccountText` | `I_BankAccountText` | [0..*] |
| `_OffstgBankAccountText` | `I_BankAccountText` | [0..*] |
| `_GLAccountTextInCompanyCode` | `I_GlAccountTextInCompanycode` | [0..*] |
| `_Extension` | `E_MemoRecord` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@EndUserText.label: 'Memo Record'
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_Extension'],
  elementSuffix: 'MMS',
  quota: {
    maximumFields: 350, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 10000 //Set to maximum allowed bytes
  }
}


define view entity I_MemoRecord_2
  as select from fclm_mmrd as Memorecord
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = Memorecord.company_code
  association [0..*] to I_MemoRecordCategoryText     as _MemoRecordCategoryText     on  $projection.MemoRecordCategory = _MemoRecordCategoryText.MemoRecordCategory
  association [0..1] to I_Currency                   as _Currency                   on  $projection.TransactionCurrency = _Currency.Currency
  association [0..1] to I_BankAccount                as _BankAccount                on  $projection.BankAccountInternalID = _BankAccount.BankAccountInternalID
  association [0..1] to I_BankAccount                as _OffsetBankAccount          on  $projection.MemoRecdOffstgBkAcctInternalID = _OffsetBankAccount.BankAccountInternalID
  association [0..1] to I_CompanyCode                as _OffsetCompanyCode          on  $projection.MemoRecdOffsettingCompanyCode = _OffsetCompanyCode.CompanyCode
  association [0..*] to I_MemoRecordStatusText_2     as _MemoRecordStatusText       on  $projection.MemoRecordStatus_2 = _MemoRecordStatusText.MemoRecordStatus_2
  association [0..*] to I_MemoRecordTypeText         as _MemoRecordTypeText         on  $projection.MemoRecordType = _MemoRecordTypeText.MemoRecordType
  association [0..*] to I_PlanningLevelText          as _PlanningLevelText          on  $projection.PlanningLevel = _PlanningLevelText.PlanningLevel
  association [0..*] to I_CashPlanningGroupText      as _CashPlanningGroupText      on  $projection.CashPlanningGroup = _CashPlanningGroupText.CashPlanningGroup
  association [0..*] to I_LiquidityItemText          as _LiquidityItemText          on  $projection.LiquidityItem = _LiquidityItemText.LiquidityItem
  association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode     on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                    and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..*] to I_GrantText                  as _GrantText                  on  $projection.GrantID = _GrantText.GrantID
  association [0..*] to I_MemoRecordBalDteDimnText   as _BalDteDimnText             on  $projection.MemoRecordBalanceDateDimension = _BalDteDimnText.MemoRecordBalanceDateDimension
  association [0..*] to I_BusinessAreaText           as _BusinessAreaText           on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_StatisticalItemText        as _StatisticalItemText        on  $projection.MemoRecordStatisticsIndicator = _StatisticalItemText.MemoRecordStatisticItem
  association [0..*] to I_BankAccountText            as _BankAccountText            on  $projection.BankAccountInternalID = _BankAccountText.BankAccountInternalID
  association [0..*] to I_BankAccountText            as _OffstgBankAccountText      on  $projection.MemoRecdOffstgBkAcctInternalID = _OffstgBankAccountText.BankAccountInternalID
  association [0..*] to I_GlAccountTextInCompanycode as _GLAccountTextInCompanyCode on  $projection.CompanyCode = _GLAccountTextInCompanyCode.CompanyCode
                                                                                    and $projection.GLAccount   = _GLAccountTextInCompanyCode.GLAccount
  association [1..1] to E_MemoRecord                 as _Extension                  on  $projection.MemoRecord = _Extension.MemoRecord
{
  key Memorecord.document_id                    as MemoRecord,
      Memorecord.description                    as MemoRecordDescription,
      Memorecord.company_code                   as CompanyCode,
      Memorecord.category                       as MemoRecordCategory,
      Memorecord.planning_type                  as MemoRecordType,
      Memorecord.planning_level                 as PlanningLevel,
      Memorecord.date_dimension                 as MemoRecordBalanceDateDimension,
      Memorecord.transaction_date               as TransactionDate,
      Memorecord.expiration_datetime            as MemoRecordExpirationDateTime,
      Memorecord.status                         as MemoRecordStatus_2,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'MemoRecordStatus_2'
      Memorecord.status                         as MemoRecordStatus,
      Memorecord.acc_id                         as BankAccountInternalID,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Memorecord.amount_in_transaction_currency as AmountInTransactionCurrency,
      Memorecord.transaction_currency           as TransactionCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      Memorecord.amount_in_company_code_curr    as AmountInCompanyCodeCurrency,
      Memorecord.company_code_currency          as CompanyCodeCurrency,
      Memorecord.source_rcn_bndl                as CashFlowReconciliationBundle,
      //      Memorecord.expiration_date                as ExpirationDate,
      Memorecord.planning_group                 as CashPlanningGroup,
      Memorecord.liquidity_item                 as LiquidityItem,
      Memorecord.kukey                          as BankStatementShortID,
      Memorecord.esnum                          as BankStatementItem,
      Memorecord.profit_center                  as ProfitCenter,
      Memorecord.fund                           as Fund,
      Memorecord.grant_nbr                      as GrantID,
      Memorecord.business_area                  as BusinessArea,
      Memorecord.statistics_indicator           as MemoRecordStatisticsIndicator,
      Memorecord.characteristics                as MemoRecordCharacteristic,
      Memorecord.refer                          as MemoRecordInternalReference,
      Memorecord.azdat                          as BankStatementDate,
      Memorecord.channel                        as MemoRecordChannel,
      Memorecord.created_on                     as CreationDate,
      Memorecord.changed_on                     as LastChangeDate,
      Memorecord.created_by                     as CreatedByUser,
      Memorecord.changed_by                     as LastChangeByUser,
      Memorecord.created_at                     as CreationDateTime,
      Memorecord.changed_at                     as LastChangeDateTime,
      Memorecord.local_changed_at               as LocalLastChangeDateTime,
      Memorecord.hbkid                          as HouseBank,
      Memorecord.hktid                          as HouseBankAccount,
      Memorecord.posting_date                   as PostingDate,
      Memorecord.gl_account                     as GLAccount,
      Memorecord.memorecordimportid             as MemoRecordImport,
      Memorecord.is_leading_doc                 as MemoRecordIsLeadingDocument,
      Memorecord.offset_company_code            as MemoRecdOffsettingCompanyCode,
      Memorecord.offset_hbkid                   as MemoRecordOffsettingHouseBank,
      Memorecord.offset_hktid                   as MemoRecdOffstgHouseBankAccount,
      Memorecord.pairing_reason                 as MemoRecordPairingReason,
      Memorecord.offset_acc_id                  as MemoRecdOffstgBkAcctInternalID,
      Memorecord.offset_doc_id                  as OffsettingMemoRecord,
      Memorecord.offset_transaction_date        as MemoRecdOffstgTransactionDate,

      _Currency,
      _CompanyCode,
      _BankAccount,
      _OffsetBankAccount,
      _OffsetCompanyCode,
      _GLAccountInCompanyCode,
      _MemoRecordStatusText,
      _MemoRecordCategoryText,
      _MemoRecordTypeText,
      _PlanningLevelText,
      _CashPlanningGroupText,
      _LiquidityItemText,
      _BalDteDimnText,
      _GrantText,
      _BusinessAreaText,
      _StatisticalItemText,
      _BankAccountText,
      _OffstgBankAccountText,
      _GLAccountTextInCompanyCode

}
```
