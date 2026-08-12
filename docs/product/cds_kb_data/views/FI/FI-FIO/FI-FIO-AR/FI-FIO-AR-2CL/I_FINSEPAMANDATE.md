---
name: I_FINSEPAMANDATE
description: "SEPA Mandate for Financial Accounting"
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value
semantic_en: "SEPA Mandate for Financial Accounting"
semantic_vi: "SEPA Mandate for Financial Accounting — CDS view giao diện dựa trên I_SEPAMandate."
keywords:
  - "sepa"
  - "mandate"
  - "for"
  - "financial"
  - "accounting"
  - "image"
  - "type"
  - "version"
  - "application"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-AR-2CL
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - interface-view
  - lob:finance
---
# I_FINSEPAMANDATE

**SEPA Mandate for Financial Accounting**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateUUID` | ✓ | |  |  | `RAW(16)` | Mandate: GUID of Mandate |
| `SEPAMandateImageType` | ✓ | |  | `cast('' as fsepa_image_type)` | `CHAR(1)` | Image Type For SEPA Mandate Draft Data |
| `SEPAMandateVersion` |  | |  |  | `NUMC(4)` | Mandate: Version of Mandate (0 = Current Version) |
| `SEPAMandateApplication` |  | |  |  | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SEPAMandateSender` |  | |  |  | `CHAR(70)` | Mandate: Sender ID |
| `PayingCompanyCode` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateRecipientType = 'BUS0002' then cast(SEPAMandateRecipient as sepa_cds_dzbukr) end` | `CHAR(4)` | Paying Company Code |
| `SEPAMandateStatus` |  | |  |  | `CHAR(1)` | Mandate Status |
| `SEPAMandateStatusName` |  | |  | `_SEPAMandateStatus._Text[1:Language =$session.system_language].SEPAMandateStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `SEPAMandateStatusChangeReason` |  | |  |  | `CHAR(3)` | Reason Code for Status Change |
| `SEPAMandateStsChangeReasonName` |  | |  | `_SEPAChangeReason._Text[1:Language =$session.system_language].SEPAMandateStsChangeReasonName` | `CHAR(50)` | Description of Reason for Status Change |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (From) |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (To) |
| `SEPAPaymentType` |  | |  |  | `CHAR(1)` | Mandate: Payment Type |
| `SEPAPaymentTypeName` |  | |  | `_SEPAPaymentType._Text[1:Language =$session.system_language].SEPAPaymentTypeName` | `CHAR(60)` | SEPA Mandate Payment Type Name |
| `SEPAMandateIsB2BMandate` |  | |  |  | `CHAR(1)` | Mandate: B2B Mandate |
| `SEPASignatureCityName` |  | |  |  | `CHAR(40)` | Location of Signature |
| `SEPASignatureDate` |  | |  |  | `DATS(8)` | Date of Signature |
| `SEPAMandateCreatedByUser` |  | |  | `cast(SEPAMandateCreatedByUser as sepa_cds_ernam preserving type)` | `CHAR(12)` | User who Created the Current Version of the Mandate |
| `CreatedByUserDescription` |  | |  | `case when _CreatedByUser.UserDescription is initial then SEPAMandateCreatedByUser else _CreatedByUser.UserDescription end` | `CHAR(80)` | User Description |
| `SEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which the Current Mandate Version was Created |
| `SEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Current Mandate Version was Created |
| `SEPAMandateCreateDateTime` |  | |  | `cast(dats_tims_to_tstmp(SEPAMandateCreationDate, SEPAMandateCreationTime, abap_system_timezone($session.client, 'NULL'), $session.client, 'NULL') as fsepa_create_date)` | `DEC(15)` | SEPA Mandate Creation Date Time |
| `OriglSEPAMandateCreatedByUser` |  | |  |  | `CHAR(12)` | User who Created the Original Mandate |
| `OriglCreatedByUserDescription` |  | |  | `case when _OriglCreatedByUser.UserDescription is initial then OriglSEPAMandateCreatedByUser else cast(_OriglCreatedByUser.UserDescription as fsepa_org_ernam_name preserving type ) end` | `CHAR(80)` | SEPA Original User Name |
| `OriglSEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Original Mandate Created |
| `OriglSEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time when Original Mandate Was Created |
| `SenderLastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `SenderFirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `SenderStreetName` |  | |  |  | `CHAR(60)` | Street |
| `SenderHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `SenderPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `SenderCityName` |  | |  |  | `CHAR(40)` | City |
| `SenderCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SenderLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `SEPAMandateSenderExternalID` |  | |  | `cast(SEPAMandateSenderExternalID as sepa_snd_debtor_id)` | `CHAR(35)` | Mandate: ID Number of Sender (External Reference) |
| `SEPAMandateAlternativePyrName` |  | |  |  | `CHAR(40)` | SEPA Mandate Alternative Payer Name |
| `SEPAMandateAlternativePayer` |  | |  |  | `CHAR(70)` | Mandate: ID of Alternative Debtor |
| `SEPAMandateSenderIBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SEPAMandateSenderBankSWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `RecipientName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `RecipientName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `SEPAMandateCreditor` |  | |  |  | `CHAR(35)` | Creditor Identification Number |
| `RecipientStreetName` |  | |  |  | `CHAR(60)` | Street |
| `RecipientHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `RecipientPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `RecipientCityName` |  | |  |  | `CHAR(40)` | City |
| `RecipientCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SEPAMandateAlternativePyeName` |  | |  |  | `CHAR(40)` | Mandate: Name of Alternative Payee |
| `SEPAMandateAlternativePayee` |  | |  |  | `CHAR(70)` | Mandate: ID of Alternative Payee |
| `SEPAMandateChangeReason` |  | |  |  | `CHAR(5)` | Mandate: Reason for Change |
| `OriginalSEPAMandateCreditor` |  | |  |  | `CHAR(35)` | Mandate: Original Creditor ID of Mandate |
| `OriginalSEPAMandate` |  | |  |  | `CHAR(35)` | Mandate: Original Mandate of Mandate |
| `SEPAMandateIsLocked` |  | |  |  | `CHAR(1)` | Global Lock Set in Mandate |
| `SEPAMandateLockStartDate` |  | |  |  | `DATS(8)` | Global Lock Valid From |
| `SEPAMandateLockEndDate` |  | |  |  | `DATS(8)` | Global Lock Valid To |
| `SEPAMandateReferenceType` |  | |  |  | `CHAR(10)` | Mandate: Reference Type |
| `SEPAMandateReferenceTypeName` |  | |  | `cast( _SEPAReferenceTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_ref_type_name preserving type )` | `CHAR(80)` | SEPA Mandate Reference Type Name |
| `SEPAMandateReference` |  | |  |  | `CHAR(70)` | Mandate: Reference ID |
| `SEPAMandateReferenceDesc` |  | |  | `cast( SEPAMandateReferenceDesc as sepa_cds_ref_desc preserving type )` | `CHAR(50)` | Reference Description |
| `SEPAMandateSenderType` |  | |  | `cast( SEPAMandateSenderType as sepa_cds_snd_type preserving type )` | `CHAR(10)` | SEPA Mandate: Sender Type |
| `SEPAMandateSenderTypeName` |  | |  | `_SEPASenderTypeText[1:Language =$session.system_language].SEPAMandateSenderTypeName` | `CHAR(80)` | SEPA Mandate Sender Type Name |
| `SEPAMandateRecipientType` |  | |  |  | `CHAR(10)` | Mandate: Recipient Type |
| `SEPAMandateRecipientTypeName` |  | |  | `_SEPARecipientTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription` | `CHAR(80)` | Description |
| `SEPAMandateRecipient` |  | |  |  | `CHAR(70)` | Mandate: Recipient ID |
| `SEPAMandateFirstUseDate` |  | |  | `cast( SEPAMandateFirstUseDate as sepa_cds_firstuse_date preserving type )` | `DATS(8)` | SEPA Mandate: Date of First Use |
| `SEPAMandateFirstUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of First Usage |
| `SEPAMandateFirstUseObjTypeText` |  | |  | `cast( _FirstUseObjTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_firstuse_doctype_name preserving type )` | `CHAR(80)` | SEPA Mandate First Use Object Type Name |
| `SEPAMandateFirstUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of First Usage |
| `SEPAMandateFirstUsePaymentRun` |  | |  |  | `CHAR(16)` | Mandate: ID of Payment Run of First Use |
| `SEPAMandateLastUseDate` |  | |  | `cast( SEPAMandateLastUseDate as sepa_cds_lastuse_date preserving type )` | `DATS(8)` | SEPA Mandate: Date of Last Use |
| `SEPAMandateLastUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of Last Usage |
| `SEPAMandateLastUseObjTypeText` |  | |  | `cast ( _LastUseObjTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_lastuse_doctype_name preserving type )` | `CHAR(80)` | SEPA Mandate Last Use Object type Name |
| `SEPAMandateLastUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of Last Usage |
| `SEPAMandateOrganizationalUnit1` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit2` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit3` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit4` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `Customer` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BUS3007' then cast(SEPAMandateSender as kunnr) end` | `CHAR(10)` | Customer Number |
| `SEPAMandateContractType` |  | |  | `case when SEPAMandateApplication = 'F' then cast(SEPAMandateReferenceType as fsepa_ref_type) end` | `CHAR(10)` | SEPA Mandate: Contract Type |
| `SEPAMandateContract` |  | |  | `case when SEPAMandateApplication = 'F' then cast(SEPAMandateReference as bkk_dte_mnd_contract_id) end` | `CHAR(50)` | BKK: SEPA Mandate Contract ID |
| `CompanyCode` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG' then cast( substring(SEPAMandateSender, 1, 4) as bukrs) else cast('' as bukrs ) end` | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG' then cast(substring(SEPAMandateSender, 5, 10) as belnr_d) else cast('' as belnr_d) end` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG' then cast(substring(SEPAMandateSender, 15, 4) as gjahr) else cast('0000' as gjahr) end` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  | `case when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG' then cast(substring(SEPAMandateSender, 19, 3) as buzei) else cast('000' as buzei) end` | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `BusinessPartner` |  | |  | `case when SEPAMandateApplication = '1' then cast( SEPAMandateSender as bu_partner) end` | `CHAR(10)` | Business Partner Number |
| `CAStandardCompanyCode` |  | |  | `case when SEPAMandateApplication = '1' then cast(SEPAMandateRecipient as sepa_cds_stdbk_kk) end` | `CHAR(4)` | Standard Company Code |
| `CAContract` |  | |  | `case when SEPAMandateApplication = '1' and SEPAMandateReferenceType = 'CA_VTREF' then cast( SEPAMandateReference as vtref_sepa_kk) end` | `CHAR(20)` | Reference Specifications from Contract |
| `ContractAccount` |  | |  | `case when SEPAMandateApplication = '1' and SEPAMandateReferenceType = 'CA_CONTACC' then cast( SEPAMandateReference as vkont_sepa_kk) end` | `CHAR(12)` | Contract Account Number |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Run ID |
| `OneTimeAccountSourceDocType` |  | |  | `cast('' as fota_sourcedoctype)` | `CHAR(10)` | OTA Source Doc Type |
| `OneTimeAccountSourceDocument` |  | |  | `cast('' as fota_sourcedocid)` | `CHAR(32)` | OTA Source Doc ID |
| `OneTimeAccountSourceDocItem` |  | |  | `cast('0000000000' as fota_source_doc_item)` | `NUMC(10)` | OTA Source Doc Item |
| `FinSEPAMandateTransactionType` |  | |  | `cast('' as fsepa_mandate_transactiontype)` | `CHAR(1)` | SEPA Mandate Transaction Type |
| `FinSEPAMandateProcessingStage` |  | |  | `cast('' as fsepa_mandate_processing_stage)` | `CHAR(1)` | Internal processing stage |
| `FinSEPAMandateChgIsNotAllowed` |  | |  | `cast('' as fsepa_chg_is_not_allowed)` | `CHAR(1)` | SEPA Mandate Change Is Not Allowed |
| `SEPAMandateAttchObjectKey` |  | |  | `cast('' as fsepa_attach_object_key)` | `CHAR(70)` | SEPA Mandate Attachment Object Key |
| `FinSEPAMandateFieldStatusVal` |  | |  | `cast('' as fsepa_field_status_value)` | `CHAR(50)` | SEPA Mandate Field Status Value |
| `SEPAMandateHasUsage` |  | |  | `cast('' as boole_d)` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `IsCloudSystem` |  | |  | `cast('' as boole_d)` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `SEPAMandateSpoolOutputDevice` |  | |  | `cast('' as rspopshort)` | `CHAR(4)` | Spool: short name for output device |
| `SEPAMandatePrintQueue` |  | |  | `cast('' as pq_qname)` | `CHAR(32)` | Queue ID |
| `SEPAMandatePrintLanguage` |  | |  | `cast('' as langu)` | `LANG(1)` | Language Key |
| `_Application` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PayingCompanyCode` | | ✓ | | | | |
| `_CAStandardCompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SEPAMandateStatus` | | ✓ | | | | |
| `_SEPAChangeReason` | | ✓ | | | | |
| `_SEPASenderTypeText` | | ✓ | | | | |
| `_SEPAReferenceTypeText` | | ✓ | | | | |
| `_SEPARecipientTypeText` | | ✓ | | | | |
| `_SEPAPaymentType` | | ✓ | | | | |
| `_FirstUseObjTypeText` | | ✓ | | | | |
| `_LastUseObjTypeText` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_OriglCreatedByUser` | | ✓ | | | | |
| `_SenderCountryText` | | ✓ | | | | |
| `_RecipientCountryText` | | ✓ | | | | |
| `_SenderLanguageText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Application` | `I_SEPAApplication` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PayingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CAStandardCompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SEPAMandateStatus` | `I_SEPAMandateStatus` | [1..1] |
| `_SEPAChangeReason` | `I_SEPAMandateStatusChgReason` | [1..1] |
| `_SEPASenderTypeText` | `I_ManageSEPASenderTypeText` | [0..*] |
| `_SEPAReferenceTypeText` | `I_BusinessObjTypeText` | [0..*] |
| `_SEPARecipientTypeText` | `I_BusinessObjTypeText` | [0..*] |
| `_SEPAPaymentType` | `I_SEPAPaymentType` | [1..1] |
| `_FirstUseObjTypeText` | `I_BusinessObjTypeText` | [0..*] |
| `_LastUseObjTypeText` | `I_BusinessObjTypeText` | [0..*] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_OriglCreatedByUser` | `I_User` | [1..1] |
| `_SenderCountryText` | `I_CountryText` | [0..*] |
| `_RecipientCountryText` | `I_CountryText` | [0..*] |
| `_SenderLanguageText` | `I_LanguageText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'SEPA Mandate for Financial Accounting'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  sizeCategory: #XXL,
  serviceQuality: #D,
  dataClass: #MIXED
}
@ObjectModel.sapObjectNodeType.name: 'FinSEPAMandate'
@Analytics:
  {
    dataExtraction: {
      enabled: true,
      delta.changeDataCapture:{
        automatic : true
      }
    }
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
define view entity I_FinSEPAMandate
  as select from I_SEPAMandate
  association [1..1] to I_SEPAApplication            as _Application           on  $projection.SEPAMandateApplication = _Application.SEPAMandateApplication

  association [0..1] to I_CompanyCode                as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_CompanyCode                as _PayingCompanyCode     on  $projection.PayingCompanyCode = _PayingCompanyCode.CompanyCode

  association [0..1] to I_CompanyCode                as _CAStandardCompanyCode on  $projection.CAStandardCompanyCode = _CAStandardCompanyCode.CompanyCode

  association [0..1] to I_BusinessPartner            as _BusinessPartner       on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  association [0..1] to I_Customer                   as _Customer              on  $projection.Customer = _Customer.Customer

  association [1..1] to I_SEPAMandateStatus          as _SEPAMandateStatus     on  $projection.SEPAMandateStatus = _SEPAMandateStatus.SEPAMandateStatus

  association [1..1] to I_SEPAMandateStatusChgReason as _SEPAChangeReason      on  $projection.SEPAMandateApplication        = _SEPAChangeReason.SEPAMandateApplication
                                                                               and $projection.SEPAMandateStatus             = _SEPAChangeReason.SEPAMandateStatus
                                                                               and $projection.SEPAMandateStatusChangeReason = _SEPAChangeReason.SEPAMandateStatusChangeReason

  association [0..*] to I_ManageSEPASenderTypeText   as _SEPASenderTypeText    on  $projection.SEPAMandateSenderType = _SEPASenderTypeText.SEPAMandateSenderType

  association [0..*] to I_BusinessObjTypeText        as _SEPAReferenceTypeText on  $projection.SEPAMandateReferenceType = _SEPAReferenceTypeText.BusinessObjectType

  association [0..*] to I_BusinessObjTypeText        as _SEPARecipientTypeText on  $projection.SEPAMandateRecipientType = _SEPARecipientTypeText.BusinessObjectType

  association [1..1] to I_SEPAPaymentType            as _SEPAPaymentType       on  $projection.SEPAPaymentType = _SEPAPaymentType.SEPAPaymentType

  association [0..*] to I_BusinessObjTypeText        as _FirstUseObjTypeText   on  $projection.SEPAMandateFirstUseObjTypeCode = _FirstUseObjTypeText.BusinessObjectType

  association [0..*] to I_BusinessObjTypeText        as _LastUseObjTypeText    on  $projection.SEPAMandateLastUseObjTypeCode = _LastUseObjTypeText.BusinessObjectType

  association [1..1] to I_User                       as _CreatedByUser         on  $projection.SEPAMandateCreatedByUser = _CreatedByUser.UserID

  association [1..1] to I_User                       as _OriglCreatedByUser    on  $projection.OriglSEPAMandateCreatedByUser = _OriglCreatedByUser.UserID
  
  association [0..*] to I_CountryText                as _SenderCountryText     on  $projection.SenderCountry = _SenderCountryText.Country
  
  association [0..*] to I_CountryText                as _RecipientCountryText  on  $projection.RecipientCountry = _RecipientCountryText.Country
  
  association [0..*] to I_LanguageText               as _SenderLanguageText    on  $projection.SenderLanguage = _SenderLanguageText.LanguageCode
{
  key SEPAMandateUUID,
  key cast('' as fsepa_image_type) as SEPAMandateImageType,
      SEPAMandateVersion,

      //Main Fields
      @ObjectModel.foreignKey.association: '_Application'
      SEPAMandateApplication,
      SEPAMandate,

      //Document Reference
      SEPAMandateSender,
      @ObjectModel.foreignKey.association: '_PayingCompanyCode'
      case
       when SEPAMandateApplication = 'F' and SEPAMandateRecipientType = 'BUS0002'
       then cast(SEPAMandateRecipient as sepa_cds_dzbukr)
      end                                                                                          as PayingCompanyCode,

      //Status and Validity
      @ObjectModel.text.element: ['SEPAMandateStatusName']
      @ObjectModel.foreignKey.association: '_SEPAMandateStatus'
      SEPAMandateStatus,
      @Semantics.text: true
      _SEPAMandateStatus._Text[1:Language =$session.system_language].SEPAMandateStatusName         as SEPAMandateStatusName,
      @ObjectModel.foreignKey.association: '_SEPAChangeReason'
      SEPAMandateStatusChangeReason,
      @Semantics.text: true
      _SEPAChangeReason._Text[1:Language =$session.system_language].SEPAMandateStsChangeReasonName as SEPAMandateStsChangeReasonName,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.text.element: ['SEPAPaymentTypeName']
      SEPAPaymentType,
      @Semantics.text: true
      _SEPAPaymentType._Text[1:Language =$session.system_language].SEPAPaymentTypeName             as SEPAPaymentTypeName,
      SEPAMandateIsB2BMandate,

      //Administrative Data
      SEPASignatureCityName,
      SEPASignatureDate,
//      @Semantics.user.createdBy: true
      @ObjectModel.text.element: ['CreatedByUserDescription']
      cast(SEPAMandateCreatedByUser as sepa_cds_ernam preserving type)                             as SEPAMandateCreatedByUser,
      @Semantics.text: true
      case
          when _CreatedByUser.UserDescription is initial then SEPAMandateCreatedByUser
          else _CreatedByUser.UserDescription
        end                                                                                        as CreatedByUserDescription,
      SEPAMandateCreationDate,
      SEPAMandateCreationTime,
      cast(dats_tims_to_tstmp(SEPAMandateCreationDate, SEPAMandateCreationTime,
        abap_system_timezone($session.client, 'NULL'),
        $session.client, 'NULL') as fsepa_create_date)                                                     as SEPAMandateCreateDateTime,
//      @Semantics.user.createdBy: true
      @ObjectModel.text.element: ['OriglCreatedByUserDescription']
      OriglSEPAMandateCreatedByUser,
      @Semantics.text: true
      case
          when _OriglCreatedByUser.UserDescription is initial then OriglSEPAMandateCreatedByUser
          else cast(_OriglCreatedByUser.UserDescription as fsepa_org_ernam_name preserving type )
      end                                                                                          as OriglCreatedByUserDescription,
      OriglSEPAMandateCreationDate,
      OriglSEPAMandateCreationTime,

      //Name & Address of Payer
      SenderLastName,
      SenderFirstName,
      SenderStreetName,
      SenderHouseNumber,
      SenderPostalCode,
      SenderCityName,
      SenderCountry,
      SenderLanguage,
      cast(SEPAMandateSenderExternalID as sepa_snd_debtor_id) as SEPAMandateSenderExternalID,
      SEPAMandateAlternativePyrName,
      SEPAMandateAlternativePayer,

      //Bank Data of Payer
      SEPAMandateSenderIBAN,
      SEPAMandateSenderBankSWIFTCode,


      //Name & Address of Payment Recipient
      RecipientName1,
      RecipientName2,
      SEPAMandateCreditor,
      RecipientStreetName,
      RecipientHouseNumber,
      RecipientPostalCode,
      RecipientCityName,
      RecipientCountry,
      SEPAMandateAlternativePyeName,
      SEPAMandateAlternativePayee,


      //Fields that not show on UI
      SEPAMandateChangeReason,
      OriginalSEPAMandateCreditor,
      OriginalSEPAMandate,

      ////Lock
      SEPAMandateIsLocked,
      SEPAMandateLockStartDate,
      SEPAMandateLockEndDate,

      ////Mandate Reference
      @ObjectModel.text.element: ['SEPAMandateReferenceTypeName']
      SEPAMandateReferenceType,
      @Semantics.text: true
      cast( _SEPAReferenceTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_ref_type_name preserving type )   as SEPAMandateReferenceTypeName,
      @ObjectModel.text.element: ['SEPAMandateReferenceDesc']
      SEPAMandateReference,
      @Semantics.text: true
      cast( SEPAMandateReferenceDesc as sepa_cds_ref_desc preserving type )                        as SEPAMandateReferenceDesc,
      @ObjectModel.text.element: ['SEPAMandateSenderTypeName']
      cast( SEPAMandateSenderType as sepa_cds_snd_type preserving type )                           as SEPAMandateSenderType,
      @Semantics.text: true
      _SEPASenderTypeText[1:Language =$session.system_language].SEPAMandateSenderTypeName          as SEPAMandateSenderTypeName,

      @ObjectModel.text.element: ['SEPAMandateRecipientTypeName']
      SEPAMandateRecipientType,
      _SEPARecipientTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription   as SEPAMandateRecipientTypeName,
      SEPAMandateRecipient,


      ////First Usage Data
      cast( SEPAMandateFirstUseDate as sepa_cds_firstuse_date preserving type )                    as SEPAMandateFirstUseDate,
      @ObjectModel.text.element: ['SEPAMandateFirstUseObjTypeText']
      SEPAMandateFirstUseObjTypeCode,
      @Semantics.text: true
      cast( _FirstUseObjTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_firstuse_doctype_name preserving type )     as SEPAMandateFirstUseObjTypeText,

      SEPAMandateFirstUsePaymentDoc,
      @ObjectModel.text.element: ['SEPAMandateLastUseObjTypeText']
      SEPAMandateFirstUsePaymentRun,

      ////Last Usage Data
      cast( SEPAMandateLastUseDate as sepa_cds_lastuse_date preserving type )                      as SEPAMandateLastUseDate,
      SEPAMandateLastUseObjTypeCode,
      @Semantics.text: true
      cast ( _LastUseObjTypeText[1:Language =$session.system_language].BusinessObjectTypeDescription as fsepa_lastuse_doctype_name preserving type )      as SEPAMandateLastUseObjTypeText,
      SEPAMandateLastUsePaymentDoc,


      ////Internal Organizational Data
      SEPAMandateOrganizationalUnit1,
      SEPAMandateOrganizationalUnit2,
      SEPAMandateOrganizationalUnit3,
      SEPAMandateOrganizationalUnit4,

      ///////////////////////////////////////////////////////////////////////////////////////////////////
      // When application is FI (Financial Accounting)
      @ObjectModel.foreignKey.association: '_Customer'
      case
       when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BUS3007'
       then cast(SEPAMandateSender as kunnr)
      end                                                                                          as Customer,

      case
       when SEPAMandateApplication = 'F'
       then cast(SEPAMandateReferenceType as fsepa_ref_type)
      end                                                                                          as SEPAMandateContractType,

      case
       when SEPAMandateApplication = 'F'
       then cast(SEPAMandateReference as bkk_dte_mnd_contract_id)
      end                                                                                          as SEPAMandateContract,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      case
       when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG'
        then cast( substring(SEPAMandateSender, 1, 4) as bukrs)
       else cast('' as bukrs )
      end                                                                                          as CompanyCode,

      case
       when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG'
        then cast(substring(SEPAMandateSender, 5, 10) as belnr_d)
       else cast('' as belnr_d)
      end                                                                                          as AccountingDocument,

      case
       when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG'
        then cast(substring(SEPAMandateSender, 15, 4) as gjahr)
       else cast('0000' as gjahr)
      end                                                                                          as FiscalYear,

      case
       when SEPAMandateApplication = 'F' and SEPAMandateSenderType = 'BSEG'
        then cast(substring(SEPAMandateSender, 19, 3) as buzei)
       else cast('000' as buzei)
      end                                                                                          as AccountingDocumentItem,
      ///////////////////////////////////////////////////////////////////////////////////////////////////


      ///////////////////////////////////////////////////////////////////////////////////////////////////
      // When application is FI-CA
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      case
       when SEPAMandateApplication = '1'
       then cast( SEPAMandateSender as bu_partner)
      end                                                                                          as BusinessPartner,

      @ObjectModel.foreignKey.association: '_CAStandardCompanyCode'
      case
       when SEPAMandateApplication = '1'
       then cast(SEPAMandateRecipient as sepa_cds_stdbk_kk)
      end                                                                                          as CAStandardCompanyCode,

      case
       when SEPAMandateApplication = '1' and SEPAMandateReferenceType = 'CA_VTREF'
       then cast( SEPAMandateReference as vtref_sepa_kk)
      end                                                                                          as CAContract,

      case
       when SEPAMandateApplication = '1' and SEPAMandateReferenceType = 'CA_CONTACC'
       then cast( SEPAMandateReference as vkont_sepa_kk)
      end                                                                                          as ContractAccount,

      CAMassRunDate,
      CAMassRunID,
      ///////////////////////////////////////////////////////////////////////////////////////////////////

      //Temp fields associate to OTA creation scenario
      cast('' as fota_sourcedoctype)                               as OneTimeAccountSourceDocType,  
      cast('' as fota_sourcedocid)                                 as OneTimeAccountSourceDocument, 
      cast('0000000000' as fota_source_doc_item)                   as OneTimeAccountSourceDocItem,        
      
      cast('' as fsepa_mandate_transactiontype)                    as FinSEPAMandateTransactionType,
      cast('' as fsepa_mandate_processing_stage)                   as FinSEPAMandateProcessingStage,
      cast('' as fsepa_chg_is_not_allowed)                         as FinSEPAMandateChgIsNotAllowed,
      cast('' as fsepa_attach_object_key)                                       as SEPAMandateAttchObjectKey,
      cast('' as fsepa_field_status_value)                         as FinSEPAMandateFieldStatusVal,
      cast('' as boole_d)                                          as SEPAMandateHasUsage,
      cast('' as boole_d)                                          as IsCloudSystem,
      cast('' as rspopshort)                                       as SEPAMandateSpoolOutputDevice,
      cast('' as pq_qname)                                         as SEPAMandatePrintQueue,
      cast('' as langu)                                            as SEPAMandatePrintLanguage,
      _Application,
      _CompanyCode,
      _PayingCompanyCode,
      _CAStandardCompanyCode,
      _BusinessPartner,
      _Customer,
      _SEPAPaymentType,
      _SEPAMandateStatus,
      _FirstUseObjTypeText,
      _LastUseObjTypeText,
      _CreatedByUser,
      _SEPAChangeReason,
      _OriglCreatedByUser,
      _SEPAReferenceTypeText,
      _SEPARecipientTypeText,
      _SenderCountryText,
      _SEPASenderTypeText,
      _RecipientCountryText,
      _SenderLanguageText
}
where
  (
       SEPAMandateApplication = 'F'
    or SEPAMandateApplication = '1'
  )
  and  SEPAMandateVersion     = '0000'
```
