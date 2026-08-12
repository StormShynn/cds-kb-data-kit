---
name: I_CNSLDTNINVESTMENTMETHOD
description: "Cnsldtninvestmentmethod"
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
# I_CNSLDTNINVESTMENTMETHOD

**Cnsldtninvestmentmethod**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationInvestmentMethod` | ✓ | |  | `cast(_Source.coimeth as fincs_investmentmethod preserving type )` |  |  |
| `AccountingTechnique` |  | |  | `cast(_Source.coitp as fincs_accountingtechnique preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnInvestmentMethodText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSINVMETHOD',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
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
  representativeKey: 'ConsolidationInvestmentMethod',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnInvestmentMethod'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Investment Method'

define view I_CnsldtnInvestmentMethod
  as select from tf600 as _Source

  association [0..*] to I_CnsldtnInvestmentMethodText as _Text on $projection.ConsolidationInvestmentMethod = _Text.ConsolidationInvestmentMethod
{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnInvestmentMethodVH', element: 'ConsolidationInvestmentMethod' } }]
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast(_Source.coimeth as fincs_investmentmethod preserving type )  as ConsolidationInvestmentMethod,

      cast(_Source.coitp as fincs_accountingtechnique preserving type ) as AccountingTechnique,


      /* Associations */
      _Text

}
where
  dimen = 'Y1'
```
