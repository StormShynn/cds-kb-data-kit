---
name: I_WORKCENTERHIERARCHYHEADERTXT
description: "Work Center Hierarchy Header - Text"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERARCHYHEADERTXT')/$value
semantic_en: "Work Center Hierarchy Header - Text"
semantic_vi: "Work Center Hierarchy Header - Text — CDS view giao diện dựa trên I_ProductionResourceText."
keywords:
  - "work"
  - "center"
  - "hierarchy"
  - "header"
  - "text"
  - "production"
  - "resource"
  - "type"
  - "internal"
  - "language"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
  - bo:material
---
# I_WORKCENTERHIERARCHYHEADERTXT

**Work Center Hierarchy Header - Text**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERARCHYHEADERTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionResourceType` | ✓ | |  |  | `CHAR(2)` | Production Resource Type |
| `ProductionResourceInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ProductionResourceText` |  | |  |  | `CHAR(40)` | Production Resource Text |
| `_ProductionResourceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionResourceType` | `I_ProductionResourceType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERARCHYHEADERTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERARCHYHEADERTXT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProductionResourceInternalID'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWCHIERHDRTXT'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Hierarchy Header - Text'
@Analytics: {
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic : true
       }
     },
internalName: #LOCAL
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.sapObjectNodeType.name: 'WorkCenterGroupText'
define view entity I_WorkCenterHierarchyHeaderTxt
  as select from I_ProductionResourceText as text
  association [1..1] to I_ProductionResourceType as _ProductionResourceType on $projection.ProductionResourceType = _ProductionResourceType.ProductionResourceType
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
  key ProductionResourceType,
  key ProductionResourceInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,

      // Text
      @Semantics.text: true
      ProductionResourceText,

      // Associations
      _ProductionResourceType,
      _Language
}
```
