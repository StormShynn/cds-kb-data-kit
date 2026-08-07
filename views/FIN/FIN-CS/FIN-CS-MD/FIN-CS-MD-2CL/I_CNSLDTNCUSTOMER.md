---
name: I_CNSLDTNCUSTOMER
description: "Cnsldtncustomer"
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
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMER

**Cnsldtncustomer**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `cast( Customer as fincs_customer preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_CustomerHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnCustomerT` | [0..*] |
| `_CustomerHierNode` | `I_CnsldtnCustomerHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICSCUSTOMER',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'Customer',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnCustomer'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Customer'

// C1 NTBR-S since 2020 (2011?). Fully released since 2208.
// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnCustomer
  as select distinct from P_CnsldtnCustomer

  association [0..*] to I_CnsldtnCustomerT        as _Text             on $projection.Customer = _Text.Customer

  association [0..*] to I_CnsldtnCustomerHierNode as _CustomerHierNode on $projection.Customer = _CustomerHierNode.Customer

  association [1..1] to I_CnsldtnMDSource         as _MDSource         on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CustomerHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCustomerVH',
          element: 'Customer'
        }
      }]
  key cast( Customer as fincs_customer preserving type )                                            as Customer,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,

      /* associations */
      _Text,
      _CustomerHierNode,
      _MDSource
}
where
  Customer is not initial //required to avoid access to corrupt database entries
group by
  Customer
```
