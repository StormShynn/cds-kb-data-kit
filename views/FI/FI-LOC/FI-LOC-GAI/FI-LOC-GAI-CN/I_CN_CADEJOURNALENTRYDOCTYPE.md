---
name: I_CN_CADEJOURNALENTRYDOCTYPE
description: "CN CADEJournal EntryDOCTYPE"
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
  - journal-entry
  - component:FI-LOC-GAI-CN
  - lob:Finance
  - bo:JournalEntry
---
# I_CN_CADEJOURNALENTRYDOCTYPE

**CN CADEJournal EntryDOCTYPE**

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
| `CN_CADEDocumentTypeUsage` | ✓ | |  | `cade_jrnl_entr_type_ind` |  |  |
| `CN_CADEDocumentListType` | ✓ | |  | `cade_jrnl_entr_type_code` |  |  |
| `CN_CADEDocumentListTypeName` |  | |  | `cade_jrnl_entr_type_desc` |  |  |
| `AccountingDocumentTypeName` |  | |  | `cade_jrnl_entr_type_s_desc` |  |  |
| `IsDefaultValue` |  | |  | `is_default` |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADEJRNLENTRTYP'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Journal Entry Document Type for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADEJournalEntryDocType

  as select from cade_jrnltype
{
  key bukrs                      as CompanyCode,
  key cade_natl_std_rel_ver      as CN_CADENatlStdRelVersion,
  key cade_jrnl_entr_type_ind    as CN_CADEDocumentTypeUsage,
  key cade_jrnl_entr_type_code   as CN_CADEDocumentListType,
      cade_jrnl_entr_type_desc   as CN_CADEDocumentListTypeName,
      cade_jrnl_entr_type_s_desc as AccountingDocumentTypeName,
      is_default                 as IsDefaultValue
}
```
