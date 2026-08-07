---
name: I_CNSLDTNVERSIONT
description: "Cnsldtnversiont"
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
# I_CNSLDTNVERSIONT

**Cnsldtnversiont**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  | `cast ( _tf201.rvers as fincs_consolidationversion preserving type )` |  |  |
| `Language` | ✓ | | `_tf201` | `langu` |  |  |
| `ConsolidationVersionText` |  | |  | `cast (_tf201.txt as fincs_consolidationversiontext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCVERSIONT',
  compiler.compareFilter: true,
  preserveKey:true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationVersion',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationVersionText'                        
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Version - Text'

define view I_CnsldtnVersionT
  as select from tf201 as _tf201

  association [1..1] to I_Language       as _Language       on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnVersion as _CnsldtnVersion on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion

{

      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnVersionVH',
                                           element: 'ConsolidationVersion' } }]
  key cast ( _tf201.rvers as fincs_consolidationversion preserving type )  as ConsolidationVersion,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _tf201.langu                                                         as Language,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast (_tf201.txt as fincs_consolidationversiontext preserving type ) as ConsolidationVersionText,


      _Language,
      _CnsldtnVersion
}
```
