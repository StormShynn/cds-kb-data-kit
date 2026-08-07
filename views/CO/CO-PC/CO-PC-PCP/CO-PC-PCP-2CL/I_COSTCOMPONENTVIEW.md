---
name: I_COSTCOMPONENTVIEW
description: Costcomponentview
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
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
# I_COSTCOMPONENTVIEW

**Costcomponentview**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CostComponentView` | ✓ | |  |  |
| `CostCompIsForSalesAndAdminCost` |  | |  |  |
| `CostCompIsForCOGM` |  | |  |  |
| `CostCompIsForInvtryValuation` |  | |  |  |
| `CostCompIsForInvtryOnCommlLaw` |  | |  |  |
| `CostCompIsForInvtryOnTaxLaw` |  | |  |  |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostComponentViewText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL 
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}

@ObjectModel: {
  representativeKey: 'CostComponentView',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    supportedCapabilities: [
      #ANALYTICAL_DIMENSION,
      #CDS_MODELING_ASSOCIATION_TARGET,
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION 
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Component View'

define view entity I_CostComponentView
  as select from P_CostComponentView
  association [0..*] to I_CostComponentViewText as _Text on $projection.CostComponentView = _Text.CostComponentView
{
      @ObjectModel.text.association: '_Text'
  key CostComponentView,
      CostCompIsForSalesAndAdminCost,
      CostCompIsForCOGM,
      CostCompIsForInvtryValuation,
      CostCompIsForInvtryOnCommlLaw,
      CostCompIsForInvtryOnTaxLaw,

      _Text
}
```
