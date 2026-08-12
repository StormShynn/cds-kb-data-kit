---
name: I_BUSVOLFLDCOMBNSET
description: "his CDS view exposes fixed values of the Business Volume Field Combination Set field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSET')/$value
semantic_en: "his CDS view exposes fixed values of the Business Volume Field Combination Set field."
semantic_vi: "Business Volume Field Combination Set — CDS view cơ bản dựa trên R_BusVolFldCombnSet."
keywords:
  - "business"
  - "volume"
  - "field"
  - "combination"
  - "set"
  - "combn"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLFLDCOMBNSET

**his CDS view exposes fixed values of the Business Volume Field Combination Set field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFldCombnSet` | ✓ | |  |  | `CHAR(4)` | Set of Field Combinations |
| `_BusVolFldCombnSetTypeAssgmt` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolFldCombnSetTypeAssgmt` | `I_BusVolFldCombnSetTypeAssgmt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSET')/$value)*

```abap
@EndUserText.label: 'Business Volume Field Combination Set'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFldCombnSet',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE ],
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
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IBUSVOLFLDCOSET'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define root view entity I_BusVolFldCombnSet
  as select from R_BusVolFldCombnSet

  composition [0..*] of I_BusVolFldCombnSetText       as _Text
  association [0..*] to I_BusVolFldCombnSetTypeAssgmt as _BusVolFldCombnSetTypeAssgmt on $projection.BusVolFldCombnSet = _BusVolFldCombnSetTypeAssgmt.BusVolFldCombnSet

{
      @ObjectModel.text.association: '_Text'
  key BusVolFldCombnSet,

      /* Associations */
      _Text,
      _BusVolFldCombnSetTypeAssgmt
}
```
