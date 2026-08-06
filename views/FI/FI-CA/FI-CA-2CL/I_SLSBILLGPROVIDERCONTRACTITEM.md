---
name: I_SLSBILLGPROVIDERCONTRACTITEM
description: Slsbillgprovidercontractitem
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_SLSBILLGPROVIDERCONTRACTITEM

**Slsbillgprovidercontractitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesBillingProviderContract` | `ProviderContract` |
| key `SlsBillgProviderContractItem` | `ProviderContractItem` |
| `CAProviderContractItemUUID` | `CAProviderContractItemUUID` |
| `CAPrvdrContrParentItemUUID` | `CAPrvdrContrParentItemUUID` |
| `CAProviderContractStatus` | `CAProviderContractStatus` |
| `CAProviderContractItemText` | `CAProviderContractItemText` |
| `CASubscriptionChargeType` | `CASubscriptionChargeType` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CAPrvdrContrItmValidFromDteTme` | `CAPrvdrContrItmValidFromDteTme` |
| `CAPrvdrContrItmValidToDateTime` | `CAPrvdrContrItmValidToDateTime` |
| `CAPrvdrContrItemCanclnDateTime` | `CAPrvdrContrItemCanclnDateTime` |
| `PrvdrContrItmWthdrwlDateTime` | `PrvdrContrItmWthdrwlDateTime` |
| `CAStartOfDurationDateTime` | `CAStartOfDurationDateTime` |
| `CAEndOfDurationDateTime` | `CAEndOfDurationDateTime` |
| `CAProduct` | `CAProduct` |
| `ProductConfiguration` | `ProductConfiguration` |
| `SoldProduct` | `SoldProduct` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `CAPrvdrContrSalesAreaAttrib1` | `CAPrvdrContrSalesAreaAttrib1` |
| `CAPrvdrContrSalesAreaAttrib2` | `CAPrvdrContrSalesAreaAttrib2` |
| `CompanyCode` | `CompanyCode` |
| `BusinessArea` | `BusinessArea` |
| `Segment` | `Segment` |
| `ProfitCenter` | `ProfitCenter` |
| `CAStandardDivision` | `CAStandardDivision` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `InternalOrder` | `InternalOrder` |
| `EBRRResultAnalysisInternalID` | `EBRRResultAnalysisInternalID` |
| `EBRRIsBundleActive` | `EBRRIsBundleActive` |
| `_PrvdrContr` | *Association* |
| `_Product` | *Association* |
| `_BusinessArea` | *Association* |
| `_CompCode` | *Association* |
| `_Division` | *Association* |
| `_Segment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_SalesBillingProviderContract` | [1] |
| `_Product` | `I_Product` | [0..1] |
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |

## Source Code

```abap
/*@AbapCatalog.viewEnhancementCategory: [#NONE]*/

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED


@EndUserText.label: 'Sales Billing Provider Contract Item'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER

@Analytics.technicalName: 'ISlsBlgPrvCtrItm'
@ObjectModel.modelingPattern: #NONE

@VDM.viewType: #COMPOSITE

define view entity I_SlsBillgProviderContractItem
  as select from I_ProviderContractItem as _SlsBillgProviderContractItem
  association [1]    to I_SalesBillingProviderContract as _PrvdrContr   on  $projection.SalesBillingProviderContract = _PrvdrContr.SalesBillingProviderContract
  association [0..1] to I_Product                      as _Product      on  $projection.CAProduct = _Product.Product
  association [1..1] to E_CAProviderContractItem       as _PCoExtension on  $projection.SalesBillingProviderContract = _PCoExtension.CAProviderContract
                                                                        and $projection.SlsBillgProviderContractItem = _PCoExtension.CAProviderContractItemNumber
{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract     as SalesBillingProviderContract,

  key ProviderContractItem as SlsBillgProviderContractItem,

      /* General Data */
      CAProviderContractItemUUID,
      CAPrvdrContrParentItemUUID,
      CAProviderContractStatus,
      CAProviderContractItemText,
      CASubscriptionChargeType,

      /*-- Administrative Data */
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      /*-- Timestamps */
      /*---- Validity */
      CAPrvdrContrItmValidFromDteTme,
      CAPrvdrContrItmValidToDateTime,
      /*---- Cancellation */
      CAPrvdrContrItemCanclnDateTime,
      /*---- Withdrawal */
      PrvdrContrItmWthdrwlDateTime,
      /*---- Duration */
      CAStartOfDurationDateTime,
      CAEndOfDurationDateTime,

      /* Product Information */
      CAProduct,
      ProductConfiguration,
      SoldProduct,

      /*  Customer References (PEPPOL) */
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,

      /* Solution Order */
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      /* Organizational Data */
      SalesOrganization,
      DistributionChannel,
      Division,
      CAPrvdrContrSalesAreaAttrib1,
      CAPrvdrContrSalesAreaAttrib2,

      /* Derived Account Assigments */
      CompanyCode,
      BusinessArea,
      Segment,
      ProfitCenter,
      CAStandardDivision,

      /* Other Account Assigments */
      WBSElementInternalID,
      InternalOrder,

      /* Revenue Recognition */
      EBRRResultAnalysisInternalID,
      EBRRIsBundleActive,

      /* Associations */
      _BusinessArea,
      _CompCode,
      _Division,
      _PrvdrContr,
      _Segment,
      _Product
}
where
  _SlsBillgProviderContractItem._PrvdrContr.CAProviderContractCategory = '1'
```
