---
name: I_MDQANLYTSSCRSUPLRC
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier general data. You can analyze the data using master data attributes, for example, country or supplier account group, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRC')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier general data. You can analyze the data using master data attributes, for example, country or supplier account group, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Supplier General - Cube — CDS view giao diện dựa trên I_MDQAnlytsScrBPSuplr."
keywords:
  - "MDQ Score for Supplier General - Cube"
  - "mdq"
  - "score"
  - "for"
  - "supplier"
  - "general"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "business"
  - "partner"
  - "quality"
  - "rule"
  - "qlty"
tags:
  - CA
  - account
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - master-data
  - supplier
---
# I_MDQANLYTSSCRSUPLRC

**This CDS view helps to retrieve the results of quality evaluations and master data scores for supplier general data. You can analyze the data using master data attributes, for example, country or supplier account group, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my supplier general data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | | `_MDQAnlytsScrBPSuplr` | `MasterDataChangeProcess` | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` | ✓ | | `_MDQAnlytsScrBPSuplr` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `MDQualityBusinessRuleUUID` | ✓ | | `_MDQAnlytsScrBPSuplr` | `MDQualityBusinessRuleUUID` | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | | `_MDQAnlytsScrBPSuplr` | `MDQltyBusRuleEvalResultCode` | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDChgProcessFinishDate` |  | | `_MDQAnlytsScrBPSuplr._MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | | `_MDQAnlytsScrBPSuplr` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | | `_MDQAnlytsScrBPSuplr` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedFieldTable` | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleChkdFieldAndTable` | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | | `_MDQltyBusRule` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | | `_MDQltyBusRule` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `AlternativePayeeIsAllowed` |  | | `_Supplier` | `AlternativePayeeIsAllowed` | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `Industry` |  | | `_Supplier` | `Industry` | `CHAR(4)` | Industry Key |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `PaymentIsBlockedForSupplier` |  | | `_Supplier` | `PaymentIsBlockedForSupplier` | `CHAR(1)` | Payment Block |
| `PaymentReason` |  | | `_Supplier` | `PaymentReason` | `CHAR(4)` | Payment Reason |
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
| `MDQltyNmbrOfSuccssflEvalRslts` |  | | `_MDQAnlytsScrBPSuplr` | `MDQltyNmbrOfSuccssflEvalRslts` | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | | `_MDQAnlytsScrBPSuplr` | `MDQltyNmbrOfFailedEvalRslts` | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | | `_MDQAnlytsScrBPSuplr` | `MDQltyNmbrOfBusRuleEvalResults` | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultBPGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path)` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_CnsldtnIndustryT` | | ✓ | | | | |
| `_PaymentReasonText` | | ✓ | | | | |
| `_ProcurementBlockText` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_UserRuleOwner` | | ✓ | | | | |
| `_BusinessPartnerGroupingText` | | ✓ | | | | |
| `_UserCreatedBy` | | ✓ | | | | |
| `_GenderText` | | ✓ | | | | |
| `_UserChangedBy` | | ✓ | | | | |
| `_BusinessPartnerLegalFormText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnIndustryT` | `I_CnsldtnIndustryT` | [0..*] |
| `_PaymentReasonText` | `I_PaymentReasonText` | [0..*] |
| `_ProcurementBlockText` | `I_ProcurementBlockText` | [0..*] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_MDQBusinessRuleBaseTableText` | `I_MDQltyBusinessRuleBaseTableT` | [0..*] |
| `_FLPHostPath` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyScoreEvalDetails` | `I_MDQltyScoreEvalDetails` | [1..1] |
| `_MDQltyBusRule` | `I_MDQualityBusinessRule` | [1..1] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_UserRuleOwner` | `I_User` | [0..1] |
| `_BusinessPartnerGroupingText` | `I_BusinessPartnerGroupingText` | [0..*] |
| `_UserCreatedBy` | `I_User` | [0..1] |
| `_GenderText` | `I_BPGenderValueHelpText` | [0..*] |
| `_UserChangedBy` | `I_User` | [0..1] |
| `_BusinessPartnerLegalFormText` | `I_BusinessPartnerLegalFormText` | [0..*] |
| `_SupplierExtension` | `E_Supplier` | [0..1] |
| `_BusinessPartnerExtension` | `E_BP_D` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:['_BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Supplier General - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQBPSuplrEvalAnlytlScr'
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
define view entity I_MDQAnlytsScrSuplrC
  as select from I_MDQAnlytsScrBPSuplr as _MDQAnlytsScrBPSuplr
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
  association [0..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '147'
                                                                                        and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FLPHostPath                  on  _FLPHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails       on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQltyBusRule                on  _MDQltyBusRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.region
                                                                                        and _RegionText.Country = $projection.country
  association [1..1] to I_Supplier                     as _Supplier                     on  _Supplier.Supplier = $projection.Supplier
  association [0..1] to I_User                         as _UserRuleOwner                on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner
  association [0..*] to I_BusinessPartnerGroupingText  as _BusinessPartnerGroupingText  on  _BusinessPartnerGroupingText.BusinessPartnerGrouping = $projection.businesspartnergrouping
  association [0..1] to I_User                         as _UserCreatedBy                on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..*] to I_BPGenderValueHelpText        as _GenderText                   on  _GenderText.GenderCodeName = $projection.gendercodename
  association [0..1] to I_User                         as _UserChangedBy                on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..*] to I_BusinessPartnerLegalFormText as _BusinessPartnerLegalFormText on  _BusinessPartnerLegalFormText.LegalForm = $projection.legalform

  //extensibility associations
  association [0..1] to E_Supplier                     as _SupplierExtension            on  _SupplierExtension.Supplier = $projection.Supplier
  association [0..1] to E_BP_D                         as _BusinessPartnerExtension     on  _BusinessPartnerExtension.BusinessPartner = $projection.BusinessPartner
{
  key _MDQAnlytsScrBPSuplr.MasterDataChangeProcess,
  key _MDQAnlytsScrBPSuplr.BusinessPartner,
  key _MDQAnlytsScrBPSuplr.MDQualityBusinessRuleUUID,
  key _MDQAnlytsScrBPSuplr.MDQltyBusRuleEvalResultCode,

      //process data
      _MDQAnlytsScrBPSuplr._MasterDataChangeProcess.MDChgProcessFinishDate,
      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      @Semantics.booleanIndicator: true
      _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

      //rule data
      _MDQAnlytsScrBPSuplr.MDQltyBusinessRuleBaseTable,
      _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
      @ObjectModel.foreignKey.association: '_UserRuleOwner'
      _MDQAnlytsScrBPSuplr.MDQltyBusinessRuleOwner,
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
      _Supplier.AuthorizationGroup,
      _Supplier.PaymentIsBlockedForSupplier,
      //@ObjectModel.text.association: '_PaymentReasonText'
      _Supplier.PaymentReason,
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

      //standard associations
      _BusinessPartner,
      _BusinessPartner._AcademicTitleValueHelp,

      //supplier associations
      _BusinessPartnerGroupingText,
      _BusinessPartnerLegalFormText,
      //_BusPartAuthorizationGroup,
      _CnsldtnIndustryT,
      _Country,
      _GenderText,
      _PaymentReasonText,
      _ProcurementBlockText,
      _RegionText,
      _Supplier,
      _SupplierAccountGroup,
      //_SuplrProofOfDelivRlvtCode,
      _UserRuleOwner,
      _UserChangedBy,
      _UserCreatedBy,

      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplr.MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplr.MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      _MDQAnlytsScrBPSuplr.MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultBPGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=147') as mdq_maint_host_path) as MDQltyAlPgNavigationPath
}
```
