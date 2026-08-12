---
name: I_SPONSOREDCLASSSTDVH
description: "Sponsored Class"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSSTDVH')/$value
semantic_en: "Sponsored Class"
semantic_vi: "Sponsored Class — CDS view giao diện (master data) dựa trên I_SponsoredClassCore."
keywords:
  - "sponsored"
  - "class"
  - "name"
  - "description"
  - "type"
  - "billable"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDCLASSSTDVH

**Sponsored Class**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredClassName` |  | |  | `_Text[1:Language = $session.system_language].SponsoredClassName` | `CHAR(20)` | Sponsored Class Name |
| `SponsoredClassDescription` |  | |  | `_Text[1:Language = $session.system_language].SponsoredClassDescription` | `CHAR(30)` | Sponsored Class Description |
| `SponsoredClassType` |  | |  |  | `CHAR(1)` | Sponsored Class Type |
| `SponsoredClassIsBillable` |  | |  |  | `CHAR(1)` | Billable |
| `GteeMBdgtAcctForSpnsrdCl` |  | |  |  | `CHAR(10)` | Account for Budget |
| `SponsoredClassAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISPCL_VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Sponsored Class'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel:  {
  usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #S
    },
  representativeKey: 'SponsoredClass',
dataCategory: #VALUE_HELP,
supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
modelingPattern: #VALUE_HELP_PROVIDER
}
define view I_SponsoredClassStdVH
  as select from I_SponsoredClassCore
{

      // changes to include default search help
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      //      @ObjectModel.text.association: '_Text'
      //      @ObjectModel.text.control:#ASSOCIATED_TEXT_UI_HIDDEN
      @ObjectModel.text.element: ['SponsoredClassName']
  key SponsoredClass,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @Semantics.text: true
      _Text[1:Language = $session.system_language].SponsoredClassName        as SponsoredClassName,
      _Text[1:Language = $session.system_language].SponsoredClassDescription as SponsoredClassDescription,
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
      SponsoredClassType,
      SponsoredClassIsBillable,
      GteeMBdgtAcctForSpnsrdCl,
      _Text,
      @Consumption.hidden: true
      SponsoredClassAuthznGrp
}
```
