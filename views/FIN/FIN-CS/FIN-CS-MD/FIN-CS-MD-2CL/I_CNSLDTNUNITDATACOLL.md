---
name: I_CNSLDTNUNITDATACOLL
description: Cnsldtnunitdatacoll
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
# I_CNSLDTNUNITDATACOLL

**Cnsldtnunitdatacoll**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CnsldtnUnitDataCollection` | ✓ | |  | `cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitdatacollection preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitDataCollText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUDATCOL',
  compiler.compareFilter: true,
  preserveKey: true
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
    representativeKey: 'CnsldtnUnitDataCollection',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnUnitDataCollection'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cons Unit Data Collection Selection'

define view I_CnsldtnUnitDataColl
  as select from P_CnsldtnUnitAttributeValue(P_CnsldtnUnitAttribute : 'S-DATA-COLLECTION') as _UnitAttributeValue

  association [0..*] to I_CnsldtnUnitDataCollText as _Text on $projection.CnsldtnUnitDataCollection = _Text.CnsldtnUnitDataCollection
{
      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitdatacollection preserving type ) as CnsldtnUnitDataCollection,


      _Text
}
```
