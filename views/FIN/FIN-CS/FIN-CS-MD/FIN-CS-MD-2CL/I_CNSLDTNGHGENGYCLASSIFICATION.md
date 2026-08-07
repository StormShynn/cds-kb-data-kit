---
name: I_CNSLDTNGHGENGYCLASSIFICATION
description: Cnsldtnghgengyclassification
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - classification
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGENGYCLASSIFICATION

**Cnsldtnghgengyclassification**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGEnergyClassification` | ✓ | |  | `cast( _Source.GHGEnergyClassification as fincs_ghgenergyclassification preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGHGEngyClassfctnT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
   dataExtraction.enabled: true,
  technicalName: 'ICSGHGENGYCLASSIFICATION'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGEnergyClassification',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGHGEnergyClassification'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Energy Classification'

define view entity I_CnsldtnGHGEngyClassification
  as select distinct from I_GHGEnergyClassification as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch   as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_GHG_FIELDS'
                                                                       and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnGHGEngyClassfctnT as _Text on $projection.GHGEnergyClassification = _Text.GHGEnergyClassification

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGEngyClassfctnVH',
          element: 'GHGEnergyClassification'
        }
      }]
  key cast( _Source.GHGEnergyClassification as fincs_ghgenergyclassification preserving type ) as GHGEnergyClassification,


      /* associations */
      _Text
}
```
