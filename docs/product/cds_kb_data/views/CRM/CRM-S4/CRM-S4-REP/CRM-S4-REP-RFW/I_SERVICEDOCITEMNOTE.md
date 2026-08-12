---
name: I_SERVICEDOCITEMNOTE
description: "Service DocumentITEMNOTE"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - note
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMNOTE

**Service DocumentITEMNOTE**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TextObjectKey` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `TextObjectCategory` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ServiceDocumentItemUUID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `ServiceOrderNoteText` |  | | `_inotetemp` | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_inotetemp` | `crms4t_note_temp` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Document Item for Note'
@VDM: {
  viewType:  #COMPOSITE
//  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK


@ObjectModel:{
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #C,
  usageType.sizeCategory : #XL ,
  usageType.dataClass: #TRANSACTIONAL
}

//@Analytics.dataCategory: #DIMENSION

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceDocItemNote
  as select from    P_ServiceItemTextObject //I_TextObject - Note Changes
  //  left outer join crms4t_note_temp as _inotetemp on _inotetemp.id = '????' //this join should never satisfy the join condition. intention is to fetch an empty row with left outer join
 association [0..1] to crms4t_note_temp as _inotetemp on _inotetemp.id = '????'
{

      //I_TextObject
  key TextObjectKey,
  key TextObjectType,
  key TextObjectCategory,
  key Language,
      //hextobin( TextObjectKeyUUID ) as ServiceDocumentItemUUID,
      ServiceDocumentItemUUID,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      _inotetemp.text               as ServiceOrderNoteText,
      /* Associations */
      //I_TextObject
      _Language,
      _TextObjectCategory,
      _TextObjectType

}
where
  Language = $session.system_language
 // and TextObjectType = '0002'
```
