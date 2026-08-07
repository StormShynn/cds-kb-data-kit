---
name: I_SALESORDERWITHOUTCHARGETP
description: Sales OrderWITHOUTCHARGETP
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - sales-order
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERWITHOUTCHARGETP

**Sales OrderWITHOUTCHARGETP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `ReferenceDistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `OverallDeliveryBlockStatus` |  | |  |  |  |  |
| `OverallDeliveryStatus` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `SlsOrdWthoutChrgApprvlReason` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `SalesOrderWithoutChargeDate` |  | |  |  |  |  |
| `SalesDocumentCreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'SalesOrderWithoutCharge',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrderWithoutCharge']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['SalesOrderWithoutCharge'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesOrderWithoutChargeTP
  provider contract transactional_interface
  as projection on R_SalesOrderWithoutChargeTP as SalesOrderWithoutCharge
{
  key SalesOrderWithoutCharge.SalesOrderWithoutCharge,

      SalesOrderWithoutCharge.SalesOrderWithoutChargeType,
      SalesOrderWithoutCharge.SalesOrganization,
      SalesOrderWithoutCharge.SoldToParty,
      SalesOrderWithoutCharge.DistributionChannel,
      SalesOrderWithoutCharge.ReferenceDistributionChannel,
      SalesOrderWithoutCharge.OrganizationDivision,
      SalesOrderWithoutCharge.SalesGroup,
      SalesOrderWithoutCharge.SalesOffice,
      SalesOrderWithoutCharge.SalesDistrict,
      SalesOrderWithoutCharge.PurchaseOrderByCustomer,
      SalesOrderWithoutCharge.CustomerPurchaseOrderType,
      SalesOrderWithoutCharge.CustomerPurchaseOrderDate,
      SalesOrderWithoutCharge.CustomerGroup,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrderWithoutCharge.TotalNetAmount,
      SalesOrderWithoutCharge.TransactionCurrency,
      SalesOrderWithoutCharge.SDDocumentReason,
      SalesOrderWithoutCharge.PricingDate,
      SalesOrderWithoutCharge.FixedValueDate,
      SalesOrderWithoutCharge.CustomerPaymentTerms,
      SalesOrderWithoutCharge.PaymentMethod,
      SalesOrderWithoutCharge.OverallDeliveryBlockStatus,
      SalesOrderWithoutCharge.OverallDeliveryStatus,
      SalesOrderWithoutCharge.HdrGeneralIncompletionStatus,
      SalesOrderWithoutCharge.OvrlItmGeneralIncompletionSts,
      SalesOrderWithoutCharge.SalesDocApprovalStatus,
      SalesOrderWithoutCharge.OverallChmlCmplncStatus,
      SalesOrderWithoutCharge.OverallDangerousGoodsStatus,
      SalesOrderWithoutCharge.OverallSafetyDataSheetStatus,
      SalesOrderWithoutCharge.OverallTrdCmplncEmbargoSts,
      SalesOrderWithoutCharge.OvrlTrdCmplncSnctndListChkSts,
      SalesOrderWithoutCharge.OvrlTrdCmplncLegalCtrlChkSts,
      SalesOrderWithoutCharge.ControllingArea,
      SalesOrderWithoutCharge.RequestedDeliveryDate,
      SalesOrderWithoutCharge.ShippingCondition,
      SalesOrderWithoutCharge.CompleteDeliveryIsDefined,
      SalesOrderWithoutCharge.ShippingType,
      SalesOrderWithoutCharge.DeliveryBlockReason,
      SalesOrderWithoutCharge.HeaderBillingBlockReason,
      SalesOrderWithoutCharge.SlsOrdWthoutChrgApprvlReason,
      SalesOrderWithoutCharge.IncotermsClassification,
      SalesOrderWithoutCharge.IncotermsLocation1,
      SalesOrderWithoutCharge.IncotermsLocation2,
      SalesOrderWithoutCharge.IncotermsVersion,
      SalesOrderWithoutCharge.ReferenceSDDocument,
      SalesOrderWithoutCharge.ReferenceSDDocumentCategory,
      SalesOrderWithoutCharge.AccountingDocExternalReference,
      SalesOrderWithoutCharge.OverallSDProcessStatus,
      SalesOrderWithoutCharge.OverallSDDocumentRejectionSts,
      SalesOrderWithoutCharge.TotalBlockStatus, 
      SalesOrderWithoutCharge.OverallSDDocReferenceStatus,           

      SalesOrderWithoutCharge.SalesOrderWithoutChargeDate,
      SalesOrderWithoutCharge.SalesDocumentCreationDateTime,
      SalesOrderWithoutCharge.LastChangeDateTime,
      SalesOrderWithoutCharge.CreatedByUser,
      SalesOrderWithoutCharge.CreationDate,
      SalesOrderWithoutCharge.CreationTime,
      SalesOrderWithoutCharge.LastChangedByUser,
      SalesOrderWithoutCharge.LastChangeDate,

      /* Compositions */
      _Item    : redirected to composition child I_SlsOrderWithoutChargeItemTP,
      _Partner : redirected to composition child I_SlsOrdWithoutChargePartnerTP,
      _Text    : redirected to composition child I_SalesOrderWithoutChrgTextTP
}
```
