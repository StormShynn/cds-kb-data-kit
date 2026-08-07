---
name: I_PURCHASECONTRACTHISTORYAPI01
description: Purchase ContractHISTORYAPI 01
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - purchase-contract
  - contract
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTHISTORYAPI01

**Purchase ContractHISTORYAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |
| `PurchaseContractItem` | ✓ | |  |  |
| `ReleaseOrder` | ✓ | |  |  |
| `ReleaseOrderItem` | ✓ | |  |  |
| `ReleaseOrderItemOrderQuantity` |  | |  |  |
| `ReleaseOrderItemNetAmount` |  | |  |  |
| `ReleaseOrderItemIsDeleted` |  | |  |  |
| `ReleaseOrderDate` |  | |  |  |
| `ReleaseOrderItemQuantityUnit` |  | |  |  |
| `ReleaseOrderCurrency` |  | |  |  |
| `ReleaseOrderItemLastChgDate` |  | |  |  |
| `ExchangeRate` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `Plant` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `_PurchaseContractAPI01` | | ✓ | | |
| `_PurchaseContractItemAPI01` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseContractAPI01` | `I_PurchaseContractAPI01` | [1..1] |
| `_PurchaseContractItemAPI01` | `I_PurchaseContractItemAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURCONTRHISTAPI'
@VDM.viewType : #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Contract History'
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_PurchaseContractHistoryAPI01 as select from I_PurchaseContractHistory
       association[1..1] to I_PurchaseContractAPI01 as _PurchaseContractAPI01 on
       $projection.ReleaseOrder = _PurchaseContractAPI01.PurchaseContract
        
       association [1..1] to I_PurchaseContractItemAPI01 as _PurchaseContractItemAPI01 on
       $projection.PurchaseContract = _PurchaseContractItemAPI01.PurchaseContract and
       $projection.PurchaseContractItem = _PurchaseContractItemAPI01.PurchaseContractItem 
       
{
  key I_PurchaseContractHistory.PurchaseContract, 
  key I_PurchaseContractHistory.PurchaseContractItem, 
  key I_PurchaseContractHistory.ReleaseOrder, 
  key I_PurchaseContractHistory.ReleaseOrderItem, 
  @Semantics.quantity.unitOfMeasure: 'ReleaseOrderItemQuantityUnit'
  I_PurchaseContractHistory.ReleaseOrderItemOrderQuantity, 
  @Semantics.amount.currencyCode: 'ReleaseOrderCurrency'
  I_PurchaseContractHistory.ReleaseOrderItemNetAmount,
  @Semantics.booleanIndicator: true  
  I_PurchaseContractHistory.ReleaseOrderItemIsDeleted, 
  I_PurchaseContractHistory.ReleaseOrderDate, 
  I_PurchaseContractHistory.ReleaseOrderItemQuantityUnit, 
  I_PurchaseContractHistory.ReleaseOrderCurrency, 
  I_PurchaseContractHistory.ReleaseOrderItemLastChgDate, 
  I_PurchaseContractHistory.ExchangeRate, 
  I_PurchaseContractHistory.CompanyCode, 
  I_PurchaseContractHistory.Plant, 
  I_PurchaseContractHistory.PurchasingOrganization,
  _PurchaseContractAPI01,
  _PurchaseContractItemAPI01
}
```
