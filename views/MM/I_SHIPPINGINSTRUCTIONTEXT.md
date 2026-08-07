---
name: I_SHIPPINGINSTRUCTIONTEXT
description: Shippinginstructiontext
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_SHIPPINGINSTRUCTIONTEXT

**Shippinginstructiontext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingInstruction` | ✓ | |  | `evers` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ShippingInstructionName` |  | |  | `evtxt` |  |  |
| `_ShippingInstruction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShippingInstruction` | `I_ShippingInstruction` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMSHIPINST'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ShippingInstruction'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
//@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Shipping Instruction - Text'

define view I_Shippinginstructiontext
  as select from t027b
  association [1..1] to I_ShippingInstruction as _ShippingInstruction on _ShippingInstruction.ShippingInstruction = $projection.ShippingInstruction
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: ['ShippingInstructionName']
  key evers as ShippingInstruction,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      evtxt as ShippingInstructionName,
      _ShippingInstruction,
      _Language


}
```
