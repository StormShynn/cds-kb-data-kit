---
name: I_LEDGERCOCODE
description: "Company Code Settings for Ledger"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value
semantic_en: "Company Code Settings for Ledger"
semantic_vi: "Company Code Settings for Ledger — CDS view giao diện dựa trên I_LedgerCompanyCodeCrcyRoles."
keywords:
  - "company"
  - "code"
  - "settings"
  - "for"
  - "ledger"
  - "name"
  - "controlling"
  - "area"
  - "chart"
  - "accounts"
tags:
  - FI
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_LEDGERCOCODE

**Company Code Settings for Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CityName` |  | | `_CompanyCode` | `CityName` | `CHAR(25)` | City |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Company Code Settings for Ledger'
@VDM.viewType: #COMPOSITE

@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #B,
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_LedgerCoCode as select from I_LedgerCompanyCodeCrcyRoles as I_LedgerCompanyCodeCrcyRoles
  
association [1..1] to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
association [1..1] to I_Ledger                       as _Ledger                        on  $projection.Ledger = _Ledger.Ledger
association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.chartofaccounts = _ChartOfAccounts.ChartOfAccounts
association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.controllingarea = _ControllingArea.ControllingArea
association [1..1] to I_FiscalYearVariant            as _FiscalYearVariant             on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [1..1] to I_Currency                     as _CompanyCodeCurrency           on  $projection.currency = _CompanyCodeCurrency.Currency

{
key I_LedgerCompanyCodeCrcyRoles.Ledger,
@ObjectModel.text.element: ['CompanyCodeName']
key I_LedgerCompanyCodeCrcyRoles.CompanyCode,
@Semantics.text
_CompanyCode.CompanyCodeName,
_CompanyCode.ControllingArea,
_CompanyCode.ChartOfAccounts,
_CompanyCode.CityName,
_CompanyCode.Currency,
I_LedgerCompanyCodeCrcyRoles.FiscalYearVariant,

_CompanyCode,
_Ledger,
_ChartOfAccounts,
_ControllingArea,
_FiscalYearVariant,
_CompanyCodeCurrency

}
```
