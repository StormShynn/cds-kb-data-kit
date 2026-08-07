---
name: I_CNSLDTNGHGSCP2CNTRCTLINSTRT
description: Cnsldtnghgscp 2CNTRCTLINSTRT
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
# I_CNSLDTNGHGSCP2CNTRCTLINSTRT

**Cnsldtnghgscp 2CNTRCTLINSTRT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `GHGScope2ContractualInstrument` | ✓ | |  | `cast( _Source.GHGScope2ContractualInstrument as fincs_ghgscp2cntrctlinstrument preserving type )` |  |  |
| `GHGScp2CntrctlInstrName` |  | |  | `cast( _Source.GHGScp2CntrctlInstrName as fincs_ghgscp2cntrctlinstrname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_GHGScp2ContractualInstrument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGScp2ContractualInstrument` | `I_CnsldtnGHGScp2CntrctlInstr` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSGHGSCP2CNTRCTLINSTRT'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGScope2ContractualInstrument',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Scp 2 Cntrctl Instr - Text'

define view entity I_CnsldtnGHGScp2CntrctlInstrT
  as select distinct from I_GHGScp2CntrctlInstrText    as _Source

    inner join            I_CnsldtnGHGScp2CntrctlInstr as _Main on _Main.GHGScope2ContractualInstrument = _Source.GHGScope2ContractualInstrument

  association [1..1] to I_Language                   as _Language                     on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGScp2CntrctlInstr as _GHGScp2ContractualInstrument on $projection.GHGScope2ContractualInstrument = _GHGScp2ContractualInstrument.GHGScope2ContractualInstrument

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                                as Language,

      @ObjectModel.foreignKey.association: '_GHGScp2ContractualInstrument'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGScp2CntrctlInstrVH',
          element: 'GHGScope2ContractualInstrument'
        }
      }]
  key cast( _Source.GHGScope2ContractualInstrument as fincs_ghgscp2cntrctlinstrument preserving type ) as GHGScope2ContractualInstrument,

      @Semantics.text
      cast( _Source.GHGScp2CntrctlInstrName  as fincs_ghgscp2cntrctlinstrname preserving type )        as GHGScp2CntrctlInstrName,


      /* associations */
      _Language,
      _GHGScp2ContractualInstrument
}
```
