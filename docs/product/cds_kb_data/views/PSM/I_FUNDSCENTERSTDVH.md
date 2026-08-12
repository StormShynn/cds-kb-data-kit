---
name: I_FUNDSCENTERSTDVH
description: "Funds Center"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERSTDVH')/$value
semantic_en: "Funds Center"
semantic_vi: "Funds Center — CDS view giao diện dựa trên I_FundsCenter."
keywords:
  - "funds"
  - "center"
  - "financial"
  - "management"
  - "area"
  - "validity"
  - "date"
  - "fnds"
  - "mgmt"
  - "authzn"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDSCENTERSTDVH

**Funds Center**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` | ✓ | |  |  | `CHAR(16)` | Funds Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Funds Center Validity End Date |
| `FndsCenterFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Funds Center |
| `FundsCenterAuthznGrp` |  | |  |  | `CHAR(10)` | Funds Center Authorization Group |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funds Center Validity Start Date |
| `_FinMgmtArea` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyFV7jU}e25o35YSlG
@AbapCatalog.sqlViewName: 'IFC__VH2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FundsCenter'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]

@AccessControl.authorizationCheck: #CHECK
//@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Funds Center'
define view I_FundsCenterStdVH
  as select from I_FundsCenter
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' } }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key FinancialManagementArea,
//      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key FundsCenter,
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
  key ValidityEndDate,

      //_Text,
      @Consumption.hidden: true
      FndsCenterFinMgmtAreaForAuthzn,
      @Consumption.hidden: true

      FundsCenterAuthznGrp,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].FundsCenterName, 
       @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }   
      _Text[1:Language = $session.system_language].FundsCenterDescription,        
      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,

      @Consumption.hidden: true
      _FinMgmtArea
}
```
