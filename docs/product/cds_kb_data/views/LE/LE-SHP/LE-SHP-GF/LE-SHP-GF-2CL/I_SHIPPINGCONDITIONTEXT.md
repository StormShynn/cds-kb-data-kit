---
name: I_SHIPPINGCONDITIONTEXT
description: "Shippingconditiontext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGCONDITIONTEXT

**Shippingconditiontext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingCondition` | ✓ | |  | `vsbed` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ShippingConditionName` |  | |  | `vtext` |  |  |
| `_ShippingCondition` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'ShippingConditionText'
@ObjectModel.representativeKey: 'ShippingCondition'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Shipping Condition - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILESHIPGCNDNTEXT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_ShippingConditionText
  as select from tvsbt
  association [0..1] to I_ShippingCondition as _ShippingCondition on $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ShippingCondition'
  key vsbed as ShippingCondition,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text
      vtext as ShippingConditionName,

      _ShippingCondition,
      _Language
};
```
