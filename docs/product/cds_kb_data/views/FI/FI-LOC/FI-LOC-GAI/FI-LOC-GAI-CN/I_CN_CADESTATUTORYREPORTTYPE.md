---
name: I_CN_CADESTATUTORYREPORTTYPE
description: "CN Cadestatutoryreporttype"
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
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADESTATUTORYREPORTTYPE

**CN Cadestatutoryreporttype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CN_CADENatlStdRelVersion` | ✓ | |  | `cade_natl_std_rel_ver` |  |  |
| `CN_CADEReportType` | ✓ | |  | `cade_report_type` |  |  |
| `Language` | ✓ | | `_StatutoryReportDesc` | `Language` |  |  |
| `FinStmntFormStruc` |  | |  | `idcn_fsckey` |  |  |
| `FinancialStatementVariant` |  | |  | `versn_011` |  |  |
| `ProductHierarchyName` |  | |  | `fclm_hier_name` |  |  |
| `ReportingName` |  | | `_StatutoryReportDesc` | `DomainText` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatutoryReportDesc` | `I_CN_CADEStatutoryReportTypeT` | [0..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICNCADESTATRYRPT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@EndUserText.label: 'CN Statutory Report Type for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADEStatutoryReportType
  as select from cade_statryrpt
  association [0..*] to I_CN_CADEStatutoryReportTypeT as _StatutoryReportDesc on cade_report_type = _StatutoryReportDesc.DomainValue
                                                                              and _StatutoryReportDesc.SAPDataDictionaryDomain = 'CADE_REPORT_TYPE'
{                                                                             
  key bukrs                 as CompanyCode,
  key cade_natl_std_rel_ver as CN_CADENatlStdRelVersion,
  key cade_report_type      as CN_CADEReportType,
  key _StatutoryReportDesc.Language,
      idcn_fsckey           as FinStmntFormStruc,
      versn_011             as FinancialStatementVariant,
      fclm_hier_name        as ProductHierarchyName,
      _StatutoryReportDesc.DomainText as ReportingName
}
```
