---
name: I_CNTRLRFQITEMDISTRIBUTIONTP_2
description: Cntrlrfqitemdistributiontp 2
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
# I_CNTRLRFQITEMDISTRIBUTIONTP_2

**Cntrlrfqitemdistributiontp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
| `CentralRequestForQuotationItem` | ✓ | |  |  |  |  |
| `DistributionKey` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `CntrlPurgDistributionInPercent` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `PurgDocItmDistrLineDeltnCode` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `DistributionType` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  |  |  |  |
| `ProcmtHubPurRequisitionItem` |  | |  |  |  |  |
| `PurReqnReleaseStatus` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_CentralReqForQuotationItem` | | ✓ | | | | |
| `_CntrlRFQ` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Cntrl Req for Quotatn Itm Distr'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralRequestForQuotation' , 'CentralRequestForQuotationItem', 'DistributionKey']
@ObjectModel.representativeKey: 'DistributionKey'
@ObjectModel:{
               usageType.dataClass: #MIXED,
               usageType.serviceQuality: #C,
               usageType.sizeCategory: #L
             }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlRFQItemDistributionTP_2
  as projection on R_CentralRFQItemDistributionTP
{
    @ObjectModel.foreignKey: { association : '_CntrlRFQ' }
  key CentralRequestForQuotation,
    @ObjectModel.foreignKey: { association : '_CentralReqForQuotationItem' }
  key CentralRequestForQuotationItem,
  key DistributionKey,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingOrganization,
      CompanyCode,
      Plant,
      LogicalSystem,
      DocumentCurrency,
      Currency,
      PurchasingGroup,
      StorageLocation,
      CntrlPurgDistributionInPercent,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      PurgDocItmDistrLineDeltnCode,
      OrderQuantityUnit,
      DistributionType,
//      DistrResponseMessageUUID,
//      PurgDocItemDistrRelevanceCode,
//      ReferenceHeaderDistributionKey,
      ProcurementHubSourceSystem,
      ProcmtHubPurchaseRequisition,
      ProcmtHubPurRequisitionItem,
      PurReqnReleaseStatus,
      
//      @Semantics.amount.currencyCode:'DocumentCurrency'
//      NetPriceAmount,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      /* Associations */
      _CentralReqForQuotationItem : redirected to parent I_CntrlReqForQuotationItemTP_2,
      _CntrlRFQ                   : redirected to I_CntrlRequestForQuotationTP_2
}
```
