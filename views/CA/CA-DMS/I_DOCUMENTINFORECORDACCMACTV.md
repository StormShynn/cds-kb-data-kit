---
name: I_DOCUMENTINFORECORDACCMACTV
description: "Documentinforecordaccmactv"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDACCMACTV

**Documentinforecordaccmactv**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectType` | ✓ | |  |  |  |  |
| `LogAccMObjectTypeIsActive` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCACCMACTV'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Document Info Record LogAccM Active'
define view I_DocumentInfoRecordAccMActv as select from I_LogAccMObjectTypeActive
{
  key LogAccMObjectType,
      LogAccMObjectTypeIsActive
}
```
