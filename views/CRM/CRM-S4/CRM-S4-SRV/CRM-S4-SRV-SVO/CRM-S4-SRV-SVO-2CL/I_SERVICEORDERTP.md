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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceOrderType` |  | |  |  |  |  |
| `ServiceOrderUUID` |  | |  |  |  |  |
| `ServiceOrderDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `RespyMgmtServiceTeam` |  | |  |  |  |  |
| `RespyMgmtGlobalTeamID` |  | |  |  |  |  |
| `ServiceOrderIsNew` |  | |  |  |  |  |
| `ServiceOrderIsInProcess` |  | |  |  |  |  |
| `ServiceOrderIsReleased` |  | |  |  |  |  |
| `ServiceOrderIsCompleted` |  | |  |  |  |  |
| `ServiceOrderIsRejected` |  | |  |  |  |  |
| `ServiceOrderStatus` |  | |  |  |  |  |
| `SrvcOrdReldForBillingStatus` |  | |  |  |  |  |
| `SrvcOrdBillingStatus` |  | |  |  |  |  |
| `ServiceOrderHasError` |  | |  |  |  |  |
| `SrvcDocTransferStatus` |  | |  |  |  |  |
| `SrvcOrdExecutionStatus` |  | |  |  |  |  |
| `SrvcOrdCreditStatus` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ErlstRequestedDeliveryDateTime` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `ServiceOrderRejectionReason` |  | |  |  |  |  |
| `SrvcOrdExtReference` |  | |  |  |  |  |
| `ReferenceServiceContract` |  | |  |  |  |  |
| `RefServiceOrderTemplate` |  | |  |  |  |  |
| `ReferenceServiceQtan` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `FSMServiceCall` |  | |  |  |  |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_Confirmation` | | ✓ | | | | |
| `_ServiceOrderItemTP` | | ✓ | | | | |
| `_SrvcOrdPartnerTP` | | ✓ | | | | |
| `_SrvcOrdReferenceObjectTP` | | ✓ | | | | |
| `_SrvcOrdPriceElementTP` | | ✓ | | | | |
| `_SrvcOrdUserStatusTP` | | ✓ | | | | |
| `_SrvcOrdAppointmentTP` | | ✓ | | | | |
| `_SrvcOrdDurationTP` | | ✓ | | | | |
| `_SrvcOrdFUPSrvcConfTP` | | ✓ | | | | |
| `_SrvcOrdFUPBillgDocTP` | | ✓ | | | | |
| `_SrvcOrdFUPPurchaseOrderTP` | | ✓ | | | | |
| `_SrvcOrdFUPPurReqnTP` | | ✓ | | | | |
| `_SrvcOrdFUPSrvcEntrSheetTP` | | ✓ | | | | |
| `_SrvcOrdFUPSuplrInvcTP` | | ✓ | | | | |
| `_SrvcOrdFUPMaintOrdTP` | | ✓ | | | | |
| `_SrvcOrdLongTextTP` | | ✓ | | | | |

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
