---
name: I_CNSLDTNSUSTMODEOFTRANSPORTT
description: "Cnsldtnsustmodeoftransportt"
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
  - transport
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUSTMODEOFTRANSPORTT

**Cnsldtnsustmodeoftransportt**

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
| `SustainabilityModeOfTransport` | ✓ | |  | `cast( _Source.SustainabilityModeOfTransport as fincs_sustmodeoftransport preserving type )` |  |  |
| `SustModeOfTransportName` |  | |  | `cast( _Source.SustModeOfTransportName as fincs_sustmodeoftransportname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_SustainabilityModeOfTransport` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SustainabilityModeOfTransport` | `I_CnsldtnSustModeOfTransport` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSUSTMODEOFTRANSPORTT'
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
  representativeKey: 'SustainabilityModeOfTransport',
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
@EndUserText.label: 'Cnsldtn Sust Mode of Transport - Text'

define view entity I_CnsldtnSustModeOfTransportT
  as select distinct from P_CnsldtnSustModeOfTransportT as _Source

    inner join            I_CnsldtnSustModeOfTransport  as _Main on  _Main.SustainabilityModeOfTransport = _Source.SustainabilityModeOfTransport
                                                                 and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                   as _Language                      on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSustModeOfTransport as _SustainabilityModeOfTransport on $projection.SustainabilityModeOfTransport = _SustainabilityModeOfTransport.SustainabilityModeOfTransport
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                          as Language,

      @ObjectModel.foreignKey.association: '_SustainabilityModeOfTransport'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSustModeOfTransportVH',
          element: 'SustainabilityModeOfTransport'
        }
      }]
  key cast( _Source.SustainabilityModeOfTransport as fincs_sustmodeoftransport preserving type ) as SustainabilityModeOfTransport,

      @Semantics.text
      cast( _Source.SustModeOfTransportName  as fincs_sustmodeoftransportname preserving type )  as SustModeOfTransportName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _SustainabilityModeOfTransport
}
where
  _Source.Language is not null
```
