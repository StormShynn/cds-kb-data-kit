---
name: I_INSPSPECRSLTCALCULATION
description: "Inspspecrsltcalculation"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECRSLTCALCULATION

**Inspspecrsltcalculation**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecResultCalculation` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qkzformel preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspSpecRsltCalculationText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Characteristic Result Calculation'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'InspSpecResultCalculation',
    resultSet.sizeCategory: #XS
}
@Analytics.technicalName: 'IINSPRSLTCALC'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecRsltCalculation as select from dd07l

   association [0..*] to I_InspSpecRsltCalculationText as _Text 
      on $projection.InspSpecResultCalculation = _Text.InspSpecResultCalculation 
      
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qkzformel preserving type ) as InspSpecResultCalculation
   
    /* Association */
    , _Text
    
}
where domname  = 'QKZFORMEL' 
  and as4local = 'A'
```
