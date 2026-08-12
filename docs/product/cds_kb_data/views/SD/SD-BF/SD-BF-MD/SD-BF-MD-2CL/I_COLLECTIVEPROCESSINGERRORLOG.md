---
name: I_COLLECTIVEPROCESSINGERRORLOG
description: "Collectiveprocessingerrorlog"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_COLLECTIVEPROCESSINGERRORLOG

**Collectiveprocessingerrorlog**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectiveProcessing` | ✓ | |  | `sammg` |  |  |
| `SDDocument` | ✓ | |  | `vbeln` |  |  |
| `SDDocumentItem` | ✓ | |  | `posnr` |  |  |
| `ScheduleLine` | ✓ | |  | `etenr` |  |  |
| `CollectiveProcessingMsgCounter` | ✓ | |  | `zaehl` |  |  |
| `SystemMessageIdentification` |  | |  | `msgid` |  |  |
| `SystemMessageNumber` |  | |  | `msgno` |  |  |
| `SystemMessageType` |  | |  | `msgty` |  |  |
| `SystemMessageVariable1` |  | |  | `msgv1` |  |  |
| `SystemMessageVariable2` |  | |  | `msgv2` |  |  |
| `SystemMessageVariable3` |  | |  | `msgv3` |  |  |
| `SystemMessageVariable4` |  | |  | `msgv4` |  |  |
| `CollectiveProcessingType` |  | |  | `smart` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISDCOLPROCERRLOG'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@EndUserText.label: 'Collective Processing Error Log'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_CollectiveProcessingErrorLog
  as select from vbfs
{

  key sammg as CollectiveProcessing,
  key vbeln as SDDocument,
  key posnr as SDDocumentItem,
  key etenr as ScheduleLine,
  key zaehl as CollectiveProcessingMsgCounter,

      msgid as SystemMessageIdentification,
      msgno as SystemMessageNumber,
      msgty as SystemMessageType,
      msgv1 as SystemMessageVariable1,
      msgv2 as SystemMessageVariable2,
      msgv3 as SystemMessageVariable3,
      msgv4 as SystemMessageVariable4,
      smart as CollectiveProcessingType

}
```
