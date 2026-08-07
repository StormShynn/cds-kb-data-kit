---
name: I_CNSLDTNGHGSCP2CNTRCTLINSTR
description: Cnsldtnghgscp 2CNTRCTLINSTR
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
# I_CNSLDTNGHGSCP2CNTRCTLINSTR

**Cnsldtnghgscp 2CNTRCTLINSTR**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GHGScope2ContractualInstrument` | ✓ | |  | `cast( _Source.GHGScope2ContractualInstrument as fincs_ghgscp2cntrctlinstrument preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGHGScp2CntrctlInstrT` | [0..*] |

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
  representativeKey: 'GHGScope2ContractualInstrument',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGHGScp2CntrctlInstr'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Scp 2 Contractual Instrument'

define view entity I_CnsldtnGHGScp2CntrctlInstr
  as select distinct from I_GHGScp2CntrctlInstrument as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch    as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_GHG_FIELDS'
                                                                        and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [0..*] to I_CnsldtnGHGScp2CntrctlInstrT as _Text on $projection.GHGScope2ContractualInstrument = _Text.GHGScope2ContractualInstrument

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGScp2CntrctlInstrVH',
          element: 'GHGScope2ContractualInstrument'
        }
      }]
  key cast( _Source.GHGScope2ContractualInstrument as fincs_ghgscp2cntrctlinstrument preserving type ) as GHGScope2ContractualInstrument,


      /* associations */
      _Text
}
```
