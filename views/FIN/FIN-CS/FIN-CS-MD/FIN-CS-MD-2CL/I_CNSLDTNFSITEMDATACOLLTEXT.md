---
name: I_CNSLDTNFSITEMDATACOLLTEXT
description: Cnsldtnfsitemdatacolltext
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
# I_CNSLDTNFSITEMDATACOLLTEXT

**Cnsldtnfsitemdatacolltext**

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
| key `CnsldtnFSItemDataCollection` | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemdatacollection preserving type )` |
| `CnsldtnFSItemDataCollText` | `_FSItemAttribValueTxt.CnsldtnFSItemAttribValueText` |
| `CnsldtnFSItemDataCollLongText` | `_FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText` |
| `_CnsldtnFSItemDataCollection` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemDataCollection` | `I_CnsldtnFSItemDataColl` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSIDATCOLT',
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
    representativeKey: 'CnsldtnFSItemDataCollection',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Data Collection Selection - Text'

define view I_CnsldtnFSItemDataCollText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '004') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemDataColl as _CnsldtnFSItemDataCollection on $projection.CnsldtnFSItemDataCollection = _CnsldtnFSItemDataCollection.CnsldtnFSItemDataCollection
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _FSItemAttribValueTxt.Language,

  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemdatacollection preserving type ) as CnsldtnFSItemDataCollection,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText                                                      as CnsldtnFSItemDataCollText,

      @Semantics.text
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText                                                    as CnsldtnFSItemDataCollLongText,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemDataCollection
}
```
