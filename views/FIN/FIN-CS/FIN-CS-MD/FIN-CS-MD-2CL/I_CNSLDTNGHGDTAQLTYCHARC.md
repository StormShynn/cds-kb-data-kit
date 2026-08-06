---
name: I_CNSLDTNGHGDTAQLTYCHARC
description: Cnsldtnghgdtaqltycharc
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGDTAQLTYCHARC

**Cnsldtnghgdtaqltycharc**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GHGDataQualityCharacteristic` | `cast( _Source.GHGDataQualityCharacteristic as fincs_ghgdtaqltycharc preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGHGDtaQltyCharcT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
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
  representativeKey: 'GHGDataQualityCharacteristic',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGHGDtaQltyCharc'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Data Quality Characteristic'
define view entity I_CnsldtnGHGDtaQltyCharc
  as select distinct from I_GHGDtaQltyCharacteristic as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch    as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_GHG_FIELDS'
                                                                        and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnGHGDtaQltyCharcT as _Text on $projection.GHGDataQualityCharacteristic = _Text.GHGDataQualityCharacteristic

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGDtaQltyCharcVH',
          element: 'GHGDataQualityCharacteristic'
        }
      }]
  key cast( _Source.GHGDataQualityCharacteristic as fincs_ghgdtaqltycharc preserving type ) as GHGDataQualityCharacteristic,


      /* associations */
      _Text
}
```
