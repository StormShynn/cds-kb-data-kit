---
name: I_CNSLDTNGHGSCP2CALCMETHODT
description: "Cnsldtnghgscp 2CALCMETHODT"
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
# I_CNSLDTNGHGSCP2CALCMETHODT

**Cnsldtnghgscp 2CALCMETHODT**

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
| `GHGScope2CalculationMethod` | ✓ | |  | `cast( _Source.GHGScope2CalculationMethod as fincs_ghgscp2calculationmethod preserving type )` |  |  |
| `GHGScope2CalculationMethodName` |  | |  | `cast( _Source.GHGScope2CalculationMethodName as fincs_ghgscp2calcmethodname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_GHGScope2CalculationMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGScope2CalculationMethod` | `I_CnsldtnGHGScp2CalcMethod` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  representativeKey: 'GHGScope2CalculationMethod',
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
@EndUserText.label: 'Cnsldtn GHG Scope 2 Calc Method - Text'

define view entity I_CnsldtnGHGScp2CalcMethodT
  as select distinct from I_GHGScp2CalcMethodText    as _Source

    inner join            I_CnsldtnGHGScp2CalcMethod as _Main on _Main.GHGScope2CalculationMethod = _Source.GHGScope2CalculationMethod

  association [1..1] to I_Language                 as _Language                   on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGScp2CalcMethod as _GHGScope2CalculationMethod on $projection.GHGScope2CalculationMethod = _GHGScope2CalculationMethod.GHGScope2CalculationMethod
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                             as Language,

      @ObjectModel.foreignKey.association: '_GHGScope2CalculationMethod'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGScp2CalcMethodVH',
          element: 'GHGScope2CalculationMethod'
        }
      }]
  key cast( _Source.GHGScope2CalculationMethod as fincs_ghgscp2calculationmethod preserving type )  as GHGScope2CalculationMethod,

      @Semantics.text
      cast( _Source.GHGScope2CalculationMethodName as fincs_ghgscp2calcmethodname preserving type ) as GHGScope2CalculationMethodName,


      /* associations */
      _Language,
      _GHGScope2CalculationMethod
}
```
