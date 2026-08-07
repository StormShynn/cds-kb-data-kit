---
name: I_CNSLDTNUNITDATACOLLTEXT
description: Cnsldtnunitdatacolltext
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITDATACOLLTEXT

**Cnsldtnunitdatacolltext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_UnitAttributeValueT` | `Language` |  |  |
| `CnsldtnUnitDataCollection` | ✓ | |  | `cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitdatacollection preserving type )` |  |  |
| `CnsldtnUnitDataCollectionText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValText` |  |  |
| `CnsldtnUnitDataCollLongText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValLongText` |  |  |
| `_CnsldtnUnitDataColl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnUnitDataColl` | `I_CnsldtnUnitDataColl` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUDATCOLT',
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
    representativeKey: 'CnsldtnUnitDataCollection',
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
@EndUserText.label: 'Cons Unit Data Coll Selection - Text'

define view I_CnsldtnUnitDataCollText
  as select from P_CnsldtnUnitAttributeValueT(P_CnsldtnUnitAttribute : 'S-DATA-COLLECTION') as _UnitAttributeValueT

  association [1..1] to I_CnsldtnUnitDataColl as _CnsldtnUnitDataColl on $projection.CnsldtnUnitDataCollection = _CnsldtnUnitDataColl.CnsldtnUnitDataCollection
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _UnitAttributeValueT.Language,

  key cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitdatacollection preserving type ) as CnsldtnUnitDataCollection,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _UnitAttributeValueT.CnsldtnUnitAttribValText                                                      as CnsldtnUnitDataCollectionText,

      @Semantics.text
      _UnitAttributeValueT.CnsldtnUnitAttribValLongText                                                  as CnsldtnUnitDataCollLongText,


      _UnitAttributeValueT._Language,
      _CnsldtnUnitDataColl
}
```
