---
name: I_STATUSOBJECTSTATUSCHANGE
description: Statusobjectstatuschange
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_STATUSOBJECTSTATUSCHANGE

**Statusobjectstatuschange**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `StatusObject` | ✓ | |  | `objnr` |
| `StatusCode` | ✓ | |  | `stat` |
| `StatusObjectStatusChangeNumber` | ✓ | |  | `chgnr` |
| `LastChangedByUser` |  | |  | `usnam` |
| `LastChangeDate` |  | |  | `udate` |
| `LastChangeTime` |  | |  | `utime` |
| `ChangeTransactionCode` |  | |  | `cdtcode` |
| `StatusIsInactive` |  | |  | `inact` |
| `StatusChangeOperationCode` |  | |  | `chind` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISTATUSOBJSTSCHG'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ClientHandling.algorithm:#SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]

@EndUserText.label: 'Change Docs for System or User Status'
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'jcds',role:#MAIN,
                    viewElement:  ['StatusObject', 'StatusCode','StatusObjectStatusChangeNumber'],
                    tableElement: ['objnr', 'stat','chgnr']
                }
            ]
        }
    }
    }
define view I_StatusObjectStatusChange
  as select from jcds
{

  key objnr   as StatusObject,
  key stat    as StatusCode,
  key chgnr   as StatusObjectStatusChangeNumber,
      usnam   as LastChangedByUser,
      udate   as LastChangeDate,
      utime   as LastChangeTime,
      cdtcode as ChangeTransactionCode,
      @Semantics.booleanIndicator
      inact   as StatusIsInactive,
      chind   as StatusChangeOperationCode

}
```
