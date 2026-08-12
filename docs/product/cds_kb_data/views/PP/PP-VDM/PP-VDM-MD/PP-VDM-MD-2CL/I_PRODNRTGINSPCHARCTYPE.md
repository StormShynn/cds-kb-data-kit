---
name: I_PRODNRTGINSPCHARCTYPE
description: "Insp Characteristic Type"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCTYPE')/$value
semantic_en: "Insp Characteristic Type"
semantic_vi: "Insp Characteristic Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "insp"
  - "characteristic"
  - "type"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNRTGINSPCHARCTYPE

**Insp Characteristic Type**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOOCharacteristicType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as qkzeinstmk preserving type)` | `CHAR(1)` | Characteristic Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdnRtgInspCharcTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCTYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'BOOCharacteristicType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #META }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION]
//@Search.searchable: true
@EndUserText.label: 'Insp Characteristic Type'
@Metadata.allowExtensions:true

define view entity I_ProdnRtgInspCharcType

 as select from dd07l as l
  association [0..*] to I_ProdnRtgInspCharcTypeText as _Text on $projection.BOOCharacteristicType = _Text.BOOCharacteristicType
{
//      @ObjectModel.text.association: '_Text'
  key cast(substring(l.domvalue_l, 1, 1) as qkzeinstmk preserving type) as BOOCharacteristicType,

      --- Associations ---
      _Text
}
where
      l.domname  = 'QKZEINSTMK'
  and l.as4local = 'A'
  and l.as4vers  = '0000';
```
