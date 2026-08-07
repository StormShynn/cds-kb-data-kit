---
name: I_CN_CADECSTMSUBSIDIARYITEMVAL
description: CN Cadecstmsubsidiaryitemval
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - item-level
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADECSTMSUBSIDIARYITEMVAL

**CN Cadecstmsubsidiaryitemval**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `CN_CADENatlStdRelVersion` | ✓ | |  | `cade_natl_std_rel_ver` |
| `CN_CADEArchive` | ✓ | |  | `cade_archive_code` |
| `CN_CADEArchiveVal` | ✓ | |  | `cade_archive_value_code` |
| `CN_CADEArchiveValName` |  | |  | `cade_archive_value_name` |
| `CN_CADEArchiveValDesc` |  | |  | `cade_archive_value_desc` |
| `CN_CADEArchiveValUprNode` |  | |  | `cade_archive_value_upper_node` |
| `CN_CADEArchiveValLvl` |  | |  | `cade_archive_value_level` |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADECSTMSUBITMV'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Custmzd Subsdry Items Value for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADECstmSubsidiaryItemVal 

  as select from cade_custsubval
{
  key bukrs                         as CompanyCode,
  key cade_natl_std_rel_ver         as CN_CADENatlStdRelVersion,
  key cade_archive_code             as CN_CADEArchive,
  key cade_archive_value_code       as CN_CADEArchiveVal,
      cade_archive_value_name       as CN_CADEArchiveValName,
      cade_archive_value_desc       as CN_CADEArchiveValDesc,
      cade_archive_value_upper_node as CN_CADEArchiveValUprNode,
      cade_archive_value_level      as CN_CADEArchiveValLvl


}
```
