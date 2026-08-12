---
name: I_BUSVOLFIELDCOMBNTYPETEXT
description: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
semantic_vi: "Business Volume Field Combn Type - Text — CDS view cơ bản dựa trên R_BusVolFieldCombnTypeText."
keywords:
  - "business"
  - "volume"
  - "field"
  - "combn"
  - "type"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLFIELDCOMBNTYPETEXT

**This CDS view exposes fixed values of the Business Volume Field Combination Type field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `BusVolFieldCombnType` | ✓ | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFieldCombnTypeDesc` |  | |  |  | `CHAR(40)` | Field Combination Description |
| `_BusVolFieldCombnType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolFieldCombnType` | `I_BusVolFieldCombnType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Business Volume Field Combn Type - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFieldCombnType',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE ],
  dataCategory: #TEXT,
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  } 
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL, 
  technicalName: 'IBUSVOLFLDCTYPET'
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BusVolFieldCombnTypeText
  as select from R_BusVolFieldCombnTypeText

  association [0..1] to I_BusVolFieldCombnType as _BusVolFieldCombnType on $projection.BusVolFieldCombnType = _BusVolFieldCombnType.BusVolFieldCombnType
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_BusVolFieldCombnType'
  key BusVolFieldCombnType,
      @Semantics.text: true
      BusVolFieldCombnTypeDesc,

      /* Associations */
      _BusVolFieldCombnType,
      _Language

}
```
