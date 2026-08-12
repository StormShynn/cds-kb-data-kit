---
name: I_PRODCOSTINGCOSTINGVARIANTVH
description: "Prodcostingcostingvariantvh"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODCOSTINGCOSTINGVARIANTVH

**Prodcostingcostingvariantvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingVariant` | ✓ | |  |  |  |  |
| `CostingVariantName` |  | |  |  |  |  |
| `ValuationVariant` |  | |  |  |  |  |
| `ValuationVariantName` |  | |  |  |  |  |
| `CostingType` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostingVariant',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@Analytics.technicalName: 'IPRODCOSTCOSTVARVH'
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Costing Variant'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_ProdCostingCostingVariantVH
  as select from I_CostingVariantStdVH
  
{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostingVariant,
      @Search.defaultSearchElement: true
      CostingVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      ValuationVariant,
      ValuationVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
      CostingType

}

where
  (
    CostingReferenceObject = '0'
  )
```
