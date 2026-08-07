---
name: I_CAOPENITEMLIST
description: Caopenitemlist
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOPENITEMLIST

**Caopenitemlist**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAOpenItemListUUID` | ✓ | |  | `guid` |  |  |
| `OpenItemKeyDate` | ✓ | |  | `keydate` |  |  |
| `CAOpenItemListName` |  | |  | `txt50` |  |  |
| `CAMassActivityType` |  | |  | `aktyp` |  |  |
| `CAMassRunDate` |  | |  | `laufd` |  |  |
| `CAMassRunID` |  | |  | `laufi` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDateTime` |  | |  | `cast(timestamp as timestampl)` |  |  |
| `TransactionCode` |  | |  | `tcode` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Contract Accounting Open Item List'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #L } }

@VDM.viewType: #BASIC

define view entity I_CAOpenItemList
  as select from dfkkop_listh
{
  key guid                          as CAOpenItemListUUID,
      keydate                       as OpenItemKeyDate,
      txt50                         as CAOpenItemListName,
      aktyp                         as CAMassActivityType,
      laufd                         as CAMassRunDate,
      laufi                         as CAMassRunID,
      ernam                         as CreatedByUser,
      cast(timestamp as timestampl) as CreationDateTime,
      tcode                         as TransactionCode
}
```
