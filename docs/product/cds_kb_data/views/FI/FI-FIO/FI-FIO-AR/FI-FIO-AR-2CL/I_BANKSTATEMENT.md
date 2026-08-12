---
name: I_BANKSTATEMENT
description: "Bankstatement"
app_component: FI-FIO-AR-2CL
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
  - interface-view
  - bank
  - component:FI-FIO-AR-2CL
  - lob:Finance
  - bo:Bank
---
# I_BANKSTATEMENT

**Bankstatement**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
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
| `BankStatementShortID` | ✓ | |  | `StatementShortID` |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  | `cast ( HouseBankAccount as farp_hktid)` |  |  |
| `BankStatement` |  | |  | `cast ( StatementNumber as farp_aznum )` |  |  |
| `BankStatementDate` |  | |  | `cast ( StatementDate as farp_azdat )` |  |  |
| `BankStatementStatus` |  | |  | `StatementStatus` |  |  |
| `BankStatementPageNumber` |  | |  | `StatementPageNumber` |  |  |
| `Currency` |  | |  |  |  |  |
| `OpeningBalanceIsInterim` |  | |  | `cast ( OpeningBalanceIsInterim as farp_opening_bal_interim_ind )` |  |  |
| `ClosingBalanceIsInterim` |  | |  | `cast ( ClosingBalanceIsInterim as farp_closing_bal_interim_ind )` |  |  |
| `OpeningBalanceAmtInTransCrcy` |  | |  |  |  |  |
| `ClosingBalanceAmtInTransCrcy` |  | |  |  |  |  |
| `InterimOpenBalAmtInTransCrcy` |  | |  |  |  |  |
| `InterimClsgBalAmtInTransCrcy` |  | |  |  |  |  |
| `PaymentTransactionTypeGroup` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `BankStatementIsManuallyCreated` |  | |  | `cast ( IsManuallyCreated as farp_bsmanuallycreated )` |  |  |
| `BankStatementFormat` |  | |  | `cast ( StatementInputFormat as farp_input_format )` |  |  |
| `BankStatementImportDate` |  | |  | `cast ( BankStatementImportDate as farp_edate )` |  |  |
| `BankStatementImportTime` |  | |  | `cast ( BankStatementImportTime as farp_etime )` |  |  |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED //only company data
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Header of a bank statement'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'
define view entity I_BankStatement
  as select from P_Arbanktransactiondoc

  association [0..1] to I_Currency as _Currency on _Currency.Currency = $projection.Currency
{
  key StatementShortID                                                 as BankStatementShortID,

      CompanyCode,
      HouseBank,
      cast ( HouseBankAccount as farp_hktid)                           as HouseBankAccount,
      cast ( StatementNumber as farp_aznum )                           as BankStatement,
      cast ( StatementDate as farp_azdat )                             as BankStatementDate,
      StatementStatus                                                  as BankStatementStatus,
      StatementPageNumber                                              as BankStatementPageNumber,

//      @Semantics.currencyCode: true

      Currency,

      @Semantics.booleanIndicator 
      cast ( OpeningBalanceIsInterim as farp_opening_bal_interim_ind ) as OpeningBalanceIsInterim,
      @Semantics.booleanIndicator 
      cast ( ClosingBalanceIsInterim as farp_closing_bal_interim_ind ) as ClosingBalanceIsInterim,

      @Semantics.amount.currencyCode: 'Currency'
      OpeningBalanceAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      ClosingBalanceAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      InterimOpenBalAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      InterimClsgBalAmtInTransCrcy,

      PaymentTransactionTypeGroup,
      CreatedByUser,
      @Semantics.booleanIndicator
      cast ( IsManuallyCreated   as farp_bsmanuallycreated )           as BankStatementIsManuallyCreated,
      cast ( StatementInputFormat as farp_input_format )               as BankStatementFormat,
      cast ( BankStatementImportDate as farp_edate )                   as BankStatementImportDate,
      cast ( BankStatementImportTime as farp_etime )                   as BankStatementImportTime,

      _Currency
}
where
     BankDataStorageApplication = '0001'
  or BankDataStorageApplication = '0004'
```
