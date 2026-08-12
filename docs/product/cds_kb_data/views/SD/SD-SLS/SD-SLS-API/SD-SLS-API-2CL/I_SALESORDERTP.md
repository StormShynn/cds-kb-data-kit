---
name: I_SALESORDERTP
description: "Sales OrderTP"
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERTP

**Sales OrderTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `ReferenceDistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `SlsDocIsRlvtForProofOfDeliv` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `SalesOrderApprovalReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `CustomerCreditAccount` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallDeliveryBlockStatus` |  | |  |  |  |  |
| `OverallBillingBlockStatus` |  | |  |  |  |  |
| `OverallDeliveryStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `SalesOrderDownPaymentStatus` |  | |  |  |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `SalesOrderDate` |  | |  |  |  |  |
| `SalesOrderProcessingType` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `SalesDocumentCreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
      name: 'SalesOrder'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['SalesOrder'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesOrderTP
provider contract transactional_interface
  as projection on R_SalesOrderTP as SalesOrder  
{
  key SalesOrder.SalesOrder,

      SalesOrder.SalesOrderType,
      SalesOrder.SoldToParty,
      SalesOrder.SalesOrganization,
      SalesOrder.DistributionChannel,
      SalesOrder.ReferenceDistributionChannel,
      SalesOrder.OrganizationDivision,
      SalesOrder.SalesOffice,
      SalesOrder.SalesGroup,
      SalesOrder.SalesDistrict,
      SalesOrder.PurchaseOrderByCustomer,
      SalesOrder.CustomerPurchaseOrderType,
      SalesOrder.CustomerPurchaseOrderDate,
      SalesOrder.PurchaseOrderByShipToParty,
      SalesOrder.CustomerGroup,
      SalesOrder.AdditionalCustomerGroup1,
      SalesOrder.AdditionalCustomerGroup2,
      SalesOrder.AdditionalCustomerGroup3,
      SalesOrder.AdditionalCustomerGroup4,
      SalesOrder.AdditionalCustomerGroup5,
      SalesOrder.SDDocumentReason,
      SalesOrder.PricingDate,
      SalesOrder.ServicesRenderedDate,
      SalesOrder.BillingDocumentDate,
      SalesOrder.SDPricingProcedure,
      SalesOrder.CustomerPriceGroup,
      SalesOrder.PriceListType,
      SalesOrder.RequestedDeliveryDate,
      SalesOrder.DeliveryDateTypeRule,
      SalesOrder.ShippingCondition,
      SalesOrder.CompleteDeliveryIsDefined,
      SalesOrder.OrderCombinationIsAllowed,
      SalesOrder.SlsDocIsRlvtForProofOfDeliv,
      SalesOrder.ShippingType,
      SalesOrder.ReceivingPoint,
      SalesOrder.IncotermsClassification,
      SalesOrder.IncotermsVersion,
      SalesOrder.IncotermsLocation1,
      SalesOrder.IncotermsLocation2,
      SalesOrder.FixedValueDate, 
      SalesOrder.TaxDepartureCountry,
      SalesOrder.VATRegistrationCountry,     
      SalesOrder.HeaderBillingBlockReason,
      SalesOrder.DeliveryBlockReason,
      SalesOrder.SalesOrderApprovalReason,
      SalesOrder.CustomerPaymentTerms,
      SalesOrder.BillingCompanyCode,
      SalesOrder.PaymentMethod,
      SalesOrder.CustomerAccountAssignmentGroup,
      SalesOrder.TransactionCurrency,
      SalesOrder.AssignmentReference,
      SalesOrder.AccountingDocExternalReference,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrder.TotalNetAmount,

      SalesOrder.ReferenceSDDocument,
      SalesOrder.CustomerCreditAccount,
      SalesOrder.OverallSDProcessStatus,
      SalesOrder.OverallDeliveryBlockStatus,
      SalesOrder.OverallBillingBlockStatus,
      SalesOrder.OverallDeliveryStatus,
      SalesOrder.TotalCreditCheckStatus,
      SalesOrder.OverallSDDocumentRejectionSts,
      SalesOrder.TotalBlockStatus,
      SalesOrder.HdrGeneralIncompletionStatus,
      SalesOrder.OvrlItmGeneralIncompletionSts,
      SalesOrder.OverallSDDocReferenceStatus,
      SalesOrder.SalesDocApprovalStatus,
      SalesOrder.OverallChmlCmplncStatus,
      SalesOrder.OverallDangerousGoodsStatus,
      SalesOrder.OverallSafetyDataSheetStatus,
      SalesOrder.OverallTrdCmplncEmbargoSts,
      SalesOrder.OvrlTrdCmplncSnctndListChkSts,
      SalesOrder.OvrlTrdCmplncLegalCtrlChkSts,
      SalesOrder.SalesOrderDownPaymentStatus,
      SalesOrder.OverallOrdReltdBillgStatus,
      SalesOrder.BusinessSolutionOrder,
      SalesOrder.LastChangeDateTime,
      SalesOrder.SalesOrderDate,
      SalesOrder.SalesOrderProcessingType,
      SalesOrder.ControllingArea,
      SalesOrder.CreatedByUser,
      SalesOrder.CreationDate,
      SalesOrder.CreationTime,
      SalesOrder.SalesDocumentCreationDateTime,
      SalesOrder.LastChangedByUser,
      SalesOrder.LastChangeDate,
      SalesOrder.IsEUTriangularDeal,
      SalesOrder.ReferenceSDDocumentCategory,

      //Compositions
      _Item           : redirected to composition child I_SalesOrderItemTP,
      _Partner        : redirected to composition child I_SalesOrderPartnerTP,
      _Text           : redirected to composition child I_SalesOrderTextTP,
      _PricingElement : redirected to composition child I_SalesOrderPricingElementTP       
}
```
