---
name: I_FUNDTYPESTDVH
description: "Fund Type"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTYPESTDVH')/$value
semantic_en: "Fund Type"
semantic_vi: "Fund Type — CDS view giao diện dựa trên I_FundType."
keywords:
  - "fund"
  - "type"
  - "financial"
  - "management"
  - "area"
  - "grantee"
  - "mgmt"
  - "text"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDTYPESTDVH

**Fund Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` | ✓ | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `_FinMgmtArea` |  | |  |  |  |  |
| `_Text` |  | |  |  |  |  |
| `_GranteeMgmtFundType` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTYPESTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFUNDTYPESVH'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
//ATC: @AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fund Type'

@VDM.viewType: #COMPOSITE
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'FundType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

define view I_FundTypeStdVH
  as select from I_FundType as FT
{

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FT.FinancialManagementArea,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key FT.FundType,
      @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
      FT.GranteeMgmtFundType,

      FT._FinMgmtArea as _FinMgmtArea,
      FT._Text as _Text,
      FT._GranteeMgmtFundType as _GranteeMgmtFundType

}
```
