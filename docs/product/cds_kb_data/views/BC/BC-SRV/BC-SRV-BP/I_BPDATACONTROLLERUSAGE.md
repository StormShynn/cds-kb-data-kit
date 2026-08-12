---
name: I_BPDATACONTROLLERUSAGE
description: "Bpdatacontrollerusage"
app_component: BC-SRV-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BP
  - interface-view
  - component:BC-SRV-BP
  - lob:Basis Components
---
# I_BPDATACONTROLLERUSAGE

**Bpdatacontrollerusage**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `DataControllerName` | ✓ | |  | `data_ctrlr` | `CHAR(30)` | BP: Data Controller |
| `BPDataPurposeText` | ✓ | |  | `purpose` | `CHAR(30)` | BP: Purpose |
| `DataControlAssignmentStatus` |  | |  | `asgmt_status` | `CHAR(1)` | BP: Data Controller Purpose Assignment Status |
| `BPDataControllerIsDerived` |  | |  | `data_ctrlr_derived` | `CHAR(1)` | BP: Derivation Indicator for Data Controller (DC) |
| `PurposeDerived` |  | |  | `pur_derived` | `CHAR(1)` | BP: Derivation Indicator for Purpose |
| `PurposeType` |  | |  | `purpose_type` | `CHAR(1)` | BP: Purpose Type |
| `BusinessPurposeFlag` |  | |  | `eop_flag` | `CHAR(1)` | Business Purpose Completed Flag |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPDATACTRUSG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@EndUserText.label: 'BP Data Controller Usage'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED

@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BusinessPartner'
@Metadata.allowExtensions:true

define view I_BPDataControllerUsage
  as select from but_dc_link
{
      //@ObjectModel.foreignKey.association: 'BusinessPartner'
  key partner            as BusinessPartner,
  key data_ctrlr         as DataControllerName,
  key purpose            as BPDataPurposeText,
      @Semantics.booleanIndicator: true
      asgmt_status       as DataControlAssignmentStatus,
      @Semantics.booleanIndicator: true
      data_ctrlr_derived as BPDataControllerIsDerived,
      pur_derived        as PurposeDerived,
      purpose_type       as PurposeType,
      eop_flag           as BusinessPurposeFlag

}
where
  asgmt_status <> 'I'
```
