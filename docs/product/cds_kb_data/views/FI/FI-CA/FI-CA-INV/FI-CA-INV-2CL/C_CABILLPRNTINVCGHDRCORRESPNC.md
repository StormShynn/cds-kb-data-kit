---
name: C_CABILLPRNTINVCGHDRCORRESPNC
description: "Cabillprntinvcghdrcorrespnc"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - consumption-view
  - header-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# C_CABILLPRNTINVCGHDRCORRESPNC

**Cabillprntinvcghdrcorrespnc**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACorrespondenceType` | ✓ | |  |  |  |  |
| `CACorrespondence` | ✓ | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `CAContract` |  | |  |  |  |  |
| `OriglCorrespondenceRecipient` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CorrespondencePrintDate` |  | |  |  |  |  |
| `CorrespondenceIssueDate` |  | |  |  |  |  |
| `CorrespondenceIssueTime` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CAAmountInLocalCurrency` |  | |  |  |  |  |
| `CAMassRunDate` |  | |  |  |  |  |
| `CAMassRunID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `Correspondence1stEntityIdn` |  | |  |  |  |  |
| `Correspondence1stEntityData` |  | |  |  |  |  |
| `Correspondence2ndEntityIdn` |  | |  |  |  |  |
| `Correspondence2ndEntityData` |  | |  |  |  |  |
| `Correspondence3rdEntityIdn` |  | |  |  |  |  |
| `Correspondence3rdEntityData` |  | |  |  |  |  |
| `Correspondence4thEntityIdn` |  | |  |  |  |  |
| `Correspondence4thEntityData` |  | |  |  |  |  |
| `CACorrespncSenderAddressID` |  | |  |  |  |  |
| `CompanyCodeName` |  | | `_CACorrespondenceHeader._CompCode` | `CompanyCodeName` |  |  |
| `SenderCityName` |  | | `_SenderAddress` | `CityName` |  |  |
| `SenderPostalCode` |  | | `_SenderAddress` | `PostalCode` |  |  |
| `SenderStreetName` |  | | `_SenderAddress` | `StreetName` |  |  |
| `SenderHouseNumber` |  | | `_SenderAddress` | `HouseNumber` |  |  |
| `SenderCountry` |  | | `_SenderAddress` | `Country` |  |  |
| `BusinessPartnerName` |  | | `_CACorrespondenceHeader._BusinessPartner` | `BusinessPartnerName` |  |  |
| `RecipientCityName` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `CityName` |  |  |
| `RecipientPostalCode` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `PostalCode` |  |  |
| `RecipientStreetName` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `StreetName` |  |  |
| `RecipientHouseNumber` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `HouseNumber` |  |  |
| `RecipientCountry` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `Country` |  |  |
| `OriglCorrespncRecipientName` |  | | `_OriglCorrespncRcpnt._BusinessPartner` | `BusinessPartnerName` |  |  |
| `CustomerCityName` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `CityName` |  |  |
| `CustomerPostalCode` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `PostalCode` |  |  |
| `CustomerStreetName` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `StreetName` |  |  |
| `BusinessPartnerHouseNumber` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `HouseNumber` |  |  |
| `CustomerCountry` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `Country` |  |  |
| `CAInvcgDocumentReversalReason` |  | | `_CAInvcgDocHeader` | `CAInvcgDocumentReversalReason` |  |  |
| `CAInvcgDocIsLockedForPrinting` |  | | `_CAInvcgDocHeader` | `CAInvcgDocIsLockedForPrinting` |  |  |
| `CAInvcgProcess` |  | | `_CAInvcgDocHeader` | `CAInvcgProcess` |  |  |
| `CAApplicationArea` |  | | `_CAInvcgDocHeader` | `CAApplicationArea` |  |  |
| `CAInvcgCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgCategory` |  |  |
| `CAInvcgType` |  | | `_CAInvcgDocHeader` | `CAInvcgType` |  |  |
| `CAInvcgDocPeriodCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgDocPeriodCategory` |  |  |
| `CAInvcgTargetProcess` |  | | `_CAInvcgDocHeader` | `CAInvcgTargetProcess` |  |  |
| `CAInvcgCorrectionCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgCorrectionCategory` |  |  |
| `CAInvcgDocHasChargeOrDiscItems` |  | | `_CAInvcgDocHeader` | `CAInvcgDocHasChargeOrDiscItems` |  |  |
| `CAInvcgDocCreationMode` |  | | `_CAInvcgDocHeader` | `CAInvcgDocCreationMode` |  |  |
| `CAInvcgMasterDataType` |  | | `_CAInvcgDocHeader` | `CAInvcgMasterDataType` |  |  |
| `CAInvcgTechnicalDocumentType` |  | | `_CAInvcgDocHeader` | `CAInvcgTechnicalDocumentType` |  |  |
| `CAInvcgDocIsPartOfList` |  | | `_CAInvcgDocHeader` | `CAInvcgDocIsPartOfList` |  |  |
| `CAInvcgBolloTaxPostStatus` |  | | `_CAInvcgDocHeader` | `CAInvcgBolloTaxPostStatus` |  |  |
| `CAInvcgDocPeriodDate` |  | | `_CAInvcgDocHeader` | `CAInvcgDocPeriodDate` |  |  |
| `DocumentDate` |  | | `_CAInvcgDocHeader` | `DocumentDate` |  |  |
| `CAAmountInTransactionCurrency` |  | | `_CAInvcgDocHeader` | `CAAmountInTransactionCurrency` |  |  |
| `TransactionCurrency` |  | | `_CAInvcgDocHeader` | `TransactionCurrency` |  |  |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgDocReversalReasonText` | | ✓ | | | | |
| `_CAInvcgDocLockedForPrintText` | | ✓ | | | | |
| `_CAInvcgProcessText` | | ✓ | | | | |
| `_CAInvcgCategoryText` | | ✓ | | | | |
| `_CAInvcgTypeProcText` | | ✓ | | | | |
| `_CAInvcgPeriodCatText` | | ✓ | | | | |
| `_CAInvcgTargetProcText` | | ✓ | | | | |
| `_CAInvcgCorrectionCatText` | | ✓ | | | | |
| `_CAInvcgDocChrgDiscItemsText` | | ✓ | | | | |
| `_CAInvcgDocCreationModeText` | | ✓ | | | | |
| `_CAInvcgMasterDataTypeText` | | ✓ | | | | |
| `_CAInvcgDocTechDocTypeText` | | ✓ | | | | |
| `_CAInvcgDocPartOfListText` | | ✓ | | | | |
| `_CAInvcgBolloTaxPostStatText` | | ✓ | | | | |
| `_SenderAddress` | | ✓ | | | | |
| `_OriglCorrespncRcpnt` | | ✓ | | | | |
| `_CorrespncType` | | ✓ | | | | |
| `_CorrespncTypeT` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_CAPartner` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader2` | [0..1] |
| `_CAInvcgDocReversalReasonText` | `I_CAInvcgDocReversalReasonText` | [0..1] |
| `_CAInvcgDocLockedForPrintText` | `I_CAInvcgDocLockedForPrintText` | [0..1] |
| `_CAInvcgProcessText` | `I_CAInvcgProcessText` | [1..1] |
| `_CAInvcgCategoryText` | `I_CAInvcgCategoryText` | [0..1] |
| `_CAInvcgTypeProcText` | `I_CAInvcgTypeProcText` | [0..1] |
| `_CAInvcgPeriodCatText` | `I_CAInvcgPeriodCatText` | [0..1] |
| `_CAInvcgTargetProcText` | `I_CAInvcgTargetProcText` | [0..1] |
| `_CAInvcgCorrectionCatText` | `I_CAInvcgCorrectionCatText` | [1..1] |
| `_CAInvcgDocChrgDiscItemsText` | `I_CAInvcgDocChrgDiscItemsText` | [1..1] |
| `_CAInvcgDocCreationModeText` | `I_CAInvcgDocCreationModeText` | [1..1] |
| `_CAInvcgMasterDataTypeText` | `I_CAInvcgMasterDataTypeText` | [1..1] |
| `_CAInvcgDocTechDocTypeText` | `I_CAInvcgDocTechDocTypeText` | [1..1] |
| `_CAInvcgDocPartOfListText` | `I_CAInvcgDocPartOfListText` | [1..1] |
| `_CAInvcgBolloTaxPostStatText` | `I_CAInvcgBolloTaxPostStatText` | [1..1] |
| `_SenderAddress` | `I_Address_2` | [0..*] |
| `_OriglCorrespncRcpnt` | `I_CAContractPartner` | [1..1] |
| `_Extension` | `E_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@VDM.viewType:#CONSUMPTION
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.beleg mit Korrespondenzauftrag'
@Metadata.ignorePropagatedAnnotations:true

@Consumption.dbHints: ['USE_HEX_PLAN','NO_SUBPLAN_SHARING']

define view entity C_CABillPrntInvcgHdrCorrespnc
  as select from I_CACorrespondenceHeader as _CACorrespondenceHeader
  association [0..1] to I_CAInvcgDocHeader2            as _CAInvcgDocHeader             on  $projection.Correspondence2ndEntityData = _CAInvcgDocHeader.CAInvoicingDocument
                                                                                        and $projection.Correspondence1stEntityData = _CAInvcgDocHeader.CAInvcgProcess
  association [0..1] to I_CAInvcgDocReversalReasonText as _CAInvcgDocReversalReasonText on  $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReasonText.CAInvcgDocumentReversalReason
                                                                                        and $projection.Language                      = _CAInvcgDocReversalReasonText.Language
  association [0..1] to I_CAInvcgDocLockedForPrintText as _CAInvcgDocLockedForPrintText on  $projection.CAInvcgDocIsLockedForPrinting = _CAInvcgDocLockedForPrintText.CAInvcgDocIsLockedForPrinting
                                                                                        and $projection.Language                      = _CAInvcgDocLockedForPrintText.Language
  association [1..1] to I_CAInvcgProcessText           as _CAInvcgProcessText           on  $projection.CAInvcgProcess    = _CAInvcgProcessText.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgProcessText.CAApplicationArea
                                                                                        and $projection.Language          = _CAInvcgProcessText.Language
  association [0..1] to I_CAInvcgCategoryText          as _CAInvcgCategoryText          on  $projection.CAInvcgCategory = _CAInvcgCategoryText.CAInvcgCategory
                                                                                        and $projection.Language        = _CAInvcgCategoryText.Language
  association [0..1] to I_CAInvcgTypeProcText          as _CAInvcgTypeProcText          on  $projection.CAInvcgType       = _CAInvcgTypeProcText.CAInvcgType
                                                                                        and $projection.CAInvcgProcess    = _CAInvcgTypeProcText.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgTypeProcText.CAApplicationArea
                                                                                        and $projection.Language          = _CAInvcgTypeProcText.Language

  association [0..1] to I_CAInvcgPeriodCatText         as _CAInvcgPeriodCatText         on  $projection.CAInvcgDocPeriodCategory = _CAInvcgPeriodCatText.CAInvcgPeriodCategory
                                                                                        and $projection.Language                 = _CAInvcgPeriodCatText.Language
  association [0..1] to I_CAInvcgTargetProcText        as _CAInvcgTargetProcText        on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProcText.CAInvcgTargetProcess
                                                                                        and $projection.Language             = _CAInvcgTargetProcText.Language
  association [1..1] to I_CAInvcgCorrectionCatText     as _CAInvcgCorrectionCatText     on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCatText.CAInvcgCorrectionCategory
                                                                                        and $projection.Language                  = _CAInvcgCorrectionCatText.Language
  association [1..1] to I_CAInvcgDocChrgDiscItemsText  as _CAInvcgDocChrgDiscItemsText  on  $projection.CAInvcgDocHasChargeOrDiscItems = _CAInvcgDocChrgDiscItemsText.CAInvcgDocHasChargeOrDiscItems
                                                                                        and $projection.Language                       = _CAInvcgDocChrgDiscItemsText.Language
  association [1..1] to I_CAInvcgDocCreationModeText   as _CAInvcgDocCreationModeText   on  $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationModeText.CAInvcgDocCreationMode
                                                                                        and $projection.Language               = _CAInvcgDocCreationModeText.Language
  association [1..1] to I_CAInvcgMasterDataTypeText    as _CAInvcgMasterDataTypeText    on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataTypeText.CAInvcgMasterDataType
                                                                                        and $projection.Language              = _CAInvcgMasterDataTypeText.Language
  association [1..1] to I_CAInvcgDocTechDocTypeText    as _CAInvcgDocTechDocTypeText    on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocTypeText.CAInvcgTechnicalDocumentType
                                                                                        and $projection.Language                     = _CAInvcgDocTechDocTypeText.Language
  association [1..1] to I_CAInvcgDocPartOfListText     as _CAInvcgDocPartOfListText     on  $projection.CAInvcgDocIsPartOfList = _CAInvcgDocPartOfListText.CAInvcgDocIsPartOfList
                                                                                        and $projection.Language               = _CAInvcgDocPartOfListText.Language
  association [1..1] to I_CAInvcgBolloTaxPostStatText  as _CAInvcgBolloTaxPostStatText  on  $projection.CAInvcgBolloTaxPostStatus = _CAInvcgBolloTaxPostStatText.CAInvcgBolloTaxPostStatus
                                                                                        and $projection.Language                  = _CAInvcgBolloTaxPostStatText.Language
  association [0..*] to I_Address_2                    as _SenderAddress                on  $projection.CACorrespncSenderAddressID = _SenderAddress.AddressID

  association [1..1] to I_CAContractPartner            as _OriglCorrespncRcpnt          on  $projection.OriglCorrespondenceRecipient = _OriglCorrespncRcpnt.BusinessPartner

  // extension
  association [0..1] to E_CAInvcgDocHeader             as _Extension                    on  $projection.Correspondence2ndEntityData = _Extension.CAInvoicingDocument

{
       //cotyp
  key  CACorrespondenceType,

       // cokey
  key  CACorrespondence,

       // vkont
       ContractAccount,

       // gpart
       BusinessPartner,

       // vtref
       CAContract,

       // org_gpart
       OriglCorrespondenceRecipient,

       // bukrs
       CompanyCode,

       // uname
       CreatedByUser,

       // cdate
       CreationDate,

       // ctime
       CreationTime,

       // copri
       CorrespondencePrintDate,

       // coidt
       CorrespondenceIssueDate,

       // coitm
       CorrespondenceIssueTime,

       // salwa
       //       @Semantics.amount.currencyCode: 'Currency'
       Currency,

       // salbe
       @Semantics.amount.currencyCode: 'Currency'
       CAAmountInLocalCurrency,

       // laufd
       CAMassRunDate,

       // laufi
       CAMassRunID,

       // spras
       Language,

       // entid1
       Correspondence1stEntityIdn,

       // data1
       Correspondence1stEntityData,

       // entid2
       Correspondence2ndEntityIdn,

       // data2
       Correspondence2ndEntityData,

       // entid3
       Correspondence3rdEntityIdn,

       // data3
       Correspondence3rdEntityData,

       // entid4
       Correspondence4thEntityIdn,

       // data4
       Correspondence4thEntityData,

       // aadrnr
       CACorrespncSenderAddressID,

       //       _CompCode._Address.CityName                                                                         as SenderCityName,
       //       //       _CompCode._Address.FullName                                                                         as SenderFullName,
       //       _CompCode._Address.PostalCode                                                                       as SenderPostalCode,
       //       _CompCode._Address.StreetName                                                                       as SenderStreetName,
       //       _CompCode._Address.HouseNumber                                                                      as SenderHouseNumber,
       //       _CompCode._Address.Country                                                                          as SenderCountry,
       _CACorrespondenceHeader._CompCode.CompanyCodeName                                                         as CompanyCodeName,

       _SenderAddress.CityName                                                                                   as SenderCityName,
       // _SenderAddress.FullName                                                                         as SenderFullName,
       _SenderAddress.PostalCode                                                                                 as SenderPostalCode,
       _SenderAddress.StreetName                                                                                 as SenderStreetName,
       _SenderAddress.HouseNumber                                                                                as SenderHouseNumber,
       _SenderAddress.Country                                                                                    as SenderCountry,

       _CACorrespondenceHeader._BusinessPartner.BusinessPartnerName                                              as BusinessPartnerName,

       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.CityName    as RecipientCityName,
       //       _BusinessPartner._CurrentDefaultAddress._Address.FullName                                           as RecipientFullName,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.PostalCode  as RecipientPostalCode,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.StreetName  as RecipientStreetName,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.HouseNumber as RecipientHouseNumber,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.Country     as RecipientCountry,

       _OriglCorrespncRcpnt._BusinessPartner.BusinessPartnerName                                                 as OriglCorrespncRecipientName,

       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.CityName       as CustomerCityName,
       //       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._Address.FullName                      as CustomerFullName,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.PostalCode     as CustomerPostalCode,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.StreetName     as CustomerStreetName,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.HouseNumber    as BusinessPartnerHouseNumber,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.Country        as CustomerCountry,

       _CAInvcgDocHeader.CAInvcgDocumentReversalReason                                                           as CAInvcgDocumentReversalReason,
       _CAInvcgDocHeader.CAInvcgDocIsLockedForPrinting                                                           as CAInvcgDocIsLockedForPrinting,
       _CAInvcgDocHeader.CAInvcgProcess                                                                          as CAInvcgProcess,
       _CAInvcgDocHeader.CAApplicationArea                                                                       as CAApplicationArea,
       _CAInvcgDocHeader.CAInvcgCategory                                                                         as CAInvcgCategory,
       _CAInvcgDocHeader.CAInvcgType                                                                             as CAInvcgType,
       _CAInvcgDocHeader.CAInvcgDocPeriodCategory                                                                as CAInvcgDocPeriodCategory,
       _CAInvcgDocHeader.CAInvcgTargetProcess                                                                    as CAInvcgTargetProcess,
       _CAInvcgDocHeader.CAInvcgCorrectionCategory                                                               as CAInvcgCorrectionCategory,
       _CAInvcgDocHeader.CAInvcgDocHasChargeOrDiscItems                                                          as CAInvcgDocHasChargeOrDiscItems,
       _CAInvcgDocHeader.CAInvcgDocCreationMode                                                                  as CAInvcgDocCreationMode,
       _CAInvcgDocHeader.CAInvcgMasterDataType                                                                   as CAInvcgMasterDataType,
       _CAInvcgDocHeader.CAInvcgTechnicalDocumentType                                                            as CAInvcgTechnicalDocumentType,
       _CAInvcgDocHeader.CAInvcgDocIsPartOfList                                                                  as CAInvcgDocIsPartOfList,
       _CAInvcgDocHeader.CAInvcgBolloTaxPostStatus                                                               as CAInvcgBolloTaxPostStatus,

       _CAInvcgDocHeader.CAInvcgDocPeriodDate                                                                    as CAInvcgDocPeriodDate,
       _CAInvcgDocHeader.DocumentDate                                                                            as DocumentDate,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
       _CAInvcgDocHeader.CAAmountInTransactionCurrency                                                           as CAAmountInTransactionCurrency,

       _CAInvcgDocHeader.TransactionCurrency                                                                     as TransactionCurrency,

       //       _CAInvcgTypeProcText.CAInvcgDocumentTitleText                                                          as CAInvcgDocumentTitleText,

       // Make association public
       _CAInvcgDocHeader,
       _CAInvcgDocReversalReasonText,
       _CAInvcgProcessText,
       _CAInvcgDocLockedForPrintText,
       _CAInvcgCategoryText,
       _CAInvcgTypeProcText,
       _CAInvcgPeriodCatText,
       _CAInvcgTargetProcText,
       _CAInvcgCorrectionCatText,
       _CAInvcgDocChrgDiscItemsText,
       _CAInvcgDocCreationModeText,
       _CAInvcgMasterDataTypeText,
       _CAInvcgDocTechDocTypeText,
       _CAInvcgDocPartOfListText,
       _CAInvcgBolloTaxPostStatText,

       _CorrespncType,
       _CorrespncTypeT,
       _ContrAcc,
       _CAPartner,
       _BusinessPartner,
       _OriglCorrespncRcpnt,
       _CompCode,
       _SenderAddress
}
where
      Correspondence1stEntityIdn = 'IPRC'
  and Correspondence2ndEntityIdn = 'DOCN'



//@AbapCatalog.sqlViewName: 'CCAINVDOCH_COH'
//@AbapCatalog.compiler.compareFilter: true
//@VDM.viewType:#CONSUMPTION
////@VDM.viewType:#COMPOSITE
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@ObjectModel.usageType.serviceQuality: #D
//@ObjectModel.usageType.sizeCategory: #XL
//@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
//@ObjectModel.supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
//@AccessControl.personalData.blocking: #REQUIRED
//@AccessControl.authorizationCheck: #CHECK
////@AccessControl.authorizationCheck: #NOT_ALLOWED
//@EndUserText.label: 'Fakt.beleg mit Korrespondenzauftrag'
//@Metadata.ignorePropagatedAnnotations:true
//@Consumption.dbHints: ['USE_HEX_PLAN','NO_SUBPLAN_SHARING']
//
//define view C_CABillPrntInvcgHdrCorrespnc
//  as select from I_CABillPrntInvcgHdrCorrespnc as _CABillPrntInvcgHdrCorrespnc
//
//
//  association [0..1] to I_Address_2        as _RecipientAddress on  $projection.BusinessPartnerAddressID        = _RecipientAddress.AddressID
//                                                                and $projection.PersonNumber                    = _RecipientAddress.AddressPersonID
//                                                                and _RecipientAddress.AddressRepresentationCode = ''
//
//  association [0..1] to I_Address_2        as _CustomerAddress  on  $projection.CACustomerAddressID            = _CustomerAddress.AddressID
//                                                                and $projection.CACustomerPersonNumber         = _CustomerAddress.AddressPersonID
//                                                                and _CustomerAddress.AddressRepresentationCode = ''
//
//  // extension
//  association [0..1] to E_CAInvcgDocHeader as _Extension        on  $projection.Correspondence2ndEntityData = _Extension.CAInvoicingDocument
//{
//       //cotyp
//  key  CACorrespondenceType,
//
//       // cokey
//  key  CACorrespondence,
//
//       // adrnr
//       BusinessPartnerAddressID,
//
//       // persnumber
//       PersonNumber,
//
//       // addrnumber
//       CACustomerAddressID,
//
//       // persnumber
//       CACustomerPersonNumber,
//
//       // vkont
//       ContractAccount,
//
//       // gpart
//       BusinessPartner,
//
//       // vtref
//       CAContract,
//
//       // org_gpart
//       OriglCorrespondenceRecipient,
//
//       // bukrs
//       CompanyCode,
//
//       // uname
//       CreatedByUser,
//
//       // cdate
//       CreationDate,
//
//       // ctime
//       CreationTime,
//
//       // copri
//       CorrespondencePrintDate,
//
//       // coidt
//       CorrespondenceIssueDate,
//
//       // coitm
//       CorrespondenceIssueTime,
//
//       // salwa
//       @Semantics.currencyCode: true
//       //       @Semantics.amount.currencyCode: 'Currency'
//       Currency,
//
//       // salbe
//       @Semantics.amount.currencyCode: 'Currency'
//       CAAmountInLocalCurrency,
//
//       // laufd
//       CAMassRunDate,
//
//       // laufi
//       CAMassRunID,
//
//       // spras
//       Language,
//
//       // entid1
//       Correspondence1stEntityIdn,
//
//       // data1
//       Correspondence1stEntityData,
//
//       // entid2
//       Correspondence2ndEntityIdn,
//
//       // data2
//       Correspondence2ndEntityData,
//
//       // entid3
//       Correspondence3rdEntityIdn,
//
//       // data3
//       Correspondence3rdEntityData,
//
//       // entid4
//       Correspondence4thEntityIdn,
//
//       // data4
//       Correspondence4thEntityData,
//
//       // aadrnr
//       CACorrespncSenderAddressID,
//
//       SenderCityName,
//       SenderPostalCode,
//       SenderStreetName,
//       SenderHouseNumber,
//       SenderCountry,
//
//       CompanyCodeName,
//
//       _BusinessPartner.BusinessPartnerName                      as BusinessPartnerName,
//
//       _RecipientAddress.CityName                                as RecipientCityName,
//       _RecipientAddress.PostalCode                              as RecipientPostalCode,
//       _RecipientAddress.StreetName                              as RecipientStreetName,
//       _RecipientAddress.HouseNumber                             as RecipientHouseNumber,
//       _RecipientAddress.Country                                 as RecipientCountry,
//
//       _OriglCorrespncRcpnt._BusinessPartner.BusinessPartnerName as OriglCorrespncRecipientName,
//
//       _CustomerAddress.CityName                                 as CustomerCityName,
//       _CustomerAddress.PostalCode                               as CustomerPostalCode,
//       _CustomerAddress.StreetName                               as CustomerStreetName,
//       _CustomerAddress.HouseNumber                              as BusinessPartnerHouseNumber,
//       _CustomerAddress.Country                                  as CustomerCountry,
//
//       CAInvcgDocumentReversalReason,
//       CAInvcgDocIsLockedForPrinting,
//       CAInvcgProcess,
//       CAApplicationArea,
//       CAInvcgCategory,
//       CAInvcgType,
//       CAInvcgDocPeriodCategory,
//       CAInvcgTargetProcess,
//       CAInvcgCorrectionCategory,
//       CAInvcgDocHasChargeOrDiscItems,
//       CAInvcgDocCreationMode,
//       CAInvcgMasterDataType,
//       CAInvcgTechnicalDocumentType,
//       CAInvcgDocIsPartOfList,
//       CAInvcgBolloTaxPostStatus,
//       CAInvcgDocPeriodDate,
//       DocumentDate,
//
//       @Semantics.amount.currencyCode: 'TransactionCurrency'
//       CAAmountInTransactionCurrency,
//
//       @Semantics.currencyCode: true
//       TransactionCurrency,
//
//       // Make association public
//       _CorrespncType,
//       _CAPartner,
//       _CAInvcgCategoryText,
//       _CorrespncTypeT,
//       _CAInvcgTypeProcText,
//       _CompCode,
//       _SenderAddress,
//       _ContrAcc,
//       _BusinessPartner,
//       _RecipientAddress,
//       _CustomerAddress
//}
```
