---
name: I_SERVICEORDERTP
description: Service OrderTP
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SERVICEORDERTP

**Service OrderTP**

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
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceOrderType` | `ServiceOrderType` |
| `ServiceOrderUUID` | `ServiceOrderUUID` |
| `ServiceOrderDescription` | `ServiceOrderDescription` |
| `Language` | `Language` |
| `PostingDate` | `PostingDate` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
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
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `ServiceOrganization` | `ServiceOrganization` |
| `RespyMgmtServiceTeam` | `RespyMgmtServiceTeam` |
| `RespyMgmtGlobalTeamID` | `RespyMgmtGlobalTeamID` |
| `ServiceOrderIsNew` | `ServiceOrderIsNew` |
| `ServiceOrderIsInProcess` | `ServiceOrderIsInProcess` |
| `ServiceOrderIsReleased` | `ServiceOrderIsReleased` |
| `ServiceOrderIsCompleted` | `ServiceOrderIsCompleted` |
| `ServiceOrderIsRejected` | `ServiceOrderIsRejected` |
| `ServiceOrderStatus` | `ServiceOrderStatus` |
| `SrvcOrdReldForBillingStatus` | `SrvcOrdReldForBillingStatus` |
| `SrvcOrdBillingStatus` | `SrvcOrdBillingStatus` |
| `ServiceOrderHasError` | `ServiceOrderHasError` |
| `SrvcDocTransferStatus` | `SrvcDocTransferStatus` |
| `SrvcOrdExecutionStatus` | `SrvcOrdExecutionStatus` |
| `SrvcOrdCreditStatus` | `SrvcOrdCreditStatus` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `ErlstRequestedDeliveryDateTime` | `ErlstRequestedDeliveryDateTime` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocGrossAmount` | `} ServiceDocGrossAmount` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `ServiceDocTaxAmount` | `} ServiceDocTaxAmount` |
| `PricingDocument` | `PricingDocument` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `ServiceOrderRejectionReason` | `ServiceOrderRejectionReason` |
| `SrvcOrdExtReference` | `SrvcOrdExtReference` |
| `ReferenceServiceContract` | `ReferenceServiceContract` |
| `RefServiceOrderTemplate` | `RefServiceOrderTemplate` |
| `ReferenceServiceQtan` | `ReferenceServiceQtan` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `FSMServiceCall` | `FSMServiceCall` |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_SoldToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_ServiceOrganizationOrgUnit_2` | *Association* |
| `_PaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_Confirmation` | *Association* |
| `_ServiceOrderItemTP` | *Association* |
| `_SrvcOrdPartnerTP` | *Association* |
| `_SrvcOrdReferenceObjectTP` | *Association* |
| `_SrvcOrdPriceElementTP` | *Association* |
| `_SrvcOrdUserStatusTP` | *Association* |
| `_SrvcOrdAppointmentTP` | *Association* |
| `_SrvcOrdDurationTP` | *Association* |
| `_SrvcOrdFUPSrvcConfTP` | *Association* |
| `_SrvcOrdFUPBillgDocTP` | *Association* |
| `_SrvcOrdFUPPurchaseOrderTP` | *Association* |
| `_SrvcOrdFUPPurReqnTP` | *Association* |
| `_SrvcOrdFUPSrvcEntrSheetTP` | *Association* |
| `_SrvcOrdFUPSuplrInvcTP` | *Association* |
| `_SrvcOrdFUPMaintOrdTP` | *Association* |
| `_SrvcOrdLongTextTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@ObjectModel: {
   sapObjectNodeType.name: 'ServiceOrder',
   representativeKey: 'ServiceOrder',
   semanticKey: ['ServiceOrder'],
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ServiceOrderTP
  provider contract transactional_interface
  as projection on R_ServiceOrderTP as _ServiceOrderTP
{

      // Administrative Fields
  key ServiceOrder,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceOrderType,
      ServiceOrderUUID,
      ServiceOrderDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      // Partners
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      SEPAMandate,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,

      // Organizational Data
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      //these feilds are only ON PREMISE
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,

      RespyMgmtServiceTeam,
      RespyMgmtGlobalTeamID,

      // Statuses
      ServiceOrderIsNew,
      ServiceOrderIsInProcess,
      ServiceOrderIsReleased,
      ServiceOrderIsCompleted,
      @Semantics.booleanIndicator
      ServiceOrderIsRejected,
      ServiceOrderStatus,
      SrvcOrdReldForBillingStatus,
      SrvcOrdBillingStatus,
      @Semantics.booleanIndicator
      ServiceOrderHasError,
      SrvcDocTransferStatus,
      SrvcOrdExecutionStatus,
      SrvcOrdCreditStatus,

      // Dates and Durations
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ErlstRequestedDeliveryDateTime,

      // Service Specific Fields
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      // Pricing Fields
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      PricingDocument,

      // Sales Fields
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceOrderRejectionReason,

      // Reference Documents
      SrvcOrdExtReference,
      ReferenceServiceContract,
      RefServiceOrderTemplate,
      ReferenceServiceQtan,
      //      ReferenceInHouseRepair,
      //      ReferenceInHouseRepairItem,

      /* Associations */

      // Administrative
      _ServiceObjType,
      _ServiceDocumentType,

      WBSElementExternalID,
      FSMServiceCall,

      // Partners
      _SoldToParty,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _ContactPerson,
      _RespEmployee,

      // Organizational Data
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,

      _SalesOrganizationOrgUnit_2,
      _SalesOfficeOrgUnit_2,
      _SalesGroupOrgUnit_2,
      _ServiceOrganizationOrgUnit_2,

      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      // Pricing
      _TransactionCurrency,
      // ServiceSpecific fields
      _ServiceDocumentPriority,
      // Status
      _SrvcDocumentRejectionReason,
      // Reference Documents
      _Confirmation,

      /* Compositions */

      _ServiceOrderItemTP        : redirected to composition child I_ServiceOrderItemTP,
      _SrvcOrdPartnerTP          : redirected to composition child I_SrvcOrdPartnerTP,
      _SrvcOrdReferenceObjectTP  : redirected to composition child I_SrvcOrdReferenceObjectTP,
      _SrvcOrdPriceElementTP     : redirected to composition child I_SrvcOrdPriceElementTP,
      _SrvcOrdUserStatusTP       : redirected to composition child I_SrvcOrdUserStatusTP,
      _SrvcOrdAppointmentTP      : redirected to composition child I_SrvcOrdAppointmentTP,
      _SrvcOrdDurationTP         : redirected to composition child I_SrvcOrdDurationTP,
      _SrvcOrdFUPSrvcConfTP      : redirected to composition child I_SrvcOrdFUPSrvcConfTP,
      _SrvcOrdFUPBillgDocTP      : redirected to composition child I_SrvcOrdFUPBillgDocTP,
      _SrvcOrdFUPPurchaseOrderTP : redirected to composition child I_SrvcOrdFUPPurchaseOrderTP,
      _SrvcOrdFUPPurReqnTP       : redirected to composition child I_SrvcOrdFUPPurReqnTP,
      _SrvcOrdFUPSrvcEntrSheetTP : redirected to composition child I_SrvcOrdFUPSrvcEntrSheetTP,
      _SrvcOrdFUPSuplrInvcTP     : redirected to composition child I_SrvcOrdFUPSuplrInvcTP,
      @API.element.releaseState: #DEPRECATED
      _SrvcOrdFUPMaintOrdTP      : redirected to composition child I_SrvcOrdFUPMaintOrdTP,
      _SrvcOrdLongTextTP         : redirected to composition child I_SrvcOrdLongTextTP


}
```
