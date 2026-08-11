---
name: I_SCALESGROUPTEXT
description: "Scales Group - Text"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCALESGROUPTEXT')/$value
semantic_en: "Scales Group - Text"
semantic_vi: "Scales Group - Text — CDS view giao diện dựa trên twwagt."
keywords:
  - "scales"
  - "group"
  - "text"
  - "language"
  - "name"
tags:
  - LO
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SCALESGROUPTEXT

**Scales Group - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCALESGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ScalesGroup` | ✓ | |  | `cast( scagr as scalesgroup preserving type )` | `CHAR(4)` | Scales group |
| `ScalesGroupName` |  | |  | `bezei20` | `CHAR(20)` | Description |
| `_Language` | | ✓ | | | | |
| `_ScalesGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCALESGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCALESGROUPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISCALESGROUPT'
@EndUserText.label: 'Scales Group - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'ScalesGroup',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ScalesGroupText
  as select from twwagt
  association [0..1] to I_Language           as _Language    on $projection.Language = _Language.Language
  association        to parent I_ScalesGroup as _ScalesGroup on $projection.ScalesGroup = _ScalesGroup.ScalesGroup
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_ScalesGroup'
      @ObjectModel.text.element: ['ScalesGroupName']
  key cast( scagr as scalesgroup preserving type ) as ScalesGroup,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      bezei20 as ScalesGroupName,

      _ScalesGroup,
      _Language
}
```
