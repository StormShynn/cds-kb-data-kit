---
name: I_APPLICATIONOFFUNDTEXT
description: "Application of Fund - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUNDTEXT')/$value
semantic_en: "Application of Fund - Text"
semantic_vi: "Application of Fund - Text — CDS view giao diện dựa trên fmfuset."
keywords:
  - "application"
  - "fund"
  - "text"
  - "financial"
  - "management"
  - "area"
  - "funds"
  - "language"
  - "name"
  - "description"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_APPLICATIONOFFUNDTEXT

**Application of Fund - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUNDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `ApplicationOfFunds` | ✓ | |  | `finuse` | `CHAR(16)` | Application of Funds |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ApplicationOfFundsName` |  | |  | `cast( bezeich as fmis_apploffunds_name )` | `CHAR(20)` | Application of Funds Name |
| `ApplicationOfFundsDescription` |  | |  | `cast( beschr as fmis_apploffunds_description )` | `CHAR(40)` | Application of Funds Description |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUNDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUNDTEXT')/$value)*

```abap
@EndUserText.label: 'Application of Fund - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'ApplicationOfFunds'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IAPPLOFFUNDT'
define view I_ApplicationOfFundText
  as select from fmfuset
  association [1..1] to I_FinancialManagementArea as _FinMgmtArea on $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  association [0..1] to I_Language                as _Language    on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key fikrs                                                     as FinancialManagementArea,
  key finuse                                                    as ApplicationOfFunds,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                     as Language,
      @Semantics.text: true
      cast( bezeich as fmis_apploffunds_name )                  as ApplicationOfFundsName,
      @Semantics.text: true
      cast( beschr as fmis_apploffunds_description )            as ApplicationOfFundsDescription,

      _FinMgmtArea,
      _Language

}
```
