---
name: I_BPDATACONTROLLER
description: "Bpdatacontroller"
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_BPDATACONTROLLER

**Bpdatacontroller**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `DataControllerName` | ✓ | |  | `data_ctrlr` | `CHAR(30)` | BP: Data Controller |
| `BPDataPurposeText` | ✓ | |  | `purpose` | `CHAR(30)` | BP: Purpose |
| `BPDataControllerIsDerived` |  | |  | `data_ctrlr_derived` | `CHAR(1)` | BP: Derivation Indicator for Data Controller (DC) |
| `DataControlAssignmentStatus` |  | |  | `asgmt_status` | `CHAR(1)` | BP: Data Controller Purpose Assignment Status |
| `PurposeDerived` |  | |  | `pur_derived` | `CHAR(1)` | BP: Derivation Indicator for Purpose |
| `PurposeType` |  | |  | `purpose_type` | `CHAR(1)` | BP: Purpose Type |
| `BusinessPurposeFlag` |  | |  | `eop_flag` | `CHAR(1)` | Business Purpose Completed Flag |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPDATACTRLR'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC

@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'DataControllerName'

@ClientHandling.algorithm : #SESSION_VARIABLE

@Metadata.allowExtensions: true
@EndUserText.label: 'Business Partner Data Controller'

define view I_BPDataController
  as select from but_dc_link
  
{
  key  partner            as BusinessPartner,
  key  data_ctrlr         as DataControllerName,
  key  purpose            as BPDataPurposeText,
//       @Semantics.booleanIndicator: true
       data_ctrlr_derived as BPDataControllerIsDerived,
//       @Semantics.booleanIndicator: true
       asgmt_status       as DataControlAssignmentStatus,
       pur_derived        as PurposeDerived,
       purpose_type       as PurposeType,
       eop_flag           as BusinessPurposeFlag

}
```
