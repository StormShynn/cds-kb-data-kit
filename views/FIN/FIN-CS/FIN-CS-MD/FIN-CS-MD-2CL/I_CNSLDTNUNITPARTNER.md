---
name: I_CNSLDTNUNITPARTNER
description: Cnsldtnunitpartner
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
  - partner
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPARTNER

**Cnsldtnunitpartner**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnitPartner` | `cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitpartner preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitPartnerText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUPARTNER',
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
    representativeKey: 'ConsolidationUnitPartner',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitPartner'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cons Unit Partner Selection'

define view I_CnsldtnUnitPartner
  as select from P_CnsldtnUnitAttributeValue(P_CnsldtnUnitAttribute : 'S-PARTNER') as _UnitAttributeValue

  association [0..*] to I_CnsldtnUnitPartnerText as _Text on $projection.ConsolidationUnitPartner = _Text.ConsolidationUnitPartner
{
      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitpartner preserving type ) as ConsolidationUnitPartner,


      _Text
}
```
