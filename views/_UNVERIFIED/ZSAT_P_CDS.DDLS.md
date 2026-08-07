---
name: ZSAT_P_CDS.DDLS
description: Base view for CDS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_cds.ddls.asddls
semantic_en: Base view for CDS — CDS view based on ddddlsrc.
semantic_vi: Base view for CDS — CDS view dựa trên ddddlsrc.
keywords:
  - base
  - for
  - source
  - entity
  - view
  - name
  - parent
---
# ZSAT_P_CDS.DDLS

**Base view for CDS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_cds.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DdlName` | ✓ | |  | `ddlname` |
| `EntityId` |  | |  | `cast(case when CdsEntityHeader.strucobjn is null then Source.ddlname else CdsEntityHeader.strucobjn end as ddstrucobjname)` |
| `RawEntityId` |  | |  | `cast(case when CdsEntityHeader.strucobjn_raw is null then Source.ddlname else CdsEntityHeader.strucobjn_raw end as ddstrucobjname)` |
| `ViewName` |  | |  | `cast(case when StructuredObject.ViewName is null then Source.ddlname else StructuredObject.ViewName end as ddstrucobjname)` |
| `ParentDdlName` |  | |  | `parentname` |
| `SourceType` |  | |  | `source_type` |
| `DdlSource` |  | |  | `source` |
| `ChangedDate` |  | |  | `as4date` |
| `ChangedBy` |  | |  | `as4user` |

## Source Code

*Source: [https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_cds.ddls.asddls](https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_cds.ddls.asddls)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ZSATPCDS'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Base view for CDS'

@VDM.private: true

define view ZSAT_P_Cds
  as select from    ddddlsrc             as Source

    left outer join ZSAT_I_DdlDependency as StructuredObject
      on Source.ddlname = StructuredObject.DdlName

    left outer join dd02b                as CdsEntityHeader
      on  StructuredObject.EntityName = CdsEntityHeader.strucobjn
      and CdsEntityHeader.as4local    = 'A'

{
  key Source.ddlname         as DdlName,

      cast(case
        when CdsEntityHeader.strucobjn is null then Source.ddlname
        else CdsEntityHeader.strucobjn
      end as ddstrucobjname) as EntityId,

      cast(case
        when CdsEntityHeader.strucobjn_raw is null then Source.ddlname
        else CdsEntityHeader.strucobjn_raw
      end as ddstrucobjname) as RawEntityId,

      cast(case
        when StructuredObject.ViewName is null then Source.ddlname
        else StructuredObject.ViewName
      end as ddstrucobjname) as ViewName,

      Source.parentname      as ParentDdlName,
      Source.source_type     as SourceType,
      Source.source          as DdlSource,
      Source.as4date         as ChangedDate,
      Source.as4user         as ChangedBy
}

where Source.as4local = 'A'
```
