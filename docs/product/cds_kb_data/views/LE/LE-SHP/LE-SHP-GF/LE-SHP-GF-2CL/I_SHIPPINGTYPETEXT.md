---
name: I_SHIPPINGTYPETEXT
description: "Shippingtypetext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGTYPETEXT

**Shippingtypetext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingType` | ✓ | |  | `vsart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ShippingTypeName` |  | |  | `bezei` |  |  |
| `_ShippingType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShippingType` | `I_ShippingType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'ShippingTypeText'
@ObjectModel.representativeKey: 'ShippingType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Shipping Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILESHIPPINGTYPET'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_ShippingTypeText
as
select from t173t
association [0..1] to I_ShippingType as _ShippingType on $projection.ShippingType = _ShippingType.ShippingType
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ShippingType'
    key vsart as ShippingType,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Semantics.text
    @Search.fuzzinessThreshold: 0.8
    @Search.defaultSearchElement: true
    bezei as ShippingTypeName,

    _ShippingType,
    _Language
};
```
