---
name: I_SERVICEDOCUMENTENHCD
description: "Service DocumentUMENTENHCD"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTENHCD

**Service DocumentUMENTENHCD**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentUUID` |  | |  |  |  |  |
| `ServiceDocumentCharUUID` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocumentTemplateType` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `ServiceDocumentChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `SrvcDocIsMaintServiceOrder` |  | |  |  |  |  |
| `BusinessActivityCategory` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ServiceTeam` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ServiceContractStartDateTime` |  | |  |  |  |  |
| `ServiceContractEndDateTime` |  | |  |  |  |  |
| `SrvcContrEarliestStartDateTime` |  | |  |  |  |  |
| `SrvcContrLatestEndDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityStartDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityEndDateTime` |  | |  |  |  |  |
| `SrvcDocTmplValdtyStartDateTime` |  | |  |  |  |  |
| `SrvcDocTmplValdtyEndDateTime` |  | |  |  |  |  |
| `SrvcDocTemplateSearchTermText` |  | |  |  |  |  |
| `RequestedServiceStartDate` |  | |  | `cast( tstmp_to_dats( RequestedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `RequestedServiceEndDate` |  | |  | `cast( tstmp_to_dats( RequestedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `ServiceContractStartDate` |  | |  | `cast( tstmp_to_dats( ServiceContractStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `ServiceContractEndDate` |  | |  | `cast( tstmp_to_dats( ServiceContractEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `SrvcQuotationValidityStartDate` |  | |  | `cast( tstmp_to_dats( SrvcQtanValidityStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `SrvcQuotationValidityEndDate` |  | |  | `cast( tstmp_to_dats( SrvcQtanValidityEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `ServiceDocumentStatus` |  | |  |  |  |  |
| `ServiceDocumentHasError` |  | |  |  |  |  |
| `ServiceDocBillingStatus` |  | |  |  |  |  |
| `ServiceDocIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `SrvcDocTransferStatus` |  | |  |  |  |  |
| `ServiceDocumentIsQuotation` |  | |  |  |  |  |
| `ServiceDocumentIsReleased` |  | |  |  |  |  |
| `ServiceDocumentIsRejected` |  | |  |  |  |  |
| `ServiceConfirmationIsFinal` |  | |  |  |  |  |
| `ServiceContractCanclnSts` |  | |  |  |  |  |
| `MaintSrvcOrdExecutionStatus` |  | |  |  |  |  |
| `SrvcDocExecutionStatus` |  | |  |  |  |  |
| `SrvcDocDeliveryStatus` |  | |  |  |  |  |
| `SrvcDocGoodsIssueStatus` |  | |  |  |  |  |
| `SrvcDocRejectionStatus` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `EnterpriseServiceOrganization` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `RespyMgmtServiceTeam` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `ServiceReasonSchema` |  | |  |  |  |  |
| `ServiceReasonCategory` |  | |  |  |  |  |
| `ServiceDefectSchema` |  | |  |  |  |  |
| `ServiceDefectCategory` |  | |  |  |  |  |
| `ServiceFirstResponseByDateTime` |  | |  |  |  |  |
| `ServiceDueByDateTime` |  | |  |  |  |  |
| `ErlstRequestedDeliveryDateTime` |  | |  |  |  |  |
| `RecommendedServicePriority` |  | |  |  |  |  |
| `ServiceDocumentUrgency` |  | |  |  |  |  |
| `ServiceDocumentImpact` |  | |  |  |  |  |
| `ServiceEscalationLevel` |  | |  |  |  |  |
| `ServiceDocumentProblemCategory` |  | |  |  |  |  |
| `ServiceRisk` |  | |  |  |  |  |
| `ServiceDocumentCanclnParty` |  | |  |  |  |  |
| `ServiceDocumentCanclnReason` |  | |  |  |  |  |
| `ReferenceInHouseRepair` |  | |  |  |  |  |
| `ReferenceInHouseRepairItem` |  | |  |  |  |  |
| `RefInHouseRepairIsExisting` |  | |  |  |  |  |
| `SrvcDocCreditStatus` |  | |  |  |  |  |
| `SrvcDocBslnCostPostgStatus` |  | |  |  |  |  |
| `SrvcDocContinuousCostStatus` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `SrvcDocAcctAssgmtObjectType` |  | |  |  |  |  |
| `SrvcDocAcctAssgmtObject` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `StatusProfile` |  | | `_StatusObjectWithUUID` | `StatusProfile` |  |  |
| `_ServiceDocItem` | | ✓ | | | | |
| `_ServiceDocRefObj` | | ✓ | | | | |
| `_ServiceDocPredecessor` | | ✓ | | | | |
| `_ServiceDocSuccessor` | | ✓ | | | | |
| `_SrvcDocBPSoldToParty` | | ✓ | | | | |
| `_ServiceDocLongText` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_SrvcDocHeaderLongText` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SoldToPartyToCustomer` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceContractCanclnSts` | | ✓ | | | | |
| `_SrvcDocTransferStatus` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_ActivityCategory` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_ServiceRisk` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |
| `_SrvcDocCreditStatus` | | ✓ | | | | |
| `_SrvcDocBslnCostPostgStatus` | | ✓ | | | | |
| `_SrvcDocContinuousCostStatus` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItem` | `I_ServiceDocumentItemEnhcd` | [1..*] |
| `_ServiceDocRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_ServiceDocPredecessor` | `I_ServiceDocumentPredecessor` | [1] |
| `_ServiceDocSuccessor` | `I_ServiceDocumentSuccessor` | [0..*] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |
| `_SrvcDocBPSoldToParty` | `C_SrvcDocBPContactCardQuickVw` | [0..1] |
| `_ServiceDocLongText` | `I_ServiceDocumentLongText` | [0..*] |
| `_StatusObjectWithUUID` | `I_StatusObjectWithUUID` | [0..1] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_SrvcDocHeaderLongText` | `I_SrvcDocHeaderLongText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Enhanced'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCENHCD',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_ServiceDocRefObj', '_ServiceDocPredecessor', '_ServiceDocSuccessor']
}

@ObjectModel: {
   representativeKey: 'ServiceDocument',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentEnhcd
  as select from I_ServiceDocument

  association [1..*] to I_ServiceDocumentItemEnhcd    as _ServiceDocItem        on  $projection.ServiceObjectType = _ServiceDocItem.ServiceObjectType
                                                                                and $projection.ServiceDocument   = _ServiceDocItem.ServiceDocument

  association [0..*] to I_ServiceDocumentRefObject    as _ServiceDocRefObj      on  $projection.ServiceObjectType            = _ServiceDocRefObj.ServiceObjectType
                                                                                and $projection.ServiceDocument              = _ServiceDocRefObj.ServiceDocument
                                                                                and _ServiceDocRefObj.ServiceDocumentItem    is initial
                                                                                and _ServiceDocRefObj.SrvcRefObjIsMainObject is not initial

  association [1]    to I_ServiceDocumentPredecessor  as _ServiceDocPredecessor on  $projection.ServiceDocumentUUID = _ServiceDocPredecessor.ServiceDocumentUUID
                                                                                and $projection.ServiceObjectType   = _ServiceDocPredecessor.ServiceObjectType

  association [0..*] to I_ServiceDocumentSuccessor    as _ServiceDocSuccessor   on  $projection.ServiceDocumentUUID = _ServiceDocSuccessor.ServiceDocumentUUID
                                                                                and $projection.ServiceObjectType   = _ServiceDocSuccessor.ServiceObjectType

  association [0..1] to E_ServiceDocument             as _ServiceDocumentExt    on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                                and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder

  association [0..1] to C_SrvcDocBPContactCardQuickVw as _SrvcDocBPSoldToParty  on  $projection.SoldToParty = _SrvcDocBPSoldToParty.BusinessPartner

  association [0..*] to I_ServiceDocumentLongText     as _ServiceDocLongText    on  $projection.ServiceObjectType           = _ServiceDocLongText.ServiceObjectType
                                                                                and $projection.ServiceDocument             = _ServiceDocLongText.ServiceDocument
                                                                                and _ServiceDocLongText.ServiceDocumentItem is initial
                                                                                and _ServiceDocLongText.TextObjectCategory  = 'CRM_ORDERH'

  association [0..1] to I_StatusObjectWithUUID        as _StatusObjectWithUUID  on  $projection.ServiceDocumentUUID = _StatusObjectWithUUID.StatusObjectUUID

  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner       on  $projection.ServiceDocument           = _CustMgmtPartner.CustMgmtDocument
                                                                                and $projection.ServiceObjectType         = _CustMgmtPartner.CustMgmtObjectType
                                                                                and _CustMgmtPartner.CustMgmtDocumentItem = '000000'



  association [0..*] to I_SrvcDocHeaderLongText       as _SrvcDocHeaderLongText on  $projection.ServiceObjectType   = _SrvcDocHeaderLongText.ServiceObjectType
                                                                                and $projection.ServiceDocument     = _SrvcDocHeaderLongText.ServiceDocument
                                                                                and _SrvcDocHeaderLongText.Language = $session.system_language






{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @ObjectModel.text.element: 'ServiceDocumentDescription'
  key ServiceDocument,

      // Header Details
      ServiceDocumentUUID,
      ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription,
      Language,
      PostingDate,
      ServiceDocumentTemplateType,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )   as crms4_created_on preserving type ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )   as crms4_changed_on preserving type ) as ServiceDocumentChangedDate,
      //      @Semantics.systemDate.createdAt: true
      //      cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      //      @Semantics.systemDate.lastChangedAt: true
      //      cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      PricingDocument,
      PricingProcedure,
      RefBusinessSolutionOrder,
      SrvcDocIsMaintServiceOrder,

      // Activity
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      BusinessActivityCategory,
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,

      // Dates
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      SrvcContrEarliestStartDateTime,
      SrvcContrLatestEndDateTime,
      SrvcQtanValidityStartDateTime,
      SrvcQtanValidityEndDateTime,
      SrvcDocTmplValdtyStartDateTime,
      SrvcDocTmplValdtyEndDateTime,
      SrvcDocTemplateSearchTermText,

      cast( tstmp_to_dats( RequestedServiceStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as RequestedServiceStartDate,
      cast( tstmp_to_dats( RequestedServiceEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as RequestedServiceEndDate,
      cast( tstmp_to_dats( ServiceContractStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as ServiceContractStartDate,
      cast( tstmp_to_dats( ServiceContractEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as ServiceContractEndDate,
      cast( tstmp_to_dats( SrvcQtanValidityStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as SrvcQuotationValidityStartDate,
      cast( tstmp_to_dats( SrvcQtanValidityEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as SrvcQuotationValidityEndDate,

      //      cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      //      cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,
      //
      //      cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
      //                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      //      cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
      //                       as abap.dats(8))  as crms4_changed_on )      as ServiceContractEndDate,
      //
      //      cast( cast(substring( cast(SrvcQtanValidityStartDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as SrvcQuotationValidityStartDate,
      //      cast( cast(substring( cast(SrvcQtanValidityEndDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as SrvcQuotationValidityEndDate,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,

      WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      // Sales Set
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceDocumentRejectionReason,
      @ObjectModel.foreignKey.association: '_Region'
      Region,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,
      @ObjectModel.foreignKey.association: '_SrvcDocTransferStatus'
      SrvcDocTransferStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      ServiceDocumentIsQuotation,
      ServiceDocumentIsReleased,
      ServiceDocumentIsRejected,
      ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_ServiceContractCanclnSts'
      ServiceContractCanclnSts,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocExecutionStatus'
      MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      SrvcDocExecutionStatus,
      SrvcDocDeliveryStatus,
      SrvcDocGoodsIssueStatus,
      SrvcDocRejectionStatus,
      // Organizational Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,
      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      EnterpriseServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Service Organizational Units with S/4 Code
      RespyMgmtServiceTeam,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,

      // Subject
      ServiceReasonSchema,
      ServiceReasonCategory,
      ServiceDefectSchema,
      ServiceDefectCategory,

      // Dates
      ServiceFirstResponseByDateTime,
      ServiceDueByDateTime,
      ErlstRequestedDeliveryDateTime,

      // Service Request
      RecommendedServicePriority,
      ServiceDocumentUrgency,
      ServiceDocumentImpact,
      ServiceEscalationLevel,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      ServiceDocumentProblemCategory,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      ServiceRisk,

      // Cancel Header
      ServiceDocumentCanclnParty,
      ServiceDocumentCanclnReason,

      // In-House Repair Reference
      ReferenceInHouseRepair,
      ReferenceInHouseRepairItem,
      RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocCreditStatus'
      SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      SrvcDocBslnCostPostgStatus,

      // Continuous Cost Calculation Status
      SrvcDocContinuousCostStatus,

      //Shipping
      ShippingCondition,

      //Pricing Group
      CustomerPriceGroup,

      //Contract Account
      ContractAccount,

      SrvcDocAcctAssgmtObjectType,
      SrvcDocAcctAssgmtObject,
      DeliveryPriority,
      IncotermsPart1,
      IncotermsPart2,
      // Status profile
      _StatusObjectWithUUID.StatusProfile,

      // Associations to next level
      // Header Keys Assocations
      _ServiceObjType,

      // Header Details Assocations
      _ServiceDocumentType,

      // Partner Details Associations
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SoldToPartyToCustomer,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _ServiceTeamHeader,

      // Status Assocations
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceContractCanclnSts,
      _SrvcDocTransferStatus,

      // Billing Set Associations
      _BillingBlockReason,

      // Activity Associations
      _ActivityCategory,
      _ServiceDocumentPriority,

      // Pricing Parameter Set
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _FixedPrice,
      _TaxDepartureCountry,
      _VATRegistrationCountry,

      // Organization Unit Set Assocations
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'
      _RespSrvcOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _RespSrvcOrganizationOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _DistributionChannel,
      _Division,
      _EnterpriseServiceOrg,

      // Sales Set Assocaition
      _Region,
      _SrvcDocumentRejectionReason,

      // Service Request Association
      _ServiceRisk,
      _ServiceDocProblemCategory,

      // Association to Service Document Item
      _ServiceDocItem,

      // Association to Service Document Enhanced views
      _ServiceDocRefObj,
      _ServiceDocPredecessor,
      _ServiceDocSuccessor,

      //Association to long text view
      _ServiceDocLongText,

      @UI.hidden: true
      _SrvcDocBPSoldToParty,

      // Credit Status association
      _SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      _SrvcDocBslnCostPostgStatus,

      // Continuous Cost Calculation Status
      _SrvcDocContinuousCostStatus,

      _PaymentMethod,


      // Service Order Execution Status
      _SrvcDocExecutionStatus,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      _SrvcDocHeaderLongText,
      _CustMgmtPartner
}
```
