---
name: I_CNSLDTNFSITEMCRCYTRNSLTN
description: Cnsldtnfsitemcrcytrnsltn
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMCRCYTRNSLTN

**Cnsldtnfsitemcrcytrnsltn**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CnsldtnFSItemCrcyTranslation` | ✓ | |  | `cast( _FSItemAttribValue.CnsldtnFSItemAttributeValue as fincs_fsitemcrcytranslation preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFSItemCrcyTrnsltnText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSICT',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    representativeKey: 'CnsldtnFSItemCrcyTranslation',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnFSItemCrcyTranslation'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Currency Translation Selection'

define view I_CnsldtnFSItemCrcyTrnsltn
  as select from P_CnsldtnFSItemAttribValue(P_CnsldtnFSItemAttribute : '002') as _FSItemAttribValue

  association [0..*] to I_CnsldtnFSItemCrcyTrnsltnText as _Text on $projection.CnsldtnFSItemCrcyTranslation = _Text.CnsldtnFSItemCrcyTranslation
{
      @ObjectModel.text.association: '_Text'
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast( _FSItemAttribValue.CnsldtnFSItemAttributeValue as fincs_fsitemcrcytranslation preserving type ) as CnsldtnFSItemCrcyTranslation,


      _Text
}
```
