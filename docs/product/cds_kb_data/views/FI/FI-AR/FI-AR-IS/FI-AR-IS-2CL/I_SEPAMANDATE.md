---
name: I_SEPAMANDATE
description: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value
semantic_en: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Sepa Mandate — CDS view giao diện dựa trên sepa_mandate."
keywords:
  - "sepa"
  - "mandate"
  - "version"
  - "signature"
  - "city"
  - "name"
  - "date"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_SEPAMANDATE

**This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateUUID` | ✓ | |  | `mguid` | `RAW(16)` | Mandate: GUID of Mandate |
| `SEPAMandate` |  | |  | `mndid` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SEPAMandateVersion` |  | |  | `mvers` | `NUMC(4)` | Mandate: Version of Mandate (0 = Current Version) |
| `SEPASignatureCityName` |  | |  | `sign_city` | `CHAR(40)` | Location of Signature |
| `SEPASignatureDate` |  | |  | `sign_date` | `DATS(8)` | Date of Signature |
| `SEPAPaymentType` |  | |  | `pay_type` | `CHAR(1)` | Mandate: Payment Type |
| `ValidityStartDate` |  | |  | `val_from_date` | `DATS(8)` | Mandate: Validity Date of Mandate (From) |
| `ValidityEndDate` |  | |  | `val_to_date` | `DATS(8)` | Mandate: Validity Date of Mandate (To) |
| `SEPAMandateStatus` |  | |  | `status` | `CHAR(1)` | Mandate Status |
| `SEPAMandateIsB2BMandate` |  | |  | `b2b` | `CHAR(1)` | Mandate: B2B Mandate |
| `SEPAMandateStatusChangeReason` |  | |  | `reason_code` | `CHAR(3)` | Reason Code for Status Change |
| `SEPAMandateCreatedByUser` |  | |  | `ernam` | `CHAR(12)` | User who Created the Current Version of the Mandate |
| `SEPAMandateCreationDate` |  | |  | `erdat` | `DATS(8)` | Date on Which the Current Mandate Version was Created |
| `SEPAMandateCreationTime` |  | |  | `ertim` | `TIMS(6)` | Time at Which the Current Mandate Version was Created |
| `SEPAMandateChangeReason` |  | |  | `chg_reason` | `CHAR(5)` | Mandate: Reason for Change |
| `OriginalSEPAMandateCreditor` |  | |  | `origin_rec_crdid` | `CHAR(35)` | Mandate: Original Creditor ID of Mandate |
| `OriginalSEPAMandate` |  | |  | `origin_mndid` | `CHAR(35)` | Mandate: Original Mandate of Mandate |
| `SEPAMandateIsLocked` |  | |  | `glock` | `CHAR(1)` | Global Lock Set in Mandate |
| `SEPAMandateLockStartDate` |  | |  | `cast(glock_val_from as sepa_cds_glock_val_from_date preserving type )` | `DATS(8)` | Global Lock Valid From |
| `SEPAMandateLockEndDate` |  | |  | `cast(glock_val_to as sepa_cds_glock_val_to_date preserving type )` | `DATS(8)` | Global Lock Valid To |
| `SEPAMandateApplication` |  | |  | `anwnd` | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `OriglSEPAMandateCreatedByUser` |  | |  | `ori_ernam` | `CHAR(12)` | User who Created the Original Mandate |
| `OriglSEPAMandateCreationDate` |  | |  | `ori_erdat` | `DATS(8)` | Date on Which Original Mandate Created |
| `OriglSEPAMandateCreationTime` |  | |  | `ori_ertim` | `TIMS(6)` | Time when Original Mandate Was Created |
| `SEPAMandateReferenceType` |  | |  | `ref_type` | `CHAR(10)` | Mandate: Reference Type |
| `SEPAMandateReference` |  | |  | `ref_id` | `CHAR(70)` | Mandate: Reference ID |
| `SEPAMandateReferenceDesc` |  | |  | `ref_desc` | `CHAR(50)` | Text Field |
| `SEPAMandateSenderType` |  | |  | `snd_type` | `CHAR(10)` | Mandate: Sender Type |
| `SEPAMandateSender` |  | |  | `snd_id` | `CHAR(70)` | Mandate: Sender ID |
| `SenderLastName` |  | |  | `snd_name1` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `SenderFirstName` |  | |  | `snd_name2` | `CHAR(40)` | First Name of Business Partner (Person) |
| `SenderStreetName` |  | |  | `snd_street` | `CHAR(60)` | Street |
| `SenderHouseNumber` |  | |  | `snd_housenum` | `CHAR(10)` | House Number |
| `SenderPostalCode` |  | |  | `snd_postal` | `CHAR(10)` | City Postal Code |
| `SenderCityName` |  | |  | `snd_city` | `CHAR(40)` | City |
| `SenderCountry` |  | |  | `snd_country` | `CHAR(3)` | Country/Region Key |
| `SenderLanguage` |  | |  | `snd_language` | `LANG(1)` | Language Key |
| `SEPAMandateSenderIBAN` |  | |  | `snd_iban` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SEPAMandateSenderBankSWIFTCode` |  | |  | `snd_bic` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `SEPAMandateAlternativePyrName` |  | |  | `cast(snd_dir_name as fsepa_alternative_payer_name preserving type )` | `CHAR(40)` | SEPA Mandate Alternative Payer Name |
| `SEPAMandateAlternativePayer` |  | |  | `snd_dir_id` | `CHAR(70)` | Mandate: ID of Alternative Debtor |
| `SEPAMandateSenderExternalID` |  | |  | `cast(snd_debtor_id as fsepa_snd_debtor_id preserving type )` | `CHAR(35)` | SEPA Mandate Sender External ID |
| `SEPAMandateRecipientType` |  | |  | `rec_type` | `CHAR(10)` | Mandate: Recipient Type |
| `SEPAMandateRecipient` |  | |  | `rec_id` | `CHAR(70)` | Mandate: Recipient ID |
| `RecipientName1` |  | |  | `rec_name1` | `CHAR(40)` | Name 1 of organization |
| `RecipientName2` |  | |  | `rec_name2` | `CHAR(40)` | Name 2 of organization |
| `SEPAMandateCreditor` |  | |  | `rec_crdid` | `CHAR(35)` | Creditor Identification Number |
| `RecipientStreetName` |  | |  | `rec_street` | `CHAR(60)` | Street |
| `RecipientHouseNumber` |  | |  | `rec_housenum` | `CHAR(10)` | House Number |
| `RecipientPostalCode` |  | |  | `rec_postal` | `CHAR(10)` | City Postal Code |
| `RecipientCityName` |  | |  | `rec_city` | `CHAR(40)` | City |
| `RecipientCountry` |  | |  | `rec_country` | `CHAR(3)` | Country/Region Key |
| `SEPAMandateAlternativePyeName` |  | |  | `rec_dir_name` | `CHAR(40)` | Mandate: Name of Alternative Payee |
| `SEPAMandateAlternativePayee` |  | |  | `rec_dir_id` | `CHAR(70)` | Mandate: ID of Alternative Payee |
| `SEPAMandateFirstUseDate` |  | |  | `firstuse_date` | `DATS(8)` | Mandate: Date of First Use |
| `SEPAMandateFirstUseObjTypeCode` |  | |  | `firstuse_doctype` | `CHAR(10)` | Mandate: Type of First Usage |
| `SEPAMandateFirstUsePaymentDoc` |  | |  | `firstuse_docid` | `CHAR(70)` | Mandate: ID of First Usage |
| `SEPAMandateLastUseDate` |  | |  | `lastuse_date` | `DATS(8)` | Mandate: Date of Last Use |
| `SEPAMandateLastUseObjTypeCode` |  | |  | `lastuse_doctype` | `CHAR(10)` | Mandate: Type of Last Usage |
| `SEPAMandateLastUsePaymentDoc` |  | |  | `lastuse_docid` | `CHAR(70)` | Mandate: ID of Last Usage |
| `SEPAMandateFirstUsePaymentRun` |  | |  | `firstuse_payrun` | `CHAR(16)` | Mandate: ID of Payment Run of First Use |
| `SEPAMandateOrganizationalUnit1` |  | |  | `orgf1` | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit2` |  | |  | `orgf2` | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit3` |  | |  | `orgf3` | `CHAR(35)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit4` |  | |  | `orgf4` | `CHAR(35)` | Mandate: Internal Organizational Data |
| `CAMassRunDate` |  | |  | `laufd` | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  | `laufi` | `CHAR(6)` | Run ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPAMANDATE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Sepa Mandate'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true 
@Analytics:
  {
    dataCategory: #DIMENSION,
    dataExtraction: {
      enabled: true,
      delta.changeDataCapture:{
        automatic : true
      }
    }
}
@ObjectModel.sapObjectNodeType.name: 'SEPAMandate'
@ObjectModel.representativeKey: 'SEPAMandateUUID'
@Analytics.internalName:#LOCAL 
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.allowExtensions:true
define view I_SEPAMandate 
   as select from sepa_mandate
   {
     key mguid              as SEPAMandateUUID,
         mndid              as SEPAMandate,
         mvers              as SEPAMandateVersion,
         sign_city          as SEPASignatureCityName,
         sign_date          as SEPASignatureDate,         
         pay_type           as SEPAPaymentType,     
         val_from_date      as ValidityStartDate,       
         val_to_date        as ValidityEndDate,
         status             as SEPAMandateStatus,
         b2b                as SEPAMandateIsB2BMandate,
         reason_code        as SEPAMandateStatusChangeReason,
         ernam              as SEPAMandateCreatedByUser, 
         erdat              as SEPAMandateCreationDate,
         ertim              as SEPAMandateCreationTime,
         chg_reason         as SEPAMandateChangeReason,
         origin_rec_crdid   as OriginalSEPAMandateCreditor,
         origin_mndid       as OriginalSEPAMandate,
         glock              as SEPAMandateIsLocked,
         cast(glock_val_from as sepa_cds_glock_val_from_date preserving type )  as SEPAMandateLockStartDate,
         cast(glock_val_to as sepa_cds_glock_val_to_date preserving type )        as SEPAMandateLockEndDate, 
         anwnd              as SEPAMandateApplication, 
         ori_ernam          as OriglSEPAMandateCreatedByUser,
         ori_erdat          as OriglSEPAMandateCreationDate,
         ori_ertim          as OriglSEPAMandateCreationTime,
         ref_type           as SEPAMandateReferenceType, 
         ref_id             as SEPAMandateReference,
         ref_desc           as SEPAMandateReferenceDesc,
         snd_type           as SEPAMandateSenderType,
         snd_id             as SEPAMandateSender,
         snd_name1          as SenderLastName,
         snd_name2          as SenderFirstName,
         snd_street         as SenderStreetName,
         snd_housenum       as SenderHouseNumber,
         snd_postal         as SenderPostalCode,
         snd_city           as SenderCityName,
         snd_country        as SenderCountry,
         snd_language       as SenderLanguage,
         snd_iban           as SEPAMandateSenderIBAN,
         snd_bic            as SEPAMandateSenderBankSWIFTCode,
         cast(snd_dir_name as fsepa_alternative_payer_name preserving type )      as SEPAMandateAlternativePyrName,
         snd_dir_id         as SEPAMandateAlternativePayer,
         cast(snd_debtor_id as fsepa_snd_debtor_id preserving type )              as SEPAMandateSenderExternalID,  
         rec_type           as SEPAMandateRecipientType,
         rec_id             as SEPAMandateRecipient,
         rec_name1          as RecipientName1,
         rec_name2          as RecipientName2,
         rec_crdid          as SEPAMandateCreditor,
         rec_street         as RecipientStreetName,
         rec_housenum       as RecipientHouseNumber,
         rec_postal         as RecipientPostalCode,
         rec_city           as RecipientCityName,
         rec_country        as RecipientCountry,      
         rec_dir_name       as SEPAMandateAlternativePyeName,
         rec_dir_id         as SEPAMandateAlternativePayee, 
         firstuse_date      as SEPAMandateFirstUseDate,
         firstuse_doctype   as SEPAMandateFirstUseObjTypeCode,
         firstuse_docid     as SEPAMandateFirstUsePaymentDoc,
         lastuse_date       as SEPAMandateLastUseDate,
         lastuse_doctype    as SEPAMandateLastUseObjTypeCode, 
         lastuse_docid      as SEPAMandateLastUsePaymentDoc,     
         firstuse_payrun    as SEPAMandateFirstUsePaymentRun,
         orgf1              as SEPAMandateOrganizationalUnit1,
         orgf2              as SEPAMandateOrganizationalUnit2,
         orgf3              as SEPAMandateOrganizationalUnit3,
         orgf4              as SEPAMandateOrganizationalUnit4,
         laufd              as CAMassRunDate,
         laufi              as CAMassRunID         
    }
```
