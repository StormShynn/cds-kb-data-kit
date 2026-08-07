---
name: I_SHIPPINGINSTRUCTION
description: "Shippinginstruction"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_SHIPPINGINSTRUCTION

**Shippinginstruction**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Shippinginstructiontext` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMSHIPINS'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'ShippingInstruction'
@ObjectModel.sapObjectNodeType.name:'PurchasingShippingInstruction'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Shipping Instruction'

define view I_ShippingInstruction
  as select from t027a

  association [0..1] to I_Shippinginstructiontext as _Text on  _Text.ShippingInstruction = $projection.ShippingInstruction
                                                              and _Text.Language            = $session.system_language
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key evers                                                               as ShippingInstruction,

      _Text
}
```
