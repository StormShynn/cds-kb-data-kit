---
name: I_MDQANLYTSSCRSUPLRCOCODEC
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for Supplier Company Code. You can analyze the data using master data attributes, for example, country or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Supplier Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for Supplier Company Code. You can analyze the data using master data attributes, for example, country or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Supplier Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Suplr Company Code - Cube — CDS view giao diện dựa trên I_MDQAnlytsScrBPSuplrCoCode."
keywords:
  - "MDQ Score for Suplr Company Code - Cube"
  - "mdq"
  - "score"
  - "for"
  - "suplr"
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
  - interface-view
  - lob:cross_application components
  - master-data
  - supplier
---
# I_MDQANLYTSSCRSUPLRCOCODEC

**This CDS view helps to retrieve the results of quality evaluations and master data scores for Supplier Company Code. You can analyze the data using master data attributes, for example, country or company code, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my Supplier Company Code? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | | `_MDQAnlytsScrBPSuplrCoCode` | `MasterDataChangeProcess` | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` | ✓ | | `_MDQAnlytsScrBPSuplrCoCode` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `MDQualityBusinessRuleUUID` | ✓ | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQualityBusinessRuleUUID` | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyBusRuleEvalResultCode` | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `CompanyCode` | ✓ | | `_MDQAnlytsScrBPSuplrCoCode` | `CompanyCode` | `CHAR(4)` | Company Code |
| `MDChgProcessFinishDate` |  | | `_MDQAnlytsScrBPSuplrCoCode._MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedFieldTable` | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleChkdFieldAndTable` | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | | `_MDQltyBusRule` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | | `_MDQltyBusRule` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `AlternativePayeeIsAllowed` |  | | `_Supplier` | `AlternativePayeeIsAllowed` | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `Industry` |  | | `_Supplier` | `Industry` | `CHAR(4)` | Industry Key |
| `PaymentIsBlockedForSupplier` |  | | `_Supplier` | `PaymentIsBlockedForSupplier` | `CHAR(1)` | Payment Block |
| `PostingIsBlocked` |  | | `_Supplier` | `PostingIsBlocked` | `CHAR(1)` | Central Posting Block |
| `PurchasingIsBlocked` |  | | `_Supplier` | `PurchasingIsBlocked` | `CHAR(1)` | Centrally imposed purchasing block |
| `SupplierProcurementBlock` |  | | `_Supplier` | `SupplierProcurementBlock` | `CHAR(2)` | Function That Will Be Blocked |
| `ResponsibleType` |  | | `_Supplier` | `ResponsibleType` | `CHAR(2)` | Tax Type |
| `SuplrProofOfDelivRlvtCode` |  | | `_Supplier` | `SuplrProofOfDelivRlvtCode` | `CHAR(1)` | Supplier indicator relevant for proof of delivery |
| `CityName` |  | | `_Supplier` | `CityName` | `CHAR(35)` | City |
| `Country` |  | | `_Supplier` | `Country` | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | | `_Supplier` | `PostalCode` | `CHAR(10)` | Postal Code |
| `Region` |  | | `_Supplier` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SuplrQualityManagementSystem` |  | | `_Supplier` | `SuplrQualityManagementSystem` | `CHAR(4)` | Actual QM System of Supplier |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
| `SupplierCorporateGroup` |  | | `_Supplier` | `SupplierCorporateGroup` | `CHAR(10)` | Group Key |
| `SupplierIsPlantRelevant` |  | | `_Supplier` | `SupplierIsPlantRelevant` | `CHAR(1)` | Indicator: plant level relevant |
| `SupplierIsSubRangeRelevant` |  | | `_Supplier` | `SupplierIsSubRangeRelevant` | `CHAR(1)` | Indicator: vendor sub-range relevant |
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
| `PaymentBlockingReason` |  | | `_SupplierCompanyCode` | `PaymentBlockingReason` | `CHAR(1)` | Block Key for Payment |
| `SupplierIsBlockedForPosting` |  | | `_SupplierCompanyCode` | `SupplierIsBlockedForPosting` | `CHAR(1)` | Posting block for company code |
| `AccountingClerk` |  | | `_SupplierCompanyCode` | `AccountingClerk` | `CHAR(2)` | Accounting Clerk Abbreviation |
| `SupplierClerk` |  | | `_SupplierCompanyCode` | `SupplierClerk` | `CHAR(15)` | Clerk at vendor |
| `PaymentTerms` |  | | `_SupplierCompanyCode` | `PaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `HouseBank` |  | | `_SupplierCompanyCode` | `HouseBank` | `CHAR(5)` | Short Key for a House Bank |
| `Currency` |  | | `_SupplierCompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `ReconciliationAccount` |  | | `_SupplierCompanyCode` | `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `WithholdingTaxCountry` |  | | `_SupplierCompanyCode` | `WithholdingTaxCountry` | `CHAR(3)` | Withholding Tax Country/Region Key |
| `CashPlanningGroup` |  | | `_SupplierCompanyCode` | `CashPlanningGroup` | `CHAR(10)` | Planning Group |
| `SupplierReleaseGroup` |  | | `_SupplierCompanyCode` | `SupplierReleaseGroup` | `CHAR(4)` | Release Approval Group |
| `PaymentMethodSupplement` |  | | `_SupplierCompanyCode` | `PaymentMethodSupplement` | `CHAR(2)` | Payment method supplement |
| `PaymentReason` |  | | `_SupplierCompanyCode` | `PaymentReason` | `CHAR(4)` | Payment Reason |
| `AuthorizationGroup` |  | | `_SupplierCompanyCode` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyNmbrOfSuccssflEvalRslts` | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyNmbrOfFailedEvalRslts` | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | | `_MDQAnlytsScrBPSuplrCoCode` | `MDQltyNmbrOfBusRuleEvalResults` | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultSuplrCoCode?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path)` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_CnsldtnIndustryT` | | ✓ | | | | |
| `_PaymentReasonText` | | ✓ | | | | |
| `_ProcurementBlockText` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CountryTaxCode` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_UserRuleOwner` | | ✓ | | | | |
| `_BusinessPartnerGroupingText` | | ✓ | | | | |
| `_UserCreatedBy` | | ✓ | | | | |
| `_GenderText` | | ✓ | | | | |
| `_UserChangedBy` | | ✓ | | | | |
| `_BusinessPartnerLegalFormText` | | ✓ | | | | |
| `_PaymentBlockingReason` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CashPlanningGroup` | | ✓ | | | | |
| `_DocumentInfoRecordAuthznGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnIndustryT` | `I_CnsldtnIndustryT` | [0..*] |
| `_PaymentReasonText` | `I_PaymentReasonText` | [0..*] |
| `_ProcurementBlockText` | `I_ProcurementBlockText` | [0..*] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_CountryTaxCode` | `I_Country` | [1..1] |
| `_MDQBusinessRuleBaseTableText` | `I_MDQltyBusinessRuleBaseTableT` | [0..*] |
| `_FLPHostPath` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyScoreEvalDetails` | `I_MDQltyScoreEvalDetails` | [1..1] |
| `_MDQltyBusRule` | `I_MDQualityBusinessRule` | [1..1] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_SupplierCompanyCode` | `I_SupplierCompany` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |
| `_UserRuleOwner` | `I_User` | [0..1] |
| `_BusinessPartnerGroupingText` | `I_BusinessPartnerGroupingText` | [0..*] |
| `_UserCreatedBy` | `I_User` | [0..1] |
| `_GenderText` | `I_BPGenderValueHelpText` | [0..*] |
| `_UserChangedBy` | `I_User` | [0..1] |
| `_BusinessPartnerLegalFormText` | `I_BusinessPartnerLegalFormText` | [0..*] |
| `_PaymentBlockingReason` | `I_PaymentBlockingReason` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CashPlanningGroup` | `I_CashPlanningGroup` | [0..1] |
| `_DocumentInfoRecordAuthznGrp` | `I_DocumentInfoRecordAuthznGrp` | [0..1] |
| `_SupplierExtension` | `E_Supplier` | [0..1] |
| `_BusinessPartnerExtension` | `E_BP_D` | [0..1] |
| `_CompanyCodeExtension` | `E_SUPCO_D` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:['_BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Suplr Company Code - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQBPSuplrCoCodeEvalAnlytlScr'
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
define view entity I_MDQAnlytsScrSuplrCoCodeC
  as select from I_MDQAnlytsScrBPSuplrCoCode as _MDQAnlytsScrBPSuplrCoCode
  //standard associations
  association [0..*] to I_CnsldtnIndustryT             as _CnsldtnIndustryT             on  _CnsldtnIndustryT.Industry = $projection.industry
  association [0..*] to I_PaymentReasonText            as _PaymentReasonText            on  _PaymentReasonText.PaymentReason = $projection.paymentreason
  association [0..*] to I_ProcurementBlockText         as _ProcurementBlockText         on  _ProcurementBlockText.ProcurementBlock = $projection.supplierprocurementblock
  association [0..*] to I_SupplierAccountGroup         as _SupplierAccountGroup         on  _SupplierAccountGroup.SupplierAccountGroup = $projection.supplieraccountgroup
  association [1..1] to I_BusinessPartner              as _BusinessPartner              on  _BusinessPartner.BusinessPartner = $projection.BusinessPartner
  //  association [1..1] to I_SuplrProofOfDelivRlvtCode    as _SuplrProofOfDelivRlvtCode    on  _SuplrProofOfDelivRlvtCode.SuplrProofOfDelivRlvtCode = $projection.suplrproofofdelivrlvtcode
  //    association [0..*] to I_BusPartAuthorizationGroup as _BusPartAuthorizationGroup on  _BusPartAuthorizationGroup.AuthorizationGroup  = $projection.authorizationgroup
  //                                                                                          and _BusPartAuthorizationGroup.AuthorizationObject = 'BUPA'
  association [1..1] to I_Country                      as _Country                      on  _Country.Country = $projection.country
  association [1..1] to I_Country                      as _CountryTaxCode               on  _CountryTaxCode.Country = $projection.withholdingtaxcountry
  association [0..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '147'
                                                                                        and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FLPHostPath                  on  _FLPHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails       on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQltyBusRule                on  _MDQltyBusRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.region
                                                                                        and _RegionText.Country = $projection.country
  association [1..1] to I_Supplier                     as _Supplier                     on  _Supplier.Supplier = $projection.Supplier
  association [0..1] to I_SupplierCompany              as _SupplierCompanyCode          on  _SupplierCompanyCode.Supplier    = $projection.Supplier
                                                                                        and _SupplierCompanyCode.CompanyCode = $projection.CompanyCode
  association [1..1] to I_CompanyCode                  as _CompanyCode                  on  _CompanyCode.CompanyCode = $projection.CompanyCode
  association [1..1] to I_PaymentTerms                 as _PaymentTerms                 on  _PaymentTerms.PaymentTerms = $projection.paymentterms

  association [0..1] to I_User                         as _UserRuleOwner                on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner
  association [0..*] to I_BusinessPartnerGroupingText  as _BusinessPartnerGroupingText  on  _BusinessPartnerGroupingText.BusinessPartnerGrouping = $projection.businesspartnergrouping
  association [0..1] to I_User                         as _UserCreatedBy                on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..*] to I_BPGenderValueHelpText        as _GenderText                   on  _GenderText.GenderCodeName = $projection.gendercodename
  association [0..1] to I_User                         as _UserChangedBy                on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..*] to I_BusinessPartnerLegalFormText as _BusinessPartnerLegalFormText on  _BusinessPartnerLegalFormText.LegalForm = $projection.legalform

  association [0..1] to I_PaymentBlockingReason        as _PaymentBlockingReason        on  _PaymentBlockingReason.PaymentBlockingReason = $projection.paymentblockingreason
  association [0..1] to I_AccountingClerk              as _AccountingClerk              on  _AccountingClerk.CompanyCode = $projection.CompanyCode
                                                                                        and _AccountingClerk.AccountingClerk = $projection.accountingclerk
  association [0..1] to I_Currency                     as _Currency                     on  _Currency.Currency = $projection.currency
  association [0..1] to I_CashPlanningGroup            as _CashPlanningGroup            on  $projection.cashplanninggroup = _CashPlanningGroup.CashPlanningGroup

  //  association [0..1] to I_BankAccountTP                as _BankAccountTP                 on  _BankAccountTP.Bank = $projection.housebank
  association [0..1] to I_DocumentInfoRecordAuthznGrp  as _DocumentInfoRecordAuthznGrp  on  _DocumentInfoRecordAuthznGrp.AuthorizationGroup = $projection.authorizationgroup
  //  association [0..1] to I_Paymentmethodsupplementtext as _Paymentmethodsupplementtext on _Paymentmethodsupplementtext.PaymentMethodSupplement = $projection.paymentmethodsupplement

  //extensibility associations
  association [0..1] to E_Supplier                     as _SupplierExtension            on  _SupplierExtension.Supplier = $projection.Supplier
  association [0..1] to E_BP_D                         as _BusinessPartnerExtension     on  _BusinessPartnerExtension.BusinessPartner = $projection.BusinessPartner
  association [0..1] to E_SUPCO_D                      as _CompanyCodeExtension         on  $projection.Supplier = _CompanyCodeExtension.Supplier
{
  key  _MDQAnlytsScrBPSuplrCoCode.MasterDataChangeProcess,
  key  _MDQAnlytsScrBPSuplrCoCode.BusinessPartner,
  key  _MDQAnlytsScrBPSuplrCoCode.MDQualityBusinessRuleUUID,
  key  _MDQAnlytsScrBPSuplrCoCode.MDQltyBusRuleEvalResultCode,
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  _MDQAnlytsScrBPSuplrCoCode.CompanyCode,

       //process data
       _MDQAnlytsScrBPSuplrCoCode._MasterDataChangeProcess.MDChgProcessFinishDate,
       @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
       @Semantics.booleanIndicator: true
       _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

       //rule data
       _MDQAnlytsScrBPSuplrCoCode.MDQltyBusinessRuleBaseTable,
       _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
       @ObjectModel.foreignKey.association: '_UserRuleOwner'
       _MDQAnlytsScrBPSuplrCoCode.MDQltyBusinessRuleOwner,
       _MDQltyBusRule.MDQltyBusRuleCheckedField,
       _MDQltyBusRule.MDQltyBusRuleCheckedFieldTable,
       _MDQltyBusRule.MDQltyBusRuleChkdFieldAndTable,
       _MDQltyBusRule.MDQualityBusinessRule,
       _MDQltyBusRule.MDQualityBusinessRuleName,

       //supplier data
       Supplier,
       _Supplier.AlternativePayeeIsAllowed,
       @ObjectModel.text.association: '_CnsldtnIndustryT'
       _Supplier.Industry,
       //@ObjectModel.foreignKey.association: '_BusPartAuthorizationGroup'
       //_Supplier.AuthorizationGroup,
       _Supplier.PaymentIsBlockedForSupplier,
       //@ObjectModel.text.association: '_PaymentReasonText'
       //_Supplier.PaymentReason,
       _Supplier.PostingIsBlocked,
       _Supplier.PurchasingIsBlocked,
       @ObjectModel.text.association: '_ProcurementBlockText'
       _Supplier.SupplierProcurementBlock,
       _Supplier.ResponsibleType,
       //@ObjectModel.foreignKey.association: '_SuplrProofOfDelivRlvtCode'
       _Supplier.SuplrProofOfDelivRlvtCode,
       _Supplier.CityName,
       @ObjectModel.foreignKey.association: '_Country'
       _Supplier.Country,
       _Supplier.PostalCode,
       @ObjectModel.text.association: '_RegionText'
       _Supplier.Region,
       _Supplier.SuplrQualityManagementSystem,
       @ObjectModel.foreignKey.association: '_SupplierAccountGroup'
       _Supplier.SupplierAccountGroup,
       _Supplier.SupplierCorporateGroup,
       _Supplier.SupplierIsPlantRelevant,
       _Supplier.SupplierIsSubRangeRelevant,

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


       //supplier company code data
       @ObjectModel.foreignKey.association: '_PaymentBlockingReason'
       _SupplierCompanyCode.PaymentBlockingReason,
       //xfeld no association
       _SupplierCompanyCode.SupplierIsBlockedForPosting,
       @ObjectModel.foreignKey.association: '_AccountingClerk'
       _SupplierCompanyCode.AccountingClerk,
       _SupplierCompanyCode.SupplierClerk,
       //Domain: ZTERM
       @ObjectModel.foreignKey.association: '_PaymentTerms'
       _SupplierCompanyCode.PaymentTerms,
       //       @ObjectModel.foreignKey.association: '_BankAccountTP'
       _SupplierCompanyCode.HouseBank,
       @ObjectModel.foreignKey.association: '_Currency'
       _SupplierCompanyCode.Currency,
       //SKA1
       _SupplierCompanyCode.ReconciliationAccount,
       //T005Q nothing found in VDM_CDS
       @ObjectModel.foreignKey.association: '_CountryTaxCode'
       _SupplierCompanyCode.WithholdingTaxCountry,
       //T035 nothing found in VDM_CDS
       @ObjectModel.foreignKey.association: '_CashPlanningGroup'
       _SupplierCompanyCode.CashPlanningGroup,
       //VBWF08 nothing found in VDM_CDS
       _SupplierCompanyCode.SupplierReleaseGroup,
       //T042F nothing found in VDM_CDS
       //       @ObjectModel.foreignKey.association: '_Paymentmethodsupplementtext'
       _SupplierCompanyCode.PaymentMethodSupplement,
       //FARP_PAYT_RSN_T  nothing found in VDM_CDS
       @ObjectModel.text.association: '_PaymentReasonText'
       _SupplierCompanyCode.PaymentReason,
       @ObjectModel.foreignKey.association: '_DocumentInfoRecordAuthznGrp'
       @EndUserText.label: 'Authorization Group'
       _SupplierCompanyCode.AuthorizationGroup,

       //standard associations
       _BusinessPartner,
       _BusinessPartner._AcademicTitleValueHelp,

       //supplier associations
       _BusinessPartnerGroupingText,
       _BusinessPartnerLegalFormText,
       //_BusPartAuthorizationGroup,
       _CashPlanningGroup,
       _CnsldtnIndustryT,
       _CompanyCode,
       _Country,
       _CountryTaxCode,
       _Currency,
       _GenderText,
       _PaymentReasonText,
       _ProcurementBlockText,
       _RegionText,
       _Supplier,
       _SupplierAccountGroup,
       _SupplierCompanyCode,
       _UserRuleOwner,
       _UserChangedBy,
       _UserCreatedBy,

       //supplier company code associations
       _AccountingClerk,
       //       _BankAccountTP,
       _DocumentInfoRecordAuthznGrp,
       _PaymentBlockingReason,
       //       _Paymentmethodsupplementtext,
       _PaymentTerms,

       @Aggregation.default: #SUM
       _MDQAnlytsScrBPSuplrCoCode.MDQltyNmbrOfSuccssflEvalRslts,
       @Aggregation.default: #SUM
       _MDQAnlytsScrBPSuplrCoCode.MDQltyNmbrOfFailedEvalRslts,
       @Aggregation.default: #SUM
       _MDQAnlytsScrBPSuplrCoCode.MDQltyNmbrOfBusRuleEvalResults,

       @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
       //reducing field length to 250 results in an ATC error
       cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
         '#MDQualityEvaluation-displayEvaluationResultSuplrCoCode?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path) as MDQltyAlPgNavigationPath
}
```
