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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceQuotationType` |  | |  |  |  |  |
| `ServiceQuotationUUID` |  | |  |  |  |  |
| `ServiceQuotationDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
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
| `ServiceQuotationIsNew` |  | |  |  |  |  |
| `ServiceQuotationIsInProcess` |  | |  |  |  |  |
| `ServiceQuotationIsReleased` |  | |  |  |  |  |
| `ServiceQuotationIsCompleted` |  | |  |  |  |  |
| `ServiceQuotationStatus` |  | |  |  |  |  |
| `ServiceQuotationHasError` |  | |  |  |  |  |
| `SrvcDocRejectionStatus` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityStartDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityEndDateTime` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `SrvcQuotationRejectionReason` |  | |  |  |  |  |
| `ServiceQtanExtReference` |  | |  |  |  |  |
| `ReferenceServiceContract` |  | |  |  |  |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
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
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_SrvcQtanStatus` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_ServiceQuotationItemTP` | | ✓ | | | | |
| `_SrvcQtanReferenceObjectTP` | | ✓ | | | | |
| `_SrvcQtanPriceElementTP` | | ✓ | | | | |
| `_SrvcQtanAppointmentTP` | | ✓ | | | | |
| `_SrvcQtanDurationTP` | | ✓ | | | | |
| `_SrvcQtanFUPSrvcOrdTP` | | ✓ | | | | |
| `_SrvcQtanLongTextTP` | | ✓ | | | | |
| `_SrvcQtanPartnerTP` | | ✓ | | | | |

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
