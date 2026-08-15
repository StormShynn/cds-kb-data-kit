---
name: I_BPDATACONTROLLERUSAGE
description: "Bpdatacontrollerusage"
semantic_vi: "View I_BPDATACONTROLLERUSAGE hiển thị thông tin sử dụng controller dữ liệu đối tác kinh doanh, có liên quan khi phân tích việc phân bổ và mục đích controller dữ liệu đối với đối tác kinh doanh."
keywords:
  - "business partner"
  - "data controller"
  - "controller usage"
  - "data purpose"
  - "business purpose"
  - "data assignment"
  - "data controller assignment"
  - "data controller usage"
  - "sap basis components"
  - "lob basis components"
  - "bc-srv-bp"
semantic_en: "The BPDATACONTROLLERUSAGE view exposes business partner data controller usage information, which is relevant when analyzing data controller assignments and purposes for business partners."
app_component: BC-SRV-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
