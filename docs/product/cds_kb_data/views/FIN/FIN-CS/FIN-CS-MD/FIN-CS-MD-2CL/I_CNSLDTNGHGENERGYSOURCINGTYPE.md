---
name: I_CNSLDTNGHGENERGYSOURCINGTYPE
description: "Cnsldtnghgenergysourcingtype"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNGHGENERGYSOURCINGTYPE

**Cnsldtnghgenergysourcingtype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGEnergySourcingType` | ✓ | |  | `cast( _Source.GHGEnergySourcingType as fincs_ghgenergysourcingtype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGHGEngySourcingTypeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSGHGENERGYSOURCINGTYPE'
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
  representativeKey: 'GHGEnergySourcingType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGHGEnergySourcingType'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation GHG Energy Sourcing Type'
define view entity I_CnsldtnGHGEnergySourcingType
  as select distinct from I_GHGEnergySourcingType as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_GHG_FIELDS'
                                                                     and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnGHGEngySourcingTypeT as _Text on $projection.GHGEnergySourcingType = _Text.GHGEnergySourcingType

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGEngySourcingTypeVH',
          element: 'GHGEnergySourcingType'
        }
      }]
  key cast( _Source.GHGEnergySourcingType as fincs_ghgenergysourcingtype preserving type ) as GHGEnergySourcingType,


      /* associations */
      _Text
}
```
