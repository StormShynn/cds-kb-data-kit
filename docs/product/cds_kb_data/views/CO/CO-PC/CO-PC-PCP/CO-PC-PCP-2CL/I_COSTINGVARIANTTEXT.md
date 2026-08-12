---
name: I_COSTINGVARIANTTEXT
description: "Costingvarianttext"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVARIANTTEXT

**Costingvarianttext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CostingVariant` | ✓ | |  | `klvar` |  |  |
| `CostingVariantName` |  | |  | `cast(txklv as fpc_costing_variant_name preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CostingVariant',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE, 
                           #CDS_MODELING_ASSOCIATION_TARGET,  
                           #SEARCHABLE_ENTITY ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT }  
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Costing Variant - Text'

define view entity I_CostingVariantText
  as select from tck04
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
 
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
  key klvar as CostingVariant,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(txklv as fpc_costing_variant_name preserving type) as CostingVariantName,

      _Language
}
```
