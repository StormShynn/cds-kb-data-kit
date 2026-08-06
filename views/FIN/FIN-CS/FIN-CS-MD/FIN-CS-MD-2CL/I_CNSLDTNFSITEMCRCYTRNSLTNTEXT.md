---
name: I_CNSLDTNFSITEMCRCYTRNSLTNTEXT
description: Cnsldtnfsitemcrcytrnsltntext
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
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMCRCYTRNSLTNTEXT

**Cnsldtnfsitemcrcytrnsltntext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_FSItemAttribValueTxt.Language` |
| key `CnsldtnFSItemCrcyTranslation` | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcrcytranslation preserving type )` |
| `CnsldtnFSItemCrcyTrnsltnText` | `_FSItemAttribValueTxt.CnsldtnFSItemAttribValueText` |
| `CnsldtnFSItmCrcyTrnsltnLongTxt` | `_FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText` |
| `_CnsldtnFSItemCrcyTranslation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemCrcyTranslation` | `I_CnsldtnFSItemCrcyTrnsltn` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSICTT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
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
    dataCategory: #TEXT,
    representativeKey: 'CnsldtnFSItemCrcyTranslation',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Currency Trans Selection - Text'

define view I_CnsldtnFSItemCrcyTrnsltnText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '002') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemCrcyTrnsltn as _CnsldtnFSItemCrcyTranslation on $projection.CnsldtnFSItemCrcyTranslation = _CnsldtnFSItemCrcyTranslation.CnsldtnFSItemCrcyTranslation
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _FSItemAttribValueTxt.Language,

  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcrcytranslation preserving type ) as CnsldtnFSItemCrcyTranslation,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText                                                       as CnsldtnFSItemCrcyTrnsltnText,

      @Semantics.text
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText                                                     as CnsldtnFSItmCrcyTrnsltnLongTxt,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemCrcyTranslation
}
```
