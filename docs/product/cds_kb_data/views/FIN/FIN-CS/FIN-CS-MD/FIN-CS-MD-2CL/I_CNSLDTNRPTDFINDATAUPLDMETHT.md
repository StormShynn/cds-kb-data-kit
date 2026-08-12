---
name: I_CNSLDTNRPTDFINDATAUPLDMETHT
description: "Cnsldtnrptdfindataupldmetht"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNRPTDFINDATAUPLDMETHT

**Cnsldtnrptdfindataupldmetht**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `langu` |  |  |
| `CnsldtnRptdFinDataUploadMethod` | ✓ | |  | `cast ( _Source.meth as fincs_rptdfindatauploadmethod preserving type )` |  |  |
| `CnsldtnRptdFinDataUpldMethText` |  | |  | `cast ( _Source.txt as fincs_rptdfindatauploadmethtxt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnRptdFinDataUpldMeth` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnRptdFinDataUpldMeth` | `I_CnsldtnRptdFinDataUpldMeth` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSRPDFINUPMTT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnRptdFinDataUploadMethod',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Rptd Fin Data Upld Method - Text'

define view I_CnsldtnRptdFinDataUpldMethT
  as select from tf381 as _Source

    inner join   tf380 as _TF380 on  _TF380.meth  = _Source.meth
                                 and _TF380.upcat = '04'

  association [1..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnRptdFinDataUpldMeth as _CnsldtnRptdFinDataUpldMeth on $projection.CnsldtnRptdFinDataUploadMethod = _CnsldtnRptdFinDataUpldMeth.CnsldtnRptdFinDataUploadMethod

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.langu                                                          as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnRptdFinDataUpldMeth'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnRptdFinDataUpldMethVH',
                                                     element: 'CnsldtnRptdFinDataUploadMethod' } }]
  key cast ( _Source.meth as fincs_rptdfindatauploadmethod preserving type ) as CnsldtnRptdFinDataUploadMethod,

      @Semantics.text
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7, ranking: #LOW }
      cast ( _Source.txt as fincs_rptdfindatauploadmethtxt preserving type ) as CnsldtnRptdFinDataUpldMethText,

      /* Associations */
      _Language,
      _CnsldtnRptdFinDataUpldMeth
}
```
