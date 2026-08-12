---
name: I_MDQANLYTSSCRCUSTCOCODEC
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for Customer Company Code. You can analyze the data using master data attributes, for example, country, or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Customer Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRCUSTCOCODEC')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for Customer Company Code. You can analyze the data using master data attributes, for example, country, or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Customer Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Cust Company Code - Cube — CDS view giao diện dựa trên I_MDQAnlytsScrBPCustCoCode."
keywords:
  - "MDQ Score for Cust Company Code - Cube"
  - "mdq"
  - "score"
  - "for"
  - "cust"
  - "company"
  - "code"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "business"
  - "partner"
  - "quality"
  - "rule"
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - customer
  - interface-view
  - lob:cross_application components
  - master-data
---
# I_MDQANLYTSSCRCUSTCOCODEC

**This CDS view helps to retrieve the results of quality evaluations and master data scores for Customer Company Code. You can analyze the data using master data attributes, for example, country, or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Customer Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRCUSTCOCODEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | | `_MDQAnlytsScrBPCustCoCode` | `MasterDataChangeProcess` | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` | ✓ | | `_MDQAnlytsScrBPCustCoCode` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `CompanyCode` | ✓ | | `_MDQAnlytsScrBPCustCoCode` | `CompanyCode` | `CHAR(4)` | Company Code |
| `MDQualityBusinessRuleUUID` | ✓ | | `_MDQAnlytsScrBPCustCoCode` | `MDQualityBusinessRuleUUID` | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyBusRuleEvalResultCode` | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `AlternativePayeeIsAllowed` |  | | `_Customer` | `AlternativePayeeIsAllowed` | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `BillingIsBlockedForCustomer` |  | | `_Customer` | `BillingIsBlockedForCustomer` | `CHAR(2)` | Central billing block for customer |
| `CityName` |  | | `_Customer` | `CityName` | `CHAR(35)` | City |
| `Country` |  | | `_Customer` | `Country` | `CHAR(3)` | Country/Region Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `CustomerCorporateGroup` |  | | `_Customer` | `CustomerCorporateGroup` | `CHAR(10)` | Group Key |
| `DeliveryIsBlocked` |  | | `_Customer` | `DeliveryIsBlocked` | `CHAR(2)` | Central delivery block for the customer |
| `Industry` |  | | `_Customer` | `Industry` | `CHAR(4)` | Industry Key |
| `IsSalesProspect` |  | | `_Customer` | `IsSalesProspect` | `CHAR(1)` | Indicator: Sales prospect |
| `NielsenRegion` |  | | `_Customer` | `NielsenRegion` | `CHAR(2)` | Nielsen ID |
| `OrderIsBlockedForCustomer` |  | | `_Customer` | `OrderIsBlockedForCustomer` | `CHAR(2)` | Central order block for customer |
| `PaymentIsBlockedForCustomer` |  | | `_Customer` | `PaymentIsBlockedForCustomer` | `CHAR(1)` | Payment Block |
| `PostalCode` |  | | `_Customer` | `PostalCode` | `CHAR(10)` | Postal Code |
| `PostingIsBlocked` |  | | `_Customer` | `PostingIsBlocked` | `CHAR(1)` | Central Posting Block |
| `Region` |  | | `_Customer` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AuthorizationGroup` |  | | `_CustomerCompanyCode` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CashPlanningGroup` |  | | `_CustomerCompanyCode` | `CashPlanningGroup` | `CHAR(10)` | Planning Group |
| `CustomerHeadOffice` |  | | `_CustomerCompanyCode` | `CustomerHeadOffice` | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `DunningBlock` |  | | `_CustomerCompanyCode` | `DunningBlock` | `CHAR(1)` | Dunning Block |
| `DunningLevel` |  | | `_CustomerCompanyCode` | `DunningLevel` | `NUMC(1)` | Dunning Level |
| `DunningProcedure` |  | | `_CustomerCompanyCode` | `DunningProcedure` | `CHAR(4)` | Dunning Procedure |
| `HouseBank` |  | | `_CustomerCompanyCode` | `HouseBank` | `CHAR(5)` | Short Key for a House Bank |
| `PaymentBlockingReason` |  | | `_CustomerCompanyCode` | `PaymentBlockingReason` | `CHAR(1)` | Block Key for Payment |
| `PaymentReason` |  | | `_CustomerCompanyCode` | `PaymentReason` | `CHAR(4)` | Payment Reason |
| `PaymentTerms` |  | | `_CustomerCompanyCode` | `PaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PhysicalInventoryBlockInd` |  | | `_CustomerCompanyCode` | `PhysicalInventoryBlockInd` | `CHAR(1)` | Posting block for company code |
| `ReconciliationAccount` |  | | `_CustomerCompanyCode` | `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `SupplierReleaseGroup` |  | | `_CustomerCompanyCode` | `SupplierReleaseGroup` | `CHAR(4)` | Release Approval Group |
| `MDChgProcessFinishDate` |  | | `_MDQAnlytsScrBPCustCoCode._MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | | `_MDQualityBusinessRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | | `_MDQualityBusinessRule` | `MDQltyBusRuleCheckedFieldTable` | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | | `_MDQualityBusinessRule` | `MDQltyBusRuleChkdFieldAndTable` | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | | `_MDQualityBusinessRule` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | | `_MDQualityBusinessRule` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AcademicTitle` |  | | `_BusinessPartner` | `AcademicTitle` | `CHAR(4)` | Academic Title: Key |
| `BPFirstNameSearchHelp` |  | | `_BusinessPartner` | `BPFirstNameSearchHelp` | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | | `_BusinessPartner` | `BPLastNameSearchHelp` | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartnerCategory` |  | | `_BusinessPartner` | `BusinessPartnerCategory` | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerGrouping` |  | | `_BusinessPartner` | `BusinessPartnerGrouping` | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerIsBlocked` |  | | `_BusinessPartner` | `BusinessPartnerIsBlocked` | `CHAR(1)` | Central Block for Business Partner |
| `CreatedByUser` |  | | `_BusinessPartner` | `CreatedByUser` | `CHAR(12)` | User who created the object |
| `CreationDate` |  | | `_BusinessPartner` | `CreationDate` | `DATS(8)` | Date on which the object was created |
| `FirstName` |  | | `_BusinessPartner` | `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `GenderCodeName` |  | | `_BusinessPartner` | `GenderCodeName` | `CHAR(1)` | Gender of Business Partner (Person) |
| `IsMarkedForArchiving` |  | | `_BusinessPartner` | `IsMarkedForArchiving` | `CHAR(1)` | Central Archiving Flag |
| `IsNaturalPerson` |  | | `_BusinessPartner` | `IsNaturalPerson` | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `LastChangeDate` |  | | `_BusinessPartner` | `LastChangeDate` | `DATS(8)` | Date when object was last changed |
| `LastChangedByUser` |  | | `_BusinessPartner` | `LastChangedByUser` | `CHAR(12)` | Last user to change object |
| `LastName` |  | | `_BusinessPartner` | `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `LegalForm` |  | | `_BusinessPartner` | `LegalForm` | `CHAR(2)` | BP: Legal form of organization |
| `OrganizationBPName1` |  | | `_BusinessPartner` | `OrganizationBPName1` | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | | `_BusinessPartner` | `OrganizationBPName2` | `CHAR(40)` | Name 2 of organization |
| `OrganizationFoundationDate` |  | | `_BusinessPartner` | `OrganizationFoundationDate` | `DATS(8)` | Date organization founded |
| `SearchTerm1` |  | | `_BusinessPartner` | `SearchTerm1` | `CHAR(20)` | Search Term 1 for Business Partner |
| `SearchTerm2` |  | | `_BusinessPartner` | `SearchTerm2` | `CHAR(20)` | Search Term 2 for Business Partner |
| `StreetName` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyNmbrOfSuccssflEvalRslts` | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyNmbrOfFailedEvalRslts` | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | | `_MDQAnlytsScrBPCustCoCode` | `MDQltyNmbrOfBusRuleEvalResults` | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  | `cast( concat( _MDQltyFioriLaunchpadHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultCustCoCode?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path)` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_BillingBlockReason` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CustomerHeadOffice` | | ✓ | | | | |
| `_CustomerCompanyCode` | | ✓ | | | | |
| `_DunningBlock` | | ✓ | | | | |
| `_PaymentBlockingReason` | | ✓ | | | | |
| `_PaymentReason` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_GenderText` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerGroupingText` | | ✓ | | | | |
| `_BusinessPartnerLegalFormText` | | ✓ | | | | |
| `_UserChangedBy` | | ✓ | | | | |
| `_UserCreatedBy` | | ✓ | | | | |
| `_UserRuleOwner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_Country` | `I_Country` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CustomerHeadOffice` | `I_Customer` | [1..1] |
| `_CustomerCompanyCode` | `I_CustomerCompany` | [0..1] |
| `_DunningBlock` | `I_DunningBlockingReasonCode` | [1..1] |
| `_PaymentBlockingReason` | `I_PaymentBlockingReason` | [0..1] |
| `_PaymentReason` | `I_PaymentReason` | [1..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |
| `_GenderText` | `I_BPGenderValueHelpText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerGroupingText` | `I_BusinessPartnerGroupingText` | [0..*] |
| `_BusinessPartnerLegalFormText` | `I_BusinessPartnerLegalFormText` | [0..*] |
| `_MDQBusinessRuleBaseTableText` | `I_MDQltyBusinessRuleBaseTableT` | [0..*] |
| `_MDQltyFioriLaunchpadHostPath` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyScoreEvalDetails` | `I_MDQltyScoreEvalDetails` | [1..1] |
| `_MDQualityBusinessRule` | `I_MDQualityBusinessRule` | [1..1] |
| `_UserChangedBy` | `I_User` | [0..1] |
| `_UserCreatedBy` | `I_User` | [0..1] |
| `_UserRuleOwner` | `I_User` | [0..1] |
| `_BusinessPartnerExtension` | `E_BP_D` | [0..1] |
| `_CustomerExtension` | `E_Customer` | [0..1] |
| `_CustomerCompanyCodeExtension` | `E_CUSCO_D` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRCUSTCOCODEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRCUSTCOCODEC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:['_BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Cust Company Code - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQBPCustCoCodeEvalAnlytlScr'
@ObjectModel.supportedCapabilities: [
  #ANALYTICAL_PROVIDER,
  #CDS_MODELING_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE,
  #SQL_DATA_SOURCE
]
@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #D,
  sizeCategory: #XXL
}
@VDM.viewType: #COMPOSITE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_MDQAnlytsScrCustCoCodeC
  as select from I_MDQAnlytsScrBPCustCoCode as _MDQAnlytsScrBPCustCoCode

  //customer associations
  association [0..1] to I_BillingBlockReason           as _BillingBlockReason           on  _BillingBlockReason.BillingBlockReason = $projection.billingisblockedforcustomer
  association [1..1] to I_Country                      as _Country                      on  _Country.Country = $projection.country
  association [1..1] to I_Customer                     as _Customer                     on  _Customer.Customer = $projection.Customer
  association [0..1] to I_CustomerAccountGroup         as _CustomerAccountGroup         on  _CustomerAccountGroup.CustomerAccountGroup = $projection.customeraccountgroup
  association [0..1] to I_CustomerClassification       as _CustomerClassification       on  _CustomerClassification.CustomerClassification = $projection.customerclassification
  association [0..1] to I_CustomerSupplierIndustry     as _CustomerSupplierIndustry     on  _CustomerSupplierIndustry.Industry = $projection.industry
  association [0..1] to I_DeliveryBlockReason          as _DeliveryBlockReason          on  _DeliveryBlockReason.DeliveryBlockReason = $projection.deliveryisblocked
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.region
                                                                                        and _RegionText.Country = $projection.country

  //customer company code associations
  association [1..1] to I_CompanyCode                  as _CompanyCode                  on  _CompanyCode.CompanyCode = $projection.CompanyCode
  association [1..1] to I_Customer                     as _CustomerHeadOffice           on  _CustomerHeadOffice.Customer = $projection.customerheadoffice
  association [0..1] to I_CustomerCompany              as _CustomerCompanyCode          on  _CustomerCompanyCode.Customer    = $projection.Customer
                                                                                        and _CustomerCompanyCode.CompanyCode = $projection.CompanyCode
  association [1..1] to I_DunningBlockingReasonCode    as _DunningBlock                 on  _DunningBlock.DunningBlockingReason = $projection.dunningblock
  association [0..1] to I_PaymentBlockingReason        as _PaymentBlockingReason        on  _PaymentBlockingReason.PaymentBlockingReason = $projection.paymentblockingreason
  association [1..1] to I_PaymentReason                as _PaymentReason                on  _PaymentReason.PaymentReason = $projection.paymentreason
  association [1..1] to I_PaymentTerms                 as _PaymentTerms                 on  _PaymentTerms.PaymentTerms = $projection.paymentterms

  //standard associations
  association [0..*] to I_BPGenderValueHelpText        as _GenderText                   on  _GenderText.GenderCodeName = $projection.gendercodename
  association [1..1] to I_BusinessPartner              as _BusinessPartner              on  _BusinessPartner.BusinessPartner = $projection.BusinessPartner
  association [0..*] to I_BusinessPartnerGroupingText  as _BusinessPartnerGroupingText  on  _BusinessPartnerGroupingText.BusinessPartnerGrouping = $projection.businesspartnergrouping
  association [0..*] to I_BusinessPartnerLegalFormText as _BusinessPartnerLegalFormText on  _BusinessPartnerLegalFormText.LegalForm = $projection.legalform
  association [0..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '147'
                                                                                        and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _MDQltyFioriLaunchpadHostPath on  _MDQltyFioriLaunchpadHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails       on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQualityBusinessRule        on  _MDQualityBusinessRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..1] to I_User                         as _UserChangedBy                on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..1] to I_User                         as _UserCreatedBy                on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..1] to I_User                         as _UserRuleOwner                on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner

  //extensibility associations
  association [0..1] to E_BP_D                         as _BusinessPartnerExtension     on  _BusinessPartnerExtension.BusinessPartner = $projection.BusinessPartner
  association [0..1] to E_Customer                     as _CustomerExtension            on  _CustomerExtension.Customer = $projection.Customer
  association [0..1] to E_CUSCO_D                      as _CustomerCompanyCodeExtension on  _CustomerCompanyCodeExtension.Customer    = $projection.Customer
                                                                                        and _CustomerCompanyCodeExtension.CompanyCode = $projection.CompanyCode
{
  key _MDQAnlytsScrBPCustCoCode.MasterDataChangeProcess,
  key _MDQAnlytsScrBPCustCoCode.BusinessPartner,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key _MDQAnlytsScrBPCustCoCode.CompanyCode,
  key _MDQAnlytsScrBPCustCoCode.MDQualityBusinessRuleUUID,
  key _MDQAnlytsScrBPCustCoCode.MDQltyBusRuleEvalResultCode,

      //customer data
      _Customer.AlternativePayeeIsAllowed,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _Customer.BillingIsBlockedForCustomer,
      _Customer.CityName,
      @ObjectModel.foreignKey.association: '_Country'
      _Customer.Country,
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      _Customer.CustomerAccountGroup,
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      _Customer.CustomerClassification,
      _Customer.CustomerCorporateGroup,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      _Customer.DeliveryIsBlocked,
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      _Customer.Industry,
      @Semantics.booleanIndicator: true
      _Customer.IsSalesProspect,
      _Customer.NielsenRegion,
      _Customer.OrderIsBlockedForCustomer,
      _Customer.PaymentIsBlockedForCustomer,
      _Customer.PostalCode,
      _Customer.PostingIsBlocked,
      @ObjectModel.text.association: '_RegionText'
      _Customer.Region,

      //customer company code data
      _CustomerCompanyCode.AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_CashPlanningGroup'
      _CustomerCompanyCode.CashPlanningGroup,
      @ObjectModel.foreignKey.association: '_CustomerHeadOffice'
      _CustomerCompanyCode.CustomerHeadOffice,
      @ObjectModel.foreignKey.association: '_DunningBlock'
      _CustomerCompanyCode.DunningBlock,
      _CustomerCompanyCode.DunningLevel,
      _CustomerCompanyCode.DunningProcedure,
      _CustomerCompanyCode.HouseBank,
      @ObjectModel.foreignKey.association: '_PaymentBlockingReason'
      _CustomerCompanyCode.PaymentBlockingReason,
      @ObjectModel.foreignKey.association: '_PaymentReason'
      _CustomerCompanyCode.PaymentReason,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _CustomerCompanyCode.PaymentTerms,
      _CustomerCompanyCode.PhysicalInventoryBlockInd,
      _CustomerCompanyCode.ReconciliationAccount,
      _CustomerCompanyCode.SupplierReleaseGroup,

      //process data
      _MDQAnlytsScrBPCustCoCode._MasterDataChangeProcess.MDChgProcessFinishDate,
      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      @Semantics.booleanIndicator: true
      _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

      //rule data
      _MDQAnlytsScrBPCustCoCode.MDQltyBusinessRuleBaseTable,
      _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
      @ObjectModel.foreignKey.association: '_UserRuleOwner'
      _MDQAnlytsScrBPCustCoCode.MDQltyBusinessRuleOwner,
      _MDQualityBusinessRule.MDQltyBusRuleCheckedField,
      _MDQualityBusinessRule.MDQltyBusRuleCheckedFieldTable,
      _MDQualityBusinessRule.MDQltyBusRuleChkdFieldAndTable,
      _MDQualityBusinessRule.MDQualityBusinessRule,
      _MDQualityBusinessRule.MDQualityBusinessRuleName,

      //business partner data
      @ObjectModel.foreignKey.association: '_AcademicTitleValueHelp'
      _BusinessPartner.AcademicTitle,
      _BusinessPartner.BPFirstNameSearchHelp,
      _BusinessPartner.BPLastNameSearchHelp,
      _BusinessPartner.BusinessPartnerCategory,
      @ObjectModel.text.association: '_BusinessPartnerGroupingText'
      _BusinessPartner.BusinessPartnerGrouping,
      _BusinessPartner.BusinessPartnerIsBlocked,
      @ObjectModel.foreignKey.association: '_UserCreatedBy'
      _BusinessPartner.CreatedByUser,
      _BusinessPartner.CreationDate,
      _BusinessPartner.FirstName,
      @ObjectModel.text.association: '_GenderText'
      _BusinessPartner.GenderCodeName,
      _BusinessPartner.IsMarkedForArchiving,
      @Semantics.booleanIndicator
      _BusinessPartner.IsNaturalPerson,
      _BusinessPartner.LastChangeDate,
      @ObjectModel.foreignKey.association: '_UserChangedBy'
      _BusinessPartner.LastChangedByUser,
      _BusinessPartner.LastName,
      @ObjectModel.text.association: '_BusinessPartnerLegalFormText'
      _BusinessPartner.LegalForm,
      _BusinessPartner.OrganizationBPName1,
      _BusinessPartner.OrganizationBPName2,
      _BusinessPartner.OrganizationFoundationDate,
      _BusinessPartner.SearchTerm1,
      _BusinessPartner.SearchTerm2,
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.StreetName,

      //standard associations
      _BusinessPartner,
      _BusinessPartner._AcademicTitleValueHelp,
      _BusinessPartnerGroupingText,
      _BusinessPartnerLegalFormText,
      _GenderText,
      _UserChangedBy,
      _UserCreatedBy,
      _UserRuleOwner,

      //customer company code associations
      _CompanyCode,
      _Customer,
      _CustomerCompanyCode,
      _CustomerCompanyCode._CashPlanningGroup,
      _CustomerHeadOffice,
      _DunningBlock,
      _PaymentBlockingReason,
      _PaymentReason,
      _PaymentTerms,

      //customer associations
      _BillingBlockReason,
      _Country,
      _CustomerAccountGroup,
      _CustomerClassification,
      _CustomerSupplierIndustry,
      _DeliveryBlockReason,
      _RegionText,

      @Aggregation.default: #SUM
      _MDQAnlytsScrBPCustCoCode.MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPCustCoCode.MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPCustCoCode.MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _MDQltyFioriLaunchpadHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultCustCoCode?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path) as MDQltyAlPgNavigationPath
}
```
