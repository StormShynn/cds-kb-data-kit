---
name: I_CHGMSTRLOGACCMSECUREIDASSGMT
description: "This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value
semantic_en: "This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?"
semantic_vi: "Change Number LogAccM Secure ID Assgmt — CDS view giao diện dựa trên I_LogAccMObjSecureIDAssgmt."
keywords:
  - "change"
  - "number"
  - "logaccm"
  - "secure"
  - "assgmt"
  - "object"
  - "type"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHGMSTRLOGACCMSECUREIDASSGMT

**This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectID` | ✓ | |  |  | `CHAR(90)` | Internal Key |
| `LogAccMSecureID` | ✓ | |  |  | `RAW(16)` | Secure ID |
| `LogAccMObjectType` | ✓ | |  |  | `CHAR(10)` | Object Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@EndUserText.label: 'Change Number LogAccM Secure ID Assgmt'
define view entity I_ChgMstrLogAccMSecureIDAssgmt
  as select from I_LogAccMObjSecureIDAssgmt
{
  key LogAccMObjectID,
  key LogAccMSecureID,
  key LogAccMObjectType
}
where
  LogAccMObjectType = 'PLM_ECN'
```
