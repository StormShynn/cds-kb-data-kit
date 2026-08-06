---
name: I_CNSLDTNRPTDFINDATAUPLDMETH
description: Cnsldtnrptdfindataupldmeth
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
# I_CNSLDTNRPTDFINDATAUPLDMETH

**Cnsldtnrptdfindataupldmeth**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CnsldtnRptdFinDataUploadMethod` | `cast ( _Source.meth as fincs_rptdfindatauploadmethod preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptdFinDataUpldMethT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSRPDFINUPMT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnRptdFinDataUploadMethod',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnRptdFinDataUploadMethod'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Reported Fin Data Upload Method'
define view I_CnsldtnRptdFinDataUpldMeth
  as select from tf380 as _Source

  association [0..*] to I_CnsldtnRptdFinDataUpldMethT as _Text on $projection.CnsldtnRptdFinDataUploadMethod = _Text.CnsldtnRptdFinDataUploadMethod

{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnRptdFinDataUpldMethVH',
                                                     element: 'CnsldtnRptdFinDataUploadMethod' } }]
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key cast ( _Source.meth as fincs_rptdfindatauploadmethod preserving type ) as CnsldtnRptdFinDataUploadMethod,

      /* Associations */
      _Text
}
where
  _Source.upcat = '04'
```
