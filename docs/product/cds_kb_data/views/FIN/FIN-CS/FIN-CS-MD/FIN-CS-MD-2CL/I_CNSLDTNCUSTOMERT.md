---
name: I_CNSLDTNCUSTOMERT
description: "Cnsldtncustomert"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNCUSTOMERT

**Cnsldtncustomert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `Customer` | ✓ | |  | `cast( _Source.Customer as fincs_customer preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.CustomerName as fincs_description_text_80 preserving type )` |  |  |
| `CustomerName` |  | |  | `cast( _Source.CustomerName as fincs_customername preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Customer` | `I_CnsldtnCustomer` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUSTOMERT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'Customer',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnCustomerText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Customer - Text'
define view I_CnsldtnCustomerT
  as select distinct from P_CnsldtnCustomerT as _Source

    inner join            I_CnsldtnCustomer  as _Main on  _Main.Customer                      = _Source.Customer
                                                      and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnCustomer as _Customer on $projection.Customer = _Customer.Customer
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCustomerVH',
          element: 'Customer'
        }
      }]
  key cast( _Source.Customer as fincs_customer preserving type )                           as Customer,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'CustomerName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CustomerName' }
      cast( _Source.CustomerName as fincs_description_text_80 preserving type )            as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.CustomerName as fincs_customername preserving type )                   as CustomerName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Customer
}
where
  _Source.Language is not null
```
