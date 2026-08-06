---
name: I_SERVICEQUOTATIONTP
description: Servicequotationtp
app_component: CRM-S4-SRV-SVQ-2CL
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SERVICEQUOTATIONTP

**Servicequotationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceQuotation` | `ServiceQuotation` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceQuotationType` | `ServiceQuotationType` |
| `ServiceQuotationUUID` | `ServiceQuotationUUID` |
| `ServiceQuotationDescription` | `ServiceQuotationDescription` |
| `Language` | `Language` |
| `PostingDate` | `PostingDate` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
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
| `ServiceQuotationIsNew` | `ServiceQuotationIsNew` |
| `ServiceQuotationIsInProcess` | `ServiceQuotationIsInProcess` |
| `ServiceQuotationIsReleased` | `ServiceQuotationIsReleased` |
| `ServiceQuotationIsCompleted` | `ServiceQuotationIsCompleted` |
| `ServiceQuotationStatus` | `ServiceQuotationStatus` |
| `ServiceQuotationHasError` | `ServiceQuotationHasError` |
| `SrvcDocRejectionStatus` | `SrvcDocRejectionStatus` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `SrvcQtanValidityStartDateTime` | `SrvcQtanValidityStartDateTime` |
| `SrvcQtanValidityEndDateTime` | `SrvcQtanValidityEndDateTime` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocGrossAmount` | `} ServiceDocGrossAmount` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `ServiceDocTaxAmount` | `} ServiceDocTaxAmount` |
| `PricingDocument` | `PricingDocument` |
| `SrvcQuotationRejectionReason` | `SrvcQuotationRejectionReason` |
| `ServiceQtanExtReference` | `ServiceQtanExtReference` |
| `ReferenceServiceContract` | `ReferenceServiceContract` |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_SoldToParty` | *Association* |
| `_ShipToParty` | *Association* |
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
| `_ServiceTeamHeader` | *Association* |
| `_SrvcQtanStatus` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_ServiceQuotationItemTP` | *Association* |
| `_SrvcQtanReferenceObjectTP` | *Association* |
| `_SrvcQtanPriceElementTP` | *Association* |
| `_SrvcQtanAppointmentTP` | *Association* |
| `_SrvcQtanDurationTP` | *Association* |
| `_SrvcQtanFUPSrvcOrdTP` | *Association* |
| `_SrvcQtanLongTextTP` | *Association* |
| `_SrvcQtanPartnerTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Quotation - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'ServiceQuotation',
   semanticKey: ['ServiceQuotation'],
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L},
   sapObjectNodeType:{name: 'ServiceQuotation'}                
}

@Metadata.ignorePropagatedAnnotations: true
define root view entity I_ServiceQuotationTP
  provider contract transactional_interface
  as projection on R_ServiceQuotationTP as _ServiceQuotationTP
{
      // Administrative fields
  key ServiceQuotation,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceQuotationType,
      ServiceQuotationUUID,
      ServiceQuotationDescription,
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

      //Service team fields
      RespyMgmtServiceTeam,
      RespyMgmtGlobalTeamID,

      // Status
      ServiceQuotationIsNew,
      ServiceQuotationIsInProcess,
      ServiceQuotationIsReleased,
      ServiceQuotationIsCompleted,
      ServiceQuotationStatus,
      @Semantics.booleanIndicator
      ServiceQuotationHasError,
      SrvcDocRejectionStatus,

      // Dates and Durations
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      @Semantics.dateTime:true 
      SrvcQtanValidityStartDateTime,
      @Semantics.dateTime:true 
      SrvcQtanValidityEndDateTime,

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
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      SrvcQuotationRejectionReason,

      // Reference Documents
      ServiceQtanExtReference,
      ReferenceServiceContract,

      /* Associations */

      // Administrative
      _ServiceObjType,
      _ServiceDocumentType,

      // Partners
      _SoldToParty,
      _ShipToParty,
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
      _ServiceTeamHeader,

      //Status
      _SrvcQtanStatus,

      // Service Specific
      _ServiceDocumentPriority,

      // Pricing
      _TransactionCurrency,

      // Sales
      _SrvcDocumentRejectionReason,

      /* Compositions */
      _ServiceQuotationItemTP    : redirected to composition child I_ServiceQuotationItemTP,
      _SrvcQtanReferenceObjectTP : redirected to composition child I_SrvcQtanReferenceObjectTP,
      _SrvcQtanPriceElementTP    : redirected to composition child I_SrvcQtanPriceElementTP,
     //_SrvcQtanUserStatusTP      : redirected to composition child I_SrvcQtanUserStatusTP, //User Status feature is not enabled.Hence the association has been commented.
      _SrvcQtanAppointmentTP     : redirected to composition child I_SrvcQtanAppointmentTP,
      _SrvcQtanDurationTP        : redirected to composition child I_SrvcQtanDurationTP,
      _SrvcQtanFUPSrvcOrdTP      : redirected to composition child I_SrvcQtanFUPSrvcOrdTP,
      _SrvcQtanLongTextTP        : redirected to composition child I_SrvcQtanLongTextTP,
      _SrvcQtanPartnerTP         : redirected to composition child I_SrvcQtanPartnerTP
     
}
```
