---
name: I_COSTINGVARIANT
description: "Costingvariant"
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
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVARIANT

**Costingvariant**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingVariant` | ✓ | |  | `klvar` |  |  |
| `ValuationVariant` |  | |  | `bwvar` |  |  |
| `CostEstimateReferenceVariant` |  | |  | `refid` |  |  |
| `CostingType` |  | |  | `kalka` |  |  |
| `CostEstimateTransferControl` |  | |  | `uebid` |  |  |
| `CostEstTransfCtrlIsChangeable` |  | |  | `voraend` |  |  |
| `CostingReferenceObject` |  | |  | `bzobj` |  |  |
| `_Text` | | ✓ | | | | |
| `_CostingValuationVariant` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostingVariantText` | [0..*] |
| `_CostingValuationVariant` | `I_CostingValuationVariant` | [0..1] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFICOSTGVARIANT',
  compiler.compareFilter: true }
@ClientHandling: {
  type: #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE }
@Analytics: {
  dataCategory: #DIMENSION,
   internalName: #LOCAL }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@ObjectModel: {
  representativeKey: 'CostingVariant',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    supportedCapabilities: [
      #ANALYTICAL_DIMENSION,
      #CDS_MODELING_ASSOCIATION_TARGET,
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Costing Variant'

define view I_CostingVariant
  as select from tck03
  association [0..*] to I_CostingVariantText      as _Text                    on $projection.CostingVariant = _Text.CostingVariant
  association [0..1] to I_CostingValuationVariant as _CostingValuationVariant on $projection.ValuationVariant = _CostingValuationVariant.ValuationVariant
  association [0..1] to I_CostingType             as _CostingType             on $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingValuationVarText as _CostingValuationVarText on $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant
  association [0..*] to I_CostingTypeText         as _CostingTypeText         on $projection.CostingType = _CostingTypeText.CostingType
{
      @ObjectModel.text.association: '_Text'
  key klvar   as CostingVariant,
      @ObjectModel.text.association: '_CostingValuationVarText'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      bwvar   as ValuationVariant,
      refid   as CostEstimateReferenceVariant,
      @ObjectModel.text.association: '_CostingTypeText'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH ' , element: 'CostingType' }, useAsTemplate: true }]
      kalka   as CostingType,
      uebid   as CostEstimateTransferControl,
      voraend as CostEstTransfCtrlIsChangeable,
      bzobj   as CostingReferenceObject,

      _Text,
      _CostingValuationVariant,
      _CostingType,
      _CostingValuationVarText,
      _CostingTypeText

}
```
