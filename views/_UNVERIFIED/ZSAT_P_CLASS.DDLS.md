---
name: ZSAT_P_CLASS.DDLS
description: ABAP OO Class/Interface
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_class.ddls.asddls
semantic_en: ABAP OO Class/Interface — CDS view based on seoclass.
semantic_vi: ABAP OO Class/Interface — CDS view dựa trên seoclass.
keywords:
  - abap
  - class/interface
  - class
  - tadir
  - type
  - category
  - exposure
  - state
tags:
  - AC
  - component:AC
---
# ZSAT_P_CLASS.DDLS

**ABAP OO Class/Interface**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_class.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `ClassName` | `ClassDef.clsname` |
| `TadirType` | `case when Class.clstype = '0' then 'CLAS' else 'INTF' end` |
| `Category` | `ClassDef.category` |
| `Exposure` | `ClassDef.exposure` |
| `State` | `ClassDef.state` |
| `CreatedBy` | `ClassDef.author` |
| `CreatedOn` | `ClassDef.createdon` |
| `ChangedBy` | `case when ClassDef.changedby <> '' then ClassDef.changedby else ClassDef.author end` |
| `ChangedOn` | `case when ClassDef.changedon <> '00000000' then ClassDef.changedon else ClassDef.createdon end` |
| `IsAbstract` | `ClassDef.clsabstrct` |
| `IsFinal` | `ClassDef.clsfinal` |
| `ReferencedObject` | `ClassDef.refclsname` |
| `HasFixPointArithmetic` | `ClassDef.fixpt` |
| `ABAPVersion` | `ClassDef.unicode` |
| `ProgramStatus` | `ClassDef.rstat` |
| `ReleaseNumber` | `ClassDef.r3release` |
| `MessageClass` | `ClassDef.msg_id` |
| `ProxyClassCategory` | `ClassDef.clsproxy` |
| `IsSharedMemoryEnabled` | `ClassDef.clssharedmemory` |
| `HasUnitTests` | `ClassDef.with_unit_tests` |
| `DurationType` | `ClassDef.duration_type` |
| `RiskLevel` | `ClassDef.risk_level` |
| `IsOpenedForPackage` | `ClassDef.within_package` |

## Source Code

*Source: [https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_class.ddls.asddls](https://github.com/DevEpos/abap-search-tools/blob/4f6d12c35a47d24d741b60fbeb228e132c4f303a/src/zsat_p_class.ddls.asddls)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ZSATPCLASS'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'ABAP OO Class/Interface'

define view ZSAT_P_Class
  as select from seoclass   as Class

    inner join   seoclassdf as ClassDef on Class.clsname = ClassDef.clsname

{
  key ClassDef.clsname         as ClassName,

      case
        when Class.clstype = '0' then 'CLAS'
        else                    'INTF'
      end                      as TadirType,

      ClassDef.category        as Category,
      ClassDef.exposure        as Exposure,
      ClassDef.state           as State,
      ClassDef.author          as CreatedBy,
      ClassDef.createdon       as CreatedOn,

      case
        when ClassDef.changedby <> '' then ClassDef.changedby
        else                               ClassDef.author
      end                      as ChangedBy,

      case
        when ClassDef.changedon <> '00000000' then ClassDef.changedon
        else                               ClassDef.createdon
      end                      as ChangedOn,

      ClassDef.clsabstrct      as IsAbstract,
      ClassDef.clsfinal        as IsFinal,
      ClassDef.refclsname      as ReferencedObject,
      ClassDef.fixpt           as HasFixPointArithmetic,
      ClassDef.unicode         as ABAPVersion,
      ClassDef.rstat           as ProgramStatus,
      ClassDef.r3release       as ReleaseNumber,
      ClassDef.msg_id          as MessageClass,
      ClassDef.clsproxy        as ProxyClassCategory,
      ClassDef.clssharedmemory as IsSharedMemoryEnabled,
      ClassDef.with_unit_tests as HasUnitTests,
      ClassDef.duration_type   as DurationType,
      ClassDef.risk_level      as RiskLevel,
      ClassDef.within_package  as IsOpenedForPackage
}

where ClassDef.version = '1' // only active classes
```
