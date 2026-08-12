---
name: I_BUSINESSPARTNER
description: "Business Partner"
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
semantic_en: "Business Partner — Interface CDS view based on but000."
semantic_vi: "Business Partner — CDS view giao diện dựa trên but000."
keywords:
  - "business"
  - "partner"
  - "category"
  - "authorization"
  - "group"
  - "person"
  - "number"
  - "name"
tags:
  - bo:businesspartner
  - interface-view
---
# I_BUSINESSPARTNER

**Business Partner**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BusinessPartnerCategory` |  | |  | `type` |  |  |
| `AuthorizationGroup` |  | |  | `augrp` |  |  |
| `BusinessPartnerUUID` |  | |  | `partner_guid` |  |  |
| `PersonNumber` |  | |  | `persnumber` |  |  |
| `ETag` |  | |  | `case when but000.chusr <> '' then concat(but000.chusr, concat( but000.chdat, but000.chtim ) ) else concat(but000.crusr, concat( but000.crdat, but000.crtim ) ) end` |  |  |
| `BusinessPartnerName` |  | |  | `case when type = '1' then concat_with_space( name_first, name_last, 1) when type = '2' then concat_with_space( name_org1, name_org2, 1) when type = '3' then concat_with_space( name_grp1, name_grp2, 1) end` |  |  |
| `BusinessPartnerFullName` |  | |  | `case when type = '1' then concat_with_space( name_first, name_last,1) when type = '2' then concat_with_space( name_org1, name_org2,1) when type = '3' then concat_with_space( name_grp1, name_grp2,1) end` |  |  |
| `CreatedByUser` |  | |  | `crusr` |  |  |
| `CreationDate` |  | |  | `crdat` |  |  |
| `CreationTime` |  | |  | `crtim` |  |  |
| `LastChangedByUser` |  | |  | `chusr` |  |  |
| `LastChangeDate` |  | |  | `chdat` |  |  |
| `LastChangeTime` |  | |  | `chtim` |  |  |
| `BusinessPartnerIsBlocked` |  | |  | `xblck` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `xpcpt` |  |  |
| `FirstName` |  | |  | `name_first` |  |  |
| `LastName` |  | |  | `name_last` |  |  |
| `PersonFullName` |  | |  | `name1_text` |  |  |
| `OrganizationBPName1` |  | |  | `name_org1` |  |  |
| `OrganizationBPName2` |  | |  | `name_org2` |  |  |
| `OrganizationBPName3` |  | |  | `name_org3` |  |  |
| `OrganizationBPName4` |  | |  | `name_org4` |  |  |
| `InternationalLocationNumber1` |  | |  | `location_1` |  |  |
| `InternationalLocationNumber2` |  | |  | `location_2` |  |  |
| `InternationalLocationNumber3` |  | |  | `location_3` |  |  |
| `LegalForm` |  | |  | `legal_enty` |  |  |
| `OrganizationFoundationDate` |  | |  | `found_dat` |  |  |
| `OrganizationLiquidationDate` |  | |  | `liquid_dat` |  |  |
| `Industry` |  | |  | `ind_sector` |  |  |
| `IsNaturalPerson` |  | |  | `natpers` |  |  |
| `IsFemale` |  | |  | `xsexf` |  |  |
| `IsMale` |  | |  | `xsexm` |  |  |
| `IsSexUnknown` |  | |  | `xsexu` |  |  |
| `FormOfAddress` |  | |  | `title` |  |  |
| `AcademicTitle` |  | |  | `title_aca1` |  |  |
| `AcademicTitle2` |  | |  | `title_aca2` |  |  |
| `NameFormat` |  | |  | `nameformat` |  |  |
| `NameCountry` |  | |  | `namcountry` |  |  |
| `BusinessPartnerGrouping` |  | |  | `bu_group` |  |  |
| `BusinessPartnerType` |  | |  | `bpkind` |  |  |
| `MiddleName` |  | |  | `namemiddle` |  |  |
| `AdditionalLastName` |  | |  | `name_lst2` |  |  |
| `GroupBusinessPartnerName1` |  | |  | `name_grp1` |  |  |
| `GroupBusinessPartnerName2` |  | |  | `name_grp2` |  |  |
| `CorrespondenceLanguage` |  | |  | `langu_corr` |  |  |
| `Language` |  | |  | `bu_langu` |  |  |
| `SearchTerm1` |  | |  | `bu_sort1` |  |  |
| `SearchTerm2` |  | |  | `bu_sort2` |  |  |
| `BPLastNameSearchHelp` |  | |  | `mc_name1` |  |  |
| `BPFirstNameSearchHelp` |  | |  | `mc_name2` |  |  |
| `BusinessPartnerNicknameLabel` |  | |  | `nickname` |  |  |
| `IndependentAddressID` |  | |  | `addrcomm` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `BirthDate` |  | |  | `birthdt` |  |  |
| `IsMarkedForArchiving` |  | |  | `xdele` |  |  |
| `ContactPermission` |  | |  | `contact` |  |  |
| `BusinessPartnerIDByExtSystem` |  | |  | `bpext` |  |  |
| `LegalEntityOfOrganization` |  | |  | `legal_org` |  |  |
| `BusinessPartnerPrintFormat` |  | |  | `print_mode` |  |  |
| `BusinessPartnerDataOriginType` |  | |  | `source` |  |  |
| `BusinessPartnerIsNotReleased` |  | |  | `not_released` |  |  |
| `IsNotContractuallyCapable` |  | |  | `not_lg_competent` |  |  |
| `BusinessPartnerOccupation` |  | |  | `jobgr` |  |  |
| `BusPartMaritalStatus` |  | |  | `marst` |  |  |
| `BusPartNationality` |  | |  | `natio` |  |  |
| `NonResidentCompanyOriginCntry` |  | |  | `cndsc` |  |  |
| `BusinessPartnerSalutation` |  | |  | `title_let` |  |  |
| `BusinessPartnerBirthName` |  | |  | `name_last2` |  |  |
| `BusinessPartnerSupplementName` |  | |  | `title_royl` |  |  |
| `BusinessPartnerBirthplaceName` |  | |  | `birthpl` |  |  |
| `NaturalPersonEmployerName` |  | |  | `emplo` |  |  |
| `BusinessPartnerDeathDate` |  | |  | `deathdt` |  |  |
| `BusinessPartnerBirthDateStatus` |  | |  | `birthdt_status` |  |  |
| `BusinessPartnerGroupType` |  | |  | `partgrptyp` |  |  |
| `LastNamePrefix` |  | |  | `prefix1` |  |  |
| `LastNameSecondPrefix` |  | |  | `prefix2` |  |  |
| `Initials` |  | |  | `initials` |  |  |
| `GenderCodeName` |  | |  | `gender` |  |  |
| `DataControllerSet` |  | |  | `xdcset` |  |  |
| `DataController1` |  | |  | `data_ctrlr1` |  |  |
| `DataController2` |  | |  | `data_ctrlr2` |  |  |
| `DataController3` |  | |  | `data_ctrlr3` |  |  |
| `DataController4` |  | |  | `data_ctrlr4` |  |  |
| `DataController5` |  | |  | `data_ctrlr5` |  |  |
| `DataController6` |  | |  | `data_ctrlr6` |  |  |
| `DataController7` |  | |  | `data_ctrlr7` |  |  |
| `DataController8` |  | |  | `data_ctrlr8` |  |  |
| `DataController9` |  | |  | `data_ctrlr9` |  |  |
| `DataController10` |  | |  | `data_ctrlr10` |  |  |
| `BPDataControllerIsNotRequired` |  | |  | `dc_not_req` |  |  |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_DefaultAddress` | | ✓ | | | | |
| `_CurrentDefaultAddress` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_AddressIndependentEmail` | | ✓ | | | | |
| `_BPAddressIndependentEmail` | | ✓ | | | | |
| `_AddressIndependentFax` | | ✓ | | | | |
| `_BPAddressIndependentFax` | | ✓ | | | | |
| `_AddressIndependentPhone` | | ✓ | | | | |
| `_BPAddressIndependentPhone` | | ✓ | | | | |
| `_AddressIndependentMobile` | | ✓ | | | | |
| `_BPAddressIndependentMobile` | | ✓ | | | | |
| `_BPAddressIndependentWebsite` | | ✓ | | | | |
| `_Industries` | | ✓ | | | | |
| `_BusinessPartnerIndustry` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPRating` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |
| `_BPEmployment` | | ✓ | | | | |
| `_AcademicTitleText` | | ✓ | | | | |
| `_AcademicTitleValueHelp` | | ✓ | | | | |
| `_BPFinancialServicesExt` | | ✓ | | | | |
| `_BuPaIdentification` | | ✓ | | | | |
| `_BPRelationship` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |
| `_Paymentcard` | | ✓ | | | | |
| `_BPDataController` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_DefaultAddress` | `I_BusinessPartnerDefaultAddr` | [0..*] |
| `_CurrentDefaultAddress` | `I_BPCurrentDefaultAddress` | [0..1] |
| `_BusinessPartnerRole` | `I_BusinessPartner_to_BP_Role` | [0..*] |
| `_AddressIndependentEmail` | `I_Addressindependentemail` | [0..*] |
| `_BPAddressIndependentEmail` | `I_BPAddressIndependentEmail` | [0..*] |
| `_AddressIndependentFax` | `I_Addressindependentfax` | [0..*] |
| `_BPAddressIndependentFax` | `I_BPAddressIndependentFax` | [0..*] |
| `_AddressIndependentPhone` | `I_Addressindependentphone` | [0..*] |
| `_BPAddressIndependentPhone` | `I_BPAddressIndependentPhone` | [0..*] |
| `_AddressIndependentMobile` | `I_Addressindependentmobile` | [0..*] |
| `_BPAddressIndependentMobile` | `I_BPAddressIndependentMobile` | [0..*] |
| `_BPAddressIndependentWebsite` | `I_BPAddressIndependentWebsite` | [0..*] |
| `_Industries` | `I_Industries` | [0..*] |
| `_BusinessPartnerIndustry` | `I_BusinessPartnerIndustry` | [0..*] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPRating` | `I_BusinessPartnerRating` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..1] |
| `_BPEmployment` | `I_BPEmployment` | [0..*] |
| `_BusinessPartnerExt` | `E_BP_D` | [0..1] |
| `_AcademicTitleText` | `I_AcademicTitleText` | [0..*] |
| `_AcademicTitleValueHelp` | `I_AcademicTitle` | [0..1] |
| `_BPFinancialServicesExt` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BuPaIdentification` | `I_BuPaIdentification` | [0..*] |
| `_BPRelationship` | `I_BPRelationship_2` | [0..*] |
| `_FormOfAddress` | `I_FormOfAddress` | [0..1] |
| `_Paymentcard` | `I_Paymentcard` | [0..*] |
| `_BPDataController` | `I_BPDataController` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSINESSPARTNER'
@EndUserText.label: 'Business Partner'
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #REQUIRED
//@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartner'
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Metadata.allowExtensions: true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true


define view I_BusinessPartner
  as select from but000
  association [0..1] to I_User                       as _CreatedByUser            on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser        on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..*] to I_BusinessPartnerDefaultAddr as _DefaultAddress           on $projection.BusinessPartner = _DefaultAddress.BusinessPartner //to be used
  association [0..1] to I_BPCurrentDefaultAddress    as _CurrentDefaultAddress    on $projection.BusinessPartner = _CurrentDefaultAddress.BusinessPartner
  association [0..*] to I_BusinessPartner_to_BP_Role as _BusinessPartnerRole      on $projection.BusinessPartner = _BusinessPartnerRole.BusinessPartner 
  association [0..*] to I_Addressindependentemail    as _AddressIndependentEmail  on $projection.IndependentAddressID = _AddressIndependentEmail.AddressID 
  association [0..*] to I_BPAddressIndependentEmail  as _BPAddressIndependentEmail     on $projection.BusinessPartner      = _BPAddressIndependentEmail.BusinessPartner
                                                                                      and $projection.IndependentAddressID = _BPAddressIndependentEmail.AddressID   
  association [0..*] to I_Addressindependentfax      as _AddressIndependentFax         on $projection.IndependentAddressID = _AddressIndependentFax.AddressID
  association [0..*] to I_BPAddressIndependentFax    as _BPAddressIndependentFax       on $projection.BusinessPartner       = _BPAddressIndependentFax.BusinessPartner 
                                                                                       and $projection.IndependentAddressID = _BPAddressIndependentFax.AddressID 
  association [0..*] to I_Addressindependentphone    as _AddressIndependentPhone       on $projection.IndependentAddressID = _AddressIndependentPhone.AddressID
  association [0..*] to I_BPAddressIndependentPhone  as _BPAddressIndependentPhone     on $projection.BusinessPartner       = _BPAddressIndependentPhone.BusinessPartner 
                                                                                       and $projection.IndependentAddressID = _BPAddressIndependentPhone.AddressID  
  association [0..*] to I_Addressindependentmobile   as _AddressIndependentMobile      on $projection.IndependentAddressID = _AddressIndependentMobile.AddressID                                               
  association [0..*] to I_BPAddressIndependentMobile as _BPAddressIndependentMobile    on $projection.BusinessPartner        = _BPAddressIndependentMobile.BusinessPartner 
                                                                                        and $projection.IndependentAddressID = _BPAddressIndependentMobile.AddressID
  association [0..*] to I_BPAddressIndependentWebsite as _BPAddressIndependentWebsite  on $projection.BusinessPartner = _BPAddressIndependentWebsite.BusinessPartner 
                                                                                       and $projection.IndependentAddressID = _BPAddressIndependentWebsite.AddressID                                                   
  association [0..*] to I_Industries                 as _Industries               on $projection.Industry = _Industries.IndustrySector
  association [0..*] to I_BusinessPartnerIndustry    as _BusinessPartnerIndustry  on $projection.BusinessPartner = _BusinessPartnerIndustry.BusinessPartner

  //---  Start of FS-BP cds views associations ---//
  association [0..1] to I_BPFinancialServicesExtn    as _BPFinancialServicesExtn  on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner
  association [0..*] to I_BusinessPartnerRating      as _BPRating                 on $projection.BusinessPartner = _BPRating.BusinessPartner
  association [0..1] to I_BPCreditWorthiness         as _BPCreditWorthiness       on $projection.BusinessPartner = _BPCreditWorthiness.BusinessPartner
  association [0..*] to I_BPEmployment               as _BPEmployment             on $projection.BusinessPartner = _BPEmployment.BusinessPartner
  //--- End of FS-BP cds view associations ---//


  association [0..1] to E_BP_D                       as _BusinessPartnerExt       on $projection.BusinessPartner = _BusinessPartnerExt.BusinessPartner

  association [0..*] to I_AcademicTitleText          as _AcademicTitleText        on $projection.AcademicTitle = _AcademicTitleText.AcademicTitle

  association [0..1] to I_AcademicTitle              as _AcademicTitleValueHelp   on $projection.AcademicTitle = _AcademicTitleValueHelp.AcademicTitle

  association [0..1] to I_BPFinancialServicesExtn    as _BPFinancialServicesExt   on $projection.BusinessPartner = _BPFinancialServicesExt.BusinessPartner

  association [0..*] to I_BuPaIdentification         as _BuPaIdentification       on $projection.BusinessPartner = _BuPaIdentification.BusinessPartner

  //association [0..*] to I_BPRelationship             as _BPRelationship           on $projection.BusinessPartner = _BPRelationship.BusinessPartner1
  association [0..*] to I_BPRelationship_2           as _BPRelationship           on $projection.BusinessPartner = _BPRelationship.BusinessPartner1
  association [0..1] to I_FormOfAddress              as _FormOfAddress            on $projection.FormOfAddress = _FormOfAddress.FormOfAddress
  association [0..*] to I_Paymentcard                as _Paymentcard              on $projection.BusinessPartner = _Paymentcard.BusinessPartner
   association [0..*] to I_BPDataController                as _BPDataController              on $projection.BusinessPartner = _BPDataController.BusinessPartner
{
        // Fields valid for all types of business partner
        @ObjectModel.text.element: [ 'BusinessPartnerName' ]
  key   but000.partner                                  as BusinessPartner,
        but000.type                                     as BusinessPartnerCategory,
        but000.augrp                                    as AuthorizationGroup,
        but000.partner_guid                             as BusinessPartnerUUID,
        but000.persnumber                               as PersonNumber,


        // Fields for ETag calculation
        case when but000.chusr <> '' then concat(but000.chusr, concat( but000.chdat, but000.chtim ) )
              else concat(but000.crusr, concat( but000.crdat, but000.crtim ) )
           end                                          as ETag,


        @Semantics.text: true
        @EndUserText.label: 'Business Partner Name'
        @EndUserText.quickInfo:'Name of Business Partner'
        case   when type = '1'
                 then concat_with_space( name_first, name_last, 1)
               when type = '2'
        //workaround to add the space: name_org1+' '+name_org2
                 then   concat_with_space( name_org1, name_org2, 1)
               when type = '3'
        //workaround to add the space: name_grp1+' '+name_grp2
                 then  concat_with_space( name_grp1, name_grp2, 1)
        //          else '' //add this to avoid the warning    For performance 
             end                                        as BusinessPartnerName,
        @Semantics.text: true
        @EndUserText.label: 'Business Partner Full Name'
        case
          when type = '1'
              then concat_with_space( name_first, name_last,1)
          when type = '2'
               then concat_with_space( name_org1, name_org2,1)  //KF: diffierent with S4
          when type = '3'
               then concat_with_space( name_grp1, name_grp2,1)  //KF: diffierent with S4
        //     else '' //add this to avoid the warning
        end                                             as BusinessPartnerFullName,
        but000.crusr                                    as CreatedByUser,
        but000.crdat                                    as CreationDate,
        but000.crtim                                    as CreationTime,
        but000.chusr                                    as LastChangedByUser,
        but000.chdat                                    as LastChangeDate,
        but000.chtim                                    as LastChangeTime,
        but000.xblck                                    as BusinessPartnerIsBlocked

        // Fields valid only for but000.type = '1' -- Person
  ,
        but000.xpcpt                                    as IsBusinessPurposeCompleted,
        but000.name_first                               as FirstName,
        but000.name_last                                as LastName,

        @Semantics.text:true

        // Has to check for other BP types
        but000.name1_text                               as PersonFullName,

        // Fields valid only for but000.type = '2' -- Organization
        @EndUserText.label: 'Organization Name 1'
        but000.name_org1                                as OrganizationBPName1 // was renamed from OrganisationName1
  ,     @EndUserText.label: 'Organization Name 2'
        but000.name_org2                                as OrganizationBPName2 //was renamed from OrganisationName2
  ,     @EndUserText.label: 'Organization Name 3'
        but000.name_org3                                as OrganizationBPName3,
        @EndUserText.label: 'Organization Name 4'
        but000.name_org4                                as OrganizationBPName4


  ,
        but000.location_1                               as InternationalLocationNumber1,
        but000.location_2                               as InternationalLocationNumber2,
        but000.location_3                               as InternationalLocationNumber3,

        //Fields Needed in BP Customer-Supplier Apps
        but000.legal_enty                               as LegalForm,
        but000.found_dat                                as OrganizationFoundationDate,
        but000.liquid_dat                               as OrganizationLiquidationDate,
        but000.ind_sector                               as Industry,
        but000.natpers                                  as IsNaturalPerson,

        //@API.element.releaseState:#DEPRECATED
        but000.xsexf                                    as IsFemale,
        //@API.element.releaseState:#DEPRECATED
        but000.xsexm                                    as IsMale,
        //@API.element.releaseState:#DEPRECATED
        but000.xsexu                                    as IsSexUnknown, //GFN not available
        but000.title                                    as FormOfAddress,
        @ObjectModel: {
                 foreignKey.association: '_AcademicTitleValueHelp'
               }
        @ObjectModel.text.association: '_AcademicTitleText'
        but000.title_aca1                               as AcademicTitle, //GFN not available
        but000.title_aca2                               as AcademicTitle2,
        but000.nameformat                               as NameFormat,    //GFN not available
        but000.namcountry                               as NameCountry,   //GFN not available

        but000.bu_group                                 as BusinessPartnerGrouping,

        but000.bpkind                                   as BusinessPartnerType,
        but000.namemiddle                               as MiddleName,
        but000.name_lst2                                as AdditionalLastName,
        @EndUserText.label: 'Group Name 1'
        but000.name_grp1                                as GroupBusinessPartnerName1,
        @EndUserText.label: 'Group Name 2'
        but000.name_grp2                                as GroupBusinessPartnerName2,
        but000.langu_corr                               as CorrespondenceLanguage,
        but000.bu_langu                                 as Language,
        but000.bu_sort1                                 as SearchTerm1,
        //Search term 2 field needed in Customer and Suppplier apps
        but000.bu_sort2                                 as SearchTerm2,
        but000.mc_name1                                 as BPLastNameSearchHelp,
        but000.mc_name2                                 as BPFirstNameSearchHelp,
        but000.nickname                                 as BusinessPartnerNicknameLabel,


        //Added 19/05/2016 for correct association to address independent communication fields
        but000.addrcomm                                 as IndependentAddressID,

        //for extensibility
        cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,


        but000.birthdt                                  as BirthDate, //newly added
        but000.xdele                                    as IsMarkedForArchiving,
        but000.contact                                  as ContactPermission,
        but000.bpext                                    as BusinessPartnerIDByExtSystem,
        but000.legal_org                                as LegalEntityOfOrganization,

        //Added 13/09/2017 - CDS enhancements for Business Partner app
        but000.print_mode                               as BusinessPartnerPrintFormat,
        but000.source                                   as BusinessPartnerDataOriginType,
        but000.not_released                             as BusinessPartnerIsNotReleased,

        // Added 10/01/2017 - Requested in internal incident 1880004533
        but000.not_lg_competent                         as IsNotContractuallyCapable,

        but000.jobgr                                    as BusinessPartnerOccupation,
        but000.marst                                    as BusPartMaritalStatus,
        but000.natio                                    as BusPartNationality,
        but000.cndsc                                    as NonResidentCompanyOriginCntry,
        but000.title_let                                as BusinessPartnerSalutation,
        but000.name_last2                               as BusinessPartnerBirthName,
        but000.title_royl                               as BusinessPartnerSupplementName,
        but000.birthpl                                  as BusinessPartnerBirthplaceName,
        but000.emplo                                    as NaturalPersonEmployerName,
        but000.deathdt                                  as BusinessPartnerDeathDate,
        but000.birthdt_status                           as BusinessPartnerBirthDateStatus,
        but000.partgrptyp                               as BusinessPartnerGroupType,
        but000.prefix1                                  as LastNamePrefix,
        but000.prefix2                                  as LastNameSecondPrefix,
        but000.initials                                 as Initials,
        //@API.element.successor
        but000.gender                                   as GenderCodeName,
        
        
  /////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////      
        
        @Consumption.hidden:true
        @UI.hidden:true
        but000.xdcset                                   as DataControllerSet,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr1                              as DataController1,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr2                              as DataController2,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr3                              as DataController3,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr4                              as DataController4,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr5                              as DataController5,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr6                              as DataController6,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr7                              as DataController7,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr8                              as DataController8,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr9                              as DataController9,
        @Consumption.hidden:true
        @UI.hidden:true
        but000.data_ctrlr10                             as DataController10,
        
 ////////////// End of Datacontroller 10+1 fields//////////  
  
        but000.dc_not_req                               as BPDataControllerIsNotRequired,

        // Fields valid for all types of business partner

        //       @VDM.deprecated:true
        //       //Please use from association as _CurrentDefaultAddress.AddressID as this field will be removed soon from the view
        //       _CurrentDefaultAddress.AddressID  //actually CurrentAddressID, shortened for compatibility reasons

        _DefaultAddress // all default addresses over time (to-n) to be used instead of _DefaultAddresses
  ,
        _CurrentDefaultAddress //single current default address (to-1) exposed for use in customer object page

        //        , @VDM.deprecated:true //Please use from association as _CurrentDefaultAddress._StandardAddress as this field will be removed soon from the view
        //        _StandardAddress // removed. use _CurrentDefaultAddress

  ,
        _BusinessPartnerRole,
        _CreatedByUser,
        _LastChangedByUser

  ,
        @API.element.releaseState: #DEPRECATED  
        @API.element.successor: '_BPAddressIndependentEmail'  
        _AddressIndependentEmail,    
        _BPAddressIndependentEmail,
        @API.element.releaseState: #DEPRECATED  
        @API.element.successor: '_BPAddressIndependentFax'         
        _AddressIndependentFax,      
        _BPAddressIndependentFax,
        @API.element.releaseState: #DEPRECATED  
        @API.element.successor: '_BPAddressIndependentPhone'                
        _AddressIndependentPhone,       
        _BPAddressIndependentPhone,
        @API.element.releaseState: #DEPRECATED  
        @API.element.successor: '_BPAddressIndependentMobile'         
        _AddressIndependentMobile,
        _BPAddressIndependentMobile,
        _BPAddressIndependentWebsite,
        _Industries,
        _AcademicTitleValueHelp,
        _AcademicTitleText,
        _BusinessPartnerIndustry,
        _BuPaIdentification,
        _BPRelationship,
        //--- FS-BP CDS view association ---//
        _BPFinancialServicesExtn,
        _BPRating,
        _BPCreditWorthiness,
        _BPEmployment,
        //--- FS-BP CDS view association ---//
        _BPFinancialServicesExt,
        //-- Data controller association
        _BPDataController,
        _FormOfAddress,
        _Paymentcard

}
```
