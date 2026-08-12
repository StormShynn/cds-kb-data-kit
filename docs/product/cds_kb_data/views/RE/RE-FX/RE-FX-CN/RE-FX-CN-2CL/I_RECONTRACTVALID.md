---
name: I_RECONTRACTVALID
description: "Valid Real Estate Contracts"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value
semantic_en: "Valid Real Estate Contracts"
semantic_vi: "Valid Real Estate Contracts — CDS view giao diện dựa trên I_REContract."
keywords:
  - "valid"
  - "real"
  - "estate"
  - "contracts"
  - "company"
  - "code"
  - "contract"
  - "internal"
  - "number"
  - "object"
  - "created"
  - "user"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# I_RECONTRACTVALID

**Valid Real Estate Contracts**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` | ✓ | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | |  | `REStatusObject` | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreatedByUserDescription` |  | | `_CreatedByUser` | `UserDescription` | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Employee ID |
| `LastChangedByUserDescription` |  | | `_ChangedByUser` | `UserDescription` | `CHAR(80)` | User Description |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | | `_ResponsibleUser` | `UserDescription` | `CHAR(80)` | User Description |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractFirstEndDate` |  | |  |  | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `ValuationRelevanceDesc` |  | | `_REValuationRelevanceText` | `ValuationRelevanceDesc` | `CHAR(60)` | Description for Valuation Relevance |
| `REIdentificationType` |  | |  | `'IS'` | `CHAR(2)` |  |
| `REIdentificationKey` |  | |  | `cast(substring(rtrim(replace(concat(_Contract.CompanyCode, concat('/', _Contract.InternalRealEstateNumber)), '&@', ''),' '),1,45) as recaidentkey)` | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | | `_ContractTypeName` | `REContractTypeName` | `CHAR(30)` | Contract Type Name |
| `REContractSystStatus` |  | | `_REContractSts` | `ConcatenatedActiveSystStsName` | `SSTR(224)` | Concatenated Contract System Status |
| `REContractUserStatus` |  | | `_REContractSts` | `ConcatenatedActiveUserStsName` | `SSTR(224)` | Concatenated Contract User Status |
| `REContractStatus` |  | | `_REContractSts` | `REContractStatus` | `SSTR(449)` |  |
| `IsActive` |  | |  | `cast(case when _IsActive[1: StatusCode = 'I0119'].StatusCode is not null and _IsActive[1: StatusCode = 'I0119'].StatusCode = 'I0119' then 'X' else '' end as lkenz )` | `CHAR(1)` | Deletion Indicator |
| `IsDeleted` |  | |  | `cast( case when ( _IsDeleted[1: StatusCode = 'I0076'].StatusCode is not null and _IsDeleted[1: StatusCode = 'I0076'].StatusCode = 'I0076') or ( _IsDeleted[1: StatusCode = 'I0013'].StatusCode is not null and _IsDeleted[1: StatusCode = 'I0013'].StatusCode = 'I0013') then 'X' else '' end as lkenz )` | `CHAR(1)` | Deletion Indicator |
| `Country` |  | | `_Contract._CompanyCode._Country` | `Country` | `CHAR(3)` | Country/Region Key |
| `CountryName` |  | |  | `_Contract._CompanyCode._Country._Text[1: Language = $session.system_language].CountryName` | `CHAR(50)` | Country/Region Name |
| `NumberOfREContracts` |  | |  | `cast(1 as abap.int4)` | `INT4(10)` |  |
| `_LastChangedByUser` |  | |  | `_ChangedByUser` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |
| `_REContractSts` | | ✓ | | | | |
| `_IsActive` | | ✓ | | | | |
| `_IsDeleted` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_MainContractCompanyCode` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_REValuationRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_REContractType` | `I_REContractType` | [0..1] |
| `_REContractSts` | `I_REContractStat` | [0..1] |
| `_ContractTypeName` | `I_REContractTypeText` | [0..1] |
| `_IsActive` | `I_StatusObjectStatusBasic` | [0..*] |
| `_IsDeleted` | `I_StatusObjectStatusBasic` | [0..*] |
| `_REValuationRelevanceText` | `I_REValuationRelevanceText` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {dataCategory: #CUBE}
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
//@ObjectModel.representativeKey: ['RealEstateContract']
@ObjectModel.semanticKey: ['CompanyCode','RealEstateContract']
@AbapCatalog.sqlViewName: 'IRECONTRACTVALID'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Valid Real Estate Contracts'
@AbapCatalog.preserveKey:true
@AccessControl.privilegedAssociations: [ '_REContractSts', '_IsActive', '_IsDeleted'  ]
//@ClientDependent: true
@VDM.viewType: #COMPOSITE
@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_REContractValid
  // Start of insertion Parameters
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom :vdm_validitystart,  //recncnbeg,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo   :vdm_validityend  //recncnendabs
  // end of insertion Parameters
  as select from I_REContract as _Contract
  association [0..1] to I_CompanyCode              as _CompanyCode              on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_REContractType           as _REContractType           on  $projection.REContractType   = _REContractType.REContractType
  association [0..1] to I_REContractStat           as _REContractSts            on  $projection.ObjectInternalID = _REContractSts.StatusObject
  association [0..1] to I_REContractTypeText       as _ContractTypeName         on  $projection.REContractType   = _ContractTypeName.REContractType
                                                                                and _ContractTypeName.Language = $session.system_language
  association [0..*] to I_StatusObjectStatusBasic  as _IsActive                 on  $projection.ObjectInternalID = _IsActive.StatusObject
                                                                                and _IsActive.StatusIsInactive = ' '
  association [0..*] to I_StatusObjectStatusBasic  as _IsDeleted                on  $projection.ObjectInternalID  = _IsDeleted.StatusObject
                                                                                and _IsDeleted.StatusIsInactive = ' '
  association [0..1] to I_REValuationRelevanceText as _REValuationRelevanceText on  _REValuationRelevanceText.ValuationRelevance = $projection.ValuationRelevance
                                                                                and _REValuationRelevanceText.Language           = $session.system_language
  association [0..1] to I_User                       as _CreatedByUser              on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _ChangedByUser              on  $projection.LastChangedByUser = _ChangedByUser.UserID                                                                               
{
@ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  
  key RealEstateContract,
  InternalRealEstateNumber,
      REStatusObject as ObjectInternalID,
      // Admin
      @EndUserText.label: 'Created by User'
      CreatedByUser,
      @EndUserText.label: 'Created by User Description'
      _CreatedByUser.UserDescription                                                            as CreatedByUserDescription,
      @EndUserText.label: 'Creation Date'
      CreationDate,
      @EndUserText.label: 'Creation Time'
      CreationTime,
      @EndUserText.label: 'Changed Date'
      LastChangeDate,
      @EndUserText.label: 'Changed Time'
      LastChangeTime,
      @EndUserText.label: 'Last Changed User'
      LastChangedByUser,
      @EndUserText.label: 'Last Changed User Description'
      _ChangedByUser.UserDescription                                                            as LastChangedByUserDescription,
      @EndUserText.label: 'Responsible User'
      Responsible,
      @EndUserText.label: 'Responsible User Description'
      _ResponsibleUser.UserDescription                                                          as ResponsibleUserFullName,
      REContractName,
      @EndUserText.label: 'Contract Start Date'
      ContractStartDate,
      @EndUserText.label: 'Contract End Date'
      ContractEndDate,
      @EndUserText.label: 'Contract First End Date'
      REContractFirstEndDate,
      REContractNumberOld,
      REMainContractCompanyCode,
      REMainContract,
      REAuthorizationGroup,
      ValuationRelevance,
      _REValuationRelevanceText.ValuationRelevanceDesc as ValuationRelevanceDesc,
      'IS'                                                                                      as REIdentificationType,
      cast(substring(rtrim(replace(concat(_Contract.CompanyCode, concat('/', _Contract.InternalRealEstateNumber)), '&@', ''),' '),1,45) as recaidentkey) as REIdentificationKey,
      _CompanyCode.CompanyCodeName,
      @ObjectModel.foreignKey.association: '_REContractType'
      REContractType,
      _ContractTypeName.REContractTypeName,
      _REContractSts.ConcatenatedActiveSystStsName                                              as REContractSystStatus,
      _REContractSts.ConcatenatedActiveUserStsName                                              as REContractUserStatus,
      _REContractSts.REContractStatus                                                           as REContractStatus,
      //     @ObjectModel.foreignKey.association: '_IsActive'
      @EndUserText.label: 'Contract is Active'
      cast(case when  _IsActive[1: StatusCode = 'I0119'].StatusCode is not null
                and   _IsActive[1: StatusCode = 'I0119'].StatusCode = 'I0119'
                then 'X' else ''
                      end as lkenz )                                                            as IsActive,

      //     @ObjectModel.foreignKey.association:'_IsDeleted'
      @EndUserText.label: 'Contract is Deleted'
      cast( case when ( _IsDeleted[1: StatusCode = 'I0076'].StatusCode is not null
                 and    _IsDeleted[1: StatusCode = 'I0076'].StatusCode = 'I0076')

                 or   ( _IsDeleted[1: StatusCode = 'I0013'].StatusCode is not null
                 and    _IsDeleted[1: StatusCode = 'I0013'].StatusCode = 'I0013')

          then 'X' else ''
          end as lkenz )                                                                        as IsDeleted,
      _Contract._CompanyCode._Country.Country                                                   as Country,
      _Contract._CompanyCode._Country._Text[1: Language = $session.system_language].CountryName as CountryName,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Number of Contracts'
       cast(1 as abap.int4) as NumberOfREContracts,

      // Propagate association
      _REContractSts,
      _MainContractCompanyCode,
      _CreatedByUser,
      _ChangedByUser as _LastChangedByUser,
      _ResponsibleUser,
      _REContractType,
      _CompanyCode,
      _IsActive,
      _IsDeleted,
      _REValuationRelevance
      
}
// start of insertion Paramerters
where
      ContractEndDate   >= $parameters.P_ValidFrom
  and ContractStartDate <= $parameters.P_ValidTo;
// end   of insertion parameter
```
