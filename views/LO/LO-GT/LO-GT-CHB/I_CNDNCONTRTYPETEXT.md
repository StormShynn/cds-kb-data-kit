---
name: I_CNDNCONTRTYPETEXT
description: "Cndncontrtypetext"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - text-view
  - text
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRTYPETEXT

**Cndncontrtypetext**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CndnContrTypeDesc` |  | |  |  |  |  |
| `_CndnContrType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Condition Contract Type - Text'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  dataCategory:          #TEXT,
  representativeKey:     'CndnContrType',
  modelingPattern:       #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #EXTRACTION_DATA_SOURCE ],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
}
@Analytics.technicalName: 'IWLFCOCOTYPETEXT'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CndnContrTypeText
  as select from R_CndnContrTypeText

  association [0..1] to I_CndnContrType as _CndnContrType on $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrType'
      @ObjectModel.text.element: ['CndnContrTypeDesc']
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
      }
  key CndnContrType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      CndnContrTypeDesc,

      /* Associations */
      _CndnContrType,
      _Language
}
```
