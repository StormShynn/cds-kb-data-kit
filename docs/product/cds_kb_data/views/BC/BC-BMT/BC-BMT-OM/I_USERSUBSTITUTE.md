---
name: I_USERSUBSTITUTE
description: "Usersubstitute"
app_component: BC-BMT-OM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-OM
  - interface-view
  - component:BC-BMT-OM
  - lob:Basis Components
---
# I_USERSUBSTITUTE

**Usersubstitute**

| Property | Value |
|---|---|
| App Component | `BC-BMT-OM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `us_name` | `CHAR(12)` | User Name in User Master Record |
| `UserSubstituteIdentifier` | ✓ | |  | `rep_name` | `CHAR(12)` | User Name in User Master Record |
| `ValidityStartDate` | ✓ | |  | `begda` | `DATS(8)` | Start Date |
| `ValidityEndDate` |  | |  | `endda` | `DATS(8)` | End Date |
| `UserSubstitutionIsActive` |  | |  | `active` | `CHAR(1)` | Indicator: Substitution Active |
| `SubstituteProfile` |  | |  | `reppr` | `CHAR(12)` | Substitute Profile |
| `_BusinessUser` | | ✓ | | | | |
| `_BusinessUserSubstitute` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUser` | `I_BusinessUserBasic` | [0..1] |
| `_BusinessUserSubstitute` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRUS_D2'
@EndUserText.label: 'User Substitutes'
@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.dataMaintenance: #DISPLAY_ONLY
@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ] 
                                     
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/ 
define view I_UserSubstitute as select from hrus_d2 
    /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
    association [0..1] to I_BusinessUserBasic  as _BusinessUser           on $projection.UserID           = _BusinessUser.UserID           
    /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/ 
    association [0..1] to I_BusinessUserBasic  as _BusinessUserSubstitute on $projection.UserSubstituteIdentifier = _BusinessUserSubstitute.UserID
{
  key us_name  as UserID,
  key rep_name as UserSubstituteIdentifier,
      @Semantics.businessDate.from
  key begda    as ValidityStartDate,
      @Semantics.businessDate.to
      endda    as ValidityEndDate,  
      active   as UserSubstitutionIsActive,
      reppr    as SubstituteProfile,
      
      _BusinessUser,
      _BusinessUserSubstitute
}
```
