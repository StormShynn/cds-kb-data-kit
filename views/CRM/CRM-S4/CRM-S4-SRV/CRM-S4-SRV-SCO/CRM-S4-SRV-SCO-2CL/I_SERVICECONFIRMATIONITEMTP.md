---
name: I_SERVICECONFIRMATIONITEMTP
description: Serviceconfirmationitemtp
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - service
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SERVICECONFIRMATIONITEMTP

**Serviceconfirmationitemtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceConfirmation` | `ServiceConfirmation` |
| key `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `ServiceConfItemCategory` | `ServiceConfItemCategory` |
| `ServiceConfirmationItemUUID` | `ServiceConfirmationItemUUID` |
| `ParentServiceConfItem` | `ParentServiceConfItem` |
| `ServiceConfItemDescription` | `ServiceConfItemDescription` |
| `Language` | `Language` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Product` | `Product` |
| `Quantity` | `} Quantity` |
| `QuantityUnit` | `QuantityUnit` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `ExecutingServiceEmployee` | `ExecutingServiceEmployee` |
| `ServicePerformer` | `ServicePerformer` |
| `RespyMgmtServiceTeam` | `RespyMgmtServiceTeam` |
| `RespyMgmtGlobalTeamID` | `RespyMgmtGlobalTeamID` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SEPAMandate` | `SEPAMandate` |
| `SrvcSEPAMandateRelevance` | `SrvcSEPAMandateRelevance` |
| `SrvcConfItemIsNew` | `SrvcConfItemIsNew` |
| `ServiceConfItemIsCompleted` | `ServiceConfItemIsCompleted` |
| `ServiceConfirmationItemStatus` | `ServiceConfirmationItemStatus` |
| `SrvcConfItmReldForBillgStatus` | `SrvcConfItmReldForBillgStatus` |
| `SrvcConfItemBillingStatus` | `SrvcConfItemBillingStatus` |
| `SrvcConfItemHasError` | `SrvcConfItemHasError` |
| `ActualServiceStartDateTime` | `ActualServiceStartDateTime` |
| `ActualServiceEndDateTime` | `ActualServiceEndDateTime` |
| `ActualServiceDuration` | `} ActualServiceDuration` |
| `ActualServiceDurationUnit` | `ActualServiceDurationUnit` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `TimeSheetOvertimeCategory` | `TimeSheetOvertimeCategory` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `ServiceDocumentItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `ServiceDocumentItemTaxAmount` | `} ServiceDocumentItemTaxAmount` |
| `BillableControl` | `BillableControl` |
| `SrvcConfItemExtReference` | `SrvcConfItemExtReference` |
| `SrvcConfExtReference` | `SrvcConfExtReference` |
| `ReferenceServiceOrder` | `ReferenceServiceOrder` |
| `ReferenceServiceOrderItem` | `ReferenceServiceOrderItem` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `_Product` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_ActualServiceDurationUnit` | *Association* |
| `_ServiceDocOvertimeCat` | *Association* |
| `_SrvcConfItmStatus` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_BillableControl` | *Association* |
| `_ServiceConfirmationTP` | *Association* |
| `_SrvcConfItemPriceElementTP` | *Association* |
| `_SrvcConfItemPartnerTP` | *Association* |
| `_SrvcConfItemUserStatusTP` | *Association* |
| `_SrvcConfItemRefObjTP` | *Association* |
| `_SrvcConfItemAppointmentTP` | *Association* |
| `_SrvcConfItemDurationTP` | *Association* |
| `_SrvcConfItmFUPBillgDocTP` | *Association* |
| `_SrvcConfItmFUPTimeSheetTP` | *Association* |
| `_SrvcConfItemLongTextTP` | *Association* |
| `_SrvcConfItemSerialNumberTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Item - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY


@ObjectModel: {
   sapObjectNodeType.name: 'ServiceConfirmationItem',        
   usageType: { dataClass: #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L }
 }                 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceConfirmationItemTP
  as projection on R_ServiceConfirmationItemTP as _ServiceConfirmationItemTP
{

      //Administrative fields
  key ServiceConfirmation,
  key ServiceConfirmationItem,
      ServiceDocumentItemObjectType,
      ServiceConfItemCategory,
      ServiceConfirmationItemUUID,
      ParentServiceConfItem,
      ServiceConfItemDescription,
      Language,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,

      //Item fields
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Semantics: { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity,
      QuantityUnit,

      //Partners
      SoldToParty,
      ShipToParty,
      BillToParty,
      PayerParty,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,
      ExecutingServiceEmployee,
      ServicePerformer,

      //Organizational data
      RespyMgmtServiceTeam,
      //RespyMgmtServiceTeamName,
      RespyMgmtGlobalTeamID,

      PaymentTerms,
      PaymentMethod,
      SEPAMandate,
      SrvcSEPAMandateRelevance,

      //Status
      SrvcConfItemIsNew,
      ServiceConfItemIsCompleted,
      ServiceConfirmationItemStatus,
      SrvcConfItmReldForBillgStatus,
      SrvcConfItemBillingStatus,
      @Semantics.booleanIndicator
      SrvcConfItemHasError,

      //      SrvcConfItmCndnRateAmount,
      //      SrvcConfItmCndnRateCurrency,

      //Dates and Durations
      ActualServiceStartDateTime,
      ActualServiceEndDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      ActualServiceDurationUnit,

      //      ErlstRequestedDeliveryDateTime,
      ServicesRenderedDate,

      //Service specific fields
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      TimeSheetOvertimeCategory,

      //Pricing fields
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @ObjectModel.foreignKey.association: '_BillableControl'
      BillableControl,

      //Reference documents
      SrvcConfItemExtReference,
      SrvcConfExtReference,
      ReferenceServiceOrder,
      ReferenceServiceOrderItem,

      WBSElementExternalID,

      /* Associations */

      _Product,
      _ContactPerson,
      _RespEmployee,
      _ActualServiceDurationUnit,
      _ServiceDocOvertimeCat,
      _SrvcConfItmStatus,
      _TransactionCurrency,
      _BillableControl,

      /* Compositions */

      _ServiceConfirmationTP      : redirected to parent I_ServiceConfirmationTP,
      _SrvcConfItemPriceElementTP : redirected to composition child I_SrvcConfItemPriceElementTP,
      _SrvcConfItemPartnerTP      : redirected to composition child I_SrvcConfItemPartnerTP,
      _SrvcConfItemUserStatusTP   : redirected to composition child I_SrvcConfItemUserStatusTP,
      _SrvcConfItemRefObjTP       : redirected to composition child I_SrvcConfItemRefObjectTP,
      _SrvcConfItemAppointmentTP  : redirected to composition child I_SrvcConfItemAppointmentTP,
      _SrvcConfItemDurationTP     : redirected to composition child I_SrvcConfItemDurationTP,
      _SrvcConfItmFUPBillgDocTP   : redirected to composition child I_SrvcConfItmFUPBillgDocTP,
      _SrvcConfItmFUPTimeSheetTP  : redirected to composition child I_SrvcConfItmFUPTimeSheetTP,
      _SrvcConfItemLongTextTP     : redirected to composition child I_SrvcConfItemLongTextTP,
      _SrvcConfItemSerialNumberTP : redirected to composition child I_SrvcConfItemSerialNumberTP

}
```
