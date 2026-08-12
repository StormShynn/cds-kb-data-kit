---
name: I_CNSLDTNGHGSCP2CNTRCTLINSTRT
description: "Cnsldtnghgscp 2CNTRCTLINSTRT"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_CNSLDTNGHGSCP2CNTRCTLINSTRT

**Cnsldtnghgscp 2CNTRCTLINSTRT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
