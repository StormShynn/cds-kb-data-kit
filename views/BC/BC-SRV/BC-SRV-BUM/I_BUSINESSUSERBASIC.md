---
name: I_BUSINESSUSERBASIC
description: Businessuserbasic
app_component: BC-SRV-BUM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BUM
  - interface-view
  - component:BC-SRV-BUM
  - lob:Basis Components
---
# I_BUSINESSUSERBASIC

**Businessuserbasic**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `partner` |  |  |
| `BusinessPartnerUUID` |  | | `_BusinessPartner` | `partner_guid` |  |  |
| `LastName` |  | | `_BusinessPartner` | `name_last` |  |  |
| `FirstName` |  | | `_BusinessPartner` | `name_first` |  |  |
| `PersonFullName` |  | |  | `cast( usr21.techdesc as vdm_userdescription preserving type )` |  |  |
| `FormOfAddress` |  | | `_BusinessPartner` | `title` |  |  |
| `AcademicTitle` |  | | `_BusinessPartner` | `title_aca1` |  |  |
| `AcademicSecondTitle` |  | | `_BusinessPartner` | `title_aca2` |  |  |
| `CorrespondenceLanguage` |  | | `_BusinessPartner` | `langu_corr` |  |  |
| `MiddleName` |  | | `_BusinessPartner` | `namemiddle` |  |  |
| `AdditionalLastName` |  | | `_BusinessPartner` | `name_lst2` |  |  |
| `BirthName` |  | | `_BusinessPartner` | `name_last2` |  |  |
| `NickName` |  | | `_BusinessPartner` | `nickname` |  |  |
| `Initials` |  | | `_BusinessPartner` | `initials` |  |  |
| `LastNamePrefix` |  | | `_BusinessPartner` | `prefix1` |  |  |
| `LastNameSecondPrefix` |  | | `_BusinessPartner` | `prefix2` |  |  |
| `NameSupplement` |  | | `_BusinessPartner` | `title_royl` |  |  |
| `UserID` |  | |  | `cast( usr21.bname as vdm_userid preserving type )` |  |  |
| `IsMarkedForArchiving` |  | | `_BusinessPartner` | `xdele` |  |  |
| `BusinessPartnerIsBlocked` |  | | `_BusinessPartner` | `xblck` |  |  |
| `CreatedByUser` |  | | `_BusinessPartner` | `crusr` |  |  |
| `CreationDate` |  | | `_BusinessPartner` | `crdat` |  |  |
| `CreationTime` |  | | `_BusinessPartner` | `crtim` |  |  |
| `LastChangedByUser` |  | | `_BusinessPartner` | `chusr` |  |  |
| `LastChangeDate` |  | | `_BusinessPartner` | `chdat` |  |  |
| `LastChangeTime` |  | | `_BusinessPartner` | `chtim` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `xpcpt` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `augrp` |  |  |
| `DataControllerSet` |  | | `_BusinessPartner` | `xdcset` |  |  |
| `DataController1` |  | | `_BusinessPartner` | `data_ctrlr1` |  |  |
| `DataController2` |  | | `_BusinessPartner` | `data_ctrlr2` |  |  |
| `DataController3` |  | | `_BusinessPartner` | `data_ctrlr3` |  |  |
| `DataController4` |  | | `_BusinessPartner` | `data_ctrlr4` |  |  |
| `DataController5` |  | | `_BusinessPartner` | `data_ctrlr5` |  |  |
| `DataController6` |  | | `_BusinessPartner` | `data_ctrlr6` |  |  |
| `DataController7` |  | | `_BusinessPartner` | `data_ctrlr7` |  |  |
| `DataController8` |  | | `_BusinessPartner` | `data_ctrlr8` |  |  |
| `DataController9` |  | | `_BusinessPartner` | `data_ctrlr9` |  |  |
| `DataController10` |  | | `_BusinessPartner` | `data_ctrlr10` |  |  |
| `_User` | | ✓ | | | | |
| `_WorkplaceAddress` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_BusinessPartnerExternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [0..1] |
| `_WorkplaceAddress` | `I_WorkplaceAddress` | [0..1] |
| `_BusinessPartnerRole` | `I_BPUsrRole` | [0..*] |
| `_BusinessPartnerExternalID` | `I_BPUsrExternalID` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User Basic'
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations: ['_User']
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
//@ObjectModel.alternativeKey: [ { id : 'BusinessPartnerUUID', uniqueness: #UNIQUE, element: ['BusinessPartnerUUID'] },
//                               { id : 'UserID', uniqueness: #UNIQUE, element: ['UserID'] } ]
@AbapCatalog.entityBuffer.definitionAllowed: true
@Metadata.ignorePropagatedAnnotations:true
define view entity I_BusinessUserBasic
  as select from but000 as _BusinessPartner
    inner join   usr21 on _BusinessPartner.partner_guid = usr21.bpperson
                       and(
                         usr21.idadtype                 = '02'
                         or usr21.idadtype              = '04'
                       )
  association [0..1] to I_User             as _User                      on $projection.UserID = _User.UserID
  association [0..1] to I_WorkplaceAddress as _WorkplaceAddress          on $projection.BusinessPartnerUUID = _WorkplaceAddress.BusinessPartnerUUID
  association [0..*] to I_BPUsrRole        as _BusinessPartnerRole       on $projection.BusinessPartner = _BusinessPartnerRole.BusinessPartner
  association [0..*] to I_BPUsrExternalID  as _BusinessPartnerExternalID on $projection.BusinessPartner = _BusinessPartnerExternalID.BusinessPartner
{
      @ObjectModel.text.element: ['PersonFullName']
  key _BusinessPartner.partner                          as BusinessPartner,
      _BusinessPartner.partner_guid                     as BusinessPartnerUUID,
      _BusinessPartner.name_last                        as LastName,
      _BusinessPartner.name_first                       as FirstName,
      @Semantics.text: true
      cast( usr21.techdesc as vdm_userdescription preserving type ) as PersonFullName,
      _BusinessPartner.title                            as FormOfAddress,
      _BusinessPartner.title_aca1                       as AcademicTitle,
      _BusinessPartner.title_aca2                       as AcademicSecondTitle,
      _BusinessPartner.langu_corr                       as CorrespondenceLanguage,
      _BusinessPartner.namemiddle                       as MiddleName,
      _BusinessPartner.name_lst2                        as AdditionalLastName,
      _BusinessPartner.name_last2                       as BirthName,
      _BusinessPartner.nickname                         as NickName,
      _BusinessPartner.initials                         as Initials,
      _BusinessPartner.prefix1                          as LastNamePrefix,
      _BusinessPartner.prefix2                          as LastNameSecondPrefix,
      _BusinessPartner.title_royl                       as NameSupplement,
      @ObjectModel.text.element: ['PersonFullName']
      cast( usr21.bname as vdm_userid preserving type ) as UserID,
      _BusinessPartner.xdele                            as IsMarkedForArchiving,
      _BusinessPartner.xblck                            as BusinessPartnerIsBlocked,
      _BusinessPartner.crusr                            as CreatedByUser,
      _BusinessPartner.crdat                            as CreationDate,
      _BusinessPartner.crtim                            as CreationTime,
      _BusinessPartner.chusr                            as LastChangedByUser,
      _BusinessPartner.chdat                            as LastChangeDate,
      _BusinessPartner.chtim                            as LastChangeTime,
      _BusinessPartner.xpcpt                            as IsBusinessPurposeCompleted,
      _BusinessPartner.augrp                            as AuthorizationGroup,
      @Consumption.hidden:true
      _BusinessPartner.xdcset                           as DataControllerSet,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr1                      as DataController1,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr2                      as DataController2,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr3                      as DataController3,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr4                      as DataController4,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr5                      as DataController5,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr6                      as DataController6,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr7                      as DataController7,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr8                      as DataController8,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr9                      as DataController9,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr10                     as DataController10,
      _User,
      _WorkplaceAddress,
      _BusinessPartnerRole,
      _BusinessPartnerExternalID
}
where
  _BusinessPartner.type = '1' // 1 - PERSON
```
