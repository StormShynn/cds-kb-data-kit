---
name: I_CNSLDTNORDERTEXT
description: Cnsldtnordertext
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
# I_CNSLDTNORDERTEXT

**Cnsldtnordertext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( _Source.Language as spras preserving type )` |
| key `OrderID` | `cast( _Source.OrderID as fincs_order preserving type )` |
| `AdditionalMasterDataSource` | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `OrderDescription` | `cast( _Source.OrderDescription as fincs_order_desc preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `_Source.CnsldtnIsAdditionalMasterData` |
| `_Language` | *Association* |
| `_Order` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Order` | `I_CnsldtnOrder` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSORDERT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'OrderID',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnOrderText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Order - Text'
define view I_CnsldtnOrderText
  as select distinct from P_CnsldtnOrderT as _Source

    inner join   I_CnsldtnOrder  as _Main on  _Main.OrderID                       = _Source.OrderID
                                          and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language     as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnOrder as _Order    on $projection.OrderID = _Order.OrderID
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Order'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnOrderVH',
          element: 'OrderID'
        }
      }]
  key cast( _Source.OrderID as fincs_order preserving type )                               as OrderID,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      // OrderDescription is used (instead of OrderName), as this term is used in accounting (e.g. see I_OrderBasic)
      @Semantics.text
      cast( _Source.OrderDescription as fincs_order_desc preserving type )                 as OrderDescription,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Order
}
where
  _Source.Language is not null
```
