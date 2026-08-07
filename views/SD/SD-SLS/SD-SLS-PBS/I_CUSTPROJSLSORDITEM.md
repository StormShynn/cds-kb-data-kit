---
name: I_CUSTPROJSLSORDITEM
description: "Custprojslsorditem"
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PBS
  - interface-view
  - item-level
  - component:SD-SLS-PBS
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDITEM

**Custprojslsorditem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PBS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItemCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `SalesOrderItemText` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CappedNetAmount` |  | |  |  |  |  |
| `CappedNetAmtAlertThldInPct` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `TotalStandAloneSellingPrice` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_CustProjSlsOrd` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_CustProjSlsOrdItemWorkPckg` | | ✓ | | | | |
| `_CustProjSlsOrdItmBillgPlnItm` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_CustProjSlsOrd` | `I_CustProjSlsOrd` | [1..1] |
| `_CustomerProject` | `I_CustomerProject` | [1..1] |
| `_CustProjSlsOrdItemWorkPckg` | `I_CustProjSlsOrdItemWorkPckg` | [0..*] |
| `_CustProjSlsOrdItmBillgPlnItm` | `I_CustProjSlsOrdItmBillgPlnItm` | [0..*] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJSOI'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ObjectModel: {
   representativeKey: 'SalesOrderItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order Item for Customer Project'
define view I_CustProjSlsOrdItem
  as select from I_SalesOrderItem as SalesOrderItem
    inner join   I_CustProjSlsOrd as CustProjSlsOrd on SalesOrderItem.SalesOrder = CustProjSlsOrd.SalesOrder

  association [1..1] to I_SalesOrder                   as _SalesOrder                   on  $projection.SalesOrder      = _SalesOrder.SalesOrder
  association [1..1] to I_CustProjSlsOrd               as _CustProjSlsOrd               on  $projection.CustomerProject = _CustProjSlsOrd.CustomerProject
  association [1..1] to I_CustomerProject              as _CustomerProject              on  $projection.CustomerProject = _CustomerProject.CustomerProject
  association [0..*] to I_CustProjSlsOrdItemWorkPckg   as _CustProjSlsOrdItemWorkPckg   on  $projection.SalesOrder      = _CustProjSlsOrdItemWorkPckg.SalesOrder
                                                                                        and $projection.SalesOrderItem  = _CustProjSlsOrdItemWorkPckg.SalesOrderItem

  association [0..*] to I_CustProjSlsOrdItmBillgPlnItm as _CustProjSlsOrdItmBillgPlnItm on  $projection.SalesOrder     = _CustProjSlsOrdItmBillgPlnItm.SalesOrder
                                                                                        and $projection.SalesOrderItem = _CustProjSlsOrdItmBillgPlnItm.SalesOrderItem

//Extensibility
  association [0..1] to E_SalesDocumentItemBasic       as _Extension                  on  $projection.SalesOrder     = _Extension.SalesDocument
                                                                                      and $projection.SalesOrderItem = _Extension.SalesDocumentItem
{
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_CustomerProjectVH',
                         element: 'CustomerProject' }
            }]
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key CustProjSlsOrd.CustomerProject,

      @ObjectModel.text.element: 'SalesOrderItemText'
  key SalesOrderItem.SalesOrderItem,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrderItem.SalesOrder,

      SalesOrderItemCategory,

      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_MaterialStdVH',
                         element: 'Material' }
            }]
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      Material,
      
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ProductStdVH',
                         element: 'Product' }
            }]
      @ObjectModel.foreignKey.association: '_Product'
      @Analytics.internalName: #LOCAL
      Product,

      @Semantics.text: true
      SalesOrderItemText,

      ProfitCenter,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CappedNetAmount,

      CappedNetAmtAlertThldInPct,

      MaterialByCustomer,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesOrderItem.TransactionCurrency,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      
      SalesOrderItem.WBSElementInternalID,

      SalesOrderItem.PurchaseOrderByCustomer,
      
      SalesOrderItem.UnderlyingPurchaseOrderItem,
      
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SalesOrderItem.CustomerPaymentTerms,

      BillingPlan,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalStandAloneSellingPrice,

      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,

      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,

      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,

      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      SalesOrderItem.ItemBillingBlockReason,

      // For Access control
      @Consumption.hidden: true
      CustProjSlsOrd.SalesOrderType,
      //_SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      CustProjSlsOrd.OrganizationDivision,
      @Consumption.hidden: true
      CustProjSlsOrd.SalesOrganization,
      @Consumption.hidden: true
      CustProjSlsOrd.DistributionChannel,

      //Association
      _CustomerProject,
      _SalesOrder,
      _CustProjSlsOrd,
      _CustProjSlsOrdItemWorkPckg,
      _CustProjSlsOrdItmBillgPlnItm,
      _Material,
      _Product,
      SalesOrderItem._CustomerPaymentTerms,
      SalesOrderItem._TransactionCurrency,
      SalesOrderItem._SalesDocumentRjcnReason,
      SalesOrderItem._SDDocumentRejectionStatus,
      SalesOrderItem._SDProcessStatus,
      SalesOrderItem._ItemBillingBlockReason
}
```
