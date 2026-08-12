---
name: I_FREEDFNDTABLEFIELDSEMANTIC
description: "Free Defined Table Field Semantic"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTABLEFIELDSEMANTIC')/$value
semantic_en: "Free Defined Table Field Semantic"
semantic_vi: "Free Defined Table Field Semantic — CDS view giao diện dựa trên tcn00."
keywords:
  - "free"
  - "defined"
  - "table"
  - "field"
  - "semantic"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_FREEDFNDTABLEFIELDSEMANTIC

**Free Defined Table Field Semantic**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTABLEFIELDSEMANTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreeDefinedTableFieldSemantic` | ✓ | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FreeDfndTblFieldSemanticText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTABLEFIELDSEMANTIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTABLEFIELDSEMANTIC')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IFREDEFTABFLDSEM'
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FreeDefinedTableFieldSemantic'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Free Defined Table Field Semantic'
@ObjectModel.sapObjectNodeType.name: 'BOOFreeDfndTblFieldSem'
@Analytics.dataExtraction.enabled: true

//define view I_FreeDfndTableFieldSemantic
define view entity I_FreeDfndTableFieldSemantic
  as select from tcn00

  association [0..*] to I_FreeDfndTblFieldSemanticText as _Text on $projection.FreeDefinedTableFieldSemantic = _Text.FreeDefinedTableFieldSemantic
{
      @ObjectModel.text.association: '_Text'
  key slwid        as FreeDefinedTableFieldSemantic,

      //      par04,
      //      par05,
      //      berob,

      --- Associations ---
      _Text
};
```
