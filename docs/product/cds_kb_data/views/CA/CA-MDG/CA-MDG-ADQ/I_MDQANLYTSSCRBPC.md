---
name: I_MDQANLYTSSCRBPC
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for business partner general data. You can analyze the data using master data attributes, for example, country, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my business partner general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for business partner general data. You can analyze the data using master data attributes, for example, country, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my business partner general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Business Partner - Cube — CDS view giao diện dựa trên I_MDQAnlytsScrBP."
keywords:
  - "MDQ Score for Business Partner - Cube"
  - "mdq"
  - "score"
  - "for"
  - "business"
  - "partner"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "quality"
  - "rule"
  - "qlty"
  - "eval"
  - "result"
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - master-data
---
# I_MDQANLYTSSCRBPC

**This CDS view helps to retrieve the results of quality evaluations and master data scores for business partner general data. You can analyze the data using master data attributes, for example, country, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my business partner general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `MDQualityBusinessRuleUUID` | ✓ | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDChgProcessFinishDate` |  | | `_MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | | `_MDQAnlytsScrBP` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | | `_MDQAnlytsScrBP` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedFieldTable` | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleChkdFieldAndTable` | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | | `_MDQltyBusRule` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | | `_MDQltyBusRule` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AcademicTitle` |  | | `_BusinessPartner` | `AcademicTitle` | `CHAR(4)` | Academic Title: Key |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `BPFirstNameSearchHelp` |  | | `_BusinessPartner` | `BPFirstNameSearchHelp` | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | | `_BusinessPartner` | `BPLastNameSearchHelp` | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartnerCategory` |  | | `_BusinessPartner` | `BusinessPartnerCategory` | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerGrouping` |  | | `_BusinessPartner` | `BusinessPartnerGrouping` | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerIsBlocked` |  | | `_BusinessPartner` | `BusinessPartnerIsBlocked` | `CHAR(1)` | Central Block for Business Partner |
| `CityName` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `CityName` | `CHAR(40)` | City |
| `Country` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
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
| `PostalCode` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `Region` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SearchTerm1` |  | | `_BusinessPartner` | `SearchTerm1` | `CHAR(20)` | Search Term 1 for Business Partner |
| `SearchTerm2` |  | | `_BusinessPartner` | `SearchTerm2` | `CHAR(20)` | Search Term 2 for Business Partner |
| `StreetName` |  | | `_BusinessPartner._DefaultAddress._AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultBPGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path)` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_GenderText` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerGroupingText` | | ✓ | | | | |
| `_BusinessPartnerLegalFormText` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_UserChangedBy` | | ✓ | | | | |
| `_UserCreatedBy` | | ✓ | | | | |
| `_UserRuleOwner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenderText` | `I_BPGenderValueHelpText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerGroupingText` | `I_BusinessPartnerGroupingText` | [0..*] |
| `_BusinessPartnerLegalFormText` | `I_BusinessPartnerLegalFormText` | [0..*] |
| `_Country` | `I_Country` | [1..1] |
| `_MDQBusinessRuleBaseTableText` | `I_MDQltyBusinessRuleBaseTableT` | [0..*] |
| `_FLPHostPath` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyScoreEvalDetails` | `I_MDQltyScoreEvalDetails` | [1..1] |
| `_MDQltyBusRule` | `I_MDQualityBusinessRule` | [1..1] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_UserChangedBy` | `I_User` | [0..1] |
| `_UserCreatedBy` | `I_User` | [0..1] |
| `_UserRuleOwner` | `I_User` | [0..1] |
| `_BusinessPartnerExtension` | `E_BP_D` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:['_BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Business Partner - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQBPEvalAnlytlScr'
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
define view entity I_MDQAnlytsScrBPC
  as select from I_MDQAnlytsScrBP as _MDQAnlytsScrBP
  //standard associations
  association [0..*] to I_BPGenderValueHelpText        as _GenderText                   on  _GenderText.GenderCodeName = $projection.gendercodename
  association [1..1] to I_BusinessPartner              as _BusinessPartner              on  _BusinessPartner.BusinessPartner = $projection.BusinessPartner
  association [0..*] to I_BusinessPartnerGroupingText  as _BusinessPartnerGroupingText  on  _BusinessPartnerGroupingText.BusinessPartnerGrouping = $projection.businesspartnergrouping
  association [0..*] to I_BusinessPartnerLegalFormText as _BusinessPartnerLegalFormText on  _BusinessPartnerLegalFormText.LegalForm = $projection.legalform
//  association [0..*] to I_BusPartAuthorizationGroupTxt as _BusPartAuthorizationGroupTxt on  _BusPartAuthorizationGroupTxt.AuthorizationGroup  = $projection.authorizationgroup
//                                                                                        and _BusPartAuthorizationGroupTxt.AuthorizationObject = 'BUPA'
  association [1..1] to I_Country                      as _Country                      on  _Country.Country = $projection.country
  association [0..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '147'
                                                                                        and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FLPHostPath                  on  _FLPHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails       on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQltyBusRule                on  _MDQltyBusRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.region
                                                                                        and _RegionText.Country = $projection.country
  association [0..1] to I_User                         as _UserChangedBy                on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..1] to I_User                         as _UserCreatedBy                on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..1] to I_User                         as _UserRuleOwner                on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner

  //extensibility associations
  association [0..1] to E_BP_D                         as _BusinessPartnerExtension     on  _BusinessPartnerExtension.BusinessPartner = $projection.BusinessPartner
{
  key MasterDataChangeProcess,
  key BusinessPartner,
  key MDQualityBusinessRuleUUID,
  key MDQltyBusRuleEvalResultCode,

      //process data
      _MasterDataChangeProcess.MDChgProcessFinishDate,
      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      @Semantics.booleanIndicator: true
      _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

      //rule data
      _MDQAnlytsScrBP.MDQltyBusinessRuleBaseTable,
      _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
      @ObjectModel.foreignKey.association: '_UserRuleOwner'
      _MDQAnlytsScrBP.MDQltyBusinessRuleOwner,
      _MDQltyBusRule.MDQltyBusRuleCheckedField,
      _MDQltyBusRule.MDQltyBusRuleCheckedFieldTable,
      _MDQltyBusRule.MDQltyBusRuleChkdFieldAndTable,
      _MDQltyBusRule.MDQualityBusinessRule,
      _MDQltyBusRule.MDQualityBusinessRuleName,

      //business partner data
      @ObjectModel.foreignKey.association: '_AcademicTitleValueHelp'
      _BusinessPartner.AcademicTitle,
//      @ObjectModel.text.association: '_BusPartAuthorizationGroupTxt'
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner.BPFirstNameSearchHelp,
      _BusinessPartner.BPLastNameSearchHelp,
      _BusinessPartner.BusinessPartnerCategory,
      @ObjectModel.text.association: '_BusinessPartnerGroupingText'
      _BusinessPartner.BusinessPartnerGrouping,
      _BusinessPartner.BusinessPartnerIsBlocked,
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.CityName,
      @ObjectModel.foreignKey.association: '_Country'
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.Country,
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
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.PostalCode,
      @ObjectModel.text.association: '_RegionText'
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.Region,
      _BusinessPartner.SearchTerm1,
      _BusinessPartner.SearchTerm2,
      _BusinessPartner._DefaultAddress._AddressDefaultRepresentation.StreetName,
      
      //standard associations
      _BusinessPartner,
      _BusinessPartner._AcademicTitleValueHelp,
      _BusinessPartnerGroupingText,
      _BusinessPartnerLegalFormText,
//      _BusPartAuthorizationGroupTxt,
      _Country,
      _GenderText,
      _RegionText,
      _UserChangedBy,
      _UserCreatedBy,
      _UserRuleOwner,

      @Aggregation.default: #SUM
      MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultBPGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path) as MDQltyAlPgNavigationPath
}
```
