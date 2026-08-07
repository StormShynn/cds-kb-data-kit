---
name: I_REREMINDERDATE
description: Rereminderdate
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REREMINDERDATE

**Rereminderdate**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REReminderUUID` | ✓ | |  | `cast( rsdateguid as recavdmdateguid preserving type )` |
| `InternalRealEstateNumber` |  | |  | `intreno` |
| `REReminderNumber` |  | |  | `cast( rsno as recavdmrsno preserving type )` |
| `REReminderRule` |  | |  | `cast( rsrule as recavdmrsrule preserving type )` |
| `REReminderDate` |  | |  | `cast( rsdate as recavdmrsdate preserving type )` |
| `REReminderReason` |  | |  | `cast( rsreason as recavdmrsreason preserving type )` |
| `CreatedByUser` |  | |  | `rerf` |
| `CreationDate` |  | |  | `derf` |
| `CreationTime` |  | |  | `terf` |
| `RESourceOfCreation` |  | |  | `reher` |
| `LastChangedByUser` |  | |  | `rbear` |
| `LastChangeDate` |  | |  | `dbear` |
| `LastChangeTime` |  | |  | `tbear` |
| `RESourceOfChange` |  | |  | `rbher` |
| `Responsible` |  | |  | `responsible` |
| `REReminderWrkflwDate` |  | |  | `cast( rswfdate as recavdmrswfdate preserving type )` |
| `REReminderIsDone` |  | |  | `cast( rsdone as recavdmrsdone preserving type )` |
| `REReminderIsFix` |  | |  | `rsfixed` |
| `REReminderIsWrkflwSend` |  | |  | `rswfevent` |
| `TextObjectKey` |  | |  | `cast(concat(intreno, concat('#', concat(rsdate, concat('#', rsno)))) as tdobname)` |
| `REReminderInfoText` |  | |  | `cast( rsinfo as recavdmrsinfo preserving type )` |
| `_CreatedByUser` | | ✓ | | |
| `_ChangedByUser` | | ✓ | | |
| `_ResponsibleUser` | | ✓ | | |
| `_REReminderRule` | | ✓ | | |
| `_REReminderReason` | | ✓ | | |
| `_REReminderLongText` | | ✓ | | |
| `_REKeyAssgmt` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_ResponsibleUser` | `I_User` | [0..1] |
| `_REReminderRule` | `I_REReminderRule` | [1..1] |
| `_REReminderReason` | `I_REReminderReason` | [1..1] |
| `_REReminderLongText` | `I_TextObjectPlainLongText` | [0..*] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREREMINDDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_REReminderLongText']
@EndUserText.label: 'Real Estate Reminder Date'
@Analytics:{
    dataCategory: #FACT,
    internalName: #LOCAL
}
@ObjectModel: {
  semanticKey: ['InternalRealEstateNumber', 'REReminderNumber', 'REReminderDate'],
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [
    #CDS_MODELING_DATA_SOURCE, 
    #SQL_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
//@Search.searchable: true

define view entity I_REReminderDate
  as select from vicarsdate as _REReminderDate

  association [0..1] to I_User                    as _CreatedByUser      on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                    as _ChangedByUser      on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [0..1] to I_User                    as _ResponsibleUser    on  $projection.Responsible = _ResponsibleUser.UserID
  association [1..1] to I_REReminderRule          as _REReminderRule     on  $projection.REReminderRule = _REReminderRule.REReminderRule
  association [1..1] to I_REReminderReason        as _REReminderReason   on  $projection.REReminderReason = _REReminderReason.REReminderReason

  association [0..*] to I_TextObjectPlainLongText as _REReminderLongText on  $projection.TextObjectKey              = _REReminderLongText.TextObjectKey
                                                                         and _REReminderLongText.TextObjectCategory = 'RE'
                                                                         and _REReminderLongText.TextObjectType     = 'CARS'
  association [1..1] to I_REKeyAssgmt             as _REKeyAssgmt        on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber                                                                       

{
  key cast( rsdateguid  as recavdmdateguid preserving type ) as REReminderUUID,
      intreno                                                as InternalRealEstateNumber,
      cast(  rsno   as recavdmrsno preserving type )         as REReminderNumber,
      @ObjectModel.foreignKey.association: '_REReminderRule'
      cast( rsrule as recavdmrsrule preserving type )        as REReminderRule,
      @Semantics.businessDate.at: true
      cast( rsdate as recavdmrsdate preserving type )        as REReminderDate,
      @ObjectModel.foreignKey.association: '_REReminderReason'
      cast( rsreason as recavdmrsreason preserving type )    as REReminderReason,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      rerf                                                   as CreatedByUser,
      @Semantics.businessDate.at: true
      derf                                                   as CreationDate,
      terf                                                   as CreationTime,
      reher                                                  as RESourceOfCreation,
      @ObjectModel.foreignKey.association: '_ChangedByUser'
      rbear                                                  as LastChangedByUser,
      @Semantics.businessDate.at: true
      dbear                                                  as LastChangeDate,
      tbear                                                  as LastChangeTime,
      rbher                                                  as RESourceOfChange,
      @ObjectModel.foreignKey.association: '_ResponsibleUser'
      responsible                                            as Responsible,
      @Semantics.businessDate.at: true
      cast( rswfdate as recavdmrswfdate preserving type )    as REReminderWrkflwDate,
      cast( rsdone as recavdmrsdone preserving type )        as REReminderIsDone,
      rsfixed                                                as REReminderIsFix,
      rswfevent                                              as REReminderIsWrkflwSend,
      cast(concat(intreno,
      concat('#',
      concat(rsdate,
      concat('#', rsno)))) as tdobname)                      as TextObjectKey,
      cast( rsinfo as recavdmrsinfo preserving type )        as REReminderInfoText,


      _CreatedByUser,
      _ChangedByUser,
      _ResponsibleUser,
      _REReminderRule,
      _REReminderReason,

      _REReminderLongText,
      _REKeyAssgmt

}
```
