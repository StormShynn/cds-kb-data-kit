---
name: I_PRAGLACCOUNTTEXT
description: "PRA General Ledger Account - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value
semantic_en: "PRA General Ledger Account - Text"
semantic_vi: "PRA General Ledger Account - Text — CDS view giao diện dựa trên I_GLAccountText."
keywords:
  - "pra"
  - "general"
  - "ledger"
  - "account"
  - "text"
  - "company"
  - "code"
  - "language"
  - "chart"
  - "accounts"
  - "name"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAGLACCOUNTTEXT

**PRA General Ledger Account - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account Number |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value)*

```abap
@EndUserText.label: 'PRA General Ledger Account - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRAGLACCOUNTT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'GLAccount'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

// PRA GL Account references do not use COA, rather it is derived from company
// therefore we create this view to expose the text based on a key component of company code

define view I_PRAGLAccountText
  as select from I_GLAccountText
    inner join   I_CompanyCode on I_CompanyCode.ChartOfAccounts = I_GLAccountText.ChartOfAccounts

  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_CompanyCode.CompanyCode     as CompanyCode,
  key GLAccount,
      @Semantics.language: true
  key I_GLAccountText.Language      as Language,
      I_CompanyCode.ChartOfAccounts as ChartOfAccounts,
      @Semantics.text: true
      GLAccountName,
      @Semantics.text: true
      GLAccountLongName,
      _CompanyCode,
      _GLAccountInChartOfAccounts
};
```
