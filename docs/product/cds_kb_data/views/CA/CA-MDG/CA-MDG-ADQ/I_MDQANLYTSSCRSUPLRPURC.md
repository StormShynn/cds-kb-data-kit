---
name: I_MDQANLYTSSCRSUPLRPURC
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier purchasing data. You can analyze the data using master data attributes, for example, country or purchasing organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier purchasing data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRPURC')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier purchasing data. You can analyze the data using master data attributes, for example, country or purchasing organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier purchasing data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Supplier Purchase - Cube — CDS view giao diện dựa trên I_MDQAnlytsScrBPSuplrPur."
keywords:
  - "MDQ Score for Supplier Purchase - Cube"
  - "mdq"
  - "score"
  - "for"
  - "supplier"
  - "purchase"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "business"
  - "partner"
  - "purchasing"
  - "organization"
  - "quality"
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
# I_MDQANLYTSSCRSUPLRPURC

**This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier purchasing data. You can analyze the data using master data attributes, for example, country or purchasing organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier purchasing data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRPURC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | | `_MDQAnlytsScrBPSuplrPur` | `MasterDataChangeProcess` | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` | ✓ | | `_MDQAnlytsScrBPSuplrPur` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `PurchasingOrganization` | ✓ | | `_MDQAnlytsScrBPSuplrPur` | `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `MDQualityBusinessRuleUUID` | ✓ | | `_MDQAnlytsScrBPSuplrPur` | `MDQualityBusinessRuleUUID` | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyBusRuleEvalResultCode` | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `AlternativePayeeIsAllowed` |  | | `_Supplier` | `AlternativePayeeIsAllowed` | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `CityName` |  | | `_Supplier` | `CityName` | `CHAR(35)` | City |
| `Country` |  | | `_Supplier` | `Country` | `CHAR(3)` | Country/Region Key |
| `Industry` |  | | `_Supplier` | `Industry` | `CHAR(4)` | Industry Key |
| `PaymentIsBlockedForSupplier` |  | | `_Supplier` | `PaymentIsBlockedForSupplier` | `CHAR(1)` | Payment Block |
| `PaymentReason` |  | | `_Supplier` | `PaymentReason` | `CHAR(4)` | Payment Reason |
| `PostalCode` |  | | `_Supplier` | `PostalCode` | `CHAR(10)` | Postal Code |
| `PostingIsBlocked` |  | | `_Supplier` | `PostingIsBlocked` | `CHAR(1)` | Central Posting Block |
| `PurchasingIsBlocked` |  | | `_Supplier` | `PurchasingIsBlocked` | `CHAR(1)` | Centrally imposed purchasing block |
| `Region` |  | | `_Supplier` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ResponsibleType` |  | | `_Supplier` | `ResponsibleType` | `CHAR(2)` | Tax Type |
| `SuplrProofOfDelivRlvtCode` |  | | `_Supplier` | `SuplrProofOfDelivRlvtCode` | `CHAR(1)` | Supplier indicator relevant for proof of delivery |
| `SuplrQualityManagementSystem` |  | | `_Supplier` | `SuplrQualityManagementSystem` | `CHAR(4)` | Actual QM System of Supplier |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
| `SupplierCorporateGroup` |  | | `_Supplier` | `SupplierCorporateGroup` | `CHAR(10)` | Group Key |
| `SupplierIsPlantRelevant` |  | | `_Supplier` | `SupplierIsPlantRelevant` | `CHAR(1)` | Indicator: plant level relevant |
| `SupplierIsSubRangeRelevant` |  | | `_Supplier` | `SupplierIsSubRangeRelevant` | `CHAR(1)` | Indicator: vendor sub-range relevant |
| `SupplierProcurementBlock` |  | | `_Supplier` | `SupplierProcurementBlock` | `CHAR(2)` | Function That Will Be Blocked |
| `AuthorizationGroup` |  | | `_SupplierPurchasingOrg` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `PaymentTerms` |  | | `_SupplierPurchasingOrg` | `PaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PurchaseOrderCurrency` |  | | `_SupplierPurchasingOrg` | `PurchaseOrderCurrency` | `CUKY(5)` | Purchase order currency |
| `PurchasingGroup` |  | | `_SupplierPurchasingOrg` | `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingIsBlockedForSupplier` |  | | `_SupplierPurchasingOrg` | `PurchasingIsBlockedForSupplier` | `CHAR(1)` | Purchasing block at purchasing organization level |
| `RoundingProfile` |  | | `_SupplierPurchasingOrg` | `RoundingProfile` | `CHAR(4)` | Rounding Profile |
| `PlanningCycle` |  | | `_SupplierPurchasingOrg` | `PlanningCycle` | `CHAR(3)` | Planning Cycle |
| `MDChgProcessFinishDate` |  | | `_MDQAnlytsScrBPSuplrPur._MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
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
| `MDQltyNmbrOfSuccssflEvalRslts` |  | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyNmbrOfSuccssflEvalRslts` | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyNmbrOfFailedEvalRslts` | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | | `_MDQAnlytsScrBPSuplrPur` | `MDQltyNmbrOfBusRuleEvalResults` | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  | `cast( concat( _MDQltyFioriLaunchpadHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultSuplrPurg?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path)` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_CnsldtnIndustryT` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_ProcurementBlockText` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_SupplierPurchasingOrg` | | ✓ | | | | |
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
| `_CnsldtnIndustryT` | `I_CnsldtnIndustryT` | [0..*] |
| `_Country` | `I_Country` | [1..1] |
| `_ProcurementBlockText` | `I_ProcurementBlockText` | [0..*] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_SupplierPurchasingOrg` | `I_SupplierPurchasingOrg` | [1..1] |
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
| `_SupplierExtension` | `E_Supplier` | [0..1] |
| `_PurchaseExtension` | `E_BPPURORG_D` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRPURC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRPURC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:['_BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Supplier Purchase - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQBPSuplrPurAnlytlScr'
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
define view entity I_MDQAnlytsScrSuplrPurC
  as select from I_MDQAnlytsScrBPSuplrPur as _MDQAnlytsScrBPSuplrPur

  //supplier associations
  association [0..*] to I_CnsldtnIndustryT             as _CnsldtnIndustryT             on  _CnsldtnIndustryT.Industry = $projection.industry
  association [1..1] to I_Country                      as _Country                      on  _Country.Country = $projection.country
  association [0..*] to I_ProcurementBlockText         as _ProcurementBlockText         on  _ProcurementBlockText.ProcurementBlock = $projection.supplierprocurementblock
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.region
                                                                                        and _RegionText.Country = $projection.country
  association [1..1] to I_Supplier                     as _Supplier                     on  _Supplier.Supplier = $projection.Supplier
  association [0..1] to I_SupplierAccountGroup         as _SupplierAccountGroup         on  _SupplierAccountGroup.SupplierAccountGroup = $projection.supplieraccountgroup

  //supplier purchase associations
  association [0..1] to I_Currency                     as _Currency                     on  _Currency.Currency = $projection.purchaseordercurrency
  association [0..1] to I_PaymentTerms                 as _PaymentTerms                 on  _PaymentTerms.PaymentTerms = $projection.paymentterms
  association [1..1] to I_PurchasingGroup              as _PurchasingGroup              on  _PurchasingGroup.PurchasingGroup = $projection.purchasinggroup
  association [1..1] to I_PurchasingOrganization       as _PurchasingOrganization       on  _PurchasingOrganization.PurchasingOrganization = $projection.PurchasingOrganization
  association [1..1] to I_SupplierPurchasingOrg        as _SupplierPurchasingOrg        on  _SupplierPurchasingOrg.Supplier               = $projection.Supplier
                                                                                        and _SupplierPurchasingOrg.PurchasingOrganization = $projection.PurchasingOrganization

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
  association [0..1] to E_Supplier                     as _SupplierExtension            on  _SupplierExtension.Supplier = $projection.Supplier
  association [0..1] to E_BPPURORG_D                   as _PurchaseExtension            on  _PurchaseExtension.Supplier               = $projection.Supplier
                                                                                        and _PurchaseExtension.PurchasingOrganization = $projection.PurchasingOrganization
{
  key _MDQAnlytsScrBPSuplrPur.MasterDataChangeProcess,
  key _MDQAnlytsScrBPSuplrPur.BusinessPartner,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
  key _MDQAnlytsScrBPSuplrPur.PurchasingOrganization,
  key _MDQAnlytsScrBPSuplrPur.MDQualityBusinessRuleUUID,
  key _MDQAnlytsScrBPSuplrPur.MDQltyBusRuleEvalResultCode,

      //supplier data
      Supplier,
      _Supplier.AlternativePayeeIsAllowed,
      _Supplier.CityName,
      @ObjectModel.foreignKey.association: '_Country'
      _Supplier.Country,
      @ObjectModel.text.association: '_CnsldtnIndustryT'
      _Supplier.Industry,
      _Supplier.PaymentIsBlockedForSupplier,
      //@ObjectModel.text.association: '_PaymentReasonText'
      _Supplier.PaymentReason,
      _Supplier.PostalCode,
      _Supplier.PostingIsBlocked,
      _Supplier.PurchasingIsBlocked,
      @ObjectModel.text.association: '_RegionText'
      _Supplier.Region,
      _Supplier.ResponsibleType,
      //@ObjectModel.foreignKey.association: '_SuplrProofOfDelivRlvtCode'
      _Supplier.SuplrProofOfDelivRlvtCode,
      _Supplier.SuplrQualityManagementSystem,
      @ObjectModel.foreignKey.association: '_SupplierAccountGroup'
      _Supplier.SupplierAccountGroup,
      _Supplier.SupplierCorporateGroup,
      _Supplier.SupplierIsPlantRelevant,
      _Supplier.SupplierIsSubRangeRelevant,
      @ObjectModel.text.association: '_ProcurementBlockText'
      _Supplier.SupplierProcurementBlock,

      //supplier purchase data
      _SupplierPurchasingOrg.AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_Paymentterms'
      _SupplierPurchasingOrg.PaymentTerms,
      @ObjectModel.foreignKey.association: '_Currency'
      _SupplierPurchasingOrg.PurchaseOrderCurrency,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _SupplierPurchasingOrg.PurchasingGroup,
      _SupplierPurchasingOrg.PurchasingIsBlockedForSupplier,
      _SupplierPurchasingOrg.RoundingProfile,
      _SupplierPurchasingOrg.PlanningCycle,

      //process data
      _MDQAnlytsScrBPSuplrPur._MasterDataChangeProcess.MDChgProcessFinishDate,
      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      @Semantics.booleanIndicator: true
      _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

      //rule data
      _MDQAnlytsScrBPSuplrPur.MDQltyBusinessRuleBaseTable,
      _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
      @ObjectModel.foreignKey.association: '_UserRuleOwner'
      _MDQAnlytsScrBPSuplrPur.MDQltyBusinessRuleOwner,
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

      //supplier associations
      _CnsldtnIndustryT,
      _Country,
      _ProcurementBlockText,
      _RegionText,
      _Supplier,
      _SupplierAccountGroup,

      //supplier purchase associations
      _Currency,
      _PaymentTerms,
      _PurchasingGroup,
      _PurchasingOrganization,
      _SupplierPurchasingOrg,

      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplrPur.MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplrPur.MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplrPur.MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _MDQltyFioriLaunchpadHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultSuplrPurg?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path) as MDQltyAlPgNavigationPath
}
```
