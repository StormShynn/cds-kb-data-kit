---
name: I_SERVICEORDERITEMTP
description: Service OrderITEMTP
app_component: CRM-S4-SRV-SVO-2CL
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
  - service-order
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SERVICEORDERITEMTP

**Service OrderITEMTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceOrder` | `ServiceOrder` |
| key `ServiceOrderItem` | `ServiceOrderItem` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `ServiceOrderItemCategory` | `ServiceOrderItemCategory` |
| `ServiceOrderItemUUID` | `ServiceOrderItemUUID` |
| `ParentServiceOrderItem` | `ParentServiceOrderItem` |
| `ServiceOrderItemDescription` | `ServiceOrderItemDescription` |
| `Language` | `Language` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Product` | `Product` |
| `Quantity` | `Quantity` |
| `QuantityUnit` | `QuantityUnit` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SEPAMandate` | `SEPAMandate` |
| `SrvcSEPAMandateRelevance` | `SrvcSEPAMandateRelevance` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `ExecutingServiceEmployee` | `ExecutingServiceEmployee` |
| `ServicePerformer` | `ServicePerformer` |
| `RespyMgmtServiceTeam` | `RespyMgmtServiceTeam` |
| `RespyMgmtGlobalTeamID` | `RespyMgmtGlobalTeamID` |
| `ServiceOrderItemIsNew` | `ServiceOrderItemIsNew` |
| `ServiceOrderItemIsInProcess` | `ServiceOrderItemIsInProcess` |
| `ServiceOrderItemIsReleased` | `ServiceOrderItemIsReleased` |
| `ServiceOrderItemIsCompleted` | `ServiceOrderItemIsCompleted` |
| `ServiceOrderItemStatus` | `ServiceOrderItemStatus` |
| `SrvcOrdItmReldForBillgStatus` | `SrvcOrdItmReldForBillgStatus` |
| `ServiceOrderItemBillingStatus` | `ServiceOrderItemBillingStatus` |
| `ServiceOrderItemIsRejected` | `ServiceOrderItemIsRejected` |
| `ServiceOrderItemHasError` | `ServiceOrderItemHasError` |
| `SrvcDocItemTransferStatus` | `SrvcDocItemTransferStatus` |
| `SrvcOrdItemExecutionStatus` | `SrvcOrdItemExecutionStatus` |
| `SrvcOrdItemCreditStatus` | `SrvcOrdItemCreditStatus` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `ServiceFirstResponseByDateTime` | `ServiceFirstResponseByDateTime` |
| `SrvcDocItemSLADueByDateTime` | `SrvcDocItemSLADueByDateTime` |
| `PlannedServiceStartDateTime` | `PlannedServiceStartDateTime` |
| `PlannedServiceEndDateTime` | `PlannedServiceEndDateTime` |
| `ServiceDuration` | `} ServiceDuration` |
| `ServiceDurationUnit` | `ServiceDurationUnit` |
| `SrvcContrDetnIsSpprsd` | `SrvcContrDetnIsSpprsd` |
| `TimeSheetOvertimeCategory` | `TimeSheetOvertimeCategory` |
| `ProfitCenter` | `ProfitCenter` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `ServiceDocumentItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `ServiceDocumentItemTaxAmount` | `} ServiceDocumentItemTaxAmount` |
| `BillableControl` | `BillableControl` |
| `ServiceOrdItemRejectionReason` | `ServiceOrdItemRejectionReason` |
| `SrvcOrdExtReference` | `SrvcOrdExtReference` |
| `SrvcOrdItemExtReference` | `SrvcOrdItemExtReference` |
| `ReferenceServiceContract` | `ReferenceServiceContract` |
| `ReferenceServiceContractItem` | `ReferenceServiceContractItem` |
| `RefServiceOrderTemplate` | `RefServiceOrderTemplate` |
| `RefServiceOrderTemplateItem` | `RefServiceOrderTemplateItem` |
| `ReferenceServiceQtan` | `ReferenceServiceQtan` |
| `ReferenceServiceQtanItem` | `ReferenceServiceQtanItem` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `FSMServiceActivity` | `FSMServiceActivity` |
| `_Product` | *Association* |
| `_RespEmployee` | *Association* |
| `_BillableControl` | *Association* |
| `_PaymentTerms` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_ServiceOrderTP` | *Association* |
| `_SrvcOrdItemReferenceObjectTP` | *Association* |
| `_SrvcOrdItmPartnerTP` | *Association* |
| `_SrvcOrdItemPriceElementTP` | *Association* |
| `_SrvcOrdItmUserStatusTP` | *Association* |
| `_SrvcOrdItemAppointmentTP` | *Association* |
| `_SrvcOrdItemDurationTP` | *Association* |
| `_SrvcOrdItmFUPBillgDocTP` | *Association* |
| `_SrvcOrdItmFUPEntrySheetTP` | *Association* |
| `_SrvcOrdItmFUPPurchaseOrderTP` | *Association* |
| `_SrvcOrdItmFUPPurReqnTP` | *Association* |
| `_SrvcOrdItmFUPSrvcConfTP` | *Association* |
| `_SrvcOrdItmFUPSuplrInvcTP` | *Association* |
| `_SrvcOrdItmFUPMaintOrdTP` | *Association* |
| `_SrvcOrdItemLongTextTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Service Order Item - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_ServiceOrderItemTP
  as projection on R_ServiceOrderItemTP as _ServiceOrderItemTP
{

      // Administrative Fields

  key ServiceOrder,
  key ServiceOrderItem,
      ServiceDocumentItemObjectType,
      ServiceOrderItemCategory,
      ServiceOrderItemUUID,
      ParentServiceOrderItem,
      ServiceOrderItemDescription,
      Language,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,

      // Item Fields
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      QuantityUnit,

      // Partners
      SoldToParty,
      ShipToParty,
      BillToParty,
      PayerParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      PaymentMethod,
      SEPAMandate,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      ContactPersonBusinessPartnerId,
      RespEmployeeBusinessPartnerId,
      ExecutingServiceEmployee,
      ServicePerformer,

      // Organizational Data
      RespyMgmtServiceTeam,
      // RespyMgmtServiceTeamName,
      RespyMgmtGlobalTeamID,

      // Statuses
      ServiceOrderItemIsNew,
      ServiceOrderItemIsInProcess,
      ServiceOrderItemIsReleased,
      ServiceOrderItemIsCompleted,
      ServiceOrderItemStatus,
      SrvcOrdItmReldForBillgStatus,
      ServiceOrderItemBillingStatus,
      @Semantics.booleanIndicator
      ServiceOrderItemIsRejected,
      @Semantics.booleanIndicator
      ServiceOrderItemHasError,
      SrvcDocItemTransferStatus,
      SrvcOrdItemExecutionStatus,
      SrvcOrdItemCreditStatus,

      // Dates and Durations
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ServiceFirstResponseByDateTime,
      SrvcDocItemSLADueByDateTime,
      PlannedServiceStartDateTime,
      PlannedServiceEndDateTime,
      //ErlstRequestedDeliveryDateTime,

      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDuration,
      ServiceDurationUnit,

      //SC Determination flag
      SrvcContrDetnIsSpprsd,

      TimeSheetOvertimeCategory,
      ProfitCenter,

      // Pricing Fields
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @ObjectModel.foreignKey.association: '_BillableControl'
      BillableControl,

      // Sales Fields
      ServiceOrdItemRejectionReason,

      // Reference Documents
      SrvcOrdExtReference,
      SrvcOrdItemExtReference,
      ReferenceServiceContract,
      ReferenceServiceContractItem,
      RefServiceOrderTemplate,
      RefServiceOrderTemplateItem,
      ReferenceServiceQtan,
      ReferenceServiceQtanItem,
      WBSElementExternalID,
      // FSM Field
      FSMServiceActivity,


      /* Associations */
      _Product,
      _RespEmployee,
      _BillableControl,
      _PaymentTerms,

      _SrvcSEPAMandateRelevance,

      _ServiceOrderTP               : redirected to parent I_ServiceOrderTP,

      /* Compositions */
      _SrvcOrdItemReferenceObjectTP : redirected to composition child I_SrvcOrdItemReferenceObjectTP,
      _SrvcOrdItmPartnerTP          : redirected to composition child I_SrvcOrdItmPartnerTP,
      _SrvcOrdItemPriceElementTP    : redirected to composition child I_SrvcOrdItemPriceElementTP,
      _SrvcOrdItmUserStatusTP       : redirected to composition child I_SrvcOrdItemUserStatusTP,
      _SrvcOrdItemAppointmentTP     : redirected to composition child I_SrvcOrdItemAppointmentTP,
      _SrvcOrdItemDurationTP        : redirected to composition child I_SrvcOrdItemDurationTP,
      _SrvcOrdItmFUPBillgDocTP      : redirected to composition child I_SrvcOrdItmFUPBillgDocTP,
      _SrvcOrdItmFUPEntrySheetTP    : redirected to composition child I_SrvcOrdItmFUPSrvcEntrSheetTP,
      _SrvcOrdItmFUPPurchaseOrderTP : redirected to composition child I_SrvcOrdItmFUPPurchaseOrderTP,
      _SrvcOrdItmFUPPurReqnTP       : redirected to composition child I_SrvcOrdItmFUPPurReqnTP,
      _SrvcOrdItmFUPSrvcConfTP      : redirected to composition child I_SrvcOrdItmFUPSrvcConfTP,
      _SrvcOrdItmFUPSuplrInvcTP     : redirected to composition child I_SrvcOrdItmFUPSuplrInvcTP,
      @API.element.releaseState: #DEPRECATED
      _SrvcOrdItmFUPMaintOrdTP      : redirected to composition child I_SrvcOrdItmFUPMaintOrdTP,
      _SrvcOrdItemLongTextTP        : redirected to composition child I_SrvcOrdItemLongTextTP

}
```
