---
name: I_CNTRLSUPLRQTNITEMDISTRTP_2
description: Cntrlsuplrqtnitemdistrtp 2
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRQTNITEMDISTRTP_2

**Cntrlsuplrqtnitemdistrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |
| `DistributionKey` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentType` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `Plant` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `Currency` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `CntrlPurgDistributionInPercent` |  | |  |  |
| `TargetQuantity` |  | |  |  |
| `TargetAmount` |  | |  |  |
| `PurgDocItemDistributionStatus` |  | |  |  |
| `PurgDocItmDistrLineDeltnCode` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `DistributionType` |  | |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  |  |
| `ProcmtHubPurRequisitionItem` |  | |  |  |
| `PurReqnReleaseStatus` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_CntrlSupplierQuotationItem` | | ✓ | | |
| `_CntrlQtan` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Central Supplier Qtn Itm Distr'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralSupplierQuotation','CentralSupplierQuotationItem', 'DistributionKey' ]
@ObjectModel.representativeKey: 'DistributionKey'
@ObjectModel:{
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A, // #B or #C
               usageType.sizeCategory: #L
             }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlSuplrQtnItemDistrTP_2
  as projection on R_CntrlSuplrQtnItemDistrTP
{
      @ObjectModel.foreignKey.association: '_CntrlQtan'
  key CentralSupplierQuotation,
      @ObjectModel.foreignKey.association : '_CntrlSupplierQuotationItem'
  key CentralSupplierQuotationItem,
  key DistributionKey,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingOrganization,
      CompanyCode,
      Plant,
      DocumentCurrency,
      Currency,
      PurchasingGroup,
      StorageLocation,
      CntrlPurgDistributionInPercent,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      PurgDocItemDistributionStatus,
      PurgDocItmDistrLineDeltnCode,
      OrderQuantityUnit,
      DistributionType,
      
      ProcurementHubSourceSystem,
      ProcmtHubPurchaseRequisition,
      ProcmtHubPurRequisitionItem,
      PurReqnReleaseStatus,
      
      LastChangeDateTime,
      /* Associations */
      _CntrlSupplierQuotationItem : redirected to parent I_CntrlSuplrQuotationItemTP_2,
      _CntrlQtan                  : redirected to I_CentralSupplierQuotationTP_2

}
```
