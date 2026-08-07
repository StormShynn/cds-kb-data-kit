---
name: I_CNSLDTNVERSIONTYPE
description: Cnsldtnversiontype
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
# I_CNSLDTNVERSIONTYPE

**Cnsldtnversiontype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnVersionType` | ✓ | |  | `cast(left(_Domain.DomainValue, 1) as fincs_cnsldtnversiontype preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnVersionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSTYP',
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
    resultSet.sizeCategory: #XS,
    representativeKey: 'CnsldtnVersionType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationVersionType'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Version Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnVersionType
  as select from P_CnsldtnDomain(P_DomainName : 'FC_EXT_VERSION_TYPE') as _Domain

  association [0..*] to I_CnsldtnVersionTypeText as _Text on $projection.CnsldtnVersionType = _Text.CnsldtnVersionType

{
      @ObjectModel.text.association: '_Text'
  key cast(left(_Domain.DomainValue, 1) as fincs_cnsldtnversiontype preserving type ) as CnsldtnVersionType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _Domain.DomainValue, // required for search

      /* associations */
      _Text
}
```
