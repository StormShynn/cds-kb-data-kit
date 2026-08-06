---
name: I_SUPPLIER
description: Supplier
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIER

**Supplier**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Supplier` | `cast(lfa1.lifnr as lifnr preserving type)` |
| `SupplierAccountGroup` | `ktokk` |
| `SupplierName` | `cast(substring(rtrim(replace(concat(name1, concat(' &@', name2)), '&@', ''),' '),1,80) as md_supplier_name)` |
| `SupplierFullName` | `cast(concat( concat( concat( concat( concat( concat_with_space( anred, name1, 1 ), name2 ), name3 ), name4 ), '/' ), concat_with_space( pstlz, ort01 , 1 ) ) as md_supplier_full_name)` |
| `BPSupplierName` | `cast(substring(rtrim(replace(concat(_AddressDefaultRepresentation.AddresseeName1, concat(' &@', _AddressDefaultRepresentation.AddresseeName2)), '&@', ''),' '),1,81) as suppliername_2)` |
| `BPSupplierFullName` | `cast(concat( concat_with_space( concat_with_space( concat_with_space(_AddressDefaultRepresentation.AddresseeName1, _AddressDefaultRepresentation.AddresseeName2,1 ), _AddressDefaultRepresentation.AddresseeName3,1 ), _AddressDefaultRepresentation.AddresseeName4,1 ), ' ' ) as supplierfullname_2)` |
| `BusinessPartnerName1` | `_AddressDefaultRepresentation.AddresseeName1` |
| `BusinessPartnerName2` | `_AddressDefaultRepresentation.AddresseeName2` |
| `BusinessPartnerName3` | `_AddressDefaultRepresentation.AddresseeName3` |
| `BusinessPartnerName4` | `_AddressDefaultRepresentation.AddresseeName4` |
| `BPAddrCityName` | `_AddressDefaultRepresentation.CityName` |
| `BPAddrStreetName` | `_AddressDefaultRepresentation.StreetName` |
| `AddressSearchTerm1` | `_AddressDefaultRepresentation.AddressSearchTerm1` |
| `AddressSearchTerm2` | `_AddressDefaultRepresentation.AddressSearchTerm2` |
| `DistrictName` | `_AddressDefaultRepresentation.DistrictName` |
| `POBoxDeviatingCityName` | `_AddressDefaultRepresentation.POBoxDeviatingCityName` |
| `BusinessPartnerFormOfAddress` | `_AddressDefaultRepresentation.FormOfAddress` |
| `IsBusinessPurposeCompleted` | `lfa1.cvp_xblck` |
| `CreatedByUser` | `ernam` |
| `CreationDate` | `erdat` |
| `IsOneTimeAccount` | `xcpdk` |
| `AuthorizationGroup` | `begru` |
| `VATRegistration` | `stceg` |
| `AccountIsBlockedForPosting` | `sperr` |
| `TaxJurisdiction` | `txjcd` |
| `SupplierStandardCarrierAccess` | `scacd` |
| `SupplierFwdAgentFreightGroup` | `sfrgr` |
| `SupplierAgentProcedureGroup` | `dlgrp` |
| `SupplIsSocialInsuranceRegtrd` | `regss` |
| `SocialInsuranceActivityCode` | `actss` |
| `SupplierCorporateGroup` | `konzs` |
| `Customer` | `kunnr` |
| `Industry` | `brsch` |
| `TaxNumber1` | `stcd1` |
| `TaxNumber2` | `stcd2` |
| `TaxNumber3` | `stcd3` |
| `TaxNumber4` | `stcd4` |
| `TaxNumber5` | `stcd5` |
| `TaxNumber6` | `stcd6` |
| `PostingIsBlocked` | `sperr` |
| `PurchasingIsBlocked` | `sperm` |
| `InternationalLocationNumber1` | `bbbnr` |
| `InternationalLocationNumber2` | `bbsnr` |
| `InternationalLocationNumber3` | `bubkz` |
| `AddressID` | `adrnr` |
| `Region` | `lfa1.regio` |
| `OrganizationBPName1` | `lfa1.name1` |
| `OrganizationBPName2` | `lfa1.name2` |
| `CityName` | `lfa1.ort01` |
| `PostalCode` | `lfa1.pstlz` |
| `StreetName` | `lfa1.stras` |
| `Country` | `lfa1.land1` |
| `ConcatenatedInternationalLocNo` | `cast((concat(concat(bbbnr,concat(' & ', bbsnr)),concat(' & ',bubkz))) as md_international_loc )` |
| `SupplierProcurementBlock` | `sperq` |
| `SuplrQualityManagementSystem` | `qssys` |
| `SuplrQltyInProcmtCertfnValidTo` | `qssysdat` |
| `SupplierLanguage` | `lfa1.spras` |
| `AlternativePayeeAccountNumber` | `lfa1.lnrza` |
| `PhoneNumber1` | `lfa1.telf1` |
| `FaxNumber` | `lfa1.telfx` |
| `IsNaturalPerson` | `lfa1.stkzn` |
| `TaxNumberResponsible` | `lfa1.stenr` |
| `UK_ContractorBusinessType` | `lfa1.categ` |
| `UK_PartnerTradingName` | `lfa1.partner_name` |
| `UK_PartnerTaxReference` | `lfa1.partner_utr` |
| `UK_VerificationStatus` | `lfa1.status` |
| `UK_VerificationNumber` | `lfa1.vfnum` |
| `UK_CompanyRegistrationNumber` | `lfa1.crn` |
| `UK_VerifiedTaxStatus` | `lfa1.vfnid` |
| `FormOfAddress` | `lfa1.anred` |
| `ReferenceAccountGroup` | `lfa1.ktock` |
| `VATLiability` | `lfa1.stkzu` |
| `ResponsibleType` | `lfa1.fityp` |
| `TaxNumberType` | `lfa1.stcdt` |
| `FiscalAddress` | `lfa1.fiskn` |
| `BusinessType` | `lfa1.j_1kftbus` |
| `BirthDate` | `lfa1.gbdat` |
| `CreditorInformationNumber` | `lfa1.kraus` |
| `PaymentIsBlockedForSupplier` | `lfa1.sperz` |
| `SortField` | `lfa1.sortl` |
| `PhoneNumber2` | `lfa1.telf2` |
| `DeletionIndicator` | `lfa1.loevm` |
| `TaxInvoiceRepresentativeName` | `j_1kfrepre` |
| `IndustryType` | `j_1kftind` |
| `IN_GSTSupplierClassification` | `lfa1.ven_class` |
| `SuplrProofOfDelivRlvtCode` | `lfa1.podkzb` |
| `TradingPartner` | `lfa1.vbund` |
| `BR_TaxIsSplit` | `lfa1.ipisp` |
| `AU_PayerIsPayingToCarryOnEnt` | `lfa1.au_carrying_ent` |
| `AU_IndividualIsUnder18` | `lfa1.au_ind_under_18` |
| `AU_PaymentIsExceeding75` | `lfa1.au_payment_not_exceed_75` |
| `AU_PaymentIsWhollyInputTaxed` | `lfa1.au_wholly_inp_taxed` |
| `AU_PartnerIsSupplyWithoutGain` | `lfa1.au_partner_without_gain` |
| `AU_SupplierIsEntitledToABN` | `lfa1.au_not_entitled_abn` |
| `AU_PaymentIsIncomeExempted` | `lfa1.au_payment_exempt` |
| `AU_SupplyIsMadeAsPrivateHobby` | `lfa1.au_private_hobby` |
| `AU_SupplyMadeIsOfDmstcNature` | `lfa1.au_domestic_nature` |
| `IsToBeAcceptedAtOrigin` | `lfa1.weora` |
| `BPIsEqualizationTaxSubject` | `cast (stkza as xfeld preserving type)` |
| `BRSpcfcTaxBasePercentageCode` | `lfa1.taxbs` |
| `SupplierProfession` | `lfa1.profs` |
| `SuplrManufacturerExternalName` | `lfa1.emnfr` |
| `DataMediumExchangeIndicator` | `lfa1.dtams` |
| `DataExchangeInstructionKey` | `lfa1.dtaws` |
| `SupplierIsSubRangeRelevant` | `lfa1.ltsna` |
| `TrainStationName` | `lfa1.bahns` |
| `AlternativePayeeIsAllowed` | `lfa1.xzemp` |
| `PaytSlipWthRefSubscriber` | `lfa1.esrnr` |
| `Grp` | `: 'Stat. Grp` |
| `TranspServiceAgentStstcGrp` | `Agent' lfa1.stgdl` |
| `SupplierIsPlantRelevant` | `lfa1.werkr` |
| `SuplrTaxAuthorityAccountNumber` | `lfa1.fisku` |
| `SuplrCarrierConfirmIsExpected` | `carrier_conf` |
| `SupplierPlant` | `lfa1.werks` |
| `FactoryCalendar` | `lfa1.plkal` |
| `PaymentReason` | `lfa1.paytrsn` |
| `SupplierCentralDeletionIsBlock` | `lfa1.nodel` |
| `DataControllerSet` | `lfa1.xdcset` |
| `DataController1` | `lfa1.data_ctrlr1` |
| `DataController2` | `lfa1.data_ctrlr2` |
| `DataController3` | `lfa1.data_ctrlr3` |
| `DataController4` | `lfa1.data_ctrlr4` |
| `DataController5` | `lfa1.data_ctrlr5` |
| `DataController6` | `lfa1.data_ctrlr6` |
| `DataController7` | `lfa1.data_ctrlr7` |
| `DataController8` | `lfa1.data_ctrlr8` |
| `DataController9` | `lfa1.data_ctrlr9` |
| `DataController10` | `lfa1.data_ctrlr10` |
| `SupplierTransportationChain` | `lfa1.transport_chain` |
| `SupplierStagingTimeInDays` | `lfa1.staging_time` |
| `SupplierSchedulingProcedure` | `lfa1.scheduling_type` |
| `CollectiveNumberingIsRelevant` | `lfa1.submi_relevant` |
| `BusinessPartnerPanNumber` | `lfa1.j_1ipanno` |
| `BPPanReferenceNumber` | `lfa1.j_1ipanref` |
| `BPPanValidFromDate` | `lfa1.j_1ipanvaldt` |
| `_SupplierToBusinessPartner` | *Association* |
| `_SupplierCompany` | *Association* |
| `_SupplierPurchasingOrg` | *Association* |
| `_SupplierBankDetails` | *Association* |
| `_SupplierAccountGroup` | *Association* |
| `_Industry` | *Association* |
| `_CorrespondingCustomer` | *Association* |
| `_SupplierAccountGroupText` | *Association* |
| `_SupplierIndustryText` | *Association* |
| `_ProcurementBlock` | *Association* |
| `_QualityManagementSystem` | *Association* |
| `_StandardAddress` | *Association* |
| `_AddressDefaultRepresentation` | *Association* |
| `_AddressRepresentation` | *Association* |
| `_EmailAddress` | *Association* |
| `_CurrentDfltEmailAddress` | *Association* |
| `_PhoneNumber` | *Association* |
| `_CurrentDfltLandlinePhoneNmbr` | *Association* |
| `_CurrentDfltMobilePhoneNumber` | *Association* |
| `_FaxNumber` | *Association* |
| `_CurrentDfltFaxNumber` | *Association* |
| `_UniformResourceIdentifier` | *Association* |
| `_MainWebsiteURL` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierToBusinessPartner` | `I_SupplierToBusinessPartner` | [1..1] |
| `_FiscalData` | `bp1020` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..*] |
| `_SupplierPurchasingOrg` | `I_SupplierPurchasingOrg` | [0..*] |
| `_SupplierBankDetails` | `I_SupplierBankDetails` | [0..*] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..1] |
| `_Industry` | `I_Industries` | [0..*] |
| `_CorrespondingCustomer` | `I_Customer` | [0..1] |
| `_SupplierAccountGroupText` | `I_SupplierAccountGroupText` | [0..*] |
| `_SupplierIndustryText` | `I_SupplierIndustryText` | [0..*] |
| `_ProcurementBlock` | `I_ProcurementBlock` | [0..1] |
| `_QualityManagementSystem` | `I_QualityManagementSystem` | [0..1] |
| `_StandardAddress` | `I_Address` | [1..1] |
| `_SupplierExt` | `E_Supplier` | [0..1] |
| `_AddressDefaultRepresentation` | `I_OrganizationAddress` | [0..1] |
| `_AddressRepresentation` | `I_Address_2` | [0..1] |
| `_EmailAddress` | `I_AddressEmailAddress_2` | [0..*] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_PhoneNumber` | `I_AddressPhoneNumber_2` | [0..*] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_FaxNumber` | `I_AddressFaxNumber_2` | [0..*] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |
| `_UniformResourceIdentifier` | `I_AddressURI` | [0..*] |
| `_MainWebsiteURL` | `I_AddressMainWebsiteURL` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_SUPPLIER_CDS'
@AbapCatalog.preserveKey:true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_AddressDefaultRepresentation','_AddressRepresentation']
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
           {
            table: 'LFA1', role: #MAIN,
            viewElement: ['Supplier'],
            tableElement: ['lifnr']
          },

         {
            table: 'ADRC', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['AddressID'],
             tableElement: ['Addrnumber']
         } ]
    }
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'Supplier'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ObjectModel.sapObjectNodeType.name: 'Supplier'

define view I_Supplier
  as select from lfa1
  //private associations
  association [1..1] to I_SupplierToBusinessPartner    as _SupplierToBusinessPartner    on  $projection.Supplier = _SupplierToBusinessPartner.Supplier
  association [0..1] to bp1020                         as _FiscalData                   on  lfa1.lifnr = _FiscalData.partnr // technically wrong for lifnr<>but000.partner, but usage of $projection.BusinessPartner is not allowed. H
  //public composition associations
  association [0..*] to I_SupplierCompany              as _SupplierCompany              on  $projection.Supplier = _SupplierCompany.Supplier
  association [0..*] to I_SupplierPurchasingOrg        as _SupplierPurchasingOrg        on  $projection.Supplier = _SupplierPurchasingOrg.Supplier
  association [0..*] to I_SupplierBankDetails          as _SupplierBankDetails          on  $projection.Supplier = _SupplierBankDetails.Supplier
  //public value helps
  association [0..1] to I_SupplierAccountGroup         as _SupplierAccountGroup         on  $projection.SupplierAccountGroup = _SupplierAccountGroup.SupplierAccountGroup
  association [0..*] to I_Industries                   as _Industry                     on  $projection.Industry = _Industry.IndustrySector
  //public foreign key associations
  association [0..1] to I_Customer                     as _CorrespondingCustomer        on  $projection.Customer = _CorrespondingCustomer.Customer

  ////public texts
  association [0..*] to I_SupplierAccountGroupText     as _SupplierAccountGroupText     on  $projection.SupplierAccountGroup = _SupplierAccountGroupText.SupplierAccountGroup
  association [0..*] to I_SupplierIndustryText         as _SupplierIndustryText         on  $projection.Industry = _SupplierIndustryText.SupplierIndustry
  ////public foreign key associations

  //quality management
  association [0..1] to I_ProcurementBlock             as _ProcurementBlock             on  $projection.SupplierProcurementBlock = _ProcurementBlock.ProcurementBlock
  association [0..1] to I_QualityManagementSystem      as _QualityManagementSystem      on  $projection.SuplrQualityManagementSystem = _QualityManagementSystem.QualityManagementSystem
  association [1..1] to I_Address                      as _StandardAddress              on  $projection.AddressID = _StandardAddress.AddressID
  //  association [1..1] to I_BusinessPartnerAddress      as _BusinessPartnerAddress   on $projection.BusinessPartner = _BusinessPartnerAddress.BusinessPartner
  // and $projection.AddressID =  _BusinessPartnerAddress.AddressNumber
  association [0..1] to E_Supplier                     as _SupplierExt                  on  $projection.Supplier = _SupplierExt.Supplier

  // association added for I_ADDRESS_2 adoption
  association [0..1] to I_OrganizationAddress          as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                                        and _AddressDefaultRepresentation.AddressRepresentationCode is initial
  association [0..1] to I_Address_2                    as _AddressRepresentation        on  $projection.AddressID                            = _AddressRepresentation.AddressID
                                                                                        and _AddressRepresentation.AddressRepresentationCode is initial
                                                                                        and _AddressRepresentation.AddressPersonID           is initial
  //Adoption from I_Address_2
  association [0..*] to I_AddressEmailAddress_2        as _EmailAddress                 on  _EmailAddress.AddressID       = $projection.AddressID
                                                                                        and _EmailAddress.AddressPersonID is initial

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress      on  _CurrentDfltEmailAddress.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltEmailAddress.AddressPersonID is initial

  association [0..*] to I_AddressPhoneNumber_2         as _PhoneNumber                  on  _PhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _PhoneNumber.AddressPersonID is initial

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr on  _CurrentDfltLandlinePhoneNmbr.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltLandlinePhoneNmbr.AddressPersonID is initial

  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber on  _CurrentDfltMobilePhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltMobilePhoneNumber.AddressPersonID is initial

  association [0..*] to I_AddressFaxNumber_2           as _FaxNumber                    on  _FaxNumber.AddressID       = $projection.AddressID
                                                                                        and _FaxNumber.AddressPersonID is initial

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber         on  _CurrentDfltFaxNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltFaxNumber.AddressPersonID is initial

  association [0..*] to I_AddressURI                   as _UniformResourceIdentifier    on  _UniformResourceIdentifier.AddressID       = $projection.AddressID
                                                                                        and _UniformResourceIdentifier.AddressPersonID is initial

  association [0..1] to I_AddressMainWebsiteURL        as _MainWebsiteURL               on  _MainWebsiteURL.AddressID       = $projection.AddressID
                                                                                        and _MainWebsiteURL.AddressPersonID is initial


{

      @ObjectModel.text.element: ['SupplierName']
      @Consumption.labelElement: 'SupplierName'
  key cast(lfa1.lifnr as lifnr preserving type)                                                                                                                                                                                                                                                             as Supplier,
      //  _SupplierToBusinessPartner._BusinessPartner.BusinessPartner                                                 as BusinessPartner,
      @EndUserText.label: 'Account Group'
      ktokk                                                                                                                                                                                                                                                                                                 as SupplierAccountGroup,
      @Semantics.text: true
      cast(substring(rtrim(replace(concat(name1, concat(' &@', name2)), '&@', ''),' '),1,80) as md_supplier_name)                                                                                                                                                                                           as SupplierName,
      cast(concat( concat( concat( concat( concat( concat_with_space( anred, name1, 1 ), name2 ), name3 ), name4 ), '/' ),
          concat_with_space( pstlz, ort01 , 1 ) )  as md_supplier_full_name)                                                                                                                                                                                                                                as SupplierFullName,

      // // For increase in field length
      //@Semantics.text: true
      @EndUserText.label: 'Business Partner - Supplier Name'
      cast(substring(rtrim(replace(concat(_AddressDefaultRepresentation.AddresseeName1, concat(' &@', _AddressDefaultRepresentation.AddresseeName2)), '&@', ''),' '),1,81) as suppliername_2)                                                                                                               as BPSupplierName,
      @EndUserText.label: 'Business Partner - Supplier Full Name'
      cast(concat( concat_with_space( concat_with_space( concat_with_space(_AddressDefaultRepresentation.AddresseeName1, _AddressDefaultRepresentation.AddresseeName2,1 ), _AddressDefaultRepresentation.AddresseeName3,1 ), _AddressDefaultRepresentation.AddresseeName4,1 ), ' ' ) as supplierfullname_2) as BPSupplierFullName,

      //      _AddressRepresentation.OrganizationName1                                                                                                                                                                                            as BusinessPartnerName1,
      //      _AddressRepresentation.OrganizationName2                                                                                                                                                                                            as BusinessPartnerName2,
      //      _AddressRepresentation.OrganizationName3                                                                                                                                                                                            as BusinessPartnerName3,
      //      _AddressRepresentation.OrganizationName4                                                                                                                                                                                            as BusinessPartnerName4,


      //Adoption of Name and Address fields
      @EndUserText.label: 'Business Partner Organization  - Name 1'
      _AddressDefaultRepresentation.AddresseeName1 as BusinessPartnerName1,                                                                                                                                                                                       
      @EndUserText.label: 'Business Partner Organization  - Name 2'                                                                                                                                                                                                                                                          
      _AddressDefaultRepresentation.AddresseeName2 as BusinessPartnerName2,
      @EndUserText.label: 'Business Partner Organization  - Name 3'                                                                                                                                                                                                                                                         
      _AddressDefaultRepresentation.AddresseeName3 as BusinessPartnerName3,
      @EndUserText.label: 'Business Partner Organization  - Name 4'                                                                                                                                                                                                                                                        
      _AddressDefaultRepresentation.AddresseeName4 as BusinessPartnerName4,                                                                                                                                                                                                                                                       
      @EndUserText.label: 'Business Partner Address – City'
      _AddressDefaultRepresentation.CityName                                                                                                                                                                                                                                                                as BPAddrCityName,
      @EndUserText.label: 'Business Partner Address – Street'
      _AddressDefaultRepresentation.StreetName                                                                                                                                                                                                                                                              as BPAddrStreetName,
      @EndUserText.label: 'Business Partner Address - Search Term 1'
      _AddressDefaultRepresentation.AddressSearchTerm1                                                                                                                                                                                                                                                      as AddressSearchTerm1,
      @EndUserText.label: 'Business Partner Address - Search Term 2'
      _AddressDefaultRepresentation.AddressSearchTerm2                                                                                                                                                                                                                                                      as AddressSearchTerm2,
      @EndUserText.label: 'Business Partner Address – District'
      _AddressDefaultRepresentation.DistrictName                                                                                                                                                                                                                                                            as DistrictName,
      @EndUserText.label: 'Business Partner Address - PO Box Deviating City'
      _AddressDefaultRepresentation.POBoxDeviatingCityName                                                                                                                                                                                                                                                  as POBoxDeviatingCityName,
      @EndUserText.label: 'Business Partner - Form of Address'
      _AddressDefaultRepresentation.FormOfAddress                                                                                                                                                                                                                                                           as BusinessPartnerFormOfAddress,


      lfa1.cvp_xblck                                                                                                                                                                                                                                                                                        as IsBusinessPurposeCompleted,
      @EndUserText.label: 'Created By'
      ernam                                                                                                                                                                                                                                                                                                 as CreatedByUser,
      erdat                                                                                                                                                                                                                                                                                                 as CreationDate,
      xcpdk                                                                                                                                                                                                                                                                                                 as IsOneTimeAccount,
      begru                                                                                                                                                                                                                                                                                                 as AuthorizationGroup,
      stceg                                                                                                                                                                                                                                                                                                 as VATRegistration,
      @EndUserText.label: 'Posting Block(Deprecated)'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PostingIsBlocked'
      sperr                                                                                                                                                                                                                                                                                                 as AccountIsBlockedForPosting,
      txjcd                                                                                                                                                                                                                                                                                                 as TaxJurisdiction,
      scacd                                                                                                                                                                                                                                                                                                 as SupplierStandardCarrierAccess,
      sfrgr                                                                                                                                                                                                                                                                                                 as SupplierFwdAgentFreightGroup,
      dlgrp                                                                                                                                                                                                                                                                                                 as SupplierAgentProcedureGroup,
      regss                                                                                                                                                                                                                                                                                                 as SupplIsSocialInsuranceRegtrd,
      actss                                                                                                                                                                                                                                                                                                 as SocialInsuranceActivityCode,
      @EndUserText.label: 'Group Key'
      konzs                                                                                                                                                                                                                                                                                                 as SupplierCorporateGroup, //to be used
      kunnr                                                                                                                                                                                                                                                                                                 as Customer,
      brsch                                                                                                                                                                                                                                                                                                 as Industry,   // siehe Anmerkung
      stcd1                                                                                                                                                                                                                                                                                                 as TaxNumber1, // tax number 1&2: siehe Anmerkung
      stcd2                                                                                                                                                                                                                                                                                                 as TaxNumber2,
      stcd3                                                                                                                                                                                                                                                                                                 as TaxNumber3,
      stcd4                                                                                                                                                                                                                                                                                                 as TaxNumber4,
      stcd5                                                                                                                                                                                                                                                                                                 as TaxNumber5,
      stcd6                                                                                                                                                                                                                                                                                                 as TaxNumber6,
      sperr                                                                                                                                                                                                                                                                                                 as PostingIsBlocked,
      @EndUserText.label: 'Purch. Block'
      sperm                                                                                                                                                                                                                                                                                                 as PurchasingIsBlocked,
      @EndUserText.quickInfo: 'International Location Number (Part 1)'
      bbbnr                                                                                                                                                                                                                                                                                                 as InternationalLocationNumber1,
      @EndUserText.quickInfo: 'International Location Number (Part 2)'
      bbsnr                                                                                                                                                                                                                                                                                                 as InternationalLocationNumber2,
      @EndUserText.label: 'Check Digit'
      bubkz                                                                                                                                                                                                                                                                                                 as InternationalLocationNumber3,
      adrnr                                                                                                                                                                                                                                                                                                 as AddressID,
      lfa1.regio                                                                                                                                                                                                                                                                                            as Region,
      lfa1.name1                                                                                                                                                                                                                                                                                            as OrganizationBPName1,
      lfa1.name2                                                                                                                                                                                                                                                                                            as OrganizationBPName2,
      lfa1.ort01                                                                                                                                                                                                                                                                                            as CityName,
      lfa1.pstlz                                                                                                                                                                                                                                                                                            as PostalCode,
      lfa1.stras                                                                                                                                                                                                                                                                                            as StreetName,
      lfa1.land1                                                                                                                                                                                                                                                                                            as Country,

      cast((concat(concat(bbbnr,concat(' & ', bbsnr)),concat(' & ',bubkz)))  as md_international_loc )                                                                                                                                                                                                      as ConcatenatedInternationalLocNo,

      //quality management
      sperq                                                                                                                                                                                                                                                                                                 as SupplierProcurementBlock,
      qssys                                                                                                                                                                                                                                                                                                 as SuplrQualityManagementSystem,
      qssysdat                                                                                                                                                                                                                                                                                              as SuplrQltyInProcmtCertfnValidTo,
      //globalization
      lfa1.spras                                                                                                                                                                                                                                                                                            as SupplierLanguage,
      lfa1.lnrza                                                                                                                                                                                                                                                                                            as AlternativePayeeAccountNumber,
      lfa1.telf1                                                                                                                                                                                                                                                                                            as PhoneNumber1,
      lfa1.telfx                                                                                                                                                                                                                                                                                            as FaxNumber,
      lfa1.stkzn                                                                                                                                                                                                                                                                                            as IsNaturalPerson,
      lfa1.stenr                                                                                                                                                                                                                                                                                            as TaxNumberResponsible,
      lfa1.categ                                                                                                                                                                                                                                                                                            as UK_ContractorBusinessType,
      lfa1.partner_name                                                                                                                                                                                                                                                                                     as UK_PartnerTradingName,
      lfa1.partner_utr                                                                                                                                                                                                                                                                                      as UK_PartnerTaxReference,
      lfa1.status                                                                                                                                                                                                                                                                                           as UK_VerificationStatus,
      lfa1.vfnum                                                                                                                                                                                                                                                                                            as UK_VerificationNumber,
      lfa1.crn                                                                                                                                                                                                                                                                                              as UK_CompanyRegistrationNumber,
      lfa1.vfnid                                                                                                                                                                                                                                                                                            as UK_VerifiedTaxStatus,

      lfa1.anred                                                                                                                                                                                                                                                                                            as FormOfAddress,
      lfa1.ktock                                                                                                                                                                                                                                                                                            as ReferenceAccountGroup,
      lfa1.stkzu                                                                                                                                                                                                                                                                                            as VATLiability,

      //GS
      @EndUserText.label: 'Tax Type'
      lfa1.fityp                                                                                                                                                                                                                                                                                            as ResponsibleType,
      @EndUserText.label: 'Tax Number Type'
      lfa1.stcdt                                                                                                                                                                                                                                                                                            as TaxNumberType,
      @EndUserText.label: 'Fiscal Address'
      lfa1.fiskn                                                                                                                                                                                                                                                                                            as FiscalAddress,
      lfa1.j_1kftbus                                                                                                                                                                                                                                                                                        as BusinessType,

      lfa1.gbdat                                                                                                                                                                                                                                                                                            as BirthDate,
      lfa1.kraus                                                                                                                                                                                                                                                                                            as CreditorInformationNumber,
      @EndUserText.label: 'Payment Block'
      lfa1.sperz                                                                                                                                                                                                                                                                                            as PaymentIsBlockedForSupplier,
      @EndUserText.label: 'Search Term'
      lfa1.sortl                                                                                                                                                                                                                                                                                            as SortField,
      lfa1.telf2                                                                                                                                                                                                                                                                                            as PhoneNumber2,
      lfa1.loevm                                                                                                                                                                                                                                                                                            as DeletionIndicator,

      //GS FIN
      j_1kfrepre                                                                                                                                                                                                                                                                                            as TaxInvoiceRepresentativeName,
      j_1kftind                                                                                                                                                                                                                                                                                             as IndustryType,
      lfa1.ven_class                                                                                                                                                                                                                                                                                        as IN_GSTSupplierClassification,
      lfa1.podkzb                                                                                                                                                                                                                                                                                           as SuplrProofOfDelivRlvtCode,
      lfa1.vbund                                                                                                                                                                                                                                                                                            as TradingPartner,
      @EndUserText.label: 'Tax Split'
      lfa1.ipisp                                                                                                                                                                                                                                                                                            as BR_TaxIsSplit,

      lfa1.au_carrying_ent                                                                                                                                                                                                                                                                                  as AU_PayerIsPayingToCarryOnEnt,
      lfa1.au_ind_under_18                                                                                                                                                                                                                                                                                  as AU_IndividualIsUnder18,
      @EndUserText.label: 'Payment Does not Exc'
      lfa1.au_payment_not_exceed_75                                                                                                                                                                                                                                                                         as AU_PaymentIsExceeding75,
      lfa1.au_wholly_inp_taxed                                                                                                                                                                                                                                                                              as AU_PaymentIsWhollyInputTaxed,

      @EndUserText.label: 'Individual w/o Gain'
      lfa1.au_partner_without_gain                                                                                                                                                                                                                                                                          as AU_PartnerIsSupplyWithoutGain,
      lfa1.au_not_entitled_abn                                                                                                                                                                                                                                                                              as AU_SupplierIsEntitledToABN,
      lfa1.au_payment_exempt                                                                                                                                                                                                                                                                                as AU_PaymentIsIncomeExempted,
      lfa1.au_private_hobby                                                                                                                                                                                                                                                                                 as AU_SupplyIsMadeAsPrivateHobby,
      lfa1.au_domestic_nature                                                                                                                                                                                                                                                                               as AU_SupplyMadeIsOfDmstcNature,

      lfa1.weora                                                                                                                                                                                                                                                                                            as IsToBeAcceptedAtOrigin,

      //  newly added fields
      cast (stkza as xfeld preserving type)                                                                                                                                                                                                                                                                 as BPIsEqualizationTaxSubject,
      lfa1.taxbs                                                                                                                                                                                                                                                                                            as BRSpcfcTaxBasePercentageCode,
      lfa1.profs                                                                                                                                                                                                                                                                                            as SupplierProfession,
      lfa1.emnfr                                                                                                                                                                                                                                                                                            as SuplrManufacturerExternalName,
      lfa1.dtams                                                                                                                                                                                                                                                                                            as DataMediumExchangeIndicator,
      lfa1.dtaws                                                                                                                                                                                                                                                                                            as DataExchangeInstructionKey,
      @EndUserText.label: 'VSR Relevant'
      lfa1.ltsna                                                                                                                                                                                                                                                                                            as SupplierIsSubRangeRelevant,
      @EndUserText.label: 'Train Station'
      lfa1.bahns                                                                                                                                                                                                                                                                                            as TrainStationName,
      lfa1.xzemp                                                                                                                                                                                                                                                                                            as AlternativePayeeIsAllowed,
      lfa1.esrnr                                                                                                                                                                                                                                                                                            as PaytSlipWthRefSubscriber,
      @EndUserText.label: 'Stat. Grp, Agent'
      lfa1.stgdl                                                                                                                                                                                                                                                                                            as TranspServiceAgentStstcGrp,
      @EndUserText.label: 'Plant Level Relevant'
      lfa1.werkr                                                                                                                                                                                                                                                                                            as SupplierIsPlantRelevant,
      lfa1.fisku                                                                                                                                                                                                                                                                                            as SuplrTaxAuthorityAccountNumber,
      @Semantics.booleanIndicator: true
      carrier_conf                                                                                                                                                                                                                                                                                          as SuplrCarrierConfirmIsExpected,
      lfa1.werks                                                                                                                                                                                                                                                                                            as SupplierPlant,
      lfa1.plkal                                                                                                                                                                                                                                                                                            as FactoryCalendar,
      lfa1.paytrsn                                                                                                                                                                                                                                                                                          as PaymentReason,
      @EndUserText.label: 'Central Del. Block'
      lfa1.nodel                                                                                                                                                                                                                                                                                            as SupplierCentralDeletionIsBlock,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true     
      lfa1.xdcset                                                                                                                                                                                                                                                                                           as DataControllerSet,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true    
      lfa1.data_ctrlr1                                                                                                                                                                                                                                                                                      as DataController1,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true     
      lfa1.data_ctrlr2                                                                                                                                                                                                                                                                                      as DataController2,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr3                                                                                                                                                                                                                                                                                      as DataController3,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr4                                                                                                                                                                                                                                                                                      as DataController4,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true     
      lfa1.data_ctrlr5                                                                                                                                                                                                                                                                                      as DataController5,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true     
      lfa1.data_ctrlr6                                                                                                                                                                                                                                                                                      as DataController6,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr7                                                                                                                                                                                                                                                                                      as DataController7,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr8                                                                                                                                                                                                                                                                                      as DataController8,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr9                                                                                                                                                                                                                                                                                      as DataController9,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      lfa1.data_ctrlr10                                                                                                                                                                                                                                                                                     as DataController10,
      lfa1.transport_chain                                                                                                                                                                                                                                                                                  as SupplierTransportationChain,
      lfa1.staging_time                                                                                                                                                                                                                                                                                     as SupplierStagingTimeInDays,
      lfa1.scheduling_type                                                                                                                                                                                                                                                                                  as SupplierSchedulingProcedure,
      lfa1.submi_relevant                                                                                                                                                                                                                                                                                   as CollectiveNumberingIsRelevant,
      lfa1.j_1ipanno                                                                                                                                                                                                                                                                                        as BusinessPartnerPanNumber,
      lfa1.j_1ipanref                                                                                                                                                                                                                                                                                       as BPPanReferenceNumber,
      lfa1.j_1ipanvaldt                                                                                                                                                                                                                                                                                     as BPPanValidFromDate,

      //
      _SupplierCompany,
      _SupplierPurchasingOrg,
      _SupplierBankDetails,
      _SupplierAccountGroup,
      _SupplierAccountGroupText, // OBSOLETE to be deleted
      _SupplierIndustryText, // OBSOLETE to be deleted

      _Industry,
      _StandardAddress,
      // _Address removed, use _StandardAddress instead
      _CorrespondingCustomer,
      _SupplierToBusinessPartner,
      //quality management
      _ProcurementBlock,
      _QualityManagementSystem,
      _AddressDefaultRepresentation,
      _AddressRepresentation,
      // _BusinessPartnerAddress
      //     _SupplierUnprotectedAddr

      _EmailAddress,
      _CurrentDfltEmailAddress,
      _PhoneNumber,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltMobilePhoneNumber,
      _FaxNumber,
      _CurrentDfltFaxNumber,
      _UniformResourceIdentifier,
      _MainWebsiteURL
}
//TESTING
```
