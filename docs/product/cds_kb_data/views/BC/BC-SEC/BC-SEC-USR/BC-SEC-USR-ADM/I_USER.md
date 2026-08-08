---
name: I_USER
description: "User"
app_component: BC-SEC-USR-ADM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SEC
  - BC-SEC-USR
  - interface-view
  - component:BC-SEC-USR-ADM
  - lob:Basis Components
---
# I_USER

**User**

| Property | Value |
|---|---|
| App Component | `BC-SEC-USR-ADM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `cast( usr21.bname as vdm_userid preserving type )` | `CHAR(12)` | User ID |
| `UserDescription` |  | |  | `cast( usr21.techdesc as vdm_userdescription preserving type )` | `CHAR(80)` | User Description |
| `IsTechnicalUser` |  | |  | `case usr21.idadtype when '00' then ' ' when '02' then ' ' when '03' then ' ' when '04' then ' ' else 'X' end` | `CHAR(1)` |  |
| `AddressPersonID` |  | |  | `persnumber` | `CHAR(10)` | Person Number |
| `AddressID` |  | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `_AddrCurDefaultEmailAddress` | | ✓ | | | | |
| `_UserAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddrCurDefaultEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_UserAddress` | `I_UserAddress` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'User'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IUSER'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY 
                , privilegedAssociations: [ '_UserAddress'
                                          , '_AddrCurDefaultEmailAddress'
                                          ]
                , personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'UserID'
// 1. Background information:
// Users represent either persons or technical entities.
// Cloud      Environment: Users created for persons, communication and printing are owned by the customer.
//                        All other users are owned by SAP.
// On Premise Environment: All users are owned by the customer.
//
// 2. Restrictions:
// Because any kind of user can create or change data in the system,
// fields like "CreatedByUser" or "LastChangedByUser" must refer to this entity by a "[0..1]" association
// to obtain a descriptive text of the user. 
// -> Do not assume that the target of the association exists.
// -> Do not assume that such a user always corresponds to a business partner of type person ('BP person').
//
// This view must not be exposed to end users directly, because it exposes person relevant information.
// Only use this view in the definition of context-specific consumption views as a target for the "CreatedByUser"
// and "LastChangedByUser" associations. That's why, the view definition intentionally does not contain the
// "@ObjectModel.representativeKey", "@ObjectModel.text.element" or "@Analytics..." annotations.
//
// 3. Hints/Remarks:
// For users connected to a BP person, the UserDescrition contains what was formerly known as 'Person Fullname'.
// For users having classical address (on premise only) the UserDescrition is defined by the customer.
//                In this case, it rarely contains 'Person Fullname'.
// For users without address data we differentiate between cloud and on premise environment:
// -> Cloud:      Preset  by SAP.
// -> On Premise: Defined by the customer.
//                Also here, it's quite unusual that UserDescription contains 'Person Fullname', because usually
//                there is no individual person behind it. Usually it contains a description of the purpose of
//                the technical entity.

define view I_User
  as select from usr21

  association [0..1] to I_AddrCurDefaultEmailAddress as _AddrCurDefaultEmailAddress 
                     on  usr21.persnumber = _AddrCurDefaultEmailAddress.AddressPersonID
                     and usr21.addrnumber = _AddrCurDefaultEmailAddress.AddressID   

  association [0..1] to I_UserAddress                as _UserAddress
                     on usr21.bname       = _UserAddress.UserID
{
      @ObjectModel.text.element:['UserDescription']
  key cast( usr21.bname    as vdm_userid          preserving type ) as UserID,
      @Semantics.text: true
      cast( usr21.techdesc as vdm_userdescription preserving type ) as UserDescription,
      case usr21.idadtype
        when '00' then ' '  //users having classical address (NO connection to Business Partner)
        when '02' then ' '  //users connected to a BP person
        when '03' then ' '  //users connected to a BP person with a relation to a BP Organization
        when '04' then ' '  //users connected to a BP person and have a BP workplace address
        else           'X'  //users without address data (intended for technical purposes only)
      end                                                           as IsTechnicalUser,
      _AddrCurDefaultEmailAddress,
      @Consumption.hidden:true
      @Analytics.hidden:true
      usr21.persnumber                                              as AddressPersonID,
      @Consumption.hidden:true
      @Analytics.hidden:true
      usr21.addrnumber                                              as AddressID,
      _UserAddress       
}
```
