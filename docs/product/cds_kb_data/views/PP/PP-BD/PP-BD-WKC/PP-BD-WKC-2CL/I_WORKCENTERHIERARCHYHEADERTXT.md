---
name: I_WORKCENTERHIERARCHYHEADERTXT
description: "Work Center Hierarchy Header - Text"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
