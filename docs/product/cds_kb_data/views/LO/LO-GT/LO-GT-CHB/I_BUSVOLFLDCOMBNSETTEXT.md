---
name: I_BUSVOLFLDCOMBNSETTEXT
description: "his CDS view exposes fixed values of the Business Volume Field Combination Set field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTEXT')/$value
semantic_en: "his CDS view exposes fixed values of the Business Volume Field Combination Set field."
semantic_vi: "Bus Volume Field Combination Set - Text — CDS view cơ bản dựa trên R_BusVolFldCombnSetText."
keywords:
  - "bus"
  - "volume"
  - "field"
  - "combination"
  - "set"
  - "text"
  - "language"
  - "combn"
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
# I_BUSVOLFLDCOMBNSETTEXT

**his CDS view exposes fixed values of the Business Volume Field Combination Set field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `BusVolFldCombnSet` | ✓ | |  |  | `CHAR(4)` | Set of Field Combinations |
| `BusVolFldCombnSetDesc` |  | |  |  | `CHAR(40)` | Description for Set of Field Combinations |
| `_Language` | | ✓ | | | | |
| `_BusVolFldCombnSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTEXT')/$value)*

```abap
@EndUserText.label: 'Bus Volume Field Combination Set - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFldCombnSet',
  dataCategory: #TEXT,
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  } 
}
@VDM: {
  viewType: #BASIC, //Planned to Change to #COMPOSITE
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IBUSFLDCMBNSETT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_BusVolFldCombnSetText
  as select from R_BusVolFldCombnSetText

  association        to parent I_BusVolFldCombnSet as _BusVolFldCombnSet on $projection.BusVolFldCombnSet = _BusVolFldCombnSet.BusVolFldCombnSet
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_BusVolFldCombnSet'
  key BusVolFldCombnSet,
      @Semantics.text: true
      BusVolFldCombnSetDesc,

      /* Associations */
      _BusVolFldCombnSet,
      _Language
}
```
