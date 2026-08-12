---
name: I_COSTBREAKDOWNMETHOD
description: "Costbreakdownmethod"
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
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTBREAKDOWNMETHOD

**Costbreakdownmethod**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComponentBreakdownMethod` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Cost Breakdown Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'ComponentBreakdownMethod',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [
        #ANALYTICAL_DIMENSION,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #CDS_MODELING_DATA_SOURCE,
        #SQL_DATA_SOURCE ]
}

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CostBreakdownMethod
  as select from I_ComponentBreakdownMethod
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key ComponentBreakdownMethod,

      _Text
}

where ComponentBreakdownMethodType = 'COSTBD'
```
