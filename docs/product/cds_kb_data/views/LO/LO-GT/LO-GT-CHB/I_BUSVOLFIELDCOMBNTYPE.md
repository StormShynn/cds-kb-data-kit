---
name: I_BUSVOLFIELDCOMBNTYPE
description: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPE')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
semantic_vi: "Business Volume Field Combination Type — CDS view cơ bản dựa trên R_BusVolFieldCombnType."
keywords:
  - "business"
  - "volume"
  - "field"
  - "combination"
  - "type"
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
# I_BUSVOLFIELDCOMBNTYPE

**This CDS view exposes fixed values of the Business Volume Field Combination Type field.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFieldCombnType` | ✓ | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `_Text` | | ✓ | | | | |
| `_BusVolFldCombnTypeFldAssgmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusVolFieldCombnTypeText` | [0..*] |
| `_BusVolFldCombnTypeFldAssgmt` | `I_BusVolFldCombnTypeFldAssgmt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPE')/$value)*

```abap
@EndUserText.label: 'Business Volume Field Combination Type'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFieldCombnType',
  sapObjectNodeType.name: 'BusVolumeFieldCombinationType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE],
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
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IBUSVOLFLDCTYPE'
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BusVolFieldCombnType
  as select from R_BusVolFieldCombnType

  association [0..*] to I_BusVolFieldCombnTypeText    as _Text                        on $projection.BusVolFieldCombnType = _Text.BusVolFieldCombnType
  association [0..*] to I_BusVolFldCombnTypeFldAssgmt as _BusVolFldCombnTypeFldAssgmt on $projection.BusVolFieldCombnType = _BusVolFldCombnTypeFldAssgmt.BusVolFieldCombnType

{

      @ObjectModel.text.association: '_Text'
  key BusVolFieldCombnType,

      /* Associations */
      _Text,
      _BusVolFldCombnTypeFldAssgmt

}
```
