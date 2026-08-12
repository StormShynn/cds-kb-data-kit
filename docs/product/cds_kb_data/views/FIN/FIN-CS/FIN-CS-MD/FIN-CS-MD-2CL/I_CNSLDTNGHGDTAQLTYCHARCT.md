---
name: I_CNSLDTNGHGDTAQLTYCHARCT
description: "Cnsldtnghgdtaqltycharct"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNGHGDTAQLTYCHARCT

**Cnsldtnghgdtaqltycharct**

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
| `GHGDataQualityCharacteristic` | ✓ | |  | `cast( _Source.GHGDataQualityCharacteristic as fincs_ghgdtaqltycharc preserving type )` |  |  |
| `GHGDtaQltyCharacteristicName` |  | |  | `cast( _Source.GHGDtaQltyCharacteristicName as fincs_ghgdtaqltycharcname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_GHGDataQualityCharacteristic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGDataQualityCharacteristic` | `I_CnsldtnGHGDtaQltyCharc` | [1..1] |

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
  representativeKey: 'GHGDataQualityCharacteristic',
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
@EndUserText.label: 'Cnsldtn GHG Data Quality Charc - Text'
define view entity I_CnsldtnGHGDtaQltyCharcT 
as select distinct from I_GHGDtaQltyCharcText    as _Source

    inner join            I_CnsldtnGHGDtaQltyCharc as _Main on _Main.GHGDataQualityCharacteristic = _Source.GHGDataQualityCharacteristic

  association [1..1] to I_Language                 as _Language                   on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGDtaQltyCharc as _GHGDataQualityCharacteristic on $projection.GHGDataQualityCharacteristic = _GHGDataQualityCharacteristic.GHGDataQualityCharacteristic
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                             as Language,

      @ObjectModel.foreignKey.association: '_GHGDataQualityCharacteristic'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGDtaQltyCharcVH',
          element: 'GHGDataQualityCharacteristic'
        }
      }]
  key cast( _Source.GHGDataQualityCharacteristic as fincs_ghgdtaqltycharc preserving type )  as GHGDataQualityCharacteristic ,

      @Semantics.text
      cast( _Source.GHGDtaQltyCharacteristicName as fincs_ghgdtaqltycharcname preserving type ) as GHGDtaQltyCharacteristicName,


      /* associations */
      _Language,
      _GHGDataQualityCharacteristic
}
```
