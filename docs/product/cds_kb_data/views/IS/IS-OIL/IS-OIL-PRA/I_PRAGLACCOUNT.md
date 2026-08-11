---
name: I_PRAGLACCOUNT
description: "PRA GL Account"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNT')/$value
semantic_en: "PRA GL Account"
semantic_vi: "PRA GL Account — CDS view giao diện dựa trên P_PRAGLChartOfAccounts."
keywords:
  - "pra"
  - "account"
  - "company"
  - "code"
  - "chart"
  - "accounts"
  - "type"
  - "status"
  - "active"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAGLACCOUNT

**PRA GL Account**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account Number |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `StatusIsActive` |  | |  |  | `CHAR(1)` | Active Indicator |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_StatusIsActive` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountType` | `I_PRAGLAccountType` | [0..1] |
| `_Text` | `I_PRAGLAccountText` | [0..*] |
| `_StatusIsActive` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNT')/$value)*

```abap
@EndUserText.label: 'PRA GL Account'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRAGLACCOUNT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'GLAccount'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAGenLdgrAcct'
// This view is a projection of the private PRA COA view, with addiitonal annotations to support rep key for GL Account text
// Redundancies are necessary, as we need a PRA COA view without text lookup, as text requires an additional join
// and this creates innefficiencies in many views where we have to expose only the account type for authorization checks
// The view is categorized as basic as it is needed for associations in other basic views

define view I_PRAGLAccount
  as select from P_PRAGLChartOfAccounts

  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_PRAGLAccountType           as _GLAccountType              on  $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..*] to I_PRAGLAccountText           as _Text                       on  $projection.CompanyCode = _Text.CompanyCode
                                                                                    and $projection.GLAccount   = _Text.GLAccount
  association [0..1] to I_Indicator                  as _StatusIsActive             on  $projection.StatusIsActive = _StatusIsActive.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.text.association: '_Text'
  key GLAccount,
      _CompanyCode.ChartOfAccounts as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      @ObjectModel.foreignKey.association: '_StatusIsActive'
      StatusIsActive,
      _CompanyCode,
      _GLAccountInChartOfAccounts,
      _GLAccountType,
      _StatusIsActive,
      _Text
}
```
