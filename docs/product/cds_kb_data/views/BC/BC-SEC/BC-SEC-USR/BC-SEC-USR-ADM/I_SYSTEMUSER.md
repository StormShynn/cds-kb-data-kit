---
name: I_SYSTEMUSER
description: "Systemuser"
app_component: BC-SEC-USR-ADM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SYSTEMUSER

**Systemuser**

| Property | Value |
|---|---|
| App Component | `BC-SEC-USR-ADM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `cast( _usr02.bname as vdm_userid preserving type )` | `CHAR(12)` | User ID |
| `UserDescription` |  | |  | `cast( _usr21.techdesc as vdm_userdescription preserving type )` | `CHAR(80)` | User Description |

## Source Code

```abap
@EndUserText.label: 'System Benutzer'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISYSTEMUSER'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]


// 1. Background information:
// This CDS is be used by CDS based extraction framework. The view selects system users only (USTYP = 'B').
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

define view I_SystemUser
  as select from usr02 as _usr02
  inner join     usr21 as _usr21   on _usr02.bname = _usr21.bname
  
{
  key cast( _usr02.bname    as vdm_userid          preserving type ) as UserID,
      cast( _usr21.techdesc as vdm_userdescription preserving type ) as UserDescription
} 
  
where _usr02.ustyp = 'B'
```
