---
name: I_SERVICECONFIRMATIONTP
description: "Serviceconfirmationtp"
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SERVICECONFIRMATIONTP

**Serviceconfirmationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |  |  |
| `ServiceConfirmationType` |  | |  |  |  |  |
| `ServiceConfirmationUUID` |  | |  |  |  |  |
| `ServiceConfirmationDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
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
| `ServiceConfirmationIsNew` |  | |  |  |  |  |
| `ServiceConfirmationIsCompleted` |  | |  |  |  |  |
| `ServiceConfirmationIsCanceled` |  | |  |  |  |  |
| `ServiceConfirmationStatus` |  | |  |  |  |  |
| `SrvcConfReldForBillingStatus` |  | |  |  |  |  |
| `SrvcConfBillingStatus` |  | |  |  |  |  |
| `ServiceConfirmationIsFinal` |  | |  |  |  |  |
| `ServiceConfirmationHasError` |  | |  |  |  |  |
| `SrvcDocTransferStatus` |  | |  |  |  |  |
| `SrvcDocRejectionStatus` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `SrvcConfExtReference` |  | |  |  |  |  |
| `ReferenceServiceOrder` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceConfirmationItemTP` | | ✓ | | | | |
| `_SrvcConfReferenceObjectTP` | | ✓ | | | | |
| `_SrvcConfPartnerTP` | | ✓ | | | | |
| `_SrvcConfUserStatusTP` | | ✓ | | | | |
| `_SrvcConfAppointmentTP` | | ✓ | | | | |
| `_SrvcConfDurationTP` | | ✓ | | | | |
| `_BillingDocumentFollowupTP` | | ✓ | | | | |
| `_TimeSheetFollowupTP` | | ✓ | | | | |
| `_SrvcConfLongTextTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation - TP'
@AccessControl: {
  authorizationCheck: #CHECK
}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel: {
   sapObjectNodeType.name: 'ServiceConfirmation',
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
   usageType: {           dataClass:      #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory:   #L }
              }

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ServiceConfirmationTP
  provider contract transactional_interface
  as projection on R_ServiceConfirmationTP as _ServiceConfirmationTP
{

       //Administrative Fields
  key  ServiceConfirmation,
       @ObjectModel.foreignKey.association: '_ServiceDocumentType'
       ServiceConfirmationType,
       ServiceConfirmationUUID,
       ServiceConfirmationDescription,
       Language,
       ServiceDocCreationDateTime,
       ServiceDocChangedDateTime,
       ServiceDocumentCreatedByUser,
       ServiceDocumentChangedByUser,
       @ObjectModel.foreignKey.association: '_ServiceObjType'
       ServiceObjectType,

       RequestedServiceStartDateTime,
       RequestedServiceEndDateTime,
       //       ErlstRequestedDeliveryDateTime,

       //Partners
       @ObjectModel.foreignKey.association: '_SoldToParty'
       SoldToParty,
       @ObjectModel.foreignKey.association: '_ShipToParty'
       ShipToParty,
       @ObjectModel.foreignKey.association: '_BillToParty'
       BillToParty,
       @ObjectModel.foreignKey.association: '_PayerParty'
       PayerParty,
       @ObjectModel.foreignKey.association: '_ContactPerson'
       ContactPersonBusinessPartnerId,
       @ObjectModel.foreignKey.association: '_RespEmployee'
       RespEmployeeBusinessPartnerId,
       @ObjectModel.foreignKey.association: '_ServiceEmployee'
       ServiceEmployee,

       //Organizational Data
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
       //CRM Org units
       //these feilds are only ON PREMISE

       @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
       SalesOrganizationOrgUnitID,
       @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
       SalesOfficeOrgUnitID,
       @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
       SalesGroupOrgUnitID,
       @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
       ServiceOrganization,

       //Service team fields
       RespyMgmtServiceTeam,
       //RespyMgmtServiceTeamName,
       RespyMgmtGlobalTeamID,

       //Status
       ServiceConfirmationIsNew,
       ServiceConfirmationIsCompleted,
       ServiceConfirmationIsCanceled,
       ServiceConfirmationStatus,
       SrvcConfReldForBillingStatus,
       SrvcConfBillingStatus,

       ServiceConfirmationIsFinal,

       @Semantics.booleanIndicator
       ServiceConfirmationHasError,
       SrvcDocTransferStatus,
       SrvcDocRejectionStatus,

       //Service specific fields
       @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
       ServiceDocumentPriority,

       //Pricing fields
       @ObjectModel.foreignKey.association: '_TransactionCurrency'
       TransactionCurrency,
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       ServiceDocGrossAmount,
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       ServiceDocNetAmount,
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       ServiceDocTaxAmount,
       PricingDocument,

       //Sales fields
       PurchaseOrderByCustomer,
       CustomerPurchaseOrderDate,

       //Reference documents
       SrvcConfExtReference,
       ReferenceServiceOrder,

       //Shipping
       ShippingCondition,

       /* Associations */

       //Administrative
       _ServiceDocumentType,

       //Partners
       _SoldToParty,
       _ShipToParty,
       _BillToParty,
       _PayerParty,
       _ContactPerson,
       _RespEmployee,
       _ServiceEmployee,

       //Organizational data
       _SalesOrganization,
       _DistributionChannel,
       _Division,
       _SalesOffice,
       _SalesGroup,

       _SalesOrganizationOrgUnit_2,
       _SalesOfficeOrgUnit_2,
       _SalesGroupOrgUnit_2,
       _ServiceOrganizationOrgUnit_2,

       //Service Specific
       _ServiceDocumentPriority,
       //Pricing
       _TransactionCurrency,

       //Others
       _ServiceObjType,

       /* Compositions */
       _ServiceConfirmationItemTP : redirected to composition child I_ServiceConfirmationItemTP,
       _SrvcConfReferenceObjectTP : redirected to composition child I_SrvcConfRefObjectTP,
       _SrvcConfPartnerTP         : redirected to composition child I_SrvcConfPartnerTP,
       // _SrvcConfPriceElementTP    : redirected to composition child I_SrvcConfPriceElementTP,
       _SrvcConfUserStatusTP      : redirected to composition child I_SrvcConfUserStatusTP,
       _SrvcConfAppointmentTP     : redirected to composition child I_SrvcConfAppointmentTP,
       _SrvcConfDurationTP        : redirected to composition child I_SrvcConfDurationTP,
       _BillingDocumentFollowupTP : redirected to composition child I_SrvcConfFUPBillgDocTP,
       _TimeSheetFollowupTP       : redirected to composition child I_SrvcConfFUPTimeSheetTP,
       _SrvcConfLongTextTP        : redirected to composition child I_SrvcConfLongTextTP


}
```
