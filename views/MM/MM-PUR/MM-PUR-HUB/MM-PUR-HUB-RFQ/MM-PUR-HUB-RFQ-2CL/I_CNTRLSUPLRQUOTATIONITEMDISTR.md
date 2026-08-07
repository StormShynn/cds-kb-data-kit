---
name: I_CNTRLSUPLRQUOTATIONITEMDISTR
description: "Cntrlsuplrquotationitemdistr"
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
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRQUOTATIONITEMDISTR

**Cntrlsuplrquotationitemdistr**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |  |  |
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
| `TargetAmount` |  | |  |  |  |  |
| `PurgDocItemDistributionStatus` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `PurgDocItmDistrLineDeltnCode` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `DistributionType` |  | |  |  |  |  |
| `DistrResponseMessageUUID` |  | |  |  |  |  |
| `ItemDistributionIsRelevant` |  | |  |  |  |  |
| `PurgDocItemDistrRelevanceCode` |  | |  |  |  |  |
| `ReferenceHeaderDistributionKey` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  |  |  |  |
| `ProcmtHubPurRequisitionItem` |  | |  |  |  |  |
| `PurReqnReleaseStatus` |  | |  |  |  |  |
| `_CentralSupplierQuotation` | | ✓ | | | | |
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralSupplierQuotation` | `I_CentralSupplierQuotation` | [1..1] |
| `_CntrlSupplierQuotationItem` | `I_CntrlSupplierQuotationItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLQTNDISTR'
@VDM.viewType : #BASIC
@EndUserText.label: 'Central Supplier Quotation Item Distribution'
@AbapCatalog.preserveKey:true

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CntrlSuplrQuotationItemDistr
  as select from R_CntrlSuplrQuotationItemDistr

  association [1..1] to I_CentralSupplierQuotation   as _CentralSupplierQuotation   on  $projection.CentralSupplierQuotation = _CentralSupplierQuotation.CentralSupplierQuotation

  association [1..1] to I_CntrlSupplierQuotationItem as _CntrlSupplierQuotationItem on  $projection.CentralSupplierQuotation     = _CntrlSupplierQuotationItem.CentralSupplierQuotation
                                                                                    and $projection.CentralSupplierQuotationItem = _CntrlSupplierQuotationItem.CentralSupplierQuotationItem

{
  key R_CntrlSuplrQuotationItemDistr.CentralSupplierQuotation,
  key R_CntrlSuplrQuotationItemDistr.CentralSupplierQuotationItem,
  key R_CntrlSuplrQuotationItemDistr.DistributionKey,
      R_CntrlSuplrQuotationItemDistr.PurchasingDocumentCategory,
      R_CntrlSuplrQuotationItemDistr.PurchasingDocumentType,
      R_CntrlSuplrQuotationItemDistr.PurchasingOrganization,
      R_CntrlSuplrQuotationItemDistr.CompanyCode,
      R_CntrlSuplrQuotationItemDistr.Plant,
      R_CntrlSuplrQuotationItemDistr.LogicalSystem,
      R_CntrlSuplrQuotationItemDistr.DocumentCurrency,
      R_CntrlSuplrQuotationItemDistr.Currency,
      R_CntrlSuplrQuotationItemDistr.PurchasingGroup,
      R_CntrlSuplrQuotationItemDistr.StorageLocation,
      R_CntrlSuplrQuotationItemDistr.CntrlPurgDistributionInPercent,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      R_CntrlSuplrQuotationItemDistr.TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      R_CntrlSuplrQuotationItemDistr.TargetAmount,
      R_CntrlSuplrQuotationItemDistr.PurgDocItemDistributionStatus,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurgDocItmDistrLineDeltnCode'
      R_CntrlSuplrQuotationItemDistr.IsDeleted,
      R_CntrlSuplrQuotationItemDistr.PurgDocItmDistrLineDeltnCode,
      R_CntrlSuplrQuotationItemDistr.OrderQuantityUnit,
      R_CntrlSuplrQuotationItemDistr.DistributionType,
      R_CntrlSuplrQuotationItemDistr.DistrResponseMessageUUID,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurgDocItemDistrRelevanceCode'
      R_CntrlSuplrQuotationItemDistr.ItemDistributionIsRelevant,
      R_CntrlSuplrQuotationItemDistr.PurgDocItemDistrRelevanceCode,
      R_CntrlSuplrQuotationItemDistr.ReferenceHeaderDistributionKey,
      R_CntrlSuplrQuotationItemDistr.ProcurementHubSourceSystem,
      R_CntrlSuplrQuotationItemDistr.ProcmtHubPurchaseRequisition,
      R_CntrlSuplrQuotationItemDistr.ProcmtHubPurRequisitionItem,
      R_CntrlSuplrQuotationItemDistr.PurReqnReleaseStatus,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _CentralSupplierQuotation,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _CntrlSupplierQuotationItem

}
```
