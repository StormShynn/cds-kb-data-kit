---
name: I_FNDSMGMTFUNCNLAREASTDVH
description: "Funds Management Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FNDSMGMTFUNCNLAREASTDVH')/$value
semantic_en: "Funds Management Functional Area"
semantic_vi: "Funds Management Functional Area — CDS view giao diện dựa trên I_FundsMgmtFunctionalArea."
keywords:
  - "funds"
  - "management"
  - "functional"
  - "area"
  - "name"
  - "authzn"
  - "validity"
  - "date"
  - "start"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FNDSMGMTFUNCNLAREASTDVH

**Funds Management Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FNDSMGMTFUNCNLAREASTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalArea` | ✓ | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  | `_Text[1:Language = $session.system_language].FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `FunctionalAreaAuthznGrp` |  | |  |  | `CHAR(10)` | FM: Authorization Group of Functional Area |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Functional Area Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Functional Area Validity Start Date |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FNDSMGMTFUNCNLAREASTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FNDSMGMTFUNCNLAREASTDVH')/$value)*

```abap
//GENERATED:004:ZDpKg0Ke7kU}e3DN9xcGnG
@AbapCatalog.sqlViewName: 'IFMFA__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FunctionalArea'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Funds Management Functional Area'
@Search.searchable: true
@Consumption.ranked: true
define view I_FndsMgmtFuncnlAreaStdVH
  as select from I_FundsMgmtFunctionalArea
{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold : 0.8
  key FunctionalArea,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].FunctionalAreaName as FunctionalAreaName,
      @Consumption.hidden: true
      FunctionalAreaAuthznGrp,
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,
      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,

      _Text
}
where
  (
         ValidityStartDate                          is not initial
    and  ValidityEndDate                            is not initial
  )
  or(
         ValidityStartDate                          is initial
    and  ValidityEndDate                            is initial
    and(
         _BusinessFeatureState.BusinessFeatureState is initial
      or _BusinessFeatureState.BusinessFeatureState is null
    )
  )
```
