---
name: C_PURCHASECONTRACTHISTORYDEX
description: Purchase ContractHISTORYDEX
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - purchase-contract
  - contract
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASECONTRACTHISTORYDEX

**Purchase ContractHISTORYDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseContract` | `PurchaseContract` |
| key `PurchaseContractItem` | `PurchaseContractItem` |
| key `ReleaseOrder` | `ReleaseOrder` |
| key `ReleaseOrderItem` | `ReleaseOrderItem` |
| `ReleaseOrderItemOrderQuantity` | `ReleaseOrderItemOrderQuantity` |
| `ReleaseOrderItemNetAmount` | `ReleaseOrderItemNetAmount` |
| `ReleaseOrderItemIsDeleted` | `ReleaseOrderItemIsDeleted` |
| `ReleaseOrderDate` | `ReleaseOrderDate` |
| `ReleaseOrderItemQuantityUnit` | `ReleaseOrderItemQuantityUnit` |
| `ReleaseOrderCurrency` | `ReleaseOrderCurrency` |
| `ReleaseOrderItemLastChgDate` | `ReleaseOrderItemLastChgDate` |
| `ExchangeRate` | `ExchangeRate` |
| `CompanyCode` | `CompanyCode` |
| `Plant` | `Plant` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchaseContractType` | `_PurchaseContractAPI01.PurchaseContractType` |
| `PurchasingGroup` | `_PurchaseContractAPI01.PurchasingGroup` |
| `_PurchaseContract` | *Association* |
| `_PurchaseContractItem` | *Association* |
| `_ReleaseOrderItemQuantityUnit` | *Association* |
| `_ReleaseOrderCurrency` | *Association* |
| `_CompanyCode` | *Association* |
| `_Plant` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_PurchasingContractType` | *Association* |
| `_PurchasingGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseContract` | `C_PurchaseContractDEX` | [1..1] |
| `_PurchaseContractItem` | `C_PurchaseContractItemDEX` | [0..1] |
| `_ReleaseOrderItemQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_ReleaseOrderCurrency` | `I_Currency` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingContractType` | `I_PurchaseContractType` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName             : 'CMMPURCONHISDEX'
@EndUserText.label                   : 'Purchase Contract History Data Extractor'
@AbapCatalog.compiler.compareFilter  : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekab', role : #MAIN ,
                        viewElement     : ['PurchaseContract' , 'PurchaseContractItem' , 'ReleaseOrder','ReleaseOrderItem' ],
                        tableElement    : ['konnr' ,'ktpnr' ,'ebeln' ,'ebelp']
                      },
                      {
                      table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['ReleaseOrder'],
                        tableElement    : ['ebeln']
                       },
                        {
                      table           : 'ekpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['ReleaseOrder','ReleaseOrderItem'],
                        tableElement    : ['ebeln' ,'ebelp']
                       }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseContractHistory'

define view C_PurchaseContractHistoryDEX
  as select from I_PurchaseContractHistoryAPI01

  association [1..1] to C_PurchaseContractDEX     as _PurchaseContract             on $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association [0..1] to C_PurchaseContractItemDEX as _PurchaseContractItem         on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                   and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem

  association [1..1] to I_UnitOfMeasure           as _ReleaseOrderItemQuantityUnit on $projection.ReleaseOrderItemQuantityUnit = _ReleaseOrderItemQuantityUnit.UnitOfMeasure

  association [1..1] to I_Currency                as _ReleaseOrderCurrency         on $projection.ReleaseOrderCurrency = _ReleaseOrderCurrency.Currency

  association [1..1] to I_CompanyCode             as _CompanyCode                  on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_Plant                   as _Plant                        on $projection.Plant = _Plant.Plant

  association [1..1] to I_PurchasingOrganization  as _PurchasingOrganization       on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchaseContractType    as _PurchasingContractType       on $projection.PurchaseContractType = _PurchasingContractType.PurchaseContractType

  association [1..1] to I_PurchasingGroup         as _PurchasingGroup              on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
{
  key PurchaseContract,
  key PurchaseContractItem,
  key ReleaseOrder,
  key ReleaseOrderItem,

       @Semantics.quantity.unitOfMeasure: 'ReleaseOrderItemQuantityUnit'
      ReleaseOrderItemOrderQuantity,

      @Semantics.amount.currencyCode: 'ReleaseOrderCurrency'
      ReleaseOrderItemNetAmount,

      @Semantics.booleanIndicator: true
      ReleaseOrderItemIsDeleted,

      @Semantics.businessDate.at: true
      ReleaseOrderDate,

      @ObjectModel.foreignKey.association: '_ReleaseOrderItemQuantityUnit'
      ReleaseOrderItemQuantityUnit,

      @ObjectModel.foreignKey.association: '_ReleaseOrderCurrency'
      ReleaseOrderCurrency,

      @Semantics.systemDate.lastChangedAt: true
      ReleaseOrderItemLastChgDate,

      ExchangeRate,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingContractType'
      _PurchaseContractAPI01.PurchaseContractType as PurchaseContractType,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _PurchaseContractAPI01.PurchasingGroup      as PurchasingGroup,

      _PurchaseContract,
      _PurchaseContractItem,
      _ReleaseOrderItemQuantityUnit,
      _ReleaseOrderCurrency,
      _CompanyCode,
      _Plant,
      _PurchasingOrganization,
      _PurchasingContractType,
      _PurchasingGroup
}
```
